import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'; 

@Component({
  selector: 'registration-form', // unique name -> identify for this component, notice: different to HTML tag
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  	// title = 'RegistrationForm';

	RegistrationForm: FormGroup // = new FormGroup({}); // turn off strict mode (tsconfig.json) line 8: "strict": false
	jobs: string[] = ['Teacher', 'Student', 'Programmer']
	favorites: Array<any> = [
		{name: 'Sport', value: 'Sport'},
		{name: 'Music', value: 'Music'},
		{name: 'Fashion', value: 'Fashion'},
		{name: 'Travel', value: 'Travel'}
	];
	genders: ['Male', 'Female']

	// temp : FormControl;

  	constructor(private fb: FormBuilder) {
   	}

	//Save checkbox checked to checkArray
	onCheckboxChange(e) {
		// console.log(e);
		// let a : number = 4;
		// let b : number[] = [];
		// b = [a];

		// console.log(this.RegistrationForm.get('checkArray'));
		//SAI const checkArray: FormArray = this.fb.array([this.RegistrationForm.get('checkArray')]); // == this.RegistrationForm.get('checkArray') as FormArray;
		const checkArray: FormArray = this.RegistrationForm.get('checkArray') as FormArray;
		// console.log(checkArray);
		//line 35 == line 33

		// checkArray = new Array(2); 
		// {
		// 0: [],
		// 1: []
		// }

		if(e.target.checked == true){
			checkArray.push(new FormControl(e.target.value));
			// console.log(checkArray);
			// checkArray = new Array(2); 
			// {
			// 0: [],
			// 1: ['Sport']
			// }
		} 
		else {
			let i: number = 0;
			checkArray.controls.forEach((item: FormControl) => {
				if(item.value == e.target.value) {
					checkArray.removeAt(i);
					return;
				}
				i++;
			});

		}
	}

	ngOnInit(): void {
		this.RegistrationForm = this.fb.group({
			username: new FormControl(),
			password: new FormControl(''),
			password_confirm: new FormControl(''),
			image: new FormControl(''),
			job: new FormControl(this.jobs[0]),
			gender: new FormControl(),
			checkArray: this.fb.array([]) // tracking, save checkbox checked value, array of FormControl
		});

		// this.temp  = new FormControl();
		// this.temp = new FormControl('aaaaa');
	}

	// abc(){
	// 	console.log(this.temp);
	// }

	onSubmit(){
		console.log(this.RegistrationForm.value);
	}

}
