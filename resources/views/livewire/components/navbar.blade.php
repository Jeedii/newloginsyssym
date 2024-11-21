<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3" style="justify-content:center; " >
<a class="navbar-brand ml-5"  style="justify-content:left; border:1px solid red;" href="/">Laravel Livewire SPA Login System</a>

<div  class="justify-content-end" style="justify-content:right;  width:100%;justify-items:right; right:10px; border:1px solid blue;">
   
    <ul class="navbar-nav ml-auto mr-5 d-flex justify-content-end">
        @guest
            <li class="nav-item">
                <a href="/login" class="nav-link rounded-0 btn {{request()->is('login')?'btn-light text-dark':''}}">Login</a>
            </li>
            <li class="nav-item">
                <a href="/register" class="nav-link  rounded-0 btn {{request()->is('register')?'btn-light text-dark':''}}">Register</a>
            </li>
        @else
            
            <li class="nav-item ml-5 ">
                <p class="text-white font-weight-bold mt-2">Welcome, <span class="text-warning">{{auth()->user()->name}}</span> </p>
            </li> 
            <li class="nav-item ml-5 " ->
            </li>     
            <li class="nav-item ml-5">
            <button class="nav-link active btn btn-primary  rounded-0 btn {{request()->is('register')?'btn-light text-dark':''}}" style="margin:0px 7px;" wire:click="logoutUser">Logout</button>
              <!-- <a href="/logout" class="nav-link  {{ request()->is('logout') ? 'active' : ''}}">Logout</a> -->
            </li>  
        @endguest
    </ul>
</div>
<!-- <div  class="justify-content-end" style="justify-content:right; width:100%;justify-items:right; right:10px; background-color:blue;">

<a class="navbar-brand ml-5"  style="justify-content:right; background-color:red;" href="/">Laravel Livewire SPA Login System</a>
</div> -->
</nav>