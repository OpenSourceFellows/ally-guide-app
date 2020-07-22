<template>
	<div>
		<div class="elevatetext" style="background-color:#d2a07e;">
			<h4 style="object-fit:contain;color:#996b58">Changes start by doing.</h4>
				<img src="https://i.ibb.co/4Fb74Kr/Screen-Shot-2020-07-16-at-11-50-58-PM.png">
			<!-- <button type="button" class="btn btn-primary" v-on:click="SendEmail">email</button> -->
		</div>
		<div class="searchbanner">
			<div>
				<h4>
					<br />Elevate and amplify racial justice issues
				</h4>
			</div>
			<div id="search-ui">
				<div>
					<b-form-input
						type="text"
						v-model="search"
						placeholder="Enter a Zipcode"
						v-on:keyup="CheckInputContent"
						style="width:30%"
						class="searchform"
					/>
					<button type="button" class="btn btn-outline-warning" v-on:click="CreateRepList()">Search</button>
				</div>
			</div>
		</div>

		<div id="government-contact-info" v-show="hasContent">
			<div>
				<b-card
					class="mb-2 cards elevate"
					v-for="member in congressMembers"
					:key="member.name"
					style="width:24rem; display:inline-block; margin:10px; padding:30px;"
					:title="member.name"
					:sub-title="member.title"
					:img-src="member.photoUrl"
					img-alt="Image"
					img-top
					tag="article"
				>
					<b-card-text>
						<!-- <p>Position: {{member.title}}</p> -->

						<p>
							<i class="fas fa-map-marker-alt" style="font-size:20px;width:1.5rem;"></i>
							{{member.city}} {{member.state}}
						</p>
						<p>
							<i class="fas fa-envelope" style="font-size:25px;width:1.5rem;"></i>
							{{member.email}}
						</p>
						<p>
							<i class="fab fa-facebook-square" style="font-size:25px;width:1.5rem;"></i>
							{{member.facebook}}
						</p>
						<p>
						<i	class="fab fa-twitter" style="font-size: 25px;width:1.5rem;"></i>
						{{member.twitter}}
						</p>
						<!-- <p>Contact Page: {{member.contactPage}}</p> -->
					</b-card-text>

					<b-button type="button" variant="primary" v-on:click="ToggleMessageUI(member)">Send a Message</b-button>
				</b-card>
			</div>
		</div>
		<div>
			<div id="message-ui" v-show="showmessageUI">
				<div id="selected-member">
					<div>
						<!-- <b-card no-body class="overflow-hidden" style="max-width: 100%;">
							<b-row no-gutters>
								<b-col md="2">
									<b-card-img
										src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
										alt="Image"
										class="rounded-0"
									></b-card-img>
								</b-col>
								<b-col md="10 d-flex align-items-center">
									<b-card-body>
										<b-card-text>
											<h1 class="p-2" style="display: block;">{{selectedMember.name}}</h1>
											<h4 class="p-2" style="display: block;">{{selectedMember.title}}</h4>
										</b-card-text>
									</b-card-body>
								</b-col>
							</b-row>
						</b-card>-->
					</div>
				</div>

				<div>
					<div>
						<br />
						<h2>What would you like to do?</h2>
						<p> Click the buttons below to generate an email template. </p>
						<br />
					</div>

					<div class="m-2 d-inline" v-for="message in messages" :key="message.mid">
						<button
							v-on:click="component = message.component"
							class="btn-dark btn m-2"
						>{{message.name}}</button>
					</div>
					<div class="outerdiv">
							<div id="test" v-show="showmessageUI">
						<h1 class="p-2" style="display: block;">To {{selectedMember.name}},</h1>
					</div>
						<component v-bind:is="component"></component>
					</div>
				</div>
			</div>
		</div>
		<div class="defundbanner">
			<a href="https://defund12.org/">#Defund12: Reach out to your county to defund police</a>
		</div>
	</div>
</template>

<script>
	import EndPoliceImmunity from "../components/messages/EndPoliceImmunity.vue";
	import DefundPolice from "../components/messages/DefundPolice.vue";
	import InvestigateTheArmy from "../components/messages/InvestigateTheArmy.vue";
	import EndMoneyBail from "../components/messages/EndMoneyBail.vue";
	import RestoreSixGrandfathers from "../components/messages/RestoreSixGrandfathers.vue";

	export default {
		components: {
			EndPoliceImmunity: EndPoliceImmunity,
			DefundPolice: DefundPolice,
			InvestigateTheArmy: InvestigateTheArmy,
			EndMoneyBail: EndMoneyBail,
			RestoreSixGrandfathers: RestoreSixGrandfathers
		},
		data() {
			return {
				messages: [
					{ name: "End Police Immunity", component: "EndPoliceImmunity" },
					{ name: "Say their names", component: "DefundPolice" },
					{ name: "Investigate the Army", component: "InvestigateTheArmy" },
					{ name: "End Money Bail", component: "EndMoneyBail" },
					{
						name: "Restore Six Grandfathers",
						component: "RestoreSixGrandfathers"
					}
				],
				congressMembers: [],
				reps: [],
				component: "EndPoliceImmunity",
				selectedMember: {},
				showmessageUI: false, //switch to True to see elements
				showTextArea: false, //switch to True to see elements
				selectionMade: false, //switch to True to see elements
				showCongressInfo: true,
				hasContent: false, //switch to True to see elements
				search: ""
			};
		},
		methods: {
			CheckInputContent: function() {
				if (this.search != "") {
					this.hasContent = true;
				} else {
					this.hasContent = false;
				}
			},
			ToggleMessageUI: function(member) {
				this.selectedMember = member;
				this.showmessageUI = true;
				this.hasContent = false;
				this.search = "";
				this.congressMembers = [];
			},
			ToggleTextArea: function() {
				this.showTextArea = true;
			},
			CreateRepList: function() {
				this.congressMembers = [];
				this.$http
					.get(
						"https://murmuring-headland-63935.herokuapp.com/api/elevate/" +
							this.search
					)
					.then(
						response => {
							console.log(response.data);
							this.congressMembers = response.data;
							this.hasContent = true;
						},
						response => {
							// error callback
						}
					);
			},
			SendEmail: function() {
				this.$http
					//.get("https://murmuring-headland-63935.herokuapp.com/api/email)
					.get("http://localhost:5000/api/email")
					.then(
						response => {
							console.log(response.data);
						},
						response => {
							// error callback
						}
					);
			},
			RedirectToTwitter: function(member){
	      window.open('www.twitter.com/' + this.twitter);
	    }
		},
		computed: {},
		created() {}
	};
</script>
