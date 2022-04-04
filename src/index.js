
const express = require("express");
var cors = require("cors");
const connect = require("./configs/db");
// const passport = require("./configs/google-oauth");
const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());


app.use(express.json());
const { register, login,gererateToken } = require("./controllers/auth.controllers");
const usersControllers = require("./controllers/users.controllers");
const productController = require("./controllers/product.controllers");
const furnitureController = require("./controllers/furnitures.controller");
const lightingController = require("./controllers/lighting.controller");
const pillowController = require("./controllers/pillow.controller");
const landingController = require("./controllers/landingpage.controller");

app.use(cors({ origin: "*" }));

// app.use(express.json());


// /.................
app.use("/users", usersControllers);
app.use("/product", productController);
app.post("/register", register);
app.get("/register", register);
app.post("/login", login);
// .................
app.use("/furnitures", furnitureController);
app.use("/lighting", lightingController);
app.use("/pillow", pillowController);


// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile","email"] }));

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/login" ,session:false}),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     const token =gererateToken(req.user)
//     return res.status(201).send({user:req.user, token})
//     // res.redirect("/");
//   }
// );
// app.use("/landing", landingController);






const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log(`listening on port ${PORT}`);
});











// start..............................
// const express =require("express");
// // const connect = require("./configs/db");
// // const app =express();
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());
// const {register, login} = require("./controllers/auth.controllers");
// const usersControllers= require("./controllers/users.controllers");
// app.use("/users",usersControllers);
// app.post("/register",register);
// app.get("/register",register);
// app.post("/login",login);


// module.exports =app;



