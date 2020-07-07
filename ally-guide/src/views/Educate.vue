<template>
	<div>
		<h1> Show up as a student. </h1>
		<div class="carousel-outer">
			<div class="carousel-inn">
				<b-carousel
					id="carousel-1"
					v-model="slide"
					:interval="6000"
					controls
					indicators
					background="#ababab"
					img-width="200"
					img-height="400"
					style="text-shadow: 1px 1px 2px #333;"
					@sliding-start="onSlideStart"
					@sliding-end="onSlideEnd"
				>
        <!-- no-animation and interval 0 turns off automatic slide-->
					<!-- Text slides with image -->
					<b-carousel-slide
						caption="Allyship is continual"
						class="caption"
						text="We're finding that the rate of police murders on a national level has remained consistent since #BlackLivesMatter first trended in 2013. Creating lasting change requires continual action, we need to continue asking for accountability."
						img-src="https://image.freepik.com/free-photo/closeup-diverse-people-holding-hands_53876-47126.jpg"
					></b-carousel-slide>
					<b-carousel-slide
						caption="Police accountability"
						text="Checks and balances for our larger justice system protect the people. The Stanford Open Policing Project examined almost 100 million traffic stops and found officers targeted areas larger in minority populations to fulfill a quota based system."
						img-src="https://go.tiffinohio.net/wp-content/uploads/2020/06/police-tear-gas-bw-web.jpg"
					></b-carousel-slide>
					<b-carousel-slide
						img-src="https://i.imgur.com/wBJjNyu.png"
					></b-carousel-slide>
				</b-carousel>
			</div>
		</div>

		<div class="edu-nav">
			<a class="btn-2" href="https://airtable.com/shrPlbsh5wMvA99rq">Take a learning path</a>
			<a class="btn-2" href="https://airtable.com/shrRo99oHE0aGMKOW">Train your team</a>
			<a class="btn-2" href = "/Library">Library</a>
		</div>

		<div class="accordion-container">
			<h2 style = "color: #000000" >Are you aware?</h2>
			<div class="set">
				<a href="#">
					Why are the protests happening now?
					<i class="fa fa-plus"></i>
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
					<p>Aliquam cursus vitae nulla non rhoncus. Nunc condimentum erat nec dictum tempus. Suspendisse aliquam erat hendrerit vehicula vestibulum.</p>
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
					Aren't some cops good?
					<i class="fa fa-plus"></i>
				</a>
				<div class="content">
					<p>Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque.</p>
				</div>
			</div>
			<div class="set">
				<a href="#">
					What kind of changes are we asking for?
					<i class="fa fa-plus"></i>
				</a>
				<div class="content">
					<p>Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque.</p>
				</div>
			</div>
			<div class="set">
				<a href="#">
					How can I show support on social media?
					<i class="fa fa-plus"></i>
				</a>
				<div class="content">
					<p>Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque.</p>
				</div>
				<div class="set">
					<a href="#">
						What is Juneeteenth?
						<i class="fa fa-plus"></i>
					</a>
					<div class="content">
						<p>Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae luctus odio pretium scelerisque.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				congressMembers: [],
				selectedMember: {},
				showmessageUI: false,
				search: "",
				slide: 0,
				sliding: null
			};
		},
		methods: {
			onSlideStart(slide) {
				this.sliding = true;
			},
			onSlideEnd(slide) {
				this.sliding = false;
			},
			ToggleMessageUI: function(member) {}
		},
		computed: {},
		created() {}
	};
</script>


<style >
	body {
		background-color: #924235;
		padding: 0 10px;
		font-family: "Open Sans", sans-serif;
	}

	.history {
	}
	.edu-nav {
		text-align: center;
		background-color: #c49d79;
		width: 100%;
		padding: 40px;
	}

	.edu-nav a {
		margin-right: 100px;
		color: #000000;
	}
	.accordion-container {
		position: relative;
		max-width: 500px;
		height: auto;
		margin: 10px auto;
	}
	.accordion-container > h2 {
		text-align: center;
		color: #fff;
		padding-bottom: 5px;
		margin-bottom: 20px;
		padding-bottom: 15px;
		border-bottom: 1px solid #ddd;
	}
	.set {
		position: relative;
		width: 100%;
		height: auto;
		background-color: #f5f5f5;
	}
	.set > a {
		display: block;
		padding: 10px 15px;
		text-decoration: none;
		color: #555;
		font-weight: 600;
		border-bottom: 1px solid #ddd;
		-webkit-transition: all 0.2s linear;
		-moz-transition: all 0.2s linear;
		transition: all 0.2s linear;
	}
	.set > a i {
		float: right;
		margin-top: 2px;
	}
	.set > a.active {
		background-color: #3399cc;
		color: #fff;
	}
	.content {
		background-color: #fff;
		border-bottom: 1px solid #ddd;
		display: none;
	}
	.content p {
		padding: 10px 15px;
		margin: 0;
		color: #333;
	}
	.library-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.protesterbutton{
		background-image:url('https://i.imgur.com/ETnOnsp.jpg');
		height: 1300px;
		width: 700px;
	}

.btn-2 {
    letter-spacing: 0;
		color: #fff;

}

.btn-2:hover,
.btn-2:active {
  letter-spacing: 2px;
	text-decoration: none;
  color: #ffffff;
	border: 1px solid rgba(#ffffff, 0);

	transition: all 280ms ease-in-out;
}

.btn-2:after,
.btn-2:before {
color: #ffffff;
cursor: pointer;
font-size:16px;
font-weight: 400;
line-height: 45px;
margin: 0 0 2em;
max-width: 160px;
position: relative;
text-decoration: none;
}

.btn-2:hover:after,
.btn-2:hover:before {
  backface-visibility: hidden;
  border-color: #ffffff;
  transition: width 350ms ease-in-out;
  width: 70%;
}

.btn-2:hover:before {
  bottom: auto;
  top: 0;
  width: 70%;
}
</style>
