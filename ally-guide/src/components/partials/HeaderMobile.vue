<template>
<header class="header">
<div class = "nav-bar">
  <a href="" class="logo"> <img style="width:30px;"src="https://i.ibb.co/j4t3YL6/imageedit-8-6683678944.png" alt="logo" border="0"> </a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a style="text-decoration:none; color:#000000;" href="/Home">Home</a></li>
    <li><a style="text-decoration:none; color:#000000;" href="/Contribute">Give</a></li>
    <li><a style="text-decoration:none; color:#000000;" href="/Elevate">Amplify</a></li>
    <li><a style="text-decoration:none; color:#000000;" href="/Educate">Learn</a></li>
  </ul>
  </div>
</header>
</template>

<script>
	export default {
		data() {
			return {};
		}
	};
</script>

<style>
.header {
  background-color: #cac0b8;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 3;
}


.header ul {
  margin: 0;
  padding-right: 40px;
  list-style: none;
  overflow: hidden;
  background-color: #cac0b8;
}

.header li a {
  display: block;
  padding: 20px 20px;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  padding: 10px 20px;
  text-decoration: none;

}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  padding: 0px;
  margin:0px;
  position: absolute;
  user-select: none;
  right:20px;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {

    float: left;
  }
  .header li a {
    padding: 25px 30px;
            color:rgb(0, 0, 0);

  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}

</style>
