import express from 'express';
const app = express();

app.listen(3000, () => {
    console.log('API listening on port 3000');
  });

const users = [
    {
        firstname: "Younes",
        lastname: "Fakallah"
    },
    {
        firstname: "John",
        lastname: "Doe"
    },
    {
        firstname: "Steve",
        lastname: "Jobs"
    }
]

app.get('/user', (req, res) => {
    res.send(users);
});