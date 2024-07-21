import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

import campersRouter from "./routes/campersRoutes.js";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./openapi.json" assert { type: "json" };

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/campers", campersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, _, res, __) => {
  console.log(err);
  const { status = 500, message = "Internal server error" } = err;
  res.status(status).json({ message });
});

const PORT = process.env.PORT || 8080;
const uriDb = process.env.DB_HOST;

const connection = mongoose.connect(uriDb, {});

connection
  .then(() => {
    app.listen(PORT, async function () {
      console.log(`Database connection successful`);
      console.log(`Server running on port ${PORT}`);
      console.log(
        `Swagger UI is available at ${process.env.BASE_URI}/api-docs`
      );
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });

export default app;
