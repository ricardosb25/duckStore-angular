import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	gameCover:string=""
	@Input()
	gameLabel:string="Play"
	@Input()
	gameText:string="Play it now!"
	@Input()
	gamePlataform:string="Plataform"
	@Input()
	gamePrice:string="$$$"

	ngOnInit(): void {

	}

}
