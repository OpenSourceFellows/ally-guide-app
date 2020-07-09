<template>
<div>
<div>
Say their names
</div>
<div class="highlights">
<div>
How to show up at a protest
</div>
<div>
Community healing resources
</div>
<div>
History
</div>
</div>
<iframe class="airtable-embed" src="https://airtable.com/embed/shrASU8BPyXKJq9TN?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
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
</style>
