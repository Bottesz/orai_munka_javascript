export function htmlOsszeAllit(lista) {
      /*állítsd össze a html elemet*/
        let txt = "";
        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];
            console.log(element) //objektum
            txt += `<div class="kep"><img src="${element.kep}" alt="${element.cim}"></div>`;
            
        }
        console.log(txt);
        return txt
    }
