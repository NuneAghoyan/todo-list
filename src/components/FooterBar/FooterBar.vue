    <template>
        <v-layout>
            <v-bottom-navigation height="auto">
                <v-footer :elevation="1">
                    <v-container class="py-2">
                        <v-row justify="center">
                            <v-btn class="py-1" v-for="menuItem in menuItems" :key="menuItem.title" variant="text"
                                density="comfortable">
                                <RouterLink :to="menuItem.path" class="text-decoration-none active-link">{{
                                    menuItem.title }}
                                </RouterLink>
                            </v-btn>
                        </v-row>
                        <v-row justify="center">
                            <v-btn class="py-1" v-for="socialMedia in socialMedias" :key="socialMedia" variant="text"
                                density="comfortable">
                                <a class="active-link" :href="socialMedia.path" target="_blank"> <v-icon>{{
                                    socialMedia.icon }}</v-icon>
                                </a>
                            </v-btn>
                        </v-row>
                    </v-container>
                </v-footer>
            </v-bottom-navigation>
        </v-layout>
    </template>

<script src="./footerBar.js"></script>
