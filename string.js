const client = require("./client");

async function init() {
  await client.set("msg:1", "Hello Redis!");
  const result = await client.get("user:2");
  console.log("Result from Redis:", result);
  const answer = await client.get("msg:1");
  console.log("Answer from Redis:", answer);

  await client.expire("msg:1", 10);
}

init();
