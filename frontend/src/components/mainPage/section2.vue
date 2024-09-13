<template>
  <section class="section-2" id="section2">
    <div class="container-fluid py-5" id="featured-3">
      <div class="row" id="keret_2">
        <h2 class="text-white">Ritka és értékes? Igen!</h2>
        <div class="col feature">
          <div class="feature-icon">
            <svg class="bi" width="10px" height="10px"><use xlink:href="#toggles2" /></svg>
          </div>
          <h2>Első title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos placeat</p>
          <a href="#" class="icon-link">
            Call to action
            <svg class="bi" width="10px" height="10px"><use xlink:href="#toggles2" /></svg>
          </a>
        </div>
        <div class="col feature">
          <div class="feature-icon">
            <svg class="bi" width="10px" height="10px"><use xlink:href="#toggles2" /></svg>
          </div>
          <h2>Második title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos placeat</p>
          <a href="#" class="icon-link">
            Call to action
            <svg class="bi" width="10px" height="10px"><use xlink:href="#toggles2" /></svg>
          </a>
        </div>
        <div class="col feature">
          <div class="feature-icon">
            <svg class="bi" width="10px" height="10px"><use xlink:href="#toggles2" /></svg>
          </div>
          <h2>Harmadik title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos placeat</p>
          <a href="#" class="icon-link">
            Call to action
            <svg class="bi" width="10px" height="10px"><use xlink:href="#toggles2" /></svg>
          </a>
        </div>
        <div class="col feature">
          <div class="feature-icon">
            <svg class="bi" width="10px" height="10px"><use xlink:href="#toggles2" /></svg>
          </div>
          <h2>Negyedik title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos placeat</p>
          <a href="#" class="icon-link">
            Call to action
            <svg class="bi" width="10px" height="10px"><use xlink:href="#toggles2" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Section2'
}
</script>


<style scoped>
.section-2 {
  margin-left: 125px;
  margin-right: 0;
  background-color: silver;
}
.feature {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  padding: 10px;
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.feature-icon {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(36, 38, 40, 1) 0%,
    rgba(60, 60, 59, 1) 40%,
    rgba(112, 97, 78, 1) 70%,
    rgba(159, 132, 42, 0.8995973389355743) 100%
  );
}
.container-fluid {
  background-image: url(https://w0.peakpx.com/wallpaper/156/261/HD-wallpaper-brown-leather-texture-leather-lines-brown-wooden-background-leather-textures-leather-backgrounds-macro-leather.jpg);
  background-position: center;
  background-size: contain;
  
  
  /* background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(3, 26, 38, 1) 0%,
    rgba(22, 58, 78, 1) 40%,
    rgba(33, 72, 94, 1) 60%,
    rgba(4, 28, 41, 1) 100%
  ); */
}
.btn {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f6d185;
  border: 3px solid #58490c;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(84, 62, 1);
  cursor: pointer;
  margin: 10px;
}

.btn:hover {
  background-color: #191814;
  border-color: #f5cd7e;
  color: #d9b902;
}
</style>
<!-- https://kephost.net/p/MTM1ODAwMA.png -->
<!-- https://kephost.net/p/MTM2MDM5Mw.png 1500x750   -->
<!-- https://kephost.net/p/MTM1ODA3OQ.png  3000x1500    NAGY MÉRETBEN OKÉ!-->
<!-- https://kephost.net/p/MTM1ODEwNg.png 3000x2000   -->
