

var project = document.getElementsByClassName("project")

console.log(project)
var i;
for (i = 0; i < project.length; i++) {
  project[i].onclick = EventHandler;
}
   

function EventHandler(evt) {
  var projectId = evt.target.id
  console.log(projectId)
    var imageSrc = {
        trivia: "img/africa-trivia.jpg",
        brick: "img/brix-game.jpg",
        flight: "img/kimbo-flight.jpg",
        ecommerce: "img/ecommerce-new.jpg",
        youtube: "img/youtube-clone.jpg",
        tiktok: "img/tiktok-clone.jpg",
      netflix: "img/netflix-clone.jpg",
      PokeGame: "img/poke-game.jpg",
      LightsOut: "img/lights-out.jpg",
      Todo: "img/todo-list.jpg",
      HangMan: "img/hang-man.jpg",
      yatzee: "img/yatzee-app.jpg",
      socialfashion:"img/fashion-social3.jpg"
    }
    var popupImg = document.getElementById("popupImg")
   
    var word = imageSrc[projectId]
  popupImg.src = word      
}



//NAV MENU OPEN AND CLOSE

var navStragiht = true;
var navMenuId = document.getElementById("navigation_menus")
navMenuId.onclick = navMenuCross;

function navMenuCross() {
  
var navMenuIdCross = document.getElementById("navigation_menus");
var strikeCrossOne = document.getElementById("strike_cross_one");
  var strikeCrossThree = document.getElementById("strike_Cross_three");
  var strikeCrossTwo = document.getElementById("strike_cross_two")
  var navBackGround = document.getElementById("navigation_background")
  var navLinksDiv = document.getElementById("navigation_nav")

  if (navStragiht) {
  navMenuIdCross.classList.remove("strike_straight");
  strikeCrossOne.classList.add("strike_cross_one");
  strikeCrossThree.classList.add("strike_cross_three");
    strikeCrossTwo.style.display = "none";
    navBackGround.classList.add("navigation_background")
    navLinksDiv.classList.add("navigation_nav")
  navStragiht = false;
 
  } else {
    navMenuIdCross.classList.add("strike_straight");
    strikeCrossOne.classList.remove("strike_cross_one");
    strikeCrossThree.classList.remove("strike_cross_three");
    strikeCrossTwo.style.display = "inline-block";
    navBackGround.classList.remove("navigation_background")
    navLinksDiv.classList.remove("navigation_nav")
    
    navStragiht = true;
  }
  
}

var navigation = document.getElementsByClassName("navigation_link")

var i;
for (i = 0; i < navigation.length; i++) {
  navigation[i].onclick = navDisappear;
}

function navDisappear() {
  var navMenuIdCross = document.getElementById("navigation_menus");
var strikeCrossOne = document.getElementById("strike_cross_one");
  var strikeCrossThree = document.getElementById("strike_Cross_three");
  var strikeCrossTwo = document.getElementById("strike_cross_two")
  var navBackGround = document.getElementById("navigation_background")
  var navLinksDiv = document.getElementById("navigation_nav")

  navMenuIdCross.classList.add("strike_straight");
  strikeCrossOne.classList.remove("strike_cross_one");
  strikeCrossThree.classList.remove("strike_cross_three");
  strikeCrossTwo.style.display = "inline-block";
  navBackGround.classList.remove("navigation_background")
  navLinksDiv.classList.remove("navigation_nav")
  navStragiht = true;

}