<?php

namespace App\Http\Controllers\API;

use App\Models\Cafe;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CafesController extends Controller
{
	/**
	 * Get All cafes
	 * URL: /api/v1/cafes
	 * Method: GET
	 * Description: Gets all of the cafes
	 */
	public function getCafes()
	{
		$cafes = Cafe::all();

		return response()->json($cafes);
	}

	public function getCafe($id)
	{
		$cafe = Cafe::where('id', '=', $id)->first();

		return response()->json($cafe);
	}

	public function postNewCafe()
	{
		$cafe = new Cafe();

		$cafe->name     = Request::get('name');
		$cafe->address  = Request::get('address');
		$cafe->city     = Request::get('city');
		$cafe->state    = Request::get('state');
		$cafe->zip      = Request::get('zip');

		$cafe->save();

		return response()->json($cafe, 201);
	}
}
