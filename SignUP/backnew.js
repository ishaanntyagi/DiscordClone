const http = require('http');
const url = require('url');
const mysql = require('mysql');
const formidable = require('formidable');

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'usern',
  password: '1234',
  database: 'newprojectweb'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');
});

// Create HTTP server
const server = http.createServer((req, res) => {

  const reqUrl = url.parse(req.url, true);

  // Handle POST request to root URL ('/')
  if (req.method === 'POST' && reqUrl.pathname === '/') {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields) => {
      if (err) {
        console.error('Error parsing form data:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error parsing form data');
        return;
      }

      const { email,display_name,username,password } = fields;

      // Insert the email data into the database
      const sql = 'INSERT INTO cred (email,display_name,username,password) VALUES (?,?,?,?)';
      db.query(sql, [email,display_name,username,password], (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error inserting data into the database');
        } else {
          console.log('Registration successful');
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Registration successful');
        }
      });
    });
  } else {
    // Handle other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
