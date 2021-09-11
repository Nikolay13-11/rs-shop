import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  constructor(private h:HttpService) {}

  ngOnInit() {
    this.h.fetchCategoties().subscribe( i => console.log(i)
    )
  }

}
