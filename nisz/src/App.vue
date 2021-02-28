<template>
	<Navbar />
  <router-view/>
</template>

<script>
import firebase from "firebase"

import Navbar from "./components/Navbar"

export default {
	namee: "App",
	components: { Navbar }
}
</script>

<style>
</style>
