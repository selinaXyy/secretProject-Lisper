import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async(req,res)=>{
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const username = response.data.username;
        const secretMessage = response.data.secret;

        res.render("index.ejs",{
            user: username,
            secret: secretMessage
        })
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      }
});


app.listen(port, () =>{
    console.log(`Successfully listening on port ${port}`);
});
