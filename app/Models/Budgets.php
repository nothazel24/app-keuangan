<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Budgets extends Model
{
    protected $fillable = [
        'user_id',
        'month',
        'year',
        'needs_percentage',
        'wants_percentage',
        'saving_percentage'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
