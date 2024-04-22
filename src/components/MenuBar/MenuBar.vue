<template>
    <v-layout class=" pt-4 pb-4">
        <v-app-bar class="py-2" :elevation="1">

            <!-- <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template> -->

            <v-app-bar-title>Todo list</v-app-bar-title>
            <v-btn v-for="link in links" :key="link" color="grey-darken-2" rounded="xl" variant="text">
                {{ link }}
            </v-btn>
        </v-app-bar>
    </v-layout>
</template>

<script src="./menuBar.js"></script>