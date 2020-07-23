<template>
<div>
<div style="padding-top:100px; padding-bottom:10px; background-color:#966058;">
  <a href = "https://airtable.com/shrYjsZT8NitBzXN5" style="color:#ffffff; border:2px solid #ffffff;"> <h4>Add a learning resource </h4></a>
</div>
<div style="padding-left:100px; padding-right:100px;">
<div>
      <h4>
        <br /> Show up as a student, in every medium
      </h4>
</div>
<div class="org-search">
    <input class="org-bar" type="text" v-model="search" placeholder="Search by name or topic" v-on:keyup="CheckInputContent" style="width:30%">
</div>
<div id="government-contact-info" v-show="hasContent" >
			<div>
				<b-card
					class="mb-2 cards library"
					v-for="result in searchResults"
					:key="result.name"
					style="max-width: 24rem; display:inline-block; border-radius:8px; margin:10px; border:4px solid #966058"
					:title="result.name"
					:sub-title="result.Type"
					:img-src="result.imageUrls"
					img-alt="Image"
					img-top
					tag="article"
				>
        <b-card-text>
						<!-- <p>Position: {{result.Name}}</p> -->
						<p>						</p>
						<p>
							{{result.time}}
						</p>
					</b-card-text>
					<b-button style="background-color:#c49d79; border:2px solid #c49d79"type="button" variant="primary" v-on:click="RedirectToLink(result)">View</b-button>
				</b-card>
      </div>
  </div>
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
					img-height="550"
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
    <div style="padding:20px;">
    </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return{
      hasContent: false,
      search:'',
      searchCompleted: true,
      searchResults: [],
      error: '',
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
    RedirectToLink: function (result){
      window.open(result.contentLink);
    },
  },
  computed: {
    filteredCauses: function(){
        return this.searchResults.filter((cause) => {
          return cause.Name.toLowerCase().match(this.search.toLowerCase());
        });
    },
  },
  created() {
    this.$http.get(
        'https://murmuring-headland-63935.herokuapp.com/api/library'
    ).then(response => {
      this.searchResults = response.body;
      console.log(this.searchResults);
    }, response => {
        // error callback
    });
  }
}
</script>

<style>
*, *:before, *:after{
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing:border-box;
  box-sizing: border-box;
}

body{
  background: #f9f9f9;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
}

.main-title{
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}

.container{
  padding: 1em 0;
  float: left;
  width: 50%;
}
@media screen and (max-width: 640px){
  .container{
    display: block;
    width: 100%;
  }
}

@media screen and (min-width: 900px){
  .container{
    width: 33.33333%;
  }
}

.container .title{
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}

.content-image{
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom{
  top: 80%;
}

.library img{
  padding-top:10px;
  width: 250px;

}

.carousel-outer + img{
  object-fit:contain;
}

</style>
