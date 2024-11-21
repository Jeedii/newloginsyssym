<div class="userDB">
   
    <div class="row">
   
        <div class="col-md-6 mx-auto mt-5">
        <h2>Users</h2>
        <div style="width:100%; height:500px; background-color:grey;">
    {{-- Knowing others is intelligence; knowing yourself is true wisdom. --}}
    <p>+ add user</p>
    @foreach($userdb as $userz)
<p>aap {{$userz->id}}</p>

    @endforeach
</div>

</div>
    </div>
</div>