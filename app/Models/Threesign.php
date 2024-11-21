<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Threesign extends Model
{
    use HasFactory;

    protected $fillable = [

        'name',
        'birthdate',
        'threesign',
        'created_by',
        'status',
      
      
    ];

    protected $casts = [
        'threesign' => 'array',
       
      ];

}
