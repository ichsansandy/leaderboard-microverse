export default class Leaderboard {
  constructor() {
    this.data = [];
  }

  sort() {
    this.data.sort((a, b) => a.score - b.score);
  }
}
