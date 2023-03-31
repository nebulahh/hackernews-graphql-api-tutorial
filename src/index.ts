import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { context } from "./context";

export const server = new ApolloServer({
  schema,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

const port = 3000

server.listen({port}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})