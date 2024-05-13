<template>
    <h1 class="mt-12" align="center" justify="center">Contact us</h1>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="6" md="6" sm="8" xs="12">
                <v-sheet class="pa-10">
                    <v-form ref="form">
                        <v-text-field v-model.trim="name" :rules="nameRules" label="Name" required></v-text-field>
                        <v-text-field v-model="email" :rules="emailRules" label="Email" required
                            type="email"></v-text-field>
                        <v-textarea v-model.trim="message" :rules="messageRules" label="Message" required></v-textarea>
                        <div align="center" justify="center">
                            <v-btn width="400px" class="mt-4" color="success" @click="send"> Send </v-btn>
                        </div>
                        <div align="center" justify="center">
                            <v-btn width="400px" class="mt-4" color="error" @click="reset"> Reset Form </v-btn>
                        </div>
                    </v-form>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./contactUs.js"></script>