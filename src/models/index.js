const express = require("express");
const connect = require("./configs/db");
const passport = require("./configs/google-oauth");
const app = express();
app.use(express.json());
const { register, login,gererateToken } = require("./controllers/auth.controllers");
const usersControllers = require("./controllers/users.controllers");
const productController = require("./controllers/product.controllers");

app.use("/users", usersControllers);
app.use("/product", productController);
app.post("/register", register);
app.get("/register", register);
app.post("/login", login);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile","email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" ,session:false}),
  function (req, res) {
    // Successful authentication, redirect home.
    const token =gererateToken(req.user)
    return res.status(201).send({user:req.user, token})
    // res.redirect("/");
  }
);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});
