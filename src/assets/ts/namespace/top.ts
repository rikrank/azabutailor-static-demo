function Top() {
  const headerBtn = document.getElementById("js-header-btn");
  if (headerBtn) {
    headerBtn.addEventListener("click", () => {
      headerBtn.classList.toggle("is-open");
    });
  }
}
export { Top };
