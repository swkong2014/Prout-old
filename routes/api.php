<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//
//Route::get('products', function () {
//    return response(Product::all(),200);
//});
//
//Route::get('products/{product}', function ($productId) {
//    return response(Product::find($productId), 200);
//});
//
//
//Route::post('products', function(Request $request) {
//    $resp = Product::create($request->all());
//    return $resp;
//
//});
//
//Route::put('products/{product}', function(Request $request, $productId) {
//    $product = Product::findOrFail($productId);
//    $product->update($request->all());
//    return $product;
//});
//
//Route::delete('products/{product}',function($productId) {
//    Product::find($productId)->delete();
//
//    return 204;
//
//});

Route::get('products', 'ProductsController@index');

Route::get('products/{product}', 'ProductsController@show');

Route::post('products','ProductsController@store');

Route::put('products/{product}','ProductsController@update');

Route::delete('products/{product}', 'ProductsController@delete');


// groups
Route::get('groups', 'GroupsController@index');
Route::post('groups','GroupsController@store');
Route::delete('groups/{group}','GroupsController@delete');
Route::put('groups/{group}','GroupsController@update');


//membership
Route::get('groups/user/{user}','GroupsController@joinedGroups');

Route::post('groups/membership/join','GroupsController@join');
Route::delete('groups/membership/leave','GroupsController@leaveGroup');