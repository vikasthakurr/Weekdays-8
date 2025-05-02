let a = 2;
function increment() {
  function show() {
    let a = 40;

    function show2() {
      a = a + 1;
    //   let b = 40;
      console.log(a);
    }

    show2();
  }
  show();
}
increment();
