// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const cors = require('cors'); // Import CORS


const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Create Student (POST/students)
app.post('/students', (req, res) => {
  const { name, age, grade, email } = req.body;

  if (!name || !age || !grade || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const query = 'INSERT INTO students (name, age, grade, email) VALUES (?, ?, ?, ?)';
  db.query(query, [name, age, grade, email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error inserting data', error: err });
    }
    res.status(201).json({ message: 'Student created successfully', studentId: result.insertId });
  });
});

// Read All Students (GET/students)
app.get('/students', (req, res) => {
  const query = 'SELECT * FROM students';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching students', error: err });
    }
    res.status(200).json(results);
  });
});

// Read Single Student (GET/students/:id)
app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM students WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching student', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(results[0]);
  });
});

// Update Student (PUT/students/:id)
app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, grade, email } = req.body;

  if (!name || !age || !grade || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const query = 'UPDATE students SET name = ?, age = ?, grade = ?, email = ? WHERE id = ?';
  db.query(query, [name, age, grade, email, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating student', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student updated successfully' });
  });
});

// Delete Student (DELETE/students/:id)
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM students WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting student', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

