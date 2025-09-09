let title = document.querySelector("#title");
let price = document.querySelector("#price");
let texes = document.querySelector("#texes");
let ads = document.querySelector("#ads");
let discount = document.querySelector("#discount");
let totale = document.querySelector("#totale");
let count = document.querySelector("#count");
let category = document.querySelector("#category");
let submit = document.querySelector("#submit");
let mood = 'create'
let temp;





/* start getTotale */ 
function getTotale(){
if(price.value != ''){
       let result  = (+price.value  + +texes.value  + +ads.value) - +discount.value;
        totale.innerHTML =  result;
        totale.style.backgroundColor='green'
}else{
        totale.innerHTML = '';
        totale.style.backgroundColor=''
}
}
/* end getTotale */ 



/* check data*/ 
  let dataPro ;
   if (localStorage.prodect != null) {
      dataPro = JSON.parse(localStorage.prodect);

   } else {
    dataPro = [];
   }


/* start create*/ 
submit.onclick = function create() {

    let newPro = {
                   title:title.value.toLowerCase(),
                   price:price.value,
                   texes:texes.value,
                   ads:ads.value,
                   discount:discount.value,
                   totale:totale.innerHTML,
                   count:count.value,
                   category:category.value.toLowerCase(),
                 }

if (mood === 'create') {

      // length count  
                 if (newPro.count > 1) {
                       for (let i = 0; i < newPro.count; i++) {
                                 dataPro.push(newPro);
                       }
          
                 } else {
                               dataPro.push(newPro);
                                
                 }
}else{
    dataPro[temp] = newPro;
    submit.innerHTML='create';
    count.style.display='block'
    mood='create';
}

              


 localStorage.setItem('prodect' , JSON.stringify(dataPro));
clearInputs()
showData()
}
/* end create */ 



/*start clearInputs()*/ 
function clearInputs() {
    title.value ='';
    price.value ='';
    texes.value ='';
    ads.value ='';
    discount.value ='';
    totale.innerHTML ='';
    count.value ='';
    category.value ='';
    getTotale()
}
/*end clearInputs()*/ 




/*start showData*/ 
function showData() {

    table='';
            for (let i = 0; i < dataPro.length; i++) {
               table += 
                        `
                          <tr>
                            <td>${i+1}</td>
                            <td>${dataPro[i].title}</td>
                            <td>${dataPro[i].price}</td>
                            <td>${dataPro[i].texes}</td>
                            <td>${dataPro[i].ads}</td>
                            <td>${dataPro[i].discount}</td>
                            <td>${dataPro[i].totale}</td>
                            <td>${dataPro[i].category}</td>
                            <td><button onclick="update(${i})">update</button></td>
                            <td><button onclick="dalete(${i})">delete</button></td>
                          </tr>
                        `
                
            }

document.querySelector("tbody").innerHTML = table;

// start daleteAll
let daleteAll = document.querySelector(".daleteAll")
if (dataPro.length > 0) {
          daleteAll.innerHTML=`
                       <button onclick="daleteAll()"> daleteAll(${dataPro.length})</button>
               `
} else {
    daleteAll.innerHTML= '';
}
// end daleteAll
}
showData()
/*end showData*/ 


/*start dalete */ 
function dalete(i){
dataPro.splice(i,1);
localStorage.prodect = JSON.stringify(dataPro);
showData()
}
/*end dalete */ 





/*start dalete */
function daleteAll() {  
localStorage.clear()
 dataPro.splice(0)
 showData()
}
/*end dalete */ 


function update(i){
title.value = dataPro[i].title
price.value = dataPro[i].price
texes.value = dataPro[i].texes
ads.value = dataPro[i].ads
discount.value = dataPro[i].discount
getTotale();
count.style.display='none'
category.value = dataPro[i].category
mood='update'
temp = i;
submit.innerHTML='update'
}

let seachMood = 'title';

function getSearchMood(id){
let search = document.querySelector("#search");
if (id ===  'seachTitle') {
       seachMood = 'title';
       search.placeholder = 'Seach To Title'
       
} else {
    seachMood = 'category'
      search.placeholder = 'Seach To Category'
}
search.focus()
search.value='';
showData()
}


function seachData(value) {

    table='';

    if (seachMood == 'title') 
        {
                for (let i = 0; i < dataPro.length; i++) {
                  if (dataPro[i].title.includes(value.toLowerCase())) {
                      table += 
                        `
                          <tr>
                            <td>${i+1}</td>
                            <td>${dataPro[i].title}</td>
                            <td>${dataPro[i].price}</td>
                            <td>${dataPro[i].texes}</td>
                            <td>${dataPro[i].ads}</td>
                            <td>${dataPro[i].discount}</td>
                            <td>${dataPro[i].totale}</td>
                            <td>${dataPro[i].category}</td>
                            <td><button onclick="update(${i})">update</button></td>
                            <td><button onclick="dalete(${i})">delete</button></td>
                          </tr>
                        `
                  }
                
                }

        }else{
               for (let i = 0; i < dataPro.length; i++) {
                    if (dataPro[i].category.includes(value.toLowerCase())) {
                      table += 
                        `
                          <tr>
                            <td>${i+1}</td>
                            <td>${dataPro[i].title}</td>
                            <td>${dataPro[i].price}</td>
                            <td>${dataPro[i].texes}</td>
                            <td>${dataPro[i].ads}</td>
                            <td>${dataPro[i].discount}</td>
                            <td>${dataPro[i].totale}</td>
                            <td>${dataPro[i].category}</td>
                            <td><button onclick="update(${i})">update</button></td>
                            <td><button onclick="dalete(${i})">delete</button></td>
                          </tr>
                        `
                  }
            
                }
        }

    document.querySelector("tbody").innerHTML = table;

}
