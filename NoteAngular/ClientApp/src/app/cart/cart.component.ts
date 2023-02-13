import { Component, OnInit ,Inject,Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() title:string="";
  @Input() description:string="";
  @Input() createTime:string="";
  @Input() id:number=0;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
   }

  ngOnInit(): void {
    
  }

DeleteNote(){
  
  if(this.id!=0){
    console.log(this.id);

    this.http.delete<string>(this.baseUrl + 'note/'+this.id.toString()).subscribe(result => {
      console.log(result);
      window.location.reload();
    }, error => console.error(error)); 
}}
  
}
