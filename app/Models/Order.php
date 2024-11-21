<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Casts\Json;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [

        'nameAfz',
        'phoneAfz',
        'addressAfz',
        'provincie',
        'postcodeAfz',
        'emailAfz',
        'nameOntv',
        'phoneOntv',
        'addressOntv',
        'provincie',
        'postcodeOntv',
        'emailOntv',
        'product_name',
        'quantity',
        'price',
        'status_zending',
        'status_order',
        'signature',
        'jstats',
        'formats',
        'send_order_id',
    ];


   
    protected $casts = [
        'jstats' => 'array',
        'formats' => 'array',
      ];


}

// protected $casts = [
//     'jstats' => 'array',
//   ];
