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

// Um para cada _type do GQL?

// client.indices.create({
//   index: "tasks",
//   body: {
//     settings: {
//       index: {
//         number_of_shards: 5,
//         number_of_replicas: 2,
//       },
//     },
//   },
// });

// Criar mapping de um type num index
// createMapping(index){
//     return client.indices.putMapping({
//       index:index,
//       //type:"movie",
//       body:{
//           properties:{
//             movieName : {type:"string"},
//             suggest:{
//               type:"completion",
//               analyzer:"simple",
//               search_analyzer:"simple",
//               payloads:true
//             }
//           }
//         }
//     })
//   }

// Popular (indexar) dados em um index
// addDataToMovieEsIndex:function(document){
//     return elasticClient.index({
//       index:"movies",
//       type:"movie",
//       id:document._id, // for preventing duplicate insertion
//       body:{
//         movieName:document.movie_name,
//         suggest:{
//           input : document.movie_name.split(" "),
//           output : document.movie_name,
//           payload : document
//         }
//       }
//     })
//   }

// getMovieSuggestion: function(input){
//     elasticClient.suggest({
//       index:"movies",
//       body : {
//         moviesuggest:{
//           text: input,
//           completion:{
//             field : "suggest",
//             fuzzy : true
//           }
//         }
//       }
//     },function(err,resp){
//       if(resp){
//         console.log('response ',resp)
//       }
//       if(err){
//         console.log('error ',err);
//       }
//     })
//   }
