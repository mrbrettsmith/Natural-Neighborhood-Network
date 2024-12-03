document.addEventListener("DOMContentLoaded", function(event) { 
    
const mAbout = document.getElementById('about');
const hAbout = document.getElementById('hiddenAbout');

const mRain = document.getElementById('rain');
const hRain = document.getElementById('hiddenRain');

const mPrairie = document.getElementById('prairie');
const hPrairie = document.getElementById('hiddenPrairie');

const mPollen = document.getElementById('pollen');
const hPollen = document.getElementById('hiddenPollen');

const mForest = document.getElementById('forest');
const hForest = document.getElementById('hiddenForest');

const mSeed = document.getElementById('seed');
const hSeed = document.getElementById('hiddenSeed');


function switchOnIntersect(hidden,moving) {
    const puzFixed = hidden.getBoundingClientRect(); 
    const puzzMove = moving.getBoundingClientRect(); 
    // let currentHref = hidden.getAttribute('href');

    const puzFixedTop = puzFixed.y;
    const puzMoveTop = puzzMove.y;

        if (puzMoveTop <= puzFixedTop) {
            hidden.style.opacity = 1; 
            hidden.style.pointerEvents = "";
        } else {
            hidden.style.opacity = 0;
            hidden.style.pointerEvents = "none";
        }

        if (puzMoveTop <= puzFixedTop) {
            moving.style.opacity = 0; 
        } else {
            moving.style.opacity = 1; 
        }
        
};


switchOnIntersect(hAbout,mAbout);
switchOnIntersect(hRain,mRain);
switchOnIntersect(hPrairie,mPrairie);
switchOnIntersect(hPollen,mPollen);
switchOnIntersect(hForest,mForest);
switchOnIntersect(hSeed,mSeed);

window.addEventListener('scroll', () => {
    addOrRemoveSticky();
    switchOnIntersect(hAbout,mAbout);
    switchOnIntersect(hRain,mRain);
    switchOnIntersect(hPrairie,mPrairie);
    switchOnIntersect(hPollen,mPollen);
    switchOnIntersect(hForest,mForest);
    switchOnIntersect(hSeed,mSeed);   
});

window.addEventListener('resize', () => {
    navElement = document.getElementById("stickyNavBar");
    puzzleElement = document.getElementById("about");

});

const element = document.getElementById('yourElement');



// SET PUZZLE SIZE TO VEIWPORT
let navElement = document.getElementById("stickyNavBar");
let nOffset = navElement.offsetTop;
let windowSize = window.innerHeight;
let viewportHeight = windowSize- nOffset;
let puzzHeightScaled = viewportHeight * .16;
let wrapMain = document.getElementById('wrapId');
let viewportWidth = wrapMain.offsetWidth;
let puzzWidthScaled = viewportWidth * .15; 
let fullStepWidth = puzzHeightScaled;
let halfStepWidth = puzzHeightScaled / 2;
let headImg = document.querySelectorAll('.title-img');
let impact = document.getElementById('impact-quote');

console.log(puzzHeightScaled, viewportWidth)
console.log(puzzHeightScaled, viewportWidth)
const puzzClass = document.querySelectorAll('.puzzle-piece'); 


// can call width and height, how to set min?
// adjusting elements, but peice isnt changing shape
// do I need to set heiwgh& width outside of this in a function, then pull results?

//old & kinda works, but doesnt scale. AM I UPDATING PUZZHEIGT SCALED ON RESIZE?
puzzClass.forEach((element) => {
    element.style.height = puzzHeightScaled + 'px';
    element.style.width = puzzHeightScaled + 'px';
  });

//new
// puzzClass.forEach((element) => {
//   element.style.height = puzzHeightScaled + 'px';
//   element.style.width = puzzWidthScaled + 'px';
// });


// try a resize function

// SAVEPOINT

function puzzleParamaters() {

}

// MATCH ARTICLE AND HIDDEN ARTICLE
//this isnt working very well

// let ghostArticle = document.getElementById('twoPuzzlePiece');
// let ghostArticleWidth = ghostArticle.offsetWidth;

// const gardenArticleClass = document.querySelectorAll('.article-container');

// gardenArticleClass.forEach((element) => {
//   element.style.width = ghostArticleWidth + 'px';
// });

// SET PUZZLE MARGIN FOR POSITIONING

const fullStepClass = document.querySelectorAll('.fullStep'); 

fullStepClass.forEach((contain) => {
    contain.style.marginRight = fullStepWidth + 'px';
});

const halfStepClass = document.querySelectorAll('.halfStep'); 

halfStepClass.forEach((contain) => {
    contain.style.marginRight = halfStepWidth + 'px';
    contain.style.marginLeft = halfStepWidth + 'px';
});


// SET SPACING ON NAV ITEM WIDTH


const navItems = document.getElementById('nav-items');

    function navItemsTrigger() {
        const navItemswidth = navItems.offsetWidth;
        const navParentWidth = navElement.offsetWidth;

        if (navItemswidth >= navParentWidth) {
            navItems.style.paddingTop = '0em'; // Adjust margin as needed
            impact.style.marginTop = '40%';
        } else {
            navItems.style.paddingTop = '2em'; // Reset margin if not wrapped
            impact.style.marginTop = '';
        }

        // console.log(navItemswidth,navParentWidth);

    }
    

    navItemsTrigger();
    window.addEventListener("resize", navItemsTrigger);

// function adjustMarginOnWrap() {
//     const divElement = document.getElementById("yourDivId");
//     const divWidth = divElement.offsetWidth;
//     const parentWidth = divElement.parentElement.offsetWidth;
  
//     if (divWidth >= parentWidth) {
//       divElement.style.marginLeft = "20px"; // Adjust margin as needed
//     } else {
//       divElement.style.marginLeft = "0"; // Reset margin if not wrapped
//     }
//   }

  
  // Call the function initially and on window resize

// HIDDEN PUZZLE NOT VISABLE



// // SET PUZZLE CONTAINER WIDTH
// let puzzColumnWidthAdjuster = puzzScaled * 2;
// const puzzContainerClass = document.querySelectorAll('.puzzle-container'); 

// puzzContainerClass.forEach((contain) => {
//     contain.style.width = puzzColumnWidthAdjuster + 'px';
// });

function navItemPad() {
    const navItems = document.getElementById('nav-items'); 
    const windowWidth = window.innerWidth;

    if (navItems.offsetWidth < windowWidth * 0.8) {
       navItems.style.paddingTop = "1em";
     } else {
       navItems.style.paddingTop = "0"; 
     }
}

window.addEventListener("resize", navItemPad);
navItemPad();

// MAKE NAV STICKY
let stickyItem = document.getElementById('stickyNavBar');
let stickyPosition = stickyItem.offsetTop;

function addOrRemoveSticky() {
    if (window.scrollY >= stickyPosition) {
        stickyItem.classList.add('sticky');
    } else {
        stickyItem.classList.remove('sticky');
    }    
}


});


