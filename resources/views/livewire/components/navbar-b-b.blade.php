<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3" style="justify-content:center; " >
<a class="navbar-brand ml-5"  style="justify-content:left; border:1px solid red;" href="/">Laravel Livewire SPA Login System</a>

<div  class="justify-content-end" style="justify-content:right;  width:100%;justify-items:right; right:10px; border:1px solid blue;">
   
    <ul class="navbar-nav ml-auto mr-5 d-flex justify-content-end">
    <!-- data-turbolinks="false" -->
        @guest
            <li class="nav-item">
                <a href="/login" class="testax nav-link rounded-0 btn {{request()->is('login')?'btn-light text-dark':''}}" name="datalinkss" >Login</a>
            </li>
            <li class="nav-item">
                <a href="/register" class="nav-link  rounded-0 btn {{request()->is('register')?'btn-light text-dark':''}}" name="datalinkss" >Register</a>
            </li>
            <li class="nav-item">
                                <a href="/orders" class="nav-link  rounded-0 btn {{request()->is('orders')?'btn-light text-dark':''}}"id="orderdatalink" name="datalinkss"  >Orders</a>

                <!-- <a href="/orders" class="nav-link  rounded-0 btn {{request()->is('orders')?'btn-light text-dark':''}}"id="orderdatalink" name="datalinkss" data-turbolinks="false" >Orders</a> -->
            </li>
            <li class="nav-item">
               <a href="/containers" class="nav-link  rounded-0 btn {{request()->is('register')?'btn-light text-dark':''}}" name="datalinkss" >Containers</a>
           </li>
           <li class="nav-item">
               <a href="/userdb" class="nav-link" name="datalinkss" >Users</a>
           </li>
           <li class="nav-item">
               <a href="/userdb" class="nav-link" name="datalinkss">Clients</a>
           </li>
        @else
        <li class="nav-item">
                <a href="/orders" class="nav-link  rounded-0 btn {{request()->is('orders')?'btn-light text-dark':''}}" name="datalinkss">Orders</a>
            </li>
            <li class="nav-item">
               <a href="/containers" class="nav-link  rounded-0 btn {{request()->is('orders')?'btn-light text-dark':''}}" name="datalinkss">Containers</a>
           </li>
           <li class="nav-item">
               <a href="/userdb" class="nav-link" name="datalinkss">Users</a>
           </li>
           <li class="nav-item">
               <a href="/userdb" class="nav-link" name="datalinkss">Clients</a>
           </li>
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