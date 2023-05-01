<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\MemoTest;
use App\Models\MemoTestImage;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $tests = MemoTest::factory()->count(2)->create();

        foreach ($tests as $test) {
            $numbers = range(0, 21);
            shuffle($numbers);

            $randomCards = array_slice($numbers, 0, 4);

            foreach ($randomCards as $card) {
                if ($card < 10) {
                    $formattedName = '0' . $card;
                } else {
                    $formattedName = (string) $card;
                }
    
                MemoTestImage::factory()
                    ->create([
                        'name' => $formattedName,
                        'memo_test_id' => $test->id,
                    ]);
            }
        }

        $completedGame = MemoTest::factory()->create();

        $numbers = range(0, 21);
        shuffle($numbers);

        $randomCards = array_slice($numbers, 0, 15);

        foreach ($randomCards as $card) {
            if ($card < 10) {
                $formattedName = '0' . $card;
            } else {
                $formattedName = (string) $card;
            }

            MemoTestImage::factory()
                ->create([
                    'name' => $formattedName,
                    'memo_test_id' => $completedGame->id,
                ]);
        }

    }
}
