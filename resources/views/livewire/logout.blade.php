<div class="container">

            <form wire:submit.prevent="handleLogout">
                <p class="display-3 text-center">LogOUT Here</p>
                <hr class="bg-white"/>
                @if($error)
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>{{ $error }}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                @endif
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" wire:model="email"  />
                    @error("email")  <p class="pt-2 px-1 text-danger">{{$message }}</p>  @enderror
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" wire:model="pass"  />
                    @error("pass")  <p class="pt-2 px-1 text-danger">{{ 
                    str_replace('pass', 'password', $message) }}</p>  @enderror
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-dark btn-block" value="Logout" />
                </div>
            </form>
      
</div>