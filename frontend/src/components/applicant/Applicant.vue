<script setup lang="ts">

</script>

<template>
    <section>
        <div class="jelentkezes_megerositese">
            <div>
                <h1>Jelentkezés</h1>
            </div>
        </div>
            <div class="jelentkezes_uzenet mt-3">
                <h3>Köszönjük jelentkezését!</h3>
                <p>Kérjük, hogy a jelentkezés véglegesítéséhez kattintson a jelentkezésben megadott e-mail címre küldött linkre!</p>
            </div>
        </section>
</template>
<style scoped>
section {
    height: 100vh;
    width: 100%;
    margin-left: 145px;
    width: calc(100% - 145px);
    background-image: url('https://kephost.net/p/MTM2MDI1Ng.jpg'),
        linear-gradient(180deg, #031a26 0%, #163a4eb5 40%, #21485e9b 60%, #041c2965 100%);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: whitesmoke;
}

.jelentkezes_megerositese {
    width: 100%;
    height: 23vh;
    overflow: hidden;
    /* Ha a tartalom kilógna a konténerből */
}

.jelentkezes_megerositese h1 {
    display: flex;
    position: relative;
    z-index: 1;
    /* A szöveg a kép előtt lesz */
    color: #ecd577;
    justify-content: center;
    text-shadow: 2px 2px 5px #120d01;
    font-family: "Playfair Display", serif;
    font-style: italic;
    font-size: 3rem;
    margin-top: 9vh;
    text-shadow: 2px 2px 2px #574d0cc4;
    background-color: #9f91343e;
    box-shadow: 0 0 50px 50px #9f91343e;
}

.jelentkezes_uzenet{
    width: 60%;
    margin: auto;
    background-color: rgb(25 24 20 /.8);
    padding: 30px;
    border-radius: 5px;
    border: 2px solid #F5CD7E;
    color: #F5CD7E;
}

@media (max-width: 992px) {
    section {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        background-size: cover;
    }
}
</style>
