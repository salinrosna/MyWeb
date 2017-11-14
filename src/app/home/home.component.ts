import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes,query,stagger	} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
  	
 	  trigger('explainerAnim', [
 	 
      transition('* => *', [
        query('.right', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.right', stagger('1s', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.right', [
          animate(1000, style('*'))
        ])
        
      ])
      
    ]),
    trigger('explainerAnimation', [
      transition('* => *', [
        query('.left', style({ opacity: 0, transform: 'translateX(40px)' })),

        query('.left', stagger('1s', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.left', [
          animate(1000, style('*'))
        ])
        
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
