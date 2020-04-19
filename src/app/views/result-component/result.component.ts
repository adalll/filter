import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsDataService } from '../../service/items-data.service';
import { Item } from '../../models/item.model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor( private route: ActivatedRoute, private itemsDataService: ItemsDataService) { }

  public filteredItems$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(this.itemsDataService.items$.value);

  ngOnInit(): void {

    this.route.queryParams
      .subscribe((params) => {
        this.itemsDataService.items$
          .pipe(
            map ((items) => {
              if (!params.name.trim() && !params.type.trim()) {
                return items;
              }
              return items.filter((item) => item.name.includes(params.name) && item.type.includes(params.type) )
            })
          )
          .subscribe((items) => {
            this.filteredItems$.next(items)
          });
      });
  }

  
  
}
