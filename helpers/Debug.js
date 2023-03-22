class Debug {
  log(text, arg = null) {
    if (process.env.NODE_ENV !== 'development') return;
    // eslint-disable-next-line no-console
    arg ? console.log(text, arg) : console.log(text);
  }
}

export default new Debug();
