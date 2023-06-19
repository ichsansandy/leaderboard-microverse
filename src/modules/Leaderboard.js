export default class Leaderboard {
  constructor() {
    this.data = [];
  }

  sort() {
    this.data.sort((a, b) => b.score - a.score);
  }
}
