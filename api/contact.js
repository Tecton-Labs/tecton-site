const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "tectonlabs.ca@gmail.com";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "TectonLabs <onboarding@resend.dev>";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

function json(response, statusCode, body) {
    response.statusCode = statusCode;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(body));
}

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

module.exports = async function handler(request, response) {
    if (request.method !== "POST") {
        response.setHeader("Allow", "POST");
        json(response, 405, { error: "Method not allowed" });
        return;
    }

    if (!RESEND_API_KEY) {
        json(response, 500, { error: "Email service is not configured" });
        return;
    }

    let body;

    try {
        body = typeof request.body === "object" && request.body !== null
            ? request.body
            : JSON.parse(request.body || "{}");
    } catch (error) {
        json(response, 400, { error: "Invalid JSON" });
        return;
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();
    const pageUrl = String(body.pageUrl || "").trim();
    const honeypot = String(body.website || "").trim();
    const submittedAt = new Date().toISOString();

    if (honeypot) {
        json(response, 200, { ok: true });
        return;
    }

    if (!name || !email || !isValidEmail(email) || !message) {
        json(response, 400, { error: "Invalid submission" });
        return;
    }

    const html = `
        <h1>New TectonLabs Consultation Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
        <hr>
        <p><strong>Submission timestamp:</strong> ${escapeHtml(submittedAt)}</p>
        <p><strong>Page URL:</strong> ${escapeHtml(pageUrl || "Not provided")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            from: CONTACT_FROM_EMAIL,
            to: CONTACT_TO_EMAIL,
            reply_to: email,
            subject: "New TectonLabs Consultation Request",
            html
        })
    });

    if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        json(response, 502, { error: "Email delivery failed", details: errorText });
        return;
    }

    json(response, 200, { ok: true, submittedAt });
};
