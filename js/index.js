const toggleSidebars = document.querySelectorAll(".toogle-sidebar");
const mobileSidebar = document.querySelector(".mobile-sidebar");

toggleSidebars.forEach((toggleSidebar) => {
  toggleSidebar.addEventListener("click", (e) => {
    e.preventDefault();

    !mobileSidebar.classList.contains("active")
      ? mobileSidebar.classList.add("active")
      : mobileSidebar.classList.remove("active");
  });
});
