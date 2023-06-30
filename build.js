const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');
const config = require('./config.json');

registerTransforms(StyleDictionary);

try {
    const sd = StyleDictionary.extend(config);
    sd.buildAllPlatforms(); 
} catch (error) {
    console.error('Error on building: ', error);
}

