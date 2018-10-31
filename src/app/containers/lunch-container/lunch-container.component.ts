import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Component({
  selector: 'app-lunch-container',
  templateUrl: './lunch-container.component.html',
  styleUrls: ['./lunch-container.component.scss']
})
export class LunchContainerComponent implements OnInit {
  @Input() itemData : Observable<any>;
  constructor(http:HttpClient) {
    console.log('testing')
   
    this.itemData = Observable.create( function(observer){
      http.get("https://s3.amazonaws.com/br-codingexams/restaurants.json").subscribe(function(res){
        observer.next(res['restaurants'])
      })
    })
    this.itemData.subscribe((res)=>{
      console.log(res)
    })
  }

  ngOnInit() {
  }

}
