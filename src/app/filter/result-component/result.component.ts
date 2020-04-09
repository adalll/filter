import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemsDataService } from '../items-data.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {

  items: Item[];
  routeSub: Subscription;

  constructor( private route: ActivatedRoute, private itemsDataService: ItemsDataService) { }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe((params: Params) => {
      this.items = this.itemsDataService.getItems().filter( (item) => item.name.includes(params.name) && item.type.includes(params.type));
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
