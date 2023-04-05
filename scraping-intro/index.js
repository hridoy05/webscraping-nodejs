const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function main() {
  const res = await axios.get("https://reactnativetutorial.net/css-selectors");

  const html = res.data;
  fs.writeFileSync("./test.html", html);
  const $ = cheerio.load(html);
  const text = $("h1").text();
  console.log(text);
}
main();
