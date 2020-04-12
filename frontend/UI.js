 import BookService from "./services/BookService";

const bookService=new BookService();

class UI{
  renderBooks(){}

  async addANewBook(book){
	await bookService.postBook(book);
	this.clearBookForm();
  }
  clearBookForm(){
document.querySelector("#book-form").reset(); 
  }
  renderMessage(){}
  deleteBook(){}
}
export default UI;