import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs/internal/observable/of';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = 'http://localhost:3000/api/products';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

  getOne(id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Product>(url);
  }

  updateOne(product: Product): Observable<any> {
    return this.httpClient.put(this.url, product, this.httpOptions);
  }

  saveOne(product: Product) {
    return this.httpClient.post<Product>(this.url, product, this.httpOptions);
  }

  deleteOne(product: Product) {
    const id = typeof product === 'number' ? product : product._id;
    const newUrl = `${this.url}/${id}`;
    console.log(newUrl);
    return this.httpClient.delete<Product>(newUrl, this.httpOptions);
  }

  searchByName(name: string): Observable<Product[]> {
    if (!name.trim()) {
      return of([]);  // if not search term, return empty hero array.
    }
    return this.httpClient.get<Product[]>(`${this.url}/?name=${name}`);
  }
}
