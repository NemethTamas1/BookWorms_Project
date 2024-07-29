<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="welcome">
                    <h2>Üdvözöljük Könyvesboltunkban!</h2>

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
                </div>
            </div>
        </div>
    </div>
</template>


<!--Style-->
<style scoped>
h2 {
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
    padding: 2em;
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
</style>