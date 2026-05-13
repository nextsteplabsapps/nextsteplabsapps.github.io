const revealNodes = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const demoCopy = {
  today: {
    title: "Today view",
    copy:
      "A calmer launch point for due tasks, urgent items, and small next steps across lists.",
  },
  plan: {
    title: "Plan Assist",
    copy:
      "Optional Plus AI support can turn a vague task into a smaller, reviewable sequence.",
  },
  settings: {
    title: "Settings",
    copy:
      "Privacy, Terms, Rate App, Share App, and App Version are available where testers expect them.",
  },
};

const demoTitle = document.querySelector("[data-demo-title]");
const demoText = document.querySelector("[data-demo-copy]");
const demoTabs = document.querySelectorAll("[data-demo-tab]");

demoTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.getAttribute("data-demo-tab");
    const next = demoCopy[key];

    if (!next || !demoTitle || !demoText) {
      return;
    }

    demoTabs.forEach((node) => {
      node.classList.toggle("is-active", node === tab);
      node.setAttribute("aria-selected", node === tab ? "true" : "false");
    });

    demoTitle.textContent = next.title;
    demoText.textContent = next.copy;
  });
});
