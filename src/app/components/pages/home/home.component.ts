import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardItems: any;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      this.cardItems = data;
      console.log(this.cardItems);
    })

  }
  imgClick(id: any) {
    console.log(id, "Clicked!");
    this.router.navigate(['product', id])
  }
}
