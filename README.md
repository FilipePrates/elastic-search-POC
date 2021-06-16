# GRANDstack Starter - GraphQL API

## Quick Start

Install dependencies:

```
npm install
```

Start the service:

```
npm start
```

This will start the service (by default on localhost:????) where you can issue requests

## Configure

Set your credentials in `.env`. For example:

_.env_

```
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=letmein
```

## Deployment

docker network create elastic
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.13.2
docker run --name elastic-search-POC --net elastic -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.13.2
