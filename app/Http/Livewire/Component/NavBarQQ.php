<?php

namespace App\Http\Livewire;
namespace App\Http\Livewire\Components;

use Livewire\Component;
use App\Models\User;
use illuminate\support\Facades\Auth;

class NavBar extends Component
{
    


    public function render()
    {
        dd('asdasdasdasda');
        return view('livewire.components.navbar');
    }


    
    public function logoutUser()
    {
        dd('asdasdasdasdwwwa');
       Auth::logout();

        session()->flash('success', "You are logged out successfully!");
        return redirect(route("login"));
    }
}