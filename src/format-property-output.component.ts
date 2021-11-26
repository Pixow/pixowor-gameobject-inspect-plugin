import { Component, Input, OnInit } from "@angular/core";
import { PixoworCore } from "pixowor-core";
import { DialogService } from "primeng/dynamicdialog";
import { NodeProperty } from "./gameobject-childnode.component";



@Component({
	selector: "format-property-output",
	template: `
    <ng-container *ngIf="property.format; else inputText">
      <ng-container [ngSwitch]="property.format">
        <ng-container *ngSwitchCase="'2d-coordinates'">
          <span>{{property.value.x}}</span>
          <span>{{property.value.y}}</span>
        </ng-container>
		<ng-container *ngSwitchDefault>{{property.value}}</ng-container>
      </ng-container>
    </ng-container>
    <ng-template #inputText>
      {{property.value}}
    </ng-template>
  `,
  styles: [
	`
		span {
			margin-right: 10px;
		}
	`
  ],
	providers: [DialogService],
})
export class FormatPropertyOutputComponent implements OnInit {
	@Input() property: NodeProperty;

	constructor(
		private pixoworCore: PixoworCore,
		public dialogService: DialogService
	) { }

	ngOnInit() { }

	onSelectFile(event: any) { }
}
