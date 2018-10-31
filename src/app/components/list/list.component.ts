import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ComponentRef } from '@angular/core/src/render3';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() items: Array<any>;
  @Input() selectedItem: any;
  @ViewChild("appItemDetail") itemDetail;
  constructor(private cd: ChangeDetectorRef) {

   }

  ngOnInit() {
    console.log(this.itemDetail)
  }

  ngOnChanges( changes: SimpleChanges){
    console.log( changes );
    console.log(this.itemDetail)
    this.cd.detectChanges()
  }

}
