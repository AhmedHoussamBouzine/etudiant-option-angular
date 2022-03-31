import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  constructor(private http:HttpClient) { }
  getEtudiants(): Observable<Etudiant[]> {
    let host = environment.url+"/listEtudiantServlet";
    return this.http.get<Etudiant[]>(host);
  }
  addEtudiant(etudiant:Etudiant): Observable<Etudiant> {
    let formData:FormData = new FormData();
    formData.append("cne",etudiant.cne);
    formData.append("nom",etudiant.nom);
    formData.append("prenom",etudiant.prenom);
    formData.append("option",etudiant.option.nom);
    let url = environment.url+"/addEtudiantServlet";
    return this.http.post<Etudiant>(url,formData)
  }
  deleteOption(etudiant:Etudiant){
    let formData:FormData = new FormData();
    formData.append("cne",etudiant.cne);
    let url = environment.url+"/deleteEtudiantServlet";
    return this.http.post<Etudiant>(url,formData)
  }
}
