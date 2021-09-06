import {Plugin, QingCore} from 'qing-core'
import { TestComponent } from './test.component';
import pkg from "../package.json";
import { Component, Type } from '@angular/core';
import zhCN from "./i18n/zh-CN.json"
import en from './i18n/en.json'

export class TestPlugin extends Plugin {
  name = pkg.name;
  version = pkg.version;
  description = pkg.description;
  author = pkg.author;

  constructor(private qingCore: QingCore) {
    super();
  }

  getDependencies() {
    return [];
  }

  async prepare(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.qingCore
        .InstallI18n({
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
    this.qingCore.RegistComponent(this.name, <Type<Component>>TestComponent);
    this.qingCore.ActivateInMenu(3, 1, "测试插件", () => {
      this.qingCore.OpenDialog(this.name);
    });
  }

  deactivate() {
    this.qingCore.DeactivateInMenu(3, 1);
  }
}
