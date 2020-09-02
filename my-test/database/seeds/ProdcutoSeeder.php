<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProdcutoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        for ($i=0; $i < 50; $i++) {
            \DB::table('producto')->insert(array(
                'name' => $faker->firstName,
                'bundle'  => $faker->randomElement(['adobe','package','android']),
                'created_at' => date('Y-m-d H:m:s'),
                'updated_at' => date('Y-m-d H:m:s')
            ));
        }
    }
}
