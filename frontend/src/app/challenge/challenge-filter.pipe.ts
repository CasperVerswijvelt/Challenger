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


    return challenges.filter(chal =>
      chal.name.toLowerCase().indexOf(name.toLowerCase()) >= 0
    );
  }
}
