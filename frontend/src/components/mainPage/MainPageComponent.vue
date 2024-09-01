<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// NINCS LIMITÁLVA A LEFUTÁSA
onMounted(() => {
  setTimeout(() => {
    const element = document.getElementById('welcome_container')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 3000)
})
// 'LEUGRÁS VÉGE' \\

// LAP TETEJÉRE GOMB \\
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Finom görgetés az oldal tetejére
  })
}

const handleScroll = () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn')
  if (window.scrollY > window.innerHeight / 2) {
    scrollToTopBtn!.style.display = 'block'
  } else {
    scrollToTopBtn!.style.display = 'none'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
// LAP TETEJÉRE GOMB \\
</script>

<template>
    <!-- Oldal tetejére gomb -->
    <button id="scrollToTopBtn" @click="scrollToTop" title="Ugrás az oldal tetejére">
    <i class="fas fa-circle-up"></i>
  </button>
  <!-- Oldal tetejére gomb -->
<div class="container-fluid fullContainer hidden bg-background font-geist-sans text-foreground antialiased md:block">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-l-6 col-xl-6 headerPic ">       
            <div class="headerText">
                <h1>BookWorms</h1>
                <h3>Ahol a motiváció és az irodalom kéz a kézben jár</h3>
            </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-l-6 col-xl-6 headerTextRigth ">       
               <!-- BEJELENTKEZÉS ÉS REGISZTRÁCIÓ GOMBOK -->
                <div class="col jobbSzovegEgy">
   
                  <h3>Üdvözöljük Könyvesboltunkban!</h3>
                </div>
                <div class="col jobbSzovegKetto"> 
                  <h4>Licitálni szeretne könyveinkre? </h4>
                  
                </div>  
                <div class="col jobbSzovegHarom">
                  <h6>Regisztráljon vagy jelentkezzen be! </h6>
                </div>
               <div class="col jobbGombok">
                
                  <RouterLink to="/login" class="btn btn-outline-warning ketFoGomb">Bejelentkezés</RouterLink>
               <RouterLink to="/registration" class="btn btn-outline-warning ketFoGomb">Regisztráció</RouterLink>
               </div>
               <div class="col jobbSzovegNegy">
                <a href="/books">Lássuk egyből a könyveket!</a>
                  
                </div>
                <div class="col jobbSzovegOt">
                
                  
                </div>
             

    </div>
  </div>
  <div class="row kotoSor"> 
    <div class="col-12 kotoSorDiv ">
      <p>Hogyan működik?</p>
    </div>
  </div>
</div>

<div class="row lorem">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


</div>

</template>


<!--Style-->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

.fullContainer {
  padding: 0;
}

.headerPic {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top:10vh;
    background: url("/src/assets/img/main/rey-seven.jpg");
    /* opacity: 0.9;  */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(81, 50, 26, 0.728) 0px 1px 3px, rgba(75, 35, 2, 0.678) 0px 1px 2px;       
  }
.headerPic:hover {
  opacity: 1;
  text-shadow: none;
  box-shadow: none;
  filter: brightness(110%);
}

.headerPic h1 {
  font-family: "Playfair Display SC", serif;
  font-size: 3rem;
}
.headerPic h3 {
  font-family:Arial, Helvetica, sans-serif;
  font-size: 1.5rem; 
}

.headerText {
  font-family:"Libre Baskerville", serif;
  /* font-family: Geist Sans, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji"; */
  font-style: italic;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 2px #191416;
  border-radius: 10px;
}


.headerTextRigth {
  font-family:  "Libre Baskerville", serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1rem solid whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; 
}
.jobbSzovegEgy {
  display: flex;
  justify-content: center;
  align-items:end;
  margin: 0;
}
.jobbSzovegKetto, .jobbSzovegNegy{
  display: flex;
  justify-content: center;
  align-items:flex-end ;
}

.jobbSzovegHarom {
  display: flex;
  justify-content: center;
  align-items:flex-start ;
  font-style: italic;
}
.jobbSzovegNegy{
  font-size: 1rem;
 
}
.jobbSzovegNegy>a {
  text-decoration: underline;
  color:#191416;
}


.ketFoGomb{
  margin-bottom: 1.5rem;
  background-color: #F5CD7E;
  font-size: 1.3rem;
  height: 4rem;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;  
}
.ketFoGomb:hover {
  background-color: #f8d985;
  border: 2px solid #f6ba14 ;
}

.btn{
  align-items: center;
}

.kotoSor{
  background-color: whitesmoke;
  display: flex;
  text-align: center;
}
.kotoSor p {
  font-family:"Libre Baskerville", serif;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding: 3rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}



h2 {
    font-family: "Playfair Display SC", serif;
    text-align: center;
    font-style: italic;
}

p {
    font-family: "Roboto", sans-serif;
    text-align: justify;

}



.btn {
    background-color: #dcb750cf;
    color: black;
}

@media only screen and (max-width: 768px) {
 
  .headerPic {
    height: 40vh;
}
.headerTextRigth{
  width: 100vh;
}
.headerText h1 {
  font-size: 2rem;
}
.headerText h3 {
  font-size: 1rem;
}
.jobbSzovegEgy h3 {
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 1rem;
}
.jobbSzovegKetto h4 {
  font-size: 0.8rem;
  padding-bottom: 1rem;
}
.jobbSzovegHarom h6 {
  font-size: 0.6rem;
  padding-bottom: 1rem;
}
.jobbGombok .ketFoGomb {
  font-size: 1rem;
height: 2.5rem;

}
.jobbSzovegNegy a {
  padding-top: 1rem;
  padding-bottom: 2rem;
}

.kotoSorDiv p {
  font-size: 1.5rem;
  border-right: none;
}


}
@media only screen and (min-width: 769px) {
  .headerPic {
    height: 75vh;
    background-size: cover;
    
  }
  .headerText h1{
font-size: 3rem;
  }
  .headerText h3{
font-size: 1rem;
  }
  .jobbSzovegEgy h3 {
  padding-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
}
.jobbSzovegKetto h4 {
  font-size: 1.3rem;
  padding-bottom: 1rem;
  text-align: center;
}
 
 
}

@media only screen and (min-width: 993px) {
  .headerPic {
    height: 80vh;
   
  }
 
}
.lorem {
  margin: 1rem; 
}

</style>