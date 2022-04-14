import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service'

@Component({
  selector: 'matic-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  providers: [ NewsapiService ]
})

export class NewsListComponent implements OnInit {

  news: any = [];
  searchValue: string = "";
  startDate: Date;
  endDate: Date;
  selectedAuthor: string;

  constructor() { }

  ngOnInit(): void {

  }

  /***/
  setNews(news: any) {
    this.news = news;
  }
  /***/

  filterByAuthor(event: any) {
    this.selectedAuthor = event.value;
  }
}
