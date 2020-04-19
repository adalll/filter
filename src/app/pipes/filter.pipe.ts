import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item.model';
import { Params } from '@angular/router';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Item[], filter: Params): Item[] {
    if (!filter.name.trim() && !filter.type.trim()) {
      return items;
    }
    return items.filter( (item) => item.name.includes(filter.name) && item.type.includes(filter.type));
  }
}
