const app = require("./app");
const connectDatabase = require("./config/db");
const { serverPort } = require("./secret");

app.listen(serverPort, async () => {
    console.log(`Server is runnig at http://localhost:${serverPort}`);
    await connectDatabase();
});
