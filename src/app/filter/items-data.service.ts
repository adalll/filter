import { Injectable } from '@angular/core';
import { Item } from './item.model';

import { items } from './items.data';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  public getItems(): Item[] {
    return items;
  }
}
