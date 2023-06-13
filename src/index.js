import './style.css';
import GAME_ID from './modules/environment.js';

const dataRank = [
  {
    name: 'John',
    points: Math.floor(Math.random() * 100),
  },
  {
    name: 'Doe',
    points: Math.floor(Math.random() * 100),
  },
  {
    name: 'Mel',
    points: Math.floor(Math.random() * 100),
  },
  {
    name: 'Carl',
    points: Math.floor(Math.random() * 100),
  },
  {
    name: 'Carl',
    points: Math.floor(Math.random() * 100),
  },
  {
    name: 'Carl',
    points: Math.floor(Math.random() * 100),
  },
  {
    name: 'Carl',
    points: Math.floor(Math.random() * 100),
  },
];

function loop(data) {
  console.log(GAME_ID);
  return `
    <tr>
      <td>${data.name}</td>
      <td>${data.points}</td>
    </tr>
  `;
}

const table = document.querySelector('#table-body');

table.innerHTML = dataRank.map((data) => loop(data)).join('');
