<?php

namespace App\Http\Livewire;
use Illuminate\Support\Facades\Route;

use Livewire\Component;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class Register extends Component
{
    
    public $form = [
        'name'=>'',
        'password'=>'',
        'password_confirmation'=>'',
    ];
    public $email = '';

    public $name = '';


    public function render()
    {
        $currentRouteName='';
        $this->currentRouteName = Route::currentRouteName();
        return view('livewire.register',[
            'currentRouteName' => $currentRouteName,
        ]);
    }

    public function handleRegister()
    {

        $hashPass = Hash::make($this->form['password']);
        // dd('kkkkkkkkkkkkkoooooooooooo',$this->form['password']);
        $this->validate([
            "form.name"=>'required',
            "email"=> 'required|email|unique:users',
            "form.password"=> "required|min:8|confirmed:form.password_confirmation"
        ]);
       
        User::create([
            'name'=>$this->form['name'],
            'email'=>$this->email,
            'password'=>$hashPass, 
        ]);

        session()->flash('success', "You are registered successfully!");
        return redirect(route("login"));
    }

    public function createNewUser(Request $request)
    {
        $allData = $request->all();

            // Decode the JSON string into an array
    $decodedData = json_decode($allData['optionsList'], true); // true to get an associative array

// dd('you are at the create new users  createNewUser()',$decodedData, $allData);
if($allData['password'] === $allData['confirmpass']){
    // dd('you are at the create new users  createNewUser()',$decodedData, $allData);


$form = [
    'name'=>$allData['name'],
    'password'=>$allData['password'],
    'password_confirmation'=>$allData['confirmpass'],
];
        $hashPass = Hash::make($allData['password']);
      
        $request->validate([
            "name"=>'required',
            "email"=> 'required|email|unique:users',
            // "password"=> "required|min:8|confirmed:confirmpass"
        ]);
        //   dd('kkkkkkkkkkkkkoooooooooooo');

        User::create([
            'name'=>$allData['name'],
            'email'=>$allData['email'],
            'password'=>$hashPass, 
            'user_data'=>$allData, 
        ]);
// 
        session()->flash('success', "You are registered successfully!");
        // return redirect(route("login"));
    }else{

        dd('password does not match');
    }
}
}