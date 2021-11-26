import { Component, Input, OnInit } from "@angular/core";
import { PixoworCore } from "pixowor-core";
import { DialogService } from "primeng/dynamicdialog";
import { NodeProperty } from "./gameobject-childnode.component";



@Component({
  selector: "format-property-editor",
  template: `
    <ng-container *ngIf="property.format; else inputText">
      <ng-container [ngSwitch]="property.format">
        <ng-container *ngSwitchCase="'select'">
          <select [(ngModel)]="property.value">
            <option
              *ngFor="let item of property.enum; let i = index"
              [ngValue]="item"
            >
              {{ property.enumNames![i] }}
            </option>
          </select>
        </ng-container>
        <ng-container *ngSwitchCase="'textarea'">
          <textarea pInputTextarea [(ngModel)]="property.value"></textarea>
        </ng-container>
        <ng-container *ngSwitchCase="'input:number'">
          <input
            pInputText
            type="number"
            [(ngModel)]="property.value"
          />
        </ng-container>
        <ng-container *ngSwitchCase="'input:checkbox'">
          <input type="checkbox" [(ngModel)]="property.value" />
        </ng-container>
        <ng-container *ngSwitchCase="'input:file'">
          <input
            type="file"
            (change)="onSelectFile($event)"
            class="file-input"
          />
        </ng-container>
        <ng-container *ngSwitchCase="'2d-coordinates'">
          <twod-coordinates [(property)]="property"></twod-coordinates>
        </ng-container>
        <ng-container *ngSwitchCase="'scenery-files'">
          <input
            type="file"
            (change)="onSelectFile($event)"
            class="file-input"
          />
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #inputText>
      <input pInputText type="text" [disabled]="property.disabled" [(ngModel)]="property.value" />
    </ng-template>
  `,
  styles: [
    `
    .file-input {}
    `
  ],
  providers: [DialogService],
})
export class FormatPropertyEditorComponent implements OnInit {
  @Input() property: NodeProperty;

  constructor(
    private pixoworCore: PixoworCore,
    public dialogService: DialogService
  ) {}

  ngOnInit() {}

  onSelectFile(event: any) {}
}
