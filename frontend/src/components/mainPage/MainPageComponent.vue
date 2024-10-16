<script setup lang="ts">
import Fooldal from './subComponents/Elso_Fooldal.vue'
import Kimutatas from './subComponents/Negyedik_Kimutatas.vue'
import Konyvvalaszto from './subComponents/Harmadik_Konyvvalaszto.vue'
import Footer from './subComponents/Hatodik_Footer.vue'
import Udvozlo from './subComponents/Masodikudvozlo.vue'
import Team from './subComponents/Otodik_Csapat.vue'
</script>

<template>
    <div class="content">
      <Fooldal id="Fooldal" />
      <Udvozlo id="Udvozlo" />
      <Konyvvalaszto id="Konyvvalaszto" />
      <kimutatas id="kimutatas" />
      <team id="team" />
      <Footer id="footer" />
    </div>
</template>

<style scoped>

</style>
