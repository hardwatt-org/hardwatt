import PocketBase from "pocketbase";

const client = new PocketBase("https://pb.cacaoglass.duckdns.org/");

client.collection("").authRefresh
