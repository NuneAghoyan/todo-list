import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    components: {
        Datepicker,
    },
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        editingTask: Object
    },
    data() {
        return {
            title: '',
            description: '',
            dueDate: ''
        }
    },
    created() {
        if (this.editingTask) {
            const { title, description, date } = this.editingTask;
            this.title = title;
            this.description = description;
            this.dueDate = date ? new Date(date) : '';
        }
    },
    mounted() {
        this.$refs.title.focus();
    },
    methods: {
        onClose() {
            this.$emit('close');
        },
        onSave() {
            const task = {
                title: this.title.trim(),
                description: this.description
            }
            task.date = this.dueDate ? new Date(this.dueDate).toISOString().slice(0, 10) : '';
            if (this.editingTask) {
                this.$emit('taskSave', {
                    ...this.editingTask,
                    ...task
                })
                return
            }
            this.$emit('taskAdd', task);
        }
    },
    computed: {
        isTitleValid() {
            return !!this.title.trim();
        },
        modalTitle() {
            return this.editingTask ? 'Edit task' : 'Add new task';
        }
    }
}
