<script setup lang="ts">
import { useGetBooks } from '@/composables/api/useApi';
import { ref } from 'vue';
const { books } = useGetBooks();
let description = ref<string>('');
// Emitek létrehozása. Emitekkel olyan eseményeket tudunk létrehozni, amiket a szülő componens figyel, 
// és el tudja kapni azokat, amikor megtörténik az esemény. A szülő componens jelenleg a BookComponent, mert ott használjuk fel a BookCards componenst.
// Meghatározok egy toggleForm és egy book eseményt. 
const emit = defineEmits(['toggleForm', 'book']);

function loadDescription(id: number) {
    description.value = books.value[id - 1].description;
    // Érdekel gomb nyomására a toggleForm esemény 'elsül' true értékkel, a book esemény pedig az aktuális Book objecttel. Irány a BookComponent!
    emit('toggleForm', true)
    emit('book', books.value[id - 1])
}

</script>

<template>
    <!--Cardok-->
    <div class="container">
        <div class="row welcome">
            <h1>Üdvözöljük Könyvesboltunkban!</h1>

            <p>Nagy örömmel köszöntjük Önt az Értékes Könyvek webáruházában! Oldalunk célja, hogy minőségi és különleges könyveket kínáljunk mindazoknak, akik szenvedélyesen szeretik az olvasást és értékelik a kultúra szépségeit. 
            </p> 
            <p>
                Kínálatunkban megtalálható három egyedi remekmű: egy különleges szótár, egy személyes fotókönyv és A Filozófia Nagykönyve. 
                Minden egyes könyvet gondosan válogatunk, hogy biztosítsuk, csak a legkiválóbb minőségű és legérdekesebb példányok kerüljenek polcainkra.
            </p> 
            <p>
                Lentebb három kivételes könyv rövid bemutatóját találja. 
                Kérjük, válassza ki az Önt leginkább érdeklő példányt, és az alul megjelenő űrlap kitöltésével jelentkezzen licitálásra. 
                Mivel rendkívül nagy az érdeklődés ezekre a könyvekre, kérjük, küldjön egy motivációs levelet is, amelyben részletesen kifejti, 
                miért szeretné megszerezni a kiválasztott könyvet. 
                Jelentkezését gondos elbírálás követi, és ha megfelelőnek ítéljük, lehetősége nyílik a licitáló felületünkre lépni és részt venni az aukción.  
            </p> 
            <p>
                Nagyon köszönjük, hogy Minket választott! Kellemes böngészést és jó olvasást kívánunk!
            </p>
            
        </div>
        <div class="row my-4">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <p class="m-0">{{ description }}</p>
            </div>
        </div>

        <div>

        </div>
    </div>
</template>


<!--Style-->
<style scoped>

h1{
    text-align: center;
    margin: 3rem;
    font-style: italic;
    
}
p {
  font-family: "Roboto", sans-serif;
  text-align: justify; 
   
}
p:last-child{
    margin-bottom: 3rem;
}
.welcome {
    border: 1px solid  rgb(211, 211, 211);
    border-radius: 10px;
    margin: 3rem 0;
}

</style>