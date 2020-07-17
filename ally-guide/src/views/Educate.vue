<template>
	<div style="margin-top: 200px;">
		<h1 style="color=brown;">Show up as a student.</h1>
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
					<b-carousel-slide img-src="https://i.imgur.com/wBJjNyu.png"></b-carousel-slide>

					<b-carousel-slide
						caption="Police accountability"
						text="Checks and balances for our larger justice system protect the people. The Stanford Open Policing Project examined almost 100 million traffic stops and found officers targeted areas larger in minority populations to fulfill a quota based system."
						img-src="https://go.tiffinohio.net/wp-content/uploads/2020/06/police-tear-gas-bw-web.jpg"
					></b-carousel-slide>
				</b-carousel>
			</div>
		</div>

		<div class="edu-nav">
			<a class="btn-2" href="https://airtable.com/shrPlbsh5wMvA99rq">Take a learning path</a>
			<a class="btn-2" href="https://airtable.com/shrRo99oHE0aGMKOW">Train your team</a>
			<a class="btn-2" href="/Library">Library</a>
		</div>

		<div class="FAQ-outer">
			<div class="accordion-container">
				<h2 class="title">Are you aware?</h2>

				<div>
					<b-button block v-b-toggle.accordion-1 class="mt-2">Why are the protests happening now?</b-button>
					<b-collapse id="accordion-1" v-model="collapseStates[0]">
						<div
							class="acc-body"
						>In this current moment, we want to highlight the disproportionate violence that challenges whether Black lives matter. On a larger scale, this highlights the bleak and genocidal history of the US which is founded on stolen land and the labor of Indigenous and Black communities. This is why we see injustices that are rooted towards BIPOC (Black, Indigenous, People of Color) and is often the foundation of why we see social injustices as well intersectional of class, gender, ability, and beyond. </div>
					</b-collapse>

					<b-button block v-b-toggle.accordion-2 class="mt-2">But don't all lives matter?</b-button>
					<b-collapse id="accordion-2" v-model="collapseStates[1]">
						<div class="acc-body">
							All lives should matter, but the different realities we live in show that this may not be in practice.
							If this is the first time you're hearing this question:
							Ashton Kutcher's breakdown:
							If you want to read and understand the history:
							We know all lives matter, but the worth of white lives has never been a question. We say "Black Lives Matter" to acknowledge the ways in which these lives are considered less than:
							<br />- Redlining neighborhoods where POC live
							<br />- Limited employment/education opportunities
							<br />- Voter disenfranchisement
							<br />- Racial disparities in imprisonment/sentencing for non-violent crimes
							<br />- Largely unregulated racially biased law enforcement
							<br />- De Facto Racism: laws that are racist in practice.
							<br />
						</div>
					</b-collapse>

					<b-button
						block
						v-b-toggle.accordion-3
						class="mt-2"
					>What has ever been reached by violent protests?</b-button>
					<b-collapse id="accordion-3" v-model="collapseStates[2]">
						<div
							class="acc-body"
						>Throughout history, the course of our liberties has been decided by our commitment to right for all. From having the weekends off, nuclear disarmament, reducing taxes to marches for Civil Rights, Women's Suffrage movement and the Stonewall Riots. We have the right to organize and we should exercise it. Here are some more <a href="https://www.businessinsider.com/largest-marches-us-history-2017-1#the-anti-nuclear-march-in-new-york-citys-central-park-was-on-june-12-1982-protesters-sought-nuclear-disarmament-by-the-us-government-4">examples</a>. </div>
					</b-collapse>

					<b-button
						block
						v-b-toggle.accordion-4
						class="mt-2"
					>How do I join a protest? </b-button>
					<b-collapse id="accordion-4" v-model="collapseStates[3]">
						<div
							class="acc-body"
						>Make sure to check out <a href="https://www.highsnobiety.com/p/how-to-protest-safely/">AOC's guidelines</a> for starters. Remember to  wear a mask, scrub the data of any pictures, wear protective gear, and always protect Black folx protesting by being a human shield if necessary.</div>
					</b-collapse>

					<b-button
						block
						v-b-toggle.accordion-4
						class="mt-2"
					>How should I post about this on social media?</b-button>
					<b-collapse id="accordion-4" v-model="collapseStates[3]">
						<div
							class="acc-body"
						>DO: Boost and contribute to local and national funds, share infographics around direct actions, and engage in dialogue questioning personal freedoms and biases.
						<br>DON'T: Photos and videos of police brutality towards black lives can be traumatic for anyone, and triggering for many POC. Avoid sharing this content as it increases to the dehumanization of black lives.</div>
					</b-collapse>

					<b-button
						block
						v-b-toggle.accordion-5
						class="mt-2"
					>What kind of changes are we hoping to enact?</b-button>
					<b-collapse id="accordion-5" v-model="collapseStates[4]">
						<div
							class="acc-body"
						>We hope to sustain allies' support after the attention of viral police brutality has died down. Ally.Guide hopes to help you unlearn unconscious biases, and build a new foundation of racial justice education thats connected to direct action.</div>
					</b-collapse>
					<b-button block v-b-toggle.accordion-6 class="mt-2">Why are all cops bad?</b-button>
					<b-collapse id="accordion-6" v-model="collapseStates[5]">
						<div
							class="acc-body"
						>This question often overlooks the extend that an infrastructure's culture will impact the individual. Looking at the infographic in the above infographic, we find that cops originally were started as a form of patrol towards folx that were enslaved. This create a systemic tone that reflects the type of training and environment is still set today even with cops of color. As the <a href="https://journalism.stanford.edu/stanford-open-policing-project-analyzed-data-from-nearly-100-million-traffic-stops-in-the-us/">Stanford Open Policing Study</a> showcased, abuse of power is frequent without checks and balances with the Police Immunity Act. <a href ="https://theconversation.com/how-to-understand-police-violence-not-a-case-of-good-cop-vs-bad-cop-140039">Read More </a></div>
					</b-collapse>

					<b-button block v-b-toggle.accordion-7 class="mt-2">How to support my friends of color?</b-button>
					<b-collapse id="accordion-7" v-model="collapseStates[6]">
						<div
							class="acc-body"
						>When reaching out to friends, ask yourself if you want to feel better or provide support? If its through support, make it actionable - are you dropping off a care package, offering to do an errand, etc? We hope taking a Learning Path continues to be part of your journey as an ally long after the outrage. Continue to support black media, black initiatives and charities after the headlines have died down.</div>
					</b-collapse>

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
				sliding: null,
				collapseStates: [false, false, false]
			};
		},
		methods: {
			onSlideStart(slide) {
				this.sliding = true;
			},
			onSlideEnd(slide) {
				this.sliding = false;
			},
			ToggleMessageUI: function(member) {},
			expandAll() {
				this.collapseStates = this.collapseStates.map(x => true);
			},
			collapseAll() {
				this.collapseStates = this.collapseStates.map(x => false);
			}
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
		max-width: 800px;
		height: auto;
		margin: 10px auto;
		padding: 20px;
	}
	.accordion-container > h2 {
		text-align: center;
		margin: 20px 0px;
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
	.protesterbutton {
		background-image: url("https://i.imgur.com/ETnOnsp.jpg");
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
		font-size: 16px;
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
