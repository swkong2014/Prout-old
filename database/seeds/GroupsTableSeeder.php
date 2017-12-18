<?php

use Illuminate\Database\Seeder;
use App\Group;

class GroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();


        for ($i = 0; $i < 20; $i++) {
            Group::create([
                'group_name' => $faker->sentence,
                'group_desc' => $faker->paragraph,
                'category' => $faker->title
            ]);
        }
    }
}
