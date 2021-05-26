const openTooltipBtn = document.getElementById('js-open-tooltip');
const closeTooltipBtn = document.getElementById('js-close-tooltip');
const tooltip = document.getElementById('js-tooltip');

openTooltipBtn.addEventListener('click', (event) => {
  openTooltipBtn.classList.toggle('has-active');

  if (tooltip.classList.contains('is-hidden')) {
    tooltip.classList.remove('is-hidden');
  } else {
    tooltip.classList.add('is-hidden');
  }
});

closeTooltipBtn.addEventListener('click', (event) => {
  openTooltipBtn.classList.remove('has-active');

  if (tooltip.classList.contains('is-hidden')) {
    tooltip.classList.remove('is-hidden');
  } else {
    tooltip.classList.add('is-hidden');
  }
});
