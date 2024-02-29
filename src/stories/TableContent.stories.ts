// Importa el componente
import TableContent from "../../components/TableUser/TableContent.vue";

// Importa las interfaces
interface TableColumn {
  label: string;
  field: string;
}

interface User {
  name: string;
  email: string;
  age: number;
}

// Define la historia de Storybook
export default {
  title: "Components/TableContent",
  component: TableContent,
};

// Define los datos de ejemplo
const tableColumns: TableColumn[] = [
  { label: "Name", field: "name" },
  { label: "Email", field: "email" },
  { label: "Age", field: "age" },
];

const userData: User[] = [
  { name: "John", email: "john@example.com", age: 20 },
  { name: "Alice", email: "alice@example.com", age: 25 },
  { name: "Bob", email: "bob@example.com", age: 18 },
];

// Define el template de la historia
const Template = (args: any) => ({
  components: { TableContent },
  setup() {
    return { args };
  },
  template: '<TableContent v-bind="args" />',
});

// Define la historia Default
export const TableComponent = Template.bind({});
TableComponent.args = {
  columns: tableColumns,
  items: userData,
};