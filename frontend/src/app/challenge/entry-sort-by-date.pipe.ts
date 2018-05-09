import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from './entry/entry.model';

@Pipe({
  name: 'entrySortByDate'
})
export class EntrySortByDatePipe implements PipeTransform {

  transform(entries: Entry[], args?: any): any {
    return entries.sort((e1,e2) => new Date(e2.created).getTime() - new Date(e1.created).getTime());
  }

}
