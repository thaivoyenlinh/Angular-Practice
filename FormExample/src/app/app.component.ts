import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myForm';

  myForm: FormGroup = new FormGroup({});
  Genders: string[] = ['Nam', 'Nữ', 'Khác']; //Khai báo genders là mảng các chuỗi và gán giá trị
  Jobs: string[] = ['Teacher', 'Student', 'Programmer', 'Other'];
  Favorites: string[] = ['Music', 'Fashion', 'Sport', 'Travel'];

  constructor(){}

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      image: new FormControl(''),
      gender: new FormControl(),
      job: new FormControl(),
      favorite: new FormControl(),
    });
  }

  onSubmit(form: FormGroup){
    console.log(form.value);
  }
}
