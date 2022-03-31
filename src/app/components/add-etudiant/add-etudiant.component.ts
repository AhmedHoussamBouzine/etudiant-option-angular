import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { Option } from 'src/app/models/option';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  [x: string]: any;
  public data: Option[] = [];
  public option: Option = {
    nom: "",
    Description: ""
  };
  public etudiant: Etudiant = {
    cne: '',
    nom: '',
    prenom: '',
    option: this.option
  };
  constructor(private serviceEtudiant: EtudiantService, private serviceOption: OptionService, private router: Router) { }
  public form = new FormGroup({
    cne: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    option: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
    this.getAllOption()
  }

  public addEtudiant(): void {
    this.etudiant = this.form.value
    this.option.nom = this.form.get("option")?.value;
    this.etudiant.option = this.option
    this.serviceEtudiant.addEtudiant(this.etudiant).subscribe(data => {
      this.etudiant = data;
      this.router.navigateByUrl("/listEtudiant");
      console.log(data)
    })
  }
  getAllOption() {
    this.serviceOption.getOptions().subscribe(data => { this.data = data; console.log(data) })
  }

}
