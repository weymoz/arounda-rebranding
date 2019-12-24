import { createClient } from 'contentful'
import config from "../../config.json"

// Instantiate the app client
export default createClient({
  space: config.space,
  accessToken: config.accessToken
});