const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

	    let output = '';
      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
      for (let i = 1; i < lines.length; i += 1) { // Skip the header
        const [name, , , field] = lines[i].split(','); // Extract relevant columns
        if (field) {
          totalStudents += 1;
          students[field] = students[field] || [];
          students[field].push(name);
          fields[field] = (fields[field] || 0) + 1;
        }
      }

      output += `Number of students: ${totalStudents}\n`;
	    for (const [field, count] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${count}. `;
        output += `List: ${students[field].join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

const app = http.createServer((req, res) => {
	res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const databaseFile = process.argv[2];

    countStudents(databaseFile)
      .then((output) => {
        res.end(output);
      })
	  .catch((err) => {
        res.statusCode = 404;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
