import TaskApi from '../../../utils/taskApi.js';
import TaskModal from '@/components/TaskModal/TaskModal.vue';

const taskApi = new TaskApi()

export default {
    components: {
        TaskModal,
    },
    data() {
        return {
            task: null,
            isTaskModalOpen: false,
        }
    },
    created() {
        this.getTask()
    },
    methods: {
        getTask() {
            const taskId = this.$route.params.taskId
            taskApi
                .getSingleTask(taskId)
                .then((task) => {
                    this.task = task
                })
                .catch(this.handleError)
        },

        onSave() {
        },

        onTaskSave(editedTask) {
        },

        onChangeStatus() {
        },

        onEdit(editingTask) {
        },

        onDelete() {
            const singleTaskId = this.$route.params.taskId;
            taskApi
                .deleteTask(singleTaskId)
                .then(() => {
                    this.task = null;
                    this.$toast.success('The task have been deleted!');
                })
                .catch(this.handleError)
        },

        handleError(error) {
            this.$toast.error(error.message)
        },
    },

    computed: {
        createdAt() {
            return this.task.created_at.slice(0, 10);
        },
        dueDate() {
            return this.task.date?.slice(0, 10) || "none"
        },
        checked() {
            return this.task.status === "active" ? "success" : "primary";
        },
        active() {
            return this.task.status === "active";
        }
    }
}

