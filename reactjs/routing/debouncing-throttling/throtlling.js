function searchWithDelay(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    let currentCall = Date.now();
    if (currentCall - lastCall < delay) {
      return;
    } else {
      lastCall = currentCall;
      fn(...args);
    }
  };
}

function search(query) {
  console.log(`searching for ${query}`);
}

const searchwithThrottle = searchWithDelay(search, 1000);

// searchwithThrottle("vik");
searchwithThrottle("vikas");
searchwithThrottle("vikas thakur");
