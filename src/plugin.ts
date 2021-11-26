import { Plugin, PixoworCore, UIEvents } from "pixowor-core";
import { GameObjectInspectComponent } from "./gameobject-inspect.component";
import manifest from "../manifest.json";
import { Component, Type } from "@angular/core";
import zhCN from "./i18n/zh-CN.json";
import en from "./i18n/en.json";

export class GameObjectInspectPlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  async prepare(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.pixoworCore.fileSystem
        .installI18n({
          en: en,
          "zh-CN": zhCN,
        })
        .then(() => {
          console.log("Test plugin prepare");
          resolve(true);
        })
        .catch((error) => reject(error));
    });
  }

  activate() {
    this.colorLog(`😃 ${this.name} activate, Pid: ${this.pid}`);
    this.pixoworCore.state.registerComponent(
      "GameObjectInspect",
      <Component>GameObjectInspectComponent
    );

    console.log("GameObjectInspect Plugin Load in WidgetBar");

    this.pixoworCore.workspace.emit(UIEvents.LOAD_IN_WIDGETBAR, {
      componentName: "GameObjectInspect",
      header: "游戏对象编辑",
    });
  }

  deactivate() {}
}
