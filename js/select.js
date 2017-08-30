var select = document.querySelector('.select');
var options = document.querySelector('.options');
options.style.top = select.offsetTop + select.offsetHeight - 2 + 'px';
options.style.width = select.offsetWidth + 'px';