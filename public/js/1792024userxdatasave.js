

class PagesClass{

    constructor(appz ,type){

        this.userPopUp = document.createElement('div');
        this.userPopUp.setAttribute('id', 'userPopUp');
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
        this.userPopUp.style.display = 'none';
        /////////////
        this.innerUserPopUp = document.createElement('div');
        this.innerUserPopUp.style.width = '100%';
        this.innerUserPopUp.style.height = '5%';
        this.innerUserPopUp.style.backgroundColor = 'black';
        this.innerUserPopUp.style.display = 'flex';
        this.innerUserPopUp.style.justifyContent = 'right';

        this.innerUserTitle = document.createElement('div');
        this.UserContentTitle = document.createElement('h1');
        this.UserContentTitle.innerHTML = 'create new user';
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
this.InnercontentArea.style.backgroundColor = 'purple';
this.InnercontentArea.style.justifyContent = 'center';
this.InnercontentArea.style.left = '10%';

this.contentAreaUserPopUp.style.left = '5%';
this.contentAreaUserPopUp.style.position = 'relative';


this.form = document.createElement('form');
this.form.style.margin = '5% 0 0 5%';

this.container = document.createElement('div');
this.containerCB = document.createElement('div');
////////////////////////////////
///////////////////

    }

    innerFunction(){
        console.log('THIS IS THE CLASS','this.userPopUp',appz,'appz', 'type','type this.userPopUp',this.userPopUp)
    }


    createForm(){
//////////////////////////////////// BEGIN FORM

// Create a form element
// const form = document.createElement('form');
// form.style.margin = '5% 0 0 5%';
// Loop to create 8 input fields
for (let i = 0; i <= 5; i++) {
   // Create a label element
   const label = document.createElement('label');
   label.textContent = `Label ${i}: `; // Set the label text
   label.setAttribute('for', `input${i}`); // Associate the label with the input
   label.style.width ='20%';
   label.style.color ='white';

// Create an input element
const input = document.createElement('input');
input.type = 'text'; // Set input type to text
input.name = `input${i}`; // Give each input a unique name
input.id = `input${i}`; // Set the id to match the label's "for" attribute

//    input.style.width = '180px';
input.style.height = '30px';
input.style.width ='70%';
input.style.margin='10px 5px 10px 5px';
// Create a container div for label and input
// const container = document.createElement('div');
this.container.className = 'input-container';
this.container.style.width='100%';


/////////////////////////
////////////////////

   if(i == 0){

    label.textContent = `Name : `; 
    input.name = `name`; // Give each input a unique name
input.id = `nameinput${i}`; // Set the id to match the label's "for" attribute

   }

   if(i == 1){

    label.textContent = `Adres : `; 
    input.name = `adres`; // Give each input a unique name
    input.id = `adresinput${i}`; // Set the id to match the label's "for" attribute
   }
   if(i == 2){

    label.textContent = `phone : `; 
    input.name = `phone`; // Give each input a unique name
    input.id = `phoneinput${i}`; // Set the id to match the label's "for" attribute

   }

   if(i == 3){

    label.textContent = `Email : `; 
    input.name = `email`; // Give each input a unique name
    input.id = `emailinput${i}`; // Set the id to match the label's "for" attribute

   }
   if(i == 4){

    label.textContent = `Confirm Password : `; 
    input.name = `confirmpass`; // Give each input a unique name
    input.type = 'password'; // Set input type to text
    input.id = `confirmpassinput${i}`; // Set the id to match the label's "for" attribute

   }

   if(i == 5){

    label.textContent = `Password : `; 
    input.name = `password`; // Give each input a unique name

input.type = 'password'; // Set input type to text
    input.id = `passwordinput${i}`; // Set the id to match the label's "for" attribute

   }
   if(i == 6){

    label.textContent = `Confirm Password : `; 
    input.name = `confirmpass`; // Give each input a unique name
    input.type = 'password'; // Set input type to text
    input.id = `confirmpassinput${i}`; // Set the id to match the label's "for" attribute

   }
   
//    container.style.display='inline-flex';

   // Append the label and input to the container
   this.container.appendChild(label);
   this.container.appendChild(input);
    // Append the input to the form
    this.form.appendChild(this.container);

    // Add a line break for better readability
    // this.form.appendChild(document.createElement('br'));
    this.form.setAttribute('id', 'createNewUserForm');
}
////////////////////////

    }


    checksAndSave(){
        let adisi = this;
        // Create a container for the checkboxes
const checkboxContainer = document.createElement('div');
checkboxContainer.className = 'checkbox-container';

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
    const label = document.createElement('label');
  
    label.textContent = option; // Set the label text

    // Create a checkbox input element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; // Set input type to checkbox
    checkbox.name = 'options[]'; // Give the same name to all checkboxes
    checkbox.value = option; // Set the value for the checkbox
    checkbox.id = `checkbox${index + 1}`; // Set a unique id for each checkbox
    checkbox.style.margin = '0 5px 0 5px';
    // Associate the label with the checkbox
    label.setAttribute('for', `checkbox${index + 1}`);

    // Create a container div for label and checkbox
    adisi.containerCB = document.createElement('div');
    adisi.containerCB.className = 'checkbox-item';

    // Append the checkbox and label to the container
    adisi.containerCB.appendChild(checkbox);
    adisi.containerCB.appendChild(label);
    adisi.containerCB.style.margin = '0 5px 0 5px';
    adisi.containerCB.style.color = 'white';

    // Append the container to the checkbox container
    adisi.containerCB.style.display = 'flex';
    checkboxContainer.style.display = 'inline-flex';
    checkboxContainer.style.flexWrap = 'wrap';
    checkboxContainer.setAttribute('id', 'userCheckboxContainer');
    checkboxContainer.appendChild(adisi.containerCB);
    adisi.form.appendChild(checkboxContainer);
})
////////////////////

// Create a submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit'; // Set button type to submit
submitButton.textContent = 'Submit'; // Set button text
submitButton.type = 'submit'; // Set button type to submit
submitButton.style.border = '2px solid white';
submitButton.style.color = 'white';


submitButton.addEventListener('click',function (event) {
    event.preventDefault();
    console.log('you are about to save thuis bitch');
    let formdata  = document.getElementById('createNewUserForm');
    // let userCheckBoxContainer  = document.getElementById('userCheckboxContainer');
    let userCheckBoxContainer  = Array.from(document.querySelectorAll('input[name="options[]"]'))
                                

    //  Collect selected checkbox values
//   const selectedOptions = Array.from(userCheckBoxContainer)
//   .map(checkbox => checkbox.value);

  // Create an object to store the checkbox states
  const selectedOptions = {};

  // Loop through all checkboxes
  userCheckBoxContainer.forEach(checkbox => {
      // Set the checkbox value as key and its checked state as value (true/false)
      selectedOptions[checkbox.value] = checkbox.checked;
  });

// Convert to JSON string
const jsonData = JSON.stringify(selectedOptions);

    console.log('create new user formdata',formdata,'userCheckBoxContainer',userCheckBoxContainer,'selectedOptions',selectedOptions)
   
 

    // Create a FormData object from the form
    let formData = new FormData(formdata);

        // Append additional variables
        formData.append('optionsList', jsonData);
    
    // let formoData;
    // Send the form data to the Laravel route using fetch
    fetch('/createnewuser', {
        method: 'POST',
        body: formData,
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
const lineBreak1 = document.createElement('br');
// myDiv.appendChild(lineBreak1);
adisi.form.appendChild(lineBreak1);

adisi.form.appendChild(submitButton);

// Append the form to the body or a specific container
adisi.InnercontentArea.appendChild(adisi.form);

///////////////////////////////////////END FORM
adisi.contentAreaUserPopUp.appendChild( adisi.InnercontentArea);

let innerUserContent = document.createElement('div');
innerUserContent.style.width = '100%';
innerUserContent.style.height = '90%';
innerUserContent.style.backgroundColor = 'grey';
innerUserContent.style.display = 'flex';
innerUserContent.style.justifyContent = 'center';
innerUserContent.style.alignText = 'center';
innerUserContent.style.flexDirection = 'column';

innerUserContent.appendChild( adisi.innerUserTitle);
// innerUserContent.appendChild( UserContentTitle);
innerUserContent.appendChild(adisi.contentAreaUserPopUp);



let popUpCloseButton = document.createElement('button');
popUpCloseButton.innerHTML ='X';
popUpCloseButton.style.width = '30px';
popUpCloseButton.style.height = '30px';
popUpCloseButton.style.backgroundColor = 'grey';
popUpCloseButton.style.border = '2px solid white';
popUpCloseButton.style.color = 'white';

adisi.innerUserPopUp.appendChild(popUpCloseButton);
adisi.userPopUp.appendChild(adisi.innerUserPopUp);
adisi.userPopUp.appendChild(innerUserContent);



let userJava  = document.getElementById('Userdata');
userJava.style.position = 'relative';




////////////////////////////////
let innerContainer = document.createElement('div');

innerContainer.style.display = 'flex';
innerContainer.style.width = '100%';
innerContainer.style.height = '90%';
/////////////////////////////////////
let titleContainer = document.createElement('div');
let innerTitleContainer = document.createElement('div');

innerTitleContainer.style.backgroundColor = 'green';
innerTitleContainer.style.width = '80%';
innerTitleContainer.style.height = '20px';


let innerTitleContainerBB = document.createElement('div');

// innerTitleContainerBB.style.backgroundColor = 'black';
innerTitleContainerBB.style.width = '100%';
innerTitleContainerBB.style.height = '35px';

titleContainer.style.justifyContent = 'center';
// titleContainer.style.alignContent = 'center';
// titleContainer.style.alignItems = 'center';
titleContainer.style.textAlign = 'center';
// titleContainer.style.justifyItems = 'center';
titleContainer.style.color = 'white';
// titleContainer.style.backgroundColor = 'blue';
titleContainer.style.display = 'flex';

let userTitle= document.createElement("h2");

userTitle.innerHTML = 'Users';
userTitle.style.textAlign = 'center';
innerTitleContainer.appendChild(userTitle);

innerTitleContainer.setAttribute('id', 'innerTitleConta');
titleContainer.appendChild(innerTitleContainer); 


let userPlus= document.createElement("p");
userPlus.setAttribute('id', 'userPlus');
userPlus.innerHTML = '+';

userPlus.style.right = '35px';
userPlus.style.margin = '0 10% 0 0';
userPlus.style.color = 'white';
userPlus.style.fontSize = '24px';
userPlus.style.textAlign = 'right';
userPlus.style.width = '100%';
innerTitleContainerBB.style.width = '100%';

innerTitleContainerBB.style.display = 'flex';
innerTitleContainerBB.style.backgroundColor = 'orange';
innerTitleContainerBB.style.justifyContent = 'center';
innerTitleContainerBB.appendChild(userPlus);
let userHeader= document.createElement("div");
userHeader.setAttribute('id', 'userHeada');
userHeader.style.height = '5%';
userHeader.style.display = 'block';
userHeader.style.width = '100%';

userHeader.style.textAlign = 'right';

userHeader.style.justifyContent = 'center';
userHeader.style.alignContent = 'center';
userHeader.style.alignItems = 'center';
userHeader.style.justifyItems = 'center';

userHeader.appendChild(innerTitleContainerBB);
userHeader.appendChild(titleContainer);




// titleContainer.appendChild(innerTitleContainerBB);

// titleContainer.appendChild(userPlus);

titleContainer.style.width = '100%';
titleContainer.style.height = '6%';


userJava.innerHTML = '';
userJava.style.width = '100%';
userJava.style.height = '100%';

userJava.style.justifyContent = 'center';
userJava.style.alignContent = 'center';
userJava.style.alignItems = 'center';
userJava.style.justifyItems = 'center';


userJava.appendChild(userHeader);
// innerContainer.
// userJava.setAttribute('class', 'col-md-6 mx-auto mt-5');

innerContainer.style.justifyContent = 'center';
innerContainer.style.alignContent = 'center';
innerContainer.style.alignItems = 'center';
innerContainer.style.justifyItems = 'center';




userJava.style.alignText = 'center';
// userJava.style.justifyItems = 'center';


let tempContainere = document.createElement('div');

// tempContainere.style.display = 'flex';
// tempContainer.attributes.id ='tysy';
tempContainere.setAttribute('id', 'tysy');
tempContainere.style.width = '80%';
tempContainere.style.overflowY = 'auto';
// tempContainere.style.left = '30%';
tempContainere.style.height = '90%';
// tempContainere.style.opacity = '0.2';
tempContainere.style.backgroundColor = 'purple';
// tempContainere.appendChild(userHeader);
innerContainer.appendChild( tempContainere);
// tempContainere.appendChild(titleContainer);
// let PackageDivGrouperBTotal = document.createElement("div");
let userTable = document.createElement("table");
// userTable.style.width = '100%';
// userTable.style.height = '50px';
// userTable.style.backgroundColor = 'yellow';
// userTable.style.border = '1px solid blue';

let expandButton = document.createElement("button");

let userTR = document.createElement("tr");
// userTable.appendChild(userTR);
let userTD= document.createElement("td");
let aTDs;

let listItems;
let userdataList = document.createElement("ul");
let userdataListItem = document.createElement("li");

for(let oj=0; oj<appz.length; oj++){
 
}

userJava.appendChild(adisi.userPopUp);
appz.forEach(function(item, index) {
    console.log('this is tapzzzzBB',item.name,item.id,item,'user_data',item.user_data,'optionList',item.user_data.optionsList);
 
    for(let rws =0; rws < 3; rws++){
    if(rws == '0'){

     aTDs = 6;
  expandButton = document.createElement("button");
  expandButton.setAttribute('id', 'expandButton'+ index);
  expandButton.innerHTML = '0';

        userTable = document.createElement("table");
        userTable.setAttribute('id', 'user'+rws+'Table'+ index);
        userTable.style.width = '100%';
        userTable.style.height = '50px';
        userTable.style.margin = '2px  0';
        userTable.style.backgroundColor = ' #3196d9 ';
        userTable.style.border = '1px solid blue';

        userTR = document.createElement("tr");
        userTR.setAttribute('id', 'user'+rws+'TR'+ rws);
        userTR.style.height = '50px';
        for(let td =0; td < aTDs; td++){
            userTD = document.createElement("td");
            userTD.setAttribute('id', 'user'+rws+'TD'+ td);
            userTD.style.border = '5px solid blue';
        
switch( td){

    case 0:
        userTD.style.width = '2%';

    break;

    case 1:
        userTD.style.width = '24%';
        userTD.innerHTML = item.id;

    break;

    case 2:
        userTD.style.width = '24%';
        userTD.innerHTML = item.name;

    break;

    case 3:
        userTD.style.width = '24%';
        userTD.innerHTML = item.email;

    break;

    case 4:
        userTD.style.width = '24%';
        userTD.innerHTML = item.password;

    break;

    case (aTDs-1):
        userTD.style.width = '2%';
        // userTD.innerHTML = 'O';
        userTD.appendChild(expandButton);
    break;


}
           
           

         
            userTR.appendChild(userTD);
           

   

            userTable.appendChild(userTR);
          
           console.log('iteratings')
        }
       
        tempContainere.appendChild(userTable);
        innerContainer.style.backgroundColor ='brown';
        // innerContainer.appendChild(userPlus);
        userJava.appendChild(innerContainer);
    }

    



//////////////////////////END  CASE 0
    /////////////////////////////////////
    ////////////////////////////////////BEGIN CASE 1
    if(rws == '1'){

        aTDs = 6;
           userTable = document.createElement("table");
           userTable.setAttribute('id', 'userExpandTable'+ index);
           userTable.style.width = '100%';
           userTable.style.display = 'none';
           userTable.style.height = 'auto';
           userTable.style.margin = '2px  0';
           userTable.style.backgroundColor = '#BB9FF3';
           userTable.style.border = '1px solid blue';
   
           userTR = document.createElement("tr");
           userTR.setAttribute('id', 'user'+rws+'TR'+ rws);
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
               userTD.setAttribute('id', 'user'+rws+'TD'+ td);
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
<ul class="todo" id="todoItemt">

<li>Status :</li>
<li>LastActive :</li>
<li>Badges :</li>
<li>Last Shift :</li>
<li>Next Shift :</li>

</ul>
`;
   
       break;
   
       case 2:
           userTD.style.width = '30%';
           userTD.innerHTML = 'status';
   
       break;
   
       case 3:
           userTD.style.width = '15%';
        //    userTD.innerHTML = item.email;
        userTD.innerHTML += `
        <ul class="todo" id="todoItemt">
        
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
        <ul class="todoAnsa" id="todoItemtAnsa">
        
        <li> ${item.user_data.phone}</li>
        <li> ${item.user_data.phone}</li>
        <li> ${item.user_data.adres}</li>
        <li> ${item.user_data.email}</li>
        
        </ul>
        `;
   
       break;
   
       case (aTDs-1):
           userTD.style.width = '15%';
           const checkboxContainer = document.createElement('div');
checkboxContainer.className = 'checkbox-container';

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
    const label = document.createElement('label');
  
    label.textContent = option; // Set the label text

    // Create a checkbox input element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';  // Set input type to checkbox
    checkbox.name = 'options[]';  // Give the same name to all checkboxes
    checkbox.value = option;   // Set the value for the checkbox
    checkbox.id = `checkbox${index + 1}`; // Set a unique id for each checkbox
    checkbox.style.margin = '0 5px 0 5px';
console.log('checkboxxx', checkbox,'item',item,'item.user_data',JSON.parse(item.user_data.optionsList)[option],'option',option);
    checkbox.checked = JSON.parse(item.user_data.optionsList)[option];
    // Associate the label with the checkbox
    label.setAttribute('for', `checkbox${index + 1}`);

    // Create a container div for label and checkbox
    adisi.containerCB = document.createElement('div');
    adisi.containerCB.className = 'checkbox-item';

    // Append the checkbox and label to the container
    adisi.containerCB.appendChild(checkbox);
    adisi.containerCB.appendChild(label);
    adisi.containerCB.style.margin = '0 15px 0 15px';
    adisi.containerCB.style.color = 'white';

    // Append the containerCB to the checkbox containerCB
    adisi.containerCB.style.display = 'flex';
    // checkboxContainer.style.display = 'inline-flex';
    checkboxContainer.style.felxWrap = 'wrap';
    checkboxContainer.setAttribute('id', 'userCheckboxContainer');
    checkboxContainer.appendChild(adisi.containerCB);
    // form.appendChild(checkboxContainer);
})
////////////////////
           userTD.appendChild(checkboxContainer);
       break;
   
   
   }
              
              
   
//    userTD.style.width = '50%';
               userTR.appendChild(userTD);
              
   
      
   
               userTable.appendChild(userTR);
             
              console.log('iteratings')
           }
          
           tempContainere.appendChild(userTable);
           userJava.appendChild(innerContainer);
       }
    ///////////////////////////////////END CASE 1


}


/////////////////////////////////////// expandbutton eventlistener begin
expandButton.addEventListener('click',function (event) {
    event.preventDefault();
    
let  strippedIndex =   event.target.attributes.id.value.split('expandButton');
let expansionTable =document.getElementById('userExpandTable'+strippedIndex[1]);
console.log('this is the ExpandButton!', event,'expansionTable',expansionTable,'strippedIndex',strippedIndex)

// expansionTable.style.display = 'flex'
toggleDisplay(expansionTable);
})


//////////////////////////////////////////////  BEGIN POPUP BUTTON
adisi.innerUserPopUp.addEventListener('click',function (event) {
    event.preventDefault();
    let popup = document.getElementById('userPopUp');
    popup.style.display ='none';
    
console.log('closte the damns window')
})
/////////////////////////////////////// end pop up button


   
function toggleDisplay(element) {
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
})


    }

}



    

var appz =  userLoadsDB;
console.log('this is tapzzzzBB',appz);



// Rasengan.addEventListener('click', function (event) {
    // event.preventDefault();
    $(document).ready(function () {
        let PagesClassy = new PagesClass('TESTaPPZ','TESTtYPE');
        // console.log('THIS IS THE CLASS','this.userPopUp','appz','appz', 'type','type',PagesClassy)
        PagesClassy.innerFunction();
        PagesClassy.createForm();
        PagesClassy.checksAndSave();

//         let Rasengan = document.getElementById("rasengan");
// let OrdersWind = document.getElementById("OrdersWindow");

        //////////////////////////////////////////////////////// EVENTISTENER USERPLUS

        


let userPlusButton  = document.getElementById('userPlus');
userPlusButton.addEventListener('click',function (event) {
    event.preventDefault();
    
    let popup = document.getElementById('userPopUp');
    popup.style.display ='block';
console.log('yo this is da userPlus')
})

/////////////////////////////////////////////////////// END EVENTLISTENER USERPLUS


     
       


})


////////////////////////////////////////
 







