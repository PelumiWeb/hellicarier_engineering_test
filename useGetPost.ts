import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";


const URL = "https://graphqlzero.almansi.me/api"

const graphQLClient = new GraphQLClient(URL);

export function useGetPosts() {
    return useQuery("get-data", async () => {
      const data = await graphQLClient.request(gql`
      query {
        comments(options: {paginate: {page: 1, limit: 25}}){
        data {
          id
          name
          email
          body
          post {
            title
          }
        }
        }
        }
      `)
      return data
    });
  }
  