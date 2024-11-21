<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Container extends Model
{
    use HasFactory;
    protected $fillable = [

        'container_naam',
        'container_formaat',
        'container_inhoud',
        'date_aanlevercontainer',
        'locatie_aanlevercontainer',
        'date_ophaalcontainer',
        'locatie_vertrek_container',
        'locatie_bestemming',
        'date_vertrek',
        'date_aankomst_bestemming',
        'notitie',
        'vaart_id',
        'vlucht_id',
        'status',
    ];

 
}

