import './style.css';

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
  return `
    <tr>
      <td>${data.name}</td>
      <td>${data.points}</td>
    </tr>
  `;
}

const table = document.querySelector('#table-body');

table.innerHTML = dataRank.map((data) => loop(data)).join('');
