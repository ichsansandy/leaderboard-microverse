import GAME_ID from './environment.js';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAME_ID}/scores/`;

export const postNewScore = async (input) => {
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });
  return resp;
};

export const getScore = async () => {
  const resp = await fetch(url, { method: 'GET' });
  return resp.json();
};
