import BookService from "./services/BookService";

const bookService = new BookService();
 import {format} from "timeago.js";

class UI {
  async renderBooks() {
    const books = await bookService.getBooks();
    const booksCardContainer = document.querySelector("#books-cards");
    booksCardContainer.innerHTML = "";
    books.forEach((book) => {
      const div = document.createElement("div");
      div.className = "";
      div.innerHTML = `
		<div class="card m-2">
			<div class="row">
				<div class="col-md-4">
					<img src="${book.imagePath}" class="img-fluid" alt="">
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<div class="card-body px-2">
							<h5 class="card-title">${book.title}</h5>
							<p class="card-text"> ${book.author} </p>
							<a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
						</div>
						<div class="card-footer">
							${format(book.created_at)}
						</div>
					</div>
				</div>
			</div>
		</div>
	  `;
	  booksCardContainer.appendChild(div);
    });

    console.log("=>", books);
  }
  async addANewBook(book) {
    await bookService.postBook(book);
	this.clearBookForm();
	this.renderBooks();
  }
  clearBookForm() {
    document.querySelector("#book-form").reset();
  }
  renderMessage(message,colorMessage,secondsToRemove){
	 const div=document.createElement("div");
	 div.className=`alert alert-${colorMessage} message`;
	 div.appendChild(document.createTextNode(message));
	 
	 const container = document.querySelector(".messageState");
	 const bookForm = document.querySelector("#book-form");
	 container.insertBefore(div, bookForm)
	 
	 setTimeout(()=>{
		 document.querySelector(".message").remove()
	 },secondsToRemove)
	 
  }
  async deleteBook(bookId){
	  await bookService.deleteBook(bookId)
	  this.renderBooks();
  }
}
export default UI;
