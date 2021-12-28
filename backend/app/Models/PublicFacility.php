<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $prefectureName
 * @property string $nameKanji
 * @property string $nameKana
 * @property string $address
 * @property float $latitude
 * @property float $longitude
 * @property string $tel
 * @property string $availableDay
 * @property string $openingTime
 * @property string $closingTime
 * @property string $availableTimeNote
 * @property string $description
 * @property string $URL
 * @property string $note
 * @property string $postal
 * @property string $access
 * @property boolean $parkingLot
 * @property string $parkingLotNote
 * @property boolean $fee
 * @property int $basicFee
 * @property string $detailedFee
 * @property string $lastUpdated
 */
class PublicFacility extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'tokyo_public_facility';

    /**
     * @var array
     */
    protected $fillable = ['prefectureName', 'nameKanji', 'nameKana', 'address', 'latitude', 'longitude', 'tel', 'availableDay', 'openingTime', 'closingTime', 'availableTimeNote', 'description', 'URL', 'note', 'postal', 'access', 'parkingLot', 'parkingLotNote', 'fee', 'basicFee', 'detailedFee', 'lastUpdated'];

}
