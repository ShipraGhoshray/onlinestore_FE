import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {OnlinestoreService} from './onlinestore.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlinestore';
  constructor(private onlinestoreService: OnlinestoreService) {}

  private baseUrl:string = 'http://localhost:8080';
  private productUrl:string = this.baseUrl + '/product/v1/';

  products: Product[];
  productSearchForm: FormGroup;
  currentName: string;
  currentPrice: number;
  currentType:string;
  currentProducts: Product[];

  ngOnInit() {
	  this.productSearchForm = new FormGroup ({
      name: new FormControl(''),
      type: new FormControl(''),
      price: new FormControl('')
    });

    this.productSearchForm.valueChanges.subscribe(form => {
		this.currentName = form.name;
		this.currentPrice = form.price;
     	this.currentType = form.type;
		console.log(this.currentName);
      	console.log(this.currentPrice);
      	console.log(this.currentType);
    });

    this.products = [ new Product(101, "Bread", 10 ,"Grocceries"),
    	new Product(201, "Milk", 12, "Grocceries"),
    	new Product(301, "Chicken", 14, "Grocceries")
    ];
    
    this.getCurrentProducts();
  }

	  getCurrentProducts() {
    	this.onlinestoreService.getProducts().subscribe( getResult => {
        console.log(getResult);
        this.currentProducts = getResult;
      });
  }
  
  createProducts() {
    this.onlinestoreService.createProducts(new Product(1, this.currentName, this.currentPrice,this.currentType)).subscribe(postResult => {
      console.log(postResult);
      this.getCurrentProducts();
    });
  }
}	
	
export class Product {
  productId: number;
  name: string;
  price: number;
  type:string;

  constructor(productId: number, name: string, price: number, type:string) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.type = type;
  }
}