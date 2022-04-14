import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewsListComponent } from '../news-list/news-list.component';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient, private newsList: NewsListComponent) {
    this.getNews();
  }

  search: string = "";
  startDate: string = "";
  endDate: string = "";
  apiKey = "6afb713f7a4743f890e89e5e2c00be90";

  setSearchValue(value: string) {
    if (value) {
      this.search = encodeURIComponent(value);
    }
  }

  setStartDateValue(startDate: Date) {
    if (startDate) {
      this.startDate = encodeURIComponent(startDate.toISOString().split('T')[0]);
    }
  }

  setEndDateValue(endDate: Date) {
    if (endDate) {
      this.endDate = encodeURIComponent(endDate.toISOString().split('T')[0]);
    }
  }

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.apiKey).subscribe({
      next: data => this.newsList.setNews(data['articles']),
      error: error => console.error(error)
    });
  }

  searchNews(searchValue: string) {
    return this.http.get('https://newsapi.org/v2/everything?q=' + searchValue + '&apiKey='+this.apiKey).subscribe({
      next: data => this.newsList.setNews(data['articles']),
      error: error => console.error(error)
    });
  }

  dateStartNews() {
    return this.http.get('https://newsapi.org/v2/everything?q=' + this.search + '&from=' + this.startDate + '&apiKey='+this.apiKey).subscribe({
      next: data => this.newsList.setNews(data['articles']),
      error: error => console.error(error)
    });
  }

  dateEndNews() {
    return this.http.get('https://newsapi.org/v2/everything?q=' + this.search + '&to=' + this.endDate + '&apiKey='+this.apiKey).subscribe({
      next: data => this.newsList.setNews(data['articles']),
      error: error => console.error(error)
    });
  }

  dateNews() {
    return this.http.get('https://newsapi.org/v2/everything?q=' + this.search + '&from=' + this.startDate + '&to=' + this.endDate + '&apiKey='+this.apiKey).subscribe({
      next: data => this.newsList.setNews(data['articles']),
      error: error => console.error(error)
    });
  }
}


