<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/packages', 'PackageController@index');
Route::get('/packages/{id}', 'PackageController@show');
Route::post('/packages', 'PackageController@store');
Route::post('/packages/{id}/packages', 'PackageController@answer');
Route::delete('/packages/{id}', 'PackageController@delete');
Route::delete('/packages/{id}/packages', 'PackageController@resetAnswers');
