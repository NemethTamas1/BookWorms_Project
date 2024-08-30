<script setup lang="ts">

</script>

<template>

<div class="container-fluid fullContainer">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 headerPic ">       
            <div class="headerText">
                <h1>BookWorms</h1>
                <h3>Ahol a motiváció és az irodalom kéz a kézben jár</h3>
            </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 headerTextRigth ">       
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
                <a href="/books">Tudj meg többet</a>
                  
                </div>
                <div class="col jobbSzovegOt">
                
                  
                </div>
             

    </div>
  </div>
  <div class="row kotoSor"> 
    <div class="col-12 ">
      <p>Mi az a licitálás?</p>
    </div>
  </div>
  <!--  <div class="row masodikSor">
    <div class="col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 mb-2 masodikSorEgy ">   
                <div class="welcome">
                    <p>Nagy örömmel köszöntjük Önt az Értékes Könyvek webáruházában! Oldalunk célja, hogy minőségi és
                        különleges könyveket kínáljunk mindazoknak, akik szenvedélyesen szeretik az olvasást és
                        értékelik a
                        kultúra szépségeit.
                    </p>

                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 mb-2 masodikSorKetto">   
                    <p>
                        Kínálatunkban megtalálható három egyedi remekmű: egy különleges szótár, egy személyes fotókönyv
                        és A
                        Filozófia Nagykönyve.
                        Minden egyes könyvet gondosan válogatunk, hogy biztosítsuk, csak a legkiválóbb minőségű és
                        legérdekesebb példányok kerüljenek polcainkra.
                    </p>
                  </div>
                </div>

                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 mb-2 ">   
                    <p>
                        Lentebb három kivételes könyv rövid bemutatóját találja.
                        Kérjük, válassza ki az Önt leginkább érdeklő példányt, és az alul megjelenő űrlap kitöltésével
                        jelentkezzen licitálásra.
                        Mivel rendkívül nagy az érdeklődés ezekre a könyvekre, kérjük, küldjön egy motivációs levelet
                        is,
                        amelyben részletesen kifejti,
                        miért szeretné megszerezni a kiválasztott könyvet.
                        Jelentkezését gondos elbírálás követi, és ha megfelelőnek ítéljük, lehetősége nyílik a licitáló
                        felületünkre lépni és részt venni az aukción.
                    </p>
                  </div>
                    <div class="col-12 col-sm-12 col-md-12 col-l-6 col-xl-6 mb-2 ">   
                    <p>
                        Nagyon köszönjük, hogy Minket választott! Kellemes böngészést és jó olvasást kívánunk!
                    </p>
                    <div class="col-12 text-center">
                        <RouterLink to="/books" class="btn btn-outline-warning">Tovább a könyvekhez</RouterLink>
                    </div>
                  </div> 
                
             </div>-->
       
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
    background: url("../src/assets/main/andrew-neel.jpg");
    /* opacity: 0.9;  */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
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
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
 
  
}

.headerText {
  font-family:Arial, Helvetica, sans-serif;
    font-style: italic;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 2px #191416;
    /* background-color: #39362b8c; */
    border-radius: 10px;
    /* box-shadow: 0px 0px 20px 13px #39362b8c; */
}


.headerTextRigth {
  font-style: italic;
  font-family:Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1rem solid white;
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
  font-size: 2rem;
 
}
.jobbSzovegNegy>a {
  text-decoration: none;
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
  height: 8vh;
  display: flex;
  font-style: italic;
  text-align: center;
  font-size: 2rem;
  
}
.kotoSor p {
  display: flex;
justify-content: center;
align-self: center;

}
.masodikSor{
  height: 50vh;
    
}
.masodikSorEgy {
  border: 3px solid #191416;
  padding: 1em 2em 1em 2em;
  position: relative;
  box-shadow: 5px 5px 30px grey;
  background-color: whitesmoke;
  border: 2px solid #191416;
  padding: 1em 2em 1em 2em;
  position: relative;
  margin: 0em;
    
}

.masodikSorKetto {
  
  padding: 1em 2em 1em 2em;
  position: relative;
  box-shadow: 5px 5px 30px grey;
  background-color: #dcb750cf;
  padding: 1em 2em 1em 2em;
  position: relative;
}

/* h1 {
    font-family: "Playfair Display SC", serif;
    font-size: 3rem;
}

h3 {
    font-family: "Playfair Display SC", serif;
    font-style: normal;
    margin:0;
    font-size: 1.5rem;
} */

h2 {
    font-family: "Playfair Display SC", serif;
    text-align: center;
    font-style: italic;
}

p {
    font-family: "Roboto", sans-serif;
    text-align: justify;
}

.welcome {
   
}

.welcome:before {
    background: none;
    border: 3px solid #191416;
    content: "";
    display: block;
    position: absolute;
    top: .1rem;
    left: .1rem;
    right: .1rem;
    bottom: .1rem;
    pointer-events: none;
}

.btn {
    background-color: #dcb750cf;
    color: black;
}
</style>