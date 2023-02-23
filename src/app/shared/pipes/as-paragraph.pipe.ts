import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asParagraph'
})
export class AsParagraphPipe implements PipeTransform {

  transform(value: string | string[]): string[] {
    if(typeof(value) == "string") {
      return [value];
    } else {
      return value
    }
  }

}
