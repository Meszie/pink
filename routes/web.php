<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home/Home');
});

Route::get('/comission', function () {
    return inertia('Comission/Comission');
});

Route::get('/portfolio', function () {
    return inertia('Portfolio/Portfolio');
});

Route::get('/tos', function () {
    return inertia('TOS/tos');
});