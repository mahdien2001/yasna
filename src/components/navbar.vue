<template>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>

      <v-btn
      v-if="!user"
      to="/home"
      text
    >
      <span class="mr-2">Home</span>
    </v-btn>

      <v-btn
      v-if="!user"
      to="/login"
        text
      >
        <span class="mr-2">Login</span>
      </v-btn>

      <v-btn
      v-if="!user"
      to="/register"
      text
    >
      <span class="mr-2">Register</span>
    </v-btn>

    <span v-if="user">{{user}}</span>

    </v-app-bar>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    user:'',
  }),

  mounted(){
    this.user = localStorage.getItem('username')
  }

};
</script>