import { mapMutations } from 'vuex';
import TaskModal from '../../TaskModal/TaskModal.vue';
import ConfirmDialog from '../../ConfirmDialog/ConfirmDialog.vue';
import Task from '../../Task/Task.vue';
import TaskApi from '../../../utils/taskApi.js';

const taskApi = new TaskApi();

export default {
    components: {
        TaskModal,
        ConfirmDialog,
        Task
    },
    data() {
        return {
            isTaskModalOpen: false,
            tasks: [],
            editingTask: null,
            selectedTasks: new Set(),
            isDeleteDialogOpen: false
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

    computed: {
        isDeleteSelectedBtnDisabled() {
            return !this.selectedTasks.size;
        },
        confirmDialogText() {
            return `You are going to delete ${this.selectedTasks.size} task(s), are you sure?`;
        }
    },

    methods: {
        ...mapMutations(['toggleLoading']),
        toggleTaskModal() {
            this.isTaskModalOpen = !this.isTaskModalOpen;
        },
        getTasks() {
            this.toggleLoading();
            taskApi
                .getTasks()
                .then((tasks) => {
                    this.tasks = tasks;
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading()
                })
        },
        onTaskAdd(task) {
            this.toggleLoading();
            taskApi
                .addNewTask(task)
                .then((newTask) => {
                    this.tasks.push(newTask);
                    this.toggleTaskModal();
                    this.$toast.success('The task have been created successfully!');
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },

        onTaskSave(editedTask) {
            this.toggleLoading();
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    this.findAndReplaceTask(updatedTask);
                    this.toggleTaskModal();
                    this.$toast.success('The task have been updated successfully!');
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },
        onTaskEdit(editingTask) {
            this.editingTask = editingTask;
        },

        findAndReplaceTask(updatedTask) {
            const index = this.tasks.findIndex((task) => task._id === updatedTask._id);
            this.tasks[index] = updatedTask;
        },
        onTaskChecked(editedTask) {
            this.toggleLoading();
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    this.findAndReplaceTask(updatedTask);
                    let message = updatedTask.status === 'done' ? 'The task have been done!' : 'The task have been active!';
                    this.$toast.success(message);
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },

        onTaskDelete(taskId) {
            this.toggleLoading();
            taskApi
                .deleteTask(taskId)
                .then(() => {
                    this.tasks = this.tasks.filter((task) => task._id !== taskId);
                    this.$toast.success('The task have been deleted!');
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },

        onSelectedTasksDelete() {
            this.toggleLoading();
            taskApi
                .deleteTasks([...this.selectedTasks])
                .then(() => {
                    this.toggleDeleteDialog();
                    this.tasks = this.tasks.filter((task) => !this.selectedTasks.has(task._id));
                    this.getTasks();
                    this.selectedTasks.clear();
                    this.$toast.success('The selected tasks have been deleted successfully!');
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading();
                })
        },

        toggleDeleteDialog() {
            this.isDeleteDialogOpen = !this.isDeleteDialogOpen;
            if (!this.isDeleteDialogOpen) {
                this.selectedTasks.clear();
            }
        },

        toggleTaskId(taskId) {
            if (this.selectedTasks.has(taskId)) {
                this.selectedTasks.delete(taskId);
            } else {
                this.selectedTasks.add(taskId);
            }
        },

        handleError(error) {
            this.$toast.error(error.message);
        },
    }
}