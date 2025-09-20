// src/lib/api.js
import { CONFIG } from "./config";

async function postJSON(url, body) {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    try { return await res.json(); } catch { return {}; }
}

export async function submitLead(payload) {
    const url = CONFIG.USE_FORMSPREE ? CONFIG.FORMSPREE_ENDPOINT : CONFIG.CRM_ENDPOINT;
    const body = CONFIG.USE_FORMSPREE ? { ...payload, _subject: "New EduPro Lead" } : payload;
    return postJSON(url, body);
}

// NEW: helper for contact form → maps to lead payload
export function submitContactMessage({ name, email, message }) {
    // Program isn’t chosen on contact, so use a generic slug
    return submitLead({
        fullName: name,
        email,
        phone: "",
        programSlug: "general",     // <- generic bucket
        studyMode: "online",        // <- required by DTO; any default OK
        notes: message,
        source: "contact_page",
        leadType: "contact",        // <- tells CRM this is from Contact page
    });
}
