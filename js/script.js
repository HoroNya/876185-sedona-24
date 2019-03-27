
  var popup = document.querySelector(".form-search");

  var link = document.querySelector(".search-button");

  popup.classList.add("form-search-none");

  link.addEventListener("click", function (evt) {

    popup.classList.remove("form-search-none");

});
