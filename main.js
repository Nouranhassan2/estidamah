document.addEventListener("DOMContentLoaded", () => {
  const figures = document.querySelectorAll("figure");
  const overlay = document.querySelector(".overlay");

  figures.forEach((figure) => {
    figure.addEventListener("click", () => {
      const targetId = figure.getAttribute("data-target");
      const popup = document.querySelector(targetId);

      overlay.style.display = "block";
      popup.style.display = "block";
    });
  });

  const closeIcons = document.querySelectorAll(".close-icon");
  closeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const popup = icon.closest(".popup-container");
      overlay.style.display = "none";
      popup.style.display = "none";
    });
  });

  overlay.addEventListener("click", () => {
    document.querySelectorAll(".popup-container").forEach((popup) => {
      popup.style.display = "none";
    });
    overlay.style.display = "none";
  });
});
