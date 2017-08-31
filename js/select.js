document.addEventListener("DOMContentLoaded", function() {
  let select = document.querySelector(".select");
  let options = document.querySelector(".options");
  options.style.top = select.offsetTop + select.offsetHeight - 2 + "px";
  options.style.width = select.offsetWidth + "px";
});
