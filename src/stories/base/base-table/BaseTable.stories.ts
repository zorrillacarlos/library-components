import type { Meta, StoryObj } from "@storybook/vue3";
import BaseTable from '../../../../components/base/base-table/BaseTable.vue';

const meta = {
    title: 'Base/BaseTable',
    component: BaseTable,
    tags: ['autodocs'],
    args: {
        title: 'Title table here',
        head: ['Name', 'Email', 'Age'],
        body: [
            { id: '1', values: [
                {id: 'name', value: 'Juan'}, {id: 'email', value: 'juan@example'}, {id: 'age', value: '30'},
            ]},
            { id: '2', values: [
                {id: 'name2', value: 'Carlos'}, {id: 'email', value: 'carlos@example'}, {id: 'age', value: '20'}
            ]},
        ]
    }
} satisfies Meta<typeof BaseTable>;

export default meta;

type Story = StoryObj<typeof BaseTable>;

const Templates: Story = {
    render: (args) => ({
        components: { BaseTable },
        setup() { return { args } },
        template: `
        <div>
            <BaseTable
                :head="args.head"
                :body="args.body"
            >
                <template #title>{{ args.title }}</template>
                <template #head="{ property }">{{ property }}</template>
                <template #cell="{ property: { value } }">{{ value }}</template>
            </BaseTable>
        </div>
    `,
    }),
}

export const Default: Story = {
    ...Templates,
    args: {},
}