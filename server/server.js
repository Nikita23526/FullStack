import app from "./app.js";
import { connectDB } from "./config/database.js";
connectDB();
// const PORT =process.env.PORT || 8002
app.get("/",(req,res, next)=>{
    res.send("<h1>Working</h1>")
})
app.listen(process.env.PORT, ()=>console.log(`server is working  on PORT :${process.env.PORT}`));