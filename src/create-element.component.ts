import { Component, Inject } from "@angular/core";
import { DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "create-element",
  template: `
    <div class="create-element">
      <input [(ngModel)]="name" />

      <button (click)="create()">OK</button>
    </div>
  `,
  styles: [``],
})
export class CreateElementComponent {
  name = "";

  constructor(private ref: DynamicDialogRef) {}

  public async create() {
    this.ref.close(this.name);
  }
}
