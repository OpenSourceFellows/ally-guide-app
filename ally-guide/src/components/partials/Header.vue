<template>
	<div>
		<header>
			<div class="header-banner"></div>
			  <div class="message-title">
				Our Allyship can be our responsibility.
				</div>
			<div class="clear"></div>

			<nav>
				<ul>
					<li>
						<a href=""> Subscribe </a>
					</li>
					<li>
						<a href="/Educate">Educate </a>
					</li>
					<li>
						<a href="/Collaborate">Collaborate</a>
					</li>
					<li>
						<a href="/Contribute">Contribute</a>
					</li>
					<li>
						<a href="/Elevate">Elevate</a>
					</li>
				  <li>
						<a href="/Home">Home</a>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		}
	};
</script>

<style>
	/* main */
	header {
		position: fixed;
    top: 0;
    left: 0;
    width: 100%;
		z-index: 10;
	}

	.site-title img{float:left;}

	.header-banner {
		background-color: #333;
		background-image: url('https://i.ibb.co/b12NHqL/Screen-Shot-2020-07-06-at-1-44-28-AM.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		align: bottom;
		height: 180px;
		padding: 100px;

	}

	.message-title {
	  visibility: visible;
		background-color:#6d2114;
		color: #fff;
		padding: 0 1rem;
		position: absolute;
		bottom: 3.7rem;
		right:8rem;
		font-size: 3em;
		opacity: 70%;
	}



	nav{
		width: 100%;
		font-size: 1.1em;
		height: 60px;
		background: #000000;
		z-index: 10;
		position:relative;
		top: 0;
	}

	nav div {
		color: white;
		font-size: 2rem;
		line-height: 60px;
		position: absolute;
		postion: fixed;
		top: 0;
		left: 2%;
		visibility: hidden;
	}
	.visible-title {
		visibility: visible;
	}

	nav ul {
		list-style-type: none;
		margin: 0 2% auto 0;
		padding-left: 0;
		text-align: center;
		max-width: 100%;
		float: right;
	}
	nav ul {
		display: inline-block;
		line-height: 50px;
	}
	nav ul li a {
		text-decoration: none;
		color: white;
	}

	li {
		text-decoration: none;
		margin:0px 10px;
		font-family: "Poppins", sans-serif;
		font-weight: bold;
		color: red;
		background-color: #000000;
		float: right;
		position: relative;
		overflow: hidden;
		margin: ;
	}

	li::after {
		background-color: #b81a00;
		color: white;
		content: "";
		width: 0;
		height: 3px;
		left: 0;
		bottom: 0;
		transition: width 0.35s ease 0s;
		position: absolute;
	}
	li img{
		width:160px;
		postion: fixed;
		top: 0;
		left: 2%;
	}
	li:hover::after {
		width: 100%;
	}
  li a:hover{
		text-decoration:none;
		color:white;
	}


</style>
