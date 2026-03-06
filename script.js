const yearNode = document.getElementById("year");
if (yearNode) yearNode.textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const shape1 = document.querySelector(".bg-shape-1");
const shape2 = document.querySelector(".bg-shape-2");

window.addEventListener("pointermove", (event) => {
  if (!shape1 || !shape2) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;

  shape1.style.transform = `translate(${x}px, ${y}px)`;
  shape2.style.transform = `translate(${-x}px, ${-y}px)`;
});
