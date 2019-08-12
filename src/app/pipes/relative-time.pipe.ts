import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import 'moment/locale/es'

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value).fromNow()
  }

}
