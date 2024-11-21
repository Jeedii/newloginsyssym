<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Casts\Json;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;

class newdbx extends Model
{
    use HasFactory;

    

    
    protected $fillable = [

        'user_id',
        'client_id',
        'order_id',
        'order_data',
        'order_data_logs',
        'order_data_logs->nameAfz',
        'order_data_logs->addressAfz',
        'order_data_logs->packages',
        'order_data_logs->INHWAtestClassy',
        'order_data_logs->lastNameAfz',
        'order_data_logs->packages->format->length->normal',
        'order_data_logs->packages->price->normal',
    ];


       /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'order_data' => 'array',
        'order_data_logs' => AsArrayObject::class,
        'order_data_logs->packages' => AsArrayObject::class,
        'order_data_logs->INHWAtestClassy'=> AsArrayObject::class,
        
      ];


}
