<template>
    <v-container>
        <task-modal v-if="isTaskModalOpen" :isOpen="isTaskModalOpen" :editingTask="editingTask" @close="toggleTaskModal"
            @taskSave="onTaskSave" @taskAdd="onTaskAdd" />
        <v-row align="center" justify="center">
            <v-col cols="auto" class="pt-6">
                <v-btn size="large" color="deep-purple-accent-4" @click="toggleTaskModal">Add new task</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="position-fixed end-0 del">
        <v-row>
            <v-col align="end">
                <v-btn size="large" color="error" @click="deleteTasks">Delete selected
                    tasks</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <v-col v-for="taskData in tasks" :key="taskData._id" cols="12" md="6" lg="4" xl="3">
                <Task :data="taskData" @changeTaskStatus="onTaskChecked" @taskEdit="onTaskEdit(taskData)"
                    @deleteTask="onTaskDelete(taskData._id)" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./todoList.js"></script>

<style scoped>
.del {
    right: 0;
    z-index: 10000;
}
</style>