const express = require("express")
const app = express()

//dotenv
require("dotenv").config()
const port = process.env.PORT

//cors
const cors = require("cors")
app.use(cors())

//other
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

require("./drivers/mongoose_driver")

app.use("/activities", require("./routers/activities_router"))
app.use("/position", require("./routers//position_router"))
app.use("/user", require("./routers/user_router"))
app.use("/matter", require("./routers/matter_router"))

app.get('/',(req,res)=>{
    res.send("Api is running")
    })


app.listen(port, () => {
  console.log(`Api initialized on port ${port}`)
})
