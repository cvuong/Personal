var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    ejsPath = path.resolve(__dirname, '../src', 'ejs'),
    ejsFilenames, publicPath;

publicPath = path.resolve(__dirname, '../public');

// For each ejs file, compile the html version and output to the public
// directory.
ejsFilenames = fs.readdirSync(ejsPath);
mkdirp.sync(publicPath);
ejsFilenames.forEach(function(filename) {
  var fullPath = path.resolve(ejsPath, filename);

  var stats = fs.statSync(fullPath);
  if (stats.isFile()) {
    var contents = fs.readFileSync(fullPath, 'utf8');
    var html = ejs.render(contents, {
      filename: fullPath
    });
    var filenameAsHtml = path.basename(filename, '.ejs') + '.html';
    fs.writeFileSync(path.resolve(publicPath, filenameAsHtml), html);
  }
});


