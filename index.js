import express from "express";
import cors from "cors";
import Dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import categoryrouter from "./routes/category.js"
import subcategoryrouter from "./routes/subcategory.js"
import meltingrouter from "./routes/melting.js"
import bannerrouter from "./routes/banner.js"
import toppostrouter from "./routes/topost.js"
import productrouter from "./routes/product.js"
import authrouter from "./routes/auth.js"
import livegoldraterouter from "./routes/goldrate.js"
import livesilverraterouter from "./routes/silverrate.js"
const app = express();


Dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/products",productrouter )
app.use("/livegold", livegoldraterouter);
app.use("/livesilver", livesilverraterouter);
app.use("/category",categoryrouter)
app.use("/subcategory", subcategoryrouter)
app.use("/melting", meltingrouter)
app.use("/banner", bannerrouter);
app.use("/toppost", toppostrouter);
app.use("/auth", authrouter);


app.use("/", (req, res) => {
  res.send("Connection Sucessful");
});

const PORT = 5000;
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`app running on port ${PORT}`))
  )
  .catch((error) => console.log(error));