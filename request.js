/* Contact form: messages are delivered by FormSubmit (formsubmit.co) to the owner's inbox.
   The address is stored encoded so it is not shown on the page. */
const TO = atob("c3Vyaml0LnNhaWtpYUBvdXRsb29rLmNvbQ==");

(() => {
  const f = document.getElementById("request");
  if (!f) return;
  const note = f.querySelector(".req-note"), btn = f.querySelector(".req-btn");
  const say = (t, ok) => { note.textContent = t; note.dataset.ok = ok ? "1" : "0"; };
  f.addEventListener("submit", async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    if (d._gotcha) return;
    if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message.trim() || !d.ok) { say("Please add your name, a valid email, a short message and tick the consent box.", false); return; }
    btn.disabled = true; say("Sending…", true);
    try {
      const r = await fetch("https://formsubmit.co/ajax/" + TO, {
        method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: d.name, email: d.email, company: d.company, service: d.service, message: d.message,
          _subject: "XR Dynamics Lab enquiry: " + d.service, _replyto: d.email, _template: "table", _captcha: "false" })
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || j.success === "false" || j.success === false) throw 0;
      f.reset(); say("Thank you. Your enquiry has been sent and I will reply by email.", true);
    } catch { say("Sorry, that did not send. Please try again in a moment.", false); }
    btn.disabled = false;
  });
})();
