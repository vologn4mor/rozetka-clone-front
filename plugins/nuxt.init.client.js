export default async context => {
  await context.store.dispatch('initCartItems', context);
  await context.store.dispatch('initLastChecked', context);
  await context.store.dispatch('initFavoriteItems', context);
  await context.store.dispatch('user/initUser', context);
}
