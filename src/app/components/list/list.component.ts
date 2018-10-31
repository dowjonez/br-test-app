import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() items: Array<any>;

  constructor(private cd: ChangeDetectorRef) {

   }

  ngOnInit() {
  }

  ngOnChanges( changes: SimpleChanges){
    console.log( changes );

    this.cd.detectChanges()
  }

}
