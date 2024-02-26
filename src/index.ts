// Importa los componentes y las historias desde la carpeta src/stories
import CardTest from "../components/CardTest.vue";

// Exporta los componentes y las historias
export default {
  install: (app) => {
    // Registra el componente CardTest globalmente en la aplicación
    app.component("CardTest", CardTest);
  },
};