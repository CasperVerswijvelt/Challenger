import { Pipe, PipeTransform } from '@angular/core';
import { Challenge } from './challenge/challenge.model';

@Pipe({
  name: 'sortByEntries'
})
export class SortByEntriesPipe implements PipeTransform {

  transform(challenges: Challenge[]): any {
    if(typeof challenges !== "undefined")
    challenges.sort((c1,c2)=> {
      let entryVerschil = (c2.entries?c2.entries.length:0) - (c1.entries?c1.entries.length:0);

      if (entryVerschil == 0) {
        return new Date(c2.dateCreated).getTime() - new Date(c1.dateCreated).getTime();
      }else
        return entryVerschil;
    });
    return challenges;
  }

}
