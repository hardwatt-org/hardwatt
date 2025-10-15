import { invalidate } from "$app/navigation";
import { pb } from "$lib/api"


class LoginModal {
  show = $state(false);
  loginCb: () => void = () => {};
}
export const loginModal = new LoginModal();

/**
 * Shows the login modal (like showLoginModal) but allows to specify a callback
 * which gets run when the login succeeds
 */
export const showLoginModalCb = (cb: () => void) => {
  loginModal.loginCb = cb;
  loginModal.show = true;
}

export const showLoginModal = () => {
  showLoginModalCb(() => {});
}


class User {
  loggedIn = $state(false);
  avatar: string | null = $state(null);
}
export const user = new User();

export const loginWithGithub = async () => {
  return pb.collection("users").authWithOAuth2({ provider: "github" }).then((authData) => {
    refreshUserState();

    // when logged in, reload setups to also show users pending additions
    invalidate("app:setups");

    return authData;
  });
}

export const logout = () => {
  pb.authStore.clear();
  refreshUserState();

  // same as in `loginWithGithub`
  invalidate("app:setups");
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
