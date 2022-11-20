<template>
<div class="d-flex justify-center align-center">
    <v-card class="d-flex flex-column justify-center mt-10 pa-5 col-11 col-md-5" color="light">
        <v-card-title class="mb-5">
            LOGIN
        </v-card-title>

        <v-text-field label="email" outlined dense v-model="email"></v-text-field>

        <v-text-field label="password" outlined dense v-model="password"></v-text-field>

        <v-btn @click="login()">login</v-btn>
    </v-card>
</div>
</template>

<script src="./login.js"></script>
