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

  constructor( private itemsDataService: DataService) { }

  ngOnInit(): void {
    this.itemsDataService.getFilteredItems();
  }

  ngOnDestroy(): void {
  }

}
