import { Component, Input, OnInit } from "@angular/core";
import { PixoworCore } from "pixowor-core";
import { DialogService } from "primeng/dynamicdialog";
import { NodeProperty } from "./gameobject-childnode.component";



@Component({
	selector: "component-selector",
	template: `
	 <div class="component-selector-container">
		
	 </div>
  `,
	styles: [
		`
    .file-input {}
    `
	]
})
export class ComponentSelectorComponent implements OnInit {
	constructor(
		private pixoworCore: PixoworCore
	) { }

	ngOnInit() { }
}
