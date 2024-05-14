import { mapMutations } from 'vuex';
import TaskApi from '../../../utils/taskApi.js';
import TaskModal from '../../TaskModal/TaskModal.vue';

const taskApi = new TaskApi();

export default {
    components: {
        TaskModal
    },
    data() {
        return {
            task: null,
            isTaskModalOpen: false
        }
    },
    created() {
        this.getTask();
    },
    methods: {
        ...mapMutations(['toggleLoading']),

        toggleTaskModal() {
            this.isTaskModalOpen = !this.isTaskModalOpen;
        },

        getTask() {
            this.toggleLoading();
            const taskId = this.$route.params.taskId;
            taskApi
                .getSingleTask(taskId)
                .then((task) => {
                    this.task = task;
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },

        onTaskSave(editingTask) {
            this.toggleLoading();
            this.task = editingTask;
            taskApi
                .updateTask(editingTask)
                .then(() => {
                    this.toggleTaskModal();
                    this.$toast.success('The task has been updated successfully!');
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },

        onChangeStatus(editingTask) {
            this.toggleLoading();
            this.task.status = editingTask.status === 'active' ? 'done' : 'active';
            taskApi
                .updateTask(editingTask)
                .then(() => {
                    let message = this.task.status === 'done' ? 'The task has been done!' : 'The task has been active!';
                    this.$toast.success(message);
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },

        onDelete() {
            this.toggleLoading();
            const singleTaskId = this.task._id;
            taskApi
                .deleteTask(singleTaskId)
                .then(() => {
                    this.$router.push('/');
                    this.$toast.success('The task has been deleted!');
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },

        handleError(error) {
            this.$toast.error(error.message);
        },
    },

    computed: {
        createdAt() {
            return this.task.created_at.slice(0, 10);
        },
        dueDate() {
            return this.task.date?.slice(0, 10) || "none";
        },
        checked() {
            return this.task.status === "active" ? "success" : "primary";
        },
        active() {
            return this.task.status === "active";
        }
    }
}

