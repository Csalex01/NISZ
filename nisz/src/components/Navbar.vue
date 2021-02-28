<template>
  <div class="box p-0">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        
        <a class="navbar-burger" role="button">
          <span></span>
          <span></span>
          <span></span>
        </a>

      </div>

      <div id="navbar" class="navbar-menu">
        
        <div class="navbar-start">
          <router-link :to="{name: 'Index'}" class="navbar-item">Kezdőlap</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div v-if="!user">
              <div class="buttons">
                <router-link :to="{name: 'Signup'}" class="button is-primary">Regisztráció</router-link>
                <router-link :to="{name: 'Login'}" class="button is-light">Bejelentkezés</router-link>
              </div>
            </div>
            <div v-else>
              <a class="navbar-item" @click="logout">{{ this.user.email }} (Kijelentkezés)</a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
	data() {
		return {
			user: null,
			loggedIn: false
		}
	},
	methods: {
		logout() {
			firebase.auth().signOut().then(() => {
				this.$router.push({ name: "Index" })
				this.loggedIn = false
			})
		}
	},
	async beforeCreate() {
		await firebase
			.auth()
			.onAuthStateChanged(user => this.user = user)
	}
}
</script>

<style>
</style>