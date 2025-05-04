const client = require("./client");

async function set() {
  const ans = await client.sadd("bikes:racing", ["bike:1", "bike:2", "bike:3"]);
  console.log("Added to set bikes:", ans);
  const ares = await client.sadd("course:cs", [
    "course:1",
    "course:2",
    "course:3",
  ]);
  console.log("Added to set course:", ares);

  const res = await client.sismember("bikes:racing", "bike:1");
  console.log("Is bike:1 in set?", res);

  const bool = await client.scard("bikes:racing");
  console.log("Number of bikes in set:", bool);

  const all = await client.smembers("bikes:racing");
  console.log("All bikes in set:", all);
}

set();
