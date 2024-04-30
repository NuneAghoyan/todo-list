import TaskModal from '../TaskModal/TaskModal.vue';
import Task from '../Task/Task.vue';
import TaskApi from '../../utils/taskApi.js';

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
            editingTask: null,
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
        },
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
                    this.tasks.push(newTask)
                    this.toggleTaskModal()
                    this.$toast.success('The task have been created successfully!')
                })
                .catch(this.handleError)
        },
        onTaskSave(editedTask) {
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    let index = this.tasks.findIndex(task => task._id === updatedTask._id)
                    this.tasks[index] = updatedTask;
                    this.toggleTaskModal();
                    this.$toast.success('The task have been updated successfully!');
                })
                .catch(this.handleError)
        },
        onTaskEdit(editingTask) {
            this.editingTask = editingTask;
        },

        onTaskChecked(chekTask) {
            taskApi
                .updateTask(chekTask)
                .then((chekedTask) => {
                    let index = this.tasks.findIndex(task => task._id === chekedTask._id);
                    this.tasks[index] = chekedTask;
                    if (chekedTask.status === 'active') {
                        this.$toast.success('The task have been active!');
                    } else {
                        this.$toast.success('The task have been done!');
                    }
                })
                .catch(this.handleError)
        },

        onTaskDelete(taskId) {
            taskApi
                .deleteTask(taskId)
                .then((id) => {
                    this.tasks = this.tasks.filter((task) => task._id !== id);
                    this.$toast.success('The task have been deleted!');
                })
                .catch(this.handleError)
        },

        handleError(error) {
            this.$toast.error(error.message);
        },

    }
}