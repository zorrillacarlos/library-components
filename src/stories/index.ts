// Importa los componentes y las historias desde la carpeta src/stories
import { App } from "vue";
import CardTest from "./CardTest.stories";
import TableContent from "./TableContent.stories"; // Importa el nuevo componente

// Exporta los componentes y las historias
export default {
  install: (app: App) => {
    // Registra los componentes globalmente en la aplicación
    app.component("CardTest", CardTest);
    app.component("TableContent", TableContent);
  },
};
