import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media-cell',
  templateUrl: './media-cell.component.html',
  styleUrls: ['./media-cell.component.scss']
})
export class MediaCellComponent implements OnInit {
  @Input() data: any;
  @Input() imageURL : string;
  constructor(private domSanitizer: DomSanitizer) { }
  public makeTrustedImage( image : string ){
    const imageString =  JSON.stringify(image).replace(/\\n/g, '');
    const style = 'url(' + imageString + ')';
    return this.domSanitizer.bypassSecurityTrustStyle(style);
    console.log( style)
  }
  ngOnInit() {
  }

}
