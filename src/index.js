import './style.css';

import Leaderboard from './modules/Leaderboard.js';
import loadLeaderboard from './modules/loadLeaderboard.js';
import createNewScore from './modules/createNewScore.js';
import { getScore } from './modules/fetchingFunction.js';

const leaderboard = new Leaderboard();

getScore().then((data) => {
  leaderboard.data = data.result;
  leaderboard.sort();
  loadLeaderboard(leaderboard.data);
});

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  createNewScore();
});

const refreshButton = document.querySelector('#refresh-button');
refreshButton.addEventListener('click', () => {
  getScore().then((data) => {
    leaderboard.data = data.result;
    leaderboard.sort();
    loadLeaderboard(leaderboard.data);
  });
});
