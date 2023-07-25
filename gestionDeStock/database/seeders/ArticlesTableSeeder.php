<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // insert to to table articles
        DB::table('articles')->insert([
            'titre' => 'article 1',
            'contenu' => 'contenu article 1',
            'image' => 'image article 1',
            'categorie' => 'categorie article 1',
            'prix' => 'prix article 1',

            'user_id' => "1",
            
            
            
        ]);
        DB::table('articles')->insert([
            'titre' => 'article 2',
            'contenu' => 'contenu article 2',
            'image' => 'image article 2',
            'categorie' => 'categorie article 2',
            'prix' => 'prix article 2',
            //insert user_id null 
            'user_id' => "1"
            
            
            
        ]);
    }
}
