var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    ejsPath = path.resolve(__dirname, '../src', 'ejs'),
    ejsFilenames;

console.log('ejs path', ejsPath);

// For each ejs file, compile the html version and output to the public
// directory.
ejsFilenames = fs.readdirSync(ejsPath);
console.log('ejs filenames', ejsFilenames);
ejsFilenames.forEach(function(filename) {
  var contents = fs.readFileSync(path.resolve(ejsPath, filename), 'utf8');
  var html = ejs.render(contents);
  var filenameAsHtml = path.basename(filename, '.ejs') + '.html';
  console.log('filename as html', filenameAsHtml);
  fs.writeFileSync(path.resolve(__dirname, '..', '/public', filenameAsHtml), html);
});





