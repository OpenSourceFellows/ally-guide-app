<html>
<div> 
  Say their names. 
  <div class = "container">
    <div> 
      <a class = "blm" href = https://www.gofundme.com/f/i-run-with-maud> 
        <img src="img_girl.jpg" alt="I run with Maud gofundme" width="100">
      </a>
    </div>
       <div> 
      <a class = "blm" href = https://www.gofundme.com/f/georgefloyd> 
        <img src="img_girl.jpg" alt="George Floyd's Memorial fund" width="100">
      </a>
    </div>
    <div>
      <a class = "blm" href = https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor> 
        <img src="img_girl.jpg" alt="Breonna Taylor Memorial fund" width="100">
      </a>
    </div>
    <div>
       <a class = "blm" href = https://www.gofundme.com/f/justicefordavidmcatee> 
        <img src="img_girl.jpg" alt="David McAtee Memorial fund" width="100"> </a>
    </div>
    <div>
       <a class = "blm" href = https://www.gofundme.com/f/for-james-scurlocks-family> 
        <img src="img_girl.jpg" alt="Jammes Scurlock's Family" width="100"> </a>
    </div>
    <div>
       <a class = "blm" href = https://www.gofundme.com/f/rke75-funeral-arrangements> 
        <img src="img_girl.jpg" alt="Funeral arrangements for Alajunaye Davis" width="100"> </a>
    </div>
  </div>
</div>

<button class="accordion">Protestor Services </button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion">Bail Funds </button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion">Organizations</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

</html>

<style>
.container {  
    display: grid;  
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;  
}

button.accordion {
    background-color: #000000;
    color: #eee;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
}

button.accordion.active, button.accordion:hover {
    background-color: #ddd;
    color: #000000;
}

div.panel {
    padding: 0 18px;
    background-color: white;
    display: none;
}

div.panel.show {
    display: block !important;
}

div.panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: 0.6s ease-in-out;
    opacity: 0;
}

div.panel.show {
    opacity: 1;
    max-height: 500px; /* Whatever you like, as long as its more than the height of the content (on all screen sizes) */
}

.blm{
cursor: pointer;
  opacity: .75;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

}

a.blm:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  opacity: 1;
}

</style>

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
</script>
