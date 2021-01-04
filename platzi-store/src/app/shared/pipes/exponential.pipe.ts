import { Pipe, PipeTransform } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value, 2);
  }

}
