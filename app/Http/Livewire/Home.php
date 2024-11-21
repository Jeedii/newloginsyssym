<?php

namespace App\Http\Livewire;
use Illuminate\Support\Facades\Route;
use Livewire\Component;

class Home extends Component
{
    public function render()
    {
        $currentRouteName='';
        $this->currentRouteName = Route::currentRouteName(); // Get the current route name
        return view('livewire.home',[
            'currentRouteName' => $currentRouteName,
        ]);
    }
}
