document.addEventListener("DOMContentLoaded", function(event) { 

    
    // COLORIZOR - RANDOM COLOR PICKER

    const divs = document.querySelectorAll('.colorizeMe');
    const colors = ['rain', 'pollen', 'seed', 'prairie', 'forest'];
    
    function getRandomColor() {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
    
    divs.forEach(div => {
      div.classList.add(getRandomColor());
    });

    window.addEventListener('scroll', () => {
        addOrRemoveSticky();

    });
    
    // NAV ITEM ALIGN WITH LOGO add & remove padding from top on resize

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
    
    //REFRESH OFFSET ON WINDOW RESIZE - BUSTED
    // function newNavOffsetHeight() {
    //     const stickyItem = document.getElementById('stickyNavBar'); 
    //     const stickyPosition = stickyItem.offsetTop; 
    //     return stickyPosition; 
    //   }
    //   window.addEventListener("resize", newNavOffsetHeight); 
    //   let stickyPosition = newNavOffsetHeight();

    function addOrRemoveSticky() {
        if (window.scrollY >= stickyPosition) {
            stickyItem.classList.add('sticky');
        } else {
            stickyItem.classList.remove('sticky');
        }    
    }

 });
    
    
    