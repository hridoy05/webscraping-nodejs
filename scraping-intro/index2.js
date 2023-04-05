const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function main() {
  const res = await axios.get(
    "https://reactnativetutorial.net/css-selectors/lesson2.html"
  );

  const html = res.data;
  fs.writeFileSync("./test2.html", html);
  const $ = await cheerio.load(html);
  $("h2").each((index, element) => {
    console.log($(element).text());
  });
}
main();
