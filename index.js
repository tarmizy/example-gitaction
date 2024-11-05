const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// test/index.test.js
const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello World message', async () => {
    const res = await request(app)
      .get('/')
      .expect(200);
      
    expect(res.body.message).toBe('Hello World!');
  });
});
