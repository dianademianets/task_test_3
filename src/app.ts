import express from "express";
import mongoose from "mongoose";

import {apiRouter} from "./routes/api.router";
import {config} from "./config/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(apiRouter);

app.listen(config.PORT, async () => {
    console.log(`Server has started on Port:${config.PORT}`);

    try {
        await mongoose.connect(config.MONGODB_URL).then(() => {
            console.log("Mongo connected successfully");
        });
    } catch (err) {
        console.log(err);
    }
});


