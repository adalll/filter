import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemsDataService } from '../items-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  constructor( private route: ActivatedRoute, private itemsDataService: ItemsDataService) { }

}
