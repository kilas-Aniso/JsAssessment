const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

    // Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(books){
let x = books.filter(books=>books.isAvailable);
return x
}
x=getAvailableBooks(books)
console.log(x)

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(authorName){
     return books.filter(book=>book.author===authorName)
}
console.log(getBooksByAuthor("Homer"))
// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
    // publicationYear, and isAvailable).
function addNewBook(newBook){
const properties =['title','author','publicationYear','isAvailable']
for (let i=0;i<properties.length;i++){
    const eachProperty=properties[i]
    if(!newBook.hasOwnProperty(eachProperty)){
      return "book does not have required property"
    }
    else{
        books.push(newBook)
        return books
    }
    
}
}
console.log(addNewBook({"title":"hello", "author":"cever", "publicationYear":2022, "isAvailable": true}))



// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(booktitle){
 let book = books.find(book=>book.title===booktitle)
 if (book){
    book.isAvailable=false
    return true
 }
else{
    return false
}
}
const check=checkoutBook('Great Expectations');
console.log(check)



// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(titlebook){
let book =books.find(book=>book.title==titlebook)
if (book){
    book.isAvailable = true
    return "Great Expectations is available now"
}
else{
    return "book does not belong here"
}
}

const returnedbooks=returnBook('Great Expectations')
console.log(returnedbooks)



