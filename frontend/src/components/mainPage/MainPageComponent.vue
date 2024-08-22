<script setup lang="ts">

</script>

<template>
    <div class="container-fluid topLabel mb-5">
        <div class="topLabelText">
            <h1>BookWorms</h1>
            <h3>Ahol a motiváció és az irodalom kéz a kézben jár</h3>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="welcome">
                    <h2 class="mb-4">Üdvözöljük Könyvesboltunkban!</h2>

                    <p>Nagy örömmel köszöntjük Önt az Értékes Könyvek webáruházában! Oldalunk célja, hogy minőségi és
                        különleges könyveket kínáljunk mindazoknak, akik szenvedélyesen szeretik az olvasást és
                        értékelik a
                        kultúra szépségeit.
                    </p>
                    <p>
                        Kínálatunkban megtalálható három egyedi remekmű: egy különleges szótár, egy személyes fotókönyv
                        és A
                        Filozófia Nagykönyve.
                        Minden egyes könyvet gondosan válogatunk, hogy biztosítsuk, csak a legkiválóbb minőségű és
                        legérdekesebb példányok kerüljenek polcainkra.
                    </p>
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
                    <p>
                        Nagyon köszönjük, hogy Minket választott! Kellemes böngészést és jó olvasást kívánunk!
                    </p>
                    <div class="col-12 text-center">
                        <RouterLink to="/books" class="btn btn-outline-warning">Tovább a könyvekhez</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<!--Style-->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

.topLabel {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../../assets/img/Background-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

.topLabelText {
    font-family: "Playfair Display SC", serif;
    font-style: italic;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 2px #191416;
    background-color: #1914168c;
    box-shadow: 0 0 50px 50px #1914168c;

}

h1 {
    font-family: "Playfair Display SC", serif;
    font-size: 3rem;
}

h3 {
    font-family: "Playfair Display SC", serif;
    font-style: normal;
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

.welcome {
    background-color: #dcb750cf;
    border: 3px solid #191416;
    padding: 1em 2em 1em 2em;
    position: relative;
    box-shadow: 5px 5px 30px grey;
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