import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

import { items } from '../data/items.data';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  items$ = new BehaviorSubject<Item[]>(items);

}
