<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemoTest extends Model
{
    use HasFactory;

    public function best_session()
    {
        return $this->hasMany(GameSession::class);
    }

    public function images()
    {
        return $this->hasMany(MemoTestImage::class);
    }
}
