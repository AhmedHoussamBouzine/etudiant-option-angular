import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  public data = { data:[]=new Array<Etudiant>()}
  constructor(private s:EtudiantService) { }

  public form = new FormGroup({
    cne:new FormControl('',[Validators.required]),
    nom:new FormControl('',[Validators.required]),
    prenom : new FormControl("",[Validators.required]),
    option : new FormControl("",[Validators.required])
  });
 
  ngOnInit(): void {
    this. getAllEtudiants();
  }

  getAllEtudiants() {
    this.s.getEtudiants().subscribe(data => { this.data.data = data; console.log(data)})
  }

  deleteOption(etudiant:Etudiant){
   this.s.deleteOption(etudiant).subscribe(data=>{
     console.log(data);
     this.data.data = this.data.data.filter(et=>et.cne !=etudiant.cne);
   });
  }
  

}
