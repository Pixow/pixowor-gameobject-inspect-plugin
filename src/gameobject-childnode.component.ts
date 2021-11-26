import { Component, Input, NgModule, OnInit } from "@angular/core";
import { FileStat, PixoworCore, FileConfig } from "pixowor-core";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { BaseConfigObject, NodeType } from "game-capsule";
import { BaseConfigObjectSchemas } from "./component-schema";
import { SceneEditorCanvas } from '@PixelPai/game-core'

export interface NodeProperty {
  label: string;
  key: string;
  value: any;
  type: string;
  format?: string;
  enum?: any[];
  enumNames?: string[];
  disabled: boolean;
}

@Component({
  selector: "gameobject-childnode",
  templateUrl: "./gameobject-childnode.component.html",
  styleUrls: ["./gameobject-childnode.component.scss"],
  providers: [DialogService],
})
export class GameObjectChildnodeComponent implements OnInit {
  @Input() childNode: BaseConfigObject;

  properties: NodeProperty[] = [];

  constructor(
    private pixoworCore: PixoworCore,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    for (const key of Object.keys(this.childNode.properties)) {
      const childNodeSchema = BaseConfigObjectSchemas[this.childNode.type];

      const propertySchema = childNodeSchema.properties[key];

      // SettingSchema need generate dynamic enum from game scenes and spawnpoints

      let disabled;
      if (propertySchema.hasOwnProperty("disabled")) {
        disabled = propertySchema.disabled
      } else {
        disabled = false
      }

      this.properties.push({
        key,
        label: propertySchema.title,
        value: this.childNode.properties[key],
        format: propertySchema.format,
        type: propertySchema.type,
        enum: propertySchema.enum,
        enumNames: propertySchema.enumNames,
        disabled: disabled 
      });
    }
  }

  editComplete(event: any) {
    let { key, value } = event.data;
    console.log("Event: ", event);
    console.log("EditComplete: ", this.properties);

    this.childNode.setProperty(key, value);

    // Emit SceneEditorCanvas response value change
    const sceneEditorCanvas = this.pixoworCore.state.getVariable<SceneEditorCanvas>("SceneEditorCanvas").getValue();

    let changes: { [k: string]: any } = {}

    if (this.childNode.type === NodeType.LocationType) {
      changes.location = {};
      changes.location[key] = value;
    }

    sceneEditorCanvas.syncElement([{
      id: this.childNode.id,
      ...changes
    }])
  }
}
