// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* Any files inside folder pages/api is mapped to /api/* 
and will be treated as an API endpoint instead of a page.  */

import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = ""; //Add your API here

export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI,{
    headers:{
      // Add your Authentication token here
      authorization: `Bearer ${""}`
    }
  })
  const query=gql`
    mutation CreateComment($name: String!, $email:String!, $comment:String!, $slug:String!){
      createComment(data:{name:$name, email:$email, comment:$comment,post:{connect: {slug:$slug}}}){id}
    }
  `
  const result =  graphQLClient.request(query, req.body)
  return res.status(200).send(result);
}
