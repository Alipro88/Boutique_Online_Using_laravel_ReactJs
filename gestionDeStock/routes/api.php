<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticlesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});





//créer un api qui retourne tout les  articles en format json


// Route::match(['get', 'post' , 'delete' , 'put'],'articles', [ArticlesController::class, 'ApiArticles']);


Route::post('articles/create', [ArticlesController::class, 'ApiArticlesPost']);

Route::put('articles/update/{id}', [ArticlesController::class, 'ApiArticlesPut']);

Route::delete('articles/delete/{id}', [ArticlesController::class, 'ApiArticlesId']);

Route::get('articles', [ArticlesController::class, 'ApiArticles']);


Route::get('users', [ArticlesController::class, 'ApiUsers']);

Route::post('users/create', [ArticlesController::class, 'ApiUsersPost']);















