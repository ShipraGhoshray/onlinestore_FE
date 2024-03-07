import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlinestoreService {
	
	//constructor(@Inject(String) private onlinestoretService: OnlinestoretService);
	constructor(private http:HttpClient) {}
	private baseUrl:string = 'http://localhost:8080';
  	private productUrl:string = this.baseUrl + '/product/';
	
	getProducts(): Observable<Product[]> {
    	return this.http.get<Product[]>(this.productUrl);
  	}

	createProducts(body: Product): Observable<Product> {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Product>(this.productUrl, body, httpOptions );
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