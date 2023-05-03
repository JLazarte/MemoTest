<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class GameSession extends Model
{
    use HasFactory;

    public function memo_test(): HasOne
    {
        return $this->hasOne(MemoTest::class, 'id', 'memo_test_id');
    }

    public function bestSession()
    {
        return $this;
    }
}
