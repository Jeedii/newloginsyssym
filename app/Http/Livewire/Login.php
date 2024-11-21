<?php

namespace App\Http\Livewire;
use Illuminate\Support\Facades\Route;
use Livewire\Component;
use Illuminate\Support\Facades\Auth;
use App\Models\newdbx;
use Illuminate\Pagination\Paginator;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;
// 'currentRouteName' => $currentRouteName,
// $this->currentRouteName = Route::currentRouteName();

// use Illuminate\Support\Facades\Route;
// 'currentRouteName' => $currentRouteName,

use App\Models\User;

class Login extends Component
{

    public $currentRouteName;
    public $form = [
        'email'=>'',
        'pass'=>'',
    ];
    public $error = '';
    public $message = '';
    public $email = '';
    public $pass = '';

    protected $rules = [
        'email'=> 'required|email',
        'pass'=>'required',
    ];

    public function render()
    {
        $currentRouteName='';
        $this->currentRouteName = Route::currentRouteName();
        return view('livewire.login',[
            'currentRouteName' => $currentRouteName,
        ]);
    }
    
    public function handleLogin()
    {
     
        $this->validate();
      
                // dd('outsideside AUTH',$this->form['email'],$this->form['password']);
                // dd('aaaaaaaaaaaap $email',$this->email,'$password',$this->pass,);
        if(Auth::attempt(['email'=> $this->email, 'password'=> $this->pass])){
           
            // dd('inside AUTH');
            session()->flash('success', "You are Loggedin successfully!");
            return redirect(route("home"));
        }
        else
        {
            $this->error = "Email or Password wrong!!";
        }


    }
}