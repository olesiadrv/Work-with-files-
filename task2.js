const fs = require('fs');

function createFile(file, content) {
    fs.writeFile(file, content, () => {
        console.log('the file has been created');
    });
}
createFile('new.txt', 'Hello');