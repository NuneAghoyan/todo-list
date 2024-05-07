import TaskModal from '@/components/TaskModal/TaskModal.vue';
import Task from '@/components/Task/Task.vue'
import TaskApi from '../../../utils/taskApi.js';

const taskApi = new TaskApi();

export default {
    components: {
        TaskModal,
        Task
    },
    data() {
        return {
            isTaskModalOpen: false,
            tasks: [],
            editingTask: null
        }
    },
    created() {
        this.getTasks();
    },
    watch: {
        editingTask(newValue) {
            if (newValue) {
                this.isTaskModalOpen = true;
            }
        },
        isTaskModalOpen(isOpen) {
            if (!isOpen && this.editingTask) {
                this.editingTask = null;
            }
        }
    },
    methods: {
        toggleTaskModal() {
            this.isTaskModalOpen = !this.isTaskModalOpen;
        },
        getTasks() {
            taskApi
                .getTasks()
                .then((tasks) => {
                    this.tasks = tasks;
                })
                .catch(this.handleError)
        },
        onTaskAdd(task) {
            taskApi
                .addNewTask(task)
                .then((newTask) => {
                    this.tasks.push(newTask);
                    this.toggleTaskModal();
                    this.$toast.success('The task have been created successfully!');
                })
                .catch(this.handleError)
        },

        onTaskSave(editedTask) {
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    this.findAndReplaceTask(updatedTask);
                    this.toggleTaskModal();
                    this.$toast.success('The task have been updated successfully!');
                })
                .catch(this.handleError)
        },
        onTaskEdit(editingTask) {
            this.editingTask = editingTask;
        },

        findAndReplaceTask(updatedTask) {
            const index = this.tasks.findIndex((task) => task._id === updatedTask._id);
            this.tasks[index] = updatedTask;
        },
        onTaskChecked(editedTask) {
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    this.findAndReplaceTask(updatedTask);
                    let message = updatedTask.status === 'done' ? 'The task have been done!' : 'The task have been active!';
                    this.$toast.success(message);
                })
                .catch(this.handleError)
        },

        onTaskDelete(taskId) {
            taskApi
                .deleteTask(taskId)
                .then(() => {
                    this.tasks = this.tasks.filter((task) => task._id !== taskId);
                    this.$toast.success('The task have been deleted!');
                })
                .catch(this.handleError)
        },

        handleError(error) {
            this.$toast.error(error.message);
        },
    }
}