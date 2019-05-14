var menuButton = document.querySelector('.page-header__button--menu');
var menuList = document.querySelector('.main-nav');
var videoButton = document.querySelector('.products-manufacturing__video--button');
var videoBlock = document.querySelector('.products-manufacturing__video--youtube');
var videoBackground = document.querySelector('.products-manufacturing__video--background');

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuButton.classList.toggle("button-close");
});

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuList.classList.toggle("modal-show");
});

videoButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  videoBackground.classList.add("modal");
});


videoButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  videoBlock.classList.add("modal-show");
});

videoButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  videoButton.classList.add("modal");
});
