import { Component, OnInit, Input, SimpleChanges, ViewChild } from '@angular/core';

/// <reference types="@types/googlemaps" />


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  @Input() location: any;
  @ViewChild("map") map;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges ){
    if( changes.location && changes.location.currentValue){
      const loc =  {lat: this.location.lat, lng:this.location.lng};
      let map = new google.maps.Map(this.map.nativeElement , {
        center:loc,
        zoom: 15
      });
      var marker = new google.maps.Marker({position:loc, map: map});
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function(){
        marker.setAnimation(null)
      }, 3000);
    }
  }

}
