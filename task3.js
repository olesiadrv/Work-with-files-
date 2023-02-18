const fs = require('fs');

function appendingContent (file, content){
    fs.appendFileSync(file, content, () => {
    });
}
appendingContent('t.txt', ' This is new text');