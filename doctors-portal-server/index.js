const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wlrpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('doctors_portal');
        const appointmentsCollection = database.collection('appointments');

        // Send data to server
        app.post('/appointments', async (req, res) => {
            const appointment = req.body;
            const result = await appointmentsCollection.insertOne(appointment);
            console.log(result);
            res.json(result);
        })
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello Doctors Portal!')
})

app.listen(port, () => {
    console.log(`Listening at :${port}`)
})
