import Swal from 'sweetalert2';
import { postNewScore } from './fetchingFunction.js';

const createNewScore = () => {
  const userInput = document.querySelector('#user-input');
  const scoreInput = document.querySelector('#score-input');

  postNewScore({ user: userInput.value, score: Number(scoreInput.value) }).then((resp) => {
    if (resp.status === 201) {
      userInput.value = '';
      scoreInput.value = '';
      Swal.fire({
        icon: 'success',
        title: 'Good Job',
        text: 'Score updated',
      });
    }
    if (resp.status === 400) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Name or Score can't be empty!",
      });
    }
  });
};

export default createNewScore;
