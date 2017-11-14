import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes,query,stagger	} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  animations:[
  	trigger('headanimation',[
  		
  		transition('*=>*', 
  		animate('3s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-40px)', offset: 0}),
          style({opacity: 1, transform: 'translateY(0px)', offset: .5}),
          style({opacity: 0, transform: 'translateY(0px)', offset: 1})
        ])))
 	  ]),
 	  
  ]
})
export class AppComponent {
  title = 'My Website';

// public hideabout= false;
// public hidemainbody = true;
// public hidemyimage = false;

// public viewresume = ()=>{
// 	this.hideabout = false;
// 	this.hideresume = true;
// 	this.hidemyimage = false;
// 	this.hidemainbody = false;
// }
// public hideresume = true
// public viewabout = ()=>{
// 	this.hideresume = false;
// 	this.hidemainbody = false;
// 	this.hidemyimage = true;

// }
// public viewhome = ()=>{
	
// 	this.hideresume = false;
// 	this.hidemyimage = false;
// 	this.hidemainbody = true;
// }
}

