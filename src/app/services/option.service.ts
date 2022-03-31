import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  constructor(private http:HttpClient) { }
  getOptions(): Observable<Option[]> {
    let host = environment.url+"/listOptionServlet";
    return this.http.get<Option[]>(host);
  }
  addOption(option:Option): Observable<Option> {
    let formData:FormData = new FormData();
    formData.append("nom",option.nom);
    formData.append("Description",option.Description)
    let url = environment.url+"/addOptionServlet";
    return this.http.post<Option>(url,formData)
  }
  deleteOption(option:Option){
    let formData:FormData = new FormData();
    formData.append("nom",option.nom);
    let url = environment.url+"/deleteOptionServlet";
    return this.http.post<Option>(url,formData)
  }
}
