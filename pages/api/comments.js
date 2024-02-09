// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* Any files inside folder pages/api is mapped to /api/* 
and will be treated as an API endpoint instead of a page.  */

import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = "https://api-ap-south-1.hygraph.com/v2/clkjl6wc311j601uq6nat06zr/master"; //Add your API here

export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI,{
    headers:{
      // Add your Authentication token here
      authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTA3MTI2MjksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2Nsa2psNndjMzExajYwMXVxNm5hdDA2enIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJmOGJkZmRjZi01OWZkLTQxZDUtYjVlOC1mZjIyODZiNDQ1ZDEiLCJqdGkiOiJjbGtwYW5hYWkxZWRvMDF0Nmg5ZGJkbm43In0.spfPIPKUxRP-CG3fklyUagz_dbvgnG_nyzKdjT4YPwxaQbRbgU-QAkyIwBPXUuYOBmWnsTK84G-jNu--cpou9vQ_IcT5oCO4HSr8vj1-53FSILQXMYMF4mmX9h0xG-sQov6kfE6VDB4Aqq1YhNktUMyqm9XLdGGeNbHxu3-P04cxvUnWQThDUh9XGv6TsKr409DHYQlyHR01b8UekgLA81eGauUiL00xwp4-5BNaYi8a8qNLxnxOyqdn4_da3zwUFqIdk-18OJzlv4UJOb0YNmBvRUNizV7YWsumXlDkV503xiMC0VH7CLQUpLv4HQ4xD_tBAe1XKYoeJBvsE0jYwftPo1n5GA280J5jvg36o5m76zshhwse55wey_p-gkNrnfZnAB862Sm2L46lWDmAGrM1xPtrzjtneQWRzOhBUmXafDkQlDhT4oWbW9og0wHaWEFF6yk7e8IUEVJfGTgQE34jVGnbbXATj1wRvSig5oVr4qw6V525hvTEEaOUPneTIVm0YUUH_5AAjUsXuw_uHJgsig3xepRPTuUTDb-mZQlhvCT4hX7_9tpLxCCltXAh3XVDEyjMWy7G2mfTr25zDVYpqvbnxCBNyP4l1lbJ-wq93S3Rv6gKZAHSdYUvtD76Cp2Oi4ud3St2nnJIY2kl_zVEsh-TWMbiUURBpFY_HD4"}`
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