<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}a{background-color:transparent}[hidden]{display:none}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}a{color:inherit;text-decoration:inherit}svg,video{display:block;vertical-align:middle}video{max-width:100%;height:auto}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.border-t{border-top-width:1px}.flex{display:flex}.grid{display:grid}.hidden{display:none}.items-center{align-items:center}.justify-center{justify-content:center}.font-semibold{font-weight:600}.h-5{height:1.25rem}.h-8{height:2rem}.h-16{height:4rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.leading-7{line-height:1.75rem}.mx-auto{margin-left:auto;margin-right:auto}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.mt-8{margin-top:2rem}.ml-12{margin-left:3rem}.-mt-px{margin-top:-1px}.max-w-6xl{max-width:72rem}.min-h-screen{min-height:100vh}.overflow-hidden{overflow:hidden}.p-6{padding:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pt-8{padding-top:2rem}.fixed{position:fixed}.relative{position:relative}.top-0{top:0}.right-0{right:0}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.text-center{text-align:center}.text-gray-200{--text-opacity:1;color:#edf2f7;color:rgba(237,242,247,var(--text-opacity))}.text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.underline{text-decoration:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-5{width:1.25rem}.w-8{width:2rem}.w-auto{width:auto}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width:640px){.sm\:rounded-lg{border-radius:.5rem}.sm\:block{display:block}.sm\:items-center{align-items:center}.sm\:justify-start{justify-content:flex-start}.sm\:justify-between{justify-content:space-between}.sm\:h-20{height:5rem}.sm\:ml-0{margin-left:0}.sm\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\:pt-0{padding-top:0}.sm\:text-left{text-align:left}.sm\:text-right{text-align:right}}@media (min-width:768px){.md\:border-t-0{border-top-width:0}.md\:border-l{border-left-width:1px}.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\:px-8{padding-left:2rem;padding-right:2rem}}@media (prefers-color-scheme:dark){.dark\:bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.dark\:bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.dark\:border-gray-700{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.dark\:text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark\:text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.dark\:text-gray-500{--tw-text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--tw-text-opacity))}}
        </style>

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }




            /* ///////////////////// BGN PAGETABS */
   /* Hide all pages initially */
   .pageTabs {
            display: none;
        }
        /* Show the active page */
        .pageTabs.active {
            display: block;
        }


            /* //////////////////////////  END PAGETABS */
        </style>
        <!-- @//livewireStyles -->
        

        <livewire:styles />

        <meta charset="utf-8" type="text/javascript">
        <!-- <meta name="csrf-token" content="{{ csrf_token() }}"> -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible"  X-Content-Type-Options= "nosniff"/>

        <!-- //<meta http-equiv="X-UA-Compatible" content="IE=edge" X-Content-Type-Options= "nosniff" /> -->

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="{{ asset('css/symcss.css') }}">
        <!-- @//trixassets -->
        @livewireStyles

        <!-- Scripts -->
        <!-- <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> -->
      
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer></script>
<script src="https://cdn.tailwindcss.com"></script>
<!-- <script src="dist/alpine.min.js" defer></script> -->
<!-- <script src="https://cdn.tailwindcss.com"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/single-spa-alpinejs"></script> -->
<!-- The "defer" attribute is important to make sure Alpine waits for Livewire to load first. -->
  
<!-- <link rel="stylesheet" href="assets/css/fontawesome.css"> -->
<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">

<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"> -->
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> -->

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/e60b8c9bf8.js" crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      <script src="https://d3js.org/d3.v7.min.js">
    // const cavas = d3.select("d3canvas");
    
    // const svg = canvas.append("svg");
    
    // </script>


<script src="https://unpkg.com/canvg@3.0.1/lib/umd.js"></script>

<!-- <script src="https://cdn.jsdelivr.net/npm/pdfkit@0.11.0/js/pdfkit.min.js"></script> -->
<script src="https://github.com/devongovett/blob-stream/releases/download/v0.1.3/blob-stream.js"></script>
<script src="https://cdn.jsdelivr.net/npm/svg-to-pdfkit@0.1.8/source.min.js"></script>

<script src=
"https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js">
    </script>

    <!-- svg-exportJS prerequisite: canvg -->
<!-- <script src="https://unpkg.com/canvg@3.0.1/lib/umd.js"></script> -->
<!-- svg-exportJS plugin -->
<script src="https://sharonchoong.github.io/svg-exportJS/svg-export.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.umd.js" integrity="sha512-lIKG1kC5TMb1Zx32vdz1n31YJMZRknVY20U9MJ28hD3y2c0OKN0Ce5NhJji78v8zX5UOSsm+MTBOcJt7yMBnSg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<base href=".">
<!-- <script  src="./js/modules/FontLoader.js"></script> -->
<!-- <script src="https://unpkg.com/three/build/three.module.js"type="text/javascript"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" integrity="sha512-dLxUelApnYxpLt6K2iomGngnHO83iUvZytA3YjDUCjT0HDOHKXnVYdf3hU4JjM8uEhxf9nD1/ey98U3t2vZ0qQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<!-- <script src="/js/importas-vectordash.js" type="module"> -->
  
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- 
<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script> -->
    <script src=
"https://cdnjs.cloudflare.com/ajax/libs/screenfull.js/3.1.0/screenfull.min.js">
    </script>
    <script src="{{ asset('vendor/livewire/livewire.js') }}" defer></script>
    <script type="text/javascript" src="/js/phaser-files/phaser.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser-arcade-physics.min.js"></script>
    <script type="text/javascript" src="/js/lokijs/src/lokijs.js"></script>
    <script type="text/javascript" src="/js/phaser-files/Scenes/Scene1.js" ></script>
    <script type="text/javascript" src="/js/phaser-files/Scenes/Scene2.js" ></script>
    <script type="text/javascript" src="/js/phaser-files/Scenes/Scene3.js" ></script>
    <script type="text/javascript" src="/js/phaser-files/Scenes/Scene4.js" ></script>
    <script type="text/javascript" src="/js/phaser-files/Scenes/Scene5.js" ></script>
    <script type="text/javascript" src="/js/phaser-files/Scenes/Scene6.js" ></script>
    <script type="text/javascript" src="/js/phaser-files/Scenes/Scene7.js" ></script>
    <!-- <script type="text/javascript" src="/js/phaser-files/Scenes/Scene8.js" ></script> -->
    <script type="text/javascript" src="/js/phaser-files/Scenes/Scene8.js" ></script>

    <script type="text/javascript" src="/js/phaser-files/Scenes/Scene9.js" ></script>
    
    <script src="dist/bundle.js"></script>

    <script type="text/javascript" src="/js/phaser-files/game.js" ></script>
        <link rel="stylesheet" href="{{asset('css/app.css')}}" />
        <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1CmrxMRARb6aLqgBO7Ejs+FgS9pVhcrxpsKXumFEc+CGgub6VZ0HYPDdX4gHM8o5" crossorigin="anonymous"> -->
   
        <!-- <script type="text/javascript" class="dynamic-script" src="{//{ass//et('js/app.js')}}" ></script> -->
        <!-- <script type="text/javascript" class="dynamic-script" src="/js/app.js" defer></script> -->
    </head>
    <body >
      
<div id="MainBody">

    <!-- <livewire://components.navbar-b-b /> -->
    <!-- {//{$//slot}} -->
    <!-- <livewire://components.layoutmenu/> -->
    
    <!-- @//livewire('components.layoutmenu') -->
 <!-- ////////////////////////////////////////////////// BEGIN LAYOUT MENU -->

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
  <!-- <livewire://component//s.navbar-b-b /> -->

    <nav id="naviNavi" class=" flex" style="height:5vh; background-color:'';">

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
       
         
        <livewire:components.navbar-b-b />

          <!-- <div class="flex justify-end" > -->
            {{-- Top Navigation --}}
            <!-- <ul class="hidden sm:block sm:text-left text-gray-200 text-xs"> -->
            <!-- <div style="display: inline-flex; padding:10 0;"> -->
            <!-- <div style="display: inline-flex; font-size:1em; color:yellow; width:100%;  opacity:1; "> -->
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



<!-- @/endforeach -->
<!-- /*

*/ -->

<div  class="justify-content-end" style="justify-content:right;  width:100%;justify-items:right; right:10px; border:1px solid blue;">
   
   <ul class="navbar-nav ml-auto mr-5 d-flex justify-content-end">
   <!-- data-turbolinks="false" -->
       @guest
           <!-- <li class="nav-item">
               <a href="/login" class="testax nav-link rounded-0 btn {{request()->is('login')?'btn-light text-dark':''}}" name="datalinkss" >Login</a>
           </li> -->
           <!-- <li class="nav-item">
               <a href="/containers" class="nav-link  rounded-0 btn {{request()->is('register')?'btn-light text-dark':''}}" name="datalinkss" >Containers</a>
           </li>
           <li class="nav-item">
               <a href="/userdb" class="nav-link" name="datalinkss" >Users</a>
           </li> -->
           <!-- <li class="nav-item"> -->
                               <!-- <a href="/containers" class="nav-link  rounded-0 btn {{request()->is('orders')?'btn-light text-dark':''}}"id="orderdatalink" name="datalinkss"  >Orders</a> -->

               <!-- <a href="/orders" class="nav-link  rounded-0 btn {{request()->is('orders')?'btn-light text-dark':''}}"id="orderdatalink" name="datalinkss" data-turbolinks="false" >Orders</a> -->
           <!-- </li> -->
       @else
       <!-- <li class="nav-item">
               <a href="/containers" class="nav-link  rounded-0 btn {{request()->is('orders')?'btn-light text-dark':''}}" name="datalinkss">Containers</a>
           </li>
           <li class="nav-item">
               <a href="/userdb" class="nav-link" name="datalinkss">Users</a>
           </li> -->
           <!-- <li class="nav-item">
               <a href="/containers" class="nav-link  rounded-0 btn {{request()->is('orders')?'btn-light text-dark':''}}" name="Containerss">Containers</a>
           </li>
           <li class="nav-item ml-5 " ->
           </li>     
           <li class="nav-item ml-5">
           <button class="nav-link active btn btn-primary  rounded-0 btn {{request()->is('register')?'btn-light text-dark':''}}" style="margin:0px 7px;" wire:click="logoutUser">Users</button>
             <a href="/logout" class="nav-link  {{ request()->is('logout') ? 'active' : ''}}">Logout</a>
           </li>   -->
           <!-- <li class="nav-item ml-5 ">
               <p class="text-white font-weight-bold mt-2">Welcome, <span class="text-warning">{{auth()->user()->name}}</span> </p>
           </li>  -->
       
          
       @endguest
   </ul>
</div>
        <button id="reloaderContent" style="z-index:9999; color:white; margin:10px;">Containers </button>

        <button id="reloaderContentu" style="z-index:9999; color:white; margin:10px;"> Users</button>
        <button id="overzicht" style="z-index:9999; color:white; margin:10px;"> Overzicht</button>
        <button id="createNewOrder" style="z-index:9999; color:white; margin:10px;"> + New Order </button>
        <button id="todoAgenda" style="z-index:9999; color:white; margin:10px;">To do</button>
        <p id="clearJAVAbutton" style="z-index:9999; color:white; margin:10px;"> Clearrr {{ Route::currentRouteName() }} </p>
        <br/>
        <button id="rasengan" style="z-index:9999; color:white; margin:10px;"> Rasengan!</button>
      
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



@if(Route::currentRouteName() === 'orders')


@if ($newdbxdata->total() > $newdbxdata->perPage())
    <!-- {//{ $newdbxdata->links()}} -->
    <!-- {!////! $///newdbxdata->links('vendor.pagination.default')->toHtml() !!} -->
    {!! $newdbxdata->onEachSide(2)->links('vendor.pagination.default')->toHtml() !!}
@endif

@endif



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
        <!-- <div id="placeholder-OrdersWindow"> -->
    <!-- Placeholder content -->
<!-- </div> -->
           <!-- <section class="divide-y text-gray-900">   
  <div id="OrdersWindow"  style=" grid-area:nav;">




</section> -->

<!-- ///////////////////////// NAV END-->
<!-- <div id="MasterWindowDiv">

</div> -->


<div id="OrdersWindowBBB" style="background-color:red; width:100%; height:100%;">
    <div id="OrdersWindow"  class="pageTabs" style=" grid-area:nav;">
    </div>
    <div id="Logindata" class="pageTabs"  >
<livewire:login/>
<!-- <script type="text/javascript" src="/js/orderdata.js"></script> -->
</div>
<div id="Registerdata" class="pageTabs" >
<livewire:register/>
    <!-- testingg -->
 <!-- <script>

    let globalRoute = '{{route("/updatejsonpagination.save")}}'; 

    
 </script>
       <script type="text/javascript" id="mainscription" src="{{ asset('js/orderxdata.js') }}">
        
       </script> -->
<!-- <script type="text/javascript" src="/js/orderdata.js"></script> -->

</div>
<div id="xContainerx" class="pageTabs"  >
<livewire:containers/>
<!-- <script type="text/javascript" src="/js/orderdata.js"></script> -->
</div>
<div id="Userdata" class="pageTabs"  >
<livewire:userdb/>
<!-- <script type="text/javascript" src="/js/orderdata.js"></script> -->
</div>
</div>

</div>
<!-- <script type="text/javascript" src="/js/testscription.js"></script> -->
<!-- @/livewire('orderdata') -->
{{$slot}}


<!-- @//if (!isset($scriptsLoaded) || !$scriptsLoaded) -->

<!-- <div id="Mainbody">




</div> -->
<!-- @///php $scriptsLoaded = true; @endphp -->
    <!-- @//endif -->
<!-- @///include//('layouts.customvectordata') -->

      <!-- </div> -->


</div>

           

           </div>

<!-- //////////////////////////////////// -->

            <!-- Page Content -->
            
            <main id="mainContentSlot">
   

    @slot('navbar')
     
    @endslot

                <!-- {//{ $/slot }} -->
                
            </main>
        </div>
        <div id="contentBB" style="background-color:orange; width:100%; height:50%;">  
    
     <livewire:login />     </div>
        <div id="contentCC" style="background-color:blue; width:100%; height:50%;">        </div>

   
 

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
// {
    
// });

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
    <!-- <div id="gamification">
<p>yoyoyoyoyoyoyoyoyoyoyoy onononon</p>
</div> -->
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

        <script type="text/javascript">

            


document.addEventListener('livewire:load', function () {
    // Initialize or update JavaScript here
    document.addEventListener('turbolinks:before-render', function(event) {
    event.preventDefault();
    console.log('Livewire component loaaaadedd!  b44 this is the page {{Route::currentRouteName()}}','event.target',event.target);

    })
    
document.addEventListener('turbolinks:load', function (e) {
    
e.preventDefault(); 

    console.log('Livewire component loaaaadedd! JavaScript is re-initialized! livewire:load livewire:load',e.data.url, e );
    
    // <livewire///:orderdata /> -->
            // Your initial JavaScript code
            // initializeMyComponent();
        });

        Livewire.hook('message.processed', (message, component) => {
            // This will run after every Livewire update
            initializeMyComponent();
        });

        function initializeMyComponent() {
            // Your JavaScript logic here
            console.log('Livewire component JavaScript is re-initialized!');
        }

    console.log('Livewire component loaaaadedd!');

});

document.addEventListener('livewire:update', function () {
    console.log('Livewire component updated!');
    // Reinitialize or update JavaScript here
});

document.addEventListener('livewire:load', function () {
    // Listen for the emitted event
    Livewire.on('jsUpdate', function () {
        console.log('JavaScript needs to updateDDDD!');
        // Your JavaScript code to execute
    });
});
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

</div>
        @stack('modals')



        @livewireScripts 

 <!-- //////////////////////////////////////////////////// END LAYOUT MENU -->

  
 <script type="text/javascript">
    
    $(document).ready(function() {


       
/////////////////////////////

// document.addEventListener('turbolinks:load', function() {
//     // if (typeof Livewire !== 'undefined') {
//     //     Livewire.restart(); // Reinitialize Livewire components
//     //     Livewire.rescan(); // Rescan the DOM for Livewire components
//     // }
//     console.log('this is the page b4 {{Route::currentRouteName()}}');

//     event.preventDefault();

//     console.log('this is the page {{Route::currentRouteName()}}');
//     let contentmainscription = document.getElementById("mainscription");
//     contentmainscription.innerHTML = '';
//     // let contentclassmainscription =  document.getElementByClassName("mainscription");

  
//     // contentmainscription.remove();
// //     if (contentmainscription) {
// //         contentmainscription.remove();
// // }

// // if (!window.Livewire.alreadyStarted) {
// //         window.Livewire.start();
// //         window.Livewire.alreadyStarted = true;
// //     }
//     // contentmainscription.innerHTML='';
//     // Your custom code here
//     console.log('12345 Turbolinks loaded a new page {{Route::currentRouteName()}} contentmainscription,',contentmainscription,'contentclassmainscription ','contentclassmainscription' );

// });

// document.addEventListener('turbolinks:before-render', function(event) {
//     event.preventDefault();
//     console.log('b44 this is the page {{Route::currentRouteName()}}');
  

//     let contentmainscription = document.getElementById("mainscription");
//     // contentmainscription.innerHTML='';

//     if (!window.myScriptInitialized) {
//     window.myScriptInitialized = true;

//     if (contentmainscription) {
//     console.log('12345 Turbolinks is about to render a cached page contentmainscription aftermid firstime',contentmainscription);
    
//     }
//     // Your JavaScript logic here
//     console.log('JavaScript initialized');
// }
//     // let contentclassmainscription =  document.getElementByClassName("mainscription");
//     // contentmainscription.remove();
//     if (contentmainscription) {
//         console.log('12345 Turbolinks is about to render a cached page contentmainscription',contentmainscription,'classcontentclassmainscription',contentmainscription);
//         // contentmainscription.innerHTML='';
//         // contentmainscription.remove();

//         console.log('12345 Turbolinks is about to render a cached page contentmainscription {{Route::currentRouteName()}} after',contentmainscription);
//         // window.myScriptInitialized = false;
// }
// // if (!window.Livewire.alreadyStarted) {
// //         window.Livewire.start();
// //         window.Livewire.alreadyStarted = true;
// //     }
//     // Handle preview or update your page content here
// });

// // elementses = document.getElementsByName('datalinkss');
// // // elementses[0].addEventListener('click', function(event) {
// // //     event.preventDefault();

// //     // console.log('loginn this is the login loginya',elementses, elementses.length);

// //     for(let rr= 0; rr< elementses.length; rr++){

// //         elementses[rr].addEventListener('click', function(event) {
// //             console.log('loginn this is the login loginya AA event {{Route::currentRouteName()}}',"event,elementses, elementses.length",'elementses[rr]',elementses[rr]);

// //     event.preventDefault();
// //     console.log('loginn this is the login loginya event {{Route::currentRouteName()}}',"event,elementses, elementses.length",'elementses[rr]',elementses[rr]);


// //         })
// //     }
// ///////////////////////////////
    })

    //////////////////////// TURBOLINKS LOAD DATA

//     document.addEventListener('turbolinks:load', function() {
//     // if (typeof Livewire !== 'undefined') {
//     //     Livewire.restart(); // Reinitialize Livewire components
//     //     Livewire.rescan(); // Rescan the DOM for Livewire components
//     // }
//     event.preventDefault();

//     console.log('this is the page {{Route::currentRouteName()}}');
//     let contentmainscription = document.getElementById("mainscription");
//     contentmainscription.innerHTML = '';
//     // let contentclassmainscription =  document.getElementByClassName("mainscription");

  
//     // contentmainscription.remove();
// //     if (contentmainscription) {
// //         contentmainscription.remove();
// // }

// // if (!window.Livewire.alreadyStarted) {
// //         window.Livewire.start();
// //         window.Livewire.alreadyStarted = true;
// //     }
//     // contentmainscription.innerHTML='';
//     // Your custom code here
//     console.log('12345 Turbolinks loaded a new page {{Route::currentRouteName()}} contentmainscription,',contentmainscription,'contentclassmainscription ','contentclassmainscription' );

// });

// document.addEventListener('turbolinks:before-render', function(event) {
//     let contentmainscription = document.getElementById("mainscription");
//     // contentmainscription.innerHTML='';

//     if (!window.myScriptInitialized) {
//     window.myScriptInitialized = true;

//     if (contentmainscription) {
//     console.log('12345 Turbolinks is about to render a cached page contentmainscription aftermid firstime',contentmainscription);
    
//     }
//     // Your JavaScript logic here
//     console.log('JavaScript initialized');
// }
//     // let contentclassmainscription =  document.getElementByClassName("mainscription");
//     // contentmainscription.remove();
//     if (contentmainscription) {
//         console.log('12345 Turbolinks is about to render a cached page contentmainscription',contentmainscription,'classcontentclassmainscription',contentmainscription);
//         // contentmainscription.innerHTML='';
//         // contentmainscription.remove();

//         console.log('12345 Turbolinks is about to render a cached page contentmainscription {{Route::currentRouteName()}} after',contentmainscription);
//         // window.myScriptInitialized = false;
// }
// // if (!window.Livewire.alreadyStarted) {
// //         window.Livewire.start();
// //         window.Livewire.alreadyStarted = true;
// //     }
//     // Handle preview or update your page content here
// });

    //////////////////////////END TURBOLINKS LOADDATA
    </script>
     


           
            <!-- @//livewireScripts -->
          
            <script src="https://cdn.jsdelivr.net/gh/livewire/turbolinks@v0.1.x/dist/livewire-turbolinks.js" data-turbolinks-eval="false" data-turbo-eval="false"></script>
            <!-- <script type="text/javascript" src="{//{asse//t('js/app.js')}}" ></script> -->
            <!-- ///////////////<begin> <script>////////////////--> 
    
    
            <script>

var currentLoadsDB = [];
    @if(Route::currentRouteName() === 'orders')
    
    var itemsx = @json($newdbxdata);
       var dbData = @json($data);
    var testEncodec = @json($newdbxdata[0]);
    itemsx.data.forEach((key) => {
        console.log('Global variables from database testEncode aaaaaaaaaaaa',key)
        currentLoadsDB.push(key);
    });

    //////////////////////////////////////////////

    var userLoadsDB = [];
    
    var userdbsx = @json($userdb);
    //    var dbData = @json($data);
    // var testEncodec = @json($userdb[0]);
    userdbsx.data.forEach((key) => {
        console.log('Global variables from database userdb userdb',key)
        userLoadsDB.push(key);
    });

       //////////////////////////////////////////////

       var containerLoadsDB = [];
    
    var containerdbsx = @json($containerdb);
    //    var dbData = @json($data);
    // var testEncodec = @json($userdb[0]);
    containerdbsx.data.forEach((key) => {
        console.log('Global variables from database containerdb containerdb',key)
        containerLoadsDB.push(key);
    });
  
  
  
       console.log('Global variables from database testEncode',testEncodec,'itemsx',itemsx,'dbData',dbData,'Ecodectest','Ecodectest',itemsx.data,'currentLoadsDB',currentLoadsDB,'containerLoadsDB',containerLoadsDB)
       @endif

   
        // window.itemsx =  itemsx; // Passing PHP data to JavaScript
    </script>
<!-- @i///f(Route::///currentRouteName() === 'orders') -->
<script type="text/javascript">
//     window.globalmyAppX = {
//     variables: {},
//     functions: {},
//     eventListeners: [],
//     instances:[],
//     yoy:'aaaaaaaaaaaap',
// };
    $(document).ready(function() {

        
        window.clearJAVAbtn = document.getElementById('clearJAVAbutton');
// window.clearJAVAbtn.addEventListener('click',function (event) {
    

console.log('loginn this is the login log this is JAVA cleared');
// removeAllEventListeners();

// delete window.myAppX;
// delete parentObject.myAppX
// window.myAppX  = null;
console.log('loginn this is the login log this is JAVA cleared  B', window.globalmyAppX);

// });

        
    let elementses ;
    elementses = document.getElementsByName('datalinkss');

    for(let rr= 0; rr< elementses.length; rr++){

elementses[rr].addEventListener('click', function(event) {
    console.log('is the script deleted event ris',event.target.href,event.target.innerHTML)
    event.preventDefault();


    ///////////////////////////////////////



    let displayPageTabs = document.querySelectorAll(".pageTabs");


displayPageTabs.forEach(key => {
        console.log('hij doet het hoor these are the page tabs',key,'key.style.display',key.style.display)
        // key.style.display='none';

        // if(key.style.display == 'none'){
        //     key.style.display == 'block'
        // }else{
        //     key.style.display == 'none'
        // }

        key.classList.remove('active');
    // });

    // Show the selected page
    // OrdersWind.classList.add('active');
      
    });
// 

let contentOrdersdata = document.getElementById("OrdersWindowBBB");
let OrdersWind = document.getElementById("OrdersWindow");
let loginData = document.getElementById("Logindata");
let registerData = document.getElementById("Registerdata");
let containerData = document.getElementById("xContainerx");
let userData = document.getElementById("Userdata");

    ///////////////////////////////////

    switch(event.target.innerHTML){

    case 'Register':

console.log('go to the register page');
registerData.classList.add('active');
        break;

        case 'Login':

console.log('go to the Login page');
loginData.classList.add('active');
        break;

        case 'Orders':

console.log('go to the Orders page');
OrdersWind.classList.add('active');
        break;

        case 'Containers':

console.log('go to the Containers page');
containerData.classList.add('active');
        break;

        case 'Users':

console.log('go to the Users page');
userData.classList.add('active');
        break;
    


}
    // break();
function removeAllEventListeners() { 
    console.log('is the script deleted ris')
    // window.globalmyAppX.eventListeners.forEach(({ element, event, handler }) => {
    //     console.log('is the script deleted ris is deleted',element)
    //     element.removeEventListener(event, handler);
    //     console.log('is the script deleted ris is deleted afta',element)
    // });

    for(let zz; zz<window.globalmyAppX.eventListeners.length; zz++){

        console.log('zzzzz', zz);
    }
    window.globalmyAppX.eventListeners.forEach(key => {
        console.log('is the script deleted ris is deleted',key.element, key.handler)
        // key.removeEventListener()
        key = null;;
    // delete window.globalmyAppX.eventListeners[key];
    console.log('is the script deleted ris is deleted b',key)
    });
    // Object.keys(myAppX.functions).forEach(( 'key') => {
    //     // myAppX.functions = null;
    // });
    // Correct way to iterate over the object and invoke each function
Object.keys(window.globalmyAppX.functions).forEach(key => {
    // delete window.globalmyAppX.functions[key];
    key = null;
    // myApp.functions[key](); // Invoke each function by adding ()
});

window.globalmyAppX.instances.forEach(key => {
    // delete window.globalmyAppX.instances[key];
    key = null;
    //     // element.removeEventListener(event, handler);
    //     // if (element.dispose) {
    //     //         element.dispose(); // Custom dispose method in instances if necessary
    //     //     }
    });
    // // Clear the array after removing the event listeners
    window.globalmyAppX.eventListeners.length = 0;
    window.globalmyAppX.functions.length = 0;

    window.globalmyAppX.instances.length = 0;
    console.log('is JAVA cleared A', window.globalmyAppX);

}
     removeAllEventListeners();
    console.log('loginn this is the login loginya AA event {{Route::currentRouteName()}}',"event,elementses, elementses.length",'elementses[rr]',elementses[rr].attributes.href.value,elementses[rr],'window.globalmyAppX',window.globalmyAppX);

// event.preventDefault();

// console.log('loginn this is the login loginya event {{Route::currentRouteName()}}',"event,elementses, elementses.length",'elementses[rr]',elementses[rr]);
const url = event.currentTarget.getAttribute('href');
   // Check if the current page is the one you want to clean up before leaving
   if (url === '/sorders') {  // Replace with your page's path
    // window.globalmyAppX.eventListeners.forEach(({ element, event, handler }) => {
    //     element.removeEventListener(event, handler);
        
    //     console.log('loginn this is the login log this is the ordersssxs window.myAppX',window.globalmyAppX);

   let ordersWinder = document.getElementById('OrdersWindow');
   let mainBoDy = document.getElementById('mainscription');
   ordersWinder.style.backgroundColor = 'green';
    let createMainBody = document.createElement("div");
    createMainBody.setAttribute('id', 'Mainbody');
    createMainBody.style.backgroundColor = 'red';
    // ordersWinder.appendChild(createMainBody);
 
//    ordersWinder.innerHTML = '';

//    ordersWinder.innerHTML = mainBoDy;
    // Perform AJAX request
        $.ajax({
            url: '/updateajax',
            type: 'GET',
            dataType: 'html', // Expecting HTML content
            timeout: 5000, // Set timeout to 10 seconds
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-Turbolinks-Referrer': document.location.href, // For Turbolinks
                'Content-Type': 'text/html',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // Assuming you have a CSRF token in your meta tags
            },
            success: function(response) {
                // On success, update the content of the target div

                // $('#Mainbody').html('nnnnnnnnnnnnnnnnnjjjjjjjjjj');
                // ordersWinder.innerHTML = '';
                // ordersWinder.innerHTML = response;
                console.log('ajax amsterdam',JSON.parse(response).html)
                // $('#OrdersWindow').html(JSON.parse(response).html);
                // $('#OrdersWindow').html('');
                ordersWinder.style.backgroundColor ='orange';
                // $('body').append(JSON.stringify(JSON.parse(response).html));
                // ordersWinder.innerHTL +=mainBoDy ;
                // $('#OrdersWindow').html(JSON.parse(response).html);
        //         $('#OrdersWindow').find('script').each(function(){
        //     eval($(this).text());
        // });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Handle errors
                console.error('AJAX request failed:', textStatus, errorThrown);
                $('#ordersContainer').html('<p>Error loading orders. Please try again later.</p>');
            },
            complete: function() {
                // Code to run after the request is complete, regardless of success or failure
                console.log('AJAX request completed.');
            }
        });

    // });
    // Turbolinks.visit(url);
    // ordersWinder.appendChild(mainBoDy);

        // myAppX.cleanup();  // Clean up your JavaScript functions and variables
        // myAppX = null;     // Optionally nullify myAppX
    }else if(url !== '/orders' ){
        // removeAllEventListeners();
        Turbolinks.visit(url);
    }
     



})
}



        document.addEventListener('DOMContentLoaded', () => {
            console.log('loginn this is the login log this is the all is loaded up');

    // Check if the layout has already been initialized
    if (!sessionStorage.getItem('layoutInitialized')) {
        initializeLayout();
        sessionStorage.setItem('layoutInitialized', 'true');
    }

    // let elementses ;
    // elementses = document.getElementsByName('datalinkss');
// elementses[0].addEventListener('click', function(event) {
//     event.preventDefault();

    // console.log('loginn this is the login loginya',elementses, elementses.length);

    // for(let rr= 0; rr< elementses.length; rr++){

    //     elementses[rr].addEventListener('click', function(event) {
    //         console.log('loginn this is the login loginya AA event {{Route::currentRouteName()}}',"event,elementses, elementses.length",'elementses[rr]',elementses[rr]);

    // event.preventDefault();
    // console.log('loginn this is the login loginya event {{Route::currentRouteName()}}',"event,elementses, elementses.length",'elementses[rr]',elementses[rr]);


    //     })
    // }
    // Listen for navigation events
    // document.querySelectorAll('a[data-link]').forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault(); // Prevent the default link behavior

    //         const url = this.getAttribute('href');
    //         loadPage(url);
    //     });
    // });

    // Load the initial page content based on the current URL
    // loadPage(window.location.pathname);
});

function initializeLayout() {
    // Place your one-time layout initialization code here
    console.log('Initializing layout and functions...');
    // Example: Initialize a third-party library, add event listeners, etc.
}


// Optional: Reinitialize any scripts if necessary
// function reinitializeScripts() {
//     // Reinitialize any dynamic scripts here, if needed
// }







//     $('#orderdatalink').on('click', function(event) {
//         event.preventDefault(); // Prevent default behavior if inside a form or link
// // 
//         // Perform AJAX request
//         $.ajax({
//             url: '/js/orderdata.php',
//             type: 'GET',
//             dataType: 'html', // Expecting HTML content
//             timeout: 10000, // Set timeout to 10 seconds
//             headers: {
//                 'X-Requested-With': 'XMLHttpRequest',
//                 'X-Turbolinks-Referrer': document.location.href, // For Turbolinks
//                 'Content-Type': 'text/html',
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // Assuming you have a CSRF token in your meta tags
//             },
//             success: function(response) {
//                 // On success, update the content of the target div

//                 $('#Mainbody').html('');
//                 $('#Mainbody').html(response);
//             },
//             error: function(jqXHR, textStatus, errorThrown) {
//                 // Handle errors
//                 console.error('AJAX request failed:', textStatus, errorThrown);
//                 $('#ordersContainer').html('<p>Error loading orders. Please try again later.</p>');
//             },
//             complete: function() {
//                 // Code to run after the request is complete, regardless of success or failure
//                 console.log('AJAX request completed.');
//             }
//         });
//     });
});
////////////////////////////

///////////////////////////////////
// function savePageState(url, partialContent, scrollPosition) {
//     history.pushState({ content: partialContent, scrollPosition }, '', url);
// }
async function loadPagero(page) {
// aapio();

  console.log('loadpage',page)
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    $.ajax({
        url: '/js/orderdata.php',
        type: 'GET',
        dataType: 'html',
        timeout: 1000, // Set timeout to 10 seconds (adjust as needed)
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-Turbolinks-Referrer': document.location.href, // If using Turbolinks with AJAX
            'Content-Type': 'text/html',
            'X-CSRF-TOKEN': csrfToken,
        },
        success: function(response) {
          // newDivXpaginationContent
          console.log('loadpage succes:',"page",'response',response )
          var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(response, 'text/html');
    var oldDiv = document.getElementById('OrdersWindow');
    // let createMainBody = document.createElement("div");
    // createMainBody.setAttribute('id', 'Mainbody');
    // createMainBody.style.backgroundColor = 'red';
    // oldDiv.appendChild(createMainBody);
    // var desiredMainDiv = document.getElementById('Mainbody');
    var oldDiv = document.getElementById('OrdersWindow');
    // const currentContent = document.getElementById('OrdersWindow').innerHTML;
    // const scrollPosition = window.scrollY;
    // savePageState(window.location.href, currentContent, scrollPosition);
    oldDiv.innerHTML ='';


    // let createMainBody = document.createElement("div");
    // createMainBody.setAttribute('id', 'Mainbody');
    // createMainBody.style.backgroundColor = 'red';
    // oldDiv.appendChild(createMainBody);

    // $('#//Mainbody').html(response);
    // createMainBody.innerHTML = response;

    //  // Find and execute any scripts in the response
    //  const scripts = createMainBody.querySelectorAll('script');
    //         scripts.forEach(script => {
    //             const newScript = document.createElement('script');
    //             if (script.src) {
    //                 // If the script has a src attribute, set it and load the script
    //                 newScript.src = script.src;
    //             } else {
    //                 // Otherwise, set the inline script content
    //                 newScript.textContent = script.textContent;
    //             }
    //             // document.body.removeChild(script); 
    //                // Optionally, remove the old script
    // script.parentNode.removeChild(script);
    //             document.body.appendChild(newScript); // Append the new script to the body or head
               
    //         })
     // Manually evaluate any scripts in the response
    //  $('#Mainbody').find('script').each(function() {
    //         $.globalEval(this.text || this.textContent || this.innerHTML || '');
    //     });

    console.log('loadpage succes: oldDiv innerHTML',oldDiv.innerHTML,oldDiv,'response.text',response.text,'response',response)
    // var newHtmlString = new XMLSerializer().serializeToString(desiredDiv);
    // oldDiv.innerHTML = '';
    // desiredDiv.innerHTML= '';
    // desiredMainDiv.innerHTML =htmlDoc;
    // $('#Mainbody').html(response);
      //  $('#newDivXpaginationContent').html(desiredDiv.innerHTML);
       //  $('#newDivXpaginationContent').html(desiredDiv.innerHTML);
    // console.log('loadpage',  htmlDoc,desiredDiv);
    //         updateContent(desiredDiv);
// return;
            // updateContent(response);
            // getHtmlData(response)
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}

// const url = '/data-endpoint';
    var oldDiv = document.getElementById('OrdersWindow');
    var mainBodyDiv = document.getElementById('Mainbody');
    // let createMainBody;

    // 
    // })

function loadPage(url) {
    url = '/orders';
    // Check if the page is cached in sessionStorage
    const cachedPage = sessionStorage.getItem(url);

    console.log('this is the looooaaaad page cachedPage',url)

    if (cachedPage) {
        // Load the cached content
        console.log('this is the looooaaaadooo page cachedPage',url)
        document.getElementById('Mainbody').innerHTML = cachedPage;
    } else {
        // Fetch the page content via AJAX
        fetch(url)
            .then(response => response.text())
            .then(html => {
                // Save the page content to sessionStorage
                // sessionStorage.setItem(url, html);
                console.log('this is the looooaaaadoooaa page cachedPage',url, 'html',html)
                // Update the page content
                document.getElementById('Mainbody').innerHTML = html;

                // Optionally, reinitialize any dynamic content/scripts
                // reinitializeScripts();
            })
            .catch(error => {
                console.error('Error loading page:', error);
            });
    }

    // Update the browser's URL without reloading the page
    history.pushState(null, '', url);
}
// document.getElementById('orderdatalink').addEventListener('click', function(event) {
//     event.preventDefault();
//     // Get all elements with the name 'myElementName'

// //    createMainBody = document.createElement("div");
// //     createMainBody.setAttribute('id', 'Mainbody');
// //     createMainBody.style.backgroundColor = 'red';
 
//     const url = this.href;
//     console.log('b4 this is the orderdatalink url',url,'document.location.href',document.location.href)
   
//     ////////////////////////////////////////


  

// // Send the AJAX request using fetch
// fetch('/orders')
//     .then(response => {
//         // Ensure the response is OK
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.text(); // or response.json() if the response is JSON
//     })
//     .then(data => {
//         // oldDiv.innerHTML = '';
//     // oldDiv.appendChild(createMainBody);
//         // Update the content of the target div
//         let tempDiv = document.createElement('div');
//         // const tempDiv = document.createElement('div');
//         // tempDiv.innerHTML = responseText;
//         // mainBodyDiv.innerHTML = data;
//         // oldDiv.innerHTML = '';
//         tempDiv.innerHTML = data;
//        let createMainBody = document.createElement("div");
//     createMainBody.setAttribute('id', 'Mainbody');
//     createMainBody.style.backgroundColor = 'red';
//     createMainBody.innerHTML =tempDiv;
//     oldDiv.appendChild(createMainBody);
//          // Extract the desired part using a selector
//         //  const extractedContent = mainBodyDiv.find('#OrderWindow').html();
//            // Extract the desired part using a selector
//         // const extractedContent = tempDiv.querySelector('#Mainbody').innerHTML;
//         // const extractedContent= document.getElementById('#Mainbody').innerHTML;
//  let scriptsB = tempDiv.querySelectorAll('script');

//  / const mainScriptionContent= document.getElementById('mainscription');
// //  let scriptsB = tempDiv.querySelectorAll('script');
// //  const newScript = document.createElement('div');

//  const scriptSources = [];
// console.log('looooaaaadoooaa script',scriptsB);
// scriptsB.forEach(script => {

//     const newScript = document.createElement('script');
//     if (script.src) {
//         // For external scripts, store the src attribute
//         newScript.src = script.src;
//         scriptSources.push(script.src);
//     } else {
//         // For inline scripts, store the script content
//         newScript.textContent = script.textContent;
//         scriptSources.push(script.textContent);
//     }
//     if (script.id) {
//         // For external scripts, store the src attribute
//        console.log('script id = ',script.id);
   
//        document.getElementById('Mainbody').innerHTML = tempDiv.innerHTML;
//        document.body.appendChild(newScript);
//     //    document.getElementById('Mainbody').appendChild(newScript);
//        script.remove();
//     }
//     // script.remove();


   

//     // loadPage(url);


//     // Remove the script from the temporary div to prevent double execution
//     // script.remove();
    
// });
// // mainScriptionContent.innerHTML = '';
//          console.log('this data to be loade from my javascript layout page2AA script dataxx',"extractedContent",'data',data,'scriptsB',scriptsB,'mainScriptionContent',mainScriptionContent)


       

//     })
//     .then(data => {
        
//         const scripts = mainBodyDiv.querySelectorAll('script');
//             scripts.forEach(script => {
//                 const newScript = document.createElement('script');
//                 if (script.src) {
//                     // If the script has a src attribute, set it and load the script
//                     newScript.src = script.src;
//                     console.log('this data to be loade from my javascript layout page2AA script',script)
//                     console.log('this data to be loade from my javascript layout page2AA scriptText data',data)

//                 } else {
//                     // Otherwise, set the inline script content
//                     newScript.textContent = script.textContent;
//                 }
//                 // document.body.removeChild(script); 
//                    // Optionally, remove the old script
//     // script.parentNode.removeChild(script);
//     //             document.body.appendChild(newScript); // Append the new script to the body or head
               
//             })
//         ////
//             // Dynamically create a script element and append it to the document
//             // const script = document.createElement('script');
//             // script.textContent = scriptText;
//             // document.head.appendChild(script);
//             console.log('this data to be loade from my javascript layout page2','scriptText')

//         })
//     .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//     });

//     /////////////////////////////
//     // loadPagero('5');

//     history.pushState(null, '', url);
 
//     // window.scrollTo(0, 0); // Optionally reset scroll

// // Optionally, you can update the document title here
// document.title = 'New Page Titleaaa';  // Change to the new page title if needed

// ///////////////////////////////////////////////

// // $.ajax({
// //         url: '/orders' ,
// //         type: 'GET',
// //         dataType: 'html',
// //         timeout: 1000, // Set timeout to 10 seconds (adjust as needed)
// //         headers: {
// //             'Content-Type': 'text/html',
// //             'X-CSRF-TOKEN': csrfToken,
// //         },
// //         success: function(response) {

// //             console.log('orderdatalinkzzz url',"url",'document.location.href',"document.location.href")

// //           // newDivXpaginationContent
// //     //       console.log('loadpage succes:',"page",'response',response )
// //     //       var parser = new DOMParser();
// //     // var htmlDoc = parser.parseFromString(response, 'text/html');
// //     // var desiredDiv = htmlDoc.getElementById('OrdersWindow');

// //     // var oldDiv = document.getElementById('OrdersWindow');

// //     // console.log('loadpage succes: oldDiv innerHTML','oldDiv.innerHTML,oldDiv,''desiredDiv',"desiredDiv, desiredDiv.innerHTML")
// //     // // var newHtmlString = new XMLSerializer().serializeToString(desiredDiv);
// //     // oldDiv.innerHTML = '';
// //       //  $('#newDivXpaginationContent').html(desiredDiv.innerHTML);
// //        //  $('#newDivXpaginationContent').html(desiredDiv.innerHTML);
// //     // console.log('loadpage',  htmlDoc,desiredDiv);
// //     //         updateContent(desiredDiv);
// // // return;
// //             // updateContent(response);
// //             // getHtmlData(response)
// //         },
// //         error: function(xhr, status, error) {
// //             console.log('orderdatalinkerrr url','url','document.location.href','document.location.href')

// //             console.error(error);
// //         }
     

// //     });
// //     console.log('orderdatalinkerrr url','url','document.location.href','document.location.href')

//     /////////////////////////////////////////
//     // fetch(url, {
//     //     headers: {
//     //         'X-Requested-With': 'XMLHttpRequest',
//     //         'X-Turbolinks-Referrer': document.location.href // If using Turbolinks with AJAX
//     //     }
//     // })
//     // .then(response => response.text())
//     // .then(html => {
//     //     document.getElementById('OrdersWindow').innerHTML = html;
//     //     // Optionally, trigger any JavaScript reinitializations here
//     // })
//     // .catch(error => console.log('Error loading content:', error));
// });

// document.addEventListener('turbo:before-cache', function() {
//     // Clean up event listeners before the page is cached
//     console.log(' 12345 Cleaning up before caching');
// });
        </script>

        
<script type="text/javascript">


    function removeOldScripts() {
    const scripts = document.querySelectorAll('script[mainscription]');
    scripts.forEach(script => script.remove());
}
$(document).ready(function () {

    // let prevPage;
    // console.log('this is tha bombaclaadaxa {{Route::currentRouteName()}}');
    // Listen for when Livewire starts navigating to a new page

    // document.addEventListener('livewire:navigate', function(event) {
    //     console.log('2345 Navigating to:'," event.detail.to");
    //     // Your custom code here, e.g., clean up, initialize, etc.
    // });

    // Listen for when Livewire has finished navigating to a new page

    // document.addEventListener('livewire:navigated', function(event) {
    //     console.log('2345 Finished navigating to:', "event.detail.to");
    //     // Your custom code here, e.g., loading new scripts, updating UI, etc.
    // });
     
})
</script>

@if(Route::currentRouteName() === 'orders')
<!-- <script type="text/javascript" src="js/orderdatax.js"></script>
 -->

 <script type="text/javascript" id="intromainscription">
    
itemsx.data.forEach(function(item) {
    console.log('this is the test scription page and it works! BB',item);
  
});
 

window.globalmyAppX = {
    variables: {},
    functions: [],
    eventListeners: [],
    instances:[],
    yoy:'aaaaaaaaaaaap',
};



    var datazz = @json($newdbxdata);

   dataxzx = [];
    dbDataArray = [];

    datazz.data.forEach(item => {
    console.log(item);  // Process each item in your JavaScript
    dataxzx.push(item);
    console.log('you are reaching the javascript page datazz','item', item,'dataxzx',dataxzx);
    
});

dbData.data.forEach(item => {
    console.log(item);  // Process each item in your JavaScript
    dbDataArray.push(item);
    console.log('you are reaching the javascript page datazz','item', item,'dbDataArray',dbDataArray);
    
});

console.log('you are reaching the javascript page datazz',datazz.data,'datazz',datazz,'globalmyAppX', window.globalmyAppX);

 </script>
 <script>

    let globalRoute = '{{route("/updatejsonpagination.save")}}'; 
    let globalRoute_container = '{{route("/pagination_container.save")}}'; 
let containerPaginationData = @json($containerdb);
    
 </script>
       <script type="text/javascript" id="mainscription" src="{{ asset('js/orderxdata.js') }}">
        
       </script>
        <script type="text/javascript" id="userscription" src="{{ asset('js/userxdata.js') }}">
        
        </script>
         <script type="text/javascript" id="containerscription" src="{{ asset('js/containerxdata.js') }}">
        
        </script>
    <script type="text/javascript" >

document.addEventListener('livewire:load', function () {
let Rasengan = document.getElementById("rasengan");
let OrdersWind = document.getElementById("OrdersWindow");

Rasengan.addEventListener('click', function (event) {
event.preventDefault();

// let displayPageTabs = document.querySelectorAll(".pageTabs");


// displayPageTabs.forEach(key => {
//         console.log('hij doet het hoor these are the page tabs',key,'key.style.display',key.style.display)
//         // key.style.display='none';

//         // if(key.style.display == 'none'){
//         //     key.style.display == 'block'
//         // }else{
//         //     key.style.display == 'none'
//         // }

//         key.classList.remove('active');
//     // });

//     // Show the selected page
//     OrdersWind.classList.add('active');
      
//     });
// // 

// let contentOrdersdata = document.getElementById("OrdersWindowBBB");
// let contentOrdersWindow = document.getElementById("OrdersWindow");
//     // let displayPageTabs =  document.getElementsByClassName("pageTabs");

// console.log('hij doet het hoor displayPageTabs',displayPageTabs,'contentOrdersdata',contentOrdersdata,'contentOrdersWindow',contentOrdersWindow);

})
})
        </script>
 

@endif
<!-- @///////end//if --> 
@if(Route::currentRouteName() !== 'orders')

@push('scripts')
<!-- <script type="text/javascript" src="js/orderdatax.js"> -->

// let prevPage;
//       if (!window.ordersPageScriptLoadedB) {
  
   
//         window.ordersPageScriptLoadedB = true; // Set the flag to true
//         prevPage = true;
//         console.log('this is anothaa bombaclaad {{Route::currentRouteName()}}','window.prevPage',window.prevPage,'prevPage',prevPage);
//         window.prevPage = '{{Route::currentRouteName()}}';
//     }

//     if( window.ordersPageScriptLoadedB){

// console.log('this is anothaa bombaclaad thhe script is allready true the last page was another page')

// }
</script>
@endpush

@endif
    @section('scripts')

    @endsection
<livewire:scripts />
    
    
    
    
  <!--  //////////////////////<end><script>//////////////////-->
            @stack('scripts')
        </body>
</html>
