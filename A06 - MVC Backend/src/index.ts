import { Hono } from "hono";
import { logger } from "hono/logger";
import todoRoutes from "./routes/todo.routes.ts";
import { serve } from "@hono/node-server";

const app = new Hono();
app.use("*", logger());

app.get("/", (c) => {
  return c.json({
    message: "Welcome to our Todo API!",
    status: "Server is running",
  });
});

app.route("/todos", todoRoutes);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
