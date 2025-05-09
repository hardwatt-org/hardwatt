import { pb } from "$lib/api"


class LoginModal {
  show = $state(false);
  onLogin: () => void = () => {};
}
export const loginModal = new LoginModal();

export const showLoginModal = (onLogin: () => void = () => {}) => {
  loginModal.onLogin = onLogin;
  loginModal.show = true;
}


class User {
  loggedIn = $state(false);
  avatar: string | null = $state(null);
}
export const user = new User();

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
