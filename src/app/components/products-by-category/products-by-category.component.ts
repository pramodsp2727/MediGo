import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent implements OnInit {

  TopDetalsBycategory:any;
  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
   this.getProductDetlByCategry();
  }

  getProductDetlByCategry() {
    this.http.getDataFromServer('top-deals-by-category').subscribe({
      next:(response: any) => {
       if (response && response.length > 0){
         this.TopDetalsBycategory = response;
       }
      },

      error:(error:any)=>{

    }

  })
}
}

