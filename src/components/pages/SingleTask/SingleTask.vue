<template>
    <v-container>
        <task-modal v-if="isTaskModalOpen" :isOpen="isTaskModalOpen" :editingTask="task" @close="toggleTaskModal"
            @taskSave="onTaskSave" />
    </v-container>
    <v-card v-if="task" class="mx-auto mb-2 mt-10 ps-5" elevation="16" color="green-lighten-5" max-width="600">
        <v-card-item>
            <v-card-title class="text-wrap">
                {{ task.title }}
            </v-card-title>
        </v-card-item>
        <v-card-text>
            {{ task.description }}
        </v-card-text>
        <v-card-text class="pt-0">
            Status: {{ task.status }}
        </v-card-text>
        <v-card-text class="pt-0">
            Created at: {{ createdAt }}
        </v-card-text>
        <v-card-text class="pt-0">
            Due date: {{ dueDate }}
        </v-card-text>
        <v-card-actions>
            <v-btn :color="checked" variant="elevated" @click="onChangeStatus(task)">
                <v-icon v-if="active" icon="mdi-check-outline" />
                <v-icon v-else icon="mdi-undo-variant" />
            </v-btn>
            <v-btn color="warning" variant="elevated" @click="toggleTaskModal">
                <v-icon icon="mdi-archive-edit-outline" />
            </v-btn>
            <v-btn color="error" variant="elevated" @click="onDelete">
                <v-icon icon="mdi-delete-outline" />
            </v-btn>
        </v-card-actions>
    </v-card>
    <h4 v-else>Task not found!</h4>
</template>

<script src="./singleTask.js"></script>