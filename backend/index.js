const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const airouter = require("./routes/ai.routes")
const queryrouter = require("./routes/feedback.routes");
dotenv.config();
const app = express();

app.use(cors(
))
app.use(express.json());
app.get("/",(req,res) => {
    res.json({
        message:"The api is running"
    })
})

app.use('/web/api',queryrouter);
app.use('/ai',airouter);
app.listen(3000,() => {
    console.log("Greetings we are hearing on 3000 ");
});

