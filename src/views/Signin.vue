<template>
  <div class="login">
    <div class="login-mask"></div>
    <v-card class="login__card">
        <v-card-title>Sign in</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="password" label="Password" type="password"></v-text-field>
            <v-btn color="#357AF6" type="submit" class="login-btn">Sign in</v-btn>
          </v-form>
          <div class="login-control">
            <span>Forgot Password</span>
            <span>Sign up</span>
          </div>
        </v-card-text>
      </v-card>
  </div>
</template>

<script>
export default {
  name: "SigninComponent",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Perform login logic here
    }
  }
}
</script>

<style scoped>
.login {
  background: url("@/assets/login.jpg") no-repeat;
  background-size: cover;
  widows: 100vw;
  height: calc(100vh - 80px);

  display: flex;
  justify-content: center;
  align-items: center;
}

.login-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.login__card {
  width: 100%;
  max-width: 500px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 20px;
}

.login-btn {
  border-radius: 50px;
  color: #fff;
  width: 100%;
}
.login-control {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  color: #357AF6;
  text-decoration: underline;
  font-style: italic;
}
</style>