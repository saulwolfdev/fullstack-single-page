
class BookService{
    constructor(){
        this.URI = "/api/book";
    }
    
    async getBooks(){
        const response=await fetch(this.URI);
        const books=await response.json();
        console.log("get=>", books); 
        return books;
    }
    async postBook(book){
        const response=await fetch(this.URI,{
            method:"POST",
            body:book 
        })
        const data=await response.json()
         console.log("post=>", data);  
    }
    async deleteBook(bookId){
        const response=await fetch(`${this.URI}/${bookId}`, {
            headers:{
                "Content-Type":"application/json"
            },
            method: "DELETE",
        });
       const data = await response.json();
       console.log("delete=>",data) 
    }
}
module.exports=BookService;