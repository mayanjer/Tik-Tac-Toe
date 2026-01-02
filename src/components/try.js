function outer() {
  const x = 1;
  const y = 2;

  function inner() {
    console.log(x);
  }
  return inner();
}

outer();
