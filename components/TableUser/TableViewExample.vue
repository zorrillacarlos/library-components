<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <TableContent :columns="tableColumns" :items="userData">
      <template v-slot:name="slotProps">
        <span>{{ slotProps.item.name }}</span>
      </template>
      <template v-slot:email="slotProps">
        <span>{{ slotProps.item.email }}</span>
      </template>
      <template v-slot:age="slotProps">
        <span>{{ slotProps.item.age }}</span>
      </template>
    </TableContent>
  </div>
</template>

<script setup lang="ts">
import TableContent from "./TableContent.vue";

const userData = [
  { name: "Carlos", email: "carlos@example.com", age: 30 },
  { name: "Juan", email: "juan@example.com", age: 25 },
  { name: "Pedro", email: "pedro@example.com", age: 35 },
];

const tableColumns = [
  { label: "Name", field: "name" },
  { label: "Email", field: "email" },
  { label: "Age", field: "age" },
];
</script>
