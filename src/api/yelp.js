import axios from "axios";
import key from "./key";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${key}`
  }
});
