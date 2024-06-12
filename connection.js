const mongoose = require('mongoose');

const url = "mongodb+srv://pcmutkarshverma:12345@cluster0.opts7kp.mongodb.net/mern2024?retryWrites=true&w=majority&appName=Cluster0"

// asynchrounous function - return promise object

mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    }).catch((err) => {
        console.log(err);
    });