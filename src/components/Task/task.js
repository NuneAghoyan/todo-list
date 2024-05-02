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
        onChangeStatus() {
            const task = {};
            task.date = this.data.date ? new Date(this.data.date).toISOString().slice(0, 10) : "";
            task.status = this.data.status === "active" ? "done" : "active";
            this.$emit("changeTaskStatus", {
                ...this.data,
                ...task
            });
        },

        onEdit() {
            this.$emit("taskEdit");
        },

        onDelete() {
            this.$emit("deleteTask");
        },
    },
    computed: {
        createdAt() {
            return this.data.created_at.slice(0, 10);
        },
        dueDate() {
            return this.data.date?.slice(0, 10) || "none"
        },
        checked() {
            return this.data.status === "active" ? "success" : "primary";
        },
        active() {
            return this.data.status === "active";
        }
    }
}

