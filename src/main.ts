import "@angular/compiler";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { TestModule } from "./test.component";

platformBrowserDynamic()
  .bootstrapModule(TestModule, {
    preserveWhitespaces: false,
  })
  .catch((err) => console.error(err));
