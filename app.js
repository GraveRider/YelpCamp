var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", function(req, res) {
   res.render("landing");
});

app.get("/campgrounds", function(req, res) {
   Campground.find({}, function(err, allCampgrounds) {
       if (err) {
           console.log(err);
       }
       else {
           res.render("index", {campgrounds: allCampgrounds});
       }
   });
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, function() {
    console.log("Server is running");
});