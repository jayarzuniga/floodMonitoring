import express from 'express';
const app = express();
const port = 5173;

app.get('/api', (req, res) => {
    res.send("Hello from Express!");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})