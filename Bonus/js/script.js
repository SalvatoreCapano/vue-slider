const { createApp } = Vue

createApp({
  data() {
    return {
        images: [
            {
                image: '../img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morales',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: '../img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: '../img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                image: '../img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: '../img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ],
        currentIndex: 0
    }
  },
  methods: {
        setNextIndex () {
            if (this.currentIndex < this.images.length - 1) {
                this.currentIndex++;
            }
            else if (this.currentIndex == this.images.length - 1) {
                this.currentIndex = 0;
            }
        },
        setPrevIndex () {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
            else if (this.currentIndex == 0) {
                this.currentIndex = this.images.length - 1;
            }
        },
        changeSlide (nextImg) {
            /* nextImg puo' essere:
                -prev  -> se si clicca la freccia sx
                -next  -> se si clicca la freccia dx
                -indice dell'immagine a cui passare  -> se si clicca su una thumbnail
            */

            if (nextImg == "prev") {
                this.setPrevIndex();
            }
            else if (nextImg == "next") {
                this.setNextIndex();
            }
            else {
                this.currentIndex = parseInt(nextImg);
            }
            console.log("Sei passato all'indice", this.currentIndex + 1);
        },
        setThumbnailsNumbers() {
            const root = document.querySelector(":root");
            root.style.setProperty("--thumbnailsNumber", `${this.images.length}`);
        },

  },
  beforeMount() {
        this.setThumbnailsNumbers ();
  }

}).mount('#app')