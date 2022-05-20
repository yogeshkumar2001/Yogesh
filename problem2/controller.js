async function getData(req, res) {
  try {
    // console.log(res);
    // console.log(req.params.keywords)
    // const queryString = window.location.search;
    // console.log(queryString);
    res.json({ data: "hello from prefix", message: "success" });
  } catch (error) {
    res.json({ error: error, message: "error" });
  }
}

module.exports.getData = getData;
