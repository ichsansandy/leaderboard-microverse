import { postNewScore } from './fetchingFunction.js';

export default function createNewScore() {
  const userInput = document.querySelector('#user-input');
  const scoreInput = document.querySelector('#score-input');

  postNewScore({ user: userInput.value, score: Number(scoreInput.value) }).then((resp) => {
    if (resp.status === 201) {
      userInput.value = '';
      scoreInput.value = '';
    }
  });
}
