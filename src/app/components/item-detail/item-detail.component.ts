import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() data : any;
  @Input() open : boolean;
  constructor() { }

  ngOnInit() {
    
  }
  close( ){

  }

  formatLocation( item : any ): string{
    
    let str : string = item.location.formattedAddress[0]+ "\n" +
    item.location.formattedAddress[1] ;
    return str
  }

}
