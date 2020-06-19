// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/solutions/javascript

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(activityRank) {
    if(activityRank === 0 || activityRank < -8 || activityRank > 8)
      throw "invalid rank";

    if(activityRank === this.rank - 1 || (activityRank === -1 && this.rank === 1))
      this.progress++;
    else if(activityRank === this.rank)
      this.progress += 3;
    else if(activityRank > this.rank) {
      const rankDiff = activityRank > 0 && this.rank < 0 ? activityRank - this.rank - 1 : activityRank - this.rank;
      this.progress += 10 * rankDiff * rankDiff;
    }

    const newRank = this.rank + Math.floor(this.progress / 100);

    if(newRank === 0)
      this.rank = 1;
    else if(newRank > 8)
      this.rank = 8;
    else
      this.rank = newRank;

    this.progress = this.rank === 8 ? 0 : this.progress % 100;
  }
}