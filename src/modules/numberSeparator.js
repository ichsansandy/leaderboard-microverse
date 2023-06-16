export default function numberWithCommas(numberInput) {
  return numberInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
