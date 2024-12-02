________________________________________
Project Description<br>
The Student Management Web Application is a simple CRUD (Create, Read, Update, Delete) system for managing student data. The application allows users to:<br>
•	Add new students<br>
•	View all students<br>
•	Update student details<br>
•	Delete students<br>
The project is built with:<br>
•	Frontend: HTML, CSS, JavaScript<br>
•	Backend: Node.js, Express.js<br>
•	Database: MySQL<br>
________________________________________
Setup and Running the Project Locally
Prerequisites
•	Node.js: Install Node.js.
•	MySQL: Install MySQL.
•	Git: Install Git.
________________________________________
Steps to Set Up
1.	Clone the Repository
First, clone the zip repository to your local machine

Bash
cd student-management
2.	Set Up the MySQL Database
o	Open your MySQL client or terminal.
o	Create a database named school:
SQL
CREATE DATABASE school;
o	Use the following schema to create the students table:
SQL
USE school;
CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, age INT NOT NULL, grade VARCHAR(50) NOT NULL, email VARCHAR(255) NOT NULL);
3.	Configure the Database
o	Open the db.js file and update the database configuration:
JavaScript
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',  // Replace with your MySQL username
  password: 'your-password',  // Replace with your MySQL password
  database: 'school',
});
4.	Install Dependencies
o	Navigate to the project folder and install dependencies:
bash
npm install express mysql2 body-parser
npm install --save-dev nodemon
npm install cors
5.	Start the Server
o	Run the server:
bash
node server.js
o	The server will run on http://localhost:3000.
6.	Run the Frontend
o	Open index.html in your browser using a live server (e.g., Live Server extension).
________________________________________
API Documentation
Base URL
bash
http://localhost:3000/students
________________________________________
1. Create a Student
Endpoint: POST /students
Description: Add a new student to the database.
Request Body:
Json
{
  "name": "Amar",
  "age": 20,
  "grade": "A",
  "email": "amar@example.com"
}
Response:
•	201 Created:
Json
{
  "message": "Student created successfully",
  "studentId": 1
}
•	400 Bad Request:
Json
{ "message": "All fields are required." }
________________________________________
2. Get All Students
Endpoint: GET /students
Description: Fetch all students from the database.
Response:
•	200 OK:
Json
[
  {
    "id": 1,
    "name": "Raja",
    "age": 20,
    "grade": "A",
    "email": "raja@example.com"
  },
  {
    "id": 2,
    "name": "Ram",
    "age": 22,
    "grade": "B",
    "email": "ram@example.com"
  }
]
•	500 Internal Server Error:
Json
{ "message": "Error fetching students" }
________________________________________
3. Get a Single Student
Endpoint: GET /students/:id
Description: Fetch details of a student by ID.
Response:
•	200 OK:
Json
{
  "id": 1,
  "name": "Ammu",
  "age": 20,
  "grade": "A",
  "email": "ammu@example.com"
}
•	404 Not Found:
Json
{ "message": "Student not found" }
________________________________________
4. Update a Student
Endpoint: PUT /students/:id
Description: Update an existing student’s details by ID.
Request Body:
Json
{
  "name": "Raja",
  "age": 21,
  "grade": "A+",
  "email": "raja@example.com"
}
Response:
•	200 OK:
Json
{ "message": "Student updated successfully" }
•	404 Not Found:
Json
{ "message": "Student not found" }
________________________________________
5. Delete a Student
Endpoint: DELETE /students/:id
Description: Delete a student by ID.
Response:
•	200 OK:
Json
{ "message": "Student deleted successfully" }
•	404 Not Found:
Json
{ "message": "Student not found" }
________________________________________
Features
•	Frontend:
o	Add or update student details using a form.
o	View all students in a table.
o	Edit or delete student records.
•	Backend:
o	API endpoints to handle CRUD operations.
o	MySQL database integration for persistent storage.
________________________________________
Additional Instructions
Data Validation
The application ensures that any student data submitted is properly validated to confirm:
•	name must be a non-empty string.
•	age must be a positive integer.
•	email must be a valid email address.

Pagination Support
For the endpoint GET /students, pagination is provided to handle large datasets. The page and limit query parameters determine which set of records is returned. If no parameters are specified, the default values of page=1 and limit=10 will be used.
Error Handling
If a request is made with invalid data, the API will respond with a 400 Bad Request error and a description of the validation issue.
________________________________________
Conclusion
This API serves as a foundational backend for student management, with basic CRUD operations and pagination support. It can easily be extended with additional functionality such as authentication, advanced search, or more complex data relationships.


Future Enhancements
•	Add pagination for student records.
•	Implement search and filter functionality.
•	Improve UI/UX with frameworks like Bootstrap or Materialize.
•	Add user authentication and role-based access control.
