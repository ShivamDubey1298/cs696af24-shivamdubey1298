import express from "express";
import cors from "cors";
import db from "./db/connection.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

// Get restaurants by borough and cuisine
app.get('/restaurants', function(req, res) {
    const { borough, cuisine } = req.query;

    // Check if both parameters are provided
    if (!borough || !cuisine) {
        return res.status(400).send({ error: 'Both borough and cuisine are required' });
    }

    // Query the database for restaurants matching the borough and cuisine
    db.collection("restaurants").find({ borough: borough, cuisine: cuisine }).toArray()
        .then(restaurants => {
            if (restaurants.length === 0) {
                return res.status(404).send({ error: 'No restaurants found for the given criteria' });
            }
            res.send(restaurants);
        })
        .catch(() => res.status(500).send({ error: 'Failed to retrieve restaurants' }));
});

// Existing endpoint to get a single restaurant by ID
app.get('/restaurants/:id', function(req, res) {
    const restaurant_id = req.params["id"];
    db.collection("restaurants").findOne({
        restaurant_id: restaurant_id,
    })
    .then(value => res.send(value))
    .catch(() => res.status(500).send("Not Found"));
});

// Existing endpoint to add a restaurant
app.post('/restaurants', function(req, res) {
    const restaurant_id = req.body['restaurant_id'];
    const name = req.body['name'];
    const borough = req.body['borough'];
    const cuisine = req.body['cuisine'];

    db.collection("restaurants").insertOne({
        restaurant_id: restaurant_id,
        name: name,
        borough: borough,
        cuisine: cuisine
    }).then(result => result.acknowledged ?
        res.send({ restaurant_id, name, borough, cuisine }) :
        res.status(500).send("Failed")
    ).catch(() => res.status(500).send("Failed"));
});

// Existing endpoint to delete a restaurant by ID
app.delete('/restaurants/:id', function(req, res) {
    const restaurant_id = req.params["id"];
    db.collection("restaurants").deleteOne({
        restaurant_id: restaurant_id,
    }).then(result => result.acknowledged && result.deletedCount >= 1 ?
        res.send("Success") :
        res.status(500).send("Failed")
    ).catch(() => res.status(500).send("Not Found"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
