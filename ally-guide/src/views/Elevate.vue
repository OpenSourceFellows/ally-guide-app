<template>
	<div>
		<div class="searchbanner">
			<div>
				<h4 class="searchtext">
					Changes start by doing.
					<br />Amplify by contacting congress, signing petitions, or contacting your local reps.
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
					class="mb-2 cards"
					v-for="member in congressMembers"
					:key="member.name"
					style="max-width: 24rem; display:inline-block; margin:10px;"
					:title="member.name"
					:sub-title="member.title"
					img-src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
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
							<i class="fab fa-twitter" style="font-size:25px;width:1.5rem;"></i>
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
						<b-card no-body class="overflow-hidden" style="max-width: 100%;">
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
						</b-card>
					</div>
				</div>

				<div>
					<div>
						<br />
						<h2>What would you like to do?</h2>
						<br />
					</div>
					<div class="m-2 d-inline" v-for="message in messages" :key="message.mid">
						<button v-on:click="showTextArea = !showTextArea" class="btn-primary btn m-2">{{message}}</button>
					</div>
					<div v-if="showTextArea">
						<textarea class="form-contorl p-3" rows="15%" cols="90%"></textarea>
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
				messages: [
					"End Money Bail + Police Reform",
					"End Money Bail",
					"End $ Bail (Created by Color Of Change)",
					"Address police brutality + defund ",
					"Protester Health + COVID-19",
					"Withdraw National Guard and Army Reserve, cease use of M54 inhumane"
				],
				congressMembers: [],
				reps: [],
				selectedMember: {},
				showmessageUI: true, //switch to True to see elements
				showTextArea: true, //switch to True to see elements
				selectionMade: true, //switch to True to see elements
				showCongressInfo: true,
				hasContent: true, //switch to True to see elements
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
					.get("http://localhost:5000/api/elevate/" + this.search)
					.then(
						response => {
							this.congressMembers = response.data;
							this.hasContent = true;
						},
						response => {
							// error callback
						}
					);
			}
		},
		computed: {
			filteredCongressMembers: function() {
				return this.congressMembers.filter(member => {
					return member.state.toLowerCase().match(this.search.toLowerCase());
				});
			}
		},
		created() {
			// created() {

			// 	<div id="message-ui" v-show="showmessageUI">
			// 		<div id="selected-member">
			// 			<div>
			// 				<h5 class="p-2" style="display: inline-block;">{{selectedMember.title}}</h5>
			// 				<h5 class="p-2" style="display: inline-block;">{{selectedMember.name}}</h5>
			// 				<a class="float-right p-4" style="display: inline-block;">Form</a>
			// 				<a class="float-right p-4" style="display: inline-block;">Email</a>
			// 			</div>
			// 		</div>

			// 		<div>
			// 			<div>
			// 				<h4>Messages:</h4>
			// 			</div>
			// 			<div class="m-5 d-inline" v-for="message in messages" :key="message.mid">
			// 				<button v-on:click="showTextArea = !showTextArea" class="btn-primary btn m-4">{{message}}</button>
			// 			</div>
			// 			<div v-if="showTextArea">
			// 				<textarea class="form-contorl p-3" rows="15%" cols="90%"></textarea>
			// 			</div>
			//         </div>

			this.congressMembers = [
				{
					name: "Gavin Newsom",
					title: "Governor",
					county: "",
					city: "",
					state: "California",
					email: "",
					contactPage: "https://govapps.gov.ca.gov/gov40mail/"
				},
				{
					name: "London N. Breed",
					title: "Mayor",
					county: "",
					city: "San Francisco",
					state: "California",
					email: "",
					contactPage: ""
				},
				{
					name: "Kay Ivey",
					title: "Governor",
					county: "",
					city: "Montgomery",
					state: "Alabama",
					email: "",
					contactPage: "https://contact.governor.alabama.gov/contact.aspx"
				},
				{
					name: "Mike Dunleavy",
					title: "Governor",
					county: "",
					city: "Juneau",
					state: "Alaska",
					email: "",
					contactPage: "https://gov.alaska.gov/contact/email-the-governor/"
				},
				{
					name: "Doug Ducey",
					title: "Governor",
					county: "",
					city: "Phoenix",
					state: "Arizona",
					email: "engage@az.gov",
					contactPage:
						"https://azgovernor.gov/engage/form/contact-governor-ducey"
				},
				{
					name: "Kamala D Harris",
					title: "Senator",
					county: "",
					city: "",
					state: "California",
					email: "",
					contactPage: "https://kamalaharris.org/"
				},
				{
					name: "Dianne Feinsten",
					title: "Senator",
					county: "",
					city: "Los Angeles",
					state: "California",
					email: "senator@feinstein.senate.gov",
					contactPage: "https://www.feinstein.senate.gov/public/index.cfm/"
				},
				{
					name: "Nancy Pelosi",
					title: "Representative",
					county: "",
					city: "",
					state: "California",
					email: "Scheduler.Pelosi@mail.house.gov",
					contactPage: "https://pelosi.house.gov/contact-me/email-me"
				},
				{
					name: "Randall Woodfin",
					title: "Mayor",
					county: "",
					city: "Birmingham",
					state: "Alabama",
					email: "",
					contactPage: "https://www.birminghamal.gov/"
				},
				{
					name: "Asa Hutchinson",
					title: "Governor",
					county: "",
					city: "Little Rock",
					state: "Arkansas",
					email: "info@governor.arkansas.gov",
					contactPage:
						"https://governor.arkansas.gov/online-services/contact-us/"
				},
				{
					name: "Jared Polis",
					title: "Governor",
					county: "",
					city: "Denver",
					state: "Colorado",
					email: "",
					contactPage: "Governorpolis@state.co.us "
				},
				{
					name: "Ned Lamont",
					title: "",
					county: "",
					city: "Hartford",
					state: "Connecticut",
					email: "",
					contactPage:
						"https://portal.ct.gov/Office-of-the-Governor/Contact/Email-Governor-Lamont"
				},
				{
					name: "John Carney",
					title: "Governor",
					county: "",
					city: "",
					state: "Delaware",
					email: "jcarney@state.de.us",
					contactPage: "https://governor.delaware.gov/email-governor-carney/"
				},
				{
					name: "Ron DeSantis",
					title: "Governor",
					county: "",
					city: "Tallahassee",
					state: "Florida",
					email: "GovernorRon.Desantis@eog.myflorida.com",
					contactPage: "https://www.flgov.com/"
				},
				{
					name: "Brian Kemp",
					title: "Governor",
					county: "",
					city: "Atlanta",
					state: "Georgia",
					email: "georgia.governor@gov.state.ga.us",
					contactPage:
						"https://gov.georgia.gov/contact-us/constituent-services"
				},
				{
					name: "David Ige",
					title: "Governor",
					county: "",
					city: "Honolulu",
					state: "Hawaii",
					email: "gov@gov.state.hi.us",
					contactPage:
						"https://governor.hawaii.gov/contact-us/contact-the-governor/"
				},
				{
					name: "Brad Little",
					title: "Governor",
					county: "",
					city: "Boise",
					state: "Idaho",
					email: "governor@gov.idaho.gov",
					contactPage: "https://gov.idaho.gov/contact-us/"
				},
				{
					name: "J.B. Pritzker",
					title: "Governor",
					county: "",
					city: "Springfield",
					state: "Illinois",
					email: "governor@state.il.us",
					contactPage: ""
				},
				{
					name: "James R. Thompson",
					title: "Governor",
					county: "",
					city: "Chicago",
					state: "Illinois",
					email: "",
					contactPage: "https://www.in.gov/gov/2752.htm"
				},
				{
					name: "Eric J. Holcomb",
					title: "Governor",
					county: "",
					city: "Indianapolis",
					state: "Indiana",
					email: "",
					contactPage: "https://www.in.gov/gov/2752.htm"
				},
				{
					name: "Kim Reynolds",
					title: "Governor",
					county: "",
					city: "Des Moines",
					state: "Iowa",
					email: "",
					contactPage:
						"https://iqconnect.lmhostediq.com/iqextranet/EForm.aspx?__cid=FSL_IA_GOV&__fid=100007"
				},
				{
					name: "Laura Kelly",
					title: "Governor",
					county: "",
					city: "Topeka",
					state: "Kansas",
					email: "Constituent@governor.wpo.state.ks.us",
					contactPage: "https://governor.kansas.gov/questions_form/"
				},
				{
					name: "Andy Beshear",
					title: "Governor",
					county: "",
					city: "Frankfort",
					state: "Kentucky",
					email: "",
					contactPage: "https://governor.ky.gov/contact/contact-us"
				},
				{
					name: "John Bel Edwards",
					title: "Governor",
					county: "",
					city: "Baton Rouge",
					state: "Louisiana",
					email: "lagov@linknet.net",
					contactPage: "https://gov.louisiana.gov/index.cfm/form/home/4"
				},
				{
					name: "Janet T. Mills",
					title: "Governor",
					county: "",
					city: "Augusta",
					state: "Maine",
					email: "governor@state.me.us",
					contactPage:
						"https://www.maine.gov/governor/mills/contact/share-your-opinion"
				},
				{
					name: "Larry Hogan",
					title: "Governor",
					county: "",
					city: "Annapolis",
					state: "Maryland",
					email: "",
					contactPage: "https://governor.maryland.gov/contact-the-governor/"
				},
				{
					name: "Charlie Baker",
					title: "Governor",
					county: "",
					city: "Boston",
					state: "Massachusetts",
					email: "constituent.services@state.ma.us",
					contactPage: "https://governor.maryland.gov/contact-us/"
				},
				{
					name: "Gretchen Whitmer",
					title: "Governor",
					county: "",
					city: "Lansing",
					state: "Michigan",
					email: "",
					contactPage:
						"https://somgovweb.state.mi.us/GovRelations/ShareOpinion.aspx"
				},
				{
					name: "Tim Walz",
					title: "Governor",
					county: "Minnesota",
					city: "St. Paul",
					state: "Minnesota",
					email: "tim.walz@state.mn.us",
					contactPage: "https://mn.gov/governor/contact/"
				},
				{
					name: "Tate Reeves",
					title: "Governor",
					county: "",
					city: "Jackson",
					state: "Mississippi",
					email: "governor@govreeves.ms.gov",
					contactPage: ""
				},
				{
					name: "Michael L. Parson",
					title: "Governor",
					county: "",
					city: "Jefferson City",
					state: "Missouri",
					email: "info@mikeparson.com",
					contactPage: "https://governor.mo.gov/contact-us"
				},
				{
					name: "Steve Bullock",
					title: "Governor",
					county: "Montana",
					city: "Helena",
					state: "Montana",
					email: "governor@mt.gov",
					contactPage: "https://svc.mt.gov/gov/contact/shareopinion"
				},
				{
					name: "Pete Ricketts",
					title: "Governor",
					county: "",
					city: "Lincoln",
					state: "Nebraska",
					email: "Pete.Ricketts@nebraska.gov",
					contactPage: "https://governor.nebraska.gov/contact-form"
				},
				{
					name: "Steve Sisolak",
					title: "Governor",
					county: "",
					city: "Carson City",
					state: "Nevada",
					email: "steve@stevesisolak.com",
					contactPage: "http://gov.nv.gov/About/Governor-Steve-Sisolak/"
				},
				{
					name: "Christoper T. Sununu",
					title: "Governor",
					county: "",
					city: "Concord",
					state: "New Hampshire",
					email: "",
					contactPage: "https://www.governor.nh.gov/contact-us"
				},
				{
					name: "Phil Murphy",
					title: "Governor",
					county: "",
					city: "Trenton",
					state: "New Jersey",
					email: " Constituent.relations@nj.gov",
					contactPage: "https://nj.gov/governor/contact/all/"
				},
				{
					name: "Michelle Lujan Grisham",
					title: "Governor",
					county: "",
					city: "Sante Fe",
					state: "New Mexico",
					email: "",
					contactPage:
						"https://www.governor.state.nm.us/contact-the-governor/"
				},
				{
					name: "Andrew M Cuomo",
					title: "Governor",
					county: "",
					city: "Albany",
					state: "New York",
					email: "",
					contactPage:
						"https://www.governor.ny.gov/content/governor-contact-form"
				},
				{
					name: "Roy Cooper",
					title: "Governor",
					county: "",
					city: "Raleigh",
					state: "North Carolina",
					email: "",
					contactPage:
						"https://governor.nc.gov/contact/contact-governor-cooper"
				},
				{
					name: "Doug Burgmum",
					title: "Governor",
					county: "",
					city: "Bismarck",
					state: "North Dakota",
					email: "",
					contactPage: "https://www.governor.nd.gov/contact"
				},
				{
					name: "Mike DeWine",
					title: "Governor",
					county: "",
					city: "Columbus",
					state: "Ohio",
					email: "",
					contactPage:
						"https://governor.ohio.gov/wps/portal/gov/governor/contact/contact-us"
				},
				{
					name: "Kevin Stitt",
					title: "Governor",
					county: "",
					city: "Oklahoma City",
					state: "Oklahoma",
					email: "",
					contactPage:
						"https://www.governor.ok.gov/contact/general-info/contact-governor/"
				},
				{
					name: "Kate Brown",
					title: "Governor",
					county: "",
					city: "Salem",
					state: "Oregon",
					email: "",
					contactPage: "https://www.oregon.gov/gov/Pages/contact.aspx"
				},
				{
					name: "Tom Wolf",
					title: "Governor",
					county: "",
					city: "Harrisburg",
					state: "Pennsylvania",
					email: "",
					contactPage: "https://www.governor.pa.gov/contact/"
				},
				{
					name: "Gina Raimondo",
					title: "Governor",
					county: "",
					city: "Providence",
					state: "Rhode Island",
					email: "",
					contactPage: "https://governor.ri.gov/contact/"
				},
				{
					name: "Henry McMaster",
					title: "Governor",
					county: "",
					city: "Columbia",
					state: "South Carolina",
					email: "",
					contactPage: "Email Governor McMaster"
				},
				{
					name: "Pamela Evette",
					title: "Lieutenant Governor",
					county: "",
					city: "Columbia",
					state: "South Carolina",
					email: "",
					contactPage: "Email Lt. Governor Evette"
				},
				{
					name: "Kristi Noem",
					title: "Governor",
					county: "",
					city: "Pierre",
					state: "South Dakota",
					email: "",
					contactPage:
						"https://iqconnect.lmhostediq.com/iqextranet/EForm.aspx?__cid=FSL_SD_GOV&__fid=2100060"
				},
				{
					name: "Bill Lee",
					title: "Governor",
					county: "",
					city: "Nashville",
					state: "Tennessee",
					email: "",
					contactPage: "https://www.tn.gov/governor/contact-us.html"
				},
				{
					name: "Gregg Abbott",
					title: "Governor",
					county: "",
					city: "Austin",
					state: "Texas",
					email: "",
					contactPage: "https://gov.texas.gov/apps/contact/opinion.aspx"
				},
				{
					name: "Gary Herbert",
					title: "Governor",
					county: "",
					city: "Salt Lake City",
					state: "Utah",
					email: "",
					contactPage:
						"https://servicecloudtrial-155c0807bf-158b6dc6793.force.com/governor/s/comments"
				},
				{
					name: "Phil Scott",
					title: "Governor",
					county: "",
					city: "Montpelier",
					state: "Vermont",
					email: "",
					contactPage: "https://governor.vermont.gov/email"
				},
				{
					name: "Ralph Northam",
					title: "Governor",
					county: "",
					city: "Richmond",
					state: "Virginia",
					email: "",
					contactPage:
						"https://www.governor.virginia.gov/constituent-services/communicating-with-the-governors-office/"
				},
				{
					name: "Jay Inslee",
					title: "Governor",
					county: "",
					city: "Olympia",
					state: "Washington",
					email: "",
					contactPage:
						"https://www.governor.wa.gov/contact/contact/send-gov-inslee-e-message"
				},
				{
					name: "Jenny A. Durkan",
					title: "Mayor",
					county: "",
					city: "Seattle",
					state: "Washington",
					email: "jenny.durkan@seattle.gov",
					contactPage: ""
				},
				{
					name: "Jim Justice",
					title: "Governor",
					county: "",
					city: "Charleston",
					state: "West Virginia",
					email: "",
					contactPage: "https://governor.wv.gov/Pages/SubmitaCo"
				},
				{
					name: "Tony Evers",
					title: "Governor",
					county: "",
					city: "Madison",
					state: "Wisconsin",
					email: "",
					contactPage:
						"https://appengine.egov.com/apps/wi/governor/voice-an-opinion"
				},
				{
					name: "Tom Barret",
					title: "Mayor",
					county: "",
					city: "Milwaukee",
					state: "Wisconsin",
					email: "mayor@milwaukee.gov",
					contactPage: ""
				},
				{
					name: "Satya",
					title: "Rhodes-Conway",
					county: "",
					city: "Madison",
					state: "Wisconsin",
					email: "",
					contactPage: "https://www.cityofmadison.com/mayor/contact"
				},
				{
					name: "Mark Gordon",
					title: "Governor",
					county: "",
					city: "Cheyenne",
					state: "Wyoming",
					email: "",
					contactPage: "https://governor.wyo.gov/contact"
				}
			];
		}
	};
</script>

<style lang="scss">
</style>