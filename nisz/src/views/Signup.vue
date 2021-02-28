<template>
	<div class="columns signup">
		<div class="column is-3 center box">
			<h1 class="title has-text-centered is-3 pt-3">Regisztráció</h1>
			
			<hr>

			<!-- SIGNUP FORM -->
			<form @submit.prevent>
				<div class="field">
					<label class="label">E-mail</label>
					<div class="control has-icons-left">
						<input 
							type="email" 
							class="input" 
							placeholder="Példa: teszt@oldal.com"
							v-model="email"
							required
						>
						<span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
					</div>
				</div>

				<div class="field">
					<label class="label">Jelszó</label>
					<div class="control has-icons-left">
						<input 
							type="password"
							class="input"
							placeholder="•••••••••"
							v-model="password"
							required
						>
						<span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
					</div>
				</div>

				<div class="field">
					<label class="label">Jelszó megerősítése</label>
					<div class="control has-icons-left">
						<input 
							type="password"
							class="input"
							placeholder="•••••••••"
							v-model="passwordConfirmation"
							required
						>
						<span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
					</div>
				</div>

				<div class="field has-text-centered">
					<p>
						Van fiókja?
						<router-link :to="{ name: 'Login'}">Jelentkezzen be!</router-link>
					</p>
				</div>

				<!-- MESSAGE -->
        <Message v-if="error" :msg="msg" :type="msgType" :title="msgTitle"/>

				<div class="field pb-3">
					<div class="control has-text-centered">
						<button class="button is-link" @click="signup">Regisztráció</button>
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
        Sikeresen regisztrált mint <em><strong>{{ email }}</strong>!</em>
      </section>

      <footer class="modal-card-foot buttons is-right">
        <button class="button is-success" @click="sendIndex">Rendben</button>
      </footer>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

import Message from "@/components/Message"

export default {
	name: "Signup",
	components: { Message },
	data() {
		return {
			email: null,
			username: null,
			password: null,
			passwordConfirmation: null,
			modalActive: false,
			error: null,
			msg: null,
			msgType: null,
			msgTitle: null,
			user: null
		}
	},
	methods: {
		toggleModal() {
			this.modalActive = !this.modalActive
		},
		async signup() {
			if (this.email &&
				this.password &&
				this.passwordConfirmation &&
				this.password == this.passwordConfirmation
			) {

				try {
					const response = await firebase
						.auth()
						.createUserWithEmailAndPassword(this.email, this.password)

					this.user = response.user

					await firebase.firestore()
						.collection("users")
						.doc()
						.set({
							email: this.email
						})

					this.toggleModal()
					this.error = false
				} catch (err) {
					this.error = true
					this.msg = err
					this.msgType = "warning"
					this.msgTitle = "Figyelem!"
				}

			} else {
				this.error = true
				this.msg = "Az űrlap összes mezőjét köteleező kitölteni!"
				this.msgType = "warning"
				this.msgTitle = "Figyelem!"
			}
		},
		sendIndex() {
			this.$router.push({ name: "Index" })
		}
	},
	created() {
		document.title = "Regisztráció"
	}
}
</script>

<style>
.center {
	margin: 0 auto;
}

.signup {
	margin-top: 8%;
}

.message {
	margin: 0 auto;
}
</style>