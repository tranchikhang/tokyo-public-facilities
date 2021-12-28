<?php

namespace App\Http\Controllers;

use App\Models\PublicFacility;

class PublicFacilityController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function findAll()
    {
        return PublicFacility::all();
    }

    public function findOneById($id)
    {
        return PublicFacility::find($id);
    }


}
