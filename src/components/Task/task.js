import Checkbox from "../CheckBox/Checkbox.vue";

export default {
    components: {
        Checkbox
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        onDelete(id) {
            this.$emit("delete-task", id);
        },
    },
    computed: {
        createdAt() {
            return this.data.created_at.slice(0, 10);
        },
        // dueTime() {
        //     return this.data.date.slice(0, 10);
        // }
    }
}