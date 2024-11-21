<?php

namespace App\Http\Livewire;
use App\Models\Container;
use App\Models\User;
use App\Models\Register;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Livewire\Component;
use Illuminate\Support\Facades\Route;
use Illuminate\Pagination\Paginator;




class Containers extends Component
{

      /**
 * read
 *
 * @return void
 */
public function cread(){
    // return Clients::paginate(5);

   
      
     
        return  Container::orderBy('id', 'desc')->paginate(4);
     
    
}

      /**
 * read
 *
 * @return void
 */
public function deleteContainer(Request $request){
  dd('this is the delete function');

}

      /**
 * read
 *
 * @return void
 */
public function editContainer(Request $request){
  
    $Rdatax = json_decode(json_decode($request['containerid']));

    $Zdataxvalue = json_decode(json_decode($request['valuex']));
    // $changeHere = json_decode(json_decode($request['where']));

    $valuextt = $request->input('valuex');

    $changeHere = $request->input('where');
    

    
    $containersDB = DB::table('containers')->where('id', $Rdatax)->update([$changeHere =>  $valuextt]);

    dd('this is the edit function','rdata',$Rdatax,'$containersDB','$containersDB','$valuextt',$valuextt,'$Rdataxvalue',$Zdataxvalue,'request',$request,'$changeHere ',$changeHere );


    dd('this is the edit function','rdata',$Rdatax,'$containersDB',$containersDB,'request',$request);
    // ->where('id', $formData['idid'])->update(['symsettings' =>  $decoda]);
    // $symdesignchange =Symbases::find($formData['idid']);

}
// editContainer
      /**
 * read
 *
 * @return void
 */
public function createNewContainer(Request $request){
  

    $containersdata = Container::Create([
        'id' => '11234',
            'container_naam' => $request->name,
            'container_formaat' =>  $request->Formaat,
            'date_aanlever_container' =>  $request->aankomstDatum,

            'container_inhoud' =>  $request->name,
            'date_ophaal_container' =>  $request->pickupDate,
            'locatie_aanlever_container' =>   $request->aankomstLocatie,

            'locatie_bestemming' =>  $request->aankomstLocatie,
            'date_vertrek' =>  $request->vertrekDatum,
            // 'locatie_vertrek_container' =>  $request->aankomstLocatie,

            
            'date_aankomst_bestemming' => $request->aankomstDatum,
            'notitie' =>  $request->name,
            // 'vaart_id' =>  $request->name,
            // 'flight_id' =>  $request->name,
            'status' =>  $request->name,
            
        ]);
        dd('this is the start createNewContainer', $request);
   
    // return Clients::paginate(5);

   
      
     
        return  Container::orderBy('id', 'desc')->paginate(2);
     
    
}

public function someFunctionInComponentA()
{
    // Logic in component A

    // Dispatch event
  
    $this->emit('eventTriggeredFromComponentA');
}


    public function render()
    {
        $this->someFunctionInComponentA();
        $perPage = 1; // Number of items per page
        $currentPage = 1;
$currentRouteName='';
        $this->currentRouteName = Route::currentRouteName(); // Get the current route name

$scriptsLoaded = false;


    $scriptsLoaded = true;
   
    // $this->doSomething();
   
    $testVar =  $this->cread();
     $total = $testVar->count();
    
    
      
            $paginator = new Paginator($testVar, $perPage, $currentPage, [
                'path' => Paginator::resolveCurrentPath(),
                'pageName' => 'page',
                'onEachSide' => ceil($total / $perPage),
            ]);
        // return view('livewire.containers', [
        //     'Containerdb' => $this->cread(),
            
        // ]);

        return view('livewire.containers', [
            'Containerdb' => $this->cread(),
            'paginator' => $paginator,
            'currentRouteName' => $currentRouteName,
            'scriptsLoaded' => $scriptsLoaded,
           
            

            
        ]);
    }
}
