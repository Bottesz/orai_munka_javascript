import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaElem=document.getElementsByClassName("galeria")[0]
console.log(galeriaElem)
/* írd bele az összeálíltott html képsorozatot */
galeriaElem.innerHTML=htmlOsszeAllit(KEPEK)

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepIMGELEM=document.querySelector(".nagykep img")
/* A .nagykep div megfogása */
const nagykepDIVELEM=document.querySelector(".nagykep")


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kisKEPELEMEK=document.querySelectorAll(".kep")
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < kisKEPELEMEK.length; index++) {
    kisKEPELEMEK[0].addEventListener("click",function (event){
        console.log(event.target.src)
        nagykepIMGELEM.src = event.target.src
    }
    )
    
}



/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */



/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
let aktindex = 0;
/* 1. fogd meg a jobb gombot */
const jobbGOMBElem = document.querySelector(".jobb")
/* 2. tegyél rá egy eseménykezelőt */
jobbGOMBElem = addEventListener("click", jobbra)
/* 3. az eseménykezelőben az aktindex változó értékét növeld*/ 
/* 4. aktindex változónak a megfelelő kép elérési útját cseréld le a nagykepőelem img src-jében*/ 
function jobbra(){
    aktindex++;
    if (aktindex >= aktindex % KEPEK.length);
    console.log(aktindex)
    console.log(KEPEK[aktindex].kep)
    nagykepIMGELEM.src= KEPEK[aktindex].kep
}