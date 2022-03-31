import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Option } from 'src/app/models/option';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.css']
})
export class AddOptionComponent implements OnInit {
  public option:Option = {
    nom: '',
    Description: ''
  };
  public formData:FormData = new FormData();
  constructor(private s:OptionService,private router:Router) { }
  public form = new FormGroup({
    nom:new FormControl('',[Validators.required]),
    Description : new FormControl("",[Validators.required]),
  });
  ngOnInit(): void {
  }

  public addOption():void{
    this.option = this.form.value
    console.log(this.option)
    this.s.addOption(this.option).subscribe(data=>{
      this.router.navigateByUrl("/listOption");
      this.option = data;

    })
   
   }

 
  public reset()
  {
   this.form.reset();
  }

}
