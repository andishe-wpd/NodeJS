const promisMaker = () => {
  const promisLander = new Promise((resolver, errorHandler) => {
    setTimeout(() => {
      resolver(console.log("done successfully fired"));
    }, 2000);
  });

  return promisLander;
};

promisMaker().then(() => console.log("then fired")).then(()=>console.log('seccond done fired'));
