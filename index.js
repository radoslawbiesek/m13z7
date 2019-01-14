var fs = require('fs');

fs.readdir('.', function(err, data) {
    fs.writeFile('./content.txt', data, function(err, data) {
        if (err) throw err;
    });
});