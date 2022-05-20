// http://localhost:port/prefixes?keywords=bonfire,bool
const express = require("express");
const app = express();

words = ["bonfire", "cardio", "case", "character", "bonsai"];

function prefix(w1) {
  if (!words.includes(w1)) {
    return "Not Found";
  }
  let intersectionArray = words.filter((val) => !w1.includes(val));

  let i = 0;
  let ans = "";
  while (i < 4) {
    if (!intersectionArray.includes(ans)) {
      ans += w1[i];
    } else {
      console.log("not equal");
    }
    i++;
  }
  console.log("line26", ans);
  return ans;
}
app.get("/prefixes", (req, res) => {
  let responseArray = [];

  const params = req.url.split("=");

  const paramsWords = params[1].split(",");

  let result;

  for (let i = 0; i < paramsWords.length; i++) {
    result = prefix(paramsWords[i]);

    let obj = {
      keyword: paramsWords[i],
      status: result == "Not Found" ? "Not Found" : "Found",
      prefix: result == "Not Found" ? "not_applicable" : result,
    };
    responseArray.push(obj);
  }

  res.json({
    data: responseArray,
  });
});

app.listen(3000, () => {
  console.log("listen at port 3000");
});
