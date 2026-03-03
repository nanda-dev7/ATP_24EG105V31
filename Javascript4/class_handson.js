/* Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books */

class Book{
    title;
    author;
    pages;
    isAvailable=true;
    // constructor 
    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable
    }
    /* borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise */
    borrow(title){
    if(this.isAvailable==true){
        return "Book is avaiable";
        
    }
    return "Book is not available";
    }
    returnBook(){
        
            return "Book is returned "
        
    }
getInfo(title,pages){
    console.log("The book is",this.title,"pages are",this.pages);
}
           isLongBook(pages){
           if(pages>300){
           return "True";
           }
           else
            return "False";
           } 
        }
let book1=new Book("Harry","JRR",310,"true")
let book2=new Book("GOT","George",1290,"false");
console.log(book1);
conso
  

    

