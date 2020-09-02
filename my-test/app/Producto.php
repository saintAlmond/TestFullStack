<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table='producto';

    protected $fillable=['id','name', 'bundle' ];

    // guardar sin created_at u updated_at
    public $timestamps = false;
}
