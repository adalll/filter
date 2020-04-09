import { Injectable } from '@angular/core';
import { items } from './items.data';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  public getItems() {
    return items;
  }
}
