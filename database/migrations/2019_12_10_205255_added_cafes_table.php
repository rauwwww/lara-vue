<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedCafesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('cafes', function (Blueprint $table) {
			$table->increments('id');
			$table->string('name');
			$table->text('address');
			$table->string('city');
			$table->string('state');
			$table->string('zip');
			$table->decimal('latitude', 11, 8);
			$table->decimal('longtitude', 11, 8);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('cafes');
	}
}
