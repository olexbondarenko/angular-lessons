import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})

export class ReverseStringPipe implements PipeTransform {
  transform(string: string, reverseCount: number): string {
    let reversedString = "";
    let arrSymbols = string.split("");
    if (+reverseCount === 0 || +reverseCount >= string.length) {
      reversedString = arrSymbols.reverse().join("");
    }
    else {
      let arrStart = arrSymbols.slice(0, reverseCount).reverse();
      let arrEnd = arrSymbols.slice(reverseCount, arrSymbols.length);
      reversedString = arrStart.concat(arrEnd).join("");
    }
    return reversedString;
  }
}