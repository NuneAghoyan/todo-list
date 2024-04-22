<template>
    <v-card class="mx-auto my-8" elevation="16" color="green-lighten-5" max-width="344">
        <v-card-item>
            <Checkbox />
            <v-card-title>
                {{ data.title }}
            </v-card-title>
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
            </v-card-text>

            <v-container class="text-center">
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
            </v-container>
        </v-card-item>

    </v-card>
</template>

<script src="./task.js"></script>