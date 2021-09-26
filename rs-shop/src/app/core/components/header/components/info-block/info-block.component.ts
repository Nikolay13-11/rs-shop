import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/main/services/http.service';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit{

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getIpAddress().subscribe(i => console.log(i))
  }
}
