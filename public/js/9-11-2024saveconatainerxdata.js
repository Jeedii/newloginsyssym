// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
//////////////////////////////////////////
let dynamic_containers_page_map =new Map();
// this.dynamic_variables_map.
let functions_containers =new Map();
let innerFunctions_containers =new Map();
let eListeners_containers =new Map();
let variables_containers =new Map();
let elements_containers =new Map();
let stateVariables_containers =new Map();

variables_containers.set(`testvar`, 'xxxxeListeners');

dynamic_containers_page_map.set(`variables`, variables_containers);
functions_containers.set(`innerFunctions`, innerFunctions_containers);
dynamic_containers_page_map.set(`eListeners`, eListeners_containers);
dynamic_containers_page_map.set(`elements`, elements_containers);
dynamic_containers_page_map.set(`stateVariables`, stateVariables_containers);

dynamic_containers_page_map.set(`functions`, functions_containers);

let classes_containers =new Map();

dynamic_containers_page_map.set(`classes`, classes_containers);
/////////////////////////



class ContainerClass{

    constructor(appz ,type){

        this.type = type;
console.log('container this.type',this.type)
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
this.currentPage = 1;
this.rowsPerPage = 2; // Show 1 row per page
this.databaseRows =this.appz.length;

this.configuratorx ='';
this.eventListenerCollection=[];

this.dynamic_storage_map =new Map();
// this.dynamic_variables_map.
this.functions =new Map();
this.innerFunctions =new Map();
this.eListeners =new Map();
this.variables =new Map();

this.functions.set(`variables`, this.variables);
this.functions.set(`innerFunctions`, this.innerFunctions);
this.functions.set(`eListeners`, this.eListeners);

this.dynamic_storage_map.set(`functions`, this.functions);

this.classes =new Map();
this.dynamic_storage_map.set(`classes`, this.classes);







    }


    // Function to add event listeners and store them
addEventListenerToElement(element, event, handler) {
    let adisim = this;
    this.adisip = 'cdcdcd';
    element.addEventListener(event, handler);
    window.globalmyAppX.eventListeners.push({ element, event, handler });
    // adisim.eventListenerCollection.push({ element, event, handler });
}
   toggleDropdown(page) {

    this.adisi =this;
    console.log('you are at the toggledropdown')
        this.adisi.dropdownMenu = document.getElementById(`dropdownMenu_${this.adisi.type}`);
        // dropdownMenu.style.width='5%'; 
        // document.querySelector('.dropdown-btn_container').textContent = page;

        this.adisi.dropdownMenu.style.display = this.adisi.dropdownMenu.style.display === 'block' ? 'none' : 'block';
      }

      
     insertSearchFunction(){
        this.adisim = this;
        let adisip = this;
        console.log('this is the inner search function Im logging!!');
        this.outerSearchDiv = document.createElement('div');
        this.outerSearchDiv.style.width = '100%';
        this.outerSearchDiv.style.height = '100%';
        this.outerSearchDiv.style.display = 'flex';
        this.outerSearchDiv.style.placeItems = 'center';
        this.outerSearchDiv.style.justifyContent = 'center';
        this.outerSearchDiv.style.backgroundColor = 'green';
        this.createSearchBar = document.createElement('input');
        this.createSearchBar.setAttribute('id',`searchbar_${this.adisim.type}`)
        this.createSearchBar.style.width = '50%';
        this.outerSearchDiv.appendChild(this.createSearchBar);
let searchBar = this.createSearchBar;
        this.layoutPartSelection = document.getElementById(`${this.adisim.type}createDivwUserFormITSmainLayout`);

        this.layoutPartSelection.appendChild(this.outerSearchDiv);

        /////////////////////////////////////

async function LaravelSearchFunctiona( LWHnotey, adisimi) {
    window.globalmyAppX.functions['LaravelSearchFunctiona'] = LaravelSearchFunctiona;
        dynamic_containers_page_map.get('functions').set('LaravelSearchFunctiona',LaravelSearchFunctiona);


let adisim = adisimi;
// let Sandies = this;
console.log(' this is thecallLaravelCheckFunctiona where',LWHnotey.where,'lwhnote',LWHnotey,'value',' adisimi', adisimi)
// let seenINHWAtaskist = [];
// let AQuaCreateOrder =JSON.stringify(
//   JOrderdetails, function(key, val) {
// if (val != null && typeof val == "object") {
//   if (seenINHWAtaskist.indexOf(val) >= 0) {
//       return;
//   }
//   seenINHWAtaskist.push(val);
// }
// return val;
// }
//   // Add any data you want to send to the server
// )
  
try {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const data = {
variable1: 'JSON.stringify(datax)',
variable2: LWHnotey.where,
variable3: JSON.stringify(LWHnotey),
variable4: LWHnotey.router,

}
// variable4: JSON.stringify(AQuaCreateOrder),;
    // const response = await fetch('{{ route("updatejson.save")}}', {
      const response = await fetch('/searchdatabase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify(data),
    });
    console.log('result does it really workAA');

    if (!response.ok) {
      console.log('result does it really workyy');
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    // Process the result from Laravel
    
var oldDiv = document.getElementById('OrdersWindow');

// adisim.renderPage('1','1',adisim);
if(LWHnotey.value !== ''){
    adisim.createPaginationLinks(result,'searchTime');
    
    }
if(LWHnotey.value == ''){
    adisim.createPaginationLinks(result,'firstTime');
}

// adisi.createPaginationContent(adisi.configuratorx,result,'firstTime');
// oldDiv.innerHTML = '';
 

// aapioFunction;
// aapioBFunction;



// Define the variable you want to pass
// var myVariable = result[0].data;

// Create a click event
// var event = new MouseEvent('click', {
//     bubbles: true,
//     cancelable: true,
//     view: window
// });

// Set a property on the event object to pass the variable
// event.myVariable = myVariable;
// event.pageIndex = LWHnotey.index;

// Dispatch the click event on the element
// document.getElementById('reloaderContento').dispatchEvent(event);
// let newDivXPagination = document.getElementById('newDivXpagination')
// let reloaderContento = document.getElementById('reloaderContent').dispatchEvent(event);
// newDivXPagination.innerHTML = '';

// newDivXPagination.innerHTML = result[1];

    console.log('result DB does it really work resultadas', result, 'result[0].data',oldDiv);
    console.log(result);
    // Livewire.emit('saveIndividualValues');
} catch (error) {
    // Handle errors
    // console.log('result does it really work');
     console.log('result does it really workB9');
    console.error(error);

    // You can rethrow the error or handle it in a specific way
    throw error;
}
console.log('result does it really work C Sandies');
}

////////////////////////////

        this.adisim.addEventListenerToElement(this.createSearchBar,'input',function (event) {
            this.adisiii = document.getElementById(`searchbar_${this.adisim.type}`);
console.log('Im logging!!',event,this.adisiii,this.adisiii.value,'this.adisim',this.adisim);

// globalRoute_container, {/searchdatabase
            this.LWHnotey = new function(){
          
          
          this.index = '1'; 
          this.where = `liveSearch_${adisip.type}`; 
          this.value = searchBar.value;
          this.parentIndex = 0;
          this.router = '';
          this.whatFunction = 'showAll';
          
          }
          if(this.adisiii.value == '/searchdatabase'){
            this.LWHnotey.router = '/globalRoute_container';

          }
        //     // if(btnState == 'off'){
        //       console.log("SearchField AddEventlistener", packageRecovery.value );
          
                  // Now, call the function
                LaravelSearchFunctiona( this.LWHnotey, this.adisim)
          .catch((error) => {
            // Handle any unhandled promise rejection here
            console.error('Unhandled promise rejection:', error);
          });
              // testDIV.appendChild(SaveButtonChange)
              // SaveButtonChange.style.display="inline";
            //   SaveButtonChange.style.opacity="100%";
            // }
          
            // btnState = 'on';
          
          
          }.bind(this));
            // document.getElementById('xContainerxcreateDivwUserFormITSmainLayout').innerHTML = '';




     }

createPaginationLinks(searchResult,timeX){
    // dynamic_containers_page_map.get('functions').set('createPaginationLinks',searchRenderPage);
 
    let adisi = this;

  let paginatedData =containerPaginationData;
  dynamic_containers_page_map.get('stateVariables').set('paginatedData',paginatedData);

    let currentPage = paginatedData.current_page;
    dynamic_containers_page_map.get('stateVariables').set('currentPage',currentPage);

let totalPages = paginatedData.last_page;
dynamic_containers_page_map.get('stateVariables').set('totalPages',totalPages);

let perPage = paginatedData.per_page;
dynamic_containers_page_map.get('stateVariables').set('perPage',perPage);
let maxPageLinks = 4; // Only show 3 links at a time
dynamic_containers_page_map.get('stateVariables').set('maxPageLinks',maxPageLinks);

if(searchResult){

  paginatedData = searchResult;
//   let adisi = this;
//  paginatedData = containerPaginationData;
  currentPage = paginatedData.current_page;
totalPages = paginatedData.last_page;
perPage = paginatedData.per_page;
maxPageLinks = 4;
  console.log('you are at the pagination links createPaginationLinks() paginatedDatax',paginatedData,'searchResult',searchResult);

}


// Render the first page
if(totalPages == 1){
    // break
}
if(timeX == 'firstTime'){
renderPage(currentPage,'1',adisi,'firstTime');
}
if(timeX == 'searchTime'){
    console.log('searchTimeXX');
    searchRenderPage(currentPage,'1',adisi,'firstTime',searchResult);
    }
// dropUpPagination();


////////////////////////////////////////////////////////////


async function searchRenderPage(pageNumber,currentPagerz,adisi,timeX,searchResult) {

    dynamic_containers_page_map.get('functions').set('searchRenderPage',searchRenderPage);

    // paginatedData = searchResult;

    // adisi = this;
//     paginatedData = searchResult;
//    currentPage = paginatedData.current_page;
//   totalPages = paginatedData.last_page;
// perPage = paginatedData.per_page;
// maxPageLinks = 4;


    let currentPagex = currentPagerz;
    let gotoPage = pageNumber;
    console.log('you are at the pagination links renderPage()','pageNumbero',pageNumber,'paginatedDatax',paginatedData);
//    createMultiPagination('aaapss','ssdsd');
    // Fetch data for the requested page
    let currentPageData = paginatedData.data.filter((_, index) => {
        return index >= (pageNumber - 1) * perPage && index < pageNumber * perPage;
    });
    // Clear the current content 
    // document.getElementById('content-wrapper').innerHTML = '';
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
    // 
    document.getElementById(`${adisi.type}createDivwUserFormnavmainLayout`).innerHTML ='';

    let newTablo = new ContainerClass.createTableClass(adisi,data_layout_json_array);
    newTablo.innerMethod(); 
    adisi.createPaginationContent(adisi.configuratorx,paginatedData.data,'searchTime'); 
//CHECKED 3//
    // if(totalPages !== 1){
        // break
  
   renderPaginationControls(adisi,'1');
// }
//CHECKED 4//
    console.log('you are at the pagination links renderPage(B) currentPageData',currentPageData,'newTablo',newTablo);

    // Display the new content for the selected page
    // currentPageData.forEach(item => {
    //     let contentHtml = `<div>${item.your_field}</div>`;
    //     document.getElementById('content-wrapper').insertAdjacentHTML('beforeend', contentHtml);
    // });

    // Render pagination controls
 
    
  
    // document.getElementById("createTableClasslayoutInnerDiv").innerHTML ='XXAA0X';

    // document.getElementById("createTableClasslayoutInnerDiv").innerHTML = 'XXX';

}

/////////////////////////////////////////////////////////////
async function renderPage(pageNumber,currentPagerz,adisi,timeX) {
    dynamic_containers_page_map.get('functions').set('renderPage',renderPage);

    let currentPagex = currentPagerz;
    let gotoPage = pageNumber;
    console.log('you are at the pagination links renderPage()','pageNumbero',pageNumber,'paginatedDatax',paginatedData);
//    createMultiPagination('aaapss','ssdsd');
    // Fetch data for the requested page
    let currentPageData = paginatedData.data.filter((_, index) => {
        return index >= (pageNumber - 1) * perPage && index < pageNumber * perPage;
    });
    console.log('you are at the pagination links renderPage(B) currentPageData',currentPageData);
    // Clear the current content 
    // document.getElementById('content-wrapper').innerHTML = '';

    // Display the new content for the selected page
    // currentPageData.forEach(item => {
    //     let contentHtml = `<div>${item.your_field}</div>`;
    //     document.getElementById('content-wrapper').insertAdjacentHTML('beforeend', contentHtml);
    // });

    // Render pagination controls
 
    
       let LWHnotex = new function(){

        this.currentPage =  currentPagerz;
        this.clickButton = gotoPage;
        this.gotoPage = gotoPage;
        this.whatFunction = 'showAll';
       }
    try {
      
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      console.log('callLaravelFunctionPagination LWHnotexxaas',LWHnotex,'clickedButton','clickedButton','csrfToken',csrfToken);
    
      const data = {
    variable1: JSON.stringify(LWHnotex),
    variable2: 'pagination',
    variable3: JSON.stringify(LWHnotex),
    };
        // const response = await fetch('{{ route("updatejson.save")}}',  {
          const response = await fetch(globalRoute_container, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify(data),
        });

        const resultada = await response.json(); 



        // const responseB = await fetch('/vectorsavingss?page=' + clickedButton, {
        //     method: 'GET',
        //     dataType: 'html',
        //     headers: {
        //         'Content-Type': 'text/html',
        //         'X-CSRF-TOKEN': csrfToken,
        //     },
        // });
        // document.getElementById("createTableClasslayoutInnerDiv").innerHTML ='XX0X here comes the fresh  tables';
        
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
        
        document.getElementById(`${adisi.type}createDivwUserFormnavmainLayout`).innerHTML ='';

        const dynamicMap_RenderPage = new Map();
        dynamicMap_RenderPage.set(`createTableClass_renderPage`, `Value of aap`);
      console.log('dynamic variables testing',adisi.dynamic_storage_map, 'xxdynamic_containers_page_map',dynamic_containers_page_map,dynamicMap_RenderPage.get('createTableClass_renderPage')) ; 
// for (let ii = 0; ii < 5; ii++) {
//     // dynamicMap_RenderPage.set(`createTableClass_renderPage${ii}`, `Value of aap${ii}`);
// }

// adisi.dynamic_variables_map
        let newTablo = new ContainerClass.createTableClass(adisi,data_layout_json_array);
        newTablo.innerMethod(); 
        adisi.createPaginationContent(adisi.configuratorx,resultada,'firstTime'); 

        
        console.log('result does it really workAA data',data,'response',response,'resultada',resultada,'adisi',adisi);
    
        if (!response.ok) {
          console.log('result does it really workyy');
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // const result = await response.json();
    }catch (error) {
        console.error('An error occurred:', error);
    }

    if(totalPages !== 1){
        // break
  
    renderPaginationControls(adisi,gotoPage);
}
    document.querySelector(`.dropdown-btn_${adisi.type}`).textContent = gotoPage;

    // document.getElementById("createTableClasslayoutInnerDiv").innerHTML ='XXAA0X';

    // document.getElementById("createTableClasslayoutInnerDiv").innerHTML = 'XXX';

}
function dropUpPagination(currentPage,adisii){
    dynamic_containers_page_map.get('functions').set('dropUpPagination',dropUpPagination);
    console.log('dynamic_containers_page_mapdynamic_containers_page_map',dynamic_containers_page_map)

let paginationHtml = '';
let totaliaPages = `<p>/6</p>`;
    let adisiii =adisii;
    paginationHtml += `<div class="dropdown_${adisii.type}"style="position:absolute; display:inline-flex; z-index:100; left:1%; bottom:0%; box-sizing:border-box;">
    <div class="dropdown-btn_${adisii.type}" id="dropdown-btn_${adisii.type}"style=" margin:11% 0%; box-sizing:border-box; position:relative; left:1%; background-color:#cadbe6;font-weight:9; color:black; height:100%; min-width:50px; width:auto; justify-content:center;  place-items:center;" ><p style="display:flex; left:10%; justify-content:center;  place-items:center;">${currentPage}</p></div>
    <div class="dropdown-menu" id="dropdownMenu_${adisii.type}" style="bottom:100%; max-height: 220px; place-items: center; overflow-Y:scroll;  width: 60%;">`;
    
    for(let ii=1; ii<=totalPages;ii++){
        paginationHtml += `
    <div class="dropdown-item_${adisii.type}" id="dropdown-item_${adisii.type}" style="width:100%;place-items: center; display:flex;">${ii}</div>`;
    console.log('totalpages this is pages',totalPages, ii)
    
    }
    paginationHtml += `
    </div><div style="z-index:109; left:1%; position:relative; margin:11% 0%; box-sizing:border-box; background-color:#184a69; color:grey; min-width:50px; width:auto; height:100%;  justify-content:center;  place-items:center;"><p style="display:flex; justify-content:center;  place-items:center;">${totalPages}</p></div>
    </div>    
    `;
    
    
    
        // if (currentPage < totalPages) {
        //     paginationHtml += `<button id="loadMore_X">Load More</button>`;
        // }
        console.log('you are at the pagination links createPaginationLinks()',paginationHtml);
        let footerX =    document.getElementById(`${adisii.type}createDivwUserFormfootmainLayout`);
        // box-sizing: border-box;
        footerX.style.boxSizing = 'border-box';
        // footerX.style.padding = '10px';
        // padding: 10px;
        footerX.innerHTML += paginationHtml;
    
        document.getElementById(`dropdown-btn_${adisii.type}`).addEventListener('click', (event) => adisi.toggleDropdown(event.target.innerHTML));
        // document.getElementById("dropdown-item_container").addEventListener('click', () => adisi.selectOption());
    
        document.getElementsByClassName(`dropdown-item_${adisii.type}`).forEach(function(item, index) {
    item.addEventListener('click', (event) => selectOption(event.target.innerHTML,currentPage,adisi));
    
    // Define what happens when you hover over the element
    item.addEventListener("mouseover", function() {
    item.style.backgroundColor = "lightblue"; // Change background color
    item.style.color = "white";               // Change text color
    });
    
    // Define what happens when you stop hovering
    item.addEventListener("mouseout", function() {
    item.style.backgroundColor = ""; // Reset background color
    item.style.color = "";           // Reset text color
    });
        })
        // ("dropdown-item_container").addEventListener('click', () => adisi.selectOption());
    
    
        
    
    // Hide the dropdown when clicking outside
    document.addEventListener('click', (event) => {
    if (!event.target.closest(`.dropdown_${adisii.type}`)) {
    //   dropupList.style.display = 'none';
    const dropdownMenu = document.getElementById(`dropdownMenu_${adisii.type}`);
    dropdownMenu.style.display= 'none';
    console.log('close dropdownclick outside',dropdownMenu)
    
    }
    });
    
    function selectOption(option,currentPager,adisi) {
      dynamic_containers_page_map.get('functions').set('selectOption',selectOption);
        // this.adisi= this;
        currentPage = option;
        console.log('you are at the toggledropdown selectOptions')
        goToPage(Number(option),currentPage,adisi);
        // renderPaginationControls(adisi,option);
        document.querySelector(`.dropdown-btn_${adisi.type}`).textContent = option;
        document.getElementById(`dropdownMenu_${adisi.type}`).style.display = 'none';
      }
    
    function goToPage(gotoPagex,currentPagex,adisi) {
        dynamic_containers_page_map.get('functions').set('goToPage',goToPage);

        console.log('goToPage function',gotoPagex,',currentPage',currentPagex)
        // document.getElementById("createTableClasslayoutInnerDiv").innerHTML ='XX0X';
        currentPage = gotoPagex;
        if (gotoPagex >= 1 && gotoPagex <= totalPages) {
            renderPage(gotoPagex,currentPagex,adisi );
        }
    }
    }

function renderPaginationControls(adisii,gotoPage) { 
    // window.globalmyAppX.functions['LaravelSearchFunctiona'] = LaravelSearchFunctiona;
    dynamic_containers_page_map.get('functions').set('renderPaginationControls',renderPaginationControls);
    console.log('renderPaginationControls');
    let adisi = adisii;
    let paginationHtml = '';
    
    // paginationHtml += `<button ${currentPage !== 1 ? 'disabled' : ''}style="${currentPage !== 1 ? 'background-color:blue' : ''}" id="firstPage">First </button>`;
    // Previous Button
    paginationHtml += `<button style="margin-right:5px; color:white;" ${currentPage === 1 ? 'disabled' : ''} id="previous_X"> << </button>`;

    // Pagination numbers (only show max 3)
    // let startPage = Math.max(1, currentPage - 1);
    dynamic_containers_page_map.get('variables').set('startPage',1);

    let startPage = dynamic_containers_page_map.get('variables').get('startPage');

    dynamic_containers_page_map.get('variables').set('linksonEachSide',1);
    let linksonEachSide = dynamic_containers_page_map.get('variables').get('linksonEachSide');

    dynamic_containers_page_map.get('variables').set('countLinksToShow',3);

    let countLinksToShow = dynamic_containers_page_map.get('variables').get('countLinksToShow');
    
    // let endPage = Math.min(startPage + maxPageLinks, totalPages);
    // totalPages =3;
    dynamic_containers_page_map.get('variables').set('endPage',totalPages);

    let endPage =  dynamic_containers_page_map.get('variables').get('endPage');

    currentPage =gotoPage;

if(totalPages > countLinksToShow){
    if(currentPage == 1){
        // startPage = currentPage - linksonEachSide;
        startPage =2
        endPage = countLinksToShow+1;
    
    
    }
   


    
if(currentPage !== 1 && currentPage!== (totalPages)){
    startPage = currentPage - linksonEachSide;
    endPage = currentPage + linksonEachSide;
    if(currentPage == 2){
        // startPage = currentPage - linksonEachSide;
        startPage =2
        endPage = countLinksToShow+1;
    
    
    }
    if(currentPage == (totalPages-1)){
        // startPage = currentPage - linksonEachSide;
        startPage =(totalPages)-countLinksToShow;
        endPage = (totalPages-1);
    
    
    }


}
if( currentPage== (totalPages)){
    startPage = (currentPage) - (countLinksToShow);
    endPage = (totalPages-1);


}


}
// startPage += 1;
// endPage += 1;
if(totalPages > 3){
paginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${currentPage === 1 ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="page_X_1" data-page="1" name="paginationButton" ${startPage === 1 ? 'class="active"' : '' }>1</button></span>`;
}
if(currentPage > 3){

    paginationHtml += `<span style="display: flex; width: 50px; height: 100%;background-color: lavender; justify-content:center; ${currentPage > 3 ? 'display:flex;' : 'display: none;' }"><button id="morePrev_container" data-page="morePrev" name="paginationMoreButton" ${currentPage > 3 ? 'class="active"' : '' }>...</button></span>`;

}

paginationHtml += `<div id="middlePagesDiv" style="display:flex; height:100%;">`;
    for (let i = startPage; i <= endPage; i++) {
        // if( i == startPage){

        //     paginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${i === currentPage ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="page_X_${i}" data-page="${i}" name="paginationButton" ${i === currentPage ? 'class="active"' : '' }>1</button></span>`;


        // }
        console.log('startpage endpage i', startPage,endPage,i)
       

        paginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${i === currentPage ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="page_X_${i}" data-page="${i}" name="paginationButton" ${i === currentPage ? 'class="active"' : '' }>${i}</button></span>`;
       
       
        
    }
    paginationHtml += `</div>`;
    // if( i == endPage){

        // if(endPage < (totalPages -1)){

            paginationHtml += `<span style="display: flex; width: 50px; height: 100%;background-color: lavender; justify-content:center; ${currentPage < (totalPages -2) ? 'display:flex;' : 'display: none;' }"><button id="moreNext_container" data-page="moreNext" name="paginationMoreButton" ${currentPage < (totalPages -2) ? 'class="active"' : '' }>...</button></span>`;
        
        // }
        if(totalPages > 3){
        paginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${totalPages === currentPage ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="page_X_${totalPages}" data-page="${totalPages}" name="paginationButton" ${totalPages === currentPage ? 'class="active"' : '' }>${totalPages}</button></span>`;
        }
    // }


    // Next Button
    paginationHtml += `<button style="margin-left:5px; color:white;" ${currentPage === totalPages ? 'disabled' : ''} id="next_X"> >> </button>`;

    // paginationHtml += `<button ${currentPage !== 1 ? 'disabled' : ''}style="${currentPage !== 1 ? 'background-color:blue' : ''}" id="lastPage"> Last </button>`;
    
    // Load More Button

//     paginationHtml += `<div class="dropdown_container"style="position:absolute; display:flex; z-index:100; left:1%; bottom:0%; box-sizing:border-box;">
//     <div class="dropdown-btn_container" id="dropdown-btn_container"style=" margin:20% 0%; box-sizing:border-box; background-color:white; color:blue; height:100%; width:70px; justify-content:center;  place-items: center;" >1</div>
//     <div class="dropdown-menu" id="dropdownMenu_container" style="bottom:100%; max-height: 220px; place-items: center; overflow-Y:scroll;  width: 60%;">
//       <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">1</div>
//       <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">2</div>
//       <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">3</div>
//       <div class="dropdown-item_container" id="dropdown-item_container"style="width:100%;place-items: center; display:flex;">4</div>
//       <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">5</div>
//       <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">6</div>
//       <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">7</div>
//       <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">8</div>
//       <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">9</div>
//       <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">10</div>
//     </div>
//   </div>`;

// paginationHtml += `<div class="dropdown_container"style="position:absolute; display:flex; z-index:100; left:1%; bottom:0%; box-sizing:border-box;">
// <div class="dropdown-btn_container" id="dropdown-btn_container"style=" margin:20% 0%; box-sizing:border-box; background-color:white; color:blue; height:100%; width:70px; justify-content:center;  place-items: center;" >1</div>
// <div class="dropdown-menu" id="dropdownMenu_container" style="bottom:100%; max-height: 220px; place-items: center; overflow-Y:scroll;  width: 60%;">`;

// for(let ii=1; ii<=totalPages;ii++){
//     paginationHtml += `
// <div class="dropdown-item_container" id="dropdown-item_container" style="width:100%;place-items: center; display:flex;">${ii}</div>`;
// console.log('totalpages this is pages',totalPages, ii)

// }
// paginationHtml += `
// </div>
// </div>`;



//     // if (currentPage < totalPages) {
//     //     paginationHtml += `<button id="loadMore_X">Load More</button>`;
//     // }
//     console.log('you are at the pagination links createPaginationLinks()',paginationHtml);
    let footerX =    document.getElementById("xContainerxcreateDivwUserFormfootmainLayout");
    // box-sizing: border-box;
    footerX.style.boxSizing = 'border-box';
    // footerX.style.padding = '10px';
    // padding: 10px;
    // footerX.innerHTML = '';
    
    let mainPagcontainer = document.createElement('div');
    mainPagcontainer.setAttribute('id','innerPaginationContainer');
    mainPagcontainer.style.width = '100%';
    mainPagcontainer.style.height= '100%';
    mainPagcontainer.style.display= 'flex';
    mainPagcontainer.style.placeItems= 'center';
    mainPagcontainer.style.justifyContent= 'center';
    mainPagcontainer.style.backgroundColor= 'grey';
    mainPagcontainer.innerHTML = '';
    mainPagcontainer.innerHTML = paginationHtml;
 
    footerX.innerHTML = '';
    footerX.appendChild(mainPagcontainer);
    
    // 
    dropUpPagination(gotoPage,adisii);

    // let 
    // paginationContentDB.style.boxSizing= 'border-box';
    // paginationContentDB.style.justifyContent= 'center';
    // paginationContentDB.style.display= 'flex';


      document.getElementById('moreNext_container').addEventListener('click', () => {
                    console.log('moreNExta','endPage',endPage,'startPage',startPage)
                   
        // goToPage((currentPage - 1),currentPage,adisi)
    });
                // Attach event listeners to buttons

           
                document.getElementById('previous_X').addEventListener('click', () => goToPage((currentPage - 1),currentPage,adisi));
                document.getElementById('next_X').addEventListener('click', () => goToPage((currentPage + 1),currentPage,adisi));

                
                document.getElementsByName('paginationMoreButton').forEach(button => {
                    button.addEventListener('click', (event) => {

                        if(event.target.getAttribute('data-page') == 'moreNext'){
                            console.log('moreNExta by name',event.target.getAttribute('data-page'),'endPage',endPage,'startPage',startPage);
//                             document.getElementById('middlePagesDiv').innerHTML = "";
// let newpaginationHtml = '';
// startPage +=1;
// endPage +=1;
//                             for (let i = startPage; i <= endPage; i++) {
//                                 // if( i == startPage){
                        
//                                 //     paginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${i === currentPage ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="page_X_${i}" data-page="${i}" name="paginationButton" ${i === currentPage ? 'class="active"' : '' }>1</button></span>`;
                        
                             
//                                 // }
//                                 console.log('startpage endpage i', startPage,endPage,i)
                               
                        
//                                 newpaginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${i === currentPage ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="page_X_${i}" data-page="${i}" name="paginationButton" ${i === currentPage ? 'class="active"' : '' }>${i}</button></span>`;
                               
                               
                                if((currentPage + countLinksToShow)> totalPages){
                                    currentPage = totalPages;

                                }else{

                                    currentPage = currentPage + countLinksToShow;
                                }
//                             }
                            // document.getElementById('middlePagesDiv').innerHTML = newpaginationHtml;
                            goToPage((currentPage ),currentPage,adisi)
                        }

                        if(event.target.getAttribute('data-page') == 'morePrev'){
                            console.log('morePrev by name',event.target.getAttribute('data-page'),'endPage',endPage,'startPage',startPage);
                            if((currentPage - countLinksToShow)< 1){
                                currentPage = 1;

                            }else{

                                currentPage = currentPage - countLinksToShow;
                            }
//                             }
                        // document.getElementById('middlePagesDiv').innerHTML = newpaginationHtml;
                        goToPage((currentPage ),currentPage,adisi)
                        }

                    })
                })
            
                document.getElementsByName('paginationButton').forEach(button => {
                    button.addEventListener('click', (event) => {
                        let page = parseInt(event.target.getAttribute('data-page'));
                        console.log('goToPage function pageclicked',page)
                        // adisi.selectOption(page,currentPage,adisi)
                        goToPage(page,currentPage,adisi);

                    });
                })
                // document.querySelector('.dropdown-btn_container').textContent = gotoPage;
     
}

// function aaap(){


// }
// function selectOption(option,currentPage,adisi) {
//     // this.adisi= this;
//     currentPage = option;
//     console.log('you are at the toggledropdown selectOptions')
//     goToPage(option,currentPage,adisi);
//     document.querySelector('.dropdown-btn_container').textContent = option;
//     document.getElementById('dropdownMenu_container').style.display = 'none';
//   }

function goToPage(gotoPagex,currentPagex,adisi) {
    console.log('goToPage function',gotoPagex,',currentPage',currentPagex)
    // document.getElementById("createTableClasslayoutInnerDiv").innerHTML ='XX0X';
    currentPage = gotoPagex;
    if (gotoPagex >= 1 && gotoPagex <= totalPages) {
        renderPage(gotoPagex,currentPagex,adisi );
    }
}

function loadMore() {
    console.log('loadmoreFunction');
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPagex,currentPagex,adisi);
    }
}
}

    async createMultiPagination(clickedButton, LWHnotex ) {

        // window.globalmyAppX.functions['callLaravelFunctionPagination'] = createMultiPagination;
    //    LWHnote  = new function(){
    // this.value = "TRUE";
    
    
    
    
    // this.index = 'indexSplitted[1]'; 
    // this.where = 'pagination'; 
    
    // this.state = 'TRUE'
    // this.parentIndex = 0;
    
    // }
    // ;
        var newDivXpagination = document.getElementById('newDivXpagination');
        // console.log('callLaravelFunctionPagination LWHnote clickedButton, LWHnotex newDivXpagination',clickedButton, LWHnotex, newDivXpagination, newDivXpagination.children, newDivXpagination.children[0].children[0].children);
    
        // Create a temporary container element
    var tempContainer = document.createElement('div');
    
    // Set the HTML content of the container to your received HTML
    tempContainer.innerHTML = newDivXpagination.innerHTML;
    tempContainer.setAttribute('id', 'paginatrix');
    
    // let PaginationItemsParent = newDivXpagination.children[0].children[0].children[1].children[1].children[0];
    let PaginationItemsParent = newDivXpagination.children[0].children[0];
    // let PaginationChildItems = newDivXpagination.children[0].children[0].children[1].children[1].children[0].children;
    let PaginationChildItems = newDivXpagination.children[0].children[0].children;
    
    
    console.log('start async function callLaravelFunctionPagination CLASS containers',globalRoute_container,'containerPaginationData',containerPaginationData);

    
    console.log('callLaravelFunctionPagination LWHnote clickedButton 22 , LWHnotex newDivXpagination',clickedButton, LWHnotex, newDivXpagination, newDivXpagination.children, newDivXpagination.children[0].children[0].children);
    
    
    // var newSpann= document.createElement('li');
    //                   newSpann.innerHTML = '...';
    //                   newSpann.setAttribute('id', 'loadMorePrev')
    //                   newSpann.setAttribute('name', 'MorePrev')
    //                   // parentalItems.appendChild(newSpann);
    //                   var referenceNode = PaginationItemsParent.children[2]; // Index 1 corresponds to the second list item (position 2)
    // // PaginationItemsParent.splice(2, 0, newSpann);
    // // // Insert the new list item before the reference node
    // PaginationItemsParent.insertBefore(newSpann, referenceNode);
    // let parentalItems = newDivXpagination.children[0].children[0].children[1].children[1];
    parentalItems = PaginationItemsParent;
    PaginationItems =PaginationChildItems;
    
    // var newSpannNext= document.createElement('li');
    // newSpannNext.innerHTML = '...';
    // newSpannNext.setAttribute('id', 'loadMoreNext')
    // newSpannNext.setAttribute('name', 'MoreNext')
    
    //                  let referenceNodeB = PaginationItemsParent[4];
    
    //                   PaginationItemsParent.insertBefore(newSpannNext, referenceNodeB);
    
    // Manipulate the HTML content as needed
    // let PaginationItems = tempContainer.children[0].children[0].children[1].children[1].children[0].children;
    
    
    console.log('callLaravelFunctionPagination LWHnotess', "PaginationItems", PaginationItems,'parentalItems',parentalItems);
    // For example, you can find elements by class name, ID, etc., and modify their attributes or content
    // var elements = document.getElementById('paginatrix');
    console.log('callLaravelFunctionPagination LWHnote',LWHnotex,'clickedButton',clickedButton,'elements','elements','tempContainer',PaginationItems,'newDivXpagination',newDivXpagination.innerHTML);
    
    
    // 
    // // Create a new div element
    // var newSpan= document.createElement('span');
    // newSpan.setAttribute('class', 'relative z-0 inline-flex rounded-md shadow-sm')
    // newSpan.setAttribute('style', 'backgroundColor:black;')
    // newSpan.appendChild(newCollection);
    // // newD
    // console.log('newCollection[i]',newCollection, size);
    // parentalItems.appendChild(newSpan);
    
    // // Calculate the size of the DocumentFragment
    // var size = 0;
    // var childNode = newCollection.firstChild;
    // while (childNode) {
    //     size++;
    //     console.log('newCollection[i]tttt size',size, childNode);
        // childNode.style.backgroundColor = 'yellow';
    //     childNode.addEventListener('click', function (event) {
    // event.preventDefault();
    // console.log('clickeddd')
    
    //     })
    
    //     childNode = childNode.nextSibling;
    // }
    
    // for (var i = 0; i < size; i++) {
    //   // parentalItems.appendChild(newCollection[i]);
    //   console.log('newCollection[i]tttt',newCollection[i])
    // }
    
    // parentElement.parentNode.removeChild(parentElement)
    
    // ivXpagination.innerHTML = '';
    
    // newDivXpagination.insertBefore(clonedChild, lastChild);
    // newDivXpagination.innerHTML = '';
    // newDivXpagination.innerHTML = PaginationItems;
    // newDivXpagination.appendChild(PaginationItems);
    
    // Create a new div element
    // var newItem = document.createElement('span');
    // newItem.textContent = 'New Item';
    
    // // Get a reference to the last item in the div
    // var lastItem = document.getElementById('myDiv').lastElementChild;
    
    // // Insert the new item before the last item
    // lastItem.parentNode.insertBefore(newItem, lastItem);
    // exit();
    
      
    try {
      
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      console.log('callLaravelFunctionPagination LWHnotex',LWHnotex,'clickedButton',clickedButton,'csrfToken',csrfToken);
    
      const data = {
    variable1: JSON.stringify(LWHnotex),
    variable2: 'pagination',
    variable3: JSON.stringify(LWHnotex),
    };
        // const response = await fetch('{{ route("updatejson.save")}}',  {
          const response = await fetch(globalRoute, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify(data),
        });
    
        // const responseB = await fetch('/vectorsavingss?page=' + clickedButton, {
        //     method: 'GET',
        //     dataType: 'html',
        //     headers: {
        //         'Content-Type': 'text/html',
        //         'X-CSRF-TOKEN': csrfToken,
        //     },
        // });
        console.log('result does it really workAA');
    
        if (!response.ok) {
          console.log('result does it really workyy');
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const result = await response.json();
    
    
        var paginationInputField = document.getElementById('inputField');
        var paginationTotalField = document.getElementById('paginationTotals');
    
     
        
        paginationInputField.value = result.current_page;
        paginationTotalField.innerHTML = '';
        paginationTotalField.innerHTML =result.last_page;
    console.log('this is the reloader content pagination',this,'paginationInputField',paginationInputField,aapioFunction,aapioBFunction,'result',result.total,result.per_page,result,result.data )
    
    
    var setPaginationOptions = document.getElementById('options');
    for(var ixi=1; ixi<= result.last_page; ixi++){
    var optionElement = document.createElement('div');
    optionElement.setAttribute('class', 'option')
    optionElement.innerHTML = ixi;
    // optionElement.addEventListener('click', function (event) {
    //   event.preventDefault();
    //   console.log('wagwaanjaja',event.target.innerHTML);
    
      
    //   LWHnotex = new function(){
    // this.value = "TRUE";
    
    
    
    // // this.index = lastBeforePage;
    
    // this.index = event.target.innerHTML;
    // this.where = 'pagination'; 
    
    // this.state = 'TRUE'
    // this.parentIndex = 0;
    
    // }
    
    //   callLaravelFunctionPagination(LWHnotex.index, LWHnotex)
    // .catch((error) => {
    //   // Handle any unhandled promise rejection here
    //   console.error('Unhandled promise rejection:', error);
    // });
    
    
    // })
    setPaginationOptions.appendChild(optionElement);
    }
    
    appapa();
    
    
    
    // paginationInputFieldvalue.value
    
    
    // var newDivXpagination = document.getElementById('newDivXpagination');
    
    // Get all elements with the name "username"
    
    // for (var ig = 0; ig < paginationDivChildsX.length; ig++) {
    
    //   let getElementReach = paginationDivChildsX[ig].attributes.name.value;
        // var usernameInputa = paginationDivX[0].querySelectorAll('li');
        // var usernameInputass = paginationDivX[0].querySelectorAll('li');
    //     var newDivXpaginationn = document.getElementById('newDivXpagination');
    //     // console.log('clicked pagination newDivXpaginationn',newDivXpaginationn.children[0]);
    
        
    //     for (var i = 0; i < newDivXpaginationn.length; i++) {
    //       newDivXpaginationn.children[0][i].addEventListener('click', function (event) {
    //   event.preventDefault();
    //   // var newDivXpagination = document.getElementById('newDivXpagination');
    // console.log('clicked pagination first newDivXpagination',newDivXpaginationn.children[0],'event',event,'i',i);
    // console.log('clicked pagination', "usernameInputass[i]");
    
    // })
    
    //     }
    //  function calculatePaginationLinks(totalItems, itemsPerPage) {
    //     // Calculate the total number of pages
    //     var totalPages = Math.ceil(totalItems / itemsPerPage);
    //     return totalPages;
    // }
    
    
    
    
    
    
    // Example usage:
    var totalItems = result.total; // Total number of items
    var itemsPerPage = result.per_page; // Number of items per page
    // var totalPages = calculatePaginationLinks(totalItems, itemsPerPage);
    totalPages = Math.ceil(totalItems / itemsPerPage);
    console.log("Total pages needed for pagination: " + totalPages, 'PaginationItems', PaginationItems);
    // Calculate the size of the DocumentFragment
    
    // if(currentPage < 4){
    
    //////////
    
    // console.log('childArrayXX',childArray, childArray.length,childArray)
    
    
    // }
    
    
    // Get the last child element
    var lastChild = PaginationItems[(PaginationItems.length-1)];
    lastChild.setAttribute('name', 'next');
    
    let firstChild = PaginationItems[0];
    
    // Get the second-to-last child element
    var secondToLastChild = lastChild.previousElementSibling; 
    // Clone the last child
    
    // clonedChild.children[0].innerHTML = '8';
    
    // newDivXpagination.innerHTML = '';
    // newDivXpagination.innerHTML = '';
    // tempContainer.innerHTML = '';
    
    
    
    // Convert HTMLCollection to Array
    
    var childArray = Array.from(PaginationItems);
    
    NewPaginationArray = [];
    
    
    
    var newNewCollection = document.createDocumentFragment();
    NewPaginationArray.push(firstChild);
    
    newNewCollection.appendChild(firstChild)
    
    
    // for(let qw = 1; qw < totalPages+1; qw ++){
      for(let qw = 1; qw <=  totalPages; qw ++){
      // PaginationItems
    
      var clonedChild = secondToLastChild.cloneNode(true);
    
      console.log('clonedChild test clonedChild 1st totalPagesX',totalPages,'qw',qw,'PaginationItems',PaginationItems,PaginationItems[qw],'lastChild',"lastChild",'clonedChild',"'clonedChild'");
    
    // clonedChild.setAttribute('wire:key', 'paginator-page-4-page5');
    
     
    console.log('be4 clonechild',clonedChild);
    
    
    // console.log('for loop qw', qw)
      // clonedChild.setAttribute('name', qw);
      // clonedChild.style.backgroundColor = 'blue';
    
    // if(clonedChild.children[0]){
    //   clonedChild.children[0].setAttribute('wire:key', 'GotoPage(8, "page")');
    // clonedChild.children[0].setAttribute('aria-label', 'Go to page 8');
    // clonedChild.children[0].setAttribute('name', qw);
    //   clonedChild.children[0].innerHTML = qw;
    clonedChild.setAttribute('wire:key', 'GotoPage('+qw+', "page")');
    clonedChild.setAttribute('aria-label', 'Go to page '+ qw);
    clonedChild.setAttribute('name', qw);
      clonedChild.innerHTML = qw;
    
      clonedChild.setAttribute('wire:key', 'paginator-page-'+qw+'-page'+ qw);
    
      clonedChild.setAttribute('name', qw);
    
      newNewCollection.appendChild(clonedChild)
      NewPaginationArray.push(clonedChild);
    // }   
    let paginationDiv = document.getElementsByClassName("pagination");
    
      console.log('clonedChild test clonedChild last', clonedChild,'newNewCollection',newNewCollection,'paginationDiv',paginationDiv);
      console.log('for loop qw', qw, 'clonedChild',clonedChild,'NewPaginationArray',NewPaginationArray)
    
    
    }
    
    NewPaginationArray.push(lastChild);
    newNewCollection.appendChild(lastChild)
    
    console.log('for loop qw after loop', 'qw', 'clonedChild',clonedChild,'NewPaginationArray',NewPaginationArray,'newNewCollection',newNewCollection)
    // NewPaginationArray.splice(PaginationItems.length - 2, 0, clonedChild);
    
    
    
    
    console.log('NewPaginationArray',NewPaginationArray);
    for (var i = 0; i < childArray.length; i++) {
      console.log('PaginationItems[i]',[i],PaginationItems[i],'childArray ',childArray[i],'NewPaginationArray',NewPaginationArray)
    
      // childArray.removeChild(PaginationItems[i]);
      // parentDiv.appendChild(collection[i].cloneNode(true));
    // Replace old collection with new one
    // PaginationParent.appendChild(newCollection);
      // PaginationItems[i].innerHTML = 'Modified content';
    }
    
    // newDivXpagination.innerHTML = '';
    // tempContainer.innerHTML = '';
    
    
    
    var newCollection = document.createDocumentFragment();
    
    
    childArray.forEach(function(item, index) {
    
          // var clonedChild = secondToLastChild.cloneNode(true);
          item.setAttribute('wire:key', 'paginator-page-'+index+'-page'+index+'');
          item.setAttribute('wire:key', 'GotoPage('+index+', "page")');
          item.setAttribute('aria-label', 'Go to page '+index+'');
          item.setAttribute('name',index);
          if(index ==0){
            item.setAttribute('name','Previous');
    
          }
    
          if(index ==(childArray.length -1)){
            item.setAttribute('name','Next');
    
          }
        
    
      
        // newCollection.appendChild(item);
    });
    
    console.log('kizi newDivXpagination',newDivXpagination,newDivXpagination.children[0].children[0].children,'usernameInputa',"usernameInputa")
    console.log('newCollectionxx',newCollection);
    
    var size = 0;
    // var childNode = newCollection.firstChild;
    var childNode = newNewCollection.firstChild;
    
    // newSpan.appendChild(newCollection);
    let Outerspan
    
    let innerBottomSideContainer = document.getElementById('innerBottomSideContainer');
      // innerBottomSideContainer.innerHTML = '';
    
      // var newDivXpagination = document.getElementById('newDivXpagination');
      // let middleRangePagNrs = linksToShow -2;
           let startleMiddleNumber =  Math.ceil(linksToShow / 2);
           let PaglinksEachSide;
    
           let newLinkstoShowStart;
           let newLinkstoShowEnd;
        // Create a temporary container element
    // var tempContainer = document.createElement('div');
    
    // Set the HTML content of the container to your received HTML
    // tempContainer.innerHTML = newDivXpagination.innerHTML;
    // tempContainer.setAttribute('id', 'paginatrix');
    
    // let PaginationItemsParent = newDivXpagination.children[0].children[0].children[1].children[1].children[0];
    // let PaginationChildItems = newDivXpagination.children[0].children[0].children[1].children[1].children[0].children;
    
    // let parentalItems = newDivXpagination.children[0].children[0].children[1].children[1];
    
    console.log('parentalItems parentalItems newNewCollection',parentalItems,'newNewCollection',newNewCollection, newNewCollection.firstChild,newNewCollection.childNodes.length,'NewPaginationArray.length',NewPaginationArray.length,NewPaginationArray);
    
    parentalItems.innerHTML = '';
    // parentalItems.children[0].innerHTML = '';
    currentPage = result.current_page; // Example current page number
    lastBeforePage = currentPage;
    for( let rr = 0; rr<=NewPaginationArray.length-1 ; rr++){
    
            totalPages = result.last_page; // Example total number of pages
            linksToShow = 7; // Number of pagination links to show
    
             //SET THE Middlepagenr range and THe LinksToSHOW
    
     middleRangePagNrs = linksToShow -2;
           startleMiddleNumber =  Math.ceil(linksToShow / 2);
           PaglinksEachSide = (middleRangePagNrs-1) /2;
    
           newLinkstoShowStart = startleMiddleNumber - PaglinksEachSide;
           newLinkstoShowEnd =   startleMiddleNumber + PaglinksEachSide;
      console.log('parentalItems parentalItems newNewCollection rrrr',rr,parentalItems,'newNewCollection',newNewCollection, newNewCollection.firstChild,newNewCollection.childNodes.length,'NewPaginationArray.length',NewPaginationArray.length,NewPaginationArray);
    
    //   NewPaginationArray[rr].addEventListener('click', function (event) {
    //       event.preventDefault();
    
    // //CLICKED ON A NUMBER
    //       if(!isNaN(NewPaginationArray[rr].attributes.name.value)){
    
    //         console.log('parentalItems parentalItems newNewCollection rrrrxx is a number','NewPaginationArray[rr]',NewPaginationArray[rr].attributes.name.value,NewPaginationArray[rr],rr,parentalItems,'newNewCollection',newNewCollection, newNewCollection.firstChild,newNewCollection.childNodes.length,'NewPaginationArray.length',NewPaginationArray.length,NewPaginationArray);
    
    //       }
    
    
    //       //CLICKED ON NOT A NUMBER
    //       if(isNaN(NewPaginationArray[rr].attributes.name.value)){
    
    // console.log('parentalItems parentalItems newNewCollection rrrrxx not a number','NewPaginationArray[rr]',NewPaginationArray[rr].attributes.name.value,NewPaginationArray[rr],rr,parentalItems,'newNewCollection',newNewCollection, newNewCollection.firstChild,newNewCollection.childNodes.length,'NewPaginationArray.length',NewPaginationArray.length,NewPaginationArray);
    
    // }
    //   })
      //////////  BEGIN THREE DOT
    
                  // Example usage: Generate pagination links with 6 links to show
               
            // const paginationContainer = document.getElementById('pagination-container');
            // paginationContainer.innerHTML = generatePagination(currentPage, totalPages, linksToShow);
            // generatePagination(currentPage,totalPages,linksToShow);
            // parentalItems.innerHTML =
            generatePagination(currentPage,totalPages,linksToShow,rr);
    
            
    
    // NewPaginationArray[rr].addEventListener('click', function (event) {
        addEventListenerToElement(NewPaginationArray[rr],'click',  function (event) {
     
    event.preventDefault();
    
    
    console.log('firstLOG number currentPage',currentPage,'NewPaginationArray[rr]',NewPaginationArray[rr].attributes.name.value,NewPaginationArray[rr],'rr',rr);
    
    if(currentPage == "0" && NewPaginationArray[rr].attributes.name.value == 'Previous'){
      // NewPaginationArray[rr].style.backgroundColor = "yellow";
      console.log('this button is the previous ', 'clickedButton', clickedButton)
    }
    
    
    
    //CLICKED ON A NUMBER
    if(!isNaN(NewPaginationArray[rr].attributes.name.value)){
    
      console.log('parentalItems parentalItems newNewCollection rrrrxx is a number currentPage',currentPage,'NewPaginationArray[rr]',NewPaginationArray[rr].attributes.name.value,NewPaginationArray[rr],rr,parentalItems,'newNewCollection',newNewCollection, newNewCollection.firstChild,newNewCollection.childNodes.length,'NewPaginationArray.length',NewPaginationArray.length,NewPaginationArray);
      
      /////////////////////////
      
      let LWHnotex = new function(){
    this.value = "TRUE";
    
    
    
    this.index = NewPaginationArray[rr].attributes.name.value;
    this.where = 'pagination'; 
    
    this.state = 'TRUE'
    this.parentIndex = 0;
    
    }
    if(rr !=='test'){
    callLaravelFunctionPagination(LWHnotex.index, LWHnotex)
    .catch((error) => {
      // Handle any unhandled promise rejection here
      console.error('Unhandled promise rejection:', error);
    });
    
    }
    
    }
    
    
    
    
    
    currentPage = rr;
     //SET THE CURRENTPAGE ON AND THE OTHER OFF
     for(let xs = 0; xs < NewPaginationArray.length; xs++){
      // console.log()
    
      if(NewPaginationArray[xs].attributes.name.value !== rr){
    
        NewPaginationArray[xs].style.backgroundColor = '';
    console.log('these are not clcicked and have no background',NewPaginationArray[xs].attributes.name.value,NewPaginationArray[xs],
    'this one is clcicked and is currentPage',NewPaginationArray[rr].attributes.name.value,NewPaginationArray[rr])
    
    }
    
    
    // if(xs <= linksToShow){
    //   NewPaginationArray[xs].style.display = 'block';
    
    // console.log('paginationZZ show these pagination links namevalue',NewPaginationArray[xs].attributes.name.value, totalPages,'currentPage',currentPage,'linksToShow',linksToShow)
    
    // }else{
    
    //   if(xs > linksToShow){
    //   NewPaginationArray[xs].style.display = 'none';
    
    // // console.log('paginationZZ show these pagination links namevalue',NewPaginationArray[xs].attributes.name.value, totalPages,'currentPage',currentPage,'linksToShow',linksToShow)
    
    // }
    // }
    
     }
    
    
    
    
    })
    
    
    
           if(currentPage > startleMiddleNumber){
            startleMiddleNumber = currentPage;
    
            // if(currentPage == '12'){ 
            //   startleMiddleNumber = 10;
            // }
    
        newLinkstoShowStart = currentPage - PaglinksEachSide;
           newLinkstoShowEnd =   currentPage + PaglinksEachSide;
      }
    
      if(currentPage < startleMiddleNumber){
            startleMiddleNumber = currentPage;
    
            // if(currentPage == '12'){ 
            //   startleMiddleNumber = 10;
            // }
    
        // newLinkstoShowStart = currentPage - PaglinksEachSide;
        //    newLinkstoShowEnd =   currentPage + PaglinksEachSide;
      }
     for(let xs = 0; xs < NewPaginationArray.length; xs++){
    
    
    //// THESE ARE THE LINKS TO SHOW NORMAL
    if(xs <= newLinkstoShowEnd){
      NewPaginationArray[xs].style.display = 'block';
    
    console.log('paginationZZ show these pagination links namevalue',NewPaginationArray[xs].attributes.name.value, totalPages,'currentPage',currentPage,'linksToShow',linksToShow,'middleRangePagNrs',middleRangePagNrs)
    
    }
    //// THESE ARE THE LINKS TO  NOT SHOW
    else{
     
    
      if(xs > linksToShow){
       
      NewPaginationArray[xs].style.display = 'none';
    
    // console.log('paginationZZ show these pagination links namevalue',NewPaginationArray[xs].attributes.name.value, totalPages,'currentPage',currentPage,'linksToShow',linksToShow)
    
    }
    }
    
    
    //////////////////////////// ... THREE DOT SEPERATOR ONN AND OFF WHEN NEEDED
      // paginationHTML += '<span>...</span>';
                       
    
                      // Index 1 corresponds to the second list item (position 2)
    //                   var newDivXreferenceNode = document.getElementById('newDivXpagination');
    //                   var referenceNode = newDivXreferenceNode.children[0].children[2];
    // // Insert the new list item before the reference node
    // NewPaginationArray.insertBefore(newSpann, referenceNode);
    
    
    /////////////////////////
    
      // if(currentPage > startleMiddleNumber){
       let LastPagination = NewPaginationArray.length - 2;
        if(!isNaN(NewPaginationArray[xs].attributes.name.value) && NewPaginationArray[xs].attributes.name.value !== "1" ){
        NewPaginationArray[xs].style.display = 'none'
    
        }
    
    
         if(  NewPaginationArray[xs].attributes.name.value == totalPages ){
        NewPaginationArray[xs].style.display = 'block'
    
        }
    
        // if(  NewPaginationArray[xs].attributes.name.value == "2" ){
        // // NewPaginationArray[xs].style.display = 'block'
        // NewPaginationArray.insertBefore(newSpann,NewPaginationArray[xs]);
        // }
        
        //////// NEW RANGE TO SHOW  AND WHICH TO BLOCKL
      for(let sq = (newLinkstoShowStart); sq<= newLinkstoShowEnd; sq++){
        // if(sq >)
        console.log('sq newLinkstoShowStart; sq<= newLinkstoShowEnd sq', sq,'newLinkstoShowStart',newLinkstoShowStart,'newLinkstoShowEnd',newLinkstoShowEnd,'NewPaginationArray',"NewPaginationArray[sq]");
    
        // if( NewPaginationArray[xs].attributes.name.value == "1" ||  NewPaginationArray[xs].attributes.name.value == "12" ){
        // NewPaginationArray[xs].style.display = 'block'
    
        // }
    
        if(NewPaginationArray[xs].attributes.name.value == sq){
    
          console.log('NEW RANGE TO SHOW  AND WHICH TO BLOCK NewPaginationArray[xs].attributes.name.value',NewPaginationArray[xs].attributes.name.value);
          NewPaginationArray[xs].style.display = 'block';
    
        }
        console.log('sq newLinkstoShowStart; sq<= newLinkstoShowEnd', sq);
      //
    
    
      }
    
      
    
    // }
    console.log('paginationZXZ show these pagination links nameval',"newLinkstoShowStart",newLinkstoShowStart,'newLinkstoShowEnd',newLinkstoShowEnd,'currentPage',currentPage);
    
    
    ////  THIIS IS THE MIDDLENUMBRE
    
    
    
    // if(currentPage > startleMiddleNumber){ 
    //   // set middlenumber to currentpage if bigger then default
    //     startleMiddleNumber = currentPage;
    
    
    
        
    //   }
    
    if(xs == startleMiddleNumber){ 
      NewPaginationArray[xs].style.backgroundColor = 'black';
    
    console.log('paginationZZ show these pagination links namevalue',NewPaginationArray[xs].attributes.name.value, totalPages,'currentPage',currentPage,'linksToShow',linksToShow,'middleRangePagNrs',middleRangePagNrs)
    
    }
    
    /////////
    
    
     }
     if(currentPage == rr){
    
      NewPaginationArray[rr].style.backgroundColor = 'purple';
      console.log('paginationZZ clicked last changes', totalPages,'currentPage',currentPage,'linksToShow',linksToShow)
    }
    
    
    
    
    let lastMiddleNr = (totalPages - PaglinksEachSide );
    
    
    let fromTolastMiddleNr = (lastMiddleNr - PaglinksEachSide );
    
    
    if(currentPage >= lastMiddleNr  ){
    
    //   if(isNaN(NewPaginationArray[xs].attributes.name.value)){
    
    // console.log('the value is not a number',NewPaginationArray[xs].attributes.name.value,NewPaginationArray[xs])
    
    // }
    
    //  fromTolastMiddleNr = lastMiddleNr;
      // if(currentPage >= (totalPages - PaglinksEachSide ) ){
        var newDivXpagination = document.getElementById('newDivXpagination');
        
        for(let xxl = 0; xxl < NewPaginationArray.length; xxl++){
          console.log('paginationZYX show these pagination links namevalue', fromTolastMiddleNr,lastMiddleNr);
    
          console.log('paginationZYZ show these pagination links namevalue', totalPages,'currentPage',currentPage,'linksToShow',linksToShow,'middleRangePagNrs',middleRangePagNrs,'startleMiddleNumber',startleMiddleNumber,'PaglinksEachSide',PaglinksEachSide,'fromm',lastMiddleNr, 'full range from to end',(lastMiddleNr - PaglinksEachSide))
    
          if(!isNaN(NewPaginationArray[xxl].attributes.name.value) && NewPaginationArray[xxl].attributes.name.value !== "1" ){
            NewPaginationArray[xxl].style.display = 'none';
    
    
        }
    
        }
          console.log('paginationZYM show these pagination links namevalue', totalPages,'currentPage',currentPage,'linksToShow',linksToShow,'middleRangePagNrs',middleRangePagNrs,'startleMiddleNumber',startleMiddleNumber,'PaglinksEachSide',PaglinksEachSide,'fromm',lastMiddleNr, 'full range from to end',(lastMiddleNr - PaglinksEachSide))
    
        for(let zxl = fromTolastMiddleNr; zxl <= totalPages; zxl++){
    
    
          if( !isNaN(NewPaginationArray[zxl].attributes.name.value) &&  Number(NewPaginationArray[zxl].attributes.name.value) == zxl ){
        
          NewPaginationArray[zxl].style.display = 'block';
    
    
        }
        
    
        console.log('paginationZYM show these pagination links BB zxl',zxl,'NewPaginationArray[zxl].attributes.name.value',Number(NewPaginationArray[zxl].attributes.name.value), totalPages,'newDivXpagination',newDivXpagination.children[0].children[0].children,'currentPage',currentPage,'linksToShow',linksToShow,'middleRangePagNrs',middleRangePagNrs,'startleMiddleNumber',startleMiddleNumber,'PaglinksEachSide',PaglinksEachSide,'fromm',lastMiddleNr, 'full range from to end',(lastMiddleNr - PaglinksEachSide))
    
          // NewPaginationArray[rr].style.display = 'block';
        }
    
       
    
        
    
    
    //     if(currentPage == '12'){
    //   NewPaginationArray[rr].style.display = 'block';
    
    //   console.log('paginationZYZ show these pagination links namevalue', totalPages,'currentPage',currentPage,'linksToShow',linksToShow,'middleRangePagNrs',middleRangePagNrs,'startleMiddleNumber',startleMiddleNumber,'PaglinksEachSide',PaglinksEachSide,'fromm',lastMiddleNr, 'full range from to end',(lastMiddleNr - PaglinksEachSide))
    
    // NewPaginationArray[rr].style.backgroundColor = 'red';
    // // console.log('paginationZZ clicked last changes', totalPages,'currentPage',currentPage,'linksToShow',linksToShow)
    // }
    }
    
    // if(currentPage == 12  ){
    //       console.log(' tab pag nr 12 is clicked');
    
    //     }
    
      // parentalItems.children[0].appendChild(NewPaginationArray[rr]);
    
    
    //   if(rr == 2  || rr == 3  || rr == 4 || rr == 5 || rr == 6){
    //       NewPaginationArray[rr].style.backgroundColor = 'green';
    
    //   // parentalItems.appendChild(NewPaginationArray[rr]);
    // }
    
    // if(rr > 6 && rr !==totalPages){
    //       NewPaginationArray[rr].style.display = 'hidden';
    //       NewPaginationArray[rr].style.backgroundColor = 'black';
    
    //   // parentalItems.appendChild(NewPaginationArray[rr]);
    // }
    //   if(rr !== 5){
    //   // parentalItems.appendChild(NewPaginationArray[rr]);
    // }
      // parentalItems.children[0].innerHTML = '';
      NewPaginationArray[rr].style.backgroundColor = 'purple';
      // NewPaginationArray[rr].style.padding = '5px';
      // NewPaginationArray[rr].style.margin = '2px';
      NewPaginationArray[rr].style.color = 'white';
      NewPaginationArray[rr].style.width = '40px';
      NewPaginationArray[rr].style.height = '40px';
      NewPaginationArray[rr].style.display = 'block';
      NewPaginationArray[rr].style.border = '2px solid yellow';
    
      // parentalItems.appendChild(newNewCollection.childNodes[rr]);
      console.log('parentalItems parentalItems newNewCollection inside',rr, 'NewPaginationArray',NewPaginationArray.length, NewPaginationArray[rr],  NewPaginationArray);
    
    
    
    //CLICKED ON NOT A NUMBER
    if(isNaN(NewPaginationArray[rr].attributes.name.value)){
    
    console.log('parentalItems parentalItems newNewCollection rrrrxx not a number','NewPaginationArray[rr]',NewPaginationArray[rr].attributes.name.value,NewPaginationArray[rr],rr,parentalItems,'newNewCollection',newNewCollection, newNewCollection.firstChild,newNewCollection.childNodes.length,'NewPaginationArray.length',NewPaginationArray.length,NewPaginationArray);
    if(rr == 0){
    if(NewPaginationArray[rr].attributes.name.value == 'Previous'){
    
    console.log('go to the previous', rr,'clickedButton',clickedButton)
    }
    
    }
    // if(rr == NewPaginationArray.length){
    if(NewPaginationArray[rr].attributes.name.value == 'Next'){
    
    console.log('go to the next', rr,'clickedButton',clickedButton)
    }
    // }
    
    // if(isNaN(NewPaginationArray[xs].attributes.name.value)){
    
    // console.log('the value is not a number',NewPaginationArray[xs].attributes.name.value,NewPaginationArray[xs])
    
    // }
    // if(currentPage == 0){
    
    // console.log('the value is not a number this is the previous button');
    // // 
    
    // }
    
    }
    
      // if(currentPage == 1){
    
    
      //   console.log('currentPage you are at page', currentPage )
      // }
    }
    
    ///// SET THE THREE DOT SEPERATER ON AND OFF
    let RealmiddleNumber =  Math.ceil(linksToShow / 2);
    if(currentPage > RealmiddleNumber){
    //   let lastMiddleNr = (totalPages - PaglinksEachSide );
    // const linksToShowB = 7; // Number of pagination links to show
    // let RangePagNrs = linksToShowB -2;
    
    // let PaglinksEachSider = (RangePagNrs-1) /2;
    
    // let fromTolastMiddleNr = (lastMiddleNr - PaglinksEachSide );
    
      
    console.log('three dot seperator ...  totalPages',totalPages)
    var newSpann= document.createElement('li');
                      newSpann.innerHTML = '...';
                      newSpann.setAttribute('id', 'loadMorePrev')
                      newSpann.setAttribute('name', 'MorePrev')
                      // parentalItems.appendChild(newSpann);
                      var referenceNode = newDivXpagination.children[0].children[0].children[2]; // Index 1 corresponds to the second list item (position 2)
    // PaginationItemsParent.splice(2, 0, newSpann);
    // // Insert the new list item before the reference node
    newDivXpagination.children[0].children[0].insertBefore(newSpann, referenceNode);
    ////////////////
    }
    
    var newSpann= document.createElement('li');
    
    if(currentPage < (totalPages-2)){
    //   let lastMiddleNr = (totalPages - PaglinksEachSide );
    // const linksToShowB = 7; // Number of pagination links to show
    // let RangePagNrs = linksToShowB -2;
    
    // let PaglinksEachSider = (RangePagNrs-1) /2;
    
    // let fromTolastMiddleNr = (lastMiddleNr - PaglinksEachSide );
    
    
    console.log('three dot seperator ...  totalPages',totalPages)
                      newSpann.innerHTML = '...';
                      newSpann.setAttribute('id', 'loadMoreNext')
                      newSpann.setAttribute('name', 'MoreNext')
                      // parentalItems.appendChild(newSpann);
                      var referenceNode = newDivXpagination.children[0].children[0].children[(totalPages)]; // Index 1 corresponds to the second list item (position 2)
    // PaginationItemsParent.splice(2, 0, newSpann);
    // // Insert the new list item before the reference node
    newDivXpagination.children[0].children[0].insertBefore(newSpann, referenceNode);
    ////////////////
    }else{
    
      newSpann.style.display = 'none';
    }
    ////////// END THREE DOT
    ////////// END THREE DOT
    
    
    /////////////////////////////   WHILE BEGIN   ///////////////////////////////
    
    
    
    // while (childNode) {
    
    
    // // parentalItems.appendChild(newNewCollection.firstChild);
    // // parentalItems.innerHTML = newNewCollection.firstChild;
    // // innerBottomSideContainer.style.backgroundColor = 'black';
    //     size++;
    //     // childNode.style.backgroundColor = 'blue';
    //     // childNode.style.padding = '5px';
    //     // childNode.style.margin = '2px';
    //     // childNode.style.color = 'white';
    //     // childNode.style.width = '40px';
    //     // childNode.style.height = '40px';
    //     // childNode.style.display = 'block';
    //     // childNode.style.border = '2px solid yellow';
    //     console.log('newCollection[i]tttt size',size, childNode);
    
    //     // newCollection[size].setAttribute('name', size);
    //     childNode.addEventListener('click', function (event) {
    //       event.preventDefault();
    // console.log('clicked firsttttta');
    
    //     })
    
    // //     childNode.addEventListener('click', function (event) {
    // // event.preventDefault();
    // // // var newDivXpagination = document.getElementById('newDivXpagination');
    // // var newDivXpagination = document.getElementById('newDivXpagination');
    // // console.log('clicked first newDivXpagination',newDivXpagination);
    // // /////////////////////////////////
    
    
    
    
    
    
    // // // childArray.appendChild( clonedChild);
    
    
    // // // Insert the cloned child before the last item
    // // var seconTolastChild =childArray[childArray.length - 2];
    // // // console.log('PaginationItems[i] clonedChild',clonedChild, clonedChild.children[0],'PaginationItems',PaginationItems,'seconTolastChild',seconTolastChild)
    
    
    // // // childArray.insertBefore(clonedChild, seconTolastChild);
    // // // childArray.splice(PaginationItems.length - 2, 0, clonedC.hild);
    
    // // console.log('PaginationItems[i] after removechild',PaginationItems,'childArray ',childArray,'parentalItems',parentalItems,parentalItems.innerHTMLc,'newDivXpagination',newDivXpagination)
    // // // parentalItems.innerHTML= '';
    // // // parentalItems.innerHTML= childArray ;
    // // console.log('PaginationItems[i] after removechild afta',PaginationItems,'childArray ',childArray,'parentalItems',parentalItems,parentalItems.innerHTML)
    
    // // let PaginationParent = tempContainer.children[0].children[0].children[1].children[1].children[0];
    // // PaginationParent.parentElement.setAttribute('id', 'parentPaginatricker');
    
    // // // var elementas = document.getElementById('parentPaginatricker');
    // // // PaginationItemsParent.removeChild(PaginationChildItems);
    // // console.log('PaginationItems[i] clonedChildPaginationParent ',PaginationParent.innerHMTL,clonedChild, 'clonedChild.children[0]','elementas','elementas','PaginationItems',PaginationItems,'seconTolastChild',seconTolastChild)
    // // // Replace the old div with the new div
    // // // elementas.parentNode.replaceChild(newDivElement, oldDivElement);
    
    // // var lastChildNewArray = NewPaginationArray[(NewPaginationArray.length-1)];
    // // // NewPaginationArray.splice(NewPaginationArray.length - 2, 0, clonedChild);
    
    // // PaginationParent.parentElement.children[0].setAttribute('id', 'Paginatricker');
    // // console.log('PaginationItems[i] NewPaginationArray clonedChild',clonedChild, 'clonedChild.children[0]','lastChildNewArray',lastChildNewArray,'NewPaginationArray',NewPaginationArray,'PaginationItemsParent',PaginationItemsParent,'PaginationItems',PaginationItems,'childArray',childArray,'PaginationParent',PaginationParent.parentElement.children[0])
     
    // // // Manipulate the array here as needed...
    // // // Append each element of the HTMLCollection to the parent div
    // // // Convert the array back to HTMLCollection
    
    
    
    // // if (event.target == childNode) {
    // //         console.log(" clickedddClicked on the outer div");
    // //     }else{
    // //       if (event.target.tagName === 'DIV') {
    // //         console.log("Clickeddd on a div");
    // //     } else if (event.target.tagName === 'SPAN') {
    
    // //       if(event.target.tagName === 'SPAN' ){
    // //         console.log("Clickeddd on a span", event.target.parentElement);
    
    // //          Outerspan = event.target.parentElement.parentElement;
    // //         //  .attributes.name
    // // console.log( ' Clickeddd Span In SPan',Outerspan);
    // //       }
    // //     }
    // //     else if (event.target.tagName === 'BUTTON') {
    // //         console.log("Clickeddd on a button", event.target.parentElement.attributes.name);
    // //     }
    
    // //       console.log('clickeddd', childNode,'newCollection.firstChild',event.target,'Outerspan', Outerspan)
    
    // // ///////////////////////
    // // console.log(" clickedddClicked on a button");
    // // LWHnotex = new function(){
    // // this.value = "TRUE";
    
    
    
    // // this.index = event.target.parentElement.attributes.name.value;
    // // this.where = 'pagination'; 
    
    // // this.state = 'TRUE'
    // // this.parentIndex = 0;
    
    // // }
    // // console.log('call callLaravelFunctionPagination ');
    // // callLaravelFunctionPagination(event.target.parentElement.attributes.name.value, LWHnotex)
    // //     .catch((error) => {
    // //         // Handle any unhandled promise rejection here
    // //         console.error('Unhandled promise rejection:', error);
    // //     });
    
    
    // // //////////////////
    
    
    
    // //       //  if(event.target)
    
    // //     }
    
    // //     })
    
    //     childNode = childNode.nextSibling;
    // }
    
    /////////////////////////////  WHILE END /////////////////
    
    
    // if(size - 2 == totalPages ){
    //   if(size - 2 <= totalPages){
    //     // Create a new div element
    // var newSpan= document.createElement('span');
    // newSpan.setAttribute('class', 'relative z-0 inline-flex rounded-md shadow-sm')
    // newSpan.setAttribute('style', 'backgroundColor:black;')
    // // newSpan.appendChild(newCollection);
    // // newSpan.appendChild(newNewCollection);
    
    // // newSpan.setAttribute('name', size-2)
    // // newD
    // console.log('newCollection[i]',newCollection, size,'parentalItems',parentalItems);
    // parentalItems.appendChild(newSpan);
    
    //   }
    //   // if(size - 2 > totalPages){
        
    //   // }
    // ///////////////////////////////////// PAGINATION LINKS BEGIN
    
    
    
    
    // ///////////////////////////////////////////// PAGINATION LINKS END ///////////////////////////////////////////
    // for (var i = 0; i < size; i++) {
    //   // newSpan.setAttribute('name', i);
    //   if(i ==0 || i == (size-1) ){
    
    //     if(i==0){
    
    //       newSpan.setAttribute('name', 'prev')
    
    
    //       console.log(' Iam paginatrix previousss',size-1,'size-1')
    //     }
    
    //     if(i== (size-1)){
    
    // // newSpan.setAttribute('name', 'next')
    
    
    // console.log(' Iam paginatrix next',newSpan);
    
    // }
    
    
      
      
    //   }else{
    //     console.log('not previous', 'nextus','Iam paginatrix', i, 'size-1',size-1)
       
      
    // //     if(i == size-1){
    
    // //        console.log(' Iam paginatrix nextus',size-1, 'i',i)
    // // // if(i == (size-1) ){
    
    
    // // //  }
    // // }
    
    //   }
    
      
    //   // parentalItems.appendChild(newCollection[i]);
    //   console.log('newCollection[i]tttt',newCollection[i])
    // }
    // }
    
    var oldDiv = document.getElementById('OrdersWindow');
    
    
    
    oldDiv.innerHTML = '';
    
    
    
    
    // aapioFunction;
    // aapioBFunction;
    
    
    
    // Define the variable you want to pass
    var myVariable = result.data;
    
    // Create a click event
    var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    
    // Set a property on the event object to pass the variable
    event.myVariable = myVariable;
    event.pageIndex = clickedButton;
    
    
    // Dispatch the click event on the element
    // document.getElementById('reloaderContento').dispatchEvent(event);
                // Example usage: Generate pagination links with 6 links to show
                 currentPage = result.current_page; // Example current page number
           totalPages = result.last_page; // Example total number of pages
             linksToShow = 7; // Number of pagination links to show
    
    let reloaderContento = document.getElementById('reloaderContent').dispatchEvent(event);
    
    let paginationDiv = document.getElementsByClassName("pagination");
    
    let loadNextPrevious = document.getElementById("loadMorePrev");
    
    let loadNext = document.getElementById("loadMoreNext");
    let middleNumberGlobal;
    
    // loadNext.addEventListener('click',function (event) {
        addEventListenerToElement(loadNext,'click',function (event) {
    event.preventDefault();
    LWHnotex = new function(){
    this.value = "TRUE";
    
    
    
    this.index = 3;
    this.where = 'pagination'; 
    
    this.state = 'TRUE'
    this.parentIndex = 0;
    
    }
    currentPage + (linksToShow - 2)
    
    if((currentPage + (linksToShow - 2))>= 12){
    
      // currentPage = 12;
    
      LWHnotex.index = 12;
    }else{
    
      // currentPage = (currentPage + (linksToShow - 2));
      LWHnotex.index = (currentPage + (linksToShow - 2));
    
    }
    
    callLaravelFunctionPagination(LWHnotex.index, LWHnotex)
    .catch((error) => {
    // Handle any unhandled promise rejection here
    console.error('Unhandled promise rejection:', error);
    });
    console.log('MoreNextooo','currentPage',currentPage,'totalPages',totalPages,'linksToShow',linksToShow)
    
    })
    
    if(loadNextPrevious){
    // loadNextPrevious.addEventListener('click',function (event) {
        addEventListenerToElement(loadNextPrevious,'click', function (event) {
    event.preventDefault();
    LWHnotex = new function(){
    this.value = "TRUE";
    
    
    
    this.index = 3;
    this.where = 'pagination'; 
    
    this.state = 'TRUE'
    this.parentIndex = 0;
    
    }
    currentPage - (linksToShow - 2)
    
    if((currentPage - (linksToShow - 2))<= 1){
    
      // currentPage = 12;
    
      LWHnotex.index = 1;
    }else{
    
      // currentPage = (currentPage + (linksToShow - 2));
      LWHnotex.index = (currentPage - (linksToShow - 2));
    
    }
    
    callLaravelFunctionPagination(LWHnotex.index, LWHnotex)
    .catch((error) => {
    // Handle any unhandled promise rejection here
    console.error('Unhandled promise rejection:', error);
    });
    console.log('MoreNextooo','currentPage',currentPage,'totalPages',totalPages,'linksToShow',linksToShow)
    
    })
    
    
    }
    // if(currentPage == 1 || currentPage == 2 || currentPage == 3 ||currentPage == 4 || currentPage == 5 || currentPage == 6 ){
    
    // loadNextPrevious.style.display = 'none';
    // }else{
    //   loadNextPrevious.style.display = '';
    
    // }
    
    console.log('loadNextPrevious.style.display');
    
    //////////////////////////////////////
    
    // let paginationDivLinks = paginationDiv[0].children[clickedButton]
    
    // for(var vv=0; vv<paginationDiv[0].children.length; vv++){
    //   // for(var vv=0; vv<totalPages+2; vv++){
    //     if(!isNaN(paginationDiv[0].children[vv].attributes.name.value)){
    //       let pagLinksName = paginationDiv[0].children[vv].attributes.name.value;
    //       let middleNumber =  Math.ceil(linksToShow / 2);
    
    //       middleNumberGlobal =  middleNumber ;
    
    //       let distFromLastNr = middleNumber - 1;
    //       let countFromNewStart;
    //       let middleSpanNumberReach=  Math.ceil(linksToShow / 2) - 2;
    //       let middleSpanNumberEnd =  middleSpanNumberReach + middleNumber;
    
    //       var elementsSelection = document.getElementsByName('0');
    //               let startMovementfrom = (currentPage - middleSpanNumberReach) ;
    //               let replaceStartMovementfrom = middleSpanNumberReach;
    //       console.log('vvx',vv,'paginationDiv[0].children[vv].attributes.name',paginationDiv[0].children[vv].attributes.name);
    
    //       if(currentPage <= middleNumber){
    
    //         middleSpanNumberReach = (currentPage - middleSpanNumberReach);
    //         middleSpanNumberEnd =  middleSpanNumberReach + currentPage;
    //         // for(let Zx = middleSpanNumberReach; Zx <= middleSpanNumberEnd; Zx++ ){
    //             let paginationDiv = document.getElementsByClassName("pagination");
    //             var paginationDivChilds = paginationDiv[0].querySelectorAll('li');
    
    //               // Get all elements with the name "username"
                
    //               // for (var ig = 0; ig < paginationDivChilds.length; ig++) {
                   
    //                 for (var igx = middleSpanNumberReach; igx <= middleSpanNumberEnd; igx++) {
    
    //                   // let getElementReach = paginationDivChilds[igx].attributes.name.value;
    //                   var usernameInputa = paginationDiv[0].querySelectorAll('li');
    //                   for (var i = 0; i < usernameInputa.length; i++) {
    //         // if (usernameInputa[i].name == '0') {
    //             // return nodeList[i];
    //             if(!isNaN(usernameInputa[i].attributes.name.value)){
    //               let startElement;
    //               let oldStartElement;
    //               // replaceStartMovementfrom
    //               console.log('koalaa less then middle  replaced 1st','igx',igx, usernameInputa[i].attributes.name.value,'startElement',startElement,'usernameInputa[i]',usernameInputa[i],'middleSpanNumberReach',middleSpanNumberReach,'middleSpanNumberEnd',middleSpanNumberEnd,'replaceStartMovementfrom',replaceStartMovementfrom,'startMovementfrom',startMovementfrom);
    //               if(usernameInputa[i].attributes.name.value == igx){
    
    //                 usernameInputa[i].style.display = 'block';
    //               // }else if(usernameInputa[i].attributes.name.value !== igx){
    //               //   // usernameInputa[i].style.display = 'none';
    
    //               }
    
    //               if(igx > middleSpanNumberEnd){
    //                 if(usernameInputa[i].attributes.name.value == igx){
    //                 usernameInputa[i].style.display = 'none';
    //                 }
    //               }
    
    
    //               if(usernameInputa[i].attributes.name.value == replaceStartMovementfrom){
    // startElement = usernameInputa[i].attributes.name.value;
    // // usernameInputa[i].style.display = 'none';
    
    //               }
    //               if(usernameInputa[i].attributes.name.value == startMovementfrom){
    //                 console.log('koalaa less then middle  replaced 2nd', usernameInputa[i].attributes.name.value,'startElement',startElement,'usernameInputa[i]',usernameInputa[i],'middleSpanNumberReach',middleSpanNumberReach,'middleSpanNumberEnd',middleSpanNumberEnd,'replaceStartMovementfrom',replaceStartMovementfrom,'startMovementfrom',startMovementfrom);
    
    // startElement = usernameInputa[i].attributes.name.value;
    // // usernameInputa[i].setAttribute('display', 'block') ;
    // // usernameInputa[i].style.display = 'none';
    
    
    // // usernameInputa[i].style.display = 'block';
    // // paginationDiv[0].appendChild(usernameInputa[i])
    // // console.log('koalaa getElementReach select 0 this will be the Substitute', usernameInputa[i].attributes.name.value,'startElement',startElement,'usernameInputa[i]',usernameInputa[i],'middleSpanNumberReach',middleSpanNumberReach,'middleSpanNumberEnd',middleSpanNumberEnd,'replaceStartMovementfrom',replaceStartMovementfrom,'startMovementfrom',startMovementfrom);
    
    //               }
    
    //               if(usernameInputa[i].attributes.name.value == '4'){
    //             /////////////////////////
    
    //             let  newLinksSpanStart = currentPage - middleSpanNumberReach;
    
    // let middleSpanNumberEnd =  middleSpanNumberReach + currentPage;
    
    // // if(usernameInputa[i].attributes.name.value !== '1' ){
    // // usernameInputa[i].style.display = 'none';
    
    // // }
    // // for (var igx = newLinksSpanStart; igx <= middleSpanNumberEnd; igx++) {
    
      
    
    // //   if(usernameInputa[i].attributes.name.value == eval(""+igx+"")){
    
    // // usernameInputa[i].style.display = 'block';
    
    // // }
    
    
    
    // //   console.log('koalaa is not a number getElementReach select 0 !isNaN','newLinksSpanStart',newLinksSpanStart,'middleSpanNumberReach',middleSpanNumberReach ,'middleSpanNumberEnd',middleSpanNumberEnd,'igx',igx);
    // // }
    
    //                 /////////
    
    //                 if(currentPage == '4'){
    //                   // usernameInputa[i].style.display = 'none';
    //                   // if( usernameInputa[i].attributes.name.value !== '1' || usernameInputa[i].attributes.name.value !== '12' ){
    
    //                     if(!isNaN(usernameInputa[i].attributes.name.value)){
    
    //                   for(var tr = replaceStartMovementfrom; tr <= (currentPage + middleSpanNumberReach); tr++){
    //                     console.log('koalaa getElementReach select 0 this will be the Substitute tr',tr, usernameInputa[i].attributes.name.value,'startElement',startElement,'usernameInputa[i]',usernameInputa[i],'middleSpanNumberReach',middleSpanNumberReach,'middleSpanNumberEnd',middleSpanNumberEnd,'replaceStartMovementfrom',replaceStartMovementfrom,'startMovementfrom',startMovementfrom);
    
    
                        
    //                         if( usernameInputa[tr].attributes.name.value !== tr){
    
    //                       usernameInputa[tr].style.backgroundColor = 'yellow';
    //                       usernameInputa[tr].style.display = 'block';
    //                       }
    //                     }
                      
    
    //                   // usernameInputa[tr].style.display = 'none';
    
                  
    
    //                   // }
    
    //                 // }
    
    //                   for(let Ty = middleSpanNumberReach; Ty<= middleSpanNumberEnd; Ty++ ){
    //                     usernameInputa[Ty].style.display = 'block';
    //                     console.log('koalaa is not a number getElementReach select 0 !isNaN  startMovementfrom', startMovementfrom,'middleSpanNumberReach',middleSpanNumberReach,'middleSpanNumberEnd',middleSpanNumberEnd,'Ty',Ty);
    
    //                   }
    
                     
    // // usernameInputa[i].style.backgroundColor = 'yellow';
    // }
    //         }else{
    //           console.log('koalaa is not a number getElementReach select 0 !isNaN', usernameInputa[i].attributes.name.value, usernameInputa[i].attributes.name);
    
    
    //         }
    //         }
    //     }
    
    
    //                   console.log('usernameInputaxa',usernameInputa, 'getElementReach','getElementReach','middleSpanNumberReach',middleSpanNumberReach,'middleSpanNumberEnd',middleSpanNumberEnd ,'igx',igx)
    //                 }
     
    
    // }
    //               // }
    
    //             }
    //         console.log('function generatePagination currentPage < middleNumber linksToShowww',currentPage ,'move this number to the middel','pagLinksName',pagLinksName,'middleNumber',middleNumber,' middleSpanNumberReach,middleSpanNumberEnd',  middleSpanNumberReach,middleSpanNumberEnd);
    
          
    
    //     if(currentPage > middleNumber){
    //        console.log('function generatePagination startPage endPage linksToShowww',currentPage ,'move this number to the middel','pagLinksName',pagLinksName,'middleNumber',middleNumber,' middleSpanNumberReach,middleSpanNumberEnd',  middleSpanNumberReach,middleSpanNumberEnd);
    
        
    //       //  if(pagLinksName == 2  || pagLinksName == 3  || pagLinksName == 4 || pagLinksName == 5 || pagLinksName == 6){
    //         // NewPaginationArray[pagLinksName].style.backgroundColor = 'green';
    
    //         // if( pagLinksName == middleNumber){
    //           middleSpanNumberEnd =( currentPage +  middleSpanNumberReach);
    
    //           for(let Zx = middleSpanNumberReach; Zx <= middleSpanNumberEnd; Zx++ ){
    //             let paginationDiv = document.getElementsByClassName("pagination");
    //             var paginationDivChilds = paginationDiv[0].querySelectorAll('li');
    
    //               // Get all elements with the name "username"
                
    //               for (var ig = 0; ig < paginationDivChilds.length; ig++) {
                 
    //                 for (var igx = middleSpanNumberReach; igx <= middleSpanNumberEnd; igx++) {
    
    //                   // let getElementReach = paginationDivChilds[igx].attributes.name.value;
    //                   var usernameInputa = paginationDiv[0].querySelectorAll('li');
    
    //                   // function searchElementByName(nodeList, nameToSearch) {
    //     for (var i = 0; i < usernameInputa.length; i++) {
    //         // if (usernameInputa[i].name == '0') {
    //             // return nodeList[i];
    //             if(!isNaN(usernameInputa[i].attributes.name.value)){
    //               let startElement;
    //               let oldStartElement;
    //               // replaceStartMovementfrom
    //               // usernameInputa[i].style.display = 'none';
    //               if(usernameInputa[i].attributes.name.value == replaceStartMovementfrom){
    // startElement = usernameInputa[i].attributes.name.value;
    // usernameInputa[i].style.display = 'none';
    
    //               }
    //               if(usernameInputa[i].attributes.name.value == startMovementfrom){
    //                 console.log('koalaa getElementReach select 0 this will be replaced', usernameInputa[i].attributes.name.value,'startElement',startElement,'usernameInputa[i]',usernameInputa[i],'middleSpanNumberReach',middleSpanNumberReach,'middleSpanNumberEnd',middleSpanNumberEnd,'replaceStartMovementfrom',replaceStartMovementfrom,'startMovementfrom',startMovementfrom);
    
    // startElement = usernameInputa[i].attributes.name.value;
    // // usernameInputa[i].setAttribute('display', 'block') ;
    // usernameInputa[i].style.display = 'none';
    
    
    // usernameInputa[i].style.display = 'block';
    // // paginationDiv[0].appendChild(usernameInputa[i])
    // console.log('koalaa getElementReach select 0 this will be the Substitute', usernameInputa[i].attributes.name.value,'startElement',startElement,'usernameInputa[i]',usernameInputa[i],'middleSpanNumberReach',middleSpanNumberReach,'middleSpanNumberEnd',middleSpanNumberEnd,'replaceStartMovementfrom',replaceStartMovementfrom,'startMovementfrom',startMovementfrom);
    
    //               }
    
    //               middleSpanNumberEnd =( currentPage +  middleSpanNumberReach);
    //               if(usernameInputa[i].attributes.name.value > middleSpanNumberEnd){
    // // startElement = usernameInputa[i].attributes.name.value;
    // usernameInputa[i].style.display = 'none';
    
    //               }
    //         }else{
    //           console.log('koalaa is not a number getElementReach select 0 !isNaN', usernameInputa[i].attributes.name.value, usernameInputa[i].attributes.name);
    
    
        
    //     }
    
        
    
    //     if(currentPage == (middleNumber + 1) && currentPage !==  1){
    //       let  newLinksSpanStart = currentPage - middleSpanNumberReach;
    
    //       let middleSpanNumberEnd =  middleSpanNumberReach + currentPage;
    
    //       if(usernameInputa[i].attributes.name.value !== '1' ){
    //       usernameInputa[i].style.display = 'block';
    
    //       }
    //       for (var igx = newLinksSpanStart; igx <= middleSpanNumberEnd; igx++) {
    
            
    
    //         if(usernameInputa[i].attributes.name.value == eval(""+igx+"")){
    
    // usernameInputa[i].style.display = 'block';
    // usernameInputa[i].style.backgroundColor = 'black';
    
    //       }
    
    
    
    //         console.log('koalaa is not a number getElementReach select 0 !isNaN','newLinksSpanStart',newLinksSpanStart,'middleSpanNumberReach',middleSpanNumberReach ,'middleSpanNumberEnd',middleSpanNumberEnd,'igx',igx);
    // }
    
    // //       if(usernameInputa[i].attributes.name.value == 7){
    
    // // usernameInputa[i].style.display = 'none';
    // //       }
    
    
    
    
    // }
    
    
    // if(currentPage == (middleNumber + 1) && currentPage !==  1){
    //       let  newLinksSpanStart = currentPage - middleSpanNumberReach;
    
    //       let middleSpanNumberEnd =  middleSpanNumberReach + currentPage;
    
    //       if(usernameInputa[i].attributes.name.value !== '1' ){
    //       usernameInputa[i].style.display = 'block';
    
    //       }
    //       for (var igx = newLinksSpanStart; igx <= middleSpanNumberEnd; igx++) {
    
            
    
    //         if(usernameInputa[i].attributes.name.value == eval(""+igx+"")){
    
    // usernameInputa[i].style.display = 'block';
    // usernameInputa[i].style.backgroundColor = 'black';
    
    //       }
    
    
    
    //         console.log('koalaa is not a number getElementReach select 0 !isNaN','newLinksSpanStart',newLinksSpanStart,'middleSpanNumberReach',middleSpanNumberReach ,'middleSpanNumberEnd',middleSpanNumberEnd,'igx',igx);
    // }
    
    // //       if(usernameInputa[i].attributes.name.value == 7){
    
    // // usernameInputa[i].style.display = 'none';
    // //       }
    
    
    
    
    // }
    
    // }
    // //     return null; // Element not found
    // // }
    
    
                  
    // console.log('koalaa getElementReach', 'getElementReach','middleSpanNumberReach',middleSpanNumberReach,'middleSpanNumberEnd',middleSpanNumberEnd,'paginationDivChilds[ig]',paginationDivChilds[ig],'elementsSelection',elementsSelection,'usernameInputa',usernameInputa,'igx',igx,'startMovementfrom',startMovementfrom)
    
    
    // startMovementfrom= (startMovementfrom+1);
    // replaceStartMovementfrom = (replaceStartMovementfrom+1);
    
    //                 // }
    //                 startMovementfrom = (currentPage - middleSpanNumberReach);
    //                  replaceStartMovementfrom = middleSpanNumberReach;
    //         // Check if the current element's name matches the name to search
    //         console.log('koalaa')
        
    //         // if (paginationDivChilds[ig].name == '0') {
    //             // Return the element if found
             
    // // if(){
    
    
    // // }
    
    //             console.log('paginationDivChilds[i].name',paginationDivChilds[ig], ig,'startMovementfrom',startMovementfrom,'    paginationDivChilds', paginationDivChilds[ig])
    //             // return elements[i];
    //         // }
            
    //     }
    
        
    
    //             // paginationDivChilds
    
    
                
               
    //   NewPaginationArray[Zx].style.backgroundColor = 'brown';
    //         console.log('function  generatePagination startPage endPage linksToShowwwxxs',currentPage ,'NewPaginationArray[Zx]',NewPaginationArray[Zx],'startMovementfrom',startMovementfrom,'paginationDivChilds',paginationDivChilds,'elementsSelection','elementsSelection','paginationDivChilds.length',paginationDivChilds.length);
    
    //         // NewPaginationArray[Zx].innerHTML ='';
    //         // NewPaginationArray[Zx].innerHTML = startMovementfrom;
    //         // startMovementfrom = startMovementfrom+1;
            
    
    
            
    //         if(paginationDiv[0].children[vv].attributes.name.value == startMovementfrom){
    
    //         }
    //         // let loadNext = document.getElementById("loadMoreNext");
    //         }
         
    //         NewPaginationArray[middleNumber].style.backgroundColor = 'blue';
    
            
    // }
    // let addTostartMovement = (currentPage-(startMovementfrom+1));
    
    
    //       for(let Ty = middleSpanNumberReach; Ty<= middleSpanNumberEnd; Ty++ ){
    //        countFromNewStart = ((startMovementfrom+ (Ty-middleSpanNumberReach)));
    //       console.log('neweras', middleSpanNumberReach,'startMovementfrom','currentPage',currentPage,startMovementfrom, '+',((startMovementfrom+ (Ty-middleSpanNumberReach))),'middleSpanNumberEnd',middleSpanNumberEnd,'Ty',Ty)
     
    //    addTostartMovement = addTostartMovement+ 1;
    //    console.log('neweras','addTostartMovement',addTostartMovement,'startMovementfrom',startMovementfrom,'currentPage',currentPage,'countFromNewStart',countFromNewStart)
    
    //     // if(paginationDiv[0].children[vv].attributes.name.value !== countFromNewStart && paginationDiv[0].children[vv].attributes.name.value !== '12'
    //     // && paginationDiv[0].children[vv].attributes.name.value !== '1')
    //     if(paginationDiv[0].children[vv].attributes.name.value !== '12'
    //     && paginationDiv[0].children[vv].attributes.name.value !== '1')
    //     {
    
    //   // parentalItems.appendChild(NewPaginationArray[rr]);
    // // }
    
    
    //       }
    
    //       // let pagLinksName = paginationDiv[0].children[vv].attributes.name.value;
    //       // let middleNumber =  Math.ceil(linksToShow / 2);
    
    //       // let middleSpanNumberReach=  Math.ceil(linksToShow / 2) - 2;
    //       // let middleSpanNumberEnd =  middleSpanNumberReach + middleNumber;
    
    // // let addTostartMovement = (currentPage-(startMovementfrom+1));
    
    // // let countFromNewStart;
    // //       for(let Ty = middleSpanNumberReach; Ty<= middleSpanNumberEnd; Ty++ ){
    // //        countFromNewStart = ((startMovementfrom+ (Ty-middleSpanNumberReach)));
    // //       console.log('neweras', middleSpanNumberReach,'startMovementfrom','currentPage',currentPage,startMovementfrom, '+',((startMovementfrom+ (Ty-middleSpanNumberReach))),'middleSpanNumberEnd',middleSpanNumberEnd,'Ty',Ty)
    
    // //    addTostartMovement = addTostartMovement+ 1;
    // //    console.log('neweras','addTostartMovement',addTostartMovement,'startMovementfrom',startMovementfrom,'currentPage',currentPage,'countFromNewStart',countFromNewStart)
    
    // //     // if(paginationDiv[0].children[vv].attributes.name.value !== countFromNewStart && paginationDiv[0].children[vv].attributes.name.value !== '12'
    // //     // && paginationDiv[0].children[vv].attributes.name.value !== '1')
    // //     if(paginationDiv[0].children[vv].attributes.name.value !== '12'
    // //     && paginationDiv[0].children[vv].attributes.name.value !== '1')
    // //     {
    
    //       // if(paginationDiv[0].children[vv].attributes.name.value > 6 && paginationDiv[0].children[vv].attributes.name.value !== '12'){
    
    //       // if(paginationDiv[0].children[vv].attributes.name.value > 6 && paginationDiv[0].children[vv].attributes.name.value !== '12'){
    //         console.log('vvx',vv,'paginationDiv[0].children[vv].attributes.name inner1',paginationDiv[0].children[vv].attributes.name);
    //     paginationDiv[0].children[vv].style.display = 'none';
    // // NewPaginationArray[currentPage].style.backgroundColor = 'purple';
    
    
    // if(paginationDiv[0].children[vv].attributes.name.value == countFromNewStart  )
    // {
    //   console.log('vvx countFromNewStart countFromNewStartcountFromNewStart',countFromNewStart,'paginationDiv[0].children[vv]',paginationDiv[0].children[vv]);
    //   // paginationDiv[0].children[vv].style.display = 'block';
    // // 
    // }
    
    
    // }
    // // && paginationDiv[0].children[vv].attributes.name.value !== ((startMovementfrom+ (Ty-middleSpanNumberReach)))
    // if(paginationDiv[0].children[vv].attributes.name.value == eval(""+countFromNewStart+"") )
    // // if(paginationDiv[0].children[vv].attributes.name.value == '9' || paginationDiv[0].children[vv].attributes.name.value == '10'  )
    // console.log('vvx countFromNewStart countFromNewStartcountFromNewStart22',countFromNewStart,'paginationDiv[0].children[vv]',paginationDiv[0].children[vv],'paginationDiv[0].children[vv].attributes.name.value >middleSpanNumberEnd',paginationDiv[0].children[vv].attributes.name.value,middleSpanNumberEnd);
    
    // //  paginationDiv[0].children[vv].attributes.name.value == countFromNewStart  
    
    // // if(paginationDiv[0].children[vv].attributes.name.value == '9' && paginationDiv[0].children[vv].attributes.name.value == '11')
    // {
    
    //       // if(paginationDiv[0].children[vv].attributes.name.value > 6 && paginationDiv[0].children[vv].attributes.name.value !== '12'){
    
    //       // if(paginationDiv[0].children[vv].attributes.name.value > 6 && paginationDiv[0].children[vv].attributes.name.value !== '12'){
    //         console.log('vvx',vv,'paginationDiv[0].children[vv].attributes.name inner1',paginationDiv[0].children[vv].attributes.name,'countFromNewStartcountFromNewStart',countFromNewStart ,paginationDiv[0].children[vv]);
    //     paginationDiv[0].children[vv].style.display = 'block';
    // // NewPaginationArray[currentPage].style.backgroundColor = 'purple';
    // }
    
    
    
    
    // }
    
    
    
    
    
    // if( paginationDiv[0].children[vv].attributes.name.value >(middleSpanNumberEnd+middleSpanNumberReach)&& paginationDiv[0].children[vv].attributes.name.value !== '1' && paginationDiv[0].children[vv].attributes.name.value !== '12' ){
    
    // // if( paginationDiv[0].children[vv].attributes.name.value >(middleSpanNumberEnd+middleSpanNumberReach)&& paginationDiv[0].children[vv].attributes.name.value !== '1' && paginationDiv[0].children[vv].attributes.name.value !== '12' ){
    
    // // paginationDiv[0].children[vv].style.display = 'none';
    // }
    
    // // if(paginationDiv[0].children[vv].attributes.name.value == '9' )
    // // {
    // //   paginationDiv[0].children[vv].style.display = 'block';
    
    // // }
    // let rangeLinksNewStartFrom = countFromNewStart - (middleSpanNumberReach * 2)
    
    // for(let cc = middleSpanNumberReach; cc<= countFromNewStart; cc++){
    
    
    // console.log('for loopex', cc,'countFromNewStart',countFromNewStart,'middleSpanNumberReach',middleSpanNumberReach,'rangeLinks',rangeLinksNewStartFrom)
    
    
    // if(paginationDiv[0].children[vv].attributes.name.value == cc )
    // {
    //   paginationDiv[0].children[vv].style.display = 'none';
    
    // }
    // }
    
    // for(let cc = rangeLinksNewStartFrom; cc<= countFromNewStart; cc++){
    
    
    // console.log('for loopex', cc,'countFromNewStart',countFromNewStart,'middleSpanNumberReach',middleSpanNumberReach,'rangeLinks',rangeLinksNewStartFrom,'middleNumber',middleNumber)
    
    
    // if(paginationDiv[0].children[vv].attributes.name.value == cc )
    // {
    //   paginationDiv[0].children[vv].style.display = 'block';
    
    // }
    // }
    
    
    
    
    
    
    // // }
    
    
    
    
    
    // // if(currentPage == middleNumber){
    // //   // paginationDiv[0].children[vv].style.display = 'block';
    // //   paginationDiv[0].children[vv].style.backgroundColor = 'yellow';
    
    // // }
    
    //     }
    
    //     if(middleNumberGlobal== currentPage)
    // {
    
    //   // if(middleNumberGlobal== currentPage)
    //   if(currentPage == paginationDiv[0].children[vv].attributes.name.value){
    //   // paginationDiv[0].children[vv].style.display = 'block';
    //   paginationDiv[0].children[vv].style.backgroundColor = 'green';
    // console.log('currentPage VX', currentPage,'middleNumber',middleNumberGlobal,'paginationDiv[0].children[vv]',paginationDiv[0].children[vv])
    // // console.log('currentPage VX', currentPage,'middleNumber',middleNumber,'',)
    // }
    
    // }
        
    //   // let elementName = paginationDiv[0].children[vv].attributes.name.value;
    //   console.log('vv',vv,'paginationDiv[0]', paginationDiv[0].children[vv],'paginationDiv[0].children[vv].name',paginationDiv[0].children[vv].attributes.name,'elementName ','elementName ');
    //   // paginationDiv[0].children[vv].style.display = 'none';
    //   // console.log('vvvvc',vv,'elementName', elementName);
    
    //   if(!isNaN(paginationDiv[0].children[vv].attributes.name.value)){
    
    //     console.log('paginationDiv[0].children[vvv] isNaN',paginationDiv[0].children[vv].attributes.name.value,paginationDiv[0].children[vv],'totalPages',totalPages)
    
    // //     if(vv > 7 && vv !== totalPages){
    // //     paginationDiv[0].children[vv].style.display = 'none';
    // // // NewPaginationArray[currentPage].style.backgroundColor = 'purple';
    // // }
    
    // // if( paginationDiv[0].children[vv].attributes.name.value == (vv+1)){
    // //   console.log('paginationDiv[0].children[vvvv]!! isNa]n',paginationDiv[0].children[vv])
    
    
    // // }
    //   }
    
     
    // }
    
    /////////////////////////////////////////
    
    // let paginationDivX = document.getElementsByClassName("pagination");
    //   var paginationDivChildsX = paginationDivX[0].querySelectorAll('li');
    
    //     // Get all elements with the name "username"
      
    //     // for (var ig = 0; ig < paginationDivChildsX.length; ig++) {
    
    //     //   let getElementReach = paginationDivChildsX[ig].attributes.name.value;
    //         var usernameInputa = paginationDivX[0].querySelectorAll('li');
    
    //         for (var i = 0; i < usernameInputa.length; i++) {
    // // // if (usernameInputa[i].name == '0') {
    // //   // return nodeList[i];
    // if(isNaN(usernameInputa[i].attributes.name.value)){
    //   console.log('isNaN usernameInputa[i].attributes.name.value)X', usernameInputa[i].attributes.name.value, usernameInputa[i] );
    
    // }
    //   if(!isNaN(usernameInputa[i].attributes.name.value)){
    
    // console.log('!isNaN usernameInputa[i].attributes.name.value)X', usernameInputa[i].attributes.name.value, usernameInputa[i] ,'currentPage',currentPage);
    // // //       if(usernameInputa[i].attributes.name.value == replaceStartMovementfrom){
    // // // startElement = usernameInputa[i].attributes.name.value;
    // // // usernameInputa[i].style.display = 'none';
    
    //     }
    //   //  }
    
    //     }
    
    var usernameInput = paginationDiv[0].querySelectorAll('li');
    // usernameInput[clickedButton].style.backgroundColor = 'red';
    
    
    
    
    // middleSpanNumberEnd =( currentPage +  middleSpanNumberReach);
    
    // for(let Zx = middleSpanNumberReach; Zx <= middleSpanNumberEnd; Zx++ ){
     
       
    //       for (var igx = middleSpanNumberReach; igx <= middleSpanNumberEnd; igx++) {
    
    //         // let getElementReach = paginationDivChilds[igx].attributes.name.value;
    //         var usernameInputa = paginationDiv[0].querySelectorAll('li');
    
    //         // function searchElementByName(nodeList, nameToSearch) {
    // for (var i = 0; i < usernameInputa.length; i++) {
    // // if (usernameInputa[i].name == '0') {
    //   // return nodeList[i];
    //   if(!isNaN(usernameInputa[i].attributes.name.value)){
    //     let startElement;
    //     let oldStartElement;
        // replaceStartMovementfrom
        // usernameInputa[i].style.display = 'none';
    //     if(usernameInputa[i].attributes.name.value == replaceStartMovementfrom){
    // startElement = usernameInputa[i].attributes.name.value;
    // usernameInputa[i].style.display = 'none';
    
    //     }
    // if(currentPage == 6){
    
    // NewPaginationArray[currentPage].style.backgroundColor = 'purple';
    // }
    // if(currentPage == totalPages){
    
    // loadNext.style.display = 'none';
    // }else{
    //   loadNext.style.display = '';
    
    // }
    
    
    // if(currentPage > 6){
    
    //   NewPaginationArray[currentPage].style.display = 'none';
    // }
    // result does it really work resultadas pagination
    // reloaderContento.click();
    // aaapsu();
    // await aapio();
    // await aapioB();
    // })
    
    
    lastBeforePage = currentPage;
    if(currentPage == 0){
      if(NewPaginationArray[0].attributes.name.value == "Previous"){
        // if(currentPage !== 1){
        NewPaginationArray[0].style.backgroundColor = 'red';
        NewPaginationArray[0].disabled = true;
        NewPaginationArray[0].children[0].disabled = true;
        NewPaginationArray[0].children[0].children[0].disabled = true;
        if(currentPage > 1){
        currentPage = (lastBeforePage -1);
        }
    // }
    }
      }
    
    
    for(let qb = 0; qb < NewPaginationArray.length; qb++){
    
    
      // lastBeforePage = currentPage;
    //   NewPaginationArray[qb].addEventListener('click', function (event) {
        addEventListenerToElement(NewPaginationArray[qb],'click', function (event) {
    // // event.preventDefault();
    
    
    
    
    
    
    
      })
    
     
    
    }
    
        // const resultB = await  responseB;
        // Process the result from Laravel
        console.log('result does it really work resultadas pagination', result,'resultB',result.data,'loadNextPrevious',"loadNextPrevious");
        console.log(result);
        // loadPage(LWHnotex.index);
        // updateContent(result);
      
        // Livewire.emit('saveIndividualValues');
    } catch (error) {
        // Handle errors
        // console.log('result does it really work');
         console.log('result does it really workB0');
        console.error(error);
    
        // You can rethrow the error or handle it in a specific way
        throw error;
    }
    console.log('result does it really work C');
    } 
    //////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////


    createPaginationContent(configuratorr,paginatedData,timex){

        console.log('appz  DataqCCC');
        this.innerName = 'createTableClass';

        this.ParentcontainerClass = this;
        this.configurator = configuratorr;

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
    // }

    // Method of the inner class
    // innerMethod() {
        let adisi_CDLC = this;
        // adisi_CDLC.configurator.
        console.log('appz  DataqCCCDD');
        
        adisi_CDLC.layoutOuterDiv = document.createElement('div');
        console.log('appz  DataqCCCDDXX');
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

        console.log('appz  DataqCCCDDYY');
        adisi_CDLC.layoutInnerDiv = document.createElement('div');
        adisi_CDLC.layoutInnerDiv.setAttribute('id', adisi_CDLC.innerName+'layoutInnerDiv');
        adisi_CDLC.layoutInnerDiv.style.width = '100%';
        adisi_CDLC.layoutInnerDiv.style.height = '100%';
        adisi_CDLC.layoutInnerDiv.style.backgroundColor = 'yellow';
        adisi_CDLC.layoutInnerDiv.style.display = 'block';
        adisi_CDLC.layoutInnerDiv.style.border = '6px solid orange';
        adisi_CDLC.layoutInnerDiv.style.overflowY = 'scroll';
        adisi_CDLC.layoutInnerDiv.style.boxSizing= 'border-box';
        console.log('appz  DataqCCCDDYYsss');
    
        console.log('appz  DataqBB',adisi_CDLC.ParentcontainerClass)

        console.log('appz  DataqCCCDDYYsssAAAA','paginatedData.length',paginatedData,paginatedData.length); 
        for(let yy=0; yy< paginatedData.length;yy++){

            console.log('appz  DataqCCCDDYYsssbbbbbbbbbbbb');
            // adisi_CDLC.ParentcontainerClass.paginationMethod();
            console.log('appz  Dataq',yy,paginatedData[yy],'paginatedData[]',paginatedData[yy])
        
        

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
            console.log('appz  DataqWWW',yy,paginatedData[yy])
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
adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
// adisi_CDLC.layoutInnerTD.innerHTML =globalRoute;

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
// adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
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
// adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
// paginatedData[yy].container_naam
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', (`<ul id="unorderedListerz" style="float:right;  color:white; text-align:right; margin:0px 10px;">\
<li id="container_naam_${yy}" >${paginatedData[yy].container_naam}</li>\
<li id="id_${yy}">${paginatedData[yy].id}</li>\
<li id="container_inhoud_${yy}">${paginatedData[yy].container_inhoud}</li>\
<li id="container_formaat_${yy}">${paginatedData[yy].container_formaat}</li>\
<li id="date_ophaalcontainer_${yy}">${paginatedData[yy].date_ophaalcontainer}</li>\
<li id="status_${yy}">${paginatedData[yy].status}</li>\

</u;>`));
{/* <li>${paginatedData[yy].created_at}</li>\ */}
break;


case 4:

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
// adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
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
// adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
// paginatedData[yy].container_naam
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', (`<ul id="unorderedListerz" style="float:right;  color:white; text-align:right; margin:0px 10px;">\
<li id="date_vertrek_${yy}">${paginatedData[yy].date_vertrek}</li>\
<li id="locatie_vertrek_container_${yy}">${paginatedData[yy].locatie_vertrek_container}</li>\
<li id="date_aankomst_bestemming_${yy}">${paginatedData[yy].date_aankomst_bestemming}</li>\
<li id="locatie_bestemming_${yy}">${paginatedData[yy].locatie_bestemming}</li>\
<li id="vaart_id_${yy}">${paginatedData[yy].vaart_id}</li>\
<li id="status_${yy}">${paginatedData[yy].status}</li>\
<li id="notitie_${yy}">${paginatedData[yy].notitie}</li>\
<liid="status_${yy}">${paginatedData[yy].status}</li>\

</u;>`));
{/* <li>${paginatedData[yy].created_at}</li>\ */}
break;

        }
 



    adisi_CDLC.layoutInnerTR.appendChild(adisi_CDLC.layoutInnerTD);
    }
    adisi_CDLC.layoutInnerTable.appendChild(adisi_CDLC.layoutInnerTR);

    adisi_CDLC.expandableTableDiv.appendChild(adisi_CDLC.layoutInnerTable );
    //////////////////////////////////////

    adisi_CDLC.layoutInnerDiv.appendChild( adisi_CDLC.expandableTableDiv);
    // adisi_CDLC.singleTableDiv.appendChild( adisi_CDLC.expandableTableDiv);
    console.log('here you areCCsssC');

}



    //    this.userJava  = document.getElementById(Jdataz.locationUrl);
    // adisi_CDLC.userJava.appendChild(adisi_CDLC.layoutOuterDiv);

        console.log('here you areCCC','adisi_CDLC','aapa','aapa','this.ParentcontainerClass', paginatedData,'adisi_CDLC.ParentcontainerClass.getSelectionData',adisi_CDLC.ParentcontainerClass.getSelectionData);

      

    }

    let aapa = adisi_CDLC.ParentcontainerClass.getSelectionData.mainLayout.navmainLayout.getElement;
    // let contentsArea  = document.getElementById( aapa);
    // aapa.innerHTML = 'DOES it Work   Actually@!!';
    if(timex == 'firstTime'){
        aapa.appendChild(adisi_CDLC.layoutOuterDiv);

    }

    if(timex == 'searchTime'){
        aapa.appendChild(adisi_CDLC.layoutOuterDiv);

    }
    
    adisi_CDLC.layoutOuterDiv.appendChild( adisi_CDLC.layoutInnerDiv );
    // adisi_CDLC.ParentcontainerClass.paginationMethod(adisi_CDLC.layoutInnerDiv);
    // let aapa = adisi_CDLC.ParentcontainerClass.getSelectionData.mainLayout.navmainLayout.getElement;
    // // let contentsArea  = document.getElementById( aapa);
    // // aapa.innerHTML = 'DOES it Work   Actually@!!';
    // aapa.appendChild(adisi_CDLC.layoutOuterDiv);
    // adisi_CDLC.layoutOuterDiv.appendChild( adisi_CDLC.layoutInnerDiv );
    // adisi_CDLC.ParentcontainerClass.paginationMethod();

     
        // contentsArea.innerHTML ='wattagwaan Soldier'
        console.log('here you areCCC',adisi_CDLC,'aapa',aapa,'this.ParentcontainerClass', adisi_CDLC.ParentcontainerClass,' adisi_CDLC.configurator', adisi_CDLC.configurator,'adisi_CDLC.ParentcontainerClass.getSelectionData',adisi_CDLC.ParentcontainerClass.getSelectionData);

        // document.getElementById("createTableClasslayoutInnerDiv").innerHTML ='XXAA0XAA createPaginationContent end';  //lasttt

    return adisi_CDLC.layoutInnerDiv;

    }
 displayPage(page,appz) {
    this.adisi = this;
    console.log('this is the displaypage');
    const start = (this.adisi.currentPage - 1) * this.adisi.rowsPerPage;
    const end = start + this.adisi.rowsPerPage;

    console.log('go to the next qwageaanzzww','innerMainContentDB','this.aapuu',this.aapuu,'paginatedData','paginatedData','containerLoadsDB',containerLoadsDB)

    const paginatedData = containerLoadsDB.slice(start, end);
  
    let innerMainContentDB   = document.getElementById('createTableClasscreateOuterDivwUserForm');
    // Display the data in the 'data-container'
    const container = innerMainContentDB;
      container.innerHTML = ''; // Clear previous content
      this.aapuu =this.adisi.createPaginationContent(this.adisi.configuratorx,paginatedData); 
    innerMainContentDB.appendChild(this.aapuu);
    // document.getElementById("createTableClasslayoutInnerDiv").innerHTML ='XXAA0X';

    console.log('go to the next qwageaanzzww',innerMainContentDB,'this.aapuu',this.aapuu,'paginatedData',paginatedData,'containerLoadsDB',containerLoadsDB)
  
    
    // paginatedData.forEach(function(item, index)  {
    //     container.innerHTML += `<p>dddddddddffr  ${index}</p>`; // Adjust with your data structure
    // });

    // Update page number
  
    // document.getElementById('page-number').innerText = `Page ${this.adisi.currentPage}`;
    
    // Disable/enable buttons based on current page
    // document.getElementById('prevqq').disabled = this.adisi.currentPage === 1;
    // document.getElementById('nextqq').disabled = this.adisi.currentPage === Math.ceil(this.adisi.databaseRows.length / this.adisi.rowsPerPage);
}

    paginationMethod(contento,configurator){ 
let adisi = this; 

// this.aapuu =this.adisi.createPaginationContent(configurator);
     

      let paginationContentDB   = document.getElementById('xContainerxcreateDivwUserFormfootmainLayout');
      console.log('thisis the pagination Method paginationMethod containerPaginationData',containerPaginationData,'innerMainContentDB','-paginationContentDB',paginationContentDB,'this.adisi',adisi,adisi.appz,'containerLoadsDB',containerLoadsDB);

      paginationContentDB.style.boxSizing= 'border-box';
      paginationContentDB.style.justifyContent= 'center';
      paginationContentDB.style.display= 'flex';

//       paginationContentDB.innerHTML += `<div id="pagination-controls">
//       <button id="prevqq" disabled>Previous</button>
//       <span id="page-number">Page 1</span>
//       <button id="nextqq">Next</button>
//   </div>`;
  
  this.pagDiv= document.createElement('span');
  this.pagDiv.id = 'pagination-controls';
  this.buttonA = document.createElement('button');
  this.buttonA.id = 'prevqq';
  this.buttonA.innerHTML = 'Previous ';
  this.buttonB= document.createElement('button');
  this.buttonB.id = 'nextqq';
  this.buttonB.innerHTML = ' Next';
  this.spann= document.createElement('span');
  this.spann.id = 'page-number';
  this.spann.innerText = `Page ${adisi.currentPage}`;
        

  this.pagDiv.appendChild(this.buttonA);

  this.pagDiv.appendChild(this.spann);

  this.pagDiv.appendChild(this.buttonB);

  paginationContentDB.appendChild(this.pagDiv);

  const start = (adisi.currentPage - 1) * adisi.rowsPerPage;
  const end = start + adisi.rowsPerPage;
//   const paginatedData = containerLoadsDB.slice(start, end);
const paginatedData = containerLoadsDB;

  this.buttonA.addEventListener('click', function() {
    console.log('go to the previous qwageaan')
    // if (adisi.currentPage > 1) {
    //     adisi.currentPage--;
    //     // displayPage(currentPage);
    // }
});


  this.buttonB.addEventListener('click', function() {

    console.log('go to the next qwageaan',adisi.currentPage,'paginatedData.length',paginatedData.length,paginatedData,'adisi.rowsPerPage',adisi.rowsPerPage,'containerLoadsDB',containerLoadsDB)
    if (adisi.currentPage < Math.ceil(containerLoadsDB.length / adisi.rowsPerPage)) {
        adisi.currentPage++;
        // console.log('go to the next qwageaanzzz',adisi.currentPage,'paginatedData.length',paginatedData.length,paginatedData,'adisi.rowsPerPage',adisi.rowsPerPage)
       
// adisi.createMultiPagination('clickedButton', 'LWHnotex' )
adisi.createPaginationLinks();
    //    adisi.displayPage(adisi.currentPage,appz);
    }
});
// innerMainContentDB.innerHTML = '';
        // Variables to keep track of the current page and rows per page
// let currentPage = 1;
// const rowsPerPage = 2; // Show 1 row per page

// // This function will display the data for the current page
// function displayPage(page,appz) {
   
    // this.aapuu =adisi.createPaginationContent(configurator,paginatedData,'firstTime'); 
    // document.getElementById("createTableClasslayoutInnerDiv").innerHTML ='XXAA0X';  //lasttt

    // let innerMainContentDB   = document.getElementById('createTableClasscreateOuterDivwUserForm');
    // Display the data in the 'data-container'
    // const container = innerMainContentDB;
    // console.log('go to the next qwageaanzz',innerMainContentDB) 

    
    // container.innerHTML = ''; // Clear previous content
    
    // paginatedData.forEach(function(item, index)  {
    //     container.innerHTML += `<p>dddddddddffr  ${index}</p>`; // Adjust with your data structure
    // });

    // Update page number
  
    // document.getElementById('page-number').innerText = `Page ${adisi.currentPage}`;
    
    // Disable/enable buttons based on current page
    // document.getElementById('prevqq').disabled = adisi.currentPage === 1;
    // document.getElementById('nextqq').disabled = adisi.currentPage === Math.ceil(adisi.databaseRows.length / adisi.rowsPerPage);
// }

// Event listeners for the pagination buttons




// Initial display
// displayPage(currentPage,this.adisi.appz);
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
      
        
        // this.Jdataz = Jdataz;
        Parentcontainer.configuratorx = Jdataz;;
        this.ParentcontainerClass = Parentcontainer;

        this.configurator = Jdataz;
        // this.funfuxi = this.ParentcontainerClass.getElementsSelection();

        this.innerName = 'createTableClass';

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

        
    let aapa = adisi_CDLC.ParentcontainerClass.getSelectionData.mainLayout.navmainLayout.getElement;
    // let contentsArea  = document.getElementById( aapa);
    // aapa.innerHTML = 'DOES it Work   Actually@!!';
    aapa.appendChild(adisi_CDLC.layoutOuterDiv);

    adisi_CDLC.layoutOuterDiv.appendChild( adisi_CDLC.layoutInnerDiv );

    // adisi_CDLC.ParentcontainerClass.paginationMethod(adisi_CDLC.layoutInnerDiv,adisi_CDLC.configurator);
    // let aapa = adisi_CDLC.ParentcontainerClass.getSelectionData.mainLayout.navmainLayout.getElement;
    // // let contentsArea  = document.getElementById( aapa);
    // // aapa.innerHTML = 'DOES it Work   Actually@!!';
    // aapa.appendChild(adisi_CDLC.layoutOuterDiv); 
    // adisi_CDLC.layoutOuterDiv.appendChild( adisi_CDLC.layoutInnerDiv );
    // adisi_CDLC.ParentcontainerClass.paginationMethod();



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
            // adisi_CDLC.ParentcontainerClass.createPaginationLinks();

        }
    };

//////////////////////////////are you sure form


removeConfirmForm(row_id){
    //////////////////////////////////// BEGIN FORM
    let adisi = this;
let Row_id = row_id;
    console.log('removeConfirmFormxx',row_id,'paginatedData',adisi.appz[row_id])
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

    
    // for(let yy=0; yy< paginatedData.length;yy++){

    //     console.log('appz Dataq',paginatedData[yy])
    
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

        dynamic_containers_page_map.get('variables').set('typeString','xContainerx');
        let containertypeString = dynamic_containers_page_map.get('variables').get('typeString');
        
        console.log('dynamic_containers_page_map [SSSTARTUP ---> 0 , A]',dynamic_containers_page_map)
        dynamic_containers_page_map.get('variables').set('classCreationdataX',new function(){
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
        });
       
        let classCreationdataX = dynamic_containers_page_map.get('variables').get('classCreationdataX');
        dynamic_containers_page_map.get('variables').set('typeString',containertypeString);
        console.log('dynamic_containers_page_map [SSSTARTUP ---> 0 , B]',dynamic_containers_page_map)
            
           
        // let containerPagesClassy = new ContainerClass(containerappz,containertypeString);
        dynamic_containers_page_map.get('classes').set('ContainerClass', new ContainerClass(containerappz,containertypeString));
        let containerPagesClassy = dynamic_containers_page_map.get('classes').get('ContainerClass');

        // console.log('THIS IS THE CLASS','this.userPopUp','appz','appz', 'type','type',PagesClassy)
        containerPagesClassy.innerFunction();
        containerPagesClassy.createForm();
       
        
       
        // containerPagesClassy.checksAndSave();
      
        // let teasty =containerPagesClassy.getElementsSelection();
        dynamic_containers_page_map.get('classes').set('ContainerClass_createDivLayoutClass', new ContainerClass.createDivLayoutClass(containerPagesClassy,classCreationdataX));
        let DIvclass = dynamic_containers_page_map.get('classes').get('ContainerClass_createDivLayoutClass');


        // let DIvclass = new ContainerClass.createDivLayoutClass(containerPagesClassy,classCreationdataX);
        DIvclass.innerMethod('aap');
        containerPagesClassy.popUpper();
        containerPagesClassy.createPaginationLinks(null,'firstTime');

        // DIvclass.getElementsSelection('teeest');
        // xContainerxcreateDivwUserFormnavmainLayout

        // let DiviA = document.getElementById("xContainerxcreateDivwUserFormnavmainLayout");
        console.log('what is the made previeous class',containerPagesClassy.getSelectionData[classCreationdataX.componentName]['topSide'+classCreationdataX.componentName],'componenetNAme',containerPagesClassy.getSelectionData[classCreationdataX.componentName],'id',containerPagesClassy.getSelectionData[classCreationdataX.componentName]['topSide'+classCreationdataX.componentName].getElement.id);
       
    //    let UrlPlaceContent = containerPagesClassy.getSelectionData[classCreationdataX.componentName]['nav'+classCreationdataX.componentName].getElement.id
       dynamic_containers_page_map.get('variables').set('urlPlaceContent', containerPagesClassy.getSelectionData[classCreationdataX.componentName]['nav'+classCreationdataX.componentName].getElement.id);
       let UrlPlaceContent =  dynamic_containers_page_map.get('variables').get('urlPlaceContent');
       
       dynamic_containers_page_map.get('variables').set('inner_Main_ClassCreationdataX',  new function(){
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
       );

       classCreationdataX = dynamic_containers_page_map.get('variables').get('inner_Main_ClassCreationdataX');
        // DIvclass = new ContainerClass.createDivLayoutClass(containerPagesClassy,classCreationdataX);
    
        // DIvclass.innerMethod(DIvclass);
        // console.log('THIS IS THE CLASS CREATION',"DiviA",' DIvclass.getElementInnerclass', DIvclass.getElementInnerclass)

        // let DIvclassis = new ContainerClass(containerPagesClassy,classCreationdataX);

        // DIvclassis.getElementsSelection('teeest');

        dynamic_containers_page_map.get('variables').set('data_layout_json_array_innerMain',new function(){
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
        
        );

        let data_layout_json_array = dynamic_containers_page_map.get('variables').get('data_layout_json_array_innerMain');
// let data_layout_json_array = new function(){
//     this.tableRows = '3';
//     this.tableDatas = '7';
//     this.tableSidesWidth = '2.5%';
//     this.addExpandableWindow = 'false';
//     this.leftSide = 'aye';
//     this.innerLeftSide = 'aye';
//     this.rightSide = 'aye';
//     this.rightSide = 'aye';
// this.name ='';
// this.getElement ='';
// this.innerElement ='';
// }

dynamic_containers_page_map.get('classes').set('ContainerClass_createTableClass_firstTime',  new ContainerClass.createTableClass(containerPagesClassy,data_layout_json_array));
        // let newTablo = new ContainerClass.createTableClass(containerPagesClassy,data_layout_json_array);
        let newTablo = dynamic_containers_page_map.get('classes').get('ContainerClass_createTableClass_firstTime');
        newTablo.innerMethod(); 

        containerPagesClassy.insertSearchFunction();
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
 







