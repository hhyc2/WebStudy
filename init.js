import app from "./app";
const port = 3000;

const helloword = (req, res) => {
  console.log(`Listening on ${port}`);
};
app.listen(port, helloword);
