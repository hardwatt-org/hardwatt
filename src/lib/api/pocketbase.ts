import PocketBase from "pocketbase";
import { user } from "$lib/api/user.svelte"

export const pb = new PocketBase("https://pb.cacao.glass/");

// it would be sooo nice to have a enum like
// enum LogInState {
//   LoggedOut,
//   LoggedIn(Userinfo)
// }
//
// struct Userinfo {
//   avatar: String,
//   username: String,
// }
//
// then you would only get the users info, when logged in, and ahhh

export const loginWithGithub = async () => {
  await pb.collection("users").authWithOAuth2({ provider: "github" }).then(() => {
    refreshUserState();
  })
}

export const logout = () => {
  pb.authStore.clear();
  refreshUserState();
}

export const refreshUserState = () => {
  // TODO: better checking (https://pocketbase.io/docs/authentication/#auth-token-verification)
  if (pb.authStore.isValid) {
    user.loggedIn = true;

    user.avatar = pb.files.getURL(pb.authStore.record, pb.authStore.record.avatar, { thumb: "100x100" }) || null;

  } else {
    user.loggedIn = false;
    user.avatar = null;
  }

}
