import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-cell',
  templateUrl: './media-cell.component.html',
  styleUrls: ['./media-cell.component.scss']
})
export class MediaCellComponent implements OnInit {
  @Input() data: any;
  @Input() imageURL : string;
  constructor() { }

  ngOnInit() {
  }

}
