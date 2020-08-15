import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

declare function snakeGame(): any;

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    snakeGame();
  }

  redirectToHome(){
    this.router.navigate(['']);
  }

  faArrowLeft = faArrowLeft;
}
