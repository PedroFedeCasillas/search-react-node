const app = require("./src/app")
const cors = require("cors");

const port = process.env.PORT || 3001;
app.use(cors)






app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});