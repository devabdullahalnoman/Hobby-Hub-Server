const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.nhwkgyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const groupsCollection = client.db("groupsDB").collection("groups");

    app.get("/", async (req, res) => {
      const result = await groupsCollection.find().toArray();
      res.send(result);
    });

    app.get("/groups/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await groupsCollection.findOne(query);
      res.send(result);
    });

    app.post("/", async (req, res) => {
      const newGroup = req.body;
      const result = await groupsCollection.insertOne(newGroup);
      res.send(result);
    });

    app.put("/groups/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedGroup = req.body;
      const updateDoc = {
        $set: updatedGroup,
      };
      const result = await groupsCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.patch("/groups/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const newMember = req.body.member;

      const updateDoc = {
        $push: { members: newMember },
      };

      const result = await groupsCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.delete("/groups/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await groupsCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
