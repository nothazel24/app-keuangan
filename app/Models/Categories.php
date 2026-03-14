<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'type'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
