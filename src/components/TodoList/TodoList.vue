<template>
    <v-container>
        <task-modal v-if="isTaskModalOpen" :isOpen="isTaskModalOpen" @close="toggleTaskModal" @taskSave="onTaskSave" />
        <v-row align="center" justify="center">
            <v-col cols="auto" class="pt-6">
                <v-btn size="large" color="deep-purple-accent-4" @click="toggleTaskModal">Add new task</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <v-col v-for="taskData in tasks" :key="taskData._id" cols="12" md="6" lg="4" xl="3">
                <Task :data="taskData" @delete-task="$emit('delete-task')" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./todoList.js"></script>