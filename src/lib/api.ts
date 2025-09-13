import PocketBase from "pocketbase";

export const pb = new PocketBase("https://pb.cacao.glass/")

export const deleteSetup = (id: string) => {
  pb.collection("setups").delete(id);
}
