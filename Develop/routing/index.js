// Import our modular routers for /tips and /feedback
import apiRouter from "./api-routing.js";
import htmlRouter from "./html-routing.js";

const app = express();

app.use("/api-routing.js", apiRouter);
app.use("/html-routing.js", htmlRouter);

export default api;
