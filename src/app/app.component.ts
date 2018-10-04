import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { switchMap, map, filter, debounceTime, distinct, tap } from 'rxjs/operators';

interface IGithub{
  items: Object;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string;
  latestSearch = new Subject<string>();
  loading: boolean;
  results;

  constructor(private http: HttpClient){
    this.results = this.latestSearch
    .pipe(debounceTime(500))
    .pipe(distinct())
    .pipe(filter(term => !!term))
    .pipe(switchMap((term) =>
      this.http.get(`https://api.github.com/search/repositories?q=${term}&sort=stars&order=desc`)
      .pipe(map((res: IGithub) => res.items))
      .pipe(tap(() => {
        console.log("Http Service Called!");
        this.loading = false; 
      }))
    ));
  }

  newSearch(term: string){
    this.latestSearch.next(term);
    this.loading = true;
  }

}//class ends.
