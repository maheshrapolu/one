import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';
import {Subscription,timer} from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  set;
  data;
  th;
  searchText;
     subscrition:Subscription;
   statusText:string;
  details: any;
  emplye: any;

  constructor(private http: DataService) { }

  ngOnInit() {

    // this.subscrition=timer(0,10000).pipe(
    //   switchMap(()=> this.http.gets()).subscribe((res) => {
    //   this.details = res
    //   console.log("user", this.details);
    // })
    this.subscrition=timer(0,1000).pipe(
      switchMap(()=> this.http.gets())
      ).subscribe(res=>{console.log(res)
        //this.details = res
        this.set=res
        this.details=this.set.hits
        console.log("user", this.details);});
  }
  btn(emd){
  
   this.emplye=emd;
     console.log(emd)
  }
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];
}
