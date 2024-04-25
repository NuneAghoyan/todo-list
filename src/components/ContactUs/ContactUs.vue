<template>
    <form>
        <v-text-field v-model="state.name" :counter="10" :error-messages="v$.name.$errors.map(e => e.$message)"
            label="Name" required @blur="v$.name.$touch" @input="v$.name.$touch"></v-text-field>

        <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message)" label="E-mail"
            required @blur="v$.email.$touch" @input="v$.email.$touch"></v-text-field>

        <v-select v-model="state.select" :error-messages="v$.select.$errors.map(e => e.$message)" :items="items"
            label="Item" required @blur="v$.select.$touch" @change="v$.select.$touch"></v-select>

        <v-checkbox v-model="state.checkbox" :error-messages="v$.checkbox.$errors.map(e => e.$message)"
            label="Do you agree?" required @blur="v$.checkbox.$touch" @change="v$.checkbox.$touch"></v-checkbox>

        <v-btn class="me-4" @click="v$.$validate">
            Send
        </v-btn>
        <v-btn @click="clear">
            Clear
        </v-btn>
    </form>
</template>
<script src="./contactUs.js"></script>