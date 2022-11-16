import raw from "./tweets.json" assert {type: "json" };
import {writeJsonFile} from "write-json-file";

console.log(raw)
writeJsonFile('tweets-gql.json', raw.map(tweet => tweet.tweet));
