function searchWithDelay(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
}

function search(query) {
  console.log(`searching for ${query}`);
}

const searchWithDebounce = searchWithDelay(search, 1000);

searchWithDebounce("v");
searchWithDebounce("vi");
searchWithDebounce("vika");
searchWithDebounce("vikas");
searchWithDebounce("vikas thakur");
