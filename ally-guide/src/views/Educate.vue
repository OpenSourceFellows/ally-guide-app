<style>
body{
  background-color: #924235;
  padding: 0 10px;
  font-family: 'Open Sans', sans-serif;
}

.history{
  
}
.edu-nav{
  text-align: center;
  background-color:#c49d79;
  width: 100%;
  padding: 40px;
}

.edu-nav a {
  margin-right: 100px;
  color: #000000;
}
.accordion-container{
  position: relative;
  max-width: 500px;
  height: auto;
  margin: 10px auto;
}
.accordion-container > h2{
  text-align: center;
  color: #fff;
  padding-bottom: 5px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
}
.set{
  position: relative;
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
}
.set > a{
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #555;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}
.set > a i{
  float: right;
  margin-top: 2px;
}
.set > a.active{
  background-color:#3399cc;
  color: #fff;
}
.content{
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  display:none;
}
.content p{
  padding: 10px 15px;
  margin: 0;
  color: #333;
}
.library-container {  
    display: grid;  
    grid-template-columns: 1fr 1fr 1fr;  
}
</style>

<template>
<body>
<div>
  
</div>
<div class = "edu-nav"> 
  <a href = ""> Take a learning path</a>
  <a href = ""> Traing your team </a>
  <a href = ""> Library </a>
</div>

<div class="accordion-container">
  <h2>Are you aware?</h2>
  <div class="set">
    <a href="#">
Why are the protests happening now?      <i class="fa fa-plus"></i>
    </a>
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
  </div>
  <div class="set">
    <a href="#">
      But don't all lives matter?
      <i class="fa fa-plus"></i>
    </a>
    <div class="content">
      <p> Aliquam cursus vitae nulla non rhoncus. Nunc condimentum erat nec dictum tempus. Suspendisse aliquam erat hendrerit vehicula vestibulum.</p>
    </div>
  </div>
  <div class="set">
    <a href="#">
      Don't violent protests make things worse?
      <i class="fa fa-plus"></i>
    </a>
    <div class="content">
      <p>Pellentesque aliquam ligula libero, vitae imperdiet diam porta vitae. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
  </div>
  <div class="set">
    <a href="#">
Aren't some cops good?      <i class="fa fa-plus"></i> 
    </a>
    <div class="content">
      <p> Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque. </p>
    </div>
  </div>
  <div class="set">
    <a href="#">
What kind of changes are we asking for?      <i class="fa fa-plus"></i> 
    </a>
    <div class="content">
      <p> Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque. </p>
    </div>
  </div>
  <div class="set">
    <a href="#">
How can I show support on social media?     <i class="fa fa-plus"></i> 
    </a>
    <div class="content">
      <p> Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque. </p>
    </div>
    <div class="set">
    <a href="#">
What is Juneeteenth?     <i class="fa fa-plus"></i> 
    </a>
    <div class="content">
      <p> Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque. </p>
    </div>
  </div>
</div>
<div class = "library-container">
  <a img src = "" href = ""> Protester Toolkit </a>
  <a img src = "" href = ""> Say their names </a>
  <a img src = "" href = ""> Black Healing </a>
</div>
</body>

</template>

