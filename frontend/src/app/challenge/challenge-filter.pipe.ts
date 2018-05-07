import { Pipe, PipeTransform } from '@angular/core';
import { Challenge } from './challenge/challenge.model';

@Pipe({
  name: 'challengeFilter'
})
export class ChallengeFilterPipe implements PipeTransform {

  transform(challenges: Challenge[], name: String): any {
    if (!name || name.length === 0) {
      return challenges;
    }
    return this.sort(challenges.filter(chal =>
      chal.name.toLowerCase().indexOf(name.toLowerCase())>=0
    ));
  }

  sort(challenges:Challenge[]) {
    challenges.sort((c1,c2)=> {
      return (c2.entries?c2.entries.length:0) - (c1.entries?c1.entries.length:0)
    });
    return challenges;
  }

}
