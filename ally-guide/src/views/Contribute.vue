<template>
<div>

<div class="org-search">
    <input class="org-bar" type="text" v-model="search" placeholder="Search by name or state" v-on:keyup="CheckInputContent" style="width:30%">
</div>

<div class="images-wrapper"id="government-contact-info" v-show="hasContent">
    <transition-group name="image-wrapper" tag="div" class="images-inner">
    <div v-for="result in searchResults" :key="result.Name">
          <div class="image-img" :style="{ background: 'url(' + result.LogoPicture + ')' }"></div>
            <a href="">
            <div class="image-details">
                  <h3 class="image-title">{{result.Name}}, {{result.State}}</p></h3>
                  <p class="image-description"><span></span>{{ result.Description| truncateText }}<span></span></p>
                  <p class="image-category">Cause: {{ result.Cause }}</p>
            </div>
          </a>
    </div>
    </transition-group>
</div>

<div v-show="error" style="color: red; font-weight: bolder;">
  {{ error }}
</div>

<div v-show="searchCompleted && searchResults.length == 0 && !error" style="font-weight: bolder;">
  <h1>Sorry, no results found.</h1>
</div>

<div class = "blm">
<a class="blm" href = "https://www.rebuildblackbusiness.com/"> Rebuild Black Owned Businesses </a>
</div>
</div>


</template>

<style>

.org-search{
 padding-top: 300px;
 padding-bottom: 100px;

}
.org-bar{
 display: block;
appearance: none;
margin: 8px auto 16px;
padding: 8px;
padding-left: 2px;
vertical-align: middle;
border: 1px solid transparent;
border-bottom: 1px solid #537260;
color: black;
background: transparent;
font-size: 16px;
width: 90%;
width: calc(100% - 16px);
max-width: 400px;
outline: 0;
border-width:4px;
}


a {
  text-decoration: none;
}

.images-wrapper {
  margin: 0 auto;
  max-width: $max-width;
}

.images-inner {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
}
.image-wrapper {
      position: relative;
      display: flex;
      width: calc(100% - 1em);
      height: 300px;
      margin: 16px 16px 8px;
      cursor: pointer;
      transition: all 0.25s;
      box-shadow: 0px 1px 5px rgba(0,0,0,0.25);
      overflow: hidden;

      &-move { transition: all 600ms ease-in-out 50ms }
      &-enter-active { transition: all 300ms ease-out }

      &-leave-active {
        transition: all 200ms ease-in;
        position: absolute;
        z-index: 0;
      }

      &-enter,
      &-leave-to { opacity: 0 }
      &-enter { transform: scale(0.9) }
}
  .image-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-size: cover !important;
        background-position: center !important;
        transition: transform 200ms ease-out, blur 200ms ease-out;
        animation: fadeIn 200ms;
  }

  .image-details {
        align-self: flex-end;
        background: white;
        width: 100%;
        padding: 16px;
}
        .image-title {
          transition: color 250ms;
        }

        .image-description {
          display: none;
          opacity: 0;
          max-height: 0px;
          overflow: hidden;
          transition: max-height 125ms;
          animation: slideUp 300ms;
          animation-delay: 50ms;
          animation-fill-mode: backwards;
          }
          //Margin hack
          span {
            display: block;

            &:nth-of-type(1) {
              height: 5px;
            }

            &:nth-of-type(2) {
              height: 25px;
            }
          }


        .image-category {
          font-weight: bold;
          margin-top: 2px;
          color: #b0b0b0;
        }




          .image-img:hover {
            transform: scale(1.3);
            filter: blur(5px);
          }

          .image-title {
            transition: color 250ms;
            color: #ea0000;
          }

          .image-description {
            display: block;
            opacity: 1;
            max-height: 500px;
            transition: max-height 250ms ease-in;
          }






div.panel {
    padding: 0 18px;
    background-color: white;
    display: none;
}

div.panel.show {
    display: block !important;
}

div.panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: 0.6s ease-in-out;
    opacity: 0;
}

div.panel.show {
    opacity: 1;
    max-height: 500px; /* Whatever you like, as long as its more than the height of the content (on all screen sizes) */
}

.blm{
  padding: 50px;
  width:100%;
  margin: 0px;
  color: white;
}
.blm{
cursor: pointer;
  background-color: #000000;
  opacity: .75;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

}

.blm:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  opacity: 100%;
  text-decoration:none;
  color: yellow;
}

</style>

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
    ToggleMessageUI: function (result) {

    },
  },
  computed: {
    filteredCauses: function(){
        return this.searchResults.filter((cause) => {
          return cause.name.toLowerCase().match(this.search.toLowerCase());
        });
    },
  },
  created() {
      this.$http.get(
          'https://murmuring-headland-63935.herokuapp.com/api/contribute'
      ).then(response => {
        this.searchResults = response.body;
        console.log(this.searchResults)
      }, response => {
          // error callback
      });
  }
}

</script>
