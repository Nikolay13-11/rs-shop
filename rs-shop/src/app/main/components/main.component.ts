import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFromHttpService } from '../services/data-from-http.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  goodsForSlider$?: Observable<any>;
  categories$?: Observable<any>;
  array = [
    {
      id: "CSMV5335MC0S",
      name: "Холодильник с морозильником Beko CSMV5335MC0S",
      imageUrls: [
      "https://cdn21vek.by/img/galleries/476/171/preview/csmv5335mc0s_beko_5a3a4c5cb078c.jpeg",
      "https://cdn21vek.by/img/galleries/476/171/preview_b/csmv5335mc0s_beko_5a3a4c65101e7.jpeg"
      ],
      availableAmount: 5,
      price: 999,
      rating: 5,
      description: "Deserunt esse anim nulla consequat mollit non do occaecat in aute labore fugiat. Amet deserunt ullamco ex et ullamco. Magna irure nostrud sint enim aliqua incididunt consectetur minim mollit ad. Qui minim magna Lorem nulla officia non consequat ad officia proident laborum. Ut non nisi culpa laboris commodo ipsum laboris do ad irure Lorem nulla eiusmod."
      },
      {
        id: "612e05c5924cfcce7c08e41c",
        name: "Смартфон Apple iPhone XR 64GB / MH6P3 (красный)",
        imageUrls: [
        "https://cdn21vek.by/img/galleries/6337/128/preview_b/iphonexr64gbmh6p3_apple_60360c359d386.jpeg",
        "https://cdn21vek.by/img/galleries/6337/128/preview_b/iphonexr64gbmh6p3_apple_60360c3a70248.jpeg",
        "https://cdn21vek.by/img/galleries/6337/128/preview_b/iphonexr64gbmh6p3_apple_60360c3aa1e0e.jpeg"
        ],
        rating: 5,
        availableAmount: 8,
        price: 1798.87,
        description: "eiusmod duis ad elit irure anim amet velit ex in eiusmod commodo nisi dolore aliqua cupidatat voluptate quis eiusmod dolor tempor nulla ullamco cupidatat amet magna ea anim voluptate non id dolore eu elit veniam est pariatur culpa eu velit"
        },
        {
          id: "612e09de0bb16a1ca9260e0e",
          name: "Умные часы детские Aimoto Marvel Герой / 9301109",
          imageUrls: [
          "https://cdn21vek.by/img/galleries/6254/468/preview_b/marvel9301109_aimoto_5fae4927c7ff7.jpeg",
          "https://cdn21vek.by/img/galleries/6254/468/preview_b/marvel9301109_aimoto_5fae492b42c3f.jpeg",
          "https://cdn21vek.by/img/galleries/6254/468/preview_b/marvel9301109_aimoto_5fae492b7a58b.jpeg"
          ],
          rating: 4,
          availableAmount: 16,
          price: 589.53,
          description: "minim duis ea est officia ipsum deserunt ut Lorem qui duis anim nisi cillum ut ex excepteur dolor ea excepteur ex et laboris duis velit culpa aute tempor voluptate voluptate nisi anim ad reprehenderit deserunt exercitation irure ipsum nulla commodo"
          },
  ]
  currentRate = 6;
  constructor(private http:HttpService, private dataService:DataFromHttpService) {}

  updateData() {
    this.http.fetchCategories().subscribe( i =>
      this.dataService.nextcategories(i)
      // pipe(
      //   map(i => this.dataService.nextcategories(i))
      // )
    )
    this.http.fetchGoods().subscribe( i => this.dataService.nextGoods(i))
  }

  getGoodsForSlider() {
    this.dataService.sharedGoods.
      pipe(
    )

  }

  ngOnInit() {
    this.updateData();
    this.getGoodsForSlider()
  }

}
