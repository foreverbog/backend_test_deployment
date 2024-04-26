//EXPRESS MIDDLEWARES

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); //inbuilt middleware
app.use(cors()); //third party middleware

const PORT = process.env.PORT || 8080;

//Application level middleware
// const myMiddleware = (req, res, next) => {
//   console.log("I am Mr. MIddleware");
//   next();
// };

// const myOtherMiddleware = (req, res, next) => {
//   setTimeout(() => {
//     console.log("I am  the Other Middleware");
//   }, 3000);
//   next();
// };
// app.use(myMiddleware);
// app.use(myOtherMiddleware);
// This is the same ⬇
// app.use((req, res, next) => {
//   console.log("I am Mr. MIddleware");
//   next();
// });
// const myFunction = (req, res) => {
//   res.send("Hello");
// };
// app.get("/", myFunction);
//They are the same

//Router Level Middleware
// const tellMeEverything = (req, res, next) => {
//   console.log("Hey, everything will be  alright!");
//   next();
// };
// const someOtherMiddleware = (req, res, next) => {
//   console.log(" I have no idea");
//   next();
// };
// app.get(
//   "/somewhere",
//   tellMeEverything,
//   someOtherMiddleware,
//   (req, res, next) => {
//     res.send("Hello");
//   }
// );

//Connect frontend with backend

const fighters = [
  {
    id: 1,
    first_name: "Bruce",
    last_name: "Lee",
    country_id: 10,
    style: "Jeet Kune Do",
  },
  {
    id: 2,
    first_name: "Chuck",
    last_name: "Norris",
    country_id: 2,
    style: "Chunk Kuk Do",
  },
  {
    id: 3,
    first_name: "Jackie",
    last_name: "Chan",
    country_id: 11,
    style: "Kung Fu",
  },
  {
    id: 4,
    first_name: "Ip",
    last_name: "Man",
    country_id: 10,
    style: "Wing Chun",
  },
  {
    id: 5,
    first_name: "Tony",
    last_name: "Jaa",
    country_id: 87,
    style: "Muay Thai",
  },
  {
    id: 6,
    first_name: "Jean Claude",
    last_name: "Van Damme",
    country_id: 8,
    style: "Kickboxing",
  },
  {
    id: 7,
    first_name: "Jet",
    last_name: "Li",
    country_id: 10,
    style: "Wushu",
  },
];

app.get("/", (req, res, next) => {
  res.json("Hello");
});

app.get("/fighters", (req, res) => {
  res.json(fighters);
});

app.get("/fighters/:id", (req, res) => {
  const { id } = req.params;
  const fighter = fighters.find((fighter) => fighter.id === parseInt(id, 10)); //can use Number(id), pref parseInt
  if (fighter) {
    res.json(fighter);
  } else {
    res.status(404).json({ msg: "Fighter not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
