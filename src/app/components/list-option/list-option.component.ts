import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Option } from 'src/app/models/option';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-list-option',
  templateUrl: './list-option.component.html',
  styleUrls: ['./list-option.component.css']
})
export class ListOptionComponent implements OnInit {
  public data = { data:[]=new Array<Option>()}

  constructor(private s:OptionService) { }

  public form = new FormGroup({
    nom:new FormControl('',[Validators.required]),
    Description : new FormControl("",[Validators.required]),
  });

  ngOnInit(): void {
    this.getAllOption();
  }

  getAllOption() {
    this.s.getOptions().subscribe(data => { this.data.data = data; console.log(data)})
  }

  deleteOption(option:Option){
    this.s.deleteOption(option).subscribe(data=>{
      console.log(data);
      this.data.data = this.data.data.filter(op=>op.nom != option.nom);
    });
  }

  public reset()
  {
   this.form.reset();
  }

}
