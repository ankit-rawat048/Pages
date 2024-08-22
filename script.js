// // i can make a site where i make a map on main page and down site we can give some name of the place and give direction link to map



//         function generateMapLink() {
//             const place = document.getElementById('placeInput').value;
//             const source = document.getElementById("gmap_canvas");

//             if(place) {
//                 // URL encode the place name to handle spaces and special characters
//                 const encodedPlace = encodeURIComponent(place + ", Uttarakhand");
                
//                 // Generate the Google Maps search URL
//                 const mapURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAkYfN4bFhotILUmIDdVJlcENYDCjR6N0U&q=${encodedPlace}`;
                
//                 // Update the iframe's src attribute to show the map
//                 source.src = mapURL;
//             } else {
//                 alert('Please enter a place name');
//             }
//         }




let file = "fetch_info.txt";

fetch (file)
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y);

