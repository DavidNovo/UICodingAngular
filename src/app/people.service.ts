import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {
  }

  getData() {
    console.log(this.http.get('./assets/data.json'));
    return this.http.get('./assets/data.json');
  }
}
