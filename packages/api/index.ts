import express from "express";
import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from "cors";
import { z } from "zod";


const appRouter = trpc.router().query('status', {
  resolve() {
    return 'connected';
  }
}).mutation('createUser', {
    // validate input with Zod
    input: z.object({ name: z.string().min(5) }),
    async resolve(req) {
      // use your ORM of choice
      // return await UserModel.create({
      //   data: req.input,
      // });
    },
  });



const app = express();
const port = 8080;

app.use(cors());

app.use("/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
}))

app.get("/", (req, res) => {
  res.send("Hello from api");
});

app.listen(port, () => {
  console.log(`api listening at http://localhost:${port}`);
});





/** exports */
export type AppRouter = typeof appRouter;
