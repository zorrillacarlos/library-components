// Importa los componentes y las historias desde la carpeta src/stories
import CardTest from "../components/CardTest/CardComponent.vue";
import TableContent from "../components/TableUser/TableContent.vue"; // Importa el nuevo componente

// Exporta los componentes y las historias
export default {
  install: (app) => {
    // Registra los componentes globalmente en la aplicación
    app.component("CardTest", CardTest);
    app.component("TableContent", TableContent);
  },
};
