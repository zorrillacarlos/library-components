import { Story } from '@storybook/vue3';
import TableView from '../../components/TableUser/TableView.vue';

export default {
  title: 'Components/TableView',
  component: TableView,
};

const Template: Story = (args) => ({
  components: { TableView },
  setup() {
    return { args };
  },
  template: '<TableView v-bind="args" />',
});

export const TableComponent = Template.bind({});
TableComponent.args = {
  userData: [
    { name: 'Carlos', email: 'carlos@example.com', age: 35 },
    { name: 'Maria', email: 'maria@example.com', age: 25 },
    { name: 'Pedro', email: 'pedro@example.com', age: 30 },
  ],
  tableColumns: [
    { label: 'Name', field: 'name' },
    { label: 'Email', field: 'email' },
    { label: 'Age', field: 'age' },
  ],
};