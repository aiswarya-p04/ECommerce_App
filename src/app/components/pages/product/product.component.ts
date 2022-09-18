import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ICustomer } from 'src/app/shared/customer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id = '';
  productData: any;
  prod: any;

  constructor(private route: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduct();
  }
  getProduct() {
    this.product.getProduct().subscribe(data => {
      this.productData = data;
      let index = this.productData.findIndex((prod: { id: string }) => prod.id == this.id);
      console.log(index, "bla")
      if (index > -1) {
        this.prod = this.productData[index];
      }
      console.log("bla bla", this.prod)
    })
    // console.log("mil gya",this.prod);
  }
}
