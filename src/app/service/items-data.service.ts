import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Item } from '../models/item.model';
import { items } from '../data/items.data';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  items$ = new BehaviorSubject<Item[]>(items);

}
