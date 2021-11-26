import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FileStat, PixoworCore, FileConfig } from "pixowor-core";
import { TreeModule } from "primeng/tree";
import { ContextMenuModule } from "primeng/contextmenu";
import { TableModule } from "primeng/table";
import { AccordionModule } from "primeng/accordion";
import { DropdownModule } from 'primeng/dropdown';
import { NgxTippyModule, NgxTippyProps } from 'ngx-tippy-wrapper';
import { ContextMenuService, MenuItem, TreeNode } from "primeng/api";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { BaseConfigObject, NodeType, Capsule, SceneNode } from "game-capsule";
import { GameObjectChildnodeComponent } from "./gameobject-childnode.component";
import { FormatPropertyEditorComponent } from "./format-property-editor.component";
import { TwodCoordinatesComponent } from "./twod-coordinates.component";
import { FormatPropertyOutputComponent } from "./format-property-output.component";
import { ComponentSelectorComponent } from "./component-selector.component";

interface City {
  name: string,
  code: string
}

interface GameObjectComponent {
  name: string
  type: any
}

@Component({
  selector: "gameobject-inspect",
  templateUrl: "./gameobject-inspect.component.html",
  styleUrls: ["./gameobject-inspect.component.scss"],
  providers: [DialogService, ContextMenuService],
})
export class GameObjectInspectComponent implements OnInit {
  selectedGameObject: BaseConfigObject;
  selectedGameObjectChildren: BaseConfigObject[];
  sceneCapsule: Capsule;

  gameObjectComponents: GameObjectComponent[] = [
    { name: "天空盒", type: NodeType.SceneryType },
    { name: "Tilemap", type: NodeType.TerrainCollectionType }
  ]
  selectedGameComponent: GameObjectComponent;

  
  templateRef: NgxTippyProps = {
    arrow: true,
    theme: "light",
    allowHTML: true,
    appendTo: "parent",
    interactive: true,
    interactiveBorder: 50
  };

  constructor(
    private pixoworCore: PixoworCore,
    public dialogService: DialogService
  ) {
   
  }

  ngOnInit() {
    this.pixoworCore.state.getVariable<Capsule>("SceneCapsule")
      .subscribe(cap => {
        if (cap) {
          this.sceneCapsule = cap;
        }
      })

    this.pixoworCore.state
      .getVariable<BaseConfigObject>("SelectedGameObject")
      .subscribe((node) => {
        if (node) {
          console.log("🚀 ~ Select ~ node", node);
          const gameObject = this.sceneCapsule.getObject(node.id);
          if (gameObject) {
            this.selectedGameObject = gameObject;

            this.selectedGameObjectChildren = this.getGameObjectChildren(gameObject);
          }
        }
      });
  }

  getGameObjectChildren(node: BaseConfigObject) {
    if (node.type === NodeType.SceneNodeType) {
      return node.children.filter(node => [NodeType.MapSizeType, NodeType.GroundWalkableCollectionType, NodeType.SceneryType].indexOf(node.type) >= 0)
    } else {
      return node.children
    }
  }

  getComponentOptions() {
    this.gameObjectComponents = [
      { name: "天空盒", type: NodeType.SceneryType },
      { name: "Tilemap", type: NodeType.TerrainCollectionType }
    ]
  }

  addComponent() {
    // console.log("🚀 ~ file: gameobject-inspect.component.ts ~ line 69 ~ GameObjectInspectComponent ~ addComponent ~ event", event)
    // const { value } = event;

    // if (value.type === NodeType.SceneryType) {
    //   this.selectedGameObject.cap.add.scenery(this.selectedGameObject as SceneNode);
    // }

    // // 更新面板
    // this.pixoworCore.state.getVariable<BaseConfigObject>("SelectedGameObject").next(this.selectedGameObject);

    // this.dialogService.open(ComponentSelectorComponent, {})
  }
}

@NgModule({
  imports: [
    CommonModule,
    TreeModule,
    TableModule,
    AccordionModule,
    FormsModule,
    DynamicDialogModule,
    ContextMenuModule,
    DropdownModule,
    NgxTippyModule
  ],
  declarations: [
    GameObjectInspectComponent,
    GameObjectChildnodeComponent,
    FormatPropertyEditorComponent,
    FormatPropertyOutputComponent,
    TwodCoordinatesComponent,
    ComponentSelectorComponent
  ],
})
export class GameObjectInspectModule { }
