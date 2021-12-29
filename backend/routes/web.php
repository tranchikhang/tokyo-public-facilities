<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->group(['prefix' => 'PublicFacility', 'middleware' => ['jsonResponse']], function () use ($router) {
    $router->get('/', 'PublicFacilityController@findAll');
    $router->get('/search', 'PublicFacilityController@search');
    $router->get('/{id}', 'PublicFacilityController@findOneById');
});