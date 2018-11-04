/*
  Developer : Abdoul Dosso
  Email : abdouldosso78@gmail.Com

*/


// chargement des biliothèques
const fs = require('fs');
const sharp = require('sharp');

// demarrage de la redimention de l'image

module.exports = function resize(path, format, width, height) {
    const readStream = fs.createReadStream(path);
    let transform = sharp();

    if (format) {
        transform = transform.toFormat(format);
    }

if (width || height) {
    transform = transform.resize(width, height);
}

    return readStream.pipe(transform);
};