<template>
    <div>
        <div>
            <div><h4>Changes start by doing. amplify by contacting congress, signing petitions, or contacting your local reps from the dropdown</h4></div>
        </div>
    
        <div id="searchUI" >
                
            <div>
                <input type="text" v-model="search" placeholder="Enter a State" v-on:keyup="CheckInputContent" style="width:30%">
                <select for="typeOfGovernment">
                    <option name="branchOfGovernment" v-for="level in branchOfGovernment" :key="level.branch" :value="level.branch">{{level.branch}}</option>
                </select>       
            </div>

            <div id="governmentContactInfo" v-show="hasContent">         
                <div v-for="member in filteredCongressMembers" :key="member.name" style="width: 30%; display: inline-block;">             
                    <div> 
                        <p>Name: {{member.name}}</p>
                        <p>Position: {{member.title}}</p>
                        <p>City: {{member.city}}</p>
                        <p>State: {{member.state}}</p>
                        <p>Email Address: {{member.email}}</p>
                        <p>Contact Page: {{member.contactPage}}</p>
                        <div>
                        <button type="button" v-on:click="ToggleMessageUI(member)">Send A Message</button>
                        </div>
                    </div>                             
                </div>
            </div>

            <div id="messageUI" v-show="showmessageUI" >
                <div id="selectedMember">
                    <div>
                    <h4 style="display: inline-block;">{{selectedMember.title}}</h4>
                    <h4 style="display: inline-block;">{{selectedMember.name}}</h4>
                    <a style="display: inline-block;">Contact Form</a>
                    <a style="display: inline-block;">Email</a>
                    </div>
                </div>

                <div>
                    <div>
                    <h4>Messages:</h4>
                    </div>

                <div v-for="message in messages" :key="message.mid">
                    <div style="width: 30%;">
                        <div>
                        <h4>{{message.topic}}</h4>
                        </div>
                        <div>
                        <p>{{message.message}}</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>

        <div id="sayTheirNames">
            <h3>Say their names:</h3>  
            <div style="margin: 15px; border: 3px solid; display: inline-block; width: 30%; text-align: center;">
            <h5>Campaigns</h5>  
            </div>
            <div style="margin: 15px; border:3px solid; display: inline-block; width: 30%; text-align: center;">
            <h5>Memorials</h5>  
            </div>
        </div>

        <div id="keyIssues">
            <h3>Some Key Issues</h3>
            <div>
                <div style="margin: 15px; border: 3px solid; display: inline-block; width: 30%; text-align: center;">
                    <h5>Police Brutality</h5>  
                </div>
                <div style="margin: 15px; border:3px solid; display: inline-block; width: 30%; text-align: center;">
                    <h5>Bail Bonds</h5>  
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  data () {
    return{
        messages: [
            {topic: "End Money Bail + Police Reform", message: "<p>To whom it may concern:</p><p>I am writing to you from my home of {{city}}, {{state}} to ask that you use your platform to bring reform to the policies and practices that inherently progress racial imbalance in our country. </p><p>As we’ve seen time and time again, cash bail does not promote safety and unfairly penalizes low-income defendants while those who can afford bail go free. <br>We ask that you join us (along with Color of Change) in the fight to abolish money bail and help bring about long overdue equality within our justice system for black Americans.</p><p>I am also writing to demand justice for George Floyd, Breonna Taylor, Trayvon Martin, and every other Black American whose life ended too soon at the hands of the police force. While the officer who choked (murdered) George Floyd has been arrested and charged with murder, we need to ensure indefinitely that other officers who commit similar offenses out of racist agendas are not going to be protected by our biased criminal justice system anymore. </p><p>Please, in addition to helping bring about the end of money bail, join us in signing this petition to demand police reform in the United States and bring us one step closer to equality and justice for black people.</p><p>Best,</p><p>{{sender.first_name}}</p>" },
        ],
        congressMembers: [],
        branchOfGovernment: [],
        selectedMember: {},
        showmessageUI : false,
        showCongressInfo: true,
        hasContent: false,
        search:'',
        }
    },
    methods: {
        CheckInputContent: function () {
            if (this.search != '') {
            this.hasContent = true;
            }
            else {
                this.hasContent = false;
            }
        },
        ToggleMessageUI: function (member) {
        this.selectedMember = member;
        this.showmessageUI = true;
        }
    },
    created() {
        this.congressMembers = [
            {name: "Gavin Newsom", title:"Governor", county: "", city: "", state: "California", email:'', contactPage: "https://govapps.gov.ca.gov/gov40mail/"},
            {name: "London N. Breed", title:"Mayor", county: "", city: "San Francisco", state: 'California', email:'', contactPage: ""},
            {name: "Kay Ivey", title:"Governor", county: "", city: "Montgomery", state: 'Alabama', email:'', contactPage: 'https://contact.governor.alabama.gov/contact.aspx'},
            {name: "Mike Dunleavy", title:"Governor", county: "", city: "Juneau", state: 'Alaska', email:'', contactPage: 'https://gov.alaska.gov/contact/email-the-governor/'},  
            {name: "Doug Ducey", title:"Governor", county: "", city: "Phoenix", state: 'Arizona', email:'engage@az.gov', contactPage: 'https://azgovernor.gov/engage/form/contact-governor-ducey'},  
        ]
        this.branchOfGovernment = [
            {branch: "Local"},
            {branch: "State"},
            {branch: "National"},
        ]
    }
}
        
</script>

<style lang="scss">

</style>