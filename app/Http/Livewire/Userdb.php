<?php

namespace App\Http\Livewire;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Livewire\Component;

class Userdb extends Component
{
          /**
 * read
 *
 * @return void
 */
public function getusers(){
    // return Clients::paginate(5);

   
      
     
        return User::orderBy('id', 'desc')->paginate(5);
     
    
}

    public function render()
    {
        return view('livewire.userdb', [
            'userdb' => $this->getusers(),
            
        ]);
    }
}
