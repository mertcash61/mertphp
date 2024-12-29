<?php
// API rotaları
$router->group(['prefix' => 'api'], function($router) {
    $router->post('/login', 'AuthController@login');
    $router->post('/register', 'AuthController@register');
    $router->post('/logout', 'AuthController@logout');
    
    $router->group(['middleware' => 'auth'], function($router) {
        $router->get('/user', 'UserController@profile');
        $router->put('/user', 'UserController@update');
    });
}); 