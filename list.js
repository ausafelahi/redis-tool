const client = require("./client");

async function list() {
  /* await client.lpush("message", 1);
  await client.lpush("message", 2);
  await client.lpush("message", 3);
  await client.lpush("message", 4);

  await client.rpush("message", 5);
  const result = await client.rpop("message", 1);
  const result = await client.lpop("message", 1);
  console.log(result); */

  const ans = await client.lpush("Course:CS", [
    "SEN251",
    "SEN361",
    "SEN352",
    "SEN232",
  ]);
  /*   const ans2 = await client.lpush("Course:CS", "SEN361");
  const ans3 = await client.lpush("Course:CS", "SEN352");
  const ans4 = await client.lpush("Course:CS", "SEN232"); */

  //const result = ans;
  //const response = await client.llen("Course:CS");
  const res = await client.ltrim("Course:CS", 0, 12);
  console.log(res);
}

list();
