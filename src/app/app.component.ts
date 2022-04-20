import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{

  ngOnInit(): void
  {
     particlesJS.load('particles-js', '../assets/js/particles-js.json', function ()
    {
      console.log('particles.js loaded - callback');
    });
  }
}
