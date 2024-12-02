// import bodyParser from "body-parser";
// import express, { Request, Response } from "express";

// const app = express();
// app.use(bodyParser.json());

// app.get("/", (req: Request, res: Response) => {
//     res.send("Hello World");
// });

// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// const fs = require("fs").promises;
// const exists = require("fs").exists;
// const path = require("path");

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static("public"));
// app.use("/feedback", express.static("feedback"));

// app.get("/", (req, res) => {
//     const filePath = path.join(__dirname, "pages", "feedback.html");
//     res.sendFile(filePath);
// });

// app.get("/exists", (req, res) => {
//     const filePath = path.join(__dirname, "pages", "exists.html");
//     res.sendFile(filePath);
// });

// app.post("/create", async (req, res) => {
//     const title = req.body.title;
//     const content = req.body.text;

//     const adjTitle = title.toLowerCase();

//     const tempFilePath = path.join(__dirname, "temp", adjTitle + ".txt");
//     const finalFilePath = path.join(__dirname, "feedback", adjTitle + ".txt");

//     await fs.writeFile(tempFilePath, content);
//     exists(finalFilePath, async (exists) => {
//         if (exists) {
//             res.redirect("/exists");
//         } else {
//             await fs.copyFile(tempFilePath, finalFilePath);
//             await fs.unlink(tempFilePath);
//             res.redirect("/");
//         }
//     });
// });
// app.listen(80);

// import express from "express"
// import bodyParser from "body-parser"

// // const express = require("express");
// // const bodyParser = require("body-parser");

// const app = express();

// let userGoal = "Learn Docker!";

// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send(`
//     <html>
//       <head>
//         <link rel="stylesheet" href="styles.css">
//       </head>
//       <body>
//         <section>
//           <h2>My Course Goal</h2>
//           <h3>${userGoal}</h3>
//         </section>
//         <form action="/store-goal" method="POST">
//           <div class="form-control">
//             <label>Course Goal</label>
//             <input type="text" name="goal">
//           </div>
//           <button>Set Course Goal</button>
//         </form>
//       </body>
//     </html>
//   `);
// });

// app.post("/store-goal", (req, res) => {
//   const enteredGoal = req.body.goal;
//   console.log(enteredGoal);
//   userGoal = enteredGoal;
//   res.redirect("/");
// });

// // app.listen(80, () => console.log("server chạy rồi đó !!!"));
// app.listen(80, () => console.log("server chạy rồi đó !!!"));

// import express from "express";
// import bodyParser from "body-parser";
// import { promises as fs } from "fs";
// import path from "path";

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static("public"));
// app.use("/feedback", express.static("feedback"));

// app.get("/", (req, res) => {
//   const filePath = path.join(__dirname, "pages", "feedback.html");
//   res.sendFile(filePath);
// });

// app.get("/exists", (req, res) => {
//   const filePath = path.join(__dirname, "pages", "exists.html");
//   res.sendFile(filePath);
// });

// app.post("/create", async (req, res) => {
//   const title = req.body.title;
//   const content = req.body.text;

//   const adjTitle = title.toLowerCase();
//   const tempFilePath = path.join(__dirname, "temp", `${adjTitle}.txt`);
//   const finalFilePath = path.join(__dirname, "feedback", `${adjTitle}.txt`);



//   await fs.writeFile(tempFilePath, content);

//   try {
//     await fs.access(finalFilePath);
//     res.redirect("/exists");
//   } catch (err) {
//     await fs.copyFile(tempFilePath, finalFilePath);
//     await fs.unlink(tempFilePath);
//     res.redirect("/");
//   }
// });
// app.listen(80, () => {
//   console.log("DU MA MAY");
//   console.log("Server running on port 80");
// });



import express from "express"
import bodyParser from "body-parser"
import axios from "axios";
import mongoose from "mongoose"
import Favorite from "./models/favorite";
const app = express();

app.use(bodyParser.json());

app.get('/favorites', async (req, res) => {
  const favorites = await Favorite.find();
  res.status(200).json({
    favorites: favorites,
  });
});

app.post('/favorites', async (req: any, res: any) => {
  const favName = req.body.name;
  const favType = req.body.type;
  const favUrl = req.body.url;

  try {
    if (favType !== 'movie' && favType !== 'character') {
      throw new Error('"type" should be "movie" or "character"!');
    }
    const existingFav = await Favorite.findOne({ name: favName });
    if (existingFav) {
      throw new Error('Favorite exists already!');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  const favorite = new Favorite({
    name: favName,
    type: favType,
    url: favUrl,
  });

  try {
    await favorite.save();
    res
      .status(201)
      .json({ message: 'Favorite saved!', favorite: favorite.toObject() });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/films');
    res.status(200).json({ movies: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

app.get('/people', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/people');
    res.status(200).json({ people: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});


mongoose.connect('mongodb://host.docker.internal:27017/Auth_NestJs_Db')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// app.listen(3000);