import numberWithCommas from './numberSeparator.js';

export default function loadLeaderboard(array) {
  function loop(data) {
    return `
          <tr>
            <td>${data.user}</td>
            <td>${numberWithCommas(data.score)}</td>
          </tr>
        `;
  }

  const table = document.querySelector('#table-body');

  table.innerHTML = array.map((data) => loop(data)).join('');
}
