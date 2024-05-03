import { Hono } from "hono"

const app = new Hono()

async function authMiddleware(c: any, next: any) {
  // c = context, the context of req, res
  
  if (c.req.header("Authorization")) {
    // Do validation
    await next();
  } else {
    return c.text("You dont have accecss");
  }
}

app.post('/', authMiddleware, async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  
  return c.text('Hello Hono!');
})

export default app
