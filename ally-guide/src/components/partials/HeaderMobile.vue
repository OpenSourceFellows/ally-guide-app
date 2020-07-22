<template>
  <div id="navigation-mobile">
		<header>
				<nav>
					<ul>
						<li>
							<a style="border-radius:18px;border:3px solid white; padding-right:3px;padding-left:3px;" href="https://forms.gle/ZYGf77F4dMMiMdpx9"> Subscribe </a>
						</li>
						<li><a href="">Volunteer</a></li>
						<li class="mainNav">
						<a href="/Home"><img style="width:30px;"src="https://i.ibb.co/j4t3YL6/imageedit-8-6683678944.png" alt="imageedit-8-6683678944" border="0"></a></li>

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


		nav{
			width: 100%;
			font-size: 1.1em;
			height: 80px;
			background: #000000;
			z-index: 10;
			position:relative;
			top: 0;
		}

		nav div {
			color: white;
			font-size: 2rem;
			line-height: 80px;
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
			line-height: 70px;
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

		.mainNav{
			float:right;
		}


		#navigation-mobile {
		  padding: 20px 0 0 0;
}

	</style>

<script>
export default {};
</script>
