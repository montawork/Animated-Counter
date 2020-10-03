const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.textContent;
    const i = target / speed;

    if (count < target) {
      counter.textContent = Math.ceil(count + i);
      setTimeout(updateCount, 1);
    } else {
      count.textContent = target;
    }
  };
  updateCount();
});
