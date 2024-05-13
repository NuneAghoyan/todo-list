<template>
    <v-layout class="pt-4 pb-4">
        <v-app-bar class="py-2" :elevation="1">
            <v-app-bar-title><v-img :width="60" src="../../../public/favicon.png"></v-img></v-app-bar-title>
            <v-btn v-for="menuItem in menuItems" :key="menuItem.title" rounded="xl" variant="text" class="mx-4">
                <RouterLink :to="menuItem.path" class="text-decoration-none active-link">{{
                    menuItem.title }}
                </RouterLink>
            </v-btn>
        </v-app-bar>
    </v-layout>
</template>

<script src="./menuBar.js"></script>
<style>
.active-link {
    color: #2d2f30;
    background-color: #f8f9fa;
    border-radius: 4px;
}
</style>