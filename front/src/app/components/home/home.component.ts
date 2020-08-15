import { Component, OnInit } from '@angular/core';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void { }

  redirectToSnake(){
    this.router.navigate(['/snake']);
  }

  faDragon = faDragon;
}
