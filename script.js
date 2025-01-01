function sidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.display = "flex";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.display = "block";
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.display = "none";
  let body = document.querySelector("body");
  body.style.overflow = "hidden";
}
function nosidebar() {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.display = "none";
  let sideblur = document.getElementsByClassName("sideblur")[0];
  sideblur.style.display = "none";
  let sidebarButton = document.getElementsByClassName("sidebar-on-button")[0];
  sidebarButton.style.display = "grid";
  let body = document.querySelector("body");
  body.style.overflow = "scroll";
}
