Here the backend is using express.js with Knex. I have installed express, knex, cors to execute this challenge. The Database I am using here MySQL.I have also used multer to upload the images of the books which is directly connecting with the database. Here I used the APIs:

#/books
get all the books, which will be displayed as a list in the platform. 

#/books/addBook
To add the books with all required fields. There are validations effected on those fields if those are not given by the user.
A certain validation is applied on ISBN format and Incorrect ISBN validation while put the ISBN number of the book.

#/book/searchBook
To search a book, any of the fields needs to be given, if no fields are given then it will generate a pop up message.
If a patial literals are given in any of the fields, it will show the results containing the partial literals.
I have kept the provision for the user if the exact string is not remembered, partially is given in the input field then it should give the lists which
contains the portion of the string.

Knex.js is a SQL query builder for Node.js, designed to work with multiple databases like PostgreSQL, MySQL, SQLite, and others. It helps developers write queries in JavaScript without having to write raw SQL, which makes it easier to build and manage queries across different database systems.



