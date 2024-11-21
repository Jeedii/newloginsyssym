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
        return view('livewire.components.navbar');
    }


    
    public function logoutUser()
    {
       Auth::logout();

        session()->flash('success', "You are logged out successfully!");
        return redirect(route("login"));
    }
}