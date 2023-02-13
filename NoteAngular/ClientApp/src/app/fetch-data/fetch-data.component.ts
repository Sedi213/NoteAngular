import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public notelist: Note[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Note[]>(baseUrl + 'note').subscribe(result => {
      console.log(result);
      this.notelist = result;
    }, error => console.error(error));
  }
}

interface Note {
  id:number;
  title: string;
  description: string;
  createTime: string;
  
}
