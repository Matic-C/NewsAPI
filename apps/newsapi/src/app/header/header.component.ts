import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service'

@Component({
  selector: 'matic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  news: any = [];
  searchValue: string = "";
  startDate: Date;
  endDate: Date;
  selectedAuthor: string;

  constructor(private newsapi: NewsapiService) {}

  ngOnInit(): void {

  }

  sendSearchIntoService(searchValue: string, startDate: Date, endDate: Date) {
    this.selectedAuthor = "";
    this.newsapi.setSearchValue(searchValue);

    if (!startDate && !endDate) {

      if (searchValue) {
        this.newsapi.searchNews(searchValue);
      } else {
        this.newsapi.getNews();
      }
    }
    else if (startDate && !endDate) {
      this.newsapi.setStartDateValue(startDate);
      this.newsapi.dateStartNews();
    }
    else if (!startDate && endDate) {
      this.newsapi.setEndDateValue(endDate);
      this.newsapi.dateEndNews();
    }
    else {
      this.newsapi.setStartDateValue(startDate);
      this.newsapi.setEndDateValue(endDate);
      this.newsapi.dateNews();
    }
  }

}
