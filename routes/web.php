<?php

use Illuminate\Support\Facades\Route;
use App\Http\Livewire\Home;
use App\Http\Livewire\Login;
use App\Http\Livewire\Register;
use App\Http\Livewire\Navbar;
use App\Http\Livewire\Orderdata;
use App\Http\Livewire\MenuLayout;
use App\Http\Livewire\Containers;
use App\Http\Livewire\Userdb;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get("/orders", \App\Http\Livewire\Orderdata::class)->name('orders');

Route::group(['middleware' => 'checkUserLogedIn'], function () {
    Route::get("/login", \App\Http\Livewire\Login::class)->name('login');
    Route::get("/register", \App\Http\Livewire\Register::class)->name('register');
    Route::get("/orders", \App\Http\Livewire\Orderdata::class)->name('orders');
    Route::get("/containers", \App\Http\Livewire\Containers::class)->name('containers');
    Route::get("/userdb", \App\Http\Livewire\Userdb::class)->name('userdb');
});
Route::group(['middleware' => 'auth'], function () {
    Route::get("/", \App\Http\Livewire\Home::class)->name('home');
    Route::get("/addTodo", \App\Http\Livewire\AddTodo::class)->name('addTodo');
    Route::get("/todo/edit/{id}", \App\Http\Livewire\EditTodo::class)->name('editTodo');
});

Route::get('/updaterdata', \App\Http\Livewire\Orderdata::class);

Route::get('/updateajax', [Orderdata::class, 'triggerCustomEventBB'])->name('/updateajax');

Route::post('/updatejson', [Orderdata::class, 'triggerCustomEvent'])->name('updatejson.save');
Route::post('/updatecontent', [Orderdata::class, 'setPage'])->name('updatecontent.save');

Route::post('/updatejsonpagination', [Orderdata::class, 'triggerCustomEvent'])->name('/updatejsonpagination.save');
Route::post('/pagination_container', [Orderdata::class, 'CustomEventContainer'])->name('/pagination_container.save');
// route("/updatejsonpagination_container.save
// Route::post('/searchdatabase', [VectorDasher::class, 'triggerCustomLiveSearch'])->name('/database.search');
Route::post('/searchdatabase', [Orderdata::class, 'triggerCustomEvent'])->name('/database.search');


Route::post('/updatefield', [App\Http\Controllers\OrderController::class, 'updateField'])->name('/updateField');
Route::post('/saveindividualvalues', [App\Http\Controllers\OrderController::class, 'saveIndividualValues'])->name('/saveindividualvalues');
Route::post('/saveneworderdb', [App\Http\Controllers\OrderController::class, 'saveNewOrderDB'])->name('/saveneworderdb');


Route::post('/createnewuser', [Register::class, 'createNewUser'])->name('createnewuser');

Route::post('/createnewcontainer', [Containers::class, 'createNewContainer'])->name('createnewcontainer');

Route::post('/editcontainer', [Containers::class, 'editContainer'])->name('editcontainer');


Route::post('/editcontainer', [Containers::class, 'editContainer'])->name('editcontainer');
Route::post('/deletecontainer', [Containers::class, 'deleteContainer'])->name('deletecontainer');




// Route::group(['middleware' => 'checkUserLogedIn'], function () {
//     Route::get("/login", \App\Http\Livewire\Login::class)->name('login');
//     Route::get("/register", \App\Http\Livewire\Register::class)->name('register');
// });
// Route::group(['middleware' => 'auth'], function () {
//     Route::get("/", \App\Http\Livewire\Home::class)->name('home');
// });
/////////////
    // Route::get("/login", \App\Http\Livewire\Login::class)->name('login');
    // Route::get("/register", \App\Http\Livewire\Register::class)->name('register');
    // Route::get("/", \App\Http\Livewire\Home::class)->name('home')->middleware('auth');

