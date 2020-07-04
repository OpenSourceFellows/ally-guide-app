<template>
	<div>
		<header>
			<div class="header-banner"></div>
			<div class="clear"></div>
			<nav>
				<div class="site-title">Ally Guide</div>
				<ul>
					<li>
						<a href="/Home">Home</a>
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
						<a href="/Educate">Educate</a>
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
		height: 350px;
		z-index: 10;
	}
	.header-banner {
		background-color: #333;
		background-image: url("https://www.pewresearch.org/wp-content/uploads/2020/06/FT_20.06.09_BlackLivesMatter_feature.png");
		background-position: top- 50;
		background-repeat: no-repeat;
		background-size: 100% 180%;
		/* width: 100%; */
		height: 300px;
	}

	header h1 {
		background-color: rgba(18, 72, 120, 0.8);
		color: #fff;
		padding: 0 1rem;
		position: absolute;
		top: 0rem;
		left: 2rem;
	}

	.fixed-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}

	nav {
		width: 100%;
		height: 50px;
		background: #000000;
		z-index: 10;
	}

	nav div {
		color: white;
		font-size: 2rem;
		line-height: 60px;
		position: absolute;
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
		padding: 0 0 0 20px;
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

	li:hover::after {
		width: 100%;
	}
</style>
