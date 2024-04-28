    <template>
        <v-layout>
            <v-bottom-navigation height="auto">
                <v-footer :elevation="1">
                    <v-container class="py-2">
                        <v-row justify="center">
                            <v-btn class="py-1" v-for="link in links" :key="link" variant="text" density="comfortable">
                                {{ link }}
                            </v-btn>
                        </v-row>
                        <v-row justify="center">
                            <v-btn class="py-1" v-for="icon in icons" :key="icon" variant="text" density="comfortable">
                                <v-icon>{{ icon }}</v-icon>
                            </v-btn>
                        </v-row>
                    </v-container>
                </v-footer>
            </v-bottom-navigation>
        </v-layout>
    </template>

<script src="./footerBar.js"></script>