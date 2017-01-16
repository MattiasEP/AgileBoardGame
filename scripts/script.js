$('.us').draggable();


var AgileBoardGame = {

    init: function() {
        this.cacheDom();
        this.bindEvents();
    },

    cacheDom: function() {
        console.log(this.dice());
    },

    bindEvents: function() {

    },

    dice: function(amount) {
        return Math.floor(Math.random() * 6) + 1;
    }

}

AgileBoardGame.init();
