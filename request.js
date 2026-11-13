/* Request form. Set ONE of these:
   FORM_ENDPOINT: a Formspree (or similar) URL, e.g. "https://formspree.io/f/xxxxxxxx"  -> sends in the background
   REQUEST_EMAIL: an address                                                           -> opens the visitor's mail app */
const FORM_ENDPOINT = "";
const REQUEST_EMAIL = "";

(() => {
  const f = document.getElementById("request");
  if (!f) return;
  const note = f.querySelector(".req-note");
  const say = (t, ok) => { note.textContent = t; note.dataset.ok = ok ? "1" : "0"; };
  f.addEventListener("submit", async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    if (d._gotcha) return;
    if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message.trim()) { say("Please add your name, a valid email and a short message.", false); return; }
    const body = `Name: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nService: ${d.service}\nTimeline: ${d.timeline}\nBudget: ${d.budget}\n\n${d.message}`;
    if (FORM_ENDPOINT) {
      try {
        say("Sending…", true);
        const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify(d) });
        if (!r.ok) throw 0;
        f.reset(); say("Thank you. Your request is in, and I will reply by email.", true);
      } catch { say("Could not send. Please try again in a moment.", false); }
    } else if (REQUEST_EMAIL) {
      location.href = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent("Project request: " + d.service)}&body=${encodeURIComponent(body)}`;
      say("Your mail app should open with the request ready to send.", true);
    } else {
      say("The request form is not connected yet.", false);
    }
  });
})();
