import { postNewScore } from './fetchingFunction.js';

const createNewScore = () => {
  const userInput = document.querySelector('#user-input');
  const scoreInput = document.querySelector('#score-input');

  postNewScore({ user: userInput.value, score: Number(scoreInput.value) }).then((resp) => {
    if (resp.status === 201) {
      userInput.value = '';
      scoreInput.value = '';
    }
  });
};

export default createNewScore;
