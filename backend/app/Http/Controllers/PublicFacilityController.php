<?php

namespace App\Http\Controllers;

use App\Models\PublicFacility;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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

    /**
     * search by query text
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function search(Request $request)
    {
        $searchText = $request->query('q');
        Log::info($searchText);
        return PublicFacility::where('nameKanji',  'LIKE', '%' . $searchText . '%')->get();
    }

    public function findOneById($id)
    {
        return PublicFacility::find($id);
    }


}
