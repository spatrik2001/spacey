const express = require("express");
const cors = require("cors");
const app = express();
const db = require('./app/models/index');

const Role = db.role;
const ProductRoutes = require('./app/routes/product');

var corsOptions = {
  origin: "http://localhost:8080"
};

const MONGODB_URI =
    'mongodb+srv://scheuer_patrik:asdasd123@cluster0.icldh.mongodb.net/spacey?authSource=admin&replicaSet=atlas-22dxd0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
// const MONGODB_URI = 'mongodb://127.0.0.1:27017/spacey';

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "SpaceY Backend Szerver" });
});

db.mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(3000);
        console.log(`Server is running on port ${3000}.`);
        initial();
    })
    .catch(err => {
        console.log(err);
    });

require('./app/routes/auth')(app);
require('./app/routes/user')(app);
app.use('/api/products', ProductRoutes);


function initial() {
  Role.collection.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("'user' hozzáadásra került a kollekcióhoz!");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("'admin' hozzáadásra került a kollekcióhoz!");
      });
    }
  });
}