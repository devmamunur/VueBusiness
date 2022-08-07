<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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



// Route For Admin Login
Route::get('/admin/login', function () {
    return view('admin.admin_master');
});

// Route For Admin Dashboard
Route::get('/admin/{any?}', function () {
    return view('admin.admin_master');
})->where('any', '^(?!api\/)[\/\w\.-]*');


// Route For Frontend
Route::get('/{any?}', function () {
    return view('app.app_master');
})->where('any', '^(?!api\/)[\/\w\.-]*');



