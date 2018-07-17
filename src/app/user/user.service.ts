import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user.model';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ='http://localhost:3000/api/users';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  getOne(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<User>(url);
  }

  updateOne(user: User): Observable<any> {
    return this.httpClient.put('http://localhost:3000/api/users', user, this.httpOptions);
  }

  saveOne(user: User) {
    console.log(user);
    this.httpClient.post<User>(this.url, user , this.httpOptions).subscribe(
      result => { 
        console.log(result);  
      }, 
      error => console.log('There was an error: ', error));
  }

  deleteOne(user: User) {
    const id = typeof user === 'number' ? user : user._id;
    const newUrl = `${this.url}/${id}`;
    return this.httpClient.delete<User>(newUrl, this.httpOptions);
  }

  searchByName(name: string): Observable<User[]> {
    if (!name.trim()) {
      return of([]);  // if not search term, return empty hero array.
    }
    return this.httpClient.get<User[]>(`${this.url}/?name=${name}`);
  }
}
