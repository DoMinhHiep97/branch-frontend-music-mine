import { Pipe, PipeTransform } from '@angular/core';
import { formatTime} from 'rxjs-audio';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      return formatTime(value, args);
    } else {
      return formatTime(value);
    }
  }

}
