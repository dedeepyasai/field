import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payForm = new FormGroup({
    fName: new FormControl('',  Validators.required),
    email: new FormControl('',  Validators.required),
    carddet: new FormControl('',  Validators.required),
    cvv: new FormControl('',  Validators.required),
    valid: new FormControl('',  Validators.required), 
    phoneNo: new FormControl('',  Validators.required),
 
  })
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log(this.payForm.value)
    this.route.navigate(['/app'])
    }

}
