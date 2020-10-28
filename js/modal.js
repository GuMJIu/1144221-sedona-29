const search = document.querySelector(".search");
const modal = document.querySelector(".modal-in");
search.addEventListener("click", function (evt)
{
  evt.preventDefault();
  modal.classList.add("modal-show");
});
