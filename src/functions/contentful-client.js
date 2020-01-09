import { createClient } from "contentful";
import config from "../../config.json";

// Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken
});

const getAllPosts = () =>
  client.getEntries({
    content_type: "blogPost"
  });

const getTags= () =>
  client.getEntries({
    content_type: "tag"
  });

export default {
  getAllPosts,
  getTags
}
