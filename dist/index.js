"use strict";
const app = require("./app");
app.listen(app.get("port"), () => {
  console.log("nombre de la aplicacion", app.get("name"));
  console.log("puerto de la aplicacion", app.get("port"));
});
//# sourceMappingURL=index.js.map
