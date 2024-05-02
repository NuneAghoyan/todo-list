<template>
    <v-card class="mx-auto mb-2 ps-5" elevation="16" color="green-lighten-5" width="auto" height="400">
        <v-card-item>
            <Checkbox />
            <v-card-title>
                {{ data.title }}
            </v-card-title>
        </v-card-item>
        <v-card-text>
            {{ data.description }}
        </v-card-text>
        <v-card-text>
            Status: {{ data.status }}
        </v-card-text>
        <v-card-text>
            Created at: {{ createdAt }}
        </v-card-text>
        <v-card-text>
            Due date: {{ dueDate }}
        </v-card-text>
        <v-card-actions>
            <v-btn :color="checked" variant="elevated" @click="onChangeStatus">
                <v-icon v-if="active" icon="mdi-check-outline" />
                <v-icon v-else icon="mdi-undo-variant" />
            </v-btn>
            <v-btn color="warning" variant="elevated" @click="onEdit">
                <v-icon icon="mdi-archive-edit-outline" />
            </v-btn>
            <v-btn color="error" variant="elevated" @click="onDelete">
                <v-icon icon="mdi-delete-outline" />
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script src="./task.js"></script>