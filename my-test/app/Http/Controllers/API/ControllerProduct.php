<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Producto;

class ControllerProduct extends Controller
{
    public function get_all(){

        return Producto::all();
    }

    //funcion de insertar

    public function create(Request $request){

        //insertar datos
        Producto::insert([
            'name' => $request->input('name'),
            'bundle' => $request->input('bundle'),
        ]);

        //respuesta JSON
        $response['message'] = "Guardo exitosamente";
        $response['success'] = true;

        return $response;
    }
}
