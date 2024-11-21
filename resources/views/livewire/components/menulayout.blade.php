
<div id="menu-container" name="false" style="overflowX:'hidden'; display:none; position:absolute; width:100%; top:5%;z-index:9999;background-color:rgba(100,50,60,0.5);height:35%;">
  <!-- <table style="color:white; width:100%;" >
<tr style="border:2px solid white;width:100vw; box-sizing:border-box; ">
<td style="border:2px solid white;width:100vw; color:white; box-sizing:border-box;" >
Home
</td>
</tr>.
<tr>
<td style="border:2px solid white; width:100vw; color:white; box-sizing:border-box;">
Order Toevoegen +
</td>

</tr>

<tr>
<tr>
<td style="border:2px solid white; width:100vw; color:white; box-sizing:border-box;">
Containers
</td>

</tr>

<tr>
<td style="border:2px solid white; width:100vw; color:white; box-sizing:border-box;">
Ophaal
</td>

</tr>

<tr>
<td style="border:2px solid white; width:100vw; color:white; box-sizing:border-box;">
Binnengekomen vracht
</td>

</tr>

<tr>
<td style="border:2px solid white; width:100vw; color:white; box-sizing:border-box;">
Aanbiedingen
</td>

</tr>

  </table> -->
  
  </div> 
    
    <div id="game-container" style="overflowX:'hidden';"></div>
    <!-- <div id="game-container"></div> -->
    <!-- <div id="innerDivvaxx" style="overflowX:'hidden';position:absolute;"></div> -->

    <div id="divverBB" style="overflowX:'hidden';position:absolute;"></div>
<div id="divver"></div>

<!-- <div id="svg-container">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
   
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2zm0-8h-2v-2h2z"/>
  </svg>
</div> -->
    <input type="text" id="textInput" style="display:none;" placeholder="Type something...">
    <!-- <input type="text" id="textInputB" placeholder="TypeB something..."> -->

    <input type="text" id="utext"  name="username" style="position:absolute" placeholder="TypeR something...">
        <div  id="innerDivvaxx"  name="innerusername" style="position:absolute" ></div>
        <div  id="overlayContent"  name="innerusername" style="position:absolute" ></div>



        @if(session()->has('message'))
<div class="alert alert-success">
       <button type="button" class="close" data-dismiss="alert">X</button>
{{session()->get('message')}}
</div>
       @endif

       
    <!-- <div id="testPopupContent">
    <p>this is a test to see if it works</p>
</div>
    <div class="popup" id="popup-1">

        <div class="overlay">
    
            <div class="content">
    
                <div class="close-btn" onclick="togglePopUp()">&times;
        
                </div>
        <h1>Title</h1>
        <p id="testPara">Dit is mijn eerste pop up dus sluit het maar om te kijken of het werkt!</p>

        <div id="testDIV"></div>
            </div>
        
        </div>
    
    </div><button onclick="togglePopUp('SHOW POPUP',this)">SHOW POPUP</button> <button onclick="togglePopUp('SHOW POPUPA',this)">SHOW POPUPA</button> -->


<!-- </div> -->
        <!-- <div> -->
        
        <!-- <svg xmlns="http://www.w3.org/2000/svg"
     xml:lang="en" width="100%" height="2.5cm">
    <title>Positioning tspan</title>
    <style type="text/css">
        svg {
            font-family: serif;
            font-size: 12mm;
            fill: navy;
        }
        .em {
            fill: royalBlue;
        }
        .strong {
            stroke: navy;
            font-style: italic;
        }
    </style>
    <rect fill="#CEE" width="100%" height="100%" />
    <text x="5mm" y="2.1cm" >One,
        <tspan class="em" y="1.6cm">Two,</tspan>
        <tspan class="strong em" y="1.1cm">Three!</tspan>
    </text>
</svg>
        <p>what a gwaan nu weer!</p></div> -->

      <!-- <div class="containerada">
	<object type="image/svg+xml" data="img/logologo.svg" 
	width="100%" height="100" class="svgclass">
	</object>
</div> -->
    <!-- <script type="text/javascript">
          import {Text} from 'troika-three-text';
        console.log('dondo');
      // import * as THREE from '../node_modules/three/build/three.module.js';
// console.log('it works tilll here');
    </script> -->
 


   
            <!-- <script type="text/javascript" src="/js/phaser-files/Scenes/Scene8.js" ></script> -->

        <div id="mainOuterDiv" >
   

<!-- ///////////////////////////////// -->

<div id="MasterWindowDiv" style="width:'100%'; height:100vh; background-color:blue;">
<div  id="controlContainer" style="width:'100%'; height:100vh; stoke-width:4px; stroke:'40px dotted red'; background-color:grey;  display: grid; grid-template-areas: 'topSide topSide topSide topSide topSide' 'head ILS ITS IRS rightSide' 'head ILS nav IRS rightSide' 'head ILS IBS IRS rightSide' 'foot foot foot foot foot'; grid-template-rows: 5% 5% 83% 2% 5%;  grid-template-columns: 5% 1% 88% 1% 5%;">
<div  id="anotherContainera" style=" background-color:rgba(54,57,107,1); grid-area:topSide;">
<!-- /////////////////////////// NAV BEGIN--> 
<div  id="topContainer"  style="width:100%; height:5%; background-color:yellow;">
  
    <nav id="naviNavi" class=" flex" style="height:5vh; background-color:#36396b;">

        <button id="upperMenuButton" @click="show =! show"
         class="block h-8 mr-3 text-gray-400 items-center hover:text-gray-200 
        focus:text-gray-200 focus:outline-none sm:hidden">
        <svg class="w-8 fill-current" viewBox="0 0 24 24">                            

<path x-show="!show" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
<path x-show="show" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
</svg>
            </button>  
            <div style="display:inline-flex;">
     

        </div>
        <div class="items-center" >
        <!-- <div class="h-12 w-full flex items-center" > -->
        <!-- <div class="h-12 w-full flex items-center"> -->
            <a href="{{ url('/')}}" class="w-full">
                <!-- <img class="gtesta h-8" src="{{ url('/img/JDGLOW.png')}}" /> -->
                <!-- <div class="containerada"> -->
                <!-- <img id="imglogotest"  src="{{ url('/img/JDGlow.png')}}"  alt=''/> -->
  <!-- <img id="imglogotest"  src="img/logologo.svg" alt=''/> -->
    <!-- <img id="imglogotest" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/responsive-logo.svg' alt=''> -->
  <!-- <div class="resizer"></div>
</div> -->
            </a>
        <!-- </div>-->
        </div> 
     
        <div class="flex justify-end" >
            {{-- Top Navigation --}}
            <!-- <ul class="hidden sm:block sm:text-left text-gray-200 text-xs"> -->
            <!-- <div style="display: inline-flex; padding:10 0;"> -->
            <div style="display: inline-flex; font-size:1em; color:yellow; width:100%;  opacity:1; ">
            <!-- <section>
				
        <button style="background-color:red; border-radius:5px 5px 5px 5px; border:2px dotted white;" id="request">Request</button>
        <button style="background-color:purple; border-radius:5px 5px 5px 5px; border:2px solid white;" id="exit">Exit</button>
        <button style="background-color:purple; border-radius:5px 5px 5px 5px; border:2px solid white;" id="toggle">Toggle</button>
        <button style="background-color:purple; border-radius:5px 5px 5px 5px; border:2px solid white;  justify-content:center; align-items:center;" id="request2">Request document</button>
    </section>   -->
    <!-- <p ><h3 id="SaveSVG"> SVG</h3><h3 id="SavePNG">PNG</h3> </p>  -->
    <div id="testPopupContent">
    <!-- <p wire:click="create">this is a test to see if it works</p> -->
    
</div>

    <div class="popup" id="popup-1" style=" border:7px dotted white;  position:absolute; opacity:1;">

        <div class="overlay" style="color:blue; border-radius:5px 5px 5px 5px; ">
    
            <div class="content"  id="contentara" style="display:block; width:100%; top:100px;  right:100px; x:100; border:7px dotted white;  opacity:1;">
    
                <div class="close-btn" onclick="togglePopUp()">&times;
        
                </div>
        <h1 id="popUpHeaderText">Sendorder</h1>
        <!-- <p id="testPara">Dit is mijn eerste pop up dus sluit het maar om te kijken of het werkt!</p> -->
<br>
<br><div style="display:inline-flex">
        <div id="testDIV"></div>&nbsp &nbsp
        <!-- <button style="background-color:purple; border-radius:5px 5px 5px 5px; border:2px solid gray;" onclick="saveChanger('SHOW POPUP',this,{width:'200px', height:'200px'})">0</button>  -->
        </div>
      
      </div>
        
        </div>
    
    </div><button style="background-color:black; border-radius:5px 5px 5px 5px; width:'30px'; border:2px solid gray;" onclick="togglePopUp('SHOW POPUP',this,{width:'200px', height:'200px'})">S</button> <button style="background-color:blue; border-radius:5px 5px 5px 5px; border:2px solid gray;"onclick="togglePopUp('SHOW POPUPA',this,{width:'450px', height:'220px'})">SS</button>
    
    <!-- <div id="OrderSaver">Create+</div> -->

    <!-- <div id="OrderSaver">Save+</div> -->
    <!-- <div id="packageRecovery" style="font-size:'0.6em';">recoverPackages</div>
</br></br>
    <div id="CreateNewOrderBon" style="font-size:'0.6em';">CreateNewOrder</div> -->
    <!-- //@//this.saveIndividualValues('formaat',Adisi.Jdatastream.orderID,LWHnote); -->
<!-- newTDOrderLine1Creation.style.borderRadius= "0 15px 0 0 ";
PackageTableTotal.style.border = "1px solid black"; -->
    
    <!-- <a id="download" download="myImage.jpg" href="" onclick="download_img(this);">Download to myImage.jpg</a> -->
    <!-- <p ><h3 id="SaveSVG"> SVG   -</h3>      </p></br>
    <p >  <h3 id="SavePNG">     PNG   </h3>    </p>
     <button  id="buttond"  onclick="">Submit</button> -->
            <!-- <button  id="buttonX"  onclick="">Check</button> -->
             <!-- <input type="text"  id="insertes" placeholder="insertes"> -->
            <!-- <button  id="buttoncreatesvg" onclick="crearsvg();" >SVG</button> -->
        
            <!-- onclick="crearsvg();" -->
          <!-- </form> -->
            <!-- <input type="text"  id="FormInputName" placeholder="insert Name" onclick="getNameValues()"> -->

<p id="reloaderContent" style="z-index:9999; color:white; margin:10px;"> Zaap  </p>

<!-- @/endforeach -->
<!-- /*

*/ -->

    </div>
    <ul class="hidden sm:flex sm:text-left text-gray-200 text-xs">
            <!-- <ul class="hidden sm:flex sm:text-left text-gray-200 text-xs"> -->
  
                    <!-- <a href="{{ url('/login')}}">
                        <li class="cursor-pointer px-4 py-2 hover:underline">Log-in</li>
                    </a>
               -->
            </ul> 
            <!-- <a href="/vectorsavingss"> <p id="aapreloaderContent" style="z-index:9999; color:white; margin:10px;"> schaap  </p></a>
            <a href="/vectorcustomss"> <p id="draakreloaderContent" style="z-index:9999; color:white; margin:10px;"> draak  </p></a> -->
            <a href="{{ url('/vectorcustomss')}}"> <p id="aapreloaderContent" style="z-index:9999; color:white; margin:10px;"> schaap  </p></a>
            <a href="{{ url('/vectorsavingss')}}"> <p id="draakreloaderContent" style="z-index:9999; color:white; margin:10px;"> draak  </p></a>
            
            <a href="#" > <p id="olifantreloaderContent" style="z-index:9999; color:white; margin:10px;"> Olifant  </p></a>


            
            <p id="kangarureloaderContent" style="z-index:9999; color:white; margin:10px;"> kangaroo </p>
        </div>
     
    </nav>
  


   
                    <!-- <div class="XSLpage"  ><div class="Xinnerpagina"><p>wagwaan1</p></div></div>
                    <div class="XSLpage"  ><div class="Xinnerpagina"><p>wagwaan2</p></div></div> -->
                        <!-- <div class="XSLpage" data-XSLpage="2">
                            <h2>Page 2</h2>
                            <p>Slidebar</p>
                        </div> -->
                  
                    <!-- </div> -->
                    <!-- <div class="Xinnerpagina"><p>wagwaan2</p></div>
                    <div class="XSLpage"  data-page="sidetab1"><div class="Xinnerpagina"><p>wagwaan1</p></div></div>
                    <div class="XSLpage"  data-page="sidetab2"><div class="Xinnerpagina"><p>wagwaan2</p></div></div> -->
                
        </div>
        
       





<!-- ///////////////////////////////// NAV END-->

</div>        

<div  id="leftSideContainer" style=" background-color:grey; grid-area:head;"></div>

        <div  id="anotherContainer" style="background-color:orange; grid-area:rightSide;"></div>

        <div  id="innerTopSideContainer" style=" background-color:grey; width:100%; justify-content:center; align-items:center; left:50%;display:flex; grid-area:ITS;">
        <input id="searchField" type="text"  placeholder="Search..." style="height:100%; background-color:black; color:yellow; justify-content:center; align-items:center; width:50vw; left: 50vw;">

</input>
      
        <div class="notification" id="divNotification" style="width:100%; height:100%; background-color:'rgba(133,33,233, 0.5)'; display:none;">background-color:  #009999</div>

      </div>
       
        <div  id="innerLeftSideContainer" style=" background-color:yellow; grid-area:ILS;"></div>
        <div  id="innerRightSideContainer" style=" background-color:yellow; grid-area:IRS;"></div>
        <div  id="innerBottomSideContainer" style=" background-color:yellow;  display:inline-flex; grid-area:IBS;">
        
      <!-- //////////////////////////////   PAGINATION LINKS BEGIN /////////////////////////////////////////// -->
<div id ="newDivX" style="background-color:none; widht50%; height:50%; position:absolute;">

    

        






</div>
<div id ="newDivXpaginationContent" style="background-color:orange; widht50%; height:25%;">



</div>

<!-- <div  id="footerBottomContainer" style=" background-color:pink; z-index:9999;  display:inline-flex; grid-area:foot;"></div> -->
    
      <!-- ////////////////////////////// END PAGINATION LINKS BEGIN /////////////////////////////////////////// -->
        <div id="packageRecovery" style="font-size:'0.3em';display:inline-flex; height:'100%'">recoverPackages</div>
<!-- </br></br> -->
    <div id="CreateNewOrderBon" style="font-size:'0.3em'; display:inline-flex; height:'100%'">CreateNewOrder</div>

  </div>

<!-- <div  id="rightSideContainer" ></div> -->
<!-- <div id="OrdersWindow"  style=" grid-area:nav;"> -->

<div  id="bottomContainer"  style=" width:100%; height:100%;display: inline-flex; position: relative;  grid-area:foot;">


<div id ="newDivXpagination" style="background-color:purple; height:100%;  margin:0; padding:0; width:100%; display: flex; align-items:center; justify-content:center;">




</div>
<div  style="width:10%; background-color:blue; z-index:100; height:100%; right:5%; position: absolute; display: flex; align-items:center; justify-content:center; "id="numberOftotal">

<div class="container" >
        <input type="text" id="inputField" placeholder="">
        <div class="dropdown">
            <div class="dropdown-content">
                <!-- <input type="range" min="0" max="100" value="0" id="slider"> -->
                <div class="options" id="options">
                    <!-- <div class="option">1</div>
                    <div class="option">2</div>
                    <div class="option">3</div>
                    <div class="option">4</div>
                    <div class="option">5</div>
                    <div class="option">6</div>
                    <div class="option">7</div>
                    <div class="option">8</div>
                    <div class="option">9</div>
                    <div class="option">10</div>
                    <div class="option">11</div>
                    <div class="option">12</div>
                    <div class="option">13</div>
                    <div class="option">14</div>
                    <div class="option">15</div>
                    <div class="option">16</div>
                    <div class="option">17</div>
                    <div class="option">18</div>
                    <div class="option">19</div>
                    <div class="option">20</div> -->
                </div>
            </div>
        </div>
        
      <!-- <p style="color:white; font-size:1em;  ">&nbsp &nbsp &nbsp 5  / 50</p> -->
</div>
    
<!-- /50 -->
<!-- <p style="color:white; font-size:1em;  ">5  / 50</p> -->
</div>
<div style=" width:5%; height:100%; background-color:grey; z-index:110;display: inline-flex; align-items:center; justify-content:center; color:white; font-size:1em;"><p style="" id="paginationTotals">     50</p></div>
</div>
<!-- <div id="innerbottomContainer" style=" width:100%; height:100%; background-color:'green'; display: flex; align-items:right; justify-content:right; ">

<div  style="width:100px; background-color:blue;  display:block; "id="numberOftotal">boo</div>
</div>

</div> -->
<!-- <div  id="rightSideContainer" style="width:4%; height:100%; left:100px; background-color:red;  grid-area:rightSide;"></div> -->

<!-- </div> -->
     
        <!-- </div> -->
        <div id="placeholder-OrdersWindow">
    <!-- Placeholder content -->
</div>
           <!-- <section class="divide-y text-gray-900">   
  <div id="OrdersWindow"  style=" grid-area:nav;">




</section> -->

<!-- ///////////////////////// NAV END-->
<!-- <div id="MasterWindowDiv">

</div> -->

<div id="OrdersWindow"  style=" grid-area:nav;">
<!-- @///include//('layouts.customvectordata') -->

      </div>

</div>

           

           </div>

<!-- //////////////////////////////////// -->

            <!-- Page Content -->
            
            <main id="mainContentSlot">
   
              
                {{ $slot }}
                
            </main>
        </div>

   
 

<!-- /////// -->



<!-- <script src="js/mtwo/build/three.min.js"  type="module">
  // console.log('fghfg');
  

</script> -->

<!-- <script type="text/javascript">



function togglePopUp(e,disi){

document.getElementById('popup-1').classList.toggle('active');

let contentTest = document.getElementById("testPopupContent");
let CNodetest = contentTest.cloneNode(true)

let DisNode = disi.cloneNode(true);

let testParag = document.getElementById("testPara");

let testDIV = document.getElementById("testDIV");

let popupArea = document.getElementsByClassName("content");

// popupArea
// testDIV.insertAdjacentHTML('beforeEnd', CNodetest);
testDIV.innerHTML ="";
testDIV.appendChild(DisNode)
// popupArea.appendchild(contentTest)
// popupArea.innerHTML ="contentTest";
// testParag.innerHTML =contentTest;
// popupArea.insertAdjacentHTML('beforeEnd', contentTest);
// document.getElementsByClassName(content);
console.log("contentTest", contentTest, "popupArea" ,popupArea, "CNodetest",CNodetest,"e",e,"disi",disi );


}


</script> -->
<!-- <script src="js/three.module.js"></script> -->
		<script type="module">
  //     import { FontLoader } from './js/modules/fontLoader.js';
  // import * as THREE from 'js/three.module.js';
// import * as THREE from 'https://unpkg.com/three/build/three.module.js';

      // import * as THREE from 'js/threezz.module.js';

// import { FontLoader } from 'js/mwto/examples/jsm/loaders/FontLoader.js';
//       class WebGL {

// static isWebGLAvailable() {

//   try {

//     const canvas = document.createElement( 'canvas' );
//     return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

//   } catch ( e ) {

//     return false;

//   }

// }

// static isWebGL2Available() {

//   try {

//     const canvas = document.createElement( 'canvas' );
//     return !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );

//   } catch ( e ) {

//     return false;

//   }

// }

// static getWebGLErrorMessage() {

//   return this.getErrorMessage( 1 );

// }

// static getWebGL2ErrorMessage() {

//   return this.getErrorMessage( 2 );

// }

// static getErrorMessage( version ) {

//   const names = {
//     1: 'WebGL',
//     2: 'WebGL 2'
//   };

//   const contexts = {
//     1: window.WebGLRenderingContext,
//     2: window.WebGL2RenderingContext
//   };

//   let message = 'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';

//   const element = document.createElement( 'div' );
//   element.id = 'webglmessage';
//   element.style.fontFamily = 'monospace';
//   element.style.fontSize = '13px';
//   element.style.fontWeight = 'normal';
//   element.style.textAlign = 'center';
//   element.style.background = '#fff';
//   element.style.color = '#000';
//   element.style.padding = '1.5em';
//   element.style.width = '400px';
//   element.style.margin = '5em auto 0';

//   if ( contexts[ version ] ) {

//     message = message.replace( '$0', 'graphics card' );

//   } else {

//     message = message.replace( '$0', 'browser' );

//   }

//   message = message.replace( '$1', names[ version ] );

//   element.innerHTML = message;

//   return element;

// }

// }
// import * as THREE from '';

// export default WebGL;

// Initiate function or other initializations here

const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 600 );
      // const loader = new THREE.FontLoader();
      
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0xf6ff36 } );
			const cube = new THREE.Mesh( geometry, material );
      const materialb = new THREE.MeshBasicMaterial( { color: 0xd4Cf50 } );
      const cubes = new THREE.Mesh( geometry, materialb );
      const controls = new OrbitControls( camera, renderer.domElement );
      // const textgeometry = new THREE.TextGeometry('jkjkj');
      if ( WebGL.isWebGLAvailable() ) {

// Initiate function or other initializations here
console.log('jeeerreight');

}
      // textgeometry.text = 'Hello world!';
      // textgeometry.fontSize = 0.2;
      // textgeometry.position.x = -2;
      // textgeometry.color = 0x9966FF;


      // const scene = new THREE.Scene();
// const myText = new THREE.Text;
// myScene.add(myText)
// scene.add(myText)
// Set properties to configure:
// myText.text = 'Hello world!';
// myText.fontSize = 0.2;
// myText.position.z = -2;
// myText.color = 0x9966FF;

// Update the rendering:

// myText.sync()
// textgeometry.position.x = 3;
// textgeometry.position.y = -1;
// const loader = new FontLoader();
// const font = loader.load(
// 	// resource URL
// 	'fonts/Chenla_Regular.json',

// 	// onLoad callback
// 	function ( font ) {
// 		// do something with the font
// 		console.log( font );
// 	},

// 	// onProgress callback
// 	function ( xhr ) {
// 		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
// 	},

// 	// onError callback
// 	function ( err ) {
// 		console.log( 'An error happened' );
// 	}
// );
// const loader = new FontLoader();
// loader.load( 'fonts/Chenla_Regular.json', function ( font )
{
    
});

// const matLite = new THREE.MeshBasicMaterial(
// {
//     color: 0x2c3e50,
//     transparent: true,
//     opacity: 0.8,
//     side: THREE.DoubleSide
// } );
cubes.position.x = 3;
cubes.position.y = -1;
scene.add( cube );
scene.add( cubes );
scene.add(  textgeometry );

camera.position.z = 2;
// //       import {Text} from 'troika-three-text';

// const myText = new TextGeometry()
// scene.add(myText)

// // // // Set properties to configure:
// myText.text = 'Hello world!'
// myText.fontSize = 0.2
// myText.position.z = -2
// myText.color = 0x9966FF

// // // Update the rendering:
// myText.sync()

// const loader = new FontLoader();

// loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

// 	const geometry = new TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 80,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	} );
// } );

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cubes.rotation.x += 0.01;
  cubes.rotation.y += 0.01;

  // Create:


  renderer.render( scene, camera );
};

animate();

		
		</script>
<!-- <script src="js/modules/FontLoader.js" type="module"></script> -->
<!-- <script src="js/modules/FontLoader.js"></script> -->
    <script src="js/three.js" type="module">

    </script>

    <!-- <script src="js/importas-vectordash.js" type="module"> -->
      
     
    </script>

    <!-- <script type="text/javascript">
$(document).ready(function () {
        var addUserBtn = document.getElementById('addUserBtn');


addUserBtn.addEventListener('click', function (event) {
event.preventDefault();

console.log('addUserBtn add User')


});

})

</script> -->
    <div id="gamification">
<p>yoyoyoyoyoyoyoyoyoyoyoy onononon</p>
</div>
		<script type="module">
          console.log('222ghgfhgfh');
      // import * as THREE from "./js/three.js";
      // import {FontLoader} from "./js/FontLoader.js";
      // import { FontLoader } from '../../../js/mwto/examples/jsm/loaders/FontLoader.js';
    //  import { FontLoader } from './FontLoader.js';
   
      // const loader =  new FontLoader();
      // const sceneo = new THREE.FontLoader();
			const scene = new THREE.Scene();
      // const scendde = new THREE.TextGeometry();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 500 );

			const renderer = new THREE.WebGLRenderer();
      // const loader = new THREE.FontLoader();
  
      // const font = loader.load('fonts/Chenla_Regular.json');
      
			// renderer.setSize( window.innerWidth, window.innerHeight );
      // Set the initial size as a percentage of the window size
var initialWidthPercentage = 100;
var initialHeightPercentage = 80;

var initialWidth = (window.innerWidth * initialWidthPercentage) / 100;
var initialHeight = (window.innerHeight * initialHeightPercentage) / 100;

      renderer.setSize( (window.innerWidth-50),window.innerHeight);
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x8cfff4, wireframe:true } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 3;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.03;

				renderer.render( scene, camera );
			};

			animate();
		</script>
<!-- <script type="text/javascript" >
  // $(document).ready(function () {
    let popinnerContentDiv = document.getElementById('innerContentDiv');

    let btn = document.getElementById('olifantreloaderContent');

    btn.addEventListener('click', function (event) {
event.preventDefault();
console.log('oooyeahsa InnerContentDiv', popinnerContentDiv,'btn', btn)
    popinnerContentDiv.style.backgroundColor = 'orange';
    })
  

    // let newDivTaskLister= document.createElement("div");
</script> -->


        @stack('modals')

        @livewireScripts 