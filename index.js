// index.js
const axios = require('axios');
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

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

async function setHitokoto() {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'text/plain'
  };
  const { data } = await axios.get('https://v1.hitokoto.cn/?c=d&c=i&c=k&encode=json', { headers });
  DATA.hitokoto = data.hitokoto;
  DATA.hitokoto_author = data.from_who;
}

async function generateReadMe() {
  await fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

async function setWeatherInfo() {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Amoy&appid=${process.env.OPEN_WEATHER_MAP_KEY}&units=metric`
  );
  DATA.city_temperature = Math.round(data.main.temp);
  DATA.city_weather = data.weather[0].description;
  DATA.city_weather_icon = data.weather[0].icon;
  DATA.sun_rise = new Date(data.sys.sunrise * 1000).toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Shanghai',
  });
  DATA.sun_set = new Date(data.sys.sunset * 1000).toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Shanghai',
  });
}

async function action() {

  await setHitokoto();

  await setWeatherInfo();

  await generateReadMe();
}

action();