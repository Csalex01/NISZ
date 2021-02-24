<template>

  
  <div class="columns login">
    <div class="column is-3 center box">
      <h1 class="title has-text-centered is-3 pt-3">Bejelentkezés</h1>

      <hr>

      <!-- LOGIN FORM -->
      <form @submit.prevent>
        <div class="field">
          <label class="label">E-mail</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Példa: TesztFelhasznalo123" v-model="email" required>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Jelszó</label>
          <div class="control has-icons-left">
            <input type="password" class="input" placeholder="•••••••••" v-model="password" required>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>

        <div class="field has-text-centered">
          <p>
            Nincs még fiókja?
            <router-link :to="{name: 'Signup'}">Regisztráljon!</router-link>
          </p>
        </div>



        <!-- MESSAGE -->
        <Message v-if="error" :msg="msg" :type="msgType" :title="msgTitle"/>

        <!-- <hr> -->

        <div class="field pb-3">
          <div class="control has-text-centered">
            <button class="button is-link" @click="login">Bejelentkezés</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- MODAL -->
  <div v-if="modalActive" class="modal" :class="{'is-active': modalActive}">
    <div class="modal-background" @click="toggleModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Értesítés</p>
        <button class="delete" @click="toggleModal"></button>
      </header>

      <section class="modal-card-body">
        Sikeresen bejelentkezett mint <em><strong>{{ email }}</strong>!</em>
      </section>

      <footer class="modal-card-foot buttons is-right">
        <button class="button is-success" @click="sendIndex">Rendben</button>
      </footer>
    </div>
  </div>

</template>

<script>
import firebaseApp from "firebase"

import Message from "@/components/Message"

export default {
	name: "Login",
	components: { Message },
	data() {
		return {
			email: null,
			password: null,
			modalActive: false,
			error: false,
			msg: null,
			msgType: null,
			msgTitle: null
		}
	},
	methods: {
		toggleModal() {
			this.modalActive = !this.modalActive
		},
		async login() {
			if (this.email && this.password) {

				try {
					const response = await firebaseApp.auth()
						.signInWithEmailAndPassword(this.email, this.password)

					this.user = response.user

					this.toggleModal()
					this.error = false
				} catch (err) {
					this.error = true
					this.msg = err.message
					this.msgType = "warning"
					this.msgTitle = "Figyelem!"
				}



			} else {
				this.error = true
				this.msg = "Az űrlap összes mezőjét kötelező kitölteni!"
				this.msgType = "warning"
				this.msgTitle = "Figyelem!"
			}
		},
		sendIndex() {
			this.$router.push({ name: "Index" })
		}
	},
	created() {
		document.title = "Bejelentkezés"
	}
}
</script>

<style scoped>
.center {
	margin: 0 auto;
}

.login {
	margin-top: 10%;
}

.message {
	margin: 0 auto;
}
</style>