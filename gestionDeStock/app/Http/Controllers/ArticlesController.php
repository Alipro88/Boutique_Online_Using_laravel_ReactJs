<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\users;
use App\Models\articles;



class ArticlesController extends Controller
{
    //

    public function ApiArticles()
    {
        $articles = articles::all();
        return response()->json($articles);
        
    }

    public function ApiArticlesPost(Request $request)
    {
        $articles = articles::create($request->all());
        return response()->json($articles);
        
    }

    public function ApiArticlesPut(Request $request, $id)
    {
        $articles = articles::find($id);
        $articles->update($request->all());
        return response()->json($articles);
        
    }

    public function ApiArticlesId($id)
    {
        $articles = articles::find($id);
        $articles->delete();
        return response()->json($articles);
        
    }
    

    public function ApiUsers()
    {
        $users = users::all();
        return response()->json($users);
        
    }

    public function ApiUsersPost(Request $request)
    {
        $users = users::create($request->all());
        return response()->json($users);
        
    }

    


}
