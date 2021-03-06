const express = require('express');
const app = express();
app.use(express.json());
const { models: { User, Note }} = require('./db');
console.log(Note)
const path = require('path');

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

//get users notes by id

app.get('/api/users/:id/notes', async(req, res, next) => {
  try {
    const foundUser =  await Note.findAll({ where: { userId: req.params.id }
    })
    res.send(foundUser)
  }
  catch(err) {
    next(err)
  }
})

app.post('/api/auth', async(req, res, next)=> {
  try {
    res.send({ token: await User.authenticate(req.body)});
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/auth', async(req, res, next)=> {
  try {
    res.send(await User.byToken(req.headers.authorization));
  }
  catch(ex){
    next(ex);
  }
});

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;