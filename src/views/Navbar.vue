<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo"><img src="../assets/logo.png" alt="site-logo" /></div>
      <ul class="menu">
        <li>Coaching</li>
        <li>My Life Story</li>
        <li>Group Meetings</li>
        <li>Discussion Forum</li>
        <li>
          <v-badge content="2" color="#FF0101">
            Messages
          </v-badge>
        </li>
      </ul>

      <div class="nav_user">
        <img class="mini-avatar" src="../assets/avatar.png" />
        <span>UserName</span>
      </div>
      <!-- <div class="navbar__sign">
        <v-btn
          color="#357AF6"
          text-color="white"
          to="/signin"
        ><span class = "text-white">Sign in</span></v-btn>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    background: #fff;
  }
  .navbar__container {
    width: 100%;
    max-width: 1400px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;


  }

  .navbar__sign {
    display: flex;
    gap: 10px;
  }

  .navbar__sign_signin {
    
  }
  .navbar__sign_signin:hover {
    cursor: pointer;
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
  }

  .menu > li {
    list-style-type: none;
    color: #666666;
  }

  .mini-avatar {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  .nav_user {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav_user:hover {
    cursor: pointer;
  }
</style>
