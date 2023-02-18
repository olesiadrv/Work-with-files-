const fs = require('fs')

 function transferFile(sourse, target){
    try {
        fs.renameSync(sourse, target);
        console.log('the file has been moved');
     }
     catch (error) {
        console.log ('error');
     }
 }
 transferFile('./t.txt', './new/t.txt');