import { Pipe, PipeTransform } from '@angular/core';
import { Challenge } from './challenge/challenge.model';

@Pipe({
  name: 'sortByEntries'
})
export class SortByEntriesPipe implements PipeTransform {

  transform(challenges: Challenge[]): any {
    if(typeof challenges !== "undefined")
    challenges.sort((c1,c2)=> {
      return (c2.entries?c2.entries.length:0) - (c1.entries?c1.entries.length:0)
    });
    return challenges;
  }

}
