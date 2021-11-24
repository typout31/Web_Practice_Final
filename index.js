const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createCard");
});

app.post("/", (req, res) => {
  req.user.fullName = req.body.name
  req.user.aboutMe = req.body.about
  req.user.githubUrl = req.body.git
  req.user.twitterUrl = req.body.twitter
  req.user.favouriteBooks = req.body.
  res.redirect("homepage")
})

app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
