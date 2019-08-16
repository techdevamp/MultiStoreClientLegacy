import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-my-grocery',
  templateUrl: './sell-my-grocery.component.html',
  styleUrls: ['./sell-my-grocery.component.scss']
})
export class SellMyGroceryComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  registerSeller(){
    this.router.navigate(['register-seller']);
  }
}
