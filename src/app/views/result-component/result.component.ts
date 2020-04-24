import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/item.model';
import {BehaviorSubject, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {

  constructor( private route: ActivatedRoute, private itemsDataService: DataService) { }

  public filteredItems$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(this.itemsDataService.items$.value);
  private filterSub: Subscription;

  ngOnInit(): void {

    this.filterSub = this.route.queryParams
      .subscribe((params) => {
        this.itemsDataService.items$
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
            this.filteredItems$.next(items)
          });
      });
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }

}
