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
let refferences_containers =new Map();

variables_containers.set(`testvar`, 'xxxxeListeners');

dynamic_containers_page_map.set(`variables`, variables_containers);
functions_containers.set(`innerFunctions`, innerFunctions_containers);
dynamic_containers_page_map.set(`eListeners`, eListeners_containers);
dynamic_containers_page_map.set(`elements`, elements_containers);
dynamic_containers_page_map.set(`stateVariables`, stateVariables_containers);
dynamic_containers_page_map.set(`refferences`, refferences_containers);

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
        // dynamic_containers_page_map.get('elements').set('this.userPopUpr',this.userPopUp);

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
this.formdata   = document.getElementById(type+'createNewUserForm');
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
this.dynamic_storage_map.set(`eListeners`, this.eListeners);

this.classes =new Map();
this.dynamic_storage_map.set(`classes`, this.classes);







    }


    // Function to add event listeners and store them
addEventListenerToElement(element, event, handler,name) {
    let adisim = this;
    this.adisip = 'cdcdcd';
    element.addEventListener(event, handler);
    window.globalmyAppX.eventListeners.push({ element, event, handler });
    adisim.eventListenerCollection.push({ element, event, handler }); 
    if(name !== ''){
        console.log('it has a name', name)
    dynamic_containers_page_map.get('eListeners').set(name ,{ element, event, handler });
}

}
   toggleDropdown(page) {

    this.adisi =this;
    console.log('you are at the toggledropdown')
        this.adisi.dropdownMenu = document.getElementById(`dropdownMenu_${this.adisi.type}`);
        dynamic_containers_page_map.get('refferences').set(`dropdownMenu_toggleDropDown` ,this.adisi.dropdownMenu);

        // dropdownMenu.style.width='5%'; 
        // document.querySelector('.dropdown-btn_container').textContent = page;

        this.adisi.dropdownMenu.style.display = this.adisi.dropdownMenu.style.display === 'block' ? 'none' : 'block';
      }
       svgMaker(paths, svgName, itterationCount) {
let adisi = this;
        console.log('here is the svgMaker')
        if( !itterationCount){
            itterationCount = '';
        }
    
        const iconSvgPlane = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const SymbolSvgPlane = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
    //   let svg_ButtonZ = '';
        // SymbolSvgPlane.setAttribute('id', 'PlaneIconowa'+yy);
        SymbolSvgPlane.setAttribute('id', `${adisi.type}_Plane${svgName}Iconowa${itterationCount}`);
      
      
       let  useElemPlane= document.createElementNS('http://www.w3.org/2000/svg', 'use');
      
      useElemPlane.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${adisi.type}_Plane${svgName}Iconowa${itterationCount}`);
      
        iconSvgPlane.setAttribute('fill', 'black');
        iconSvgPlane.setAttribute('viewBox', '0 0 186 186');
        // iconSvgAfz.setAttribute('stroke', 'black');
        iconSvgPlane.setAttribute('width', 'auto');
        iconSvgPlane.setAttribute('height', '100%');
      
        iconSvgPlane.setAttribute('data-id', `${adisi.type}_${svgName}_ButtonZ${itterationCount}`);
        // delete_Svg
        if(svgName == 'delete_Svg'){
            iconSvgPlane.setAttribute('height', '24px');
            iconSvgPlane.setAttribute('viewBox', '0 0 16 16');

        }else if(svgName== 'edit_Svg'){
            iconSvgPlane.setAttribute('height', '24px');
            iconSvgPlane.setAttribute('viewBox', '0 0 24 24');

        }
        else if(svgName== 'Container_Svg'){
            iconSvgPlane.setAttribute('height', '24px');
            iconSvgPlane.setAttribute('viewBox', '0 0 24 24');

        }
        else if(svgName== 'Down_Svg'){
            iconSvgPlane.setAttribute('height', '24px');
            iconSvgPlane.setAttribute('viewBox', '0 0 24 24');

        }
        else if(svgName== 'Up_Svg'){
            iconSvgPlane.setAttribute('height', '24px');
            iconSvgPlane.setAttribute('viewBox', '0 0 24 24');

        }


       

        
        
    // Iterate over each path data and create path elements
    paths.forEach(pathData => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        Object.keys(pathData).forEach(attr => {
            path.setAttribute(attr, pathData[attr]);
        });
        SymbolSvgPlane.appendChild(path);
    
        // svg.appendChild(path); // Append each path to the SVG
    });
    
    useElemPlane.appendChild(SymbolSvgPlane)
     
     iconSvgPlane.appendChild( useElemPlane)
    //  // iconSvgAfz.appendChild( iconPath)
    
    // newTDD0Creation.appendChild(iconSvgPlane)
    // svg_ButtonZ.setAttribute('id', adisi_CDLC.innerName+'editButtonZ'+yy);
    
    // svg_ButtonZ.appendChild(iconSvgPlane);
    
    return iconSvgPlane;
    
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
        dynamic_containers_page_map.get('refferences').set(`${this.adisim.type}createDivwUserFormITSmainLayout` ,this.layoutPartSelection);


        this.layoutPartSelection.appendChild(this.outerSearchDiv);

        /////////////////////////////////////

async function LaravelSearchFunctiona( LWHnotey, adisimi) {
    window.globalmyAppX.functions['LaravelSearchFunctiona'] = LaravelSearchFunctiona;
        dynamic_containers_page_map.get('functions').set('LaravelSearchFunctiona',LaravelSearchFunctiona);

        let searchBarSelect = document.getElementById(`searchbar_${adisimi.type}`);

let adisim = adisimi;
// let Sandies = this;
console.log(' this is thecallLaravelCheckFunctiona where',LWHnotey.where,'lwhnote',LWHnotey,'value',' adisimi', adisimi,'searchBarSelect',searchBarSelect,searchBarSelect.value)
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
dynamic_containers_page_map.get('refferences').set(`ordersWindow_insertSearchFunction` ,oldDiv);


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
            dynamic_containers_page_map.get('refferences').set(`searchbar_${this.adisim.type}`,this.adisiii);
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
          
          
          }.bind(this),'searchInput');
            // document.getElementById('xContainerxcreateDivwUserFormITSmainLayout').innerHTML = '';




     }

createPaginationLinks(searchResult,timeX){
    // dynamic_containers_page_map.get('functions').set('createPaginationLinks',searchRenderPage);
 let searchResultx =searchResult;
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
// if(timeX !== 'firstTime'){
//     timeX = 'searchTime';
// // renderPage(currentPage,'1',adisi,'firstTime',searchResult);
// }
if(timeX == 'firstTime'){
renderPage(currentPage,'1',adisi,'firstTime',searchResult);
}
if(timeX == 'searchTime'){
    // renderPage(currentPage,'1',adisi,'searchTime',searchResult);  

    console.log('searchTimeXX');
    searchRenderPage(currentPage,'1',adisi,'searchTime',searchResult);  
    }
// renderPage(currentPage,'1',adisi,timeX,searchResult);

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
    dynamic_containers_page_map.get('stateVariables').set('currentPageData',currentPageData);

    
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
    dynamic_containers_page_map.get('stateVariables').set('data_layout_json_array_searchrenderpage',data_layout_json_array);

    //  
    document.getElementById(`${adisi.type}createDivwUserFormnavmainLayout`).innerHTML ='';

    let newTablo = new ContainerClass.createTableClass(adisi,data_layout_json_array);
    dynamic_containers_page_map.get('classes').set('ContainerClass_createTableClass_searchrenderpage',newTablo);

    newTablo.innerMethod(); 
    adisi.createPaginationContent(adisi.configuratorx,paginatedData.data,timeX); 
//CHECKED 3//
    // if(totalPages !== 1){
        // break
  
   renderPaginationControls(adisi,'1','searchRenderPage',searchResult);
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
async function renderPage(pageNumber,currentPagerz,adisi,timeX,resultada) {
    let Justified_router = globalRoute_container;

    let currentPagex = currentPagerz;
    let gotoPage = pageNumber;

    let LWHnotex = new function(){

        this.currentPage =  currentPagerz;
        this.clickButton = gotoPage;
        this.gotoPage = gotoPage;
        this.whatFunction = 'showAll';
        this.where = ``;
        this.index = ''; 
        
        this.value = '';
       }

    dynamic_containers_page_map.get('functions').set('renderPage',renderPage);
    if(timeX !== "firstTime"){ 
    let searchBarSelect = document.getElementById(`searchbar_${adisi.type}`);
    

    if( searchBarSelect.value !== ''){
console.log('the searchbar is not isEmpty renderPage',searchBarSelect,'gotoPage',gotoPage);

Justified_router = '/searchdatabase';
LWHnotex.where =   `liveSearch_${adisi.type}`;
LWHnotex.index = gotoPage;
LWHnotex.whatFunction = 'whileSearch';
        
LWHnotex.value = searchBarSelect.value;
if(timeX == 'searchTime'){

}
    }else{
        LWHnotex.where =  ``;
        LWHnotex.index = '1'; 
        
        LWHnotex.value = '';
        LWHnotex.whatFunction = 'showAll';
        Justified_router = globalRoute_container;

    }
}

    dynamic_containers_page_map.get('stateVariables').set('gotoPage',gotoPage);

    console.log('you are at the pagination links renderPage()','pageNumbero',pageNumber,'paginatedDatax',paginatedData);
//    createMultiPagination('aaapss','ssdsd');
    // Fetch data for the requested page
    let currentPageData = paginatedData.data.filter((_, index) => {
        return index >= (pageNumber - 1) * perPage && index < pageNumber * perPage;
    });
    dynamic_containers_page_map.get('stateVariables').set('currentPageData',currentPageData);
    console.log('you are at the pagination links renderPage(B) currentPageData',currentPageData,'resultada',resultada,'searchResultx',searchResultx);
    // Clear the current content 
    // document.getElementById('content-wrapper').innerHTML = '';

    // Display the new content for the selected page
    // currentPageData.forEach(item => {
    //     let contentHtml = `<div>${item.your_field}</div>`;
    //     document.getElementById('content-wrapper').insertAdjacentHTML('beforeend', contentHtml);
    // });

    // Render pagination controls
    // this.LWHnotey = new function(){
          
          
    //     this.index = '1'; 
    //     this.where = `liveSearch_${adisip.type}`; 
    //     this.value = searchBar.value;
    //     this.parentIndex = 0;
    //     this.router = '';
    //     this.whatFunction = 'showAll';
        
    //     }
    
      
       dynamic_containers_page_map.get('stateVariables').set('LWHnotex',LWHnotex);

       
    try {
      
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      console.log('callLaravelFunctionPagination LWHnotexxaas',LWHnotex,'clickedButton','clickedButton','csrfToken',csrfToken);
    
      const data = {
    variable1: JSON.stringify(LWHnotex),
    variable2: 'pagination',
    variable3: JSON.stringify(LWHnotex),
    };
        // const response = await fetch('{{ route("updatejson.save")}}',  {
          const response = await fetch(Justified_router, {
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
        dynamic_containers_page_map.get('stateVariables').set('ContainerClass_createTableClass_renderPage',newTablo);

        newTablo.innerMethod(); 
        
        if(timeX == 'searchTime'){
            adisi.createPaginationContent(adisi.configuratorx,resultada.data,timeX); 

        }else{

            adisi.createPaginationContent(adisi.configuratorx,resultada,timeX); 

        }

        
        console.log('result does it really workAA dataxi',data,'response','timeX',timeX,response,'resultada',resultada.data,resultada,'adisi',adisi);
    
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
  
    renderPaginationControls(adisi,gotoPage,'renderPage');
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
    
    
    dynamic_containers_page_map.get('stateVariables').set('paginationHtml_dropUpPagination',paginationHtml);
        // if (currentPage < totalPages) {
        //     paginationHtml += `<button id="loadMore_X">Load More</button>`;
        // }
        console.log('you are at the pagination links createPaginationLinks()',paginationHtml);
        let footerX =    document.getElementById(`${adisii.type}createDivwUserFormfootmainLayout`);
                    dynamic_containers_page_map.get('refferences').set(`searchbar_${adisii.type}`,footerX);

        dynamic_containers_page_map.get('stateVariables').set('footerX_dropUpPagination',footerX);
        // box-sizing: border-box;
        footerX.style.boxSizing = 'border-box';
        // footerX.style.padding = '10px';
        // padding: 10px;
        footerX.innerHTML += paginationHtml;
        // addEventListenerToElement(document.getElementById(`dropdown-btn_${adisii.type}`),'click'
        adisi.addEventListenerToElement(document.getElementById(`dropdown-btn_${adisii.type}`),'click', (event) => adisi.toggleDropdown(event.target.innerHTML),'dropdown_btn_toggle');
        // document.getElementById(`dropdown-btn_${adisii.type}`).addEventListener('click', (event) => adisi.toggleDropdown(event.target.innerHTML));
        // document.getElementById("dropdown-item_container").addEventListener('click', () => adisi.selectOption());

        document.getElementsByClassName(`dropdown-item_${adisii.type}`).forEach(function(item, index) {

            adisi.addEventListenerToElement(item,'click', (event) => selectOption(event.target.innerHTML,currentPage,adisi),`dropdown-item_${adisii.type}`);



    // item.addEventListener('click', (event) => selectOption(event.target.innerHTML,currentPage,adisi));
    
    // Define what happens when you hover over the element

    // adisi.addEventListenerToElement(item,'click', (event) => selectOption(event.target.innerHTML,currentPage,adisi),`dropdown-item_${adisii.type}`);

    addEventListenerToElement(item,"mouseover", function() {
        item.style.backgroundColor = "lightblue"; // Change background color
        item.style.color = "white";               // Change text color
        },"dropDownPaginationMouseOver");

    // item.addEventListener("mouseover", function() {
    // item.style.backgroundColor = "lightblue"; // Change background color
    // item.style.color = "white";               // Change text color
    // });
    
    // Define what happens when you stop hovering
    adisi.addEventListenerToElement(item,"mouseout", function() {
    item.style.backgroundColor = ""; // Reset background color
    item.style.color = "";           // Reset text color
    },'dropUpPagination_mouseOut');
    // item.addEventListener("mouseout", function() {
    // item.style.backgroundColor = ""; // Reset background color
    // item.style.color = "";           // Reset text color
    // });
        })
        // ("dropdown-item_container").addEventListener('click', () => adisi.selectOption());
    
    
        
    
    // Hide the dropdown when clicking outside
    adisi.addEventListenerToElement(document,'click', (event) => {
    if (!event.target.closest(`.dropdown_${adisii.type}`)) {
    //   dropupList.style.display = 'none';
    const dropdownMenu = document.getElementById(`dropdownMenu_${adisii.type}`);
    dynamic_containers_page_map.get('refferences').set(`dropdownMenu_${adisii.type}`,dropdownMenu);

    dropdownMenu.style.display= 'none';
    console.log('close dropdownclick outside',dropdownMenu)
    
    }
    },'dropUpMenuClickOutside');
    // document.addEventListener('click', (event) => {
    // if (!event.target.closest(`.dropdown_${adisii.type}`)) {
    // //   dropupList.style.display = 'none';
    // const dropdownMenu = document.getElementById(`dropdownMenu_${adisii.type}`);
    // dropdownMenu.style.display= 'none';
    // console.log('close dropdownclick outside',dropdownMenu)
    
    // }
    // });
    
    function selectOption(option,currentPager,adisi) {
      dynamic_containers_page_map.get('functions').set('selectOption',selectOption);
        // this.adisi= this;
        currentPage = option;
        console.log('you are at the toggledropdown selectOptions')
        goToPage(Number(option),currentPage,adisi,timeX);
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
            renderPage(gotoPagex,currentPagex,adisi,timeX ); 
        }
    }
    }

function renderPaginationControls(adisii,gotoPage) { 
    // window.globalmyAppX.functions['LaravelSearchFunctiona'] = LaravelSearchFunctiona;
    dynamic_containers_page_map.get('functions').set('renderPaginationControls',renderPaginationControls);
    console.log('renderPaginationControls',gotoPage, adisii);
    let adisi = adisii;
    let paginationHtml = '';
    
    // paginationHtml += `<button ${currentPage !== 1 ? 'disabled' : ''}style="${currentPage !== 1 ? 'background-color:blue' : ''}" id="firstPage">First </button>`;
    // Previous Button
    paginationHtml += `<button style="margin-right:5px; color:white;" ${currentPage === 1 ? 'disabled' : ''} id="${adisi.type}_previous_X"> << </button>`;

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
paginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${currentPage === 1 ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="${adisi.type}_page_X_1" data-page="1" name="${adisi.type}_paginationButton" ${startPage === 1 ? 'class="active"' : '' }>1</button></span>`;
}
if(currentPage > 3){

    paginationHtml += `<span style="display: flex; width: 50px; height: 100%;background-color: lavender; justify-content:center; ${currentPage > 3 ? 'display:flex;' : 'display: none;' }"><button id="morePrev_container" data-page="morePrev" name="${adisi.type}_paginationMoreButton" ${currentPage > 3 ? 'class="active"' : '' }>...</button></span>`;

}

paginationHtml += `<div id="middlePagesDiv" style="display:flex; height:100%;">`;
    for (let i = startPage; i <= endPage; i++) {
        // if( i == startPage){

        //     paginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${i === currentPage ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="page_X_${i}" data-page="${i}" name="paginationButton" ${i === currentPage ? 'class="active"' : '' }>1</button></span>`;


        // }
        console.log('startpage endpage i', startPage,endPage,i)
       

        paginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${i === currentPage ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="${adisi.type}_page_X_${i}" data-page="${i}" name="${adisi.type}_paginationButton" ${i === currentPage ? 'class="active"' : '' }>${i}</button></span>`;
       
       
        
    }
    paginationHtml += `</div>`;
    // if( i == endPage){

        // if(endPage < (totalPages -1)){

            paginationHtml += `<span style="display: flex; width: 50px; height: 100%;background-color: lavender; justify-content:center; ${currentPage < (totalPages -2) ? 'display:flex;' : 'display: none;' }"><button id="moreNext_container" data-page="moreNext" name="${adisi.type}_paginationMoreButton" ${currentPage < (totalPages -2) ? 'class="active"' : '' }>...</button></span>`;
        
        // }
        if(totalPages > 3){
        paginationHtml += `<span style="display: flex; width: 50px; height: 100%; justify-content:center; ${totalPages === currentPage ? 'background-color:yellow;' : 'background-color: lavender;' }"><button id="${adisi.type}_page_X_${totalPages}" data-page="${totalPages}" name="${adisi.type}_paginationButton" ${totalPages === currentPage ? 'class="active"' : '' }>${totalPages}</button></span>`;
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


dynamic_containers_page_map.get('stateVariables').set('footerX_dropUpPagination',paginationHtml);

//     // if (currentPage < totalPages) {
//     //     paginationHtml += `<button id="loadMore_X">Load More</button>`;
//     // }
//     console.log('you are at the pagination links createPaginationLinks()',paginationHtml);
    let footerX =    document.getElementById(adisii.type+"createDivwUserFormfootmainLayout");
    dynamic_containers_page_map.get('refferences').set('footerX_renderPaginationControls',footerX);
console.log('[SSSTARTUP] renderpaginationcontrols()footerX',footerX );
    // box-sizing: border-box;
    footerX.style.boxSizing = 'border-box';
    // footerX.style.padding = '10px';
    // padding: 10px;
    // footerX.innerHTML = '';
    
    let mainPagcontainer = document.createElement('div');
    mainPagcontainer.setAttribute('id',`innerPagination${adisii.type}`); 
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
    dynamic_containers_page_map.get('elements').set('mainPagcontainer',mainPagcontainer);

    // 
    dropUpPagination(gotoPage,adisii);

    // let 
    // paginationContentDB.style.boxSizing= 'border-box';
    // paginationContentDB.style.justifyContent= 'center';
    // paginationContentDB.style.display= 'flex';


    adisi.addEventListenerToElement(document.getElementById('moreNext_container'),'click', () => {
                    console.log('moreNExta','endPage',endPage,'startPage',startPage)
                   
        // goToPage((currentPage - 1),currentPage,adisi)
    },'loadMoreNextContainer');
    //   document.getElementById('moreNext_container').addEventListener('click', () => {
    //                 console.log('moreNExta','endPage',endPage,'startPage',startPage)
                   
    //     // goToPage((currentPage - 1),currentPage,adisi)
    // });
                // Attach event listeners to buttons

                adisi.addEventListenerToElement(document.getElementById(`${adisi.type}_previous_X`),'click', () => goToPage((currentPage - 1),currentPage,adisi),'pagination_previous');
                // document.getElementById('previous_X').addEventListener('click', () => goToPage((currentPage - 1),currentPage,adisi));
             
                adisi.addEventListenerToElement(document.getElementById('next_X'),'click', () => goToPage((currentPage + 1),currentPage,adisi),'pagination_next');
                // document.getElementById('next_X').addEventListener('click', () => goToPage((currentPage + 1),currentPage,adisi));


                document.getElementsByName(`${adisi.type}_paginationMoreButton`).forEach(button => {
                  
                    adisi.addEventListenerToElement(button, 'click', (event) => {

                        if(event.target.getAttribute('data-page') == 'moreNext'){
                            console.log('moreNExta by name',event.target.getAttribute('data-page'),'endPage',endPage,'startPage',startPage);
//                             document.getElementById('middlePagesDiv').innerHTML = "";
// let newpaginationHtml = '';

// document.getElementsByName(`paginationMore_button${event.target.getAttribute('data-page')}`),'click', () => goToPage((currentPage + 1),currentPage,adisi),'pagination_next');

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

                    },`paginationMoreButton`)
                })
                    
            
                document.getElementsByName(`${adisi.type}_paginationButton`).forEach((button, index) => {
                   
                adisi.addEventListenerToElement(button,'click',  (event) => {
                    let page = parseInt(event.target.getAttribute('data-page'));
                    console.log('goToPage function pageclicked',page)
                    // adisi.selectOption(page,currentPage,adisi)
                    goToPage(page,currentPage,adisi);

                },`paginationButtons${index}`);
                   
                    // button.addEventListener('click', (event) => {
                    //     let page = parseInt(event.target.getAttribute('data-page'));
                    //     console.log('goToPage function pageclicked',page)
                    //     // adisi.selectOption(page,currentPage,adisi)
                    //     goToPage(page,currentPage,adisi);

                    // });
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
    dynamic_containers_page_map.get('functions').set('goToPage_createPaginationLinks',goToPage);

    console.log('goToPage function',gotoPagex,',currentPage',currentPagex)
    // document.getElementById("createTableClasslayoutInnerDiv").innerHTML ='XX0X';
    currentPage = gotoPagex;
    if (gotoPagex >= 1 && gotoPagex <= totalPages) {
        renderPage(gotoPagex,currentPagex,adisi,timeX );
    }
}

function loadMore() {
    dynamic_containers_page_map.get('functions').set('loadMore_createPaginationLinks',loadMore);

    console.log('loadmoreFunction');
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPagex,currentPagex,adisi,timeX);
    }
}
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
    let lister_ul= document.createElement('ul');
    let lister_li = document.createElement('li');

    let innerLister_ul= document.createElement('ul');
    let innerLister_li = document.createElement('li');
    innerLister_ul.style.margin = '0';
    innerLister_ul.style.paddingLeft = '0';
    innerLister_li.style.marginBottom = '0';
    innerLister_li.style.padding = '0';

    lister_ul.style.margin = '0';
lister_ul.style.paddingLeft = '0';
lister_li.style.marginBottom = '0';
lister_li.style.padding = '0';

    // Method of the inner class
    // innerMethod() {
        let adisi_CDLC = this;
        dynamic_containers_page_map.get('refferences').set('adisi_CDLC_createPaginationContent',adisi_CDLC);

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
        dynamic_containers_page_map.get('elements').set('layoutOuterDiv_createPaginationContent',adisi_CDLC.layoutOuterDiv);

        

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

        dynamic_containers_page_map.get('elements').set('layoutInnerDiv_createPaginationContent',adisi_CDLC.layoutInnerDiv);


        console.log('appz  DataqCCCDDYYsss');
    
        console.log('appz  DataqBB',adisi_CDLC.ParentcontainerClass)
// if(timex == 'searchTime'){
//     paginatedData = paginatedData.data;
 
// }
        console.log('appz  DataqCCCDDYYsssAAAA','paginatedData.length',paginatedData,paginatedData.length, timex); 
        for(let yy=0; yy< paginatedData.length;yy++){
let CounterZ = yy;
            console.log('appz  DataqCCCDDYYsssbbbbbbbbbbbb');
            // adisi_CDLC.ParentcontainerClass.paginationMethod();
            console.log('appz  Dataq',yy,paginatedData[yy],'paginatedData[]',paginatedData[yy])
        
        

        adisi_CDLC.singleTableDiv = document.createElement('div');
        adisi_CDLC.singleTableDiv.style.backgroundColor = ' #1f618d';
        adisi_CDLC.singleTableDiv.style.display= 'block';
        adisi_CDLC.singleTableDiv.style.margin= '4px 0px';

        adisi_CDLC.singleTableDiv.style.width = '100%';
        adisi_CDLC.singleTableDiv.style.padding= '5px';
        adisi_CDLC.singleTableDiv.style.height = 'auto';
        adisi_CDLC.singleTableDiv.setAttribute('id', adisi_CDLC.innerName+'singleTableDiv'+yy);
        adisi_CDLC.singleTableDiv.style.boxSizing= 'border-box';
        adisi_CDLC.singleTableDiv.style.borderRadius= '10px';
        adisi_CDLC.singleTableDiv.style.margin = '1px 0';
        dynamic_containers_page_map.get('elements').set(`singleTableDiv_createPaginationContent${yy}` ,adisi_CDLC.singleTableDiv);


      

        adisi_CDLC.layoutInnerTable = document.createElement('table');
        adisi_CDLC.layoutInnerTable.style.width = '100%';
        adisi_CDLC.layoutInnerTable.style.height = '100%';
        adisi_CDLC.layoutInnerTable.style.tableLayout = 'fixed';
        // adisi_CDLC.layoutInnerTable.style.margin = '5px';
       
        adisi_CDLC.layoutInnerTable.style.backgroundColor = 'DodgerBlue';
        adisi_CDLC.layoutInnerTable.style.borderRadius= '10px';

        adisi_CDLC.layoutInnerTable.setAttribute('id', adisi_CDLC.innerName+'layoutInnerTable'+yy);
        adisi_CDLC.layoutInnerTable.style.boxSizing= 'border-box';
        dynamic_containers_page_map.get('elements').set(`layoutInnerTable_createPaginationContent${yy}` ,adisi_CDLC.layoutInnerTable);


        adisi_CDLC.layoutInnerTR = document.createElement('tr');
        adisi_CDLC.layoutInnerTR.style.width = '100%';
        adisi_CDLC.layoutInnerTR.style.height = 'auto';
        adisi_CDLC.layoutInnerTR.setAttribute('id', adisi_CDLC.innerName+'layoutInnerTR'+yy);
        adisi_CDLC.layoutInnerTR.style.boxSizing= 'border-box';
        adisi_CDLC.layoutInnerTR.style.borderRadius= '10px';


        dynamic_containers_page_map.get('elements').set(`layoutInnerTR_createPaginationContent${yy}` ,adisi_CDLC.layoutInnerTR);

       
        for(let iCount=0; iCount<(adisi_CDLC.configurator.tableDatas); iCount++){
            console.log('appz  DataqWWW',yy,paginatedData[yy])
            adisi_CDLC.layoutInnerTD = document.createElement('td');
            adisi_CDLC.layoutInnerTD.style.width = '10%';
            adisi_CDLC.layoutInnerTD.style.border = '2px solid blue';
            adisi_CDLC.layoutInnerTD.setAttribute('id', adisi_CDLC.innerName+'layout'+yy+'InnerTD'+iCount);
            adisi_CDLC.layoutInnerTD.style.boxSizing= 'border-box';
            adisi_CDLC.singleTableDiv.style.borderRadius= '10px';
            adisi_CDLC.layoutInnerTD.style.border = '2px solid blue';
            adisi_CDLC.layoutInnerTD.style.borderCollapse = 'seperate';
            adisi_CDLC.layoutInnerTD.style.borderSpacing = '0';
            adisi_CDLC.layoutInnerTD.style.color = 'white';
            adisi_CDLC.layoutInnerTD.style.color = 'white';
            adisi_CDLC.layoutInnerTD.style.fontSize = 'clamp(12px, 1.1vw, 20px)';
            adisi_CDLC.layoutInnerTD.style.textAlign = 'center';
            adisi_CDLC.layoutInnerTD.style.verticalAlign = 'center';

            
        // adisi_CDLC.layoutInnerTD.style.fontSize = '1vw';
        adisi_CDLC.layoutInnerTD.style.lineHeight = '1.1em';
        adisi_CDLC.layoutInnerTD.style.padding = '2px';
        adisi_CDLC.layoutInnerTD.style.margin = '2px';

        adisi_CDLC.layoutInnerTD.style.transform = 'scale(1)';
        adisi_CDLC.layoutInnerTD.style.transformOrigin = 'left';
            // border-collapse: separate; /* Change from collapse to separate for visible rounded corners */
            // border-spacing: 0; /


            dynamic_containers_page_map.get('elements').set(`${adisi_CDLC.innerName}layout${yy}InnerTD${iCount}_createPaginationContent` ,adisi_CDLC.layoutInnerTD);

            switch(iCount){
case 0:

adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;

 ////////////////////////////////////////////////////add Edit_SVG
 const paths_container_svg = [
    {
        d: `M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h3a1 1 0 0 1 .981 1.192l-.437 2.238-1.327-.295-5-1.111a1 1 0 0 0-.434 0l-5 1.11-1.327.296-.437-2.238A1 1 0 0 1 6 5h3V3zm-6.092 7.996-.125.028a1 1 0 0 0-.677 1.423l2 4a1 1 0 0 0 1.035.543L12 16.01l6.859.98a1 1 0 0 0 1.035-.543l2-4a1 1 0 0 0-.677-1.423l-.125-.028a1 1 0 0 1-.309-.02l-4-.889L12 9.024l-4.783 1.063-4 .89a1 1 0 0 1-.309.019zm6.36 7.609a3.631 3.631 0 0 1 5.465 0l.035.04a1.57 1.57 0 0 0 2.053.273 3.57 3.57 0 0 1 3.305-.344l1.245.497a1 1 0 0 1-.742 1.857l-1.245-.498a1.57 1.57 0 0 0-1.454.152 3.57 3.57 0 0 1-4.667-.62l-.035-.04a1.631 1.631 0 0 0-2.456 0l-.035.04a3.57 3.57 0 0 1-4.667.62 1.57 1.57 0 0 0-1.454-.152l-1.245.498a1 1 0 1 1-.742-1.857l1.245-.497a3.57 3.57 0 0 1 3.305.344 1.57 1.57 0 0 0 2.053-.273l.035-.04z`,
        fill: '#292D32',
        stroke: 'none',
        fillRule:'evenodd',
        clipRule:'evenodd'
    }
    
];

let okiioC = adisi_CDLC.svgMaker(paths_container_svg,"Container_Svg",yy);
adisi_CDLC.layoutInnerTD.appendChild(okiioC);
break;

case (adisi_CDLC.configurator.tableDatas-1):

adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
let crtBtn = document.createElement('button');

 ////////////////////////////////////////////////////add Edit_SVG
 const paths_down_svg = [
    {
        d: `M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z`,
        fill: '#292D32',
        stroke: 'none',
        fillRule:'evenodd',
        clipRule:'evenodd'
    }
    
];

let okiioDown = adisi_CDLC.svgMaker(paths_down_svg,"Down_Svg",yy);
 ////////////////////////////////////////////////////add Edit_SVG
 const paths_up_svg = [
    {
        d: `M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z`,
        fill: '#292D32',
        stroke: 'none',
        fillRule:'evenodd',
        clipRule:'evenodd'
    }
    
];

let okiioUp = adisi_CDLC.svgMaker(paths_up_svg,"Up_Svg",yy);

crtBtn.appendChild(okiioDown);
// crtBtn.innerHTML = '0';

// adisi_CDLC.layoutInnerTD.innerHTML = '0';
adisi_CDLC.layoutInnerTD.appendChild(crtBtn);

addEventListenerToElement(crtBtn,'click',function (event) {
    event.preventDefault();
    let expandableDivSelect  = document.getElementById(adisi_CDLC.innerName+'expandableTableDiv'+yy);
    dynamic_containers_page_map.get('refferences').set(`${adisi_CDLC.innerName}expandableTable${yy}_${adisi_CDLC.innerName}_Div`,expandableDivSelect);

    console.log('close open the window',event,'okiioUp',okiioUp,'expandableDivSelect',expandableDivSelect,'display',expandableDivSelect.style.display);
    if(expandableDivSelect.style.display == 'block'){

        expandableDivSelect.style.display = 'none';
        crtBtn.innerHTML = '';
        crtBtn.appendChild(okiioDown);
    }else{

        expandableDivSelect.style.display = 'block';

        crtBtn.innerHTML = '';
        crtBtn.appendChild(okiioUp);
    }

    // adisi_CDLC.expandableTableDiv.setAttribute('id', adisi_CDLC.innerName+'expandableTableDiv'+yy);

  

})

// crtBtn.addEventListener('click',function (event) {
//     event.preventDefault();
//     let expandableDivSelect  = document.getElementById(adisi_CDLC.innerName+'expandableTableDiv'+yy);
//     console.log('close open the window',event,'expandableDivSelect',expandableDivSelect,'display',expandableDivSelect.style.display);
//     if(expandableDivSelect.style.display == 'block'){

//         expandableDivSelect.style.display = 'none';
//     }else{

//         expandableDivSelect.style.display = 'block';
//     }

//     // adisi_CDLC.expandableTableDiv.setAttribute('id', adisi_CDLC.innerName+'expandableTableDiv'+yy);

  

// })

break;

case 1:

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
adisi_CDLC.layoutInnerTD.setAttribute('id', `mainTableRow_container_naam_${yy}`);
lister_ul = document.createElement('ul');

lister_li = document.createElement('li');

 lister_li.innerHTML ='River Island';


//  lister_li.style.lineHeight = '0.5';
 lister_li.style.fontSize = '1.4em';
 lister_li.style.fontWeight = '6';

 lister_ul.appendChild(lister_li)
 lister_ul.style.margin ='1px';

 lister_li = document.createElement('li');

 lister_li.style.padding = '10px 0px';
//  lister_li.style.lineHeight = '1';
 lister_li.style.color = 'yellow';
 lister_li.innerHTML =paginatedData[yy].container_naam;
 adisi_CDLC.layoutInnerTD.style.textAlign = '';
 adisi_CDLC.layoutInnerTD.style.verticalAlign = '';


 lister_ul.appendChild(lister_li)
// deleteButtonZ.setAttribute('id', adisi_CDLC.innerName+'de
// adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
// adisi_CDLC.layoutInnerTD.innerHTML =globalRoute;
adisi_CDLC.layoutInnerTD.appendChild(lister_ul)
// adisi_CDLC.layoutInnerTD.innerHTML =globalRoute;
adisi_CDLC.layoutInnerTD.style.width ='14%';

break;

/////////////////////// START CASE 2 TD


case 2:
    // lister_ul = document.createElement('li');

    lister_ul = document.createElement('ul');
   
    //////////////////////////////////////////////

    let lister_table = document.createElement('table');
    lister_table.style.width = '100%';
    lister_table.style.height = '100%';

    lister_table.style.display = 'inline';
    let lister_table_tr = document.createElement('tr');
    lister_table_tr.style.width = '100%';
    lister_table_tr.style.height = '100%';


    let lister_table_td = document.createElement('td');
    lister_table_td.style.padding ='0';
    lister_table_td.style.margin ='0';
    
 
    for(let byy=0; byy<2; byy++){
        lister_table_tr = document.createElement('tr');
        lister_table_tr.style.width = '100%';
        lister_table_tr.style.height = '100%';
        lister_table.appendChild(lister_table_tr);
for(let yy=0; yy<=2; yy++){

    lister_table_td = document.createElement('td');
    lister_table_tr.appendChild(lister_table_td);
    // lister_table_td.innerHTML = 'zzzaaaaap'+yy;
    lister_table_td.style.width = '150px';
    lister_table_td.style.border = '2px solid grey';
    switch(byy){


        case 1:

    switch(yy){

        case 0:
            lister_table_td.innerHTML = 'Ned';

        break;

        case 1:
            lister_table_td.innerHTML = '>>';

        break;

        case 2:
            lister_table_td.innerHTML = 'Sur';

        break;



    }
    break;

    case 0:
        lister_table_td.style.fontWeight = '8';
        switch(yy){

    case 0:
        let departureDate = document.createElement('p');
        departureDate.innerHTML ='29-08-1238';
        departureDate.style.fontSize = '1.3em';
         // lister_table_td.innerHTML = '23-09-2087';
         lister_table_td.appendChild(departureDate);
        // lister_table_td.innerHTML = '29-08-1238';

    break;

    case 1:
        lister_table_td.innerHTML = '>>';

    break;

    case 2:
       let arrivalDate = document.createElement('p');
       arrivalDate.innerHTML ='23-09-2087';
       arrivalDate.style.fontSize = '1.3em';
        // lister_table_td.innerHTML = '23-09-2087';
        lister_table_td.appendChild(arrivalDate);
        
    break;

        }

    break;

}


}
    }

    lister_li = document.createElement('li');
    lister_li.style.display = 'inline';
    lister_li.style.lineHeight = '0.3';
    lister_li.style.marginBottom = '0';
lister_li.style.padding = '0';
innerLister_ul.style.margin = '0';
innerLister_ul.style.paddingLeft = '0';
innerLister_li.style.marginBottom = '0';
innerLister_li.style.padding = '0';

lister_ul.style.margin = '0';
lister_ul.style.paddingLeft = '0';


    innerLister_ul= document.createElement('ul');
    innerLister_li = document.createElement('li');
    
    innerLister_li.innerHTML ='Nederland';
    innerLister_li.style.display = 'inline';
    innerLister_li.style.marginRight= '6px';
    
    
     lister_li.appendChild(innerLister_li);
     /////////////////////////////////////////////
    
    
    
     innerLister_li = document.createElement('li');
    
     innerLister_li.innerHTML ='------>';
     innerLister_li.style.display = 'inline';
     innerLister_li.style.marginRight= '6px';
    
    
    
    
     lister_li.appendChild(innerLister_li);
     ///////////////////////////////////////////////
    
     innerLister_li = document.createElement('li');
    
     innerLister_li.innerHTML ='Suriname';
     innerLister_li.style.display = 'inline';
    
     innerLister_li.style.marginRight= '6px';
    
    
     lister_li.appendChild(innerLister_li);
    ///////////////////////////////////////////////////////
    
     lister_li.style.lineHeight = '0.5';
     lister_li.style.fontSize = '1em';
     lister_li.style.fontWeight = '2';
     lister_ul.appendChild(lister_li)
      //////////////////////////////////////////////
    lister_li = document.createElement('li');
    // lister_li.style.display = 'inline';
    
    innerLister_ul= document.createElement('ul');
    innerLister_li = document.createElement('li');
    
    innerLister_li.innerHTML ='Nederland';
    innerLister_li.style.display = 'inline';
    innerLister_li.style.marginRight= '6px';
    innerLister_li.style.backgroundColor= 'grey';
    innerLister_li.style.width= '20%';
    innerLister_li.style.height= '100%';
    innerLister_li.style.border= '2px solid black';
    
    
    // //
     //////////////////////////////////////////////
    //  lister_li = document.createElement('li');
    //  lister_li.style.display = 'inline';
     
     innerLister_ul= document.createElement('ul');
     innerLister_li = document.createElement('li');
     innerLister_li.style.fontSize ='0.8em';
     innerLister_li.innerHTML ='22-11-2022';
     innerLister_li.style.display = 'inline';
     innerLister_li.style.marginRight= '6px';
     
     
      lister_li.appendChild(innerLister_li);
      /////////////////////////////////////////////
     
     
     
      innerLister_li = document.createElement('li');
     
      innerLister_li.innerHTML ='------>';
      innerLister_li.style.display = 'inline';
      innerLister_li.style.marginRight= '6px';
     
     
     
     
      lister_li.appendChild(innerLister_li);
      ///////////////////////////////////////////////
    //  lister_li.appendChild(innerLister_li);
     lister_ul.appendChild(lister_li)
     /////////////////////////////////////////////

       
     innerLister_li = document.createElement('li');
     
     innerLister_li.innerHTML ='29-11-2022';
     innerLister_li.style.display = 'inline';
     innerLister_li.style.marginRight= '6px';
    
    
    
    
     lister_li.appendChild(innerLister_li);
     
     adisi_CDLC.layoutInnerTD.appendChild(lister_table)

    //  adisi_CDLC.layoutInnerTD.appendChild(lister_ul)
    
     adisi_CDLC.layoutInnerTD.style.width ='25%';
    
    break;
    ////////////////////////////// END CASE 2 TD

break;
////////////////////////////// END CASE 2 TD
////////////////////////  CASE 3
case 3:
    adisi_CDLC.layoutInnerTD.style.width ='0%';
    // lister_ul = document.createElement('li');


break;
///////////////////////////////////////////CASE 4

case 4:
    adisi_CDLC.layoutInnerTD.style.width ='0%';
    adisi_CDLC.layoutInnerTD.style.backgroundColor ='red';
    // lister_ul = document.createElement('li');


break;
//////////////////////////////////////
case 5:

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;

let deleteButtonZ= document.createElement('button');
deleteButtonZ.setAttribute('id', adisi_CDLC.innerName+'deleteButtonZ'+yy);
deleteButtonZ.setAttribute('class', 'crudButtons');
// deleteButtonZ.innerHTML = 'delete';
let tablecellDiv= document.createElement('span');
tablecellDiv.style.display = 'inline-flex';
tablecellDiv.style.width = '100%';
tablecellDiv.style.height = '100%';
tablecellDiv.style.right = '2%';

tablecellDiv.style.justifyContent = 'right';


let editButtonZ= document.createElement('button');
editButtonZ.setAttribute('class', 'crudButtons');
editButtonZ.style.display = 'inline-flex';
editButtonZ.style.marginRight = '10px';

adisi_CDLC.layoutInnerTD.style.width = '15%';

adisi_CDLC.layoutInnerTD.style.alignItems = 'right';
adisi_CDLC.layoutInnerTD.style.justifyItems = 'right';

 //////////////////////////////////////////////
let lister_table_B = document.createElement('table');
 lister_table_B.style.width = '100%';
 lister_table_B.style.height = '100%';

lister_table_B.style.display = 'inline';
let lister_table_tr_B = document.createElement('tr');
 lister_table_tr_B.style.width = '100%';
 lister_table_tr_B.style.height = '100%';

let lister_table_td_B = document.createElement('td');
 lister_table_td_B.style.padding ='0';
 lister_table_td_B.style.margin ='0';
 
 adisi_CDLC.layoutInnerTD.appendChild(lister_table_B);
 for(let byy=0; byy<2; byy++){
     lister_table_tr_B = document.createElement('tr');
     lister_table_tr_B.style.width = '100%';
     lister_table_tr_B.style.height = '100%';
     lister_table_B.appendChild(lister_table_tr_B);
for(let yy=0; yy<=2; yy++){

    if(yy == 0){

        lister_table_td_B.setAttribute('colspan','3')
        lister_table_td_B = document.createElement('td');
        lister_table_tr_B.appendChild(lister_table_td_B);
        // lister_table_td.innerHTML = 'zzzaaaaap'+yy;
        lister_table_td_B.style.width = '150px';
        lister_table_td_B.style.border = '2px solid grey';
    }

 switch(byy){


     case 1:

 switch(yy){

     case 0:
         lister_table_td_B.innerHTML = '';
         lister_table_td_B.setAttribute('colspan','3')
        //  lister_table_td_B.appendChild(lister_table_td_B);
        //  lister_table_td_B.innerHTML = 'aaap';


     break;

     case 1:
    //    let statBar = document.createElement('span');
////////////////////////////////////////

let progressDiv = document.createElement('div');
progressDiv.setAttribute('id',`${adisi_CDLC.type}progress-container_${CounterZ}`)
progressDiv.style.width = '100%';
progressDiv.style.height = '20px';
progressDiv.style.border = '1px solid #000';
progressDiv.style.position = 'relative';
progressDiv.style.backgroundColor = '#76c7c0';

let progressSpan = document.createElement('span');
progressSpan.setAttribute('id',`${adisi_CDLC.type}progress-bar_${CounterZ}`)

progressSpan.style.width = '0%';
progressSpan.style.height = '100%';
progressSpan.style.display = 'block';
progressSpan.style.backgroundColor = '#38cc0f';


let progressButton = document.createElement('button');
progressButton.setAttribute('id',`${adisi_CDLC.type}start-button_${CounterZ}`)
console.log('start  prograss',adisi_CDLC)
progressButton.innerHTML = 'start progress ';
// progressSpan.appendChild(progressButton)
paginatedData[yy]

progressDiv.appendChild(progressSpan)

lister_table_td_B.appendChild(progressDiv)
lister_table_td_B.appendChild(progressButton)
// Simulate progress
/////////////////////////////////

// Function to update the progress
function updateProgress(percentage) {
  // Cap the percentage between 0 and 100
  const cappedPercentage = Math.min(Math.max(percentage, 0), 100);
  progressSpan.style.width = `${cappedPercentage}%`; // Update the width of the progress bar
}


/////////////////////////////
progressButton.addEventListener('click', (event) => {

    console.log('startbotton clicked, progressButton.',event.target)
  let progress = 0; // Starting progress

  const interval = setInterval(() => {
    progress += 5; // Increment progress by 5%
    updateProgress(progress);

    // Stop updating when progress reaches 100%
    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 500); // Update every 500ms
});
// /////////////////////////////////////
//         lister_table_td_B.innerHTML = `<div id="progress-container" style="width: 100%; height: 20px; border: 1px solid #000; position: relative; background-color:  #38cc0f;">
//   <span id="progress-bar" style="display: block; height: 100%; width: 0%; background-color: #76c7c0;"></span>
// </div><button id="start-button">Start Progress</button>`;
//         //  lister_table_td_B.innerHTML = 'aaap';
//         //////////////////////////////////////////////
// // Select the progress bar element
// const progressBar = document.getElementById('progress-bar');
// console.log('startbotton- progressBar',progressBar)
// const startButton = document.getElementById('start-button');

// // Function to update the progress
// function updateProgress(percentage) {
//   // Cap the percentage between 0 and 100
//   const cappedPercentage = Math.min(Math.max(percentage, 0), 100);
//   progressBar.style.width = `${cappedPercentage}%`; // Update the width of the progress bar
// }

// // Simulate progress
// startButton.addEventListener('click', () => {
//   let progress = 0; // Starting progress

//   const interval = setInterval(() => {
//     progress += 5; // Increment progress by 5%
//     updateProgress(progress);

//     // Stop updating when progress reaches 100%
//     if (progress >= 100) {
//       clearInterval(interval);
//     }
//   }, 500); // Update every 500ms
// });
        ///////////////////////////////////

     break;

     case 2:
      
        //  lister_table_td_B.innerHTML = 'Sur';

     break;



 }
 break;

 case 0:
     lister_table_td_B.style.fontWeight = '8';
     switch(yy){

 case 0:
     lister_table_td_B.innerHTML = '';

 break;

 case 1:
     lister_table_td_B.innerHTML = '';

 break;

 case 2:
      ////////////////////////////////////////////////////add Edit_SVG
  const paths_edit_svg = [
    {
        d: `M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z`,
        fill: '#292D32',
        stroke: 'none'
    },
    {
        d:`M19.0206 3.48162C17.0806 1.54162 15.1806 1.49162 13.1906 3.48162L11.9806 4.69162C11.8806 4.79162 11.8406 4.95162 11.8806 5.09162C12.6406 7.74162 14.7606 9.86162 17.4106 10.6216C17.4506 10.6316 17.4906 10.6416 17.5306 10.6416C17.6406 10.6416 17.7406 10.6016 17.8206 10.5216L19.0206 9.31162C20.0106 8.33162 20.4906 7.38162 20.4906 6.42162C20.5006 5.43162 20.0206 4.47162 19.0206 3.48162Z`,
        fill: '#292D32',
    },

    {
        d: `M15.6103 11.5308C15.3203 11.3908 15.0403 11.2508 14.7703 11.0908C14.5503 10.9608 14.3403 10.8208 14.1303 10.6708C13.9603 10.5608 13.7603 10.4008 13.5703 10.2408C13.5503 10.2308 13.4803 10.1708 13.4003 10.0908C13.0703 9.81078 12.7003 9.45078 12.3703 9.05078C12.3403 9.03078 12.2903 8.96078 12.2203 8.87078C12.1203 8.75078 11.9503 8.55078 11.8003 8.32078C11.6803 8.17078 11.5403 7.95078 11.4103 7.73078C11.2503 7.46078 11.1103 7.19078 10.9703 6.91078C10.9491 6.86539 10.9286 6.82022 10.9088 6.77532C10.7612 6.442 10.3265 6.34455 10.0688 6.60231L4.34032 12.3308C4.21032 12.4608 4.09032 12.7108 4.06032 12.8808L3.52032 16.7108C3.42032 17.3908 3.61032 18.0308 4.03032 18.4608C4.39032 18.8108 4.89032 19.0008 5.43032 19.0008C5.55032 19.0008 5.67032 18.9908 5.79032 18.9708L9.63032 18.4308C9.81032 18.4008 10.0603 18.2808 10.1803 18.1508L15.9016 12.4295C16.1612 12.1699 16.0633 11.7245 15.7257 11.5804C15.6877 11.5642 15.6492 11.5476 15.6103 11.5308Z`,
        fill: '#292D32',
        stroke: '#333',
        'stroke-width': '1'
    }
];

  let okiio = adisi_CDLC.svgMaker(paths_edit_svg,"edit_Svg",yy);
  /////////////////////////////////////////////////// END  ADD EDIT SVG

  console.log('svgMaker()',okiio);
//   SymbolSvgPlane.appendChild(iconPathPlane)

//   useElemPlane.appendChild(SymbolSvgPlane)
 
//  iconSvgPlane.appendChild( useElemPlane)
//  // iconSvgAfz.appendChild( iconPath)

// newTDD0Creation.appendChild(iconSvgPlane)
// editButtonZ.style.display = 'flex';
editButtonZ.style.height = '4px';
editButtonZ.appendChild(okiio);
tablecellDiv.appendChild(editButtonZ);


// deleteButtonZ.style.display = 'flex';
/////////////////////////////////////////
////////////////////////////////////////////////////add Edit_SVG
const paths_delete_svg = [
    {
        d: `M5,2 C5,0.895431 5.89543,0 7,0 L9,0 C10.1046,0 11,0.895431 11,2 L11,3 L14,3 C14.5523,3 15,3.44772 15,4 C15,4.55228 14.5523,5 14,5 L13.8462,5 L13.142,14.1534 C13.0619,15.1954 12.193,16 11.1479,16 L4.85206,16 C3.80699,16 2.93811,15.1954 2.85795,14.1534 L2.15385,5 L2,5 C1.44772,5 1,4.55228 1,4 C1,3.44772 1.44772,3 2,3 L5,3 L5,2 Z M7,3 L9,3 L9,2 L7,2 L7,3 Z M4.15975,5 L4.85206,14 L11.1479,14 L11.8402,5 L4.15975,5 Z`,
        fill: '#292D32',
        stroke: 'none',
        fillRule:'evenodd'
    }
  
];

  let delete_svg = adisi_CDLC.svgMaker(paths_delete_svg,"delete_Svg",yy);

  deleteButtonZ.appendChild(delete_svg);
  /////////////////////////////////////////////////// END  ADD EDIT SVG
 deleteButtonZ.style.height = '4px';
/////////////////////////////
// editButtonZ.innerHTML = 'edit';

editButtonZ.setAttribute('id', adisi_CDLC.innerName+'editButtonZ'+yy);

dynamic_containers_page_map.get('elements').set(`${adisi_CDLC.innerName}editButtonZ${yy}_createPaginationContent` ,editButtonZ);


// adisi_CDLC.layoutInnerTD.appendChild(breaker);
// adisi_CDLC.layoutInnerTD.appendChild(deleteButtonZ);
tablecellDiv.style.alignItems = 'center';
tablecellDiv.appendChild(deleteButtonZ);

lister_table_td_B.appendChild(tablecellDiv);
    //  lister_table_td_B.innerHTML = '23-09-2087';

 break;

     }

 break;

}


}
 }
// let breaker= document.createElement('br');

// editButtonZ.innerHTML = `
// <svg width="24px" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z" fill="#292D32"/>
// <path d="M19.0206 3.48162C17.0806 1.54162 15.1806 1.49162 13.1906 3.48162L11.9806 4.69162C11.8806 4.79162 11.8406 4.95162 11.8806 5.09162C12.6406 7.74162 14.7606 9.86162 17.4106 10.6216C17.4506 10.6316 17.4906 10.6416 17.5306 10.6416C17.6406 10.6416 17.7406 10.6016 17.8206 10.5216L19.0206 9.31162C20.0106 8.33162 20.4906 7.38162 20.4906 6.42162C20.5006 5.43162 20.0206 4.47162 19.0206 3.48162Z" fill="#292D32"/>
// <path d="M15.6103 11.5308C15.3203 11.3908 15.0403 11.2508 14.7703 11.0908C14.5503 10.9608 14.3403 10.8208 14.1303 10.6708C13.9603 10.5608 13.7603 10.4008 13.5703 10.2408C13.5503 10.2308 13.4803 10.1708 13.4003 10.0908C13.0703 9.81078 12.7003 9.45078 12.3703 9.05078C12.3403 9.03078 12.2903 8.96078 12.2203 8.87078C12.1203 8.75078 11.9503 8.55078 11.8003 8.32078C11.6803 8.17078 11.5403 7.95078 11.4103 7.73078C11.2503 7.46078 11.1103 7.19078 10.9703 6.91078C10.9491 6.86539 10.9286 6.82022 10.9088 6.77532C10.7612 6.442 10.3265 6.34455 10.0688 6.60231L4.34032 12.3308C4.21032 12.4608 4.09032 12.7108 4.06032 12.8808L3.52032 16.7108C3.42032 17.3908 3.61032 18.0308 4.03032 18.4608C4.39032 18.8108 4.89032 19.0008 5.43032 19.0008C5.55032 19.0008 5.67032 18.9908 5.79032 18.9708L9.63032 18.4308C9.81032 18.4008 10.0603 18.2808 10.1803 18.1508L15.9016 12.4295C16.1612 12.1699 16.0633 11.7245 15.7257 11.5804C15.6877 11.5642 15.6492 11.5476 15.6103 11.5308Z" fill="#292D32"/>
// </svg>`;

//////////////////////////////////////////

///////////SVG PLANE


  ////////////////////////////////////////////////////

//   const iconSvgPlane = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//   const SymbolSvgPlane = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');

//   SymbolSvgPlane.setAttribute('id', 'PlaneIconowa'+yy);


//  let  useElemPlane= document.createElementNS('http://www.w3.org/2000/svg', 'use');

// useElemPlane.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#PlaneIconowa'+yy);

//   iconSvgPlane.setAttribute('fill', 'black');
//   iconSvgPlane.setAttribute('viewBox', '0 0 186 186');
//   // iconSvgAfz.setAttribute('stroke', 'black');
//   iconSvgPlane.setAttribute('width', '100%');
//   iconSvgPlane.setAttribute('height', 'auto');

//   iconSvgPlane.setAttribute('data-id', 'ButtonZ'+yy);
//   event.target.attributes.id
  // iconSvgAfz.classList.add('post-icon');

//   const iconPathPlane_0 = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'path'
//   );

//   const iconPathPlane_1 = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'path'
//   );

//   const iconPathPlane_2 = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'path'
//   );

//   iconPathPlane_0.setAttribute(
//     'd',
//     `M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z`);


//     iconPathPlane_1.setAttribute(
//         'd',
//         `M19.0206 3.48162C17.0806 1.54162 15.1806 1.49162 13.1906 3.48162L11.9806 4.69162C11.8806 4.79162 11.8406 4.95162 11.8806 5.09162C12.6406 7.74162 14.7606 9.86162 17.4106 10.6216C17.4506 10.6316 17.4906 10.6416 17.5306 10.6416C17.6406 10.6416 17.7406 10.6016 17.8206 10.5216L19.0206 9.31162C20.0106 8.33162 20.4906 7.38162 20.4906 6.42162C20.5006 5.43162 20.0206 4.47162 19.0206 3.48162Z`);
  
//         iconPathPlane_2.setAttribute(
//             'd',
//             `M15.6103 11.5308C15.3203 11.3908 15.0403 11.2508 14.7703 11.0908C14.5503 10.9608 14.3403 10.8208 14.1303 10.6708C13.9603 10.5608 13.7603 10.4008 13.5703 10.2408C13.5503 10.2308 13.4803 10.1708 13.4003 10.0908C13.0703 9.81078 12.7003 9.45078 12.3703 9.05078C12.3403 9.03078 12.2903 8.96078 12.2203 8.87078C12.1203 8.75078 11.9503 8.55078 11.8003 8.32078C11.6803 8.17078 11.5403 7.95078 11.4103 7.73078C11.2503 7.46078 11.1103 7.19078 10.9703 6.91078C10.9491 6.86539 10.9286 6.82022 10.9088 6.77532C10.7612 6.442 10.3265 6.34455 10.0688 6.60231L4.34032 12.3308C4.21032 12.4608 4.09032 12.7108 4.06032 12.8808L3.52032 16.7108C3.42032 17.3908 3.61032 18.0308 4.03032 18.4608C4.39032 18.8108 4.89032 19.0008 5.43032 19.0008C5.55032 19.0008 5.67032 18.9908 5.79032 18.9708L9.63032 18.4308C9.81032 18.4008 10.0603 18.2808 10.1803 18.1508L15.9016 12.4295C16.1612 12.1699 16.0633 11.7245 15.7257 11.5804C15.6877 11.5642 15.6492 11.5476 15.6103 11.5308Z`);
      // Define path data and attributes for each path



// Iterate over each path data and create path elements
// paths.forEach(pathData => {
//     const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     Object.keys(pathData).forEach(attr => {
//         path.setAttribute(attr, pathData[attr]);
//     });
//     SymbolSvgPlane.appendChild(path);

//     // svg.appendChild(path); // Append each path to the SVG
// });
        // const iconPathAfz2 = document.createElementNS(
  
  
  //   'http://www.w3.org/2000/svg',
  //   'path'
  // );
  // iconPathAfz2.setAttribute(
  //   'd',
  //   'M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
  // );

// adisi_CDLC.layoutInnerTD.style.display = 'inline-flex';
// adisi_CDLC.layoutInnerTD.appendChild(tablecellDiv);
// adisi_CDLC.layoutInnerTD.appendChild(lister_table_B);

editButtonZ.setAttribute('id', adisi_CDLC.innerName+'editButtonZ'+yy);
dynamic_containers_page_map.get('elements').set(`${adisi_CDLC.innerName}deleteButtonZ${yy}_createPaginationContent` ,deleteButtonZ);

adisi_CDLC.addEventListenerToElement(deleteButtonZ,'click',function (event) {
    event.preventDefault();
    adisi_CDLC.ParentcontainerClass.laravelFunctions('/deletecontainer');
console.log('theseare the crudButtons deleteButtonZ',event,event.target,'adisi_CDLC',adisi_CDLC)
  },'deleteButton')


  adisi_CDLC.addEventListenerToElement(editButtonZ,'click',function (event) {
    event.preventDefault();
    const button = event.target.closest('button[id]');
    let strippedIndexer = '';
    if (button) {
        // Get the ID of the button
        const buttonId = button.id;
        console.log('Clicked button with ID:', buttonId);

        strippedIndexer =   buttonId.split('ButtonZ');
    } else {
        console.log('Click was not on a button with an ID');
    }
    this.strippedIndex =    strippedIndexer;
console.log('theseare the crudButtons editButtonZ',event,event.target,'this.strippedIndex',this.strippedIndex[1]) 


let containerpopup = document.getElementById(adisi_CDLC.ParentcontainerClass.type+'userPopUp');
dynamic_containers_page_map.get('refferences').set(`${adisi_CDLC.ParentcontainerClass.type}userPopup_${adisi_CDLC.innerName}_Div`,containerpopup);

this.innerContentArea = document.getElementById(adisi_CDLC.ParentcontainerClass.type+'innerContent');
dynamic_containers_page_map.get('refferences').set(`${adisi_CDLC.ParentcontainerClass.type}innerContentArea_${adisi_CDLC.innerName}_Div`,this.innerContentArea);

this.titleContentArea = document.getElementById(adisi_CDLC.ParentcontainerClass.type+'contentTitle');
dynamic_containers_page_map.get('refferences').set(`${adisi_CDLC.ParentcontainerClass.type}titleContentArea_${adisi_CDLC.innerName}_Div`,this.titleContentArea);

this.titleContentArea.innerHTML = 'Edit Container';

dynamic_containers_page_map.get('refferences').set(`containerpopup_createPaginationContent` ,containerpopup);
dynamic_containers_page_map.get('refferences').set(`this_innerContentArea_createPaginationContent` ,this.innerContentArea);
dynamic_containers_page_map.get('refferences').set(`this_titleContentArea_createPaginationContent` ,this.titleContentArea);


this.innerContentArea.innerHTML = '';
adisi_CDLC.ParentcontainerClass.removeConfirmForm(this.strippedIndex[1]);
// this.innerContentArea.innerHTML = 'wagwaan soldia';
this.innerContentArea.appendChild(adisi_CDLC.ParentcontainerClass.confirmForm);
// this.InnercontentArea.setAttribute('id', type+'innerContent');
// containerinnerContent.innerHTML = '';
containerpopup.style.display ='block';
console.log('eidition',containerpopup)

// removeConfirmForm()
  },'editButton');
// adisi_CDLC.layoutInnerTD.innerHTML ='edit delete'; 
  let crudButtons = document.getElementsByClassName("crudButtons");
  dynamic_containers_page_map.get('refferences').set(`crudButtons`,crudButtons);

  console.log('theseare the crudButtons',crudButtons)
  for(let ii=0; ii<crudButtons.length; ii++){
    console.log('theseare the crudButtons',ii)
    adisi_CDLC.addEventListenerToElement(crudButtons[ii],'click',function (event) {
    event.preventDefault();
console.log('theseare the crudButtons',event)
  },`crudButtons${ii}`)
//   crudButtons[ii].addEventListener('click',function (event) {
//     event.preventDefault();
// console.log('theseare the crudButtons',event)
//   })
}

dynamic_containers_page_map.get('refferences').set(`crudButtons_createPaginationContent` ,crudButtons);



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
    adisi_CDLC.expandableTableDiv.style.height = 'auto';
    adisi_CDLC.expandableTableDiv.style.display = 'block';
    adisi_CDLC.expandableTableDiv.style.border = '5px solid blue';
    adisi_CDLC.expandableTableDiv.style.backgroundColor= '#ac9b7e';
    adisi_CDLC.expandableTableDiv.setAttribute('id', adisi_CDLC.innerName+'expandableTableDiv'+yy);
    adisi_CDLC.expandableTableDiv.style.boxSizing= 'border-box';
    adisi_CDLC.expandableTableDiv.style.borderRadius= '12px';
    adisi_CDLC.expandableTableDiv.style.padding = '7px';


    dynamic_containers_page_map.get('elements').set(`${adisi_CDLC.innerName}expandableTableDiv${yy}_createPaginationContent` ,adisi_CDLC.expandableTableDiv);
    for(let iCountTRs=0; iCountTRs<7; iCountTRs++){


       
    ///////////////////////////////////TABLE
    adisi_CDLC.layoutInnerTable = document.createElement('table');
    adisi_CDLC.layoutInnerTable.style.width = '100%';
    adisi_CDLC.layoutInnerTable.style.height = '100%';
    adisi_CDLC.layoutInnerTable.style.tableLayout = 'fixed';
    adisi_CDLC.layoutInnerTable.style.borderCollapse = 'collapse';

   
    adisi_CDLC.layoutInnerTable.style.backgroundColor = '#ac9b7e';
    
    adisi_CDLC.layoutInnerTable.setAttribute('id', adisi_CDLC.innerName+'layout'+iCountTRs+'ExpandableInnerTable'+yy);
    adisi_CDLC.layoutInnerTable.style.boxSizing= 'border-box';

    dynamic_containers_page_map.get('elements').set(`${adisi_CDLC.innerName}layout${iCountTRs}InnerTable${yy}_createPaginationContent` ,adisi_CDLC.layoutInnerTable);


    adisi_CDLC.layoutInnerTR = document.createElement('tr');
    adisi_CDLC.layoutInnerTR.style.width = '100%';
    adisi_CDLC.layoutInnerTR.setAttribute('id', adisi_CDLC.innerName+'layout'+iCountTRs+'ExpandableInnerTR'+yy);
    adisi_CDLC.layoutInnerTR.style.boxSizing= 'border-box';

    dynamic_containers_page_map.get('elements').set(`${adisi_CDLC.innerName}layout${iCountTRs}InnerTR${yy}_createPaginationContent` ,adisi_CDLC.layoutInnerTR);


    for(let iCount=0; iCount<(adisi_CDLC.configurator.tableDatas); iCount++){

        adisi_CDLC.layoutInnerTD = document.createElement('td');
        adisi_CDLC.layoutInnerTD.style.width = '10%';
        adisi_CDLC.layoutInnerTD.style.backgroundColor = 'orange';
        adisi_CDLC.layoutInnerTD.style.border = '1px solid white'; 
        adisi_CDLC.layoutInnerTD.setAttribute('id', adisi_CDLC.innerName+'layout'+iCountTRs+'Expandable'+yy+'InnerTD'+iCount);
        adisi_CDLC.layoutInnerTD.style.boxSizing= 'border-box';
        adisi_CDLC.layoutInnerTD.style.textOverflow= 'ellipsis';
        adisi_CDLC.layoutInnerTD.style.padding = '7px';
        adisi_CDLC.layoutInnerTD.style.fontSize = 'clamp(12px, 1.5vw, 20px)';
        adisi_CDLC.layoutInnerTD.style.fontSize = '1vw';
        adisi_CDLC.layoutInnerTD.style.lineHeight = '1.7em';

        adisi_CDLC.layoutInnerTD.style.transform = 'scale(1)';
        adisi_CDLC.layoutInnerTD.style.transformOrigin = 'left';


     
        adisi_CDLC.layoutInnerTD.style.overFlow = 'hidden';
        adisi_CDLC.layoutInnerTD.style.whiteSpace = 'nowrap';

        dynamic_containers_page_map.get('elements').set(`${adisi_CDLC.innerName}layout${yy}InnerTD${iCount}_create${iCountTRs}PaginationContent` ,adisi_CDLC.layoutInnerTD);

        
        // if( iCountTRs)

        	

    // Dep.date
    // Departure loc.
    // Arrival date
    // Arrival loc.
    // Shipping ID
    // Status
    // Note
    // Created at
    

let tdValue = '';

let tdValue_2 = '';
let tdValue_2Answa = '';
let tdValue_2Answa_Id = '';
let tdValueAnswa_Id = '';

        let tdValueAnswa = '';

       
        switch(iCountTRs){
            case 0:
                tdValue = 'Name :';
                tdValueAnswa = `${paginatedData[yy].container_naam}`;
                tdValue_2 = `Dep.date :`;
                tdValue_2Answa = `${paginatedData[yy].date_vertrek}`;
               tdValue_2Answa_Id = 'date_vertrek';
                tdValueAnswa_Id = 'container_naam';
                 break;
                 case 1:
                    tdValue = 'containerID :';
                    tdValueAnswa = `${paginatedData[yy].id}`;
                    tdValue_2 = `Departure loc :`;
                    tdValue_2Answa = `${paginatedData[yy].locatie_vertrek_container}`;
                    tdValue_2Answa_Id = 'locatie_vertrek_container';
                    tdValueAnswa_Id = 'id';

                    
                     break;

                     case 2:
                        tdValue = 'Inhoud :';
                        tdValueAnswa = `${paginatedData[yy].container_inhoud}`;
                        tdValue_2 = `Arrival date :`;
                        tdValue_2Answa = `${paginatedData[yy].date_aankomst_bestemming}`;
                        tdValue_2Answa_Id = 'date_aankomst_bestemming';
                        tdValueAnswa_Id = 'container_inhoud';

                        
                         break;

                         case 3:
                            tdValue = 'Formaat :';
                            tdValueAnswa = `${paginatedData[yy].container_formaat}`;
                            tdValue_2 = `Arrival loc. :`;
                            tdValue_2Answa = `${paginatedData[yy].locatie_bestemming}`;
                            tdValue_2Answa_Id = 'locatie_bestemming';
                            tdValueAnswa_Id = 'container_formaat';


                             break;

                             case 4:
                                tdValue = 'Pick-up date :';
                                tdValueAnswa = `${paginatedData[yy].date_ophaalcontainer}`;
                                tdValue_2 = `Shipping ID :`;
                                tdValue_2Answa = `${ paginatedData[yy].vaart_id}`;
                                tdValue_2Answa_Id = 'vaart_id';
                                tdValueAnswa_Id = 'id';


                                 break;
                                
                                 case 5:
                                    tdValue = 'aanlever datum:';
                                    tdValueAnswa = `${paginatedData[yy].container_inhoud}`;
                                    tdValue_2 = `note :`;
                                    tdValue_2Answa = `${paginatedData[yy].locatie_notitie}`;
                                    tdValue_2Answa_Id = 'note';
                                    tdValueAnswa_Id = 'date_aankomst_bestemming';


                                     break;

                                     case 6:
                                        tdValue = 'Departure location :';
                                        tdValueAnswa = `${paginatedData[yy].status}`;
                                        tdValue_2 = `Created at :`;
                                        tdValue_2Answa = `${paginatedData[yy].locatie_bestemming}`;
                                        tdValue_2Answa_Id = 'date_aankomst_bestemming';

                                         break;

                         



        }
        // switch(iCountTRs){


        
        //     case 0:
// break;
//         }
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

adisi_CDLC.addEventListenerToElement(crtBtn,'click',function (event) {
event.preventDefault();
let expandableDivSelect  = document.getElementById(adisi_CDLC.innerName+'expandableTableDiv'+yy);


dynamic_containers_page_map.get('refferences').set(`${adisi_CDLC.innerName}expandableDivSelect${yy}_createPaginationContent` ,expandableDivSelect);

console.log('close open the window',event,'expandableDivSelect',expandableDivSelect,'display',expandableDivSelect.style.display);
if(expandableDivSelect.style.display == 'block'){

    expandableDivSelect.style.display = 'none';
}else{

    expandableDivSelect.style.display = 'block';
}

// adisi_CDLC.expandableTableDiv.setAttribute('id', adisi_CDLC.innerName+'expandableTableDiv'+yy);



},'expandDivBtn')
// crtBtn.addEventListener(

break;

case 1:
    adisi_CDLC.layoutInnerTD.style.width = '11%';

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
// adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', (`<ul id="unorderedListerz">\
<li>${tdValue}</li>\
</u;>`));

break;


case 2:
    adisi_CDLC.layoutInnerTD.style.width = '11%';

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
// adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
// paginatedData[yy].container_naam
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', (`<ul id="unorderedListerz" style="float:right;  color:white; text-align:right; margin:0px 10px;">\
<li id="${tdValueAnswa_Id}_${yy}" >${tdValueAnswa}</li>\
</u;>`));
{/* <li>${paginatedData[yy].created_at}</li>\ */}
break;

case 3:
    adisi_CDLC.layoutInnerTD.style.width = '2%';

break;
case 4:
    adisi_CDLC.layoutInnerTD.style.width = '11%';

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
// adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', (`<ul id="unorderedListerz"  >\
<li >${tdValue_2}</li>\
</u;>`));

break;


case 5:

adisi_CDLC.layoutInnerTD.style.width = '11%';

// adisi_CDLC.layoutInnerTD.style.width = adisi_CDLC.configurator.tableSidesWidth;
// adisi_CDLC.layoutInnerTD.innerHTML =paginatedData[yy].container_naam;
// paginatedData[yy].container_naam
adisi_CDLC.layoutInnerTD.insertAdjacentHTML('beforeEnd', (`<ul id="unorderedListerz" style="float:right;  color:white; text-align:right; margin:0px 10px;">\
<li id="${tdValue_2Answa_Id}_${yy}">${tdValue_2Answa}</li>\
</u;>`));

break;

        }
    



    adisi_CDLC.layoutInnerTR.appendChild(adisi_CDLC.layoutInnerTD);
    }
    adisi_CDLC.layoutInnerTable.appendChild(adisi_CDLC.layoutInnerTR);

    adisi_CDLC.expandableTableDiv.appendChild(adisi_CDLC.layoutInnerTable );

    
}
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

    dynamic_containers_page_map.get('refferences').set(`aapa_createPaginationContent` ,aapa);
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
//  


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
        Parentcontainer.configuratorx = Jdataz;
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
    dynamic_containers_page_map.get('refferences').set(`aapa_createTableClass_innerMethod` ,aapa);

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
dynamic_containers_page_map.get('refferences').set(`createDivLayout_innerClass` ,adisi_CDLC.getElementInnerclass);


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

dynamic_containers_page_map.get('refferences').set(`getChildrenLayouterDiv` ,this.getElement);

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
    dynamic_containers_page_map.get('refferences').set(`adisi_removeConfirmForm` ,adisi);

let Row_id = row_id;
dynamic_containers_page_map.get('refferences').set(`Row_id_removeConfirmForm` ,Row_id);

 
    console.log('removeConfirmFormxx',row_id,'paginatedData',adisi.appz[row_id])
    // Create a form element
    // const form = document.createElement('form');
    // form.style.margin = '5% 0 0 5%';
    // Loop to create 8 input fields 
    // this.form.innerHTML ='';
    this.confirmForm = document.createElement('form');

    dynamic_containers_page_map.get('elements').set(`confirmForm` ,this.confirmForm);

    for (let i = 0; i <= 10; i++) {
       // Create a label element
       const label = document.createElement('label');
       label.textContent = `Label ${i}: `; // Set the label text
       label.setAttribute('for', `${this.type}input${i}`); // Associate the label with the input
       label.style.width ='20%';
       label.style.color ='white';

       dynamic_containers_page_map.get('elements').set(`${this.type}label${i}_removeConfirmForm` ,label);

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

    dynamic_containers_page_map.get('elements').set(`${this.type}input${i}_removeConfirmForm` ,input);
    // Create a container div for label and input
   this.container = document.createElement('div');
    this.container.className = this.type+'input-confirm';
    this.container.style.width='100%';
    
    dynamic_containers_page_map.get('elements').set(`${this.type}container_removeConfirmForm` ,input);

    /////////////////////////
    this.checkboxContainer = document.createElement('div');
    dynamic_containers_page_map.get('elements').set(`checkboxContainer_removeConfirmForm` ,this.checkboxContainer);
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

      dynamic_containers_page_map.get('elements').set(`options_removeConfirmForm` ,this.options);

      
      this.label = document.createElement('label');
      
      this.checkbox = document.createElement('input');
      this.submitButton = document.createElement('button');

      dynamic_containers_page_map.get('elements').set(`submitButton_removeConfirmForm` ,this.submitButton);

      this.userCheckBoxContainer  = '';
                                      
      this.selectedOptions = {};
      
      this.jsonData = '';
      
      this.formData = '';
      
      this.lineBreak1 = document.createElement('br');
      
      this.innerUserContent = document.createElement('div');

      dynamic_containers_page_map.get('elements').set(`innerUserContent_removeConfirmForm` ,this.innerUserContent);

      
      this.popUpCloseButton = document.createElement('button');

      dynamic_containers_page_map.get('elements').set(`popUpCloseButton_removeConfirmForm` ,this.popUpCloseButton);

      
      this.userJava  = document.getElementById(`${adisi.type}`);
      
      dynamic_containers_page_map.get('refferences').set(`userJava_removeConfirmForm` ,this.userJava);

      
      this.innerContainer = document.createElement('div');
      
      this.titleContainer = document.createElement('div');
      this.innerTitleContainer = document.createElement('div');
      
      this.innerTitleContainerBB = document.createElement('div');
      this.userTitle= document.createElement("p");
      this.userTitle.innerHTML =  'Containers';
    //   this.userTitle
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

      intButtonsSpan.id ='rcf_'+adisi.type+'_buttonSpan'+i;
      intButtonsSpan.name =i;

      intCloseButtonsDiv.id ='rcf_'+adisi.type+'_closeButton'+i;
      intCloseButtonsDiv.name =i;

      intButtonsDiv.id ='rcf_'+adisi.type+'_saveButton'+i;
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
        // _'+adisi.type+'_ ${adisi.type}
        label.textContent = `${adisi.type}Edition${row_id}: `; 
        input.name = `container_naam`; // Give each input a unique name
    input.id = `container_naam_${i}`; // Set the id to match the label's "for" attribute 
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

       adisi.addEventListenerToElement(input,'input', function(event) {
        console.log('input..values',input.value)
               intButtonsSpan.style.opacity = '1';
            // intButtonsSpan.style.display = 'block';
               },'input_crud');
    //    input.addEventListener('input', function(event) {
    //     console.log('input..value',input.value)
    //            intButtonsSpan.style.opacity = '1';
    //         // intButtonsSpan.style.display = 'block';
    //            })
    adisi.addEventListenerToElement(intButtonsDiv,'click', function(event) {
                event.preventDefault();
                this.userJavaxx  = document.getElementById(input.name+"_"+Row_id);
           
                console.log('input..value  saaaave',event,'event',event.target.name,'this.userJavaxx',this.userJavaxx,'adisi',adisi,'input.value',input.value,'lable.value',label)
                adisi.updateOrNot('save',adisi.appz[row_id].id,input.value,input.name);

                this.userJavaxx.innerHTML = input.value;
                    //    intButtonsSpan.style.opacity = '1';
                    // intButtonsSpan.style.display = 'block'; 
                    ////////////////////SETMAIN TABLE VALUE ACCORDINGLY TO CHANGE
if(input.name == 'container_naam'){

    this.mainContainerName  = document.getElementById(`mainTableRow_${input.name}_${Row_id}`);

    dynamic_containers_page_map.get('refferences').set(`mainTableRow_${input.name}_${Row_id}` ,this.mainContainerName);


    this.mainContainerName.innerHTML = input.value;

    // adisi_CDLC.layoutInnerTD.setAttribute('id', 'mainTableRow_container_naam_'+yy);

}
                    // adisi.appz[row_id].container_naam =input.value;
                    intButtonsSpan.style.opacity = '0';
                       },'XXXintButtonsDiv')
            //    intButtonsDiv.addEventListener(

            adisi.addEventListenerToElement(intCloseButtonsDiv,'click', (event)=> {
                event.preventDefault();
                // adisi.updateOrNot('cancel',event.target.name,input.value,input.name);
                console.log('input..value    cancelll',event,'event',event.target.name,'input.value',input.name)
                    //    intButtonsSpan.style.opacity = '1';
                    // intButtonsSpan.style.display = 'block';
                    input.value = adisi.appz[row_id].container_naam;
                    intButtonsSpan.style.opacity = '0';
                       },"cancel_edit")
            //    intCloseButtonsDiv.addEventListener('click', function(event) {
            //     event.preventDefault();
            //     // adisi.updateOrNot('cancel',event.target.name,input.value,input.name);
            //     console.log('input..value    cancel',event,'event',event.target.name,'input.value',input.name)
            //         //    intButtonsSpan.style.opacity = '1';
            //         // intButtonsSpan.style.display = 'block';
            //         input.value = adisi.appz[row_id].container_naam;
            //         intButtonsSpan.style.opacity = '0';
            //            })
     
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
let adisi=this;
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
   
   dynamic_containers_page_map.get('elements').set('adisi_label_createForm',label);

//    type+
// Create an input element
const input = document.createElement('input');

dynamic_containers_page_map.get('elements').set('adisi_input_createForm',input);

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

dynamic_containers_page_map.get('elements').set(`adisi_${adisi.type}_createForm`,this.container);



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

  dynamic_containers_page_map.get('elements').set('adisi_options_createForm',this.options);

  
  this.label = document.createElement('label');
  dynamic_containers_page_map.get('elements').set('adisi_label_createForm',this.label);

  
  this.checkbox = document.createElement('input');
  dynamic_containers_page_map.get('elements').set('adisi_checkbox_createForm',this.checkbox);


  this.submitButton = document.createElement('button');
  dynamic_containers_page_map.get('elements').set('adisi_submitButton_createForm',this.submitButton);

  this.userCheckBoxContainer  = '';
                                  
  this.selectedOptions = {};
  
  dynamic_containers_page_map.get('elements').set('adisi_jsonData_createForm',this.jsonData);

  this.jsonData = '';
  
  this.formData = '';

  dynamic_containers_page_map.get('elements').set('adisi_formData_createForm',this.formData);

  
  this.lineBreak1 = document.createElement('br');
  
  this.innerUserContent = document.createElement('div');
  dynamic_containers_page_map.get('elements').set('adisi_innerUserContent_createForm',this.innerUserContent);

  
  this.popUpCloseButton = document.createElement('button');
  dynamic_containers_page_map.get('elements').set('adisi_popUpCloseButton_createForm',this.popUpCloseButton);

  
  this.userJava  = document.getElementById(`${adisi.type}`);
  dynamic_containers_page_map.get('refferences').set(`get_${adisi.type}_createform` ,this.userJava);

  
  this.innerContainer = document.createElement('div');
  
  this.titleContainer = document.createElement('div');
  this.innerTitleContainer = document.createElement('div');
  
  this.innerTitleContainerBB = document.createElement('div');
  this.userTitle= document.createElement("p");

  this.userPlus= document.createElement("p");
  dynamic_containers_page_map.get('elements').set(`${adisi.type}_userPlus_createForm`,this.userPlus);

  this.userHeader= document.createElement("div"); 
  dynamic_containers_page_map.get('elements').set(`${adisi.type}_userHeader_createForm`,this.userHeader);


  this.devideContainerA= document.createElement("div"); 
  dynamic_containers_page_map.get('elements').set(`${adisi.type}_devideContainerA_createForm`,this.devideContainerA);

  
  this.devideContainerB= document.createElement("div"); 
  dynamic_containers_page_map.get('elements').set(`${adisi.type}_devideContainerB_createForm`,this.devideContainerB);

////////////////////

   if(i == 0){

    label.textContent = `ContainerName : `; 
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
console.log('creatFormWorks')
    }

    // containertoggleDisplay(elementBC) {
    //     console.log('containertoggleDisplay [SSSTARTUP ---> 1 , A]   B  ,  0this.type',this.type,'elementBC',elementBC);

    //     // let element  = document.getElementById('xContainerxuserExpandTable'+elementBC);
    //     let element  = document.getElementById(`${this.type}xContainerxuserExpandTable${elementBC}`);
    //     dynamic_containers_page_map.get('refferences').set(`xContainerxuserExpandTabletoggle` ,element);

    //     if (element.style.display === 'none' || element.style.display === '') {
    //       element.style.display = 'block';
    //     } else {
    //       element.style.display = 'none';
    //     }


    //   }

    
    
popUpper(){

    let adisi = this;
    // Create a container for the checkboxes
adisi.checkboxContainer = document.createElement('div');
dynamic_containers_page_map.get('elements').set('adisi_checkboxContainer_popUpper',adisi.checkboxContainer);




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
dynamic_containers_page_map.get('elements').set('adisi_submitButton_popUpper',adisi.submitButton);



adisi.submitButton.type = 'submit'; // Set button type to submit
adisi.submitButton.textContent = 'Submit'; // Set button text
adisi.submitButton.type = 'submit'; // Set button type to submit
adisi.submitButton.style.border = '2px solid white';
adisi.submitButton.style.color = 'white';


adisi.addEventListenerToElement(adisi.submitButton,'click',function (event) {
event.preventDefault();
console.log('you are about to save thuis bitch');
adisi.formdata   = document.getElementById(adisi.type+'createNewUserForm');
dynamic_containers_page_map.get('refferences').set(`${adisi.type}createNewUserForm` ,adisi.formdata);

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

},'btn_createNewUserForm')
// adisi.submitButton.addEventListener(
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
dynamic_containers_page_map.get('elements').set('adisi_innerUserContent_popUpper',adisi.innerUserContent);





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
dynamic_containers_page_map.get('elements').set('adisi_popUpCloseButton_popUpper',adisi.popUpCloseButton);




adisi.popUpCloseButton.innerHTML ='X';
adisi.popUpCloseButton.style.width = '30px';
adisi.popUpCloseButton.style.height = '30px';
adisi.popUpCloseButton.style.backgroundColor = 'grey';
adisi.popUpCloseButton.style.border = '2px solid white';
adisi.popUpCloseButton.style.color = 'white';

adisi.innerUserPopUp.appendChild(adisi.popUpCloseButton);
adisi.userPopUp.appendChild(adisi.innerUserPopUp);
adisi.userPopUp.appendChild(adisi.innerUserContent);



adisi.userJava  = document.getElementById(`${adisi.type}`);
dynamic_containers_page_map.get('refferences').set(`${adisi.type}_popUpper` ,adisi.userJava);



adisi.userJava.style.position = 'relative';




////////////////////////////////
adisi.innerContainer = document.createElement('div');
dynamic_containers_page_map.get('elements').set('adisi_innerContainer_popUpper',adisi.innerContainer);




adisi.innerContainer.style.display = 'flex';
adisi.innerContainer.style.width = '100%';
adisi.innerContainer.style.height = '90%';
/////////////////////////////////////
adisi.titleContainer = document.createElement('div');
dynamic_containers_page_map.get('elements').set('adisi_titleContainer_popUpper',adisi.titleContainer);

adisi.innerTitleContainer = document.createElement('div');

dynamic_containers_page_map.get('elements').set('adisi_innerTitleContainer_popUpper',adisi.innerTitleContainer);




adisi.innerTitleContainer.style.backgroundColor = 'green';
adisi.innerTitleContainer.style.width = '80%';
adisi.innerTitleContainer.style.height = '20px';


adisi.innerTitleContainerBB = document.createElement('div');
dynamic_containers_page_map.get('elements').set('adisi_innerTitleContainerBB_popUpper',adisi.innerTitleContainerBB);



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
dynamic_containers_page_map.get('elements').set('adisi_userTitle_popUpper',adisi.userTitle);


adisi.userTitle.innerHTML = 'Containerssss';
adisi.userTitle.style.color ='white';
adisi.userTitle.style.fontSize ='1.5em';
adisi.userTitle.style.fontWeight ='1.2';
adisi.userTitle.style.margin ='5px';
adisi.userTitle.style.textAlign = 'center';
adisi.innerTitleContainer.appendChild(adisi.userTitle);

adisi.innerTitleContainer.setAttribute('id', adisi.type+'innerTitleConta');
adisi.titleContainer.appendChild(adisi.innerTitleContainer); 


adisi.userPlus= document.createElement("p");
dynamic_containers_page_map.get('elements').set(`adisi_${adisi.type}Plus_popUpper`,adisi.userPlus);

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
adisi.innerTitleContainerBB.appendChild(adisi.userTitle);
adisi.innerTitleContainerBB.appendChild(adisi.userPlus);


adisi.userHeader= document.createElement("div");

dynamic_containers_page_map.get('elements').set('adisi_userHeader_popUpper',adisi.userHeader);

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
dynamic_containers_page_map.get('elements').set('adisi_tempContainere_popUpper',adisi.tempContainere);


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
dynamic_containers_page_map.get('elements').set('adisi_userTable_popUpper',adisi.userTable);

// userTable.style.width = '100%';
// userTable.style.height = '50px';
// userTable.style.backgroundColor = 'yellow';
// userTable.style.border = '1px solid blue';

adisi.expandButton = document.createElement("button");
dynamic_containers_page_map.get('elements').set('adisi_expandButton_popUpper',adisi.expandButton);


// let userTR = document.createElement("tr");
// // userTable.appendChild(userTR);
// let userTD= document.createElement("td");
// let aTDs;

// let listItems;
// let userdataList = document.createElement("ul");
// let userdataListItem = document.createElement("li");

// let editButton = document.createElement('button');
// let deleteButton = document.createElement('button');

for(let oj=0; oj<this.appz.length; oj++){

}

adisi.userJava.appendChild(adisi.userPopUp);
this.appz.forEach(function(item, index) {
//////////////////////////////////////////////  BEGIN POPUP BUTTON
adisi.addEventListenerToElement(adisi.innerUserPopUp,'click',function (event) {
event.preventDefault();
let popup = document.getElementById(adisi.type+'userPopUp');
dynamic_containers_page_map.get('refferences').set(`popUp_popUpper` ,popup);

popup.style.display ='none';

console.log('closte the damns windowx')
},`${adisi.type}userPopUp`);

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



// let popup = document.getElementById(adisi.type+'userPopUp');


let containeruserPlusButton  = document.getElementById(adisi.type+'userPlus');
dynamic_containers_page_map.get('refferences').set(`${adisi.type}userPlusButton_popUpper` ,containeruserPlusButton);

let addContainerPlus= '';


adisi.addEventListenerToElement(containeruserPlusButton,'click',function (event) {
event.preventDefault();
 addContainerPlus= this;
console.log('yo this is da xontainerzPlus',addContainerPlus,adisi.eventListenerCollection,'.dynamic_containers_page_map',dynamic_containers_page_map.get('eListeners'),'refs',dynamic_containers_page_map.get('eListeners'));

let containerpopup = document.getElementById(adisi.type+'userPopUp');
dynamic_containers_page_map.get('refferences').set(`${adisi.type}popup_popUpper` ,containerpopup);

let widthValue = '70';
containerpopup.style.width =widthValue+'%';
containerpopup.style.left =((100-widthValue)/2)+'%';
let containerTitle = document.getElementById(adisi.type+'contentTitle');
dynamic_containers_page_map.get('refferences').set(`${adisi.type}Title_popUpper` ,containerTitle);

let containerinnerContent = document.getElementById(adisi.type+'innerContent');
dynamic_containers_page_map.get('refferences').set(`${adisi.type}innerContent_popUpper` ,containerinnerContent);

containerinnerContent.appendChild(adisi.form) 
containerTitle.innerHTML = 'Create Container';


// containerinnerContent.innerHTML = '';
containerpopup.style.display ='block';
// console.log('yo this is da userPlus')

},'containerPlus');
// containeruserPlusButton.addEventListener('click',function (event) {
// event.preventDefault();
//  addContainerPlus= this;
// console.log('yo this is da xontainerzPlus',addContainerPlus,adisi.eventListenerCollection)
// let containerpopup = document.getElementById(adisi.type+'userPopUp');
// let widthValue = '70';
// containerpopup.style.width =widthValue+'%';
// containerpopup.style.left =((100-widthValue)/2)+'%';
// let containerTitle = document.getElementById(adisi.type+'contentTitle');
// let containerinnerContent = document.getElementById(adisi.type+'innerContent');
// containerinnerContent.appendChild(adisi.form) 
// containerTitle.innerHTML = 'Create Container';


// // containerinnerContent.innerHTML = '';
// containerpopup.style.display ='block';
// // console.log('yo this is da userPlus')

// })

}
      

//     checksAndSave(){
//         let adisi = this;
//         // Create a container for the checkboxes
// adisi.checkboxContainer = document.createElement('div');



// adisi.checkboxContainer.className = adisi.type+'checkbox-container';

// // Array of options for the checkboxes
// adisi.options = [
//   'Klantenservice',
//   'Kassa',
//   'Laden',
//   'Ophaal',
//   'Administratie',
//   'Receptie',
//   'Opbouw',
//   'Loods'
// ];



// // Loop to create checkboxes with labels
// // adisi.options.forEach((option, index) => {
// //     // Create a label element
// //     adisi.label = document.createElement('label');

    
  
// //     adisi.label.textContent = option; // Set the label text

// //     // Create a checkbox input element
// //     adisi.checkbox = document.createElement('input');


    
// //     adisi.checkbox.type = 'checkbox'; // Set input type to checkbox
// //     adisi.checkbox.name = 'options[]'; // Give the same name to all checkboxes
// //     adisi.checkbox.value = option; // Set the value for the checkbox
// //     adisi.checkbox.id = `${adisi.type}checkbox${index + 1}`; // Set a unique id for each checkbox
// //     adisi.checkbox.style.margin = '0 5px 0 5px';
// //     // Associate the label with the checkbox
// //     adisi.label.setAttribute('for', `${adisi.type}checkbox${index + 1}`);

// //     // Create a container div for label and checkbox
// //     adisi.containerCB = document.createElement('div');
// //     adisi.containerCB.className = adisi.type+'checkbox-item';

// //     // Append the checkbox and label to the container
// //     adisi.containerCB.appendChild(adisi.checkbox);
// //     adisi.containerCB.appendChild(adisi.label);
// //     adisi.containerCB.style.margin = '0 5px 0 5px';
// //     adisi.containerCB.style.color = 'white';

// //     // Append the container to the checkbox container
// //     adisi.containerCB.style.display = 'flex';
// //     adisi.checkboxContainer.style.display = 'inline-flex';
// //     adisi.checkboxContainer.style.flexWrap = 'wrap';
// //     adisi.checkboxContainer.setAttribute('id', adisi.type+'userCheckboxContainer');
// //     adisi.checkboxContainer.appendChild(adisi.containerCB);
// //     adisi.form.appendChild(adisi.checkboxContainer);
// // })
// ////////////////////

// // Create a submit button
// adisi.submitButton = document.createElement('button');


// adisi.submitButton.type = 'submit'; // Set button type to submit
// adisi.submitButton.textContent = 'Submit'; // Set button text
// adisi.submitButton.type = 'submit'; // Set button type to submit
// adisi.submitButton.style.border = '2px solid white';
// adisi.submitButton.style.color = 'white';


// adisi.addEventListenerToElement(adisi.submitButton,'click',function (event) {
//     event.preventDefault();
//     console.log('you are about to save thuis bitcheee');
//     adisi.formdata   = document.getElementById(adisi.type+'createNewUserForm');
//     // let userCheckBoxContainer  = document.getElementById('userCheckboxContainer');
//     // adisi.userCheckBoxContainer  = Array.from(document.querySelectorAll('input[name="options[]"]'))
                                
    

//     //  Collect selected checkbox values
// //   const selectedOptions = Array.from(userCheckBoxContainer)
// //   .map(checkbox => checkbox.value);

//   // Create an object to store the checkbox states
//   adisi.selectedOptions = {};

 


//   // Loop through all checkboxes
// //   adisi.userCheckBoxContainer.forEach(checkbox => {
// //       // Set the checkbox value as key and its checked state as value (true/false)
// //       adisi.selectedOptions[checkbox.value] = checkbox.checked;
// //   });

// // Convert to JSON string
// // adisi.jsonData = JSON.stringify(adisi.selectedOptions);


//     console.log('create new user formdata',adisi.formdata,'userCheckBoxContainer','userCheckBoxContainer','selectedOptions','selectedOptions')
   
 

//     // Create a FormData object from the form
//     adisi.formData = new FormData(adisi.formdata);

   

//         // Append additional variables
//         // adisi.formData.append('optionsList', adisi.jsonData);
    
//     // let formoData;
//     // Send the form data to the Laravel route using fetch
//     fetch('/createnewcontainer', {
//         method: 'POST',
//         body: adisi.formData,
//         headers: {
//             'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // Include CSRF token for security
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the response from the server
//         if (data.success) {
//             alert(data.message);
//         } else {
//             alert('Failed to submit form.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while submitting the form.');
//     });

// },`createnewcontainer_save`);
// // adisi.submitButton.addEventListener(
// // Append the submit button to the form
// // Create and append a line break
// adisi.lineBreak1 = document.createElement('br');



// // myDiv.appendChild(lineBreak1);
// adisi.form.appendChild(adisi.lineBreak1);

// adisi.form.appendChild(adisi.submitButton);

// // Append the form to the body or a specific container
// adisi.InnercontentArea.style.overflowY ='scroll';
// adisi.InnercontentArea.appendChild(adisi.form);

// ///////////////////////////////////////END FORM
// adisi.contentAreaUserPopUp.appendChild( adisi.InnercontentArea);

// adisi.innerUserContent = document.createElement('div');




// adisi.innerUserContent.style.width = '100%';
// adisi.innerUserContent.style.height = '90%';
// adisi.innerUserContent.style.backgroundColor = 'grey';
// adisi.innerUserContent.style.display = 'flex';
// adisi.innerUserContent.style.justifyContent = 'center';
// adisi.innerUserContent.style.alignText = 'center';
// adisi.innerUserContent.style.flexDirection = 'column';

// adisi.innerUserContent.appendChild( adisi.innerUserTitle);
// // innerUserContent.appendChild( UserContentTitle);
// adisi.innerUserContent.appendChild(adisi.contentAreaUserPopUp);



// adisi.popUpCloseButton = document.createElement('button');



// adisi.popUpCloseButton.innerHTML ='X';
// adisi.popUpCloseButton.style.width = '30px';
// adisi.popUpCloseButton.style.height = '30px';
// adisi.popUpCloseButton.style.backgroundColor = 'grey';
// adisi.popUpCloseButton.style.border = '2px solid white';
// adisi.popUpCloseButton.style.color = 'white';

// adisi.innerUserPopUp.appendChild(adisi.popUpCloseButton);
// adisi.userPopUp.appendChild(adisi.innerUserPopUp);
// adisi.userPopUp.appendChild(adisi.innerUserContent);



// adisi.userJava  = document.getElementById('Containerdata');


// adisi.userJava.style.position = 'relative';




// ////////////////////////////////
// adisi.innerContainer = document.createElement('div');



// adisi.innerContainer.style.display = 'flex';
// adisi.innerContainer.style.width = '100%';
// adisi.innerContainer.style.height = '90%';
// /////////////////////////////////////
// adisi.titleContainer = document.createElement('div');
// adisi.innerTitleContainer = document.createElement('div');



// adisi.innerTitleContainer.style.backgroundColor = 'green';
// adisi.innerTitleContainer.style.width = '80%';
// adisi.innerTitleContainer.style.height = '20px';


// adisi.innerTitleContainerBB = document.createElement('div');


// // innerTitleContainerBB.style.backgroundColor = 'black';
// adisi.innerTitleContainerBB.style.width = '100%';
// adisi.innerTitleContainerBB.style.height = '35px';

// adisi.titleContainer.style.justifyContent = 'center';
// // titleContainer.style.alignContent = 'center';
// // titleContainer.style.alignItems = 'center';
// adisi.titleContainer.style.textAlign = 'center';
// // titleContainer.style.justifyItems = 'center';
// adisi.titleContainer.style.color = 'white';
// // titleContainer.style.backgroundColor = 'blue';
// adisi.titleContainer.style.display = 'flex';

// adisi.userTitle= document.createElement("h2");

// adisi.userTitle.innerHTML = 'Containers';
// adisi.userTitle.style.textAlign = 'center';
// adisi.innerTitleContainer.appendChild(adisi.userTitle);

// adisi.innerTitleContainer.setAttribute('id', adisi.type+'innerTitleConta');
// adisi.titleContainer.appendChild(adisi.innerTitleContainer); 


// adisi.userPlus= document.createElement("p");
// adisi.userPlus.setAttribute('id', adisi.type+'userPlus'); 
// adisi.userPlus.innerHTML = '+';

// adisi.userPlus.style.right = '35px';
// adisi.userPlus.style.margin = '0 10% 0 0';
// adisi.userPlus.style.color = 'white';
// adisi.userPlus.style.fontSize = '24px';
// adisi.userPlus.style.textAlign = 'right';
// adisi.userPlus.style.width = '100%';
// adisi.innerTitleContainerBB.style.width = '100%';

// adisi.innerTitleContainerBB.style.display = 'flex';
// adisi.innerTitleContainerBB.style.backgroundColor = 'orange';
// adisi.innerTitleContainerBB.style.justifyContent = 'center';
// adisi.innerTitleContainerBB.appendChild(adisi.userPlus);


// adisi.userHeader= document.createElement("div");
// adisi.userHeader.setAttribute('id', adisi.type+'userHeada');
// adisi.userHeader.style.height = '5%';
// adisi.userHeader.style.display = 'block';
// adisi.userHeader.style.width = '100%';

// adisi.userHeader.style.textAlign = 'right';

// adisi.userHeader.style.justifyContent = 'center';
// adisi.userHeader.style.alignContent = 'center';
// adisi.userHeader.style.alignItems = 'center';
// adisi.userHeader.style.justifyItems = 'center';

// adisi.userHeader.appendChild(adisi.innerTitleContainerBB);
// adisi.userHeader.appendChild(adisi.titleContainer);



// // titleContainer.appendChild(innerTitleContainerBB);

// // titleContainer.appendChild(userPlus);

// adisi.titleContainer.style.width = '100%';
// adisi.titleContainer.style.height = '6%';


// adisi.userJava.innerHTML = '';
// adisi.userJava.style.width = '100%';
// adisi.userJava.style.height = '100%';

// adisi.userJava.style.justifyContent = 'center';
// adisi.userJava.style.alignContent = 'center';
// adisi.userJava.style.alignItems = 'center';
// adisi.userJava.style.justifyItems = 'center';


// adisi.userJava.appendChild(adisi.userHeader);
// // innerContainer.
// // userJava.setAttribute('class', 'col-md-6 mx-auto mt-5');

// adisi.innerContainer.style.justifyContent = 'center';
// adisi.innerContainer.style.alignContent = 'center';
// adisi.innerContainer.style.alignItems = 'center';
// adisi.innerContainer.style.justifyItems = 'center';




// adisi.userJava.style.alignText = 'center';
// // userJava.style.justifyItems = 'center';


// adisi.tempContainere = document.createElement('div');

// // tempContainere.style.display = 'flex';
// // tempContainer.attributes.id ='tysy';
// adisi.tempContainere.setAttribute('id', adisi.type+'tysy');
// adisi.tempContainere.style.width = '80%';
// adisi.tempContainere.style.overflowY = 'auto';
// // tempContainere.style.left = '30%';
// adisi.tempContainere.style.height = '90%';
// // tempContainere.style.opacity = '0.2';
// adisi.tempContainere.style.backgroundColor = 'purple';
// // tempContainere.appendChild(userHeader);
// adisi.innerContainer.appendChild( adisi.tempContainere); 
// // tempContainere.appendChild(titleContainer);
// // let PackageDivGrouperBTotal = document.createElement("div");
// adisi.userTable = document.createElement("table");
// // userTable.style.width = '100%';
// // userTable.style.height = '50px';
// // userTable.style.backgroundColor = 'yellow';
// // userTable.style.border = '1px solid blue';

// adisi.expandButton = document.createElement("button");

// let userTR = document.createElement("tr");
// // userTable.appendChild(userTR);
// let userTD= document.createElement("td");
// let aTDs;

// let listItems;
// let userdataList = document.createElement("ul");
// let userdataListItem = document.createElement("li");

// let editButton = document.createElement('button');
// let deleteButton = document.createElement('button');

// for(let oj=0; oj<this.appz.length; oj++){
 
// }

// adisi.userJava.appendChild(adisi.userPopUp);
// this.appz.forEach(function(item, index) {
//     // console.log('this is tapzzzzBB containerz ',item.name,item.id,item,'user_data',item.user_data,'optionList',item.user_data,'item',item);
 
//     for(let rws =0; rws < 3; rws++){
//     if(rws == '0'){

//      aTDs = 6;
//      adisi.expandButton = document.createElement("button");
//      adisi.expandButton.setAttribute('id', adisi.type+'expandButton'+ index);
//      adisi.expandButton.innerHTML = '0';

//         adisi.userTable = document.createElement("table");
//         adisi.userTable.setAttribute('id', adisi.type+'user'+rws+'Table'+ index);
//         adisi.userTable.style.width = '100%';
//         adisi.userTable.style.height = '50px';
//         adisi.userTable.style.margin = '2px  0';
//         adisi.userTable.style.backgroundColor = ' #3196d9 ';
//         adisi.userTable.style.border = '1px solid blue';

//         userTR = document.createElement("tr");
//         userTR.setAttribute('id', adisi.type+'user'+rws+'TR'+ rws);
//         userTR.style.height = '50px';
//         for(let td =0; td < aTDs; td++){
//             userTD = document.createElement("td");
//             userTD.setAttribute('id', adisi.type+'user'+rws+'TD'+ td);
//             userTD.style.border = '5px solid blue';
        
// switch( td){

//     case 0:
//         userTD.style.width = '2%';

//     break;

//     case 1:
//         userTD.style.width = '24%';
//         userTD.innerHTML = item.container_naam;

//     break;

//     case 2:
//         userTD.style.width = '24%';
//         userTD.innerHTML = item.container_formaat;

//     break;

//     case 3:
//         userTD.style.width = '24%';
//         userTD.innerHTML = item.email;

//     break;

//     case 4:
//         userTD.style.width = '24%';
//         // let editButton = document.createElement('button');
//          editButton = document.createElement('button');
// // let deleteButton = document.createElement('button');
//         editButton.innerHTML = '"edit"';
//         editButton.setAttribute('id','editButton'+rws)
//         editButton.addEventListener('click',function (event) {
//             event.preventDefault();
//             adisi.laravelFunctions('/editcontainer');
// console.log('this is the edit button');
//         })

// deleteButton = document.createElement('button');
//           deleteButton.addEventListener('click',function (event) {
//             event.preventDefault();

//             console.log('yo this is da xontainerzPlus')
//             let containerpopup = document.getElementById(adisi.type+'userPopUp');
//             let containerTitle = document.getElementById(adisi.type+'contentTitle');
//             containerTitle.innerHTML = '';
//             containerTitle.innerHTML = 'Edit Container';
//             let containerinnerContent = document.getElementById(adisi.type+'innerContent');
//             containerinnerContent.innerHTML = '';
//             containerpopup.style.display ='block';
//             adisi.laravelFunctions('/deletecontainer');
// console.log('this is the delete button');
//         })
//         // let editButton = document.createElement('button');
//         // let deleteButton = document.createElement('button');
//         deleteButton.innerHTML = '"delete"';
//         deleteButton.setAttribute('id','deleteButton'+rws)
      

//         userTD.appendChild(editButton);
//         userTD.appendChild(deleteButton);
//         // userTD.innerHTML = item.password;

//     break;

//     case (aTDs-1):
//         userTD.style.width = '2%';
//         // userTD.innerHTML = 'O';
//         userTD.appendChild(adisi.expandButton);
//     break;


// }
           
           

         
//             userTR.appendChild(userTD);
           

   

//             adisi.userTable.appendChild(userTR);
//             adisi.tempContainere.appendChild( adisi.userTable);
//            console.log('iteratings')
//         }
       
     
//         adisi.innerContainer.style.backgroundColor ='brown';
//         // innerContainer.appendChild(userPlus);
//         adisi.userJava.appendChild(adisi.innerContainer);


       
        
//     }

    



// //////////////////////////END  CASE 0
//     /////////////////////////////////////
//     ////////////////////////////////////BEGIN CASE 1
//     if(rws == '1'){

//         aTDs = 6;
//         adisi.userTable = document.createElement("table");
//         adisi.userTable.setAttribute('id', 'xContainerxuserExpandTable'+ index);
//         adisi.userTable.style.width = '100%';
//         adisi.userTable.style.display = 'none';
//         adisi.userTable.style.height = 'auto';
//         adisi.userTable.style.margin = '2px  0';
//         adisi.userTable.style.backgroundColor = '#BB9FF3';
//         adisi.userTable.style.border = '1px solid blue';
   
//            userTR = document.createElement("tr");
//            userTR.setAttribute('id', adisi.type+'user'+rws+'TR'+ rws);
//            userTR.style.height = 'auto';

//            listItems =3;
//         //    userdataList = document.createElement("ul");
           
//         //    userdataList.setAttribute('id', 'userdataListTR'+ rws);
//         //    userdataListItem.innerHTML = 'test';
         

//         //    for(let lli = 0; lli<listItems; lli++ ){
//         //     userdataListItem = document.createElement("li");
//         //     userdataListItem.setAttribute('id', 'userdata'+lli+'TR'+ rws);
//         //     // userdataListItem.inerHTML = 'test';
//         //     userdataList.appendChild(userdataListItem);
//         //    }

       
         

//            for(let td =0; td < aTDs; td++){
//                userTD = document.createElement("td");
//                userTD.setAttribute('id', adisi.type+'user'+rws+'TD'+ td);
//                userTD.style.border = '5px solid blue';
           
//    switch( td){
   
//        case 0:
//            userTD.style.width = '2%';
//         //    userTD.style.height = '40%';
//            userTD.innerHTML = '';
   
//        break;
   
//        case 1:
//            userTD.style.width = '25%';
//         //    userTD.innerHTML = item.id;
//         // userTD.appendChild(userdataList);
        
//         userTD.innerHTML += `
// <ul class="${adisi.type}todo" id="${adisi.type}todoItemt">

// <li>location container del:</li>
// <li>arrival container date :</li>
// <li>shipping_id :</li>
// <li>arrival date  :</li>
// <li>departure date :</li>
// <li>Status :</li>

// </ul>
// `;
   
//        break;
   
//        case 2:
//            userTD.style.width = '30%';
//            userTD.innerHTML += `
//            <ul class="${adisi.type}todo" id="${adisi.type}todoItemt">
           
//            <li>${item.locatie_aanlevercontainer} :</li>
//            <li>${item.date_aanlevercontainer} :</li>
//            <li>${item.vaart_id} :</li>
//            <li>${item.date_aankomst_bestemming}  :</li>
//            <li>${item.date_vertrek} :</li>
//            <li>ready:</li>
//            </ul>
//            `;
//        break;
   
//        case 3:
//            userTD.style.width = '15%';
//         //    userTD.innerHTML = item.email;
//         userTD.innerHTML += `
//         <ul class="${adisi.type}todo" id="${adisi.type}todoItemt">
        
//         <li>Phone :</li>
//         <li>Alt.Phone :</li>
//         <li>Address :</li>
//         <li>Email :</li>
        
//         </ul>
//         `;
   
//        break;
   
//        case 4:
//            userTD.style.width = '15%';

           

//            userTD.innerHTML += `
//         <ul class="${adisi.type}todoAnsa" id="${adisi.type}todoItemtAnsa">
        
//         <li> ${item.container_naam}</li>
//         <li>${item.locatie_aanlevercontainer}</li>
//         <li> ${item.locatie_bestemming}</li>
//         <li> ${item.date_aanlevercontainer}</li>
        
//         </ul>
//         `;
   
//        break;
   
//        case (aTDs-1):
//            userTD.style.width = '15%';
//            const checkboxContainer = document.createElement('div');
// checkboxContainer.className = adisi.type+'checkbox-container';

// // Array of options for the checkboxes
// const options = [
//   'Klantenservice',
//   'Kassa',
//   'Laden',
//   'Ophaal',
//   'Administratie',
//   'Receptie',
//   'Opbouw',
//   'Loods'
// ];

// // Loop to create checkboxes with labels
// options.forEach((option, index) => {
//     // Create a label element
//     adisi.label = document.createElement('label');
  
//     adisi.textContent = option; // Set the label text

//     // Create a checkbox input element
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';  // Set input type to checkbox
//     checkbox.name = 'options[]';  // Give the same name to all checkboxes
//     checkbox.value = option;   // Set the value for the checkbox
//     checkbox.id = `${adisi.type}checkbox${index + 1}`; // Set a unique id for each checkbox
//     checkbox.style.margin = '0 5px 0 5px';
// // console.log('checkboxxx', checkbox,'item',item,'item.user_data',JSON.parse(item.user_data.optionsList)[option],'option',option);
// //     checkbox.checked = JSON.parse(item.user_data.optionsList)[option];
//     // Associate the label with the checkbox
//     adisi.label.setAttribute('for', `${adisi.type}checkbox${index + 1}`);

//     // Create a container div for label and checkbox
//     adisi.containerCB = document.createElement('div');
//     adisi.containerCB.className = adisi.type+'checkbox-item';

//     // Append the checkbox and label to the container
//     adisi.containerCB.appendChild(checkbox);
//     adisi.containerCB.appendChild(adisi.label);
//     adisi.containerCB.style.margin = '0 15px 0 15px';
//     adisi.containerCB.style.color = 'white';

//     // Append the containerCB to the checkbox containerCB
//     adisi.containerCB.style.display = 'flex';
//     // checkboxContainer.style.display = 'inline-flex';
//     checkboxContainer.style.felxWrap = 'wrap';
//     checkboxContainer.setAttribute('id', adisi.type+'userCheckboxContainer');
//     checkboxContainer.appendChild(adisi.containerCB);
//     // form.appendChild(checkboxContainer);
// })
// ////////////////////
//            userTD.appendChild(checkboxContainer);
//        break;
   
   
//    }
              
              
   
// //    userTD.style.width = '50%';
//                userTR.appendChild(userTD);
              
   
      
   
//                adisi.userTable.appendChild(userTR);
             
//               console.log('iteratings')
//            }
          
//            adisi.tempContainere.appendChild( adisi.userTable); 
//         //    adisi.innerContainer.appendChild( adisi.tempContainere);
//            adisi.userJava.appendChild(adisi.innerContainer);

           

           
//        }
//     ///////////////////////////////////END CASE 1
//         /////////////////////////////////////// expandbutton eventlistener begin
//         adisi.expandButton.addEventListener('click',function (event) {
//             event.preventDefault();
//             // console.log('this is the ExpandButton!', event,'expansionTable',expansionTable,'strippedIndex',strippedIndex)
        
//         let  strippedIndex =   event.target.attributes.id.value.split('expandButton');
//         // adisi.expansionTable =document.getElementById(adisi.type+'userExpandTable'+strippedIndex[1]);
//         let expansionTable =document.getElementById('xContainerxuserExpandTable'+strippedIndex[1]);
//         console.log('this is the ExpandButton!', event,'expansionTable',expansionTable,'strippedIndex',strippedIndex)
        
//         // expansionTable.style.display = 'flex'
//         adisi.containertoggleDisplay(strippedIndex[1]);
//         })
        

// }





// //////////////////////////////////////////////  BEGIN POPUP BUTTON
// adisi.innerUserPopUp.addEventListener('click',function (event) {
//     event.preventDefault();
//     let popup = document.getElementById(adisi.type+'userPopUp');
//     popup.style.display ='none';
    
// console.log('closte the damns window')
// })
// /////////////////////////////////////// end pop up button


   
// // function containertoggleDisplay(element) {
// //     element  = document.getElementById('xContainerxuserPlus');
// //     if (element.style.display === 'none' || element.style.display === '') {
// //       element.style.display = 'block';
// //     } else {
// //       element.style.display = 'none';
// //     }
// //   }

// //   userPlus.addEventListener('click',function (event) {
// //     event.preventDefault();
// //     console.log('yo this is da xontainerzPlus')
// //     let containerpopup = document.getElementById(this.appz+'userPopUp');
// //     containerpopup.style.display ='block';
// // // console.log('yo this is da userPlus')


// // })
// })



// let popup = document.getElementById(adisi.type+'userPopUp');


// let containeruserPlusButton  = document.getElementById(adisi.type+'userPlus');
// let addContainerPlus=containeruserPlusButton.addEventListener('click',function (event) {
//     event.preventDefault();
//     console.log('yo this is da xontainerzPlus',addContainerPlus)
//     let containerpopup = document.getElementById(adisi.type+'userPopUp');
//     let widthValue = '70';
//     containerpopup.style.width =widthValue+'%';
//     containerpopup.style.left =((100-widthValue)/2)+'%';
//     let containerTitle = document.getElementById(adisi.type+'contentTitle');
//     let containerinnerContent = document.getElementById(adisi.type+'innerContent');
//     containerinnerContent.appendChild(adisi.form) 
//     containerTitle.innerHTML = 'Create Container';

   
//     // containerinnerContent.innerHTML = '';
//     containerpopup.style.display ='block';
// // console.log('yo this is da userPlus')

// })
//     }


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

        // let aayas =  dynamic_containers_page_map.get('variables').set('typeString','Containerdata');
        let aajus = 'xContainerx';
        dynamic_containers_page_map.get('variables').set('typeString',aajus);
        let containertypeString = dynamic_containers_page_map.get('variables').get('typeString');


        console.log('dynamic_containers_page_map [SSSTARTUP ---> 0 , A]',dynamic_containers_page_map,'containertypeString',containertypeString)
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
this.locationUrl = aajus;
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
        console.log('what is the made previeous class mainside',containerPagesClassy.getSelectionData[classCreationdataX.componentName]['nav'+classCreationdataX.componentName].getElement,'topside',containerPagesClassy.getSelectionData[classCreationdataX.componentName]['topSide'+classCreationdataX.componentName],'componenetNAme',containerPagesClassy.getSelectionData[classCreationdataX.componentName],'id',containerPagesClassy.getSelectionData[classCreationdataX.componentName]['topSide'+classCreationdataX.componentName].getElement.id);
       
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


let containeruserPlusButton  = document.getElementById('overzicht');
containeruserPlusButton.addEventListener('click',function (event) {
    event.preventDefault();

     // Cleanup method to remove all event listeners stored in the Map
     ///////////////////////////////////////////////REMOVE EVENTLISTENERS
     function removeEventListeners() {
        dynamic_containers_page_map.get('eListeners').forEach((listenerObj, key) => {
            const { element, event, handler } = listenerObj;
            console.log('removeEventListeners() yo this is da overzicht element',listenerObj,'key',key,'el ev hndler',element, event, handler)

 // Remove the event listener
 element.removeEventListener(event, handler);

 // Optional: Clear the Map entry
 dynamic_containers_page_map.get('eListeners').delete(key);

 console.log('removeEventListeners() yo dynamic_containers_page_map.get elistener',dynamic_containers_page_map.get('eListeners'))

            // // Remove the event listener
            // element.removeEventListener(event, handler);

            // // Optional: Clear the Map entry
            // this.eventListenersMap.delete(key);
        });

     
    }

      ////////////////////////////////////////////////////////// REMOVE REFFERENCES
// Cleanup method
function removeRefferences() {
    // Remove each item in the Map as needed
    dynamic_containers_page_map.get('refferences').forEach((value, key) => {
        console.log('removeEventListeners() Refferences yo this is da overzicht element',value,'key', key);
    //     if (value instanceof HTMLElement) {
    //         // Remove element from DOM
    //         value.remove();
    //     } else if (typeof value === 'function' && this.stateMap.get(key.replace('ClickListener', ''))) {
    //         // Remove event listener
    //         const elementKey = key.replace('ClickListener', '');
    //         const element = this.stateMap.get(elementKey);
    //         element.removeEventListener('click', value);
    //     }
    dynamic_containers_page_map.get('refferences').set(key, null);
    dynamic_containers_page_map.get('refferences').delete(key);

    // key 
    // //     // Nullify the reference (optional for cleanup)
    // dynamic_containers_page_map.get('elements').set(key, null);
    });
}

        //////////////////////////////////////////////
       ////////////////////////////////////////////////////////// REMOVE ELEMENTS
// Cleanup method
function removeElements() {
    // Remove each item in the Map as needed
    dynamic_containers_page_map.get('elements').forEach((value, key) => {
        console.log('removeEventListeners() Elements yo this is da overzicht element',value,'key', key);
        if (value instanceof HTMLElement) {
            // Remove element from DOM
            value.remove();
        } else if (typeof value === 'function' && this.stateMap.get(key.replace('ClickListener', ''))) {
            // Remove event listener
            const elementKey = key.replace('ClickListener', '');
            const element = this.stateMap.get(elementKey);
            element.removeEventListener('click', value);
        }
    //     // Nullify the reference (optional for cleanup)
    dynamic_containers_page_map.get('elements').set(key, null);
    dynamic_containers_page_map.get('elements').delete(key);
    });
}

        //////////////////////////////////////////////
        removeRefferences()
    removeEventListeners();
    removeElements();
    console.log('yo this is da overzicht',dynamic_containers_page_map.get('variables'),dynamic_containers_page_map,'elements',dynamic_containers_page_map.get('elements'),'refferes',dynamic_containers_page_map.get('refferences'),'eListeners',dynamic_containers_page_map.get('eListeners'))
       

});

})


////////////////////////////////////////
 







