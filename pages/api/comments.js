// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* Any files inside folder pages/api is mapped to /api/* 
and will be treated as an API endpoint instead of a page.  */

import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = "https://api-ap-south-1.hygraph.com/v2/clkjl6wc311j601uq6nat06zr/master";

export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI,{
    headers:{
      authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTA3MTI2MjksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2Nsa2psNndjMzExajYwMXVxNm5hdDA2enIvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImY4YmRmZGNmLTU5ZmQtNDFkNS1iNWU4LWZmMjI4NmI0NDVkMSIsImp0aSI6ImNsa3BhbmFhaTFlZG8wMXQ2aDlkYmRubjcifQ.FDRDRpqJILnNtbt6mRHgI__WxU2oywabpR2fdLYibSzGowLdpqqV3bLrKdSbzaM2umSeCR9fc1NwG5VuftTIaGjdGIexLSAFXBG_o33iZad8ELj1uxmUhtbcXn53YjowVq00wICfSiMY5X_k2eXtD3UqvMfg0mzH9mSqMYxCZg_IDQMsyzF6ciRbaPElVW1R-ax4JDhF1OyuejfkAiWgD1fOT4EDscUGoUUDImZYnyR7MdYverQLAOncvYq1fgxM5VLvZVyCo0HMBRe-i298dsqF5g67OTDAtDOtmqaYLbRRSUWIbYcUTPD3kOSM2-CRwSUjtSrBeqAII7W7ODVJhJNRe6v12eJ-5XzsfWGT-R1lPxnP_oLqSETcqiAvXEbcfaLG-Q1IrssseuJQdLd1FmxKRT_mC-Az4cQhv7DXonnaBu-dp_uD8-Z6nCAMQp5eRpUD8rDdfT1gFsfyJp6hEakJCH9okSOJftgHH0aYrCuh3i-ODAQJRKifd_k_m-1i9CCiUiARI4FQ5dOoQ0OqaRdb-lYOiODc4iO1ylyVN0opZyqMsov0DdxEfBt_MWKbai8oKa9F7jTD7LAtKXN3TypVl1pneGuWmdA3Z1_HbzI5yc_lg5u2kFMAV0bnoggJf5zjVKYXpQEQysYnsRkJKsxDjTSvhPevhBnw6hEI8rs"}`
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
