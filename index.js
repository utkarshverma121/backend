const express = require('express');

const UserRouter = require('./routers/userRouter')

// initialize express
const app = express();

const port = 5000;

app.use('/user', UserRouter);

//route or endpoint 
app.get('/', (req, res) => {
    res.send('Response from express')
});

// add 
 
app.get('/add', (req, res) => {
    res.send('Response from add')
});

// getall

app.get('/getall', (req, res) => {
    res.send('Response from getall')
});

//update

app.get('/update', (req, res) => {
    res.send('Response from update')
});

//dalete

app.get('/delete', (req, res) => {
    res.send('Response from delete')
});

app.listen(port, () => {
    console.log('Server Started');
});

//utkarsh

app.get('/utkarsh', (req, res) => {
    res.send('Hello')
});

//verma

app.get('/verma', (req, res) => {
    res.send('Hi.....!');
});