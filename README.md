<p>
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
Setup and Running the Project Locally<br>
Prerequisites<br>
•	Node.js: Install Node.js.<br>
•	MySQL: Install MySQL.<br>
•	Git: Install Git.<br>
________________________________________
Steps to Set Up<br>
1.	Clone the Repository<br>
First, clone the zip repository to your local machine<br>

Bash<br>
cd student-management<br>
2.	Set Up the MySQL Database<br>
o	Open your MySQL client or terminal.<br>
o	Create a database named school:<br>
SQL<br>
CREATE DATABASE school;<br>
o	Use the following schema to create the students table:<br>
SQL<br>
USE school;<br>
CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, age INT NOT NULL, grade VARCHAR(50) NOT NULL, email VARCHAR(255) NOT NULL);<br>
3.	Configure the Database<br>
o	Open the db.js file and update the database configuration:<br>
JavaScript<br>
const connection = mysql.createConnection({<br>
  host: 'localhost',<br>
  user: 'your-username',  // Replace with your MySQL username<br>
  password: 'your-password',  // Replace with your MySQL password<br>
  database: 'school',<br>
});<br>
4.	Install Dependencies<br>
o	Navigate to the project folder and install dependencies:<br>
bash<br>
npm install express mysql2 body-parser<br>
npm install --save-dev nodemon<br>
npm install cors<br>
5.	Start the Server<br>
o	Run the server:<br>
bash<br>
node server.js<br>
o	The server will run on http://localhost:3000.<br>
6.	Run the Frontend<br>
o	Open index.html in your browser using a live server (e.g., Live Server extension).<br>
________________________________________
API Documentation<br>
Base URL<br>
bash<br>
http://localhost:3000/students<br>
________________________________________
1. Create a Student<br>
Endpoint: POST /students<br>
Description: Add a new student to the database.<br>
Request Body:<br>
Json<br>
{<br>
  "name": "Amar",<br>
  "age": 20,<br>
  "grade": "A",<br>
  "email": "amar@example.com"<br>
}<br>
Response:<br>
•	201 Created:<br>
Json<br>
{<br>
  "message": "Student created successfully",<br>
  "studentId": 1<br>
}<br>
•	400 Bad Request:<br>
Json<br>
{ "message": "All fields are required." }<br>
________________________________________
2. Get All Students<br>
Endpoint: GET /students<br>
Description: Fetch all students from the database.<br>
Response:<br>
•	200 OK:<br>
Json<br>
[<br>
  {<br>
    "id": 1,<br>
    "name": "Raja",<br>
    "age": 20,<br>
    "grade": "A",<br>
    "email": "raja@example.com"<br>
  },<br>
  {<br>
    "id": 2,<br>
    "name": "Ram",<br>
    "age": 22,<br>
    "grade": "B",<br>
    "email": "ram@example.com"<br>
  }<br>
]<br>
•	500 Internal Server Error:<br>
Json<br>
{ "message": "Error fetching students" }<br>
________________________________________
3. Get a Single Student<br>
Endpoint: GET /students/:id<br>
Description: Fetch details of a student by ID.<br>
Response:<br>
•	200 OK:<br>
Json<br>
{<br>
  "id": 1,<br>
  "name": "Ammu",<br>
  "age": 20,<br>
  "grade": "A",<br>
  "email": "ammu@example.com"<br>
}<br>
•	404 Not Found:<br>
Json<br>
{ "message": "Student not found" }<br>
________________________________________
4. Update a Student<br>
Endpoint: PUT /students/:id<br>
Description: Update an existing student’s details by ID.<br>
Request Body:<br>
Json<br>
{<br>
  "name": "Raja",<br>
  "age": 21,<br>
  "grade": "A+",<br>
  "email": "raja@example.com"<br>
}<br>
Response:<br>
•	200 OK:<br>
Json<br>
{ "message": "Student updated successfully" }<br>
•	404 Not Found:<br>
Json<br>
{ "message": "Student not found" }<br>
________________________________________
5. Delete a Student<br>
Endpoint: DELETE /students/:id<br>
Description: Delete a student by ID.<br>
Response:<br>
•	200 OK:<br>
Json<br>
{ "message": "Student deleted successfully" }<br>
•	404 Not Found:<br>
Json<br>
{ "message": "Student not found" }<br>
________________________________________
Features<br>
•	Frontend:<br>
o	Add or update student details using a form.<br>
o	View all students in a table.<br>
o	Edit or delete student records.<br>
•	Backend:<br>
o	API endpoints to handle CRUD operations.<br>
o	MySQL database integration for persistent storage.<br>
________________________________________
Additional Instructions<br>
Data Validation<br>
The application ensures that any student data submitted is properly validated to confirm:<br>
•	name must be a non-empty string.<br>
•	age must be a positive integer.<br>
•	email must be a valid email address.<br>

Pagination Support<br>
For the endpoint GET /students, pagination is provided to handle large datasets. The page and limit query parameters determine which set of records is returned. If no arameters are specified, the default values of page=1 and limit=10 will be used.
Error Handling<br>
If a request is made with invalid data, the API will respond with a 400 Bad Request error and a description of the validation issue.<br>
________________________________________
Conclusion<br>
This API serves as a foundational backend for student management, with basic CRUD operations and pagination support. It can easily be extended with additional functionality such as authentication, advanced search, or more complex data relationships.


Future Enhancements<br>
•	Add pagination for student records.<br>
•	Implement search and filter functionality.<br>
•	Improve UI/UX with frameworks like Bootstrap or Materialize.<br>
•	Add user authentication and role-based access control.<br>
</p>
