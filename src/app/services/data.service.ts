import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Item } from '../models/item.model';
import { items } from '../data/items.data';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor (private route: ActivatedRoute,){}

  items$ = new BehaviorSubject<Item[]>(items);
  public filteredItems$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(this.items$.value);

  public getFilteredItems() {

  this.route.queryParams
    .subscribe((params) => {
      this.items$
        .pipe(
          map ((items) => {
            if (!params.name.trim() && !params.type.trim()) {
              return items;
            }
            return items.filter((item) => (
              item.name.toUpperCase().includes(
                params.name.toUpperCase()
              )
              && item.type.toUpperCase().includes(
                params.type.toUpperCase()
              )
            ))
          })
        )
        .subscribe((items) => {
          console.log('running...');
          console.log(items);
          this.filteredItems$.next(items)
        });
    });
}

}
