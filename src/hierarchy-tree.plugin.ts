import {Plugin, PixoworCore, UIEvents} from 'pixowor-core'
import { HierarchyTreeComponent } from "./hierarchy-tree.component";
import manifest from "../manifest.json";
import { Component, Type } from '@angular/core';
import zhCN from "./i18n/zh-CN.json"
import en from './i18n/en.json'

export class HierarchyTreePlugin extends Plugin {
  constructor(pixoworCore: PixoworCore) {
    super(pixoworCore, manifest);
  }

  async prepare(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.pixoworCore.fileSystemManager
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
    this.colorLog(`${this.name} activate, Pid: ${this.pid}`);
    this.pixoworCore.stateManager.registerComponent(
      this.pid,
      <Component>HierarchyTreeComponent
    );
    this.pixoworCore.workspace.emit(UIEvents.INJECT_PLUGIN_MENU, {
      pid: this.pid,
      label: "Hierarchy",
      command: () => {
        console.log(`Open dialog ${this.pid}`);
        this.pixoworCore.workspace.openDialog(this.pid);
      },
    });
  }

  deactivate() {
    this.pixoworCore.workspace.emit(UIEvents.UNINJECT_PLUGIN_MENU, {
      pid: this.pid,
    });
  }
}
