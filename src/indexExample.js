const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  cloud: {
    id: "enterprise-search-deployment:ZWFzdHVzMi5henVyZS5lbGFzdGljLWNsb3VkLmNvbTo5MjQzJGM4ZmM0OTE2NmM2YjRiYWVhYzg0ZDU4NTY1Y2FkMDllJDNkNTQxYmUyZDI4NDQ0MjZhZTVhNDRmNWI3MTk3ODBj",
  },
  auth: {
    username: "elastic",
    password: "iRowWP3UHipK1oH8yvmg7j3f",
  },
});

async function run() {
  // Let's start by indexing some data
  await client.index({
    index: "game-of-thrones",
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      character: "Ned Stark",
      quote: "Winter is coming.",
    },
  });

  await client.index({
    index: "game-of-thrones",
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      character: "Daenerys Targaryen",
      quote: "I am the blood of the dragon.",
    },
  });

  await client.index({
    index: "game-of-thrones",
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      character: "Tyrion Lannister",
      quote: "A mind needs books like a sword needs a whetstone.",
    },
  });

  // We need to force an index refresh at this point, otherwise we will not
  // get any result in the consequent search
  await client.indices.refresh({ index: "game-of-thrones" });

  // Let's search!
  const { body } = await client.search({
    index: "game-of-thrones",
    // type: '_doc', // uncomment this line if you are using {es} ≤ 6
    body: {
      query: {
        match: { quote: "winter" },
      },
    },
  });

  console.log(body.hits.hits);
}

run().catch(console.log);
