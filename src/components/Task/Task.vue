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
            Due date: {{ data.date }}
            <!-- {{ dueTime }} -->
        </v-card-text>

        <!-- <v-container class="text-center">
                <v-row justify="center">
                    <v-col cols="12" md="4" sm="6">
                        <v-btn rounded="lg" elevated="1" color="success" block>Done</v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <v-btn rounded="lg" elevated="1" color="warning" block>Edit</v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <v-btn rounded="lg" elevated="1" color="error" block>Delete</v-btn>
                    </v-col>
                </v-row>
            </v-container> -->
        <v-card-actions>
            <v-btn color="success" variant="elevated">
                <v-icon icon="mdi-check-outline" />
            </v-btn>
            <v-btn color="warning" variant="elevated">
                <v-icon icon="mdi-archive-edit-outline" />
            </v-btn>
            <v-btn color="error" variant="elevated" @click="onDelete(data._id)">
                <v-icon icon=" mdi-delete-outline" />
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script src="./task.js"></script>