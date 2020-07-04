<template>
  <div class="Home">
<div class="border-bottom border-white">
  <div class="container text-center py-5 mb-4">
    <h1 class ="h1 center text-black"> Ally.Guide </h1>
  </div>
<div>
<h2 class="h4 text-gray-dark font-weight-light">Our allyship can be our responsibility. </h2>
<p> Use this platform to educate yourself, contribute to community funds, elevate issues politically, and contribute to social justice efforts. </p>
</div>
</div>
<div style = "background-color:#892819" class = "border-bottom border-white">
<div class="container text-center">
<div id="vue">
  <h1>Cards Hover, Load More, & Filter With Transitions</h1>
  <input class="search" placeholder="Search a title, description, or category" v-model="liveSearchString" />
  <div class="loading" v-show="loading"></div>
    <div class="images-wrapper" v-show="!loading">
      <transition-group name="image-wrapper" tag="div" class="images-inner">
        <div class="image-wrapper" v-for="(image, i) in truncatedFilteredImages" :key="image.id + i">
          <div class="image-img" :style="{ background: 'url(' + image.url + ')' }"></div>
          <div class="image-details">
            <h3 class="image-title">{{ image.name }}</h3>
            <p class="image-description"><span></span>{{ image.description | truncateText }}<span></span></p>
            <p class="image-category">{{ image.category }}</p>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="load-wrapper" v-show="!loading && liveSearchString == ''">
      <div class="button-wrapper" v-if="!allLoaded">
        <button @click="showMore()">Load More</button>
      </div>
      <p v-else>ALL LOADED</p>
    </div>
    <div id="imageLoaderDock" style="display: none"></div>
  </div>
  <div class="box box1" ><a href = "/educate">Educate </a></div>
  <div class="box box2"> <a href = "/contribute"> Contribute </a> </div>
  <div class="box box3"> <a href = "/elevate">Elevate  </a></div>
  <div class = "box box4"> <a href = "/collaborate">Collaborate </a></div>
</div>
  <div class = "banner bg-black">Stuff shown on hover</div>
 </div>
</div>

</template>
<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,400,700);

$max-width: 1280px;
$desktop: 1025px;
$tablet: 768px;
$mobile: 551px;
$font-family: "Roboto";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-family;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(359deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  margin: 24px 16px 0;
  text-align: center;
}

input.search {
  display: block;
  appearance: none;
  margin: 8px auto 16px;
  padding: 8px;
  padding-left: 2px;
  vertical-align: middle;
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  border-radius: 2px;
  color: black;
  background: transparent;
  font-size: 16px;
  width: 90%;
  width: calc(100% - 16px);
  max-width: 300px;
  outline: 0;
}

.loading {
  width: 36px;
  height: 36px;
  margin: 30px auto;
  transform: rotate(0deg);
  animation: spin .6s infinite linear;
  border: 4px solid white;
  border-top: 4px solid black;
  border-radius: 50%;
  stroke: white;

  @media(max-width: $mobile) {
    width: 24px;
    height: 24px;
    border: 2px solid white;
    border-top: 2px solid black;
  }
}

.images-wrapper {
  margin: 0 auto;
  max-width: $max-width;

  .images-inner {
    display: flex;
    flex-wrap: wrap;
    margin: 0;

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

      //animations
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
      //animations

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
        }

        .image-category {
          font-weight: bold;
          margin-top: 2px;
          color: #b0b0b0;
        }
      }

      @media(min-width: $tablet) {
        margin-bottom: 16px;
        width: calc(50% - 32px);
      }

      @media(min-width: $desktop) {
        width: calc(33% - 32px);

        &:hover {
          .image-img {
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
        }
      }
    }
  }
}

.load-wrapper {
  position: relative;
  margin: 16px auto;
  text-align: center;
  max-width: $max-width;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    height: 1px;
    width: 100%;
    background: #d2d2d2;
    z-index: -1;
    margin: 0 16px;
  }

  .button-wrapper {
    display: inline-block;
    background: white;
    padding: 0 32px;

    button {
      padding: 10px 32px;
      font-size: 14px;
      font-weight: bold;
      border: 1px solid #d2d2d2;
      border-radius: 0;
      color: #d2d2d2;
      appearance: none;
      background: transparent;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        border-color: #b0b0b0;
        color: #b0b0b0;
      }

      &:active {
        color: white;
        background: black;
      }
    }
  }

  p {
    background: white;
    font-style: italic;
    display: inline-block;
    padding: 0 32px;
    color: #b0b0b0;
  }
}
</style>

<script>


export default {
  name: "Home",
  components: {
    el: "#vue",

    created() {
      this.doubleUp()
    },

    data() {
      return {
        loading: true,
        imagesLimit: 15,
        allLoaded: false,
        liveSearchString: '',
        images: [
          {
            id: 1,
            url: 'http://via.placeholder.com/500x500',
            bigUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/apple.jpg',
            name: 'Apple',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            category: 'Fruit'
          },
          {
            id: 2,
            url: 'http://via.placeholder.com/500x500',
            bigUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/orange.jpg',
            name: 'Orange',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            category: 'Fruit'
          },
          {
            id: 3,
            url: 'http://via.placeholder.com/500x500',
            bigUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/peach.jpg',
            name: 'Peach',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            category: 'Fruit'
          },
          {
            id: 4,
            url: 'http://via.placeholder.com/500x500',
            bigUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/chain.jpg',
            name: 'Chain',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            category: 'Object'
          }
        ]
      }
    },

    computed: {
      truncatedFilteredImages() {
        if(this.liveSearchString.trim().length > 0) {
          return this.images.filter((image) => {
            let parts = this.liveSearchString.trim().split(" ");

            for(let part of parts) {
              let searchRegex = new RegExp(part, 'i');

              if(!(
                searchRegex.test(image.name) ||
                searchRegex.test(image.description) ||
                searchRegex.test(image.category)
              )) {
                return false;
              }
            }

            return true;
          })
        } else {
          return this.images.slice(0,this.imagesLimit)
        }
      }
    },

    filters: {
      truncateText: (text) => {
        if(text.length > 60) {
          text = text.substring(0, 125) + "...";
        }

        return text;
      }
    },

    methods: {
      doubleUp() {
        //fake a bunch of data
        let localImages = JSON.parse(JSON.stringify(this.images))

        localImages.forEach((image) => {
          let newImage = image
          newImage.id  = image.id * 2
          this.images.push(newImage)
        });

        setTimeout(() => {
          this.loading = false
          //then run replacePleaceholders
          this.replacePlaceholders()
        }, 200);


      },

      replacePlaceholders() {
        this.images.forEach((image, i) => {
          let newImg = document.createElement("img")
          newImg.src = image.bigUrl
          newImg.id = "preload-" + i
          document.getElementById("imageLoaderDock").appendChild(newImg)

          document.getElementById("preload-" + i).onload = () => {
            this.images[i].url = image.bigUrl
          }
        });
      },

      showMore() {
        this.imagesLimit += 6

        if(this.imagesLimit >= this.images.length) {
          this.imagesLimit = this.images.length
          this.allLoaded = true
        }
      }
    }
  }
}
</script>
