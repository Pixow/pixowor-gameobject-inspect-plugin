import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { DialogService } from "primeng/dynamicdialog";
import { NodeProperty } from "./gameobject-childnode.component";

interface TwodCoordinates {
	x: number;
	y: number;
}

@Component({
	selector: "twod-coordinates",
	template: `
	<div class="coordinates-container">
		<input type="number" [(ngModel)]="property.value.x" (onChange)="change()"/>
		<input type="number" [(ngModel)]="property.value.y" (onChange)="change()"/>
	</div>
  `,
	styles: [
		`.coordinates-container {
				display: flex;
			}

		 .coordinates-container > input {
			 width: 50%;
		 }
		`
	],
	providers: [DialogService],
})
export class TwodCoordinatesComponent implements OnInit {
	@Input() property: NodeProperty;
	@Output() propertyChange = new EventEmitter();

	x: number = 0;
	y: number = 0;

	constructor(
		public dialogService: DialogService
	) { }

	ngOnInit() {
	 }

	 change() {
		 this.propertyChange.emit(this.property);
	 }
}
