import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdinr',
  standalone: true
})
export class UsdinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    if(x)
      return value*x
    // console.log(args)
    // console.log(x)
    return value*84.11
  }

}
