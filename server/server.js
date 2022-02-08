const express = require("express");
const {
  ApolloServer,
  gql,
  AuthenticationError,
} = require("apollo-server-express");
const mongoose = require("mongoose");
const cron = require("node-cron");
const cors = require("cors");

const { v1 } = require("uuid");

const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");
const { getWeather, getWeatherAndUpdateDb } = require("./jobs");
const User = require("./model/User");

const city = "Abbottabad";
const appId = "ec3210a8d450bad3af0984990458328d";

const startServer = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    // context: async ({ req }) => {
    //   const weatherKey = req.headers.authorization.split(" ")[1] || "";
    //   console.log("weatherKey ", weatherKey);
    //   const user = await User.findOne({ userId: weatherKey });
    //   console.log("user ", user);

    //   // if (!user) {
    //   //   throw new AuthenticationError("Weather Api Key is Invalid");
    //   // }
    //   // return { user };
    // },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  // app.use((req, res) => {
  //   res.send("Hi from apollo express server");
  // });
  app.use(cors());

  app.post("/create", async (req, res) => {
    // res.send("Hi from create api");
    const userId = v1();
    const user = await User.create({ userId });
    return res.json({ success: true, user });
  });

  await mongoose.connect("mongodb://localhost:27017/test", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("mongoose connected.....");

  // cron.schedule("1 * * * * *", () => {
  // console.log("running a task every minute");
  // getWeatherAndUpdateDb(city, appId).then((weather) => {
  //   console.log(weather);
  // });
  // });
  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
};
startServer();
