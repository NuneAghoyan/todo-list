<template>
    <v-layout>
        <v-footer :elevation="1" class="d-flex flex-column">
            <v-container class="py-1">
                <v-row justify="center" no-gutters>
                    <v-btn size="small" class="py-1" v-for="menuItem in menuItems" :key="menuItem.title" variant="text"
                        density="comfortable">
                        <RouterLink :to="menuItem.path" class="text-decoration-none active-link">{{
                            menuItem.title }}
                        </RouterLink>
                    </v-btn>
                </v-row>
                <v-row class="mt-1" justify="center" no-gutters>
                    <v-btn size="small" class="py-1" v-for="socialMedia in socialMedias" :key="socialMedia"
                        variant="text" density="comfortable">
                        <a class="active-link" :href="socialMedia.path" target="_blank"> <v-icon>{{
                            socialMedia.icon }}</v-icon>
                        </a>
                    </v-btn>
                </v-row>
                <v-row class="mt-1" justify="center" align="center" no-gutters>
                    <strong> {{ getYear }} — Nune</strong>
                </v-row>
            </v-container>
        </v-footer>
    </v-layout>
</template>

<script src="./footerBar.js"></script>

<style scoped>
.v-layout {
    flex: 0 0 auto;
}

.active-link {
    color: #2d2f30;
    background-color: #f8f9fa;
    border-radius: 4px;
}
</style>