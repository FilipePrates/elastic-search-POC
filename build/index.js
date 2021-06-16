"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

// set environment variables from .env
_dotenv.default.config();

const app = (0, _express.default)();

const {
  Client
} = require("@elastic/elasticsearch");

const client = new Client({
  cloud: {
    id: "enterprise-search-deployment:ZWFzdHVzMi5henVyZS5lbGFzdGljLWNsb3VkLmNvbTo5MjQzJGM4ZmM0OTE2NmM2YjRiYWVhYzg0ZDU4NTY1Y2FkMDllJDNkNTQxYmUyZDI4NDQ0MjZhZTVhNDRmNWI3MTk3ODBj"
  },
  auth: {
    username: "elastic",
    password: "iRowWP3UHipK1oH8yvmg7j3f"
  }
});

async function run() {
  // Let's start by indexing some data
  // await client.index({
  //   index: "game-of-thrones",
  //   body: {
  //     character: "Ned Stark",
  //     quote: "Winter is coming.",
  //   },
  // });
  // await client.index({
  //   index: "game-of-thrones",
  //   body: {
  //     character: "Daenerys Targaryen",
  //     quote: "I am the blood of the dragon.",
  //   },
  // });
  // await client.index({
  //   index: "game-of-thrones",
  //   body: {
  //     character: "Tyrion Lannister",
  //     quote: "A mind needs books like a sword needs a whetstone.",
  //   },
  // });
  // await client.index({
  //   index: "tasks",
  //   body: {
  //     id: "2f1f6838-30f9-47e6-963f-7701793db3ee",
  //     name: "(EF06LP12) Utilizar, ao produzir diferentes gêneros, recursos de coesão referencial ",
  //     type: "ASSIGNMENT",
  //     startDate: {
  //       startDate: "2021-02-16T18:32:45Z",
  //     },
  //     endDate: {
  //       endDate: "2021-12-16T23:59:59Z",
  //     },
  //     isArchived: false,
  //     createdAt: {
  //       createdAt: "2021-02-16T18:35:56-03:00",
  //     },
  //   },
  // });
  // await client.index({
  //   index: "tasks",
  //   body: {
  //     id: "dd0b957e-e77a-484f-a460-9e1167277996",
  //     name: "Tarefa Teste Adição 3134",
  //     type: "ASSIGNMENT",
  //     startDate: {
  //       startDate: "2021-02-16T19:07:42Z",
  //     },
  //     endDate: {
  //       endDate: "2021-02-16T23:59:59Z",
  //     },
  //     isArchived: false,
  //     createdAt: {
  //       createdAt: "2021-02-16T19:17:00-03:00",
  //     },
  //   },
  // });
  // await client.index({
  //   index: "tasks",
  //   body: {
  //     id: "a12c6b29-273f-4e94-937f-ae1cad14e277",
  //     name: "Desafio de Teste do João",
  //     type: "CHALLENGE",
  //     startDate: {
  //       startDate: "2021-02-16T22:54:15Z",
  //     },
  //     endDate: {
  //       endDate: "2021-02-18T23:59:59Z",
  //     },
  //     isArchived: false,
  //     createdAt: {
  //       createdAt: "2021-02-16T22:55:39-03:00",
  //     },
  //   },
  // });
  // here we are forcing an index refresh, otherwise we will not
  // get any result in the consequent search
  // await client.indices.refresh({ index: "game-of-thrones" });
  await client.indices.refresh({
    index: "tasks"
  }); // var properties = {
  //   properties: {
  //     _all: { type: "text", index: true },
  //   },
  // };
  // client.indices.putMapping({ index: "tasks", body: properties });
  // const mappings = await client.indices.getMapping({ index: "tasks" });
  // console.log(mappings.body.tasks.mappings);
  // Let's search!

  const {
    body
  } = await client.search({
    index: "tasks",
    body: {
      query: {
        query_string: {
          query: "desafo~"
        }
      }
    }
  });
  console.log(body.hits.hits);
}

run().catch(console.log); // export default client