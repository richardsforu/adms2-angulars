import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { EMPLOYEES } from './employee';

@Pipe({ // pipe decarator
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  employees = EMPLOYEES;

  transform(value: JSON, by: string, direction: "asc" | "desc"): any {
    value = _.orderBy(value, [by], direction);
    return value;
  }

}
