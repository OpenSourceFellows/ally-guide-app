<template>
	<div>
		<div class="elevatetext" style="background-color:#d2a07e;">
			<h4 style="object-fit:contain;color:#996b58">Changes start by doing.</h4>
			<img src="https://i.ibb.co/4Fb74Kr/Screen-Shot-2020-07-16-at-11-50-58-PM.png" />
			<!-- <button type="button" class="btn btn-primary" v-on:click="SendEmail">email</button> -->
		</div>
		<div class="searchbanner">
			<div>
				<h4>
					Elevate and amplify racial justice issues
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
							FB: @{{member.facebook}}
						</p>
						<p>
							<i class="fab fa-twitter" style="font-size: 25px;width:1.5rem;"></i>
							Twitter: @{{member.twitter}}
						</p>
					</b-card-text>

					<b-button type="button" variant="primary" v-on:click="ToggleMessageUI(member)">Send a Message</b-button>
				</b-card>
			</div>
		</div>

		<div>
			<div id="message-ui" v-show="showmessageUI">
				<div class="messageContainer">
					<b-container class="bv-example-row">
						<b-row class="justify-content-md-center" align-v="center" align-h="center">
							<b-col cols="6" md="4" lg="3" style="padding:20px;">
								<b-card-img :src="selectedMember.photoUrl" alt="Image" class="rounded-0"></b-card-img>
							</b-col>
							<b-col cols="12" md="auto">
								<div>
									<br />
									<h2>How would you like to reach out to {{selectedMember.name}}?</h2>
									<p>Select how you want to communicate.</p>
									<br />
								</div>

								<div class="m-2 d-inline selectMessage" v-on:change="SelectMessageType($event)">
									<b-button variant="light" value="Twitter">
										<img class="iconsize" src="/assets/twittericon.png" />
									</b-button>
									<b-button variant="light" value="Email">
										<img class="iconsize" src="/assets/emailicon.png" />
									</b-button>
									<!-- <b-button variant="light" value="Facebook"><img class='iconsize' src=''></b-button> -->
								</div>
							</b-col>
						</b-row>
					</b-container>
				</div>
				<div>
					<!-- Dropdown for Which verison of the message -->
					<!-- <div class="col-4 d-flex mb-5" id="message-type-dropdown">
						<select class="form-control" v-on:change="SelectMessageType($event)">
							<option value="Twitter">Twitter</option>
							<option value="Email">Email</option>
					<!-- <option value="Facebook">Facebook</option>-->
					<!-- </select>
					</div>-->

					<div class="outerdiv">
							<h2>What type of message would you like to send?</h2>

						<div class="messageButton">
							<b-dropdown
								text="Message to Send"
								block
								variant="outline-dark"
								class="m-2"
								menu-class="w-100"
							>
								<div class="m-2 d-inline" v-for="message in messages" :key="message.mid">
									<b-dropdown-item v-on:click="component = message.component">{{message.name}}</b-dropdown-item>
								</div>
							</b-dropdown>
						</div>
						<div class="messageBox">
							<div id="test" v-show="showmessageUI">
								<h1 class="p-2 d-inline-block" style="display: block;">To {{selectedMember.name}}</h1>
								<div class="d-inline-block">
									<button
										class="btn-dark btn m-2"
										v-on:click="SendToTwitter(selectedMember)"
									>Open Twitter Page</button>
								</div>
							</div>
							<component v-bind:is="component"></component>
						</div>
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
	import TwitterEndPoliceImmunity from "../components/messages/TwitterEndPoliceImmunity.vue";
	import TwitterDefundPolice from "../components/messages/TwitterDefundPolice.vue";
	import TwitterInvestigateTheArmy from "../components/messages/TwitterInvestigateTheArmy.vue";
	import TwitterEndMoneyBail from "../components/messages/TwitterEndMoneyBail.vue";
	import TwitterRestoreSixGrandfathers from "../components/messages/TwitterRestoreSixGrandfathers.vue";

	export default {
		components: {
			EndPoliceImmunity: EndPoliceImmunity,
			DefundPolice: DefundPolice,
			InvestigateTheArmy: InvestigateTheArmy,
			EndMoneyBail: EndMoneyBail,
			RestoreSixGrandfathers: RestoreSixGrandfathers,
			TwitterEndPoliceImmunity: TwitterEndPoliceImmunity,
			TwitterDefundPolice: TwitterDefundPolice,
			TwitterInvestigateTheArmy: TwitterInvestigateTheArmy,
			TwitterEndMoneyBail: TwitterEndMoneyBail,
			TwitterRestoreSixGrandfathers: TwitterRestoreSixGrandfathers,
		},
		data() {
			return {
				messages: [],
				emailMessages: [
					{
						name: "End Police Immunity",
						component: "EndPoliceImmunity",
						elementId: "end-police-immunity",
					},
					{ name: "Say their names", component: "DefundPolice" },
					{ name: "Investigate the Army", component: "InvestigateTheArmy" },
					{ name: "End Money Bail", component: "EndMoneyBail" },
					{
						name: "Restore Six Grandfathers",
						component: "RestoreSixGrandfathers",
					},
				],
				twitterMessages: [
					{
						name: "End Police Immunity",
						component: "TwitterEndPoliceImmunity",
					},
					{ name: "Say their names", component: "TwitterDefundPolice" },
					{
						name: "Investigate the Army",
						component: "TwitterInvestigateTheArmy",
					},
					{ name: "End Money Bail", component: "TwitterEndMoneyBail" },
					{
						name: "Restore Six Grandfathers",
						component: "TwitterRestoreSixGrandfathers",
					},
				],
				//facebookMessages: [],
				congressMembers: [],
				reps: [],
				component: "TwitterEndPoliceImmunity",
				selectedMember: {},
				showmessageUI: false, //switch to True to see elements
				showTextArea: false, //switch to True to see elements
				selectionMade: false, //switch to True to see elements
				showCongressInfo: true,
				hasContent: false, //switch to True to see elements
				search: "",
			};
		},
		methods: {
			CheckInputContent: function () {
				if (this.search != "") {
					this.hasContent = true;
				} else {
					this.hasContent = false;
				}
			},
			ToggleMessageUI: function (member) {
				this.selectedMember = member;
				this.showmessageUI = true;
				this.hasContent = false;
				this.search = "";
				this.congressMembers = [];
				this.messages = this.twitterMessages;
			},
			SelectMessageType: function (event) {
				if (event.target.value == "Email") {
					this.messages = this.emailMessages;
				} else if (event.target.value == "Twitter") {
					this.messages = this.twitterMessages;
				} else if (event.target.value == "Facebook") {
					this.messages = this.facebookMessages;
				}
			},
			CreateRepList: function () {
				this.congressMembers = [];
				this.$http
					.get(
						"https://murmuring-headland-63935.herokuapp.com/api/elevate/" +
							this.search
					)
					.then(
						(response) => {
							console.log(response.data);
							this.congressMembers = response.data;
							this.hasContent = true;
						},
						(response) => {
							// error callback
						}
					);
			},
			SendEmail: function () {
				this.$http
					.get("https://murmuring-headland-63935.herokuapp.com/api/email")
					.then(
						(response) => {
							console.log(response.data);
						},
						(response) => {
							// error callback
						}
					);
			},
			SendToTwitter: function (member) {
				window.open("www.twitter.com/" + member.twitterHandle);
			},
		},
		computed: {},
		created() {},
	};
</script>
