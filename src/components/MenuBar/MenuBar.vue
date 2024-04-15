<template>
    <!-- <v-layout class="d-flex justify-center overflow-visible bg-purple-accent-4 pt-4 pb-4">
        <v-navigation-drawer v-model="drawer" active>
            <v-row>

                <v-btn v-for="link in links" :key="link" class="" color="white" rounded="xl" variant="text">
                    {{ link }}
                </v-btn>
            </v-row>
        </v-navigation-drawer>
    </v-layout> -->
    <v-layout class=" pt-4 pb-4">
        <v-app-bar class="d-flex justify-center overflow-visible bg-purple-accent-5" :elevation="1">
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Todo list</v-app-bar-title>


            <v-btn v-for="link in links" :key="link" class="" color="grey-darken-2" rounded="xl" variant="text">
                {{ link }}
            </v-btn>

        </v-app-bar>
    </v-layout>
</template>

<script src="./menuBar.js"></script>