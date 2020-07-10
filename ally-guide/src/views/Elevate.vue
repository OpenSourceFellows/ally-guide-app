<template>
	<div style="padding-top: 260px">
		<div >
			 <h4 class="elevatetext"> Changes start by doing. </h4>
		 </div>
		<div class="searchbanner" >

			<div>
				<h4>
					<br />Search and contact Congress and local representatives to echo demands.
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
						<h2>What message would you like to send?</h2>
						<br />
					</div>
					<div class="m-2 d-inline" v-for="message in messages" :key="message.mid">
						<button v-on:click="showTextArea = !showTextArea" class="output-btn btn-primary btn m-2">{{message.subject}}</button>
					</div>
					<div v-if="showTextArea">
						<textarea class="form-control p-3" rows="15%" cols="90%">
							<p> Dear Representative,</p>
						  {{message.email}}
						 <p> Sincerely, </p>
							<p> (you) <p>
						</textarea>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h4> Say their names </h4>
			<p> Demand investigation and accountability of these hate crimes and justice for them and their families</p>
		</div>
		<div class="defundbanner">
		<a href="https://defund12.org/" style="a:hover{text-decoration:none; color: white;}" > Defund12: Reach out to your county to defund police </a>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				messages: [
				{
						id: 1,
						subject: 'End Police Immunity',
						email: 'I am writing to demand justice for George Floyd, Breonna Taylor, Trayvon Martin, and every other American whose life ended too soon at the hands of the police force. This week, U.S. Congressman Justin Amash, an independent from Michigan, is introducing the "Ending Qualified Immunity Act." This Act will eliminate qualified immunity and restore Americans ability to obtain relief when police officers violate their constitutionally secured rights. As Amash has stated, the "Civil Rights Act of 1871 gave individuals the right to sue local and state officials, including police officers, that violate their rights. But in 1967, the Supreme Court began gutting this law by creating the qualified immunity doctrine. The ACLU says qualified immunity is one of the many barriers standing in the way of justice and accountability when the police use excessive force disproportionately against people of color. Government actors should not be held to less of a standard than the general public, they should be held to an even higher standard because of the power they hold. George Floyds murder is part of a much greater pattern of egregious police misconduct, and until police officers are no longer "legally, politically, and culturally insulated from consequences for violating the rights of the people they are sworn to protect, there can be no end to this pattern. Qualified Immunity is the first step to solving this problem, please sign the Ending Qualified Immunity Act.'
				},
				{
					id: 2,
					subject: 'Say their names: Defund Police',
					email: 'Historically, procedural police reforms prove ineffective. The time to reverse decades of expansion of the scope, the intensity of, and the militarization of policing is now. Nearly sixty percent of victims did not have a gun or were involved in activities that should not require police intervention such as harmless quality of life behaviors or mental health crises. Our ask is for acknowledgment and an end be put to the devaluation and dehumanization of black lives at the hand of police. This acknowledgment looks like the arrest and firing of officers who enforce law unethically, defunding of police, and reorientation of tax dollars to prison abolition efforts. We ask instead, that social workers, health workers, and education have more funding to deescalate situations they are better trained for than police while ensuring children have the resources to avoid school to prison pipeline. We need social workers and higher volumes of them which can only be ensured by decreasing policing funds and prioritizing health, education, and community groups. At minimum, police officers should have bans on both intentional profiling and practices that have a disparate impact on protected groups, ban stops for "furtive" movements such as a reaching for waistband or acting nervous, ban stops for matching a generalized description of a suspect (i.e. black male ages 15-25), require officers to establish objective justification for making a stop and to report every stop including location, race, gender, whether force was used and whether a firearm was found, end the use of predictive policing technology, which uses systematically biased data to enhance police profiling of black people and communities. prohibit police departments from using resources to investigate, interrogate, detain, detect, report, or arrest persons for immigration enforcement purposes.'
				},
				{
					id: 3,
					subject: 'For Vanessa Guillen: Investigate the Army',
					email:'I am writing to ask that you use your platform to investigate and restore checks and balances of the Army and other Department of Defense operations. Please implore US Senator Ted Cruz to open a congressional investigation into Vanessa Guillens disappearance off of the army base in Fort Hood and that her family has support during these trying times. U.S. Army investigators confirmed partial human remains Tuesday in Leon River, Texas, near where Guillen went missing in April. They did not confirm the body was Guillens or offer a formal timetable for their identification process. Just hours later, a suspect in Guillen""s case killed himself as law enforcement was closing in. The Killeen Police Department said the suspect was another soldier stationed at Fort Hood who had left his post overnight. Natalie Khawam, the main attorney within this case has stated multiple times, The base command did not provide us with the information they promised us. They were not transparent, or forthcoming. We got nothing. It has been stated over and over, Guillens sexual harassment preceding this has been largely neglected up until her murder and raises concerns around her commander""s conduct. Congress needs to do its job. The Department of Defense needs to do its job, to truly provide justice to the men and women who voluntarily serve our country and put their lives on the line. Our ask here is an official congressional investigation in parallel with outside investigators into HR practices within the Army along with financial support for Guillen""s family.'
				},
				{
					id: 4,
					subject: 'Protect Protestors - End Money Bail',
					email:''
				},
				{
					id: 5,
					subject: 'Restore Six Grandfathers - Mt Rushmore',
					email: 'I am writing to ask that you use your platform to bring reform to the policies that inherently advance the erasure of American Indian landmarks and treaties signed to return their land.“This place is very, very sacred to our people,” says Nick Tilsen, president and CEO of the NDN Collective. ""Stealing our land and then carving the faces of four white men who were colonizers, who committed genocide against Indigenous people, is an egregious act of violence. Historically this has been the site of The Six Grandfathers and a sacred place for the Lakota-Sioux people. President Trumps Freedom get together exacerbated the region as thousands descended without proper masks or social distancing protocol."" All of this comes as Indian Country has been particularly hard hit by the coronavirus pandemic. After years of legal challenges, the Supreme Court in 1980 upheld the Indian Claims Commission""s ruling that the taking of the Black Hills was illegal under the Fifth Amendment, based on the fact that 75% of the tribe’s men had not consented to the agreement. We want to echo that we need you to be accountable for reparations beginning with restoring Mount Rushmore to The Six Grandfathers, and providing medical supplies to the tribal governments of Lakota, Rosebud Sioux, Cheyenne River Sioux, and Oglala Sioux tribes'
				}],
				congressMembers: [],
				reps: [],
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
					.get("https://murmuring-headland-63935.herokuapp.com/api/elevate/" + this.search)
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
			}
		},
		computed: {
		//	filteredCongressMembers: function() {
		//		return this.congressMembers.filter(member => {
		//			return member.state.toLowerCase().match(this.search.toLowerCase());
	 //			});
	 //		}
		},
		created() {


		}
	};
</script>

<style>
.output-btn{
  border: 4px solid #821f0f;
  background-color:white;
  color: #821f0f;
  padding: 10px;
  margin: 10px;
  border-radius: 16px;
}
.output-btn:hover{
  background: linear-gradient(to bottom right, #000000 0%, #821f0f 100%);  color: white;
 transition-duration: 0.4s;
 cursor: pointer;
}

.output-btn: active{
  background: #821f0f;
  color: white;
}



textarea{
  border: 5px solid black;
  margin: 100px;
  padding: 25px;
  background-color: white;
  text-align: left;
}
</style>
