export default async context => {
  await context.store.dispatch('initCartItems', context);
  await context.store.dispatch('initLastChecked', context);
}
