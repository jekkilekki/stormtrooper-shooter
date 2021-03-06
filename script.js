var model = {

};

var view = {
  startTimer: function() {
    var timer = duration, minutes, seconds;
    setInterval( function () {
        minutes = parseInt( timer / 60, 10 );
        seconds = parseInt( timer % 60, 10 );

        minutes = minutes < 10 ? minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          reset();  
          timer = duration;
        } 
    }, 1000);
  },

  changeSides: function(e) {
    if( document.getElementById( "empire" ).className != "hidden" ) {
      this.loadRebels();
    } else {
      this.loadTroopers();
    }
  },

  changeLocation: function(e) {
    if( e.target.id == "reset" ) {
      reset();
    } else {
      document.getElementById( "title" ).innerHTML =  e.target.parentElement.id.charAt(0).toUpperCase() + e.target.parentElement.id.slice(1);
      document.getElementsByTagName( "BODY" )[0].style.background = "url(" + e.target.nextElementSibling.src + ") bottom center no-repeat";
    }
  }, 

  loadRebels: function() {
    document.getElementById( "empire" ).className = "hidden";
    document.getElementById( "rebels" ).className = "";
    document.getElementById( "identity" ).innerHTML = "Rebel";
    document.getElementById( "gameid" ).src = "img/rebels.png";
    
    document.getElementById( "actor1name" ).innerHTML = "3PO/R2:";
    document.getElementById( "actor2name" ).innerHTML = "Han/Chewie:";
    document.getElementById( "actor3name" ).innerHTML = "Skywalker:";
    document.getElementById( "actor4name" ).innerHTML = "Finn:";
    document.getElementById( "actor5name" ).innerHTML = "Rey:";
  },

  loadTroopers: function() {
    document.getElementById( "empire" ).className = "";
    document.getElementById( "rebels" ).className = "hidden";
    document.getElementById( "identity" ).innerHTML = "Stormtrooper";
    document.getElementById( "gameid" ).src = "img/empire.png";
    
    document.getElementById( "actor1name" ).innerHTML = "Standing:";
    document.getElementById( "actor2name" ).innerHTML = "Double:";
    document.getElementById( "actor3name" ).innerHTML = "Pointing:";
    document.getElementById( "actor4name" ).innerHTML = "Shooting:";
    document.getElementById( "actor5name" ).innerHTML = "Running:";
  },
};

var controller = {
  setup: function() {
    var fiveMinutes = 60 * 2,
        display = document.querySelector('#clock');
    startTimer( fiveMinutes, display );

    var $wrapper = document.getElementById( "wrapper" );
    var $overlay = document.getElementById( "overlay" );
    $enemies.style.width = $width - 260 + "px";
    $enemies.style.top = $height - 360 + "px";

    $overlay.style.height = $height + "px";
    $wrapper.style.height = $height + "px";
    ( function() {
      if( $height < 600 ) {
        $location.style.display = "none";
      }
    });
  },

  shootTrooper: function(e) {
    var $kills = document.getElementById( "kills" );
    var $score = document.getElementById( "score" );
    var $points = document.getElementById( "points" );
    var $shots = document.getElementById( "shots" );
    var $stats = document.getElementById( "accuracy" );
    var $num = 0; 
    
    $fired++;
    
    switch(e.target.id) {
      case 'actor1':
        $num = 1; $killnum++;
        break;
      case 'actor2':
        $num = 2; $killnum++;
        break;
      case 'actor3':
        $num = 3; $killnum++;
        break;
      case 'actor4':
        $num = 4; $killnum++;
        break;
      case 'actor5':
        $num = 5; $killnum++;
        break;
      default:
        $num = 0;
    }
    
    $kills.innerHTML = $killnum;
    $score.innerHTML = $totalpts += $num;
    $points.innerHTML  = "+" + $num;
    $shots.innerHTML = $fired;
    $stats.innerHTML = Math.round($killnum/$fired * 100) + "%";
    
    if ( e.target.id == "playing-area" ) { 
      // Do nothing
    } else {
      e.target.style.display = "none";
      this.respawn( e.target, $num );
    }
  },

  respawn: function( actor, time ) {
    setTimeout( function() {
      actor.style.top = Math.random()*90 + "%";
      actor.style.left = Math.random()*90 + "%";
      actor.style.display = "block";
    }, time*1000 );
  },

  reset: function() {
    document.getElementById( "overlay" ).className = "";
    document.getElementById( "wrapper" ).className = "hidden";
    document.getElementById( "title" ).innerHTML = "";
    document.getElementsByTagName( "BODY" )[0].style.background = "url(img/coruscant.jpg) bottom center no-repeat";

    this.setup();
  }
};





var $height = window.innerHeight;
var $width = window.innerWidth;
var $location = document.getElementById( "location" );
var $enemies = document.getElementById( "playing-area" );
var $button = document.getElementById( "button" );
var $teams = document.getElementById( "teams" );

/* Document Setup */
function setup() {
  
}

/* Setup Event Listeners */
$location.addEventListener( "click", view.changeLocation, false ); 
$enemies.addEventListener( "click", controller.shootTrooper, false );
$button.addEventListener( "click", view.changeSides, false );
$teams.addEventListener( "click", function(e) {
  document.getElementById( "overlay" ).className = "hidden";
  document.getElementById( "wrapper" ).className = "";
  if ( e.target.parentElement.id == "empire-logo" ) {
    view.loadRebels();
  } else {
    view.loadTroopers();
  }
});

/* Functions */
function changeSides(e) {
  
}

function changeLocation(e) {
  
}

function loadRebels() {
  
}

function loadTroopers() {
  
} 

var $killnum = 0;
var $totalpts = 0;
var $fired = 0;
var $accuracy = 0;

function shootTrooper( e ) {

}

function respawn( actor, time ) {
  
}

function startTimer( duration, display ) {
    
}

window.onload = controller.setup();
/* want to resize everything on screen or window resize... */

function reset() {
  
}