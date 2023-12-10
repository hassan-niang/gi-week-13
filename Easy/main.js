//Say Hello World 
// console.log('HELLO WORLD'); 

//Baby Step a function that adds a series of numbers 

// console.log(process.argv) // this allows acess to the "dom" like equliant to node which is called "process". B/c process is like documnet iyt has methods attached to  it such as agrv which will twll you everything that is cureently stored. It returns as an [].
//the first 2 indexs of the [] looks like ['node', '/path/to/your/baby-steps.js', '1', '2', '3'] where its useful information about the specfic file you are currently looking at.  the real infromation thats getting passed starts @ [2]

// let sum = 0;

// for (let i = 2; i < process.argv.length; i ++){ // 
    // sum += Number(process.argv[i]); //b/c what is stored in the [] are strings you have to force them in to numbers. 
// }

// console.log(sum);

// My First I/O 

// const fs = require('fs') // This allows for you to load in the fs making sure that everything is there (extra important info so the file aint so big)

// const buffer = fs.readFileSync(process.argv[2]); //this directs you to exactly where youre wanting to read, so the file and its content
    // this also returns as bytes
// const data = buffer.toString() // changes bytes to strs 

// const strArr = data.split('\n') // this allows for each str to be on a new line. understand RegEx for easier notation and methods 


// My first Asyn I/O  

// const fs = require('fs')

// fs.readFile(process.argv[2], function(err, data){ //this is how node.js uses async inorder to run at the same time as other programs on the site
//     //uses .readFile instead of .readFileSync; also uses a callback f(x) to collect the data from the process
//     if(!err){ //will be an error if no data is passed as, in there are nothing at arg[2]
//         let str = data.toString();
//         let strArr = str.split('\n');
//         console.log(strArr.length - 1);
//     }; // same steps as sync 

// });

// Filtered LS

const fs = require('fs'); // allows you to acees filesytem on local host 

const path = require('path'); // bulit in mod that lets you access file paths 

const directory = process.argv[2]; // storing 3 cmd line arg

const ext = "." + process.argv[3] // stroing the file type youre looking for. 

fs.readdir(directory, function (err ,files){ //readdir = reading content of specified folder. callback f(x) goes after the directory has been accessed; passed either an err or [] of files from folder

    if (err){ 
        return console.log(err); // if an err occurs it will be logged telling you what the err was. 
    }

    files.forEach(function (file){ //for loop 
        if (path.extname(file)=== ext){ // the method extname on path allows you to look at the specfic file type and see if it the same as the ext that we are looking for
            console.log(file); // logs file name
        };
    });
});

