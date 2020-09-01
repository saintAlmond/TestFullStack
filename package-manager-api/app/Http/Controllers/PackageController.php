<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Player;
use App\Http\Resources\Package as PackageResource;
use App\Http\Resources\PackageCollection;

class PackageController extends Controller
{
    public function index()
    {
        return new PackageCollection(Package::all());
    }

    public function show($id)
    {
        return new PackageResource(Package::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $package = Package::create($request->all());

        return (new PackageResource($package))
            ->response()
            ->setStatusCode(201);
    }

    public function package($id, Request $request)
    {
        $request->merge(['correct' => (bool) json_decode($request->get('correct'))]);
        $request->validate([
            'correct' => 'required|boolean'
        ]);

        $package = Package::findOrFail($id);
        $package->packages++;
        $package->save();

        return new PackageResource($package);
    }

    public function delete($id)
    {
        $package = Package::findOrFail($id);
        $package->delete();

        return response()->json(null, 204);
    }

    public function resetPackage($id)
    {
        $package = Package::findOrFail($id);
        $package->package = 0;

        return new PackageResource($package);
    }
}
