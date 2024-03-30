import express from "express";
import path from "path";
import cors from "cors";

import corsOptions from "./config/corsOptions";

import { logger } from "./middleware/logEvents";
import errorHandler from "./middleware/errorHandler";
// import verifyJWT from "./middleware/verifyJWT";
// import cookieParser from "cookie-parser";
import credentials from "./middleware/credentials";

import transferRouter from "./routes/transferRoutes";

const app = express();
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
// app.use(cookieParser());

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// routes
// app.use("/", require("./routes/root"));
app.use("/api/transfers", transferRouter);

// app.use("/register", require("./routes/register"));
// app.use("/auth", require("./routes/auth"));
// app.use("/refresh", require("./routes/refresh"));
// app.use("/logout", require("./routes/logout"));

// app.use(verifyJWT);
// app.use("/employees", require("./routes/api/employees"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
