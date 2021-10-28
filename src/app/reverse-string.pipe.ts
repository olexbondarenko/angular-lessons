import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})

export class ReverseStringPipe implements PipeTransform {
  transform(string: string, reverseCount: number): string {
    var reversedString = "";
    var arrSymbols = string.split("");
    if (+reverseCount === 0 || +reverseCount >= string.length) {
      reversedString = arrSymbols.reverse().join("");
    }
    else {
      let arrStart = arrSymbols.slice(0, arrSymbols.length - reverseCount);
      let arrEnd = arrSymbols.slice(-reverseCount).reverse();
      reversedString = arrEnd.concat(arrStart).join("");
    }
    return reversedString;
  }
}