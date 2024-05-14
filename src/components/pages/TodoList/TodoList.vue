<template>
    <v-container>
        <task-modal v-if="isTaskModalOpen" :isOpen="isTaskModalOpen" :editingTask="editingTask" @close="toggleTaskModal"
            @taskSave="onTaskSave" @taskAdd="onTaskAdd" />

        <confirm-dialog :isOpen="isDeleteDialogOpen" title="Attention!" :text="confirmDialogText"
            @close="toggleDeleteDialog" @confirm="onSelectedTasksDelete" />

        <v-row align="center" justify="center" class="mt-4">
            <v-col cols="auto" class="pt-14">
                <v-btn size="large" color="deep-purple-accent-4" @click="toggleTaskModal">Add new task</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <v-col v-for="taskData in tasks" :key="taskData._id" cols="12" md="6" lg="4" xl="3">
                <Task :data="taskData" :isSelected="selectedTasks.has(taskData._id)"
                    @taskSelect="toggleTaskId(taskData._id)" @changeTaskStatus="onTaskChecked"
                    @taskEdit="onTaskEdit(taskData)" @deleteTask="onTaskDelete(taskData._id)" />
            </v-col>
        </v-row>
    </v-container>
    <v-btn :disabled="isDeleteSelectedBtnDisabled" class="delete-selected-btn" color="error" variant="elevated"
        @click="toggleDeleteDialog">
        <v-icon icon="mdi-delete-outline" /> Delete selected
    </v-btn>
</template>

<script src="./todoList.js"></script>

<style scoped>
.delete-selected-btn {
    position: fixed;
    right: -144px;
    bottom: 140px;
}

.delete-selected-btn:hover {
    animation-name: btn-animation;
    animation-duration: 0.8s;
    right: 20px;
}

@keyframes btn-animation {
    from {
        right: -144px;
    }

    to {
        right: 20px;
    }
}
</style>