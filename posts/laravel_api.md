---
title: "create api with laravel"
date: 'August 21, 2021'
excerpt: 'In this article we will look how create ReastFull Api with laravel'
cover_image: '/images/posts/img4.jpg'
---

# create ReastFull Api with laravel

## task one

setup the database
go in .env file and add the connection info

## task tow

1. setup the routers
   go in routes folder and api.php file
 
```php
 Router.get('/products',function(){return 'products api';})

 Route::get('products', function () {
    return Products::all();
});


// create new products
Route::post('products', function () {
    return Products::create([
        'name'=>'pc',
        'slug'=>'pc-1',
        'description'=>'this is pc product',
        'price'=>'90.9'
    ]);
});

```

2. make model and migration
    > php artisan make:model Products -m

create products schema

```php
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('description')->nullable();
            $table->decimal('price',5,2);
            $table->timestamps();
        });
    }

```

run migration

> php artisan migrate

3. create products controller
    > php artisan make:controller ProductController --api
    > this command will create products controller and api method

```php

<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products=Products::all();
        return $products;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // make validation
        $request->validate([
            'name'=>'required',
            'slug'=>'required',
            'description'=>'required',
            'price'=>'required',
        ]);
       // create new products
       return Products::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // find single product by id
        return Products::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //update product
        $product=Products::find($id);
        $product->update($request->all());
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}


```


all routes for api documentation
```php
<?php

use App\Http\Controllers\ProductController;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// get all products
// Route::get('products', [ProductController::class,'index']);
//  get single product by
// Route::get('products/{id}',[ProductController::class, 'show']);
// create new products
// Route::post('products',[ProductController::class, 'store']);

// use resource route
Route::resource('/products',ProductController::class);
Route::get('products/search/{name}',[ProductController::class, 'search']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
```
