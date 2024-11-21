// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

class ContainerClass{

    constructor(appz ,type){

        this.type = type;

        this.appz = appz;

        this.userPopUp = document.createElement('div');
        this.userPopUp.setAttribute('id', type+'userPopUp');
        this.userPopUp.style.width = '90%';
        this.userPopUp.style.height = '90%';
        this.userPopUp.style.border = '5px solid yellow';
        this.userPopUp.style.backgroundColor = 'blue';
        this.userPopUp.style.zIndex = '1000';
        this.userPopUp.style.left = '5%';
        this.userPopUp.style.top = '5%';
        this.userPopUp.style.borderRadius = '10px';
        this.userPopUp.style.position = 'absolute';
        this.userPopUp.style.opacity = '.9';
        // this.userPopUp.style.display = 'none';
        /////////////
        this.innerUserPopUp = document.createElement('div');
        this.innerUserPopUp.style.width = '100%';
        this.innerUserPopUp.style.height = '5%';
        this.innerUserPopUp.style.backgroundColor = 'black';
        this.innerUserPopUp.style.display = 'flex';
        this.innerUserPopUp.style.justifyContent = 'right';

        this.innerUserTitle = document.createElement('div');
        this.UserContentTitle = document.createElement('h1');
        this.UserContentTitle.setAttribute('id', type+'contentTitle');
        this.UserContentTitle.innerHTML = 'create new container';
        this.UserContentTitle.style.color = 'white';
        this.UserContentTitle.style.fontSize = '30px';
        ////////////
        this.innerUserTitle.style.position = 'relative';
        this.innerUserTitle.style.left = '10%';
this.innerUserTitle.style.justifyContent = 'center';
this.UserContentTitle.style.height = '10%';
this.innerUserTitle.appendChild( this.UserContentTitle);

this.contentAreaUserPopUp = document.createElement('div');

this.contentAreaUserPopUp.style.width = '90%';
this.contentAreaUserPopUp.style.height = '90%';
this.contentAreaUserPopUp.style.border = '4px solid white';
this.contentAreaUserPopUp.style.justifyContent = 'center';


this.InnercontentArea = document.createElement('div');
this.InnercontentArea.style.width = '100%';
this.InnercontentArea.style.height = '100%';
this.InnercontentArea.style.border = '4px solid white';
// InnercontentArea.style.display = 'flex';
this.InnercontentArea.style.backgroundColor = '#ac9b7e';
this.InnercontentArea.style.justifyContent = 'center';
this.InnercontentArea.style.left = '10%';
this.InnercontentArea.setAttribute('id', type+'innerContent');

this.contentAreaUserPopUp.style.left = '5%';
this.contentAreaUserPopUp.style.position = 'relative';


this.form = document.createElement('form');
this.form.style.margin = '5% 0 0 5%';

this.confirmForm = document.createElement('form');
this.confirmForm.style.margin = '5% 0 0 5%';

this.container = document.createElement('div');
this.containerCB = document.createElement('div');
////////////////////////////////
this.expandButton = document.createElement("button");

this.userExpandTable = '';
this.userTable = document.createElement("table");
this.tempContainere ='';
this.formdata   = document.getElementById('xContainerxcreateNewUserForm');
this.getSelectionData   = {};

///////////////////

    }


    paginationMethod(){

       let innerMainContentDB   = document.getElementById('createTableClasscreateOuterDivwUserForm');

        
console.log('thisis the pagination Method paginationMethod',innerMainContentDB);
        // Variables to keep track of the current page and rows per page
// let currentPage = 1;
// const rowsPerPage = 1; // Show 1 row per page

// // This function will display the data for the current page
// function displayPage(page) {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;
//     const paginatedData = databaseRows.slice(start, end);

//     // Display the data in the 'data-container'
//     const container = document.getElementById('data-container');
//     container.innerHTML = ''; // Clear previous content

//     paginatedData.forEach(item => {
//         container.innerHTML += `<p>${item.container_naam}</p>`; // Adjust with your data structure
//     });

//     // Update page number
//     document.getElementById('page-number').innerText = `Page ${page}`;
    
//     // Disable/enable buttons based on current page
//     document.getElementById('prev').disabled = page === 1;
//     document.getElementById('next').disabled = page === Math.ceil(databaseRows.length / rowsPerPage);
// }

// // Event listeners for the pagination buttons
// document.getElementById('prev').addEventListener('click', function() {
//     if (currentPage > 1) {
//         currentPage--;
//         displayPage(currentPage);
//     }
// });

// document.getElementById('next').addEventListener('click', function() {
//     if (currentPage < Math.ceil(databaseRows.length / rowsPerPage)) {
//         currentPage++;
//         displayPage(currentPage);
//     }
// });

// Initial display
// displayPage(currentPage);
    }

    updateOrNot(who,rowId,valuex,tableName){
        let wadisi = this;
console.log('updateOrNottt',who, rowId,valuex,tableName);


    this.tableName = tableName;
            
try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  
//     const data = {
//   variable1: JSON.stringify(datax),
//   variable2: 'formaat',
//   variable3: JSON.stringify(LWHnote),
//   variable4: JSON.stringify(AQuaINHWAtaskist),
//   };
let LWHnoter  = new function(){

    this.containerid = rowId;
    this.typex = who;
    this.valuex = valuex;
    this.where = tableName;
}
const dataoo = {
    containerid:LWHnoter,
    valuez: 'valuex',
    type: who,
    };
// console.log('dataoo',dataoo,'stringified',json.stringify(dataoo))
  fetch('/editcontainer', {
    method: 'POST',
    body: JSON.stringify(LWHnoter),
    headers: {
        // headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken,

        // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // Include CSRF token for security
    }
})
.then(response => response.json())
.then(data => {
    // Handle the response from the server
    if (data.success) {
        alert(data.message);
    } else {
        alert('Failed to submit form.');
    }
})
.catch(error => {
    console.error('Error:', error);
    alert('An error occurred while submitting the form.');
});

}catch{

}
      // const response = await fetch('{{ route("updatejson.save")}}',  {
    


    }

    getElementsSelection(){
        let wadisi = this;

        
class ELementInnerClass{

    constructor(appzi ,type){

        this.type = type;

        this.appz = appzi;

      
///////////////////

    }


    getELementInnerClass(){

        console.log('this is the getELementInnerClassAA',this );
        // CDLC.ParentcontainerClass.getSelectionData;
    }
}
let ELementInnerClassy = new ELementInnerClass( wadisi);
ELementInnerClassy.getELementInnerClass();
        console.log('called from the child function', wadisi,'ELementInnerClassy',ELementInnerClassy)

    }//     time_24hr: true       // Use 24-hour format, set to false for 12-hour with AM/PM

    // flatpickr("#datetimeInput", {
    //     enableTime: true,     // Enable time picker
    //     dateFormat: "Y-m-d H:i", // Date and time format
  ////////////////////
  
  laravelFunctions(route){

    fetch(route, {
        method: 'POST',
        body: route,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // Include CSRF token for security
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        if (data.success) {
            alert(data.message);
        } else {
            alert('Failed to submit form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
}

  // Define an inner class
  static createTableClass = class {
    constructor(Parentcontainer, Jdataz) {
        // this.innerName = Jdataz.componentName;
        this.innerName = 'createTableClass';
        
        // this.Jdataz = Jdataz;

        this.ParentcontainerClass = Parentcontainer;

        this.configurator = Jdataz;
        // this.funfuxi = this.ParentcontainerClass.getElementsSelection();

       this.layoutOuterDiv = document.createElement('div');

       this.layoutInnerDiv = document.createElement('div');

       this.singleTableDiv = document.createElement('div');

       this.expandableTableDiv = document.createElement('div');

       this.unOrderedList = document.createElement('ul');

       this.unOrderedListItem = document.createElement('li');

    //    this.expandableTableDiv = document.createElement('div');
    //    this.singleTableDiv.setAttribute('id', 'singleTableDiv '+adisi_CDLC.innerName);


       this.layoutInnerTable = document.createElement('table');

       this.layoutInnerTR = document.createElement('tr');

       this.layoutInnerTD = document.createElement('td');

    //    this.userJava  = document.getElementById(Jdataz.locationUrl);
    }

    // Method of the inner class
    innerMethod() {
        let adisi_CDLC = this;

        
        adisi_CDLC.layoutOuterDiv = document.createElement('div');
        adisi_CDLC.layoutOuterDiv.style.width = '100%';
        adisi_CDLC.layoutOuterDiv.style.height = '100%';
        adisi_CDLC.layoutOuterDiv.style.backgroundColor = 'yellow';
        adisi_CDLC.layoutOuterDiv.style.border = '6px solid white';
        adisi_CDLC.layoutOuterDiv.style.boxSizing= 'border-box';
        adisi_CDLC.layoutOuterDiv.style.justifyContent= 'center';
        adisi_CDLC.layoutOuterDiv.setAttribute('id', adisi_CDLC.innerName+'createOuterDivwUserForm');

        // adisi_CDLC.layoutOuterDiv.style.justifyContent = 'center';
        adisi_CDLC.layoutOuterDiv.style.alignContent = 'center';
        // adisi_CDLC.layoutOuterDiv.style.alignItems = 'center';
        adisi_CDLC.layoutOuterDiv.style.justifyItems = 'center';
        adisi_CDLC.layoutOuterDiv.style.alignText = 'center';
        adisi_CDLC.layoutOuterDiv.style.display = 'flex';
        adisi_CDLC.layoutOuterDiv.style.boxSizing= 'border-box';


        adisi_CDLC.layoutInnerDiv = document.createElement('div');
        adisi_CDLC.layoutInnerDiv.setAttribute('id', adisi_CDLC.innerName+'layoutInnerDiv');
        adisi_CDLC.layoutInnerDiv.style.width = '100%';
        adisi_CDLC.layoutInnerDiv.style.height = '100%';
        adisi_CDLC.layoutInnerDiv.style.backgroundColor = 'yellow';
        adisi_CDLC.layoutInnerDiv.style.display = 'block';
        adisi_CDLC.layoutInnerDiv.style.border = '6px solid orange';
        adisi_CDLC.layoutInnerDiv.style.overflowY = 'scroll';
        adisi_CDLC.layoutInnerDiv.style.boxSizing= 'border-box';


        for(let yy=0; yy< adisi_CDLC.ParentcontainerClass.appz.length;yy++){

            console.log('appz Dataq',adisi_CDLC.ParentcontainerClass.appz[yy])
        
        

        adisi_CDLC.singleTableDiv = document.createElement('div');
        adisi_CDLC.singleTableDiv.style.backgroundColor = 'red';
        adisi_CDLC.singleTableDiv.style.display= 'block';
        adisi_CDLC.singleTableDiv.style.margin= '2px 0px';

        adisi_CDLC.singleTableDiv.style.width = '100%';
        adisi_CDLC.singleTableDiv.style.height = '70px';
        adisi_CDLC.singleTableDiv.setAttribute('id', adisi_CDLC.innerName+'singleTableDiv'+yy);
        adisi_CDLC.singleTableDiv.style.boxSizing= 'border-box';


        adisi_CDLC.layoutInnerTable = document.createElement('table');
        adisi_CDLC.layoutInnerTable.style.width = '100%';
        adisi_CDLC.layoutInnerTable.style.height = '100%';
       
        adisi_CDLC.layoutInnerTable.style.backgroundColor = 'green';
        adisi_CDLC.layoutInnerTable.setAttribute('id', adisi_CDLC.innerName+'layoutInnerTable'+yy);
        adisi_CDLC.layoutInnerTable.style.boxSizing= 'border-box';

        adisi_CDLC.layoutInnerTR = document.createElement('tr');
        adisi_CDLC.layoutInnerTR.style.width = '100%';
        adisi_CDLC.layoutInnerTR.setAttribute('id', adisi_CDLC.innerName+'layoutInnerTR'+yy);
        adisi_CDLC.layoutInnerTR.style.boxSizing= 'border-box';

        for(let iCount=0; iCount<(adisi_CDLC.configurator.tableDatas); iCount++){

            adisi_CDLC.layoutInnerTD = document.createElement('td');
            adisi_CDLC.layoutInnerTD.style.width = '10%';
            adisi_CDLC.layoutInnerTD.style.border = '2px solid blue';
            adisi_CDLC.layoutInnerTD.setAttribute('id', adisi_CDLC.innerName+'layout'+yy+'InnerTD'+iCount);
            adisi_CDLC.layoutInnerTD.style.boxSizing= 'border-box';


            switch(iCount){
case 0:

adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;

break;

case (adisi_CDLC.configurator.tableDatas-1):

adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
let crtBtn = document.createElement('button');
crtBtn.innerHTML = '0';

// adisi_CDLC.layoutInnerTD.innerHTML = '0';
adisi_CDLC.layoutInnerTD.appendChild(crtBtn);

crtBtn.addEventListener('click',function (event) {
    event.preventDefault();
    let expandableDivSelect  = document.getElementById(adisi_CDLC.innerName+'expandableTableDiv'+yy);
    console.log('close open the window',event,'expandableDivSelect',expandableDivSelect,'display',expandableDivSelect.style.display);
    if(expandableDivSelect.style.display == 'block'){

        expandableDivSelect.style.display = 'none';
    }else{

        expandableDivSelect.style.display = 'block';
    }

    // adisi_CDLC.expandableTableDiv.setAttribute('id', adisi_CDLC.innerName+'expandableTableDiv'+yy);

  

})

break;

case 1:

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
adisi_CDLC.layoutInnerTD.setAttribute('id', 'mainTableRow_container_naam_'+yy);
adisi_CDLC.layoutInnerTD.innerHTML =adisi_CDLC.ParentcontainerClass.appz[yy].container_naam;


break;

case 5:

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;

let deleteButtonZ= document.createElement('button');
deleteButtonZ.setAttribute('id', adisi_CDLC.innerName+'deleteButtonZ'+yy);
deleteButtonZ.setAttribute('class', 'crudButtons');
deleteButtonZ.innerHTML = 'delete';
let editButtonZ= document.createElement('button');
editButtonZ.setAttribute('class', 'crudButtons');
// let breaker= document.createElement('br');

editButtonZ.innerHTML = 'edit';

adisi_CDLC.layoutInnerTD.appendChild(editButtonZ);
editButtonZ.setAttribute('id', adisi_CDLC.innerName+'editButtonZ'+yy);

// adisi_CDLC.layoutInnerTD.appendChild(breaker);
adisi_CDLC.layoutInnerTD.appendChild(deleteButtonZ);
editButtonZ.setAttribute('id', adisi_CDLC.innerName+'editButtonZ'+yy);


deleteButtonZ.addEventListener('click',function (event) {
    event.preventDefault();
    adisi_CDLC.ParentcontainerClass.laravelFunctions('/deletecontainer');
console.log('theseare the crudButtons deleteButtonZ',event,event.target.innerHTML,'adisi_CDLC',adisi_CDLC)
  })

  editButtonZ.addEventListener('click',function (event) {
    event.preventDefault();
    this.strippedIndex =   event.target.attributes.id.value.split('ButtonZ');
console.log('theseare the crudButtons editButtonZ',event,event.target.innerHTML,'this.strippedIndex',this.strippedIndex[1]) 


let containerpopup = document.getElementById(adisi_CDLC.ParentcontainerClass.type+'userPopUp');
this.innerContentArea = document.getElementById(adisi_CDLC.ParentcontainerClass.type+'innerContent');
this.titleContentArea = document.getElementById(adisi_CDLC.ParentcontainerClass.type+'contentTitle');
this.titleContentArea.innerHTML = 'Edit Container';


this.innerContentArea.innerHTML = '';
adisi_CDLC.ParentcontainerClass.removeConfirmForm(this.strippedIndex[1]);
// this.innerContentArea.innerHTML = 'wagwaan soldia';
this.innerContentArea.appendChild(adisi_CDLC.ParentcontainerClass.confirmForm);
// this.InnercontentArea.setAttribute('id', type+'innerContent');
// containerinnerContent.innerHTML = '';
containerpopup.style.display ='block';
console.log('eidition',containerpopup)

// removeConfirmForm()
  })
// adisi_CDLC.layoutInnerTD.innerHTML ='edit delete'; 
  let crudButtons = document.getElementsByClassName("crudButtons");
  console.log('theseare the crudButtons',crudButtons)
  for(let ii=0; ii<crudButtons.length; ii++){
    console.log('theseare the crudButtons',ii)

  crudButtons[ii].addEventListener('click',function (event) {
    event.preventDefault();
console.log('theseare the crudButtons',event)
  })
}


break;




            }
     



        adisi_CDLC.layoutInnerTR.appendChild(adisi_CDLC.layoutInnerTD);
        }
        adisi_CDLC.layoutInnerTable.appendChild(adisi_CDLC.layoutInnerTR);

        adisi_CDLC.singleTableDiv.appendChild( adisi_CDLC.layoutInnerTable);

      
        // adisi_CDLC.layoutOuterDiv.style.gridTemplateRows = adisi_CDLC.Jdataz.customRowWidth;
        // adisi_CDLC.layoutOuterDiv.style.gridTemplateColumns = adisi_CDLC.Jdataz.customColumnWidth;
        // adisi_CDLC.layoutOuterDiv.style.display = 'grid';
        // adisi_CDLC.layoutOuterDiv.style.gridTemplateAreas =adisi_CDLC.Jdataz.layout;
        // this.customRowWidth = '5% 5% 83% 2% 5%';

        // this.customColumnWidth = '5% 6% 78% 6% 5%';
          
        // display: grid; grid-template-areas: 'topSide topSide topSide topSide topSide' 'head ILS ITS IRS rightSide' 'head ILS nav IRS rightSide' 'head ILS IBS IRS rightSide' 'foot foot foot foot foot'; grid-template-rows: 5% 5% 83% 2% 5%;  grid-template-columns: 5% 1% 88% 1% 5%;"

        // adisi_CDLC.layoutOuterDiv.style.zIndex = '2222';

//////////////////////////////////////////////////////////////
// adisi_CDLC.userJava.innerHTML ='';


// adisi_CDLC.layoutOuterDiv.setAttribute('id', 'cccreateOuterDivwUserForm'+adisi_CDLC.innerName);

adisi_CDLC.layoutInnerDiv.appendChild( adisi_CDLC.singleTableDiv );
if(adisi_CDLC.configurator.addExpandableWindow == 'false'){
    console.log('you are here nowwww', yy);
    adisi_CDLC.expandableTableDiv = document.createElement('div');
    // adisi_CDLC.expandableTableDiv
    adisi_CDLC.expandableTableDiv.style.width = '100%';
    adisi_CDLC.expandableTableDiv.style.height = '70%';
    adisi_CDLC.expandableTableDiv.style.display = 'block';
    adisi_CDLC.expandableTableDiv.style.border = '2px solid grey';
    adisi_CDLC.expandableTableDiv.style.backgroundColor= '#ac9b7e';
    adisi_CDLC.expandableTableDiv.setAttribute('id', adisi_CDLC.innerName+'expandableTableDiv'+yy);
    adisi_CDLC.expandableTableDiv.style.boxSizing= 'border-box';


    ///////////////////////////////////TABLE
    adisi_CDLC.layoutInnerTable = document.createElement('table');
    adisi_CDLC.layoutInnerTable.style.width = '100%';
    adisi_CDLC.layoutInnerTable.style.height = '100%';
   
    adisi_CDLC.layoutInnerTable.style.backgroundColor = '#ac9b7e';
    adisi_CDLC.layoutInnerTable.setAttribute('id', adisi_CDLC.innerName+'layoutExpandableInnerTable'+yy);
    adisi_CDLC.layoutInnerTable.style.boxSizing= 'border-box';

    adisi_CDLC.layoutInnerTR = document.createElement('tr');
    adisi_CDLC.layoutInnerTR.style.width = '100%';
    adisi_CDLC.layoutInnerTR.setAttribute('id', adisi_CDLC.innerName+'layoutExpandableInnerTR'+yy);
    adisi_CDLC.layoutInnerTR.style.boxSizing= 'border-box';

    for(let iCount=0; iCount<(adisi_CDLC.configurator.tableDatas); iCount++){

        adisi_CDLC.layoutInnerTD = document.createElement('td');
        adisi_CDLC.layoutInnerTD.style.width = '10%';
        adisi_CDLC.layoutInnerTD.style.border = '2px solid blue';
        adisi_CDLC.layoutInnerTD.setAttribute('id', adisi_CDLC.innerName+'layoutExpandable'+yy+'InnerTD'+iCount);
        adisi_CDLC.layoutInnerTD.style.boxSizing= 'border-box';


        switch(iCount){
case 0:

adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;

break;

case (adisi_CDLC.configurator.tableDatas-1):

adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
let crtBtn = document.createElement('button');
crtBtn.innerHTML = '0';

// adisi_CDLC.layoutInnerTD.innerHTML = '0';
adisi_CDLC.layoutInnerTD.appendChild(crtBtn);

crtBtn.addEventListener('click',function (event) {
event.preventDefault();
let expandableDivSelect  = document.getElementById(adisi_CDLC.innerName+'expandableTableDiv'+yy);
console.log('close open the window',event,'expandableDivSelect',expandableDivSelect,'display',expandableDivSelect.style.display);
if(expandableDivSelect.style.display == 'block'){

    expandableDivSelect.style.display = 'none';
}else{

    expandableDivSelect.style.display = 'block';
}

// adisi_CDLC.expandableTableDiv.setAttribute('id', adisi_CDLC.innerName+'expandableTableDiv'+yy);



})

break;

case 1:

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
// adisi_CDLC.layoutInnerTD.innerHTML =adisi_CDLC.ParentcontainerClass.appz[yy].container_naam;
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', ('<ul id="unorderedListerz">\
<li>naam</li>\
<li>ContainerID</li>\
<li>Inhoud</li>\
<li>Formaat</li>\
<li>Pick-up date</li>\
<li>Departure location</li>\
</u;>'));

break;


case 2:

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
// adisi_CDLC.layoutInnerTD.innerHTML =adisi_CDLC.ParentcontainerClass.appz[yy].container_naam;
// adisi_CDLC.ParentcontainerClass.appz[yy].container_naam
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', (`<ul id="unorderedListerz" style="float:right;  color:white; text-align:right; margin:0px 10px;">\
<li id="container_naam_${yy}" >${adisi_CDLC.ParentcontainerClass.appz[yy].container_naam}</li>\
<li id="id_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].id}</li>\
<li id="container_inhoud_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].container_inhoud}</li>\
<li id="container_formaat_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].container_formaat}</li>\
<li id="date_ophaalcontainer_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].date_ophaalcontainer}</li>\
<li id="status_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].status}</li>\

</u;>`));
{/* <li>${adisi_CDLC.ParentcontainerClass.appz[yy].created_at}</li>\ */}
break;


case 4:

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
// adisi_CDLC.layoutInnerTD.innerHTML =adisi_CDLC.ParentcontainerClass.appz[yy].container_naam;
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', ('<ul id="unorderedListerz"  >\
<li >Dep.date</li>\
<li>Departure loc.</li>\
<li>Arrival date</li>\
<li>Arrival loc.</li>\
<li>Shipping ID</li>\
<li>Status</li>\
<li>Note</li>\
<li>Created at</li>\
</u;>'));

break;


case 5:

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
// adisi_CDLC.layoutInnerTD.innerHTML =adisi_CDLC.ParentcontainerClass.appz[yy].container_naam;
// adisi_CDLC.ParentcontainerClass.appz[yy].container_naam
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', (`<ul id="unorderedListerz" style="float:right;  color:white; text-align:right; margin:0px 10px;">\
<li id="date_vertrek_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].date_vertrek}</li>\
<li id="locatie_vertrek_container_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].locatie_vertrek_container}</li>\
<li id="date_aankomst_bestemming_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].date_aankomst_bestemming}</li>\
<li id="locatie_bestemming_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].locatie_bestemming}</li>\
<li id="vaart_id_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].vaart_id}</li>\
<li id="status_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].status}</li>\
<li id="notitie_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].notitie}</li>\
<liid="status_${yy}">${adisi_CDLC.ParentcontainerClass.appz[yy].status}</li>\

</u;>`));
{/* <li>${adisi_CDLC.ParentcontainerClass.appz[yy].created_at}</li>\ */}
break;

        }
 



    adisi_CDLC.layoutInnerTR.appendChild(adisi_CDLC.layoutInnerTD);
    }
    adisi_CDLC.layoutInnerTable.appendChild(adisi_CDLC.layoutInnerTR);

    adisi_CDLC.expandableTableDiv.appendChild(adisi_CDLC.layoutInnerTable );
    //////////////////////////////////////

    adisi_CDLC.layoutInnerDiv.appendChild( adisi_CDLC.expandableTableDiv);
    // adisi_CDLC.singleTableDiv.appendChild( adisi_CDLC.expandableTableDiv);

}
adisi_CDLC.layoutOuterDiv.appendChild( adisi_CDLC.layoutInnerDiv );


    //    this.userJava  = document.getElementById(Jdataz.locationUrl);
    // adisi_CDLC.userJava.appendChild(adisi_CDLC.layoutOuterDiv);

        console.log('here you areCCC','adisi_CDLC','aapa','aapa','this.ParentcontainerClass', adisi_CDLC.ParentcontainerClass.appz,'adisi_CDLC.ParentcontainerClass.getSelectionData',adisi_CDLC.ParentcontainerClass.getSelectionData);

      

    }
    let aapa = adisi_CDLC.ParentcontainerClass.getSelectionData.mainLayout.navmainLayout.getElement;
    // let contentsArea  = document.getElementById( aapa);
    // aapa.innerHTML = 'DOES it Work   Actually@!!';
    aapa.appendChild(adisi_CDLC.layoutOuterDiv);
        // contentsArea.innerHTML ='wattagwaan Soldier'
        console.log('here you areCCC',adisi_CDLC,'aapa',aapa,'this.ParentcontainerClass', adisi_CDLC.ParentcontainerClass,' adisi_CDLC.configurator', adisi_CDLC.configurator,'adisi_CDLC.ParentcontainerClass.getSelectionData',adisi_CDLC.ParentcontainerClass.getSelectionData);


    }

}



     // Define an inner class
     static createDivLayoutClass = class {
        constructor(Parentcontainer, Jdataz) {
            this.innerName = Jdataz.componentName;
            
            this.Jdataz = Jdataz;

            this.ParentcontainerClass = Parentcontainer;

           this.layoutOuterDiv = document.createElement('div');

           this.layoutInnerDiv = document.createElement('div');

           this.layoutInnerTable = document.createElement('table');

           this.layoutInnerTR = document.createElement('tr');

           this.layoutInnerTD = document.createElement('td');

           this.userJava  = document.getElementById(Jdataz.locationUrl);

           this.getElementInnerclass = this.layoutInnerDiv;

           this.INDIV_json_array ={}
         

           this.DLCarray = [];

        //    this.dynamicKey = '';
        //    this[dynamicKey] = []
           this.DLC_json_array = {};

         
        }

        // Method of the inner class
        innerMethod() {
            console.log('train ABC createDivLayoutClass')
            let adisi_CDLC = this;

            adisi_CDLC.layoutOuterDiv = document.createElement('div');
            adisi_CDLC.layoutOuterDiv.style.width = '100%';
            adisi_CDLC.layoutOuterDiv.style.height = '100%';
            adisi_CDLC.layoutOuterDiv.style.backgroundColor = 'yellow';
            adisi_CDLC.layoutOuterDiv.style.border = '10px solid blue';
            adisi_CDLC.layoutOuterDiv.style.boxSizing= 'border-box';
            adisi_CDLC.layoutOuterDiv.style.gridTemplateRows = adisi_CDLC.Jdataz.customRowWidth;
            adisi_CDLC.layoutOuterDiv.style.gridTemplateColumns = adisi_CDLC.Jdataz.customColumnWidth;
            adisi_CDLC.layoutOuterDiv.style.display = 'grid';
            adisi_CDLC.layoutOuterDiv.style.gridTemplateAreas =adisi_CDLC.Jdataz.layout;
            // this.customRowWidth = '5% 5% 83% 2% 5%';

            // this.customColumnWidth = '5% 6% 78% 6% 5%';
              
            // display: grid; grid-template-areas: 'topSide topSide topSide topSide topSide' 'head ILS ITS IRS rightSide' 'head ILS nav IRS rightSide' 'head ILS IBS IRS rightSide' 'foot foot foot foot foot'; grid-template-rows: 5% 5% 83% 2% 5%;  grid-template-columns: 5% 1% 88% 1% 5%;"

            adisi_CDLC.layoutOuterDiv.style.zIndex = '2222';

//////////////////////////////////////////////////////////////
adisi_CDLC.userJava.innerHTML ='';



// adisi_CDLC.INDIV_json_array = new function(){
//     this.topSide = 'aye';
//     this.innerTopSide = 'aye';
//     this.leftSide = 'aye';
//     this.innerLeftSide = 'aye';
//     this.rightSide = 'aye';
//     this.rightSide = 'aye';
// this.name ='';
// this.getElement ='';
// this.innerElement ='';
// }


for(let iCount=0; iCount<adisi_CDLC.Jdataz.componentParts.length; iCount++){

    adisi_CDLC.dynamicKey = adisi_CDLC.Jdataz.componentParts[iCount];

  
    // this[dynamicKey] = []

    

   

    // Generate random values for RGB
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

// Apply the random color to the background
// document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

console.log('Inner class method. Nam',iCount, adisi_CDLC.Jdataz.componentParts[iCount],' this.DLC_json_array', adisi_CDLC.DLC_json_array)
adisi_CDLC.layoutInnerDiv = document.createElement('div');

adisi_CDLC.layoutInnerDiv.setAttribute('id', adisi_CDLC.ParentcontainerClass.type+'createDivwUserForm'+adisi_CDLC.Jdataz.componentParts[iCount]);
adisi_CDLC.getElementInnerclass  = document.getElementById(adisi_CDLC.ParentcontainerClass.type+'createDivwUserForm'+adisi_CDLC.Jdataz.componentParts[iCount]);
adisi_CDLC.layoutInnerDiv.style.gridArea = adisi_CDLC.Jdataz.componentParts[iCount];
adisi_CDLC.layoutInnerDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

adisi_CDLC.layoutOuterDiv.setAttribute('id', 'createOuterDivwUserForm'+adisi_CDLC.innerName);
adisi_CDLC.layoutOuterDiv.appendChild(adisi_CDLC.layoutInnerDiv);


    //    this.userJava  = document.getElementById(Jdataz.locationUrl);
    adisi_CDLC.userJava.appendChild(adisi_CDLC.layoutOuterDiv);

   
}




// this.getSelectionData document.getElementById(adisi_CDLC.ParentcontainerClass.type+'createDivwUserForm'+adisi_CDLC.Jdataz.componentParts[iCount]);
for(let isi = 0; isi<adisi_CDLC.layoutOuterDiv.children.length; isi++){

console.log('these are the getElements by ids',adisi_CDLC.layoutOuterDiv.children[isi],'getySelect',adisi_CDLC.ParentcontainerClass.getSelectionData)

adisi_CDLC.DLCarray.push(adisi_CDLC.layoutOuterDiv.children[isi])

adisi_CDLC.DLC_json_array = adisi_CDLC.componentName;  // This will be the property key


 
}
// adisi_CDLC.ParentcontainerClass.getSelectionData.push(adisi_CDLC.DLCarray)  
// adisi_CDLC.ParentcontainerClass.getSelectionData = '100';
/////////////////////////////////////////////////////////////
adisi_CDLC.DLC_json_array = new function(){
    for(let iCountB=0; iCountB<adisi_CDLC.Jdataz.componentParts.length; iCountB++){
    // adisi_CDLC.DLC_json_array[adisi_CDLC.dynamicKey] = [];
// this[adisi_CDLC.Jdataz.componentParts[iCountB]] = adisi_CDLC.INDIV_json_array;

this[adisi_CDLC.Jdataz.componentParts[iCountB]] =  new function(){
    // this.topSide = 'aye';
    // this.innerTopSide = 'aye';
    // this.leftSide = 'aye';
    // this.innerLeftSide = 'aye';
    // this.rightSide = 'aye';
    // this.innerRightSide = 'aye';
// this.name =adisi_CDLC.dynamicKey;
this.name = adisi_CDLC.layoutOuterDiv.children[iCountB].style.gridArea;

this.getElement =adisi_CDLC.layoutOuterDiv.children[iCountB];
// this.getElement =adisi_CDLC.layoutInnerDiv;
this.innerElement ='';
}
// this.aap = 'aye';
// this.topSide = 'aye';
// this.leftSide = 'aye';
// this.rightSide = 'aye';
// this.rightSide = 'aye';
// this.aap = 'aye';
}

// adisi_CDLC.ParentcontainerClass.getSelectionData.push(adisi_CDLC.DLC_json_array)

}
// adisi_CDLC.ParentcontainerClass.getSelectionData.push(adisi_CDLC.DLC_json_array)  
adisi_CDLC.ParentcontainerClass.getSelectionData[adisi_CDLC.innerName] = adisi_CDLC.DLC_json_array;

console.log(' adisi_CDLC.INDIV_json_array', adisi_CDLC.INDIV_json_array,'adisi_CDLC.DLC_json_array',adisi_CDLC.DLC_json_array,'adisi_CDLC.Jdataz',adisi_CDLC.Jdataz,'adisi_CDLC.ParentcontainerClass.getSelectionData',adisi_CDLC.ParentcontainerClass.getSelectionData)



           
         
       

            console.log(`Inner class method. Name: ${this.innerName}`,' adisi_CDLC.ParentcontainerClass', adisi_CDLC.ParentcontainerClass,'adisiCDLC',adisi_CDLC,'adisi_CDLC.userJava',adisi_CDLC.userJava,'adisi_CDLC.layoutOuterDiv',adisi_CDLC.layoutOuterDiv,'Jdataz',adisi_CDLC.Jdataz.componentParts);
            
            // newTablo.innerMethod();
        }
    };

//////////////////////////////are you sure form


removeConfirmForm(row_id){
    //////////////////////////////////// BEGIN FORM
    let adisi = this;
let Row_id = row_id;
    console.log('removeConfirmFormxx',row_id,'adisi_CDLC.ParentcontainerClass.appz',adisi.appz[row_id])
    // Create a form element
    // const form = document.createElement('form');
    // form.style.margin = '5% 0 0 5%';
    // Loop to create 8 input fields 
    // this.form.innerHTML ='';
    this.confirmForm = document.createElement('form');
    for (let i = 0; i <= 10; i++) {
       // Create a label element
       const label = document.createElement('label');
       label.textContent = `Label ${i}: `; // Set the label text
       label.setAttribute('for', `${this.type}input${i}`); // Associate the label with the input
       label.style.width ='20%';
       label.style.color ='white';
    //    type+
    // Create an input element
    const input = document.createElement('input');
    input.type = 'text'; // Set input type to text
    input.name = `${this.type}input${i}`; // Give each input a unique name
    input.id = `${this.type}input${i}`; // Set the id to match the label's "for" attribute
    
    //    input.style.width = '180px';
    input.style.height = '30px';
    input.style.width ='60%';
    input.style.margin='10px 5px 10px 5px';
    // Create a container div for label and input
   this.container = document.createElement('div');
    this.container.className = this.type+'input-confirm';
    this.container.style.width='100%';
    
    
    /////////////////////////
    this.checkboxContainer = document.createElement('div');
    this.options = [
        'Klantenservice',
        'Kassa',
        'Laden',
        'Ophaal',
        'Administratie',
        'Receptie',
        'Opbouw',
        'Loods'
      ];
      
      this.label = document.createElement('label');
      
      this.checkbox = document.createElement('input');
      this.submitButton = document.createElement('button');
      this.userCheckBoxContainer  = '';
                                      
      this.selectedOptions = {};
      
      this.jsonData = '';
      
      this.formData = '';
      
      this.lineBreak1 = document.createElement('br');
      
      this.innerUserContent = document.createElement('div');
      
      this.popUpCloseButton = document.createElement('button');
      
      this.userJava  = document.getElementById('Containerdata');
      
      this.innerContainer = document.createElement('div');
      
      this.titleContainer = document.createElement('div');
      this.innerTitleContainer = document.createElement('div');
      
      this.innerTitleContainerBB = document.createElement('div');
      this.userTitle= document.createElement("h2");
      this.userPlus= document.createElement("p");
      this.userHeader= document.createElement("div"); 
    
      this.devideContainerA= document.createElement("div"); 
      
      this.devideContainerB= document.createElement("div"); 

      let intButtonsDiv= document.createElement("button"); 
     intButtonsDiv.style.width = '50px';
      intButtonsDiv.style.backgroundColor= 'green';
     intButtonsDiv.style.color= 'white';
     intButtonsDiv.style.height = '100%';
    intButtonsDiv.style.margin = '0px 6px';

      let intCloseButtonsDiv= document.createElement("button"); 
     intCloseButtonsDiv.style.width = '45px';
     intCloseButtonsDiv.style.backgroundColor= 'red';
      intCloseButtonsDiv.style.height = '100%';
    intCloseButtonsDiv.style.boxSizing = 'border-box';
      intCloseButtonsDiv.style.margin = '0px 6px';

      let intButtonsSpan= document.createElement("span"); 
      intButtonsSpan.style.width ='20%';
      intButtonsSpan.style.opacity = '0';

      intButtonsSpan.id ='rcf_buttonSpan'+i;
      intButtonsSpan.name =i;

      intCloseButtonsDiv.id ='rcf_closeButton'+i;
      intCloseButtonsDiv.name =i;

      intButtonsDiv.id ='rcf_saveButton'+i;
      intButtonsDiv.name =i;

      let jsonData = new function(){
this.rowNr =adisi.appz[row_id].id;
this.db_id =adisi.appz[row_id].id;

      };

// Append new data to the JSON object
// jsonData.city = "New York"; // Add a new key-value pair
// jsonData.country = "USA";

// // Update the data attribute with the modified JSON object
intButtonsSpan.setAttribute('data-info', JSON.stringify(jsonData));
    //   intButtonsSpan.style.display = 'none';
    //   this.intButtonsDiv.style.display = 'flex';
    ////////////////////
    
       if(i == 0){
        
        label.textContent = `ContainerEdition${row_id}: `; 
        input.name = `container_naam`; // Give each input a unique name
    input.id = `nameinput${i}`; // Set the id to match the label's "for" attribute 
input.value =adisi.appz[row_id].container_naam;

    
    // for(let yy=0; yy< adisi_CDLC.ParentcontainerClass.appz.length;yy++){

    //     console.log('appz Dataq',adisi_CDLC.ParentcontainerClass.appz[yy])
    
       }
    
       if(i == 1){
    
        label.textContent = `Container Id: `+ row_id; 
        input.name = `id`; // Give each input a unique name
        input.id = `containerIdinput${i}`; // Set the id to match the label's "for" attribute
        input.value =adisi.appz[row_id].id;
       }
       if(i == 2){
    
        label.textContent = `vertrek locatie : `; 
        input.name = `locatie_vertrek`; // Give each input a unique name
        input.id = `vertrekLocatieinput${i}`; // Set the id to match the label's "for" attribute
        // input.value = 'aapasa'
        input.value =adisi.appz[row_id].locatie_vertrek_container;

       }
       if(i == 3){
    
        label.textContent = `vertrek datum : `; 
        input.name = `date_vertrek`; // Give each input a unique name
        input.type = 'date';
        input.id = `vertrekDatuminput${i}`; // Set the id to match the label's "for" attribute
        input.value =adisi.appz[row_id].date_vertrek;
       }
    
       if(i == 4){
    
        label.textContent = `aankomst locatie : `; 
        input.name = `locatie_bestemming`; // Give each input a unique name
        input.id = `aankomstLocatieinput${i}`; // Set the id to match the label's "for" attribute
        input.value =adisi.appz[row_id].locatie_bestemming;
    
       }
    
       if(i == 5){
    
        label.textContent = `aankomst datum : `; 
        input.name = `date_aankomst_bestemming`; // Give each input a unique name
        input.type = 'date';
        input.id = `aankomstDatuminput${i}`; // Set the id to match the label's "for" attribute
        input.value =adisi.appz[row_id].date_aankomst_bestemming;
    
       }
       if(i == 6){
    
        label.textContent = `Formaat: `; 
        input.name = `container_formaat`; // Give each input a unique name
        input.type = 'date'; // Set input type to text
        input.id = `formaatinput${i}`; // Set the id to match the label's "for" attribute
        input.value =adisi.appz[row_id].container_formaat;
    
       }
    
       if(i == 7){
        label.textContent = `Pick-up date : `; 
     
        input.name = `date_ophaalcontainer`; // Give each input a unique name
    
    input.type = 'date'; // Set input type to text
        input.id = `pickupDateinput${i}`; // Set the id to match the label's "for" attribute
        input.value =adisi.appz[row_id].date_ophaal_container;
    
       }
       if(i == 8){
    
        label.textContent = ` Loc. laden Container : `; 
        input.name = `locatie_aanlevercontainer`; // Give each input a unique name
        input.type = 'text'; // Set input type to text
        input.id = `ladenAtinput${i}`; // Set the id to match the label's "for" attribute
        input.value =adisi.appz[row_id].locatie_aanlevercontainer;
    
       }
       if(i == 9){
    
        label.textContent = ` Date laden Container : `; 
        input.name = `date_aanlevercontainer`; // Give each input a unique name
        input.type = 'date'; // Set input type to text
        input.id = `dateladenAtinput${i}`; // Set the id to match the label's "for" attribute
        input.value =adisi.appz[row_id].date_vertrek;
    
       }
    
       if(i == 10){
    
        label.textContent = `Note : `; 
        input.name = `notitie`; // Give each input a unique name
        input.type = 'text'; // Set input type to text
        input.id = `containerNoteinput${i}`; // Set the id to match the label's "for" attribute
        input.value =adisi.appz[row_id].notitie;
    
       }
      
      
    //    container.style.display='inline-flex';
    // this.devideContainerA.appendChild(label);
    // this.devideContainerA.appendChild(input);
      
    // this.devideContainerB
       // Append the label and input to the container
    //    this.container.style.width='50%';
       this.container.appendChild(label);
       this.container.appendChild(input);
      intButtonsDiv.innerHTML = 'S';
       intCloseButtonsDiv.innerHTML = 'X';

       intButtonsSpan.appendChild(intButtonsDiv);
      intButtonsSpan.appendChild(intCloseButtonsDiv);
       this.container.appendChild(intButtonsSpan);

       input.addEventListener('input', function(event) {
        console.log('input..value',input.value)
               intButtonsSpan.style.opacity = '1';
            // intButtonsSpan.style.display = 'block';
               })

               intButtonsDiv.addEventListener('click', function(event) {
                event.preventDefault();
                this.userJavaxx  = document.getElementById(input.name+"_"+Row_id);
                console.log('input..value  save',event,'event',event.target.name,'this.userJavaxx',this.userJavaxx,'adisi',adisi,'input.value',input.value,'lable.value',label)
                adisi.updateOrNot('save',adisi.appz[row_id].id,input.value,input.name);

                this.userJavaxx.innerHTML = input.value;
                    //    intButtonsSpan.style.opacity = '1';
                    // intButtonsSpan.style.display = 'block'; 
if(input.name == 'container_naam'){

    this.mainContainerName  = document.getElementById("mainTableRow_"+input.name+"_"+Row_id);

    this.mainContainerName.innerHTML = input.value;

    // adisi_CDLC.layoutInnerTD.setAttribute('id', 'mainTableRow_container_naam_'+yy);

}
                    // adisi.appz[row_id].container_naam =input.value;
                    intButtonsSpan.style.opacity = '0';
                       })
               intCloseButtonsDiv.addEventListener('click', function(event) {
                event.preventDefault();
                // adisi.updateOrNot('cancel',event.target.name,input.value,input.name);
                console.log('input..value    cancel',event,'event',event.target.name,'input.value',input.name)
                    //    intButtonsSpan.style.opacity = '1';
                    // intButtonsSpan.style.display = 'block';
                    input.value = adisi.appz[row_id].container_naam;
                    intButtonsSpan.style.opacity = '0';
                       })
     
    //    this.container.appendChild(this.intButtonsDiv);
    //    this.container.appendChild(this.intCloseButtonsDiv);
     
       
        // Append the input to the form 
        this.confirmForm.appendChild(this.container);
     
        // Add a line break for better readability
        // this.form.appendChild(document.createElement('br'));
        this.confirmForm.setAttribute('id', this.type+'createNewUserForm');
        // adisi.form = this.form;
    }
    ////////////////////////
    
        }


///////////////////////////////////// end are you sure form
  

    createForm(){
//////////////////////////////////// BEGIN FORM

// Create a form element
// const form = document.createElement('form');
// form.style.margin = '5% 0 0 5%';
// Loop to create 8 input fields
for (let i = 0; i <= 10; i++) {
   // Create a label element
   const label = document.createElement('label');
   label.textContent = `Label ${i}: `; // Set the label text
   label.setAttribute('for', `${this.type}input${i}`); // Associate the label with the input
   label.style.width ='20%';
   label.style.color ='white';
//    type+
// Create an input element
const input = document.createElement('input');
input.type = 'text'; // Set input type to text
input.name = `${this.type}input${i}`; // Give each input a unique name
input.id = `${this.type}input${i}`; // Set the id to match the label's "for" attribute

//    input.style.width = '180px';
input.style.height = '30px';
input.style.width ='70%';
input.style.margin='10px 5px 10px 5px';
// Create a container div for label and input
// const container = document.createElement('div');
this.container.className = this.type+'input-container';
this.container.style.width='100%';


/////////////////////////
this.checkboxContainer = document.createElement('div');
this.options = [
    'Klantenservice',
    'Kassa',
    'Laden',
    'Ophaal',
    'Administratie',
    'Receptie',
    'Opbouw',
    'Loods'
  ];
  
  this.label = document.createElement('label');
  
  this.checkbox = document.createElement('input');
  this.submitButton = document.createElement('button');
  this.userCheckBoxContainer  = '';
                                  
  this.selectedOptions = {};
  
  this.jsonData = '';
  
  this.formData = '';
  
  this.lineBreak1 = document.createElement('br');
  
  this.innerUserContent = document.createElement('div');
  
  this.popUpCloseButton = document.createElement('button');
  
  this.userJava  = document.getElementById('Containerdata');
  
  this.innerContainer = document.createElement('div');
  
  this.titleContainer = document.createElement('div');
  this.innerTitleContainer = document.createElement('div');
  
  this.innerTitleContainerBB = document.createElement('div');
  this.userTitle= document.createElement("h2");
  this.userPlus= document.createElement("p");
  this.userHeader= document.createElement("div"); 

  this.devideContainerA= document.createElement("div"); 
  
  this.devideContainerB= document.createElement("div"); 
////////////////////

   if(i == 0){

    label.textContent = `Container Name x : `; 
    input.name = `name`; // Give each input a unique name
input.id = `nameinput${i}`; // Set the id to match the label's "for" attribute

   }

   if(i == 1){

    label.textContent = `Container Id: `; 
    input.name = `containerId`; // Give each input a unique name
    input.id = `containerIdinput${i}`; // Set the id to match the label's "for" attribute
   }
   if(i == 2){

    label.textContent = `vertrek locatie : `; 
    input.name = `vertrekLocatie`; // Give each input a unique name
    input.id = `vertrekLocatieinput${i}`; // Set the id to match the label's "for" attribute

   }
   if(i == 3){

    label.textContent = `vertrek datum : `; 
    input.name = `vertrekDatum`; // Give each input a unique name
    input.type = 'date';
    input.id = `vertrekDatuminput${i}`; // Set the id to match the label's "for" attribute

   }

   if(i == 4){

    label.textContent = `aankomst locatie : `; 
    input.name = `aankomstLocatie`; // Give each input a unique name
    input.id = `aankomstLocatieinput${i}`; // Set the id to match the label's "for" attribute

   }

   if(i == 5){

    label.textContent = `aankomst datum : `; 
    input.name = `aankomstDatum`; // Give each input a unique name
    input.type = 'date';
    input.id = `aankomstDatuminput${i}`; // Set the id to match the label's "for" attribute

   }
   if(i == 6){

    label.textContent = `Formaat: `; 
    input.name = `Formaat`; // Give each input a unique name
    input.type = 'date'; // Set input type to text
    input.id = `formaatinput${i}`; // Set the id to match the label's "for" attribute

   }

   if(i == 7){
    label.textContent = `Pick-up date : `; 
 
    input.name = `pickupDate`; // Give each input a unique name

input.type = 'date'; // Set input type to text
    input.id = `pickupDateinput${i}`; // Set the id to match the label's "for" attribute

   }
   if(i == 8){

    label.textContent = ` Loc. laden Container : `; 
    input.name = `ladenAt`; // Give each input a unique name
    input.type = 'text'; // Set input type to text
    input.id = `ladenAtinput${i}`; // Set the id to match the label's "for" attribute

   }
   if(i == 9){

    label.textContent = ` Date laden Container : `; 
    input.name = `dateladenAt`; // Give each input a unique name
    input.type = 'date'; // Set input type to text
    input.id = `dateladenAtinput${i}`; // Set the id to match the label's "for" attribute

   }

   if(i == 10){

    label.textContent = `Note : `; 
    input.name = `containerNote`; // Give each input a unique name
    input.type = 'text'; // Set input type to text
    input.id = `containerNoteinput${i}`; // Set the id to match the label's "for" attribute

   }
  
   
//    container.style.display='inline-flex';
// this.devideContainerA.appendChild(label);
// this.devideContainerA.appendChild(input);
  
// this.devideContainerB
   // Append the label and input to the container
//    this.container.style.width='50%';
   this.container.appendChild(label);
   this.container.appendChild(input);
    // Append the input to the form
    this.form.appendChild(this.container);
 
    // Add a line break for better readability
    // this.form.appendChild(document.createElement('br'));
    this.form.setAttribute('id', this.type+'createNewUserForm');
}
////////////////////////

    }

    containertoggleDisplay(elementBC) {
        let element  = document.getElementById('xContainerxuserExpandTable'+elementBC);
        if (element.style.display === 'none' || element.style.display === '') {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      }

    
    
popUpper(){

    let adisi = this;
    // Create a container for the checkboxes
adisi.checkboxContainer = document.createElement('div');



adisi.checkboxContainer.className = adisi.type+'checkbox-container';

// Array of options for the checkboxes
adisi.options = [
'Klantenservice',
'Kassa',
'Laden',
'Ophaal',
'Administratie',
'Receptie',
'Opbouw',
'Loods'
];



// Loop to create checkboxes with labels
// adisi.options.forEach((option, index) => {
//     // Create a label element
//     adisi.label = document.createElement('label');



//     adisi.label.textContent = option; // Set the label text

//     // Create a checkbox input element
//     adisi.checkbox = document.createElement('input');



//     adisi.checkbox.type = 'checkbox'; // Set input type to checkbox
//     adisi.checkbox.name = 'options[]'; // Give the same name to all checkboxes
//     adisi.checkbox.value = option; // Set the value for the checkbox
//     adisi.checkbox.id = `${adisi.type}checkbox${index + 1}`; // Set a unique id for each checkbox
//     adisi.checkbox.style.margin = '0 5px 0 5px';
//     // Associate the label with the checkbox
//     adisi.label.setAttribute('for', `${adisi.type}checkbox${index + 1}`);

//     // Create a container div for label and checkbox
//     adisi.containerCB = document.createElement('div');
//     adisi.containerCB.className = adisi.type+'checkbox-item';

//     // Append the checkbox and label to the container
//     adisi.containerCB.appendChild(adisi.checkbox);
//     adisi.containerCB.appendChild(adisi.label);
//     adisi.containerCB.style.margin = '0 5px 0 5px';
//     adisi.containerCB.style.color = 'white';

//     // Append the container to the checkbox container
//     adisi.containerCB.style.display = 'flex';
//     adisi.checkboxContainer.style.display = 'inline-flex';
//     adisi.checkboxContainer.style.flexWrap = 'wrap';
//     adisi.checkboxContainer.setAttribute('id', adisi.type+'userCheckboxContainer');
//     adisi.checkboxContainer.appendChild(adisi.containerCB);
//     adisi.form.appendChild(adisi.checkboxContainer);
// })
////////////////////

// Create a submit button
adisi.submitButton = document.createElement('button');


adisi.submitButton.type = 'submit'; // Set button type to submit
adisi.submitButton.textContent = 'Submit'; // Set button text
adisi.submitButton.type = 'submit'; // Set button type to submit
adisi.submitButton.style.border = '2px solid white';
adisi.submitButton.style.color = 'white';


adisi.submitButton.addEventListener('click',function (event) {
event.preventDefault();
console.log('you are about to save thuis bitch');
adisi.formdata   = document.getElementById(adisi.type+'createNewUserForm');
// let userCheckBoxContainer  = document.getElementById('userCheckboxContainer');
// adisi.userCheckBoxContainer  = Array.from(document.querySelectorAll('input[name="options[]"]'))
                            


//  Collect selected checkbox values
//   const selectedOptions = Array.from(userCheckBoxContainer)
//   .map(checkbox => checkbox.value);

// Create an object to store the checkbox states
adisi.selectedOptions = {};




// Loop through all checkboxes
//   adisi.userCheckBoxContainer.forEach(checkbox => {
//       // Set the checkbox value as key and its checked state as value (true/false)
//       adisi.selectedOptions[checkbox.value] = checkbox.checked;
//   });

// Convert to JSON string
// adisi.jsonData = JSON.stringify(adisi.selectedOptions);


console.log('create new user formdata',adisi.formdata,'userCheckBoxContainer','userCheckBoxContainer','selectedOptions','selectedOptions')



// Create a FormData object from the form
adisi.formData = new FormData(adisi.formdata);



    // Append additional variables
    // adisi.formData.append('optionsList', adisi.jsonData);

// let formoData;
// Send the form data to the Laravel route using fetch
fetch('/createnewcontainer', {
    method: 'POST',
    body: adisi.formData,
    headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // Include CSRF token for security
    }
})
.then(response => response.json())
.then(data => {
    // Handle the response from the server
    if (data.success) {
        alert(data.message);
    } else {
        alert('Failed to submit form.');
    }
})
.catch(error => {
    console.error('Error:', error);
    alert('An error occurred while submitting the form.');
});

})
// Append the submit button to the form
// Create and append a line break
adisi.lineBreak1 = document.createElement('br');



// myDiv.appendChild(lineBreak1);
adisi.form.appendChild(adisi.lineBreak1);

adisi.form.appendChild(adisi.submitButton);

// Append the form to the body or a specific container
adisi.InnercontentArea.style.overflowY ='scroll';
adisi.InnercontentArea.appendChild(adisi.form);

///////////////////////////////////////END FORM
adisi.contentAreaUserPopUp.appendChild( adisi.InnercontentArea);

adisi.innerUserContent = document.createElement('div');




adisi.innerUserContent.style.width = '100%';
adisi.innerUserContent.style.height = '90%';
adisi.innerUserContent.style.backgroundColor = 'black';
adisi.innerUserContent.style.display = 'flex';
adisi.innerUserContent.style.justifyContent = 'center';
adisi.innerUserContent.style.alignText = 'center';
adisi.innerUserContent.style.flexDirection = 'column';

adisi.innerUserContent.appendChild( adisi.innerUserTitle);
// innerUserContent.appendChild( UserContentTitle);
adisi.innerUserContent.appendChild(adisi.contentAreaUserPopUp);



adisi.popUpCloseButton = document.createElement('button');



adisi.popUpCloseButton.innerHTML ='X';
adisi.popUpCloseButton.style.width = '30px';
adisi.popUpCloseButton.style.height = '30px';
adisi.popUpCloseButton.style.backgroundColor = 'grey';
adisi.popUpCloseButton.style.border = '2px solid white';
adisi.popUpCloseButton.style.color = 'white';

adisi.innerUserPopUp.appendChild(adisi.popUpCloseButton);
adisi.userPopUp.appendChild(adisi.innerUserPopUp);
adisi.userPopUp.appendChild(adisi.innerUserContent);



adisi.userJava  = document.getElementById('Containerdata');


adisi.userJava.style.position = 'relative';




////////////////////////////////
adisi.innerContainer = document.createElement('div');



adisi.innerContainer.style.display = 'flex';
adisi.innerContainer.style.width = '100%';
adisi.innerContainer.style.height = '90%';
/////////////////////////////////////
adisi.titleContainer = document.createElement('div');
adisi.innerTitleContainer = document.createElement('div');



adisi.innerTitleContainer.style.backgroundColor = 'green';
adisi.innerTitleContainer.style.width = '80%';
adisi.innerTitleContainer.style.height = '20px';


adisi.innerTitleContainerBB = document.createElement('div');


// innerTitleContainerBB.style.backgroundColor = 'black';
adisi.innerTitleContainerBB.style.width = '100%';
adisi.innerTitleContainerBB.style.height = '35px';

adisi.titleContainer.style.justifyContent = 'center';
// titleContainer.style.alignContent = 'center';
// titleContainer.style.alignItems = 'center';
adisi.titleContainer.style.textAlign = 'center';
// titleContainer.style.justifyItems = 'center';
adisi.titleContainer.style.color = 'white';
// titleContainer.style.backgroundColor = 'blue';
adisi.titleContainer.style.display = 'flex';

adisi.userTitle= document.createElement("h2");

adisi.userTitle.innerHTML = 'Containers';
adisi.userTitle.style.textAlign = 'center';
adisi.innerTitleContainer.appendChild(adisi.userTitle);

adisi.innerTitleContainer.setAttribute('id', adisi.type+'innerTitleConta');
adisi.titleContainer.appendChild(adisi.innerTitleContainer); 


adisi.userPlus= document.createElement("p");
adisi.userPlus.setAttribute('id', adisi.type+'userPlus'); 
adisi.userPlus.innerHTML = '+ +';

adisi.userPlus.style.right = '35px';
adisi.userPlus.style.margin = '0 10% 0 0';
adisi.userPlus.style.color = 'white';
adisi.userPlus.style.fontSize = '24px';
adisi.userPlus.style.textAlign = 'right';
adisi.userPlus.style.width = '100%';
adisi.innerTitleContainerBB.style.width = '100%';

adisi.innerTitleContainerBB.style.display = 'flex';
adisi.innerTitleContainerBB.style.backgroundColor = 'orange';
adisi.innerTitleContainerBB.style.justifyContent = 'center';
adisi.innerTitleContainerBB.appendChild(adisi.userPlus);


adisi.userHeader= document.createElement("div");
adisi.userHeader.setAttribute('id', adisi.type+'userHeada');
adisi.userHeader.style.height = '5%';
adisi.userHeader.style.display = 'block';
adisi.userHeader.style.width = '100%';

adisi.userHeader.style.textAlign = 'right';

adisi.userHeader.style.justifyContent = 'center';
adisi.userHeader.style.alignContent = 'center';
adisi.userHeader.style.alignItems = 'center';
adisi.userHeader.style.justifyItems = 'center';

adisi.userHeader.appendChild(adisi.innerTitleContainerBB);
adisi.userHeader.appendChild(adisi.titleContainer);



// titleContainer.appendChild(innerTitleContainerBB);

// titleContainer.appendChild(userPlus);

adisi.titleContainer.style.width = '100%';
adisi.titleContainer.style.height = '6%';


// adisi.userJava.innerHTML = '';
adisi.userJava.style.width = '100%';
adisi.userJava.style.height = '100%';

adisi.userJava.style.justifyContent = 'center';
adisi.userJava.style.alignContent = 'center';
adisi.userJava.style.alignItems = 'center';
adisi.userJava.style.justifyItems = 'center';

adisi.getSelectionData.mainLayout.topSidemainLayout.getElement.appendChild(adisi.userHeader);
// adisi.userJava.appendChild(adisi.userHeader);
// innerContainer.
// userJava.setAttribute('class', 'col-md-6 mx-auto mt-5');

adisi.innerContainer.style.justifyContent = 'center';
adisi.innerContainer.style.alignContent = 'center';
adisi.innerContainer.style.alignItems = 'center';
adisi.innerContainer.style.justifyItems = 'center';




adisi.userJava.style.alignText = 'center';
// userJava.style.justifyItems = 'center';


adisi.tempContainere = document.createElement('div');

// tempContainere.style.display = 'flex';
// tempContainer.attributes.id ='tysy';
adisi.tempContainere.setAttribute('id', adisi.type+'tysy');
adisi.tempContainere.style.width = '80%';
adisi.tempContainere.style.overflowY = 'auto';
// tempContainere.style.left = '30%';
adisi.tempContainere.style.height = '90%';
// tempContainere.style.opacity = '0.2';
adisi.tempContainere.style.backgroundColor = 'purple';
// tempContainere.appendChild(userHeader);
adisi.innerContainer.appendChild( adisi.tempContainere); 
// tempContainere.appendChild(titleContainer);
// let PackageDivGrouperBTotal = document.createElement("div");
adisi.userTable = document.createElement("table");
// userTable.style.width = '100%';
// userTable.style.height = '50px';
// userTable.style.backgroundColor = 'yellow';
// userTable.style.border = '1px solid blue';

adisi.expandButton = document.createElement("button");

let userTR = document.createElement("tr");
// userTable.appendChild(userTR);
let userTD= document.createElement("td");
let aTDs;

let listItems;
let userdataList = document.createElement("ul");
let userdataListItem = document.createElement("li");

let editButton = document.createElement('button');
let deleteButton = document.createElement('button');

for(let oj=0; oj<this.appz.length; oj++){

}

adisi.userJava.appendChild(adisi.userPopUp);
this.appz.forEach(function(item, index) {
//////////////////////////////////////////////  BEGIN POPUP BUTTON
adisi.innerUserPopUp.addEventListener('click',function (event) {
event.preventDefault();
let popup = document.getElementById(adisi.type+'userPopUp');
popup.style.display ='none';

console.log('closte the damns window')
})
/////////////////////////////////////// end pop up button



// function containertoggleDisplay(element) {
//     element  = document.getElementById('xContainerxuserPlus');
//     if (element.style.display === 'none' || element.style.display === '') {
//       element.style.display = 'block';
//     } else {
//       element.style.display = 'none';
//     }
//   }

//   userPlus.addEventListener('click',function (event) {
//     event.preventDefault();
//     console.log('yo this is da xontainerzPlus')
//     let containerpopup = document.getElementById(this.appz+'userPopUp');
//     containerpopup.style.display ='block';
// // console.log('yo this is da userPlus')


// })
})



let popup = document.getElementById(adisi.type+'userPopUp');


let containeruserPlusButton  = document.getElementById(adisi.type+'userPlus');
containeruserPlusButton.addEventListener('click',function (event) {
event.preventDefault();
console.log('yo this is da xontainerzPlus')
let containerpopup = document.getElementById(adisi.type+'userPopUp');
let widthValue = '70';
containerpopup.style.width =widthValue+'%';
containerpopup.style.left =((100-widthValue)/2)+'%';
let containerTitle = document.getElementById(adisi.type+'contentTitle');
let containerinnerContent = document.getElementById(adisi.type+'innerContent');
containerinnerContent.appendChild(adisi.form) 
containerTitle.innerHTML = 'Create Container';


// containerinnerContent.innerHTML = '';
containerpopup.style.display ='block';
// console.log('yo this is da userPlus')

})

}
      

    checksAndSave(){
        let adisi = this;
        // Create a container for the checkboxes
adisi.checkboxContainer = document.createElement('div');



adisi.checkboxContainer.className = adisi.type+'checkbox-container';

// Array of options for the checkboxes
adisi.options = [
  'Klantenservice',
  'Kassa',
  'Laden',
  'Ophaal',
  'Administratie',
  'Receptie',
  'Opbouw',
  'Loods'
];



// Loop to create checkboxes with labels
// adisi.options.forEach((option, index) => {
//     // Create a label element
//     adisi.label = document.createElement('label');

    
  
//     adisi.label.textContent = option; // Set the label text

//     // Create a checkbox input element
//     adisi.checkbox = document.createElement('input');


    
//     adisi.checkbox.type = 'checkbox'; // Set input type to checkbox
//     adisi.checkbox.name = 'options[]'; // Give the same name to all checkboxes
//     adisi.checkbox.value = option; // Set the value for the checkbox
//     adisi.checkbox.id = `${adisi.type}checkbox${index + 1}`; // Set a unique id for each checkbox
//     adisi.checkbox.style.margin = '0 5px 0 5px';
//     // Associate the label with the checkbox
//     adisi.label.setAttribute('for', `${adisi.type}checkbox${index + 1}`);

//     // Create a container div for label and checkbox
//     adisi.containerCB = document.createElement('div');
//     adisi.containerCB.className = adisi.type+'checkbox-item';

//     // Append the checkbox and label to the container
//     adisi.containerCB.appendChild(adisi.checkbox);
//     adisi.containerCB.appendChild(adisi.label);
//     adisi.containerCB.style.margin = '0 5px 0 5px';
//     adisi.containerCB.style.color = 'white';

//     // Append the container to the checkbox container
//     adisi.containerCB.style.display = 'flex';
//     adisi.checkboxContainer.style.display = 'inline-flex';
//     adisi.checkboxContainer.style.flexWrap = 'wrap';
//     adisi.checkboxContainer.setAttribute('id', adisi.type+'userCheckboxContainer');
//     adisi.checkboxContainer.appendChild(adisi.containerCB);
//     adisi.form.appendChild(adisi.checkboxContainer);
// })
////////////////////

// Create a submit button
adisi.submitButton = document.createElement('button');


adisi.submitButton.type = 'submit'; // Set button type to submit
adisi.submitButton.textContent = 'Submit'; // Set button text
adisi.submitButton.type = 'submit'; // Set button type to submit
adisi.submitButton.style.border = '2px solid white';
adisi.submitButton.style.color = 'white';


adisi.submitButton.addEventListener('click',function (event) {
    event.preventDefault();
    console.log('you are about to save thuis bitch');
    adisi.formdata   = document.getElementById(adisi.type+'createNewUserForm');
    // let userCheckBoxContainer  = document.getElementById('userCheckboxContainer');
    // adisi.userCheckBoxContainer  = Array.from(document.querySelectorAll('input[name="options[]"]'))
                                
    

    //  Collect selected checkbox values
//   const selectedOptions = Array.from(userCheckBoxContainer)
//   .map(checkbox => checkbox.value);

  // Create an object to store the checkbox states
  adisi.selectedOptions = {};

 


  // Loop through all checkboxes
//   adisi.userCheckBoxContainer.forEach(checkbox => {
//       // Set the checkbox value as key and its checked state as value (true/false)
//       adisi.selectedOptions[checkbox.value] = checkbox.checked;
//   });

// Convert to JSON string
// adisi.jsonData = JSON.stringify(adisi.selectedOptions);


    console.log('create new user formdata',adisi.formdata,'userCheckBoxContainer','userCheckBoxContainer','selectedOptions','selectedOptions')
   
 

    // Create a FormData object from the form
    adisi.formData = new FormData(adisi.formdata);

   

        // Append additional variables
        // adisi.formData.append('optionsList', adisi.jsonData);
    
    // let formoData;
    // Send the form data to the Laravel route using fetch
    fetch('/createnewcontainer', {
        method: 'POST',
        body: adisi.formData,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // Include CSRF token for security
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        if (data.success) {
            alert(data.message);
        } else {
            alert('Failed to submit form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });

})
// Append the submit button to the form
// Create and append a line break
adisi.lineBreak1 = document.createElement('br');



// myDiv.appendChild(lineBreak1);
adisi.form.appendChild(adisi.lineBreak1);

adisi.form.appendChild(adisi.submitButton);

// Append the form to the body or a specific container
adisi.InnercontentArea.style.overflowY ='scroll';
adisi.InnercontentArea.appendChild(adisi.form);

///////////////////////////////////////END FORM
adisi.contentAreaUserPopUp.appendChild( adisi.InnercontentArea);

adisi.innerUserContent = document.createElement('div');




adisi.innerUserContent.style.width = '100%';
adisi.innerUserContent.style.height = '90%';
adisi.innerUserContent.style.backgroundColor = 'grey';
adisi.innerUserContent.style.display = 'flex';
adisi.innerUserContent.style.justifyContent = 'center';
adisi.innerUserContent.style.alignText = 'center';
adisi.innerUserContent.style.flexDirection = 'column';

adisi.innerUserContent.appendChild( adisi.innerUserTitle);
// innerUserContent.appendChild( UserContentTitle);
adisi.innerUserContent.appendChild(adisi.contentAreaUserPopUp);



adisi.popUpCloseButton = document.createElement('button');



adisi.popUpCloseButton.innerHTML ='X';
adisi.popUpCloseButton.style.width = '30px';
adisi.popUpCloseButton.style.height = '30px';
adisi.popUpCloseButton.style.backgroundColor = 'grey';
adisi.popUpCloseButton.style.border = '2px solid white';
adisi.popUpCloseButton.style.color = 'white';

adisi.innerUserPopUp.appendChild(adisi.popUpCloseButton);
adisi.userPopUp.appendChild(adisi.innerUserPopUp);
adisi.userPopUp.appendChild(adisi.innerUserContent);



adisi.userJava  = document.getElementById('Containerdata');


adisi.userJava.style.position = 'relative';




////////////////////////////////
adisi.innerContainer = document.createElement('div');



adisi.innerContainer.style.display = 'flex';
adisi.innerContainer.style.width = '100%';
adisi.innerContainer.style.height = '90%';
/////////////////////////////////////
adisi.titleContainer = document.createElement('div');
adisi.innerTitleContainer = document.createElement('div');



adisi.innerTitleContainer.style.backgroundColor = 'green';
adisi.innerTitleContainer.style.width = '80%';
adisi.innerTitleContainer.style.height = '20px';


adisi.innerTitleContainerBB = document.createElement('div');


// innerTitleContainerBB.style.backgroundColor = 'black';
adisi.innerTitleContainerBB.style.width = '100%';
adisi.innerTitleContainerBB.style.height = '35px';

adisi.titleContainer.style.justifyContent = 'center';
// titleContainer.style.alignContent = 'center';
// titleContainer.style.alignItems = 'center';
adisi.titleContainer.style.textAlign = 'center';
// titleContainer.style.justifyItems = 'center';
adisi.titleContainer.style.color = 'white';
// titleContainer.style.backgroundColor = 'blue';
adisi.titleContainer.style.display = 'flex';

adisi.userTitle= document.createElement("h2");

adisi.userTitle.innerHTML = 'Containers';
adisi.userTitle.style.textAlign = 'center';
adisi.innerTitleContainer.appendChild(adisi.userTitle);

adisi.innerTitleContainer.setAttribute('id', adisi.type+'innerTitleConta');
adisi.titleContainer.appendChild(adisi.innerTitleContainer); 


adisi.userPlus= document.createElement("p");
adisi.userPlus.setAttribute('id', adisi.type+'userPlus'); 
adisi.userPlus.innerHTML = '+';

adisi.userPlus.style.right = '35px';
adisi.userPlus.style.margin = '0 10% 0 0';
adisi.userPlus.style.color = 'white';
adisi.userPlus.style.fontSize = '24px';
adisi.userPlus.style.textAlign = 'right';
adisi.userPlus.style.width = '100%';
adisi.innerTitleContainerBB.style.width = '100%';

adisi.innerTitleContainerBB.style.display = 'flex';
adisi.innerTitleContainerBB.style.backgroundColor = 'orange';
adisi.innerTitleContainerBB.style.justifyContent = 'center';
adisi.innerTitleContainerBB.appendChild(adisi.userPlus);


adisi.userHeader= document.createElement("div");
adisi.userHeader.setAttribute('id', adisi.type+'userHeada');
adisi.userHeader.style.height = '5%';
adisi.userHeader.style.display = 'block';
adisi.userHeader.style.width = '100%';

adisi.userHeader.style.textAlign = 'right';

adisi.userHeader.style.justifyContent = 'center';
adisi.userHeader.style.alignContent = 'center';
adisi.userHeader.style.alignItems = 'center';
adisi.userHeader.style.justifyItems = 'center';

adisi.userHeader.appendChild(adisi.innerTitleContainerBB);
adisi.userHeader.appendChild(adisi.titleContainer);



// titleContainer.appendChild(innerTitleContainerBB);

// titleContainer.appendChild(userPlus);

adisi.titleContainer.style.width = '100%';
adisi.titleContainer.style.height = '6%';


adisi.userJava.innerHTML = '';
adisi.userJava.style.width = '100%';
adisi.userJava.style.height = '100%';

adisi.userJava.style.justifyContent = 'center';
adisi.userJava.style.alignContent = 'center';
adisi.userJava.style.alignItems = 'center';
adisi.userJava.style.justifyItems = 'center';


adisi.userJava.appendChild(adisi.userHeader);
// innerContainer.
// userJava.setAttribute('class', 'col-md-6 mx-auto mt-5');

adisi.innerContainer.style.justifyContent = 'center';
adisi.innerContainer.style.alignContent = 'center';
adisi.innerContainer.style.alignItems = 'center';
adisi.innerContainer.style.justifyItems = 'center';




adisi.userJava.style.alignText = 'center';
// userJava.style.justifyItems = 'center';


adisi.tempContainere = document.createElement('div');

// tempContainere.style.display = 'flex';
// tempContainer.attributes.id ='tysy';
adisi.tempContainere.setAttribute('id', adisi.type+'tysy');
adisi.tempContainere.style.width = '80%';
adisi.tempContainere.style.overflowY = 'auto';
// tempContainere.style.left = '30%';
adisi.tempContainere.style.height = '90%';
// tempContainere.style.opacity = '0.2';
adisi.tempContainere.style.backgroundColor = 'purple';
// tempContainere.appendChild(userHeader);
adisi.innerContainer.appendChild( adisi.tempContainere); 
// tempContainere.appendChild(titleContainer);
// let PackageDivGrouperBTotal = document.createElement("div");
adisi.userTable = document.createElement("table");
// userTable.style.width = '100%';
// userTable.style.height = '50px';
// userTable.style.backgroundColor = 'yellow';
// userTable.style.border = '1px solid blue';

adisi.expandButton = document.createElement("button");

let userTR = document.createElement("tr");
// userTable.appendChild(userTR);
let userTD= document.createElement("td");
let aTDs;

let listItems;
let userdataList = document.createElement("ul");
let userdataListItem = document.createElement("li");

let editButton = document.createElement('button');
let deleteButton = document.createElement('button');

for(let oj=0; oj<this.appz.length; oj++){
 
}

adisi.userJava.appendChild(adisi.userPopUp);
this.appz.forEach(function(item, index) {
    // console.log('this is tapzzzzBB containerz ',item.name,item.id,item,'user_data',item.user_data,'optionList',item.user_data,'item',item);
 
    for(let rws =0; rws < 3; rws++){
    if(rws == '0'){

     aTDs = 6;
     adisi.expandButton = document.createElement("button");
     adisi.expandButton.setAttribute('id', adisi.type+'expandButton'+ index);
     adisi.expandButton.innerHTML = '0';

        adisi.userTable = document.createElement("table");
        adisi.userTable.setAttribute('id', adisi.type+'user'+rws+'Table'+ index);
        adisi.userTable.style.width = '100%';
        adisi.userTable.style.height = '50px';
        adisi.userTable.style.margin = '2px  0';
        adisi.userTable.style.backgroundColor = ' #3196d9 ';
        adisi.userTable.style.border = '1px solid blue';

        userTR = document.createElement("tr");
        userTR.setAttribute('id', adisi.type+'user'+rws+'TR'+ rws);
        userTR.style.height = '50px';
        for(let td =0; td < aTDs; td++){
            userTD = document.createElement("td");
            userTD.setAttribute('id', adisi.type+'user'+rws+'TD'+ td);
            userTD.style.border = '5px solid blue';
        
switch( td){

    case 0:
        userTD.style.width = '2%';

    break;

    case 1:
        userTD.style.width = '24%';
        userTD.innerHTML = item.container_naam;

    break;

    case 2:
        userTD.style.width = '24%';
        userTD.innerHTML = item.container_formaat;

    break;

    case 3:
        userTD.style.width = '24%';
        userTD.innerHTML = item.email;

    break;

    case 4:
        userTD.style.width = '24%';
        // let editButton = document.createElement('button');
         editButton = document.createElement('button');
// let deleteButton = document.createElement('button');
        editButton.innerHTML = '"edit"';
        editButton.setAttribute('id','editButton'+rws)
        editButton.addEventListener('click',function (event) {
            event.preventDefault();
            adisi.laravelFunctions('/editcontainer');
console.log('this is the edit button');
        })

deleteButton = document.createElement('button');
          deleteButton.addEventListener('click',function (event) {
            event.preventDefault();

            console.log('yo this is da xontainerzPlus')
            let containerpopup = document.getElementById(adisi.type+'userPopUp');
            let containerTitle = document.getElementById(adisi.type+'contentTitle');
            containerTitle.innerHTML = '';
            containerTitle.innerHTML = 'Edit Container';
            let containerinnerContent = document.getElementById(adisi.type+'innerContent');
            containerinnerContent.innerHTML = '';
            containerpopup.style.display ='block';
            adisi.laravelFunctions('/deletecontainer');
console.log('this is the delete button');
        })
        // let editButton = document.createElement('button');
        // let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '"delete"';
        deleteButton.setAttribute('id','deleteButton'+rws)
      

        userTD.appendChild(editButton);
        userTD.appendChild(deleteButton);
        // userTD.innerHTML = item.password;

    break;

    case (aTDs-1):
        userTD.style.width = '2%';
        // userTD.innerHTML = 'O';
        userTD.appendChild(adisi.expandButton);
    break;


}
           
           

         
            userTR.appendChild(userTD);
           

   

            adisi.userTable.appendChild(userTR);
            adisi.tempContainere.appendChild( adisi.userTable);
           console.log('iteratings')
        }
       
     
        adisi.innerContainer.style.backgroundColor ='brown';
        // innerContainer.appendChild(userPlus);
        adisi.userJava.appendChild(adisi.innerContainer);


       
        
    }

    



//////////////////////////END  CASE 0
    /////////////////////////////////////
    ////////////////////////////////////BEGIN CASE 1
    if(rws == '1'){

        aTDs = 6;
        adisi.userTable = document.createElement("table");
        adisi.userTable.setAttribute('id', 'xContainerxuserExpandTable'+ index);
        adisi.userTable.style.width = '100%';
        adisi.userTable.style.display = 'none';
        adisi.userTable.style.height = 'auto';
        adisi.userTable.style.margin = '2px  0';
        adisi.userTable.style.backgroundColor = '#BB9FF3';
        adisi.userTable.style.border = '1px solid blue';
   
           userTR = document.createElement("tr");
           userTR.setAttribute('id', adisi.type+'user'+rws+'TR'+ rws);
           userTR.style.height = 'auto';

           listItems =3;
        //    userdataList = document.createElement("ul");
           
        //    userdataList.setAttribute('id', 'userdataListTR'+ rws);
        //    userdataListItem.innerHTML = 'test';
         

        //    for(let lli = 0; lli<listItems; lli++ ){
        //     userdataListItem = document.createElement("li");
        //     userdataListItem.setAttribute('id', 'userdata'+lli+'TR'+ rws);
        //     // userdataListItem.inerHTML = 'test';
        //     userdataList.appendChild(userdataListItem);
        //    }

       
         

           for(let td =0; td < aTDs; td++){
               userTD = document.createElement("td");
               userTD.setAttribute('id', adisi.type+'user'+rws+'TD'+ td);
               userTD.style.border = '5px solid blue';
           
   switch( td){
   
       case 0:
           userTD.style.width = '2%';
        //    userTD.style.height = '40%';
           userTD.innerHTML = '';
   
       break;
   
       case 1:
           userTD.style.width = '25%';
        //    userTD.innerHTML = item.id;
        // userTD.appendChild(userdataList);
        
        userTD.innerHTML += `
<ul class="${adisi.type}todo" id="${adisi.type}todoItemt">

<li>location container del:</li>
<li>arrival container date :</li>
<li>shipping_id :</li>
<li>arrival date  :</li>
<li>departure date :</li>
<li>Status :</li>

</ul>
`;
   
       break;
   
       case 2:
           userTD.style.width = '30%';
           userTD.innerHTML += `
           <ul class="${adisi.type}todo" id="${adisi.type}todoItemt">
           
           <li>${item.locatie_aanlevercontainer} :</li>
           <li>${item.date_aanlevercontainer} :</li>
           <li>${item.vaart_id} :</li>
           <li>${item.date_aankomst_bestemming}  :</li>
           <li>${item.date_vertrek} :</li>
           <li>ready:</li>
           </ul>
           `;
       break;
   
       case 3:
           userTD.style.width = '15%';
        //    userTD.innerHTML = item.email;
        userTD.innerHTML += `
        <ul class="${adisi.type}todo" id="${adisi.type}todoItemt">
        
        <li>Phone :</li>
        <li>Alt.Phone :</li>
        <li>Address :</li>
        <li>Email :</li>
        
        </ul>
        `;
   
       break;
   
       case 4:
           userTD.style.width = '15%';

           

           userTD.innerHTML += `
        <ul class="${adisi.type}todoAnsa" id="${adisi.type}todoItemtAnsa">
        
        <li> ${item.container_naam}</li>
        <li>${item.locatie_aanlevercontainer}</li>
        <li> ${item.locatie_bestemming}</li>
        <li> ${item.date_aanlevercontainer}</li>
        
        </ul>
        `;
   
       break;
   
       case (aTDs-1):
           userTD.style.width = '15%';
           const checkboxContainer = document.createElement('div');
checkboxContainer.className = adisi.type+'checkbox-container';

// Array of options for the checkboxes
const options = [
  'Klantenservice',
  'Kassa',
  'Laden',
  'Ophaal',
  'Administratie',
  'Receptie',
  'Opbouw',
  'Loods'
];

// Loop to create checkboxes with labels
options.forEach((option, index) => {
    // Create a label element
    adisi.label = document.createElement('label');
  
    adisi.textContent = option; // Set the label text

    // Create a checkbox input element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';  // Set input type to checkbox
    checkbox.name = 'options[]';  // Give the same name to all checkboxes
    checkbox.value = option;   // Set the value for the checkbox
    checkbox.id = `${adisi.type}checkbox${index + 1}`; // Set a unique id for each checkbox
    checkbox.style.margin = '0 5px 0 5px';
// console.log('checkboxxx', checkbox,'item',item,'item.user_data',JSON.parse(item.user_data.optionsList)[option],'option',option);
//     checkbox.checked = JSON.parse(item.user_data.optionsList)[option];
    // Associate the label with the checkbox
    adisi.label.setAttribute('for', `${adisi.type}checkbox${index + 1}`);

    // Create a container div for label and checkbox
    adisi.containerCB = document.createElement('div');
    adisi.containerCB.className = adisi.type+'checkbox-item';

    // Append the checkbox and label to the container
    adisi.containerCB.appendChild(checkbox);
    adisi.containerCB.appendChild(adisi.label);
    adisi.containerCB.style.margin = '0 15px 0 15px';
    adisi.containerCB.style.color = 'white';

    // Append the containerCB to the checkbox containerCB
    adisi.containerCB.style.display = 'flex';
    // checkboxContainer.style.display = 'inline-flex';
    checkboxContainer.style.felxWrap = 'wrap';
    checkboxContainer.setAttribute('id', adisi.type+'userCheckboxContainer');
    checkboxContainer.appendChild(adisi.containerCB);
    // form.appendChild(checkboxContainer);
})
////////////////////
           userTD.appendChild(checkboxContainer);
       break;
   
   
   }
              
              
   
//    userTD.style.width = '50%';
               userTR.appendChild(userTD);
              
   
      
   
               adisi.userTable.appendChild(userTR);
             
              console.log('iteratings')
           }
          
           adisi.tempContainere.appendChild( adisi.userTable); 
        //    adisi.innerContainer.appendChild( adisi.tempContainere);
           adisi.userJava.appendChild(adisi.innerContainer);

           

           
       }
    ///////////////////////////////////END CASE 1
        /////////////////////////////////////// expandbutton eventlistener begin
        adisi.expandButton.addEventListener('click',function (event) {
            event.preventDefault();
            // console.log('this is the ExpandButton!', event,'expansionTable',expansionTable,'strippedIndex',strippedIndex)
        
        let  strippedIndex =   event.target.attributes.id.value.split('expandButton');
        // adisi.expansionTable =document.getElementById(adisi.type+'userExpandTable'+strippedIndex[1]);
        let expansionTable =document.getElementById('xContainerxuserExpandTable'+strippedIndex[1]);
        console.log('this is the ExpandButton!', event,'expansionTable',expansionTable,'strippedIndex',strippedIndex)
        
        // expansionTable.style.display = 'flex'
        adisi.containertoggleDisplay(strippedIndex[1]);
        })
        

}





//////////////////////////////////////////////  BEGIN POPUP BUTTON
adisi.innerUserPopUp.addEventListener('click',function (event) {
    event.preventDefault();
    let popup = document.getElementById(adisi.type+'userPopUp');
    popup.style.display ='none';
    
console.log('closte the damns window')
})
/////////////////////////////////////// end pop up button


   
// function containertoggleDisplay(element) {
//     element  = document.getElementById('xContainerxuserPlus');
//     if (element.style.display === 'none' || element.style.display === '') {
//       element.style.display = 'block';
//     } else {
//       element.style.display = 'none';
//     }
//   }

//   userPlus.addEventListener('click',function (event) {
//     event.preventDefault();
//     console.log('yo this is da xontainerzPlus')
//     let containerpopup = document.getElementById(this.appz+'userPopUp');
//     containerpopup.style.display ='block';
// // console.log('yo this is da userPlus')


// })
})



let popup = document.getElementById(adisi.type+'userPopUp');


let containeruserPlusButton  = document.getElementById(adisi.type+'userPlus');
containeruserPlusButton.addEventListener('click',function (event) {
    event.preventDefault();
    console.log('yo this is da xontainerzPlus')
    let containerpopup = document.getElementById(adisi.type+'userPopUp');
    let widthValue = '70';
    containerpopup.style.width =widthValue+'%';
    containerpopup.style.left =((100-widthValue)/2)+'%';
    let containerTitle = document.getElementById(adisi.type+'contentTitle');
    let containerinnerContent = document.getElementById(adisi.type+'innerContent');
    containerinnerContent.appendChild(adisi.form) 
    containerTitle.innerHTML = 'Create Container';

   
    // containerinnerContent.innerHTML = '';
    containerpopup.style.display ='block';
// console.log('yo this is da userPlus')

})
    }


    // });

    innerFunction(){
        console.log('THIS IS THE CLASS','this.userPopUp',appz,'appz', 'type','type this.userPopUp',this.userPopUp)
    }
   




    

}


// Child class (inner class)
class ChildClass extends ContainerClass {
    innerFunction() {
        // Call the parent class function using super
        super.getElementsSelection();  // This will call the parent class method
        console.log("This is the child function");
    }
}
    

var containerappz =  containerLoadsDB;
console.log('this is tapzzzzBB',containerappz);



// Rasengan.addEventListener('click', function (event) {
    // event.preventDefault();
    $(document).ready(function () {
        let containertypeString = 'xContainerx'

        let classCreationdataX = new function(){
            this.name = "aaaap";
            
            this.content = 'TESTER';
            this.componentName = 'mainLayout'; 
            this.columnsCount = 5; 
            this.rowsCount = 5; 

            this.componentParts = [`topSide${this.componentName}`,`head${this.componentName}`,`ILS${this.componentName}`,`IRS${this.componentName}`,`rightSide${this.componentName}`,`foot${this.componentName}`,`nav${this.componentName}`,`IBS${this.componentName}`,`ITS${this.componentName}`];
            

        //    this.evenColumnWidth = Math.floor((100/columnsCount));
        //    this.evenRowWidth = Math.floor((100/rowsCount));
        this.evenColumnWidth = Math.floor((100/ this.columnsCount));
        this.evenRowWidth = Math.floor((100/ this.rowsCount));
this.locationUrl = 'Containerdata';
            this.style = new function(){
                this.backgroundColor = "green";
                this.width = "100%";
                this.height = "100%";
                this.display = "grid";

            }
            // this.layout = ['topSide topSide topSide topSide','topSide','topSide','',''];
            this.layout = `
            'topSide${this.componentName} topSide${this.componentName} topSide${this.componentName} topSide${this.componentName} topSide${this.componentName}'
            'head${this.componentName} ILS${this.componentName} ITS${this.componentName} IRS${this.componentName} rightSide${this.componentName}' 
            'head${this.componentName} ILS${this.componentName} nav${this.componentName} IRS${this.componentName} rightSide${this.componentName}'
             'head${this.componentName} ILS${this.componentName} IBS${this.componentName} IRS${this.componentName} rightSide${this.componentName}' 
             'foot${this.componentName} foot${this.componentName} foot${this.componentName} foot${this.componentName} foot${this.componentName}'
            `;
          
            this.customRowWidth = '5% 5% 83% 2% 5%';

            this.customColumnWidth = '5% 6% 78% 6% 5%';
       
        }
            
            
           
        let containerPagesClassy = new ContainerClass(containerappz,containertypeString);
   
        // console.log('THIS IS THE CLASS','this.userPopUp','appz','appz', 'type','type',PagesClassy)
        containerPagesClassy.innerFunction();
        containerPagesClassy.createForm();
        
        
        // containerPagesClassy.checksAndSave();
      
        let teasty =containerPagesClassy.getElementsSelection();

        let DIvclass = new ContainerClass.createDivLayoutClass(containerPagesClassy,classCreationdataX);
        DIvclass.innerMethod('aap');
        containerPagesClassy.popUpper();
        // DIvclass.getElementsSelection('teeest');
        // xContainerxcreateDivwUserFormnavmainLayout

        // let DiviA = document.getElementById("xContainerxcreateDivwUserFormnavmainLayout");
        console.log('what is the made previeous class',containerPagesClassy.getSelectionData[classCreationdataX.componentName]['topSide'+classCreationdataX.componentName],'componenetNAme',containerPagesClassy.getSelectionData[classCreationdataX.componentName],'id',containerPagesClassy.getSelectionData[classCreationdataX.componentName]['topSide'+classCreationdataX.componentName].getElement.id);
       
       let UrlPlaceContent = containerPagesClassy.getSelectionData[classCreationdataX.componentName]['nav'+classCreationdataX.componentName].getElement.id
       
        classCreationdataX = new function(){
            this.name = "aaaap";
            
            this.content = 'TESTER';
            this.componentName = 'contento'; 
            this.columnsCount = 5; 
            this.rowsCount = 5; 

            this.componentParts = [`topSide${this.componentName}`,`head${this.componentName}`,`ILS${this.componentName}`,`IRS${this.componentName}`,`rightSide${this.componentName}`,`foot${this.componentName}`,`nav${this.componentName}`,`IBS${this.componentName}`,`ITS${this.componentName}`];
            

        //    this.evenColumnWidth = Math.floor((100/columnsCount));
        //    this.evenRowWidth = Math.floor((100/rowsCount));
        this.evenColumnWidth = Math.floor((100/ this.columnsCount));
        this.evenRowWidth = Math.floor((100/ this.rowsCount));
        // containerPagesClassy
        // this.getSelectionData
     
this.locationUrl = UrlPlaceContent;
            this.style = new function(){
                this.backgroundColor = "green";
                this.width = "100%";
                this.height = "100%";
                this.display = "grid";

            }
            // this.layout = ['topSide topSide topSide topSide','topSide','topSide','',''];
            this.layout = `
            'topSide${this.componentName} topSide${this.componentName} topSide${this.componentName} topSide${this.componentName} topSide${this.componentName}'
            'head${this.componentName} ILS${this.componentName} ITS${this.componentName} IRS${this.componentName} rightSide${this.componentName}' 
            'head${this.componentName} ILS${this.componentName} nav${this.componentName} IRS${this.componentName} rightSide${this.componentName}'
             'head${this.componentName} ILS${this.componentName} IBS${this.componentName} IRS${this.componentName} rightSide${this.componentName}' 
             'foot${this.componentName} foot${this.componentName} foot${this.componentName} foot${this.componentName} foot${this.componentName}'
            `;
          
            this.customRowWidth = '5% 5% 83% 2% 5%';

            this.customColumnWidth = '5% 1% 88% 1% 5%';
       
        }

        // DIvclass = new ContainerClass.createDivLayoutClass(containerPagesClassy,classCreationdataX);
    
        // DIvclass.innerMethod(DIvclass);
        // console.log('THIS IS THE CLASS CREATION',"DiviA",' DIvclass.getElementInnerclass', DIvclass.getElementInnerclass)

        // let DIvclassis = new ContainerClass(containerPagesClassy,classCreationdataX);

        // DIvclassis.getElementsSelection('teeest');

        
let data_layout_json_array = new function(){
    this.tableRows = '3';
    this.tableDatas = '7';
    this.tableSidesWidth = '2.5%';
    this.addExpandableWindow = 'false';
    this.leftSide = 'aye';
    this.innerLeftSide = 'aye';
    this.rightSide = 'aye';
    this.rightSide = 'aye';
this.name ='';
this.getElement ='';
this.innerElement ='';
}

        let newTablo = new ContainerClass.createTableClass(containerPagesClassy,data_layout_json_array);
        newTablo.innerMethod(); 

        // containerPagesClassy.paginationMethod();
//         let Rasengan = document.getElementById("rasengan");
// let OrdersWind = document.getElementById("OrdersWindow");

        //////////////////////////////////////////////////////// EVENTISTENER USERPLUS

      


        //////////////////////////////////////////////////CreateContent


        /////////////////////////////////////////// END CREATE content

            //////////////////////////////////////////////////CreateContentData


        /////////////////////////////////////////// END CREATE content data



// let containeruserPlusButton  = document.getElementById(containertypeString+'userPlus');
// containeruserPlusButton.addEventListener('click',function (event) {
//     event.preventDefault();
//     console.log('yo this is da xontainerzPlus')
//     let containerpopup = document.getElementById(containertypeString+'userPopUp');
//     let widthValue = '70';
//     containerpopup.style.width =widthValue+'%';
//     containerpopup.style.left =((100-widthValue)/2)+'%';
//     let containerTitle = document.getElementById(containertypeString+'contentTitle');
//     let containerinnerContent = document.getElementById(containertypeString+'innerContent');
//     containerTitle.innerHTML = '';
//     containerTitle.innerHTML = 'Create Container';

//     // containerinnerContent.innerHTML = '';
//     containerpopup.style.display ='block';
// // console.log('yo this is da userPlus')
// })

/////////////////////////////////////////////////////// END EVENTLISTENER USERPLUS


     
       


})


////////////////////////////////////////
 







