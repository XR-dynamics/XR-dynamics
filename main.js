/* =====================================================================
   XR DYNAMICS — PORTFOLIO CONFIG
   Edit the CATEGORIES list below; everything else renders from it.

   Each project:
     name, description (lead line), explain (paragraph), tech (feature list)
     features (optional)  overrides the feature panel; tech then shows as pills
     badge:true           adds the UNREAL ENGINE badge
     link / linkLabel     button target (null = "Project not hosted" on click)
     soonLabel            replaces the button text and disables it
     videos: list of clips, each one of
        { mp4, poster, label }     local video  (assets/video/*.mp4)
        { drive, label }           Google Drive share link (set to "Anyone with the link")
        { image, label, alt }      still image     (add soon:"text" for a tag on top)
        { slides:[...], label }    slideshow
   ===================================================================== */
const D = id => `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const V = (name, label) => ({ mp4: `assets/video/${name}.mp4`, poster: `assets/poster/${name}.jpg`, label });

const CATEGORIES = [
  /* --------------------------------------------------------------- XR / VR
     VR projects listed again (refs point at the projects above by id). */
  {
    id: "xr-vr", title: "XR/VR",
    refs: ["vr-drone-cockpit", "vr-flight-control", "space-station", "teleoperation", "dexterous-teleoperation", "xr-vehicle", "xr-keypad"],
    projects: [
      {
        id: "xr-hand",
        name: "XR-Hand Interaction",
        videos: [
          { drive: D("1oO1HlS4X2-zaKDroDjpj-x6dZXU4AzEj"), label: "VR grab" },
          { drive: D("1jPPjp5t2ClBpTmdOhGW_wnuh8heItwB0"), label: "Physics hand" }
        ],
        description: "VR grabbing looks simple until you try to make it feel real: virtual hands that behave like real hands.",
        explain: "Moving beyond traditional grab-and-attach interactions, using Meta XR Hand Tracking so that objects respond to the hands through physics. The challenge is balancing physics accuracy, stability and real-time VR performance. Still experimenting, testing and improving.",
        tech: ["Meta XR Hand Tracking", "Physics-Based Grabbing", "Unreal Engine 5", "Meta Quest 2 / 3", "C++"],
        badge: true, link: null
      }
    ]
  },

  /* ------------------------------------------------------------ ROBOTICS */
  {
    id: "robotics", title: "Robotics",
    projects: [
      {
        id: "physical-ai",
        name: "Physical AI Simulation",
        videos: [
          { drive: D("1cVFG8WzHtzukPZVMValO16xI6PgRUE5t"), label: "Physical AI Gym" },
          { drive: D("15MAT5rJu8l7O7wZy522v2h_79KndFe_P"), label: "Physics Simulation 01" },
          { drive: D("16Yu1kFCJESCnyLA3o7ElbS2UpScsxNbu"), label: "Physics Simulation 02" }
        ],
        description: "Physics, sensors and reinforcement learning in Unreal Engine, for training and testing intelligent robotic systems.",
        explain: "Sensor simulation provides the perception layer, and physics-based robots learn control policies through reinforcement learning in the same environment, before they meet real hardware.",
        tech: ["Unreal Engine 5", "Sensor Simulation", "Reinforcement Learning", "Robotics", "Python"],
        badge: true, linkLabel: "View on Fab",
        link: "https://www.fab.com/listings/c172b7cc-627b-4665-a35b-3af1f253486c"
      },
      {
        id: "teleoperation",
        name: "XR Robot Teleoperation",
        videos: [
          { drive: D("1auHKqmb_3pX6-CcGPUCrzURR-o_vmsER"), label: "Teleoperation 01" },
          { drive: D("12_1O5sF2GrRqA3nxrhUArN7XnZH3z5mO"), label: "Teleoperation 02" }
        ],
        description: "XR-controlled robotics: an operator drives a real humanoid robot through a headset for warehouse operation.",
        explain: "Teleoperation dynamics of real humanoid robots: head and hand motion from Meta Quest 2 and Meta Quest 3 is mapped to the robot's body and arms, so one operator can handle warehouse tasks such as picking, carrying and placing. Experiments cover control response, latency and stability on the real machine.",
        tech: ["Meta Quest 2 / 3", "Humanoid Robots", "Warehouse Automation", "ROS 2", "Python"],
        link: null
      },
      {
        id: "dexterous-teleoperation",
        name: "Dexterous Teleoperation",
        videos: [
          { drive: D("1FOTBxnNngUYJk-DSxXA9gC8yhTWqyl16"), label: "Dexterous Teleoperation" },
          { drive: D("1vmRYNudguLOO_R8Z1Q4nknEGmol8VhfK"), label: "Dexterous 01" },
          { drive: D("1XhelwKwoSRyTek3e2uUjMV487Ms9RCpv"), label: "Dexterous 02" }
        ],
        description: "Hand-level XR teleoperation: the operator's hands drive a robot for precise manipulation.",
        explain: "Hand and finger motion from Meta Quest 2 and Meta Quest 3 is mapped to the robot's arms and hands, so one operator can handle fine manipulation tasks such as picking, carrying and placing on the real machine.",
        tech: ["Meta Quest 2 / 3", "Hand Tracking", "Humanoid Robots", "ROS 2", "Python"],
        link: null
      },
      {
        id: "xr-keypad",
        name: "XR-Keypad",
        videos: [{ image: "assets/tabs/xr-keypad.jpg", label: "Ready-to-run demo map", alt: "XR-Keypad demo map: a secure access terminal with two floating keypads" }],
        description: "A hand-tracked XR keypad plugin for Unreal Engine 5.8, delivered with a ready-to-run demo map.",
        explain: "Poke or pinch the keys with your hands, point with a ray, or use controllers and mouse, then grab the handle to move the keypad. The demo is a secure access terminal where you enter a code and a name, and switch layouts, themes and colors live.",
        tech: ["Unreal Engine 5.8", "Hand Tracking", "Controllers", "Blueprint + C++", "XR Input"],
        badge: true, linkLabel: "View on Fab",
        link: "https://www.fab.com/listings/28274d1c-dfe2-44cf-a471-12638ffcfc6f"
      }
    ]
  },

  /* ------------------------------------------------------------- VEHICLE */
  {
    id: "vehicle", title: "Vehicle",
    projects: [
      {
        id: "vehicle-dynamics",
        name: "Vehicle Dynamics",
        videos: [
          { drive: D("1D3R4ixz7J1wrKvfpiLh5fyy_gbX7LJaa"), label: "Plugin demo" },
          { drive: D("1DMjUeLv4TKjiF2ibiU8_kPg_hNaOXxUJ"), label: "Driving 01" },
          { drive: D("1XJLs-0gORGoiUDGmrtlSvhWMNVF8OM32"), label: "Driving 02" },
          { drive: D("1YfiNn-AmFuifenn84SmFhLRVKYZ91Qot"), label: "Physics Simulation 03" }
        ],
        description: "Driving on a physics-based vehicle model with suspension, tires, drivetrain and aerodynamics.",
        explain: "Vehicle dynamics: weight transfer, tire slip, suspension travel and drivetrain torque shape how the car accelerates, brakes and corners,.",
        features: ["Driving physics", "Customization", "Dynamic lighting", "Tire smoke", "Dust & water", "Interactive HUD", "Sensors integrated", "Reinforcement learning", "C++"],
        tech: ["Unreal Engine 5", "Chaos Physics", "Sensor Simulation", "Reinforcement Learning", "C++"],
        badge: true, linkLabel: "Explore Plugin",
        link: "https://www.fab.com/listings/86e8e62b-caf1-4cb6-a589-7d7cf601143f"
      },
      {
        id: "xr-vehicle",
        name: "XR-Vehicle",
        videos: [{ image: "assets/xr-vehicle.jpg", label: "XR-Vehicle", alt: "XR-Vehicle: a black sports car rendered as a particle wireframe next to an engineer in a VR headset", soon: "Coming soon" }],
        description: "A new XR vehicle experience, currently in development.",
        explain: "Details, demo footage and the Fab listing will be published here once the project is ready.",
        tech: ["Unreal Engine 5", "Meta Quest 2 / 3", "XR Driving", "In development"],
        badge: true, soonLabel: "Coming soon", link: null
      }
    ]
  },

  /* ----------------------------------------------------------- AEROSPACE */
  {
    id: "aerospace", title: "Aerospace",
    projects: [
      {
        id: "flight-dynamics",
        name: "Flight Dynamics",
        videos: [
          { drive: D("1gJ1XSkXRFFV7zPsfLpTJiy8rxKJ9wnwn"), label: "Plugin demo" },
          { image: "cover.jpg", label: "Overview", alt: "Flight Dynamics plugin cover: a fighter jet taking off with afterburner on a dark runway" }
        ],
        description: "A physics-based flight dynamics plugin for Unreal Engine 5.5 to 5.8, with real lift, drag and thrust simulated in the Chaos physics engine.",
        explain: "Realistic physics across the entire speed and altitude range, from runway take-off to landing. Advanced fly-by-wire keeps the aircraft inside its flight envelope while control surfaces follow the flight computer. Includes retractable landing gear, a feature-rich HUD (airspeed, Mach, G, angle of attack, altitude, vertical speed, thrust), three camera modes and an afterburner plume.",
        tech: ["Unreal Engine 5.5 - 5.8", "Chaos Physics", "Fly-by-Wire", "Reinforcement Learning", "C++", "Flight Dynamics"],
        badge: true, linkLabel: "View on Fab",
        link: "https://www.fab.com/listings/ab848d4b-a42d-4d9b-9f28-c72ceada449b"
      },
      {
        id: "vr-drone-cockpit",
        name: "VR-Drone Cockpit",
        videos: [
          { drive: D("1-cokFPFdPUAgeDAD6TWgYU15mK9q3Sgo"), label: "VR drone" },
          { image: "assets/tabs/vr-drone-cockpit.jpg", label: "Overview", alt: "VR-Drone Cockpit: a gloved hand touching the glass flight display of a VTOL drone cockpit" }
        ],
        description: "A VR cockpit for VTOL drones in Unreal Engine 5.8, flown with your hands on a touch flight display.",
        explain: "A glass cockpit with an attitude indicator and live telemetry: altitude, ground speed, vertical speed, pitch, roll, thrust-to-weight and load, plus per-rotor output for H1 to H4.",
        tech: ["Unreal Engine 5.8", "VR Cockpit", "VTOL", "Telemetry HUD", "Hand Interaction"],
        badge: true, linkLabel: "View on Fab",
        link: "https://www.fab.com/listings/fff21d70-c83f-4411-ad23-cbed73a1895c"
      },
      {
        id: "vr-flight-control",
        name: "VR Flight Control",
        videos: [
          { drive: D("18yAsmyGg-V0Dl_wE2ex9gA__Y7m1wF_Z"), label: "VR flight" },
          { drive: D("1FySv33YDpeFj6nYDj_9p9xyYhpNBCROk"), label: "Cockpit 01" },
          { drive: D("1WKge83s7ZWFLK5QQ7wHg3SJ0yMPHQThu"), label: "Cockpit 02" }
        ],
        description: "Immersive aircraft control in VR, where the pilot's hands drive the stick and throttle of a physically simulated cockpit.",
        explain: "Flight dynamics: a six-degree-of-freedom aircraft model combines lift, drag, thrust and control-surface moments, so pitch, roll and yaw respond to real stick and throttle input. Experiments were run on Meta Quest 2 and Meta Quest 3.",
        tech: ["Meta Quest 2 / 3", "Unreal Engine 5", "OpenXR", "C++", "Flight Dynamics"],
        link: null
      },
      {
        id: "space-station",
        name: "VR-Space Station",
        videos: [
          { drive: D("1gDw_zs-Ax0iemvYCm1lF3abyFGUusZr8"), label: "Station 01" },
          { drive: D("176CmRi6BICqlwTMlddwWWMP3Aer3GsnD"), label: "Station 02" }
        ],
        description: "A modular VR space station template for building immersive space simulations and VR games.",
        explain: "Optimized VR controls in a sci-fi station with emissive and metallic materials, transparent glass surfaces and Niagara-animated elements, ready to customize in Unreal Engine.",
        tech: ["Meta Quest 2 / 3", "Unreal Engine 5", "OpenXR", "Niagara", "VR Template"],
        badge: true, linkLabel: "View on Fab",
        link: "https://www.fab.com/listings/2fe19cdf-d7ae-4ebb-a93a-5735a8c1915e"
      }
    ]
  }
];

/* resolve cross-category references (same project shown in two tabs) */
CATEGORIES.forEach(c => c.projects.forEach(p => { if (!p._home) p._home = c.id; }));
const ALL = {};
CATEGORIES.forEach(c => c.projects.forEach(p => { ALL[p.id] = p; }));
CATEGORIES.forEach(c => { if (c.refs) c.projects = c.projects.concat(c.refs.map(id => ALL[id])); });

/* ===================================================================== */

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pad = n => String(n).padStart(2, "0");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

function driveEmbed(input) {
  const m = String(input || "").match(/\/d\/([\w-]+)/) || String(input || "").match(/[?&]id=([\w-]+)/);
  return m ? `https://drive.google.com/file/d/${m[1]}/preview` : null;
}

/* ---------- feature icons (24px line icons, picked by keyword) ---------- */
const ICONS = {
  wheel:   '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 14v7M10.2 11L3.5 9M13.8 11l6.7-2"/>',
  sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  sun:     '<circle cx="12" cy="12" r="3.6"/><path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M5.6 18.4l1.7-1.7M16.7 7.3l1.7-1.7"/>',
  cloud:   '<path d="M7 18a4 4 0 0 1-.6-7.9A5.5 5.5 0 0 1 17 8.6 4.7 4.7 0 0 1 17.5 18z"/>',
  drop:    '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  frame:   '<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',
  headset: '<path d="M3 9.5C3 8.7 3.7 8 4.5 8h15c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-4l-1.5-2.5h-4L8.5 17h-4C3.7 17 3 16.3 3 15.5z"/>',
  cube:    '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
  orbit:   '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/>',
  code:    '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"/>',
  robot:   '<rect x="5" y="8" width="14" height="10" rx="2.5"/><path d="M12 8V4M9 13h.01M15 13h.01M9 21v-3M15 21v-3"/>',
  box:     '<path d="M4 7h16v13H4zM3 4h18v3H3zM10 11h4"/>',
  nodes:   '<circle cx="5" cy="6" r="1.8"/><circle cx="5" cy="18" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="6" r="1.8"/><circle cx="19" cy="18" r="1.8"/><path d="M6.6 7l4 4M6.6 17l4-4M13.6 11l4-4M13.6 13l4 4"/>',
  radar:   '<path d="M12 21a9 9 0 1 1 9-9"/><path d="M12 12l6-6"/><circle cx="12" cy="12" r="1.2"/>',
  plane:   '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>',
  gauge:   '<path d="M4 17a8 8 0 1 1 16 0"/><path d="M12 17l3.5-4.5M8 20.5h8"/>',
  hand:    '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 10V4.5a1.5 1.5 0 0 1 3 0V11M14 10.5V6.5a1.5 1.5 0 0 1 3 0V15c0 3.6-2.4 6-5.6 6-2.4 0-3.9-1-5.2-3.2L3.6 13a1.5 1.5 0 0 1 2.4-1.7L8 13.5"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
  diamond: '<path d="M12 3l9 9-9 9-9-9z"/>'
};
const ICON_RULES = [
  [/driving|wheel|tire.*slip/i, "wheel"], [/custom/i, "sliders"], [/fly|flight|vtol/i, "plane"], [/light/i, "sun"], [/smoke/i, "cloud"],
  [/dust|water/i, "drop"], [/hud|telemetry/i, "frame"], [/quest|headset|openxr|xr input|xr driving|vr cockpit|vr template/i, "headset"],
  [/unreal/i, "cube"], [/chaos|physics/i, "orbit"], [/c\+\+|python|ros|blueprint/i, "code"], [/humanoid|robot/i, "robot"],
  [/warehouse/i, "box"], [/reinforcement|learning/i, "nodes"], [/sensor/i, "radar"],
  [/cockpit/i, "gauge"], [/hand|controller|pinch|interaction/i, "hand"], [/niagara|development/i, "sparkle"]
];
const iconFor = t => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${
  ICONS[(ICON_RULES.find(([re]) => re.test(t)) || [0, "diamond"])[1]]}</svg>`;

const UE = `<span class="ue"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10.5 9.5v7.2c0 3.2 2.2 5.3 5.5 5.3s5.5-2.1 5.5-5.3V9.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>UNREAL ENGINE</span>`;
const ARROW = `<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M1.5 7h10M7.5 3l4 4-4 4"/></svg>`;
const CORNERS = `<div class="corners" aria-hidden="true"><i></i><i></i><i></i><i></i></div>`;

/* ---------- render ---------- */
function projectHTML(p, i, total, cid) {
  const feats = p.features || p.tech;
  const chips = p.videos.length > 1
    ? `<div class="chips" role="tablist" aria-label="${esc(p.name)} clips">${p.videos.map((v, k) =>
        `<button type="button" class="chip${k ? "" : " on"}" role="tab" aria-selected="${k ? "false" : "true"}" data-k="${k}"><i>${pad(k + 1)}</i>${esc(v.label || "Demo " + pad(k + 1))}</button>`).join("")}</div>`
    : "";
  const btn = p.link
    ? `<a class="explore-btn" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel || "View Project")}${ARROW}</a>`
    : p.soonLabel
      ? `<span class="explore-btn disabled">${esc(p.soonLabel)}</span>`
      : `<button type="button" class="explore-btn not-hosted" aria-live="polite">View Project${ARROW}</button>`;
  return `
  <article class="project" id="${esc(p._home === cid ? p.id : cid + "-" + p.id)}" data-cat="${esc(cid)}">
    <div class="project-head">
      <h3 class="project-name"><span class="num">${pad(i + 1)}</span><span class="slash">/</span><span class="nm">${esc(p.name)}</span></h3>
      ${p.badge ? UE : ""}
    </div>
    <div class="project-grid">
      <div class="stage" data-p="${esc(p.id)}"><div class="media"></div>${CORNERS}</div>
      ${chips}
      <aside class="features" aria-label="${esc(p.name)} key features">
        <h4>KEY FEATURES</h4>
        <ul>${feats.map(f => `<li>${iconFor(f)}<span>${esc(f)}</span></li>`).join("")}</ul>
      </aside>
    </div>
    <div class="project-foot">
      <p class="lead">${esc(p.description)}</p>
      ${btn}
    </div>
    <p class="explain">${esc(p.explain)}</p>
    ${p.features ? `<ul class="tech">${p.tech.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
  </article>`;
}

const PBYID = {};
CATEGORIES.forEach(c => c.projects.forEach(p => { if (p._home === c.id) PBYID[p.id] = { p, cid: c.id }; }));

document.getElementById("catTabs").innerHTML =
  CATEGORIES.map((c, k) => `${k ? '<span class="sep" aria-hidden="true"></span>' : ""}<button type="button" class="cat-tab" role="tab" id="tab-${c.id}" aria-controls="panel-${c.id}" data-cat="${c.id}">${esc(c.title)}</button>`).join("")
  + '<span class="ink" id="catInk"></span>';
document.getElementById("panels").innerHTML = CATEGORIES.map(c =>
  `<div class="panel" id="panel-${c.id}" role="tabpanel" aria-labelledby="tab-${c.id}" hidden>${
    c.projects.map((p, i) => projectHTML(p, i, c.projects.length, c.id)).join("")}</div>`).join("");

/* ---------- stages: lazy mount, pause/unload on leave ---------- */
const stages = new Map();          // element -> state
document.querySelectorAll(".stage").forEach(el => {
  const { p } = PBYID[el.dataset.p];
  stages.set(el, { el, p, k: 0, mounted: false, cleanup: null, article: el.closest(".project") });
});

function makeSlideshow(media, slides, name) {
  media.classList.add("slideshow");
  media.innerHTML = slides.map((u, n) => `<img src="${esc(u)}" alt="${esc(name)} screenshot ${n + 1} of ${slides.length}" ${n ? 'loading="lazy"' : ""}>`).join("")
    + `<button type="button" class="ss-btn prev" aria-label="Previous image">&#8249;</button><button type="button" class="ss-btn next" aria-label="Next image">&#8250;</button><span class="ss-count"></span>`;
  const imgs = [...media.querySelectorAll("img")], count = media.querySelector(".ss-count");
  let i = 0, timer = null;
  const show = n => { i = (n + imgs.length) % imgs.length; imgs.forEach((s, k) => s.classList.toggle("on", k === i)); count.textContent = `${pad(i + 1)} / ${pad(imgs.length)}`; };
  const stop = () => { clearInterval(timer); timer = null; };
  const play = () => { if (!reduce && !timer) timer = setInterval(() => show(i + 1), 3500); };
  media.querySelector(".prev").addEventListener("click", () => { show(i - 1); stop(); play(); });
  media.querySelector(".next").addEventListener("click", () => { show(i + 1); stop(); play(); });
  media.addEventListener("mouseenter", stop); media.addEventListener("mouseleave", play);
  show(0); play();
  return stop;
}

function unmount(s) {
  if (!s.mounted) return;
  const media = s.el.querySelector(".media");
  media.querySelectorAll("video").forEach(v => v.pause());
  if (s.cleanup) { s.cleanup(); s.cleanup = null; }
  // iframes (Google Drive) cannot be paused from outside: removing them stops playback
  if (media.querySelector("iframe")) { media.innerHTML = ""; s.mounted = false; }
}

function mount(s) {
  const clip = s.p.videos[s.k], media = s.el.querySelector(".media");
  if (s.mounted) return;
  media.className = "media"; media.innerHTML = "";
  if (clip.mp4) {
    media.innerHTML = `<video controls playsinline preload="metadata" poster="${esc(clip.poster || "")}" aria-label="${esc(s.p.name)}: ${esc(clip.label || "demo")}"><source src="${esc(clip.mp4)}" type="video/mp4"></video>`;
  } else if (clip.drive) {
    const src = driveEmbed(clip.drive);
    media.innerHTML = src ? `<iframe src="${esc(src)}" title="${esc(s.p.name)} ${esc(clip.label || "demo")}" allow="autoplay; fullscreen" allowfullscreen></iframe>`
      : `<div class="video-empty"><div class="play"></div><span>VIDEO COMING SOON</span></div>`;
  } else if (clip.image) {
    media.innerHTML = `<img class="cover-img" src="${esc(clip.image)}" alt="${esc(clip.alt || s.p.name)}">${clip.soon ? `<span class="soon-tag">${esc(clip.soon)}</span>` : ""}`;
  } else if (clip.slides) {
    s.cleanup = makeSlideshow(media, clip.slides, s.p.name);
  }
  s.mounted = true;
}

function pauseStage(s) { s.el.querySelectorAll("video").forEach(v => v.pause()); }

const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
  const s = stages.get(e.target);
  if (e.isIntersecting) mount(s);
  else { pauseStage(s); unmount(s); }
}), { rootMargin: "300px 0px" }) : null;
stages.forEach(s => io ? io.observe(s.el) : mount(s));

/* clip chips */
document.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  const art = chip.closest(".project"), s = [...stages.values()].find(x => x.article === art);
  const k = Number(chip.dataset.k);
  if (k === s.k && s.mounted) return;
  pauseStage(s); if (s.cleanup) { s.cleanup(); s.cleanup = null; }
  s.mounted = false; s.k = k;
  art.querySelectorAll(".chip").forEach(c => { const on = c === chip; c.classList.toggle("on", on); c.setAttribute("aria-selected", on); });
  const media = s.el.querySelector(".media");
  media.classList.add("swap");
  setTimeout(() => { mount(s); media.classList.remove("swap"); }, reduce ? 0 : 160);
});

/* "Project not hosted" notice */
document.addEventListener("click", e => {
  const b = e.target.closest(".not-hosted");
  if (!b) return;
  const html = b.innerHTML;
  b.textContent = "Project not hosted"; b.classList.add("off");
  clearTimeout(b._t);
  b._t = setTimeout(() => { b.innerHTML = html; b.classList.remove("off"); }, 2500);
});

/* ---------- scroll reveal ---------- */
document.documentElement.classList.add("js");
const revealIO = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
}), { threshold: 0.08 }) : null;
document.querySelectorAll(".project,.stats,.stats div,.projects-head").forEach(i => revealIO ? revealIO.observe(i) : i.classList.add("in"));

/* ---------- category tabs ---------- */
const tabsEl = document.getElementById("catTabs"), ink = document.getElementById("catInk");
const tabBtns = [...tabsEl.querySelectorAll(".cat-tab")];
const panels = Object.fromEntries(CATEGORIES.map(c => [c.id, document.getElementById(`panel-${c.id}`)]));
let current = null, busy = null;

function moveInk() {
  const b = tabBtns.find(t => t.dataset.cat === current);
  if (!b) return;
  ink.style.width = `${b.offsetWidth}px`;
  ink.style.transform = `translateX(${b.offsetLeft}px)`;
}
function scrollToTabs(smooth) {
  const hh = document.getElementById("siteHeader").offsetHeight, nav = document.getElementById("catNav");
  const top = document.getElementById("panels").getBoundingClientRect().top + scrollY - hh - nav.offsetHeight - 24;
  if (scrollY > top) scrollTo({ top, behavior: smooth && !reduce ? "smooth" : "auto" });
}

function activate(id, opts = {}) {
  if (!panels[id] || id === current) return;
  const prev = current ? panels[current] : null, next = panels[id];
  current = id;
  tabBtns.forEach(t => { const on = t.dataset.cat === id; t.classList.toggle("on", on); t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1; });
  moveInk();
  if (opts.hash !== false) history.replaceState(null, "", `#${id}`);
  clearTimeout(busy);
  const show = () => {
    next.hidden = false;
    next.classList.remove("in");
    void next.offsetWidth;
    next.classList.add("in");
    next.querySelectorAll(".stage").forEach(el => io && (io.unobserve(el), io.observe(el)));   // re-evaluate lazy mount
    if (opts.scroll !== false) scrollToTabs(true);
  };
  if (prev) {
    prev.classList.remove("in");
    prev.querySelectorAll(".stage").forEach(el => { const s = stages.get(el); pauseStage(s); unmount(s); });   // stop playback
    busy = setTimeout(() => { prev.hidden = true; show(); }, reduce || opts.instant ? 0 : 220);
  } else show();
}

tabBtns.forEach((b, k) => {
  b.addEventListener("click", () => activate(b.dataset.cat));
  b.addEventListener("keydown", e => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    const n = tabBtns[(k + d + tabBtns.length) % tabBtns.length]; n.focus(); activate(n.dataset.cat); e.preventDefault();
  });
});
addEventListener("resize", moveInk);
document.fonts && document.fonts.ready.then(moveInk);

/* deep links: #vehicle, #flight-dynamics ... and old project anchors */
function fromHash(first) {
  const h = decodeURIComponent(location.hash.slice(1));
  if (panels[h]) { activate(h, { hash: false, scroll: !first }); if (!first) return; }
  else if (PBYID[h]) {
    activate(PBYID[h].cid, { hash: false, scroll: false, instant: true });
    setTimeout(() => document.getElementById(h).scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }), 260);
    return;
  }
  if (first && !current) activate(CATEGORIES[0].id, { hash: false, scroll: false });
  if (first && panels[h] && location.hash) setTimeout(() => document.getElementById("projects").scrollIntoView({ behavior: "auto" }), 50);
}
fromHash(true);
addEventListener("hashchange", () => fromHash(false));

/* header gets a solid blur once you leave the hero */
const hdr = document.getElementById("siteHeader");
const onScroll = () => hdr.classList.toggle("solid", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true }); onScroll();

/* pause everything when the tab is hidden */
document.addEventListener("visibilitychange", () => { if (document.hidden) stages.forEach(pauseStage); });


/* ---------- Unreal Engine orb: drifting neon particles ---------- */
(function () {
  const cv = document.getElementById("ueFx");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  let W = 0, H = 0, dpr = 1, raf = 0, parts = [], last = 0;
  const COLORS = ["127,252,244", "55,224,160", "58,160,255", "255,255,255"];
  const size = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    const r = cv.getBoundingClientRect(); W = r.width; H = r.height;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const spawn = (fresh) => {
    const a = Math.random() * Math.PI * 2, base = Math.min(W, H) * (0.19 + Math.random() * 0.05);
    return { a, r: base, sp: 4 + Math.random() * 9, spin: (Math.random() - 0.5) * 0.5, s: 0.5 + Math.random() * 1.0,
      life: fresh ? Math.random() * 3 : 0, max: 2.2 + Math.random() * 2.6, c: COLORS[(Math.random() * COLORS.length) | 0] };
  };
  const init = () => { size(); parts = Array.from({ length: 36 }, () => spawn(true)); };
  const frame = t => {
    const dt = Math.min(0.05, (t - last) / 1000 || 0.016); last = t;
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      p.life += dt; p.r += p.sp * dt; p.a += p.spin * dt;
      if (p.life > p.max) { parts[i] = spawn(false); continue; }
      const k = p.life / p.max, alpha = Math.sin(Math.PI * k) * 0.9;
      const x = W / 2 + Math.cos(p.a) * p.r, y = H / 2 + Math.sin(p.a) * p.r * 0.95;
      const g = ctx.createRadialGradient(x, y, 0, x, y, p.s * 3.2);
      g.addColorStop(0, `rgba(${p.c},${alpha})`); g.addColorStop(1, `rgba(${p.c},0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, p.s * 3.2, 0, 6.2832); ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  };
  init(); addEventListener("resize", init);
  if (reduce) { frame(0); cancelAnimationFrame(raf); return; }
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }
      else { cancelAnimationFrame(raf); raf = 0; }
    })).observe(cv);
  } else raf = requestAnimationFrame(frame);
})();
