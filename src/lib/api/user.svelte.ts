class User {
  loggedIn = $state(false);
  avatar: string | null = $state(null);
}
export const user = new User();
