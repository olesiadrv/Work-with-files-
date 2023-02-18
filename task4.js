const fs = require ('fs');

function deletingFile(file) {
    try {
        fs.unlinkSync(file);
        console.log ('the file has been deleted');
    }
    catch (error) {
        console.log ('the file does not exist')
    }
}
deletingFile('new.txt');

