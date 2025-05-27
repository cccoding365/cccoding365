// index.js
const axios = require('axios');
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
const url = 'https://v1.hitokoto.cn/?c=f&encode=text';
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Accept': 'text/plain'
};

/**
  * DATA is the object that contains all
  * the data to be provided to Mustache
  * Notice the "name" and "date" property.
*/
let DATA = {
  name: 'DoubledConG',
  date: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short',
    timeZone: 'Asia/Shanghai'
  }),
};
/**
  * A - We open 'main.mustache'
  * B - We ask Mustache to render our file with the data
  * C - We create a README.md file with the generated output
  */
function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, async (err, data) => {
    if (err) throw err;
    const { data: text } = await axios.get(url, { headers });
    const output = Mustache.render(data.toString(), { ...DATA, text });
    fs.writeFileSync('README.md', output);
  });
}
generateReadMe();