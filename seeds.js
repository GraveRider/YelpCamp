var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum risus urna, nec ornare urna lacinia et. Suspendisse consectetur ultricies fermentum. Phasellus laoreet lacus nibh, ut venenatis leo ornare in. Curabitur dignissim lorem lacus, sed feugiat velit vulputate auctor. Pellentesque aliquam nisi in lacus interdum, at convallis mi dictum. Morbi ac ex vestibulum, viverra lorem in, feugiat est. Aliquam sapien nulla, vehicula ac rutrum et, auctor non lacus. Vestibulum sed augue id tellus finibus vehicula. Fusce eget augue maximus, gravida elit et, bibendum est. Praesent quis molestie tellus. Proin id dictum tellus. Nunc accumsan tempor dapibus. "
    },
    {
        name: "Raven's Hills",
        image: "https://farm8.staticflickr.com/7259/7121858075_7375241459.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum risus urna, nec ornare urna lacinia et. Suspendisse consectetur ultricies fermentum. Phasellus laoreet lacus nibh, ut venenatis leo ornare in. Curabitur dignissim lorem lacus, sed feugiat velit vulputate auctor. Pellentesque aliquam nisi in lacus interdum, at convallis mi dictum. Morbi ac ex vestibulum, viverra lorem in, feugiat est. Aliquam sapien nulla, vehicula ac rutrum et, auctor non lacus. Vestibulum sed augue id tellus finibus vehicula. Fusce eget augue maximus, gravida elit et, bibendum est. Praesent quis molestie tellus. Proin id dictum tellus. Nunc accumsan tempor dapibus. "
    },
    {
        name: "Desert Mesa",
        image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum risus urna, nec ornare urna lacinia et. Suspendisse consectetur ultricies fermentum. Phasellus laoreet lacus nibh, ut venenatis leo ornare in. Curabitur dignissim lorem lacus, sed feugiat velit vulputate auctor. Pellentesque aliquam nisi in lacus interdum, at convallis mi dictum. Morbi ac ex vestibulum, viverra lorem in, feugiat est. Aliquam sapien nulla, vehicula ac rutrum et, auctor non lacus. Vestibulum sed augue id tellus finibus vehicula. Fusce eget augue maximus, gravida elit et, bibendum est. Praesent quis molestie tellus. Proin id dictum tellus. Nunc accumsan tempor dapibus. "
    }
];

function seedDB() {
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Removed campgrounds!");

    //     data.forEach(function (seed) {
    //         Campground.create(seed, function (err, campground) {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 console.log("Added a campground!");
    //
    //                 Comment.create(
    //                     {
    //                         text: "This place is great but I wish they had 'Duff'!",
    //                         author: "Homer"
    //                     }, function (err, comment) {
    //                         if (err) {
    //                             console.log(err);
    //                         } else {
    //                             campground.comments.push(comment);
    //                             campground.save();
    //                             console.log("Created new comment!")
    //                         }
    //                     }
    //                 );
    //             }
    //         });
    //     });
     });
}

module.exports = seedDB;