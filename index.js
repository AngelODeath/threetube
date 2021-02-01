#! /usr/bin/env node

const fs = require('fs');

function get_files(err, files) {
    if (err) {
        throw err;
    }

    files.forEach(file => {
        console.log('File:', file)
    })
}

function ls(dir) {
    if (typeof dir == 'undefined') {
        dir = './'
    }

    fs.readdir(dir, get_files);
}

function main() {
    console.log('# Main Start #');
    ls()
    console.log('# Main End #');
}

(function() {
    main();
})()
