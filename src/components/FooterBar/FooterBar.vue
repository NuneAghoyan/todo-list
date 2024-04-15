    <template>
        <v-layout>
            <v-bottom-navigation>
                <v-footer class="bg-purple-accent-5">
                    <v-row justify="center">

                        <v-btn v-for="link in links" :key="link" class="" color="white" rounded="xl" variant="text">
                            {{ link }}
                        </v-btn>
                        <v-btn v-for="icon in icons" :key="icon" class="" color="white" rounded="xl" variant="text">
                            {{ icon }}
                        </v-btn>
                    </v-row>

                </v-footer>
            </v-bottom-navigation>
        </v-layout>


    </template>

<script src="./footerBar.js"></script>