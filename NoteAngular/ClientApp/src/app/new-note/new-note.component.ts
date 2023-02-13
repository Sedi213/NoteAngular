import { Component, OnInit ,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewNoteModel } from './NewnotModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  note: NewNoteModel =new NewNoteModel("","")


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,private router:Router) {

  }

  ngOnInit(): void {
  }

  Send(){
    if(this.note.title!="" && this.note.description!=""){
      this.http.post(this.baseUrl + 'note',this.note).subscribe(result => {
        console.log(result);
        this.router.navigate(['/']);
      }, error => console.error(error)); 
    }
  }
}
