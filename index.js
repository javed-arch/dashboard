import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { handleError } from "./middleware/errorHandler.js";
import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.get("/", (req, res) => {
    res.send({ message: "All Ok" });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);
app.use(handleError);

const startServer = async () => {
    try {
        connectDB(process.env.CONNECTION_URL);

        app.listen(process.env.PORT, () =>
            console.log("Server started"),
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
