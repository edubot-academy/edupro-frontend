export function getUTMs() {
    const p = new URLSearchParams(window.location.search);
    const utm = {
        source: p.get("utm_source") || "",
        medium: p.get("utm_medium") || "",
        campaign: p.get("utm_campaign") || "",
        term: p.get("utm_term") || "",
        content: p.get("utm_content") || "",
    };
    try { sessionStorage.setItem("utm", JSON.stringify(utm)); } catch { }
    return utm;
}
export function readPersistedUTMs() {
    try { return JSON.parse(sessionStorage.getItem("utm")) || {}; } catch { return {}; }
}
