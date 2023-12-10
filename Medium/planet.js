const fs = require('fs'); // allows access to the filesystem 

// fs.writeFileSync('planet.txt','Mercury'); //creates file and adds content to it.
// becasuse ive already created the file i do not want multiple flies being created everytime that i run node 

// fs.appendFileSync('planet.txt',', Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto')
// appended to the planet.txt file and all planets are within the .txt
                   
fs.readFile('planet.txt', 'utf8', function(err, data) {
            if (err) throw err;
            console.log(data);
            });