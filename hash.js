const client = require("./client");

async function hash() {
  await client.hset("Course", {
    name: "Human Computer Interaction",
    code: "SEN352",
    "cr hours": 3,
    instructor: "John Doe",
  });

  await client.hset("bike:1", {
    model: "Deimos",
    brand: "Ergonom",
    type: "Enduro bikes",
    price: 4972,
  });

  const res = await client.hmget("Course", ["name"]);
  console.log(res);

  const ans = await client.hgetall("bike:1");
  console.log(ans);
}

hash();
