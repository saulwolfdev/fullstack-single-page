import("bootstrap");
import("animate.css");
require("./sass/main.scss");
import UI from "./UI";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.renderBooks();
});

document.querySelector("#book-form").addEventListener("submit", (e) => {
  
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  const image = document.querySelector("#image").files;

  const formData = new FormData();
  formData.append("image", image[0]);
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);

  const ui = new UI();
  ui.addANewBook(formData);
  ui.renderMessage("New book added","success",3000);
  e.preventDefault();
});

document.querySelector("#books-cards")
        .addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const ui =new UI();
    ui.deleteBook( e.target.getAttribute("_id"));
    ui.renderMessage("Book removed", "danger",3000);
    // console.log("deleting", e.target.getAttribute("_id"));
  }
  e.preventDefault();
});
