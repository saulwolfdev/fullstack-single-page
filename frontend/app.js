
import("bootstrap");
import("animate.css");
require("./sass/main.scss");
 import UI from "./UI";

document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  const image = document.querySelector("#image").files;

  const formData = new FormData();
  formData.append("image", image[0]);
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);

  const ui=new UI();
  ui.addANewBook(formData); 
});
