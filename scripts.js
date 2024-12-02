//Scripts.js
const API_BASE = 'http://localhost:3000/students';
console.log('JavaScript Loaded');
async function fetchStudents() {
  try {
    const response = await fetch(API_BASE);
    const students = await response.json();
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = '';

    students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td>${student.email}</td>
        <td>
          <button onclick="populateForm(${student.id})">Edit</button>
          <button onclick="deleteStudent(${student.id})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching students:', error);
  }
}

async function createOrUpdateStudent() {
  const id = document.getElementById('studentId').value;
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const grade = document.getElementById('grade').value;
  const email = document.getElementById('email').value;

  if (!name || !age || !grade || !email) {
    alert('All fields are required!');
    return;
  }

  const student = { name, age, grade, email };

  try {
    const response = await fetch(`${API_BASE}${id ? `/${id}` : ''}`, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });

    if (response.ok) {
      alert(`Student ${id ? 'updated' : 'created'} successfully`);
      document.getElementById('studentForm').reset();
      fetchStudents();
    } else {
      const error = await response.json();
      alert('Error:', error.message);
    }
  } catch (error) {
    console.error('Error saving student:', error);
  }
}

async function deleteStudent(id) {
  if (!confirm('Are you sure you want to delete this student?')) return;

  try {
    const response = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });

    if (response.ok) {
      alert('Student deleted successfully');
      fetchStudents();
    } else {
      const error = await response.json();
      alert('Error:', error.message);
    }
  } catch (error) {
    console.error('Error deleting student:', error);
  }
}

async function populateForm(id) {
  try {
    const response = await fetch(`${API_BASE}/${id}`);
    const student = await response.json();

    document.getElementById('studentId').value = student.id;
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
    document.getElementById('email').value = student.email;
  } catch (error) {
    console.error('Error fetching student:', error);
  }
}

// Fetch students on page load
fetchStudents();
