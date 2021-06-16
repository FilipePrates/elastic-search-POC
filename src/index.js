import express from "express";
import dotenv from "dotenv";
import { initializeDatabase } from "./initialize";

// set environment variables from .env
dotenv.config();

const app = express();

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

  await client.index({
    index: "tasks",
    body: {
      id: "2f1f6838-30f9-47e6-963f-7701793db3ee",
      name: "(EF06LP12) Utilizar, ao produzir diferentes gêneros, recursos de coesão referencial ",
      type: "ASSIGNMENT",
      startDate: {
        startDate: "2021-02-16T18:32:45Z",
      },
      endDate: {
        endDate: "2021-12-16T23:59:59Z",
      },
      isArchived: false,
      createdAt: {
        createdAt: "2021-02-16T18:35:56-03:00",
      },
    },
  });

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

  // var body = {
  //   properties: {
  //     _all: { type: "keyword", index: true },
  //   },
  // };
  // client.indices.putMapping({ index: "tasks", body: body });

  await client.indices.refresh({ index: "tasks" });

  // const mappings = await client.indices.getMapping({ index: "tasks" });
  // console.log(mappings.body.tasks.mappings);

  // Let's search!
  const { search } = await client.search({
    index: "tasks",
    body: {
      // query: { match: { _all: { query: "João", fuzziness: "AUTO" } } },
      query: { match: { name: { query: "produzir", fuzziness: "AUTO" } } },
      // query: { query_string: { query: "Desafio" } },
    },
  });

  console.log(search);
}

run().catch(console.log);
