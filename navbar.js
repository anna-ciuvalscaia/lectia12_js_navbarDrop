const items = [ // Array - String
    "BRAND",
    "Home",
    "Service",
    "Produse",
    "Catalog",
    "Galerie",
    "Preturi",
    "Magazine",
    "Contacte",
]
const TOTAL = 9
let dropOpen = false
const BTN_WIDTH = 45
let eWidth = 0

function adapt() {
    for(let n=9; n>=1; n--){
        estimateWidth(n)
        if (eWidth <= innerWidth){
            if(dropOpen == true){
                  showRemainingItems(n)   
            }
        showItems(n)
        break
    }
  }

}

function estimateWidth( n ){
    let text = ``
    let pad = 0
    for(let i=0; i<n; i++){
        text += items[i]
        pad += 2 * 10 // l+r padding
    }
    eWidth = 12 * text.length + pad + BTN_WIDTH // character width
   
    // console.log(eWidth,innerWidth)

}

function showItems( n ){ 
  //  console.log(">>>>", n )
    navbar.innerHTML = ``
    for(let i=0; i<n && /*HW:1*/ n<=items.length; i++){
      navbar.innerHTML += `<a href="">${items[i]}</a>`  
    }

    let remaining = TOTAL - n
    if (remaining > 0) {
     navbar.innerHTML += `<button id="btn_width" onclick="showRemainingItems(${remaining})">
     <span>${remaining}</span><img id="menu" src="Hamburger_icon.svg.png"></button>`   
    }
   // console.log("rem", remaining)
  }



  function showRemainingItems(n){ 
      // toggle = checkbox principale
   if(dropOpen){
       navbarDrop.innerHTML = `` // close - clear
       dropOpen = false
   }
   else {
          for(let i = TOTAL - n; i<TOTAL; i++){
               navbarDrop.innerHTML += `<a href="">${items[i]}</a>`   
        } 
       dropOpen = true
   }
 
 
  }

  