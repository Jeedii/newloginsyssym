<?php

namespace App\Http\Livewire;
// use illuminate\Support\Facades\Route;
 // Correct import

use Livewire\Component;
namespace App\Http\Livewire;
use Illuminate\Support\Facades\Route;
use Livewire\WithPagination;
use App\Models\Order;
use App\Models\Page;
use App\Models\Symordas;
use App\Models\Clients;
use App\Models\User; 
use App\Models\Symbases;
use App\Models\VectorDashes;
use App\Models\Threesign;
use App\Models\UserPermission;
use App\Models\Container;
use App\Models\neworderdbX;
use App\Models\newdbx;
use Illuminate\Pagination\Paginator;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
// use Illuminate\Support\Collection;
use Illuminate\Support\HtmlString;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
 
use Livewire\Component;
use Livewire\LivewireComponent;


use Response;


class Orderdata extends Component
{

    use WithPagination;
    public $urlslug;
    public $title;
    public $content;
public $changedInputValue; 
public $msg;


public $paginationLinksHtml;


    public $modalFormVisible;
    public $modalConfirmDeleteVisible;

    public $modalFormVisibleb;
    public $modalConfirmDeleteVisibleb;

    public $modelId;
    public $inputa;
  
    public $name;
    public $phone;
    public $address;

    
    public $search;
       
    public $product_name;
    public $product_id;
    public $currentRouteName;
    public $scriptsLoaded;

    public $nameAfz;
    public $nameOntv;

    public $LastnameAfz;
    public $LastnameOntv;

    public $addressAfz;

    public $addressNrAfz;
    public $addressNrOntv;

    public $FormatWidth;
    public $FormatHeight;
    public $FormatDept;


  
    
    public $emailAfz;
    public $emailOntv;
    public $CountryAfz;
    public $CountryOntv;

    public $SendOrderNr;
    public $TypeFrightSending;

    public $SendingWeight;
    public $SendingFormat;
    public $SendingPrice;
    public $SendingNote;
    public $SendingInhoud;
    public $SendingTaskList;

    public $SortFright;
    public $SpecialGoods;
    // public $slidervalz;

    // public $slidervalz = ['aap', 'schaap'];
    
    public $slidervalz = array();
    public $testarr = [];
    // public $testarr;

    

    
    public  $addressOntv;
       

    public $verpakt;
    public $price;
    public $quantity;
    public $description;


    public $LastNamer;




       
    public $status_zending;
    public $signature;
    public $signatures;

    public $district;
    public $provincie;


   
    public $phoneOntv;

    
    public  $phoneAfz;
    public  $bla;
       
    public $postcodeAfz;
    public $container_id;
  
    public $status_order;
    public $jstats;
    public $formats;
    public $wata;
    public $send_order_id;
    public $idid;

    public $user_id;
    public $created_at;
    public $updated_at;
 
   
    public $client_id;
    public $order_id;
    public $order_data;
    public $order_data_logs;
    // public $order_data;


    public $testRRR;
    public $testEncode;
    public $testEncodeID;
    public $paginateValue_container =2;
        public function yourMethod()
        {
            dd('testt');
        }
    /**
     * mount
     *
     * @param  mixed $urlslug
     * @return void
     */
    public function mount($urlslug = null)
    {
//  $this->wata ='okiddom';
// $this->wata = Order::where('send_order_id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
        // $this->urlslug = $urlslug;
        // $this->urlslug = $test;
        // $this->retrieveContent($urlslug);
    }
    
              /**
 * read
 *
 * @return void
 */
public function getusers(){
    // return Clients::paginate(5);

   
      
     
        return User::orderBy('id', 'desc')->paginate(5);
     
    
}
    /**
     * retrieveContent
     *
     * @param  mixed $urlslug
     * @return void
     */
    public function retrieveContent($urlslug)
    {
        // dd($urlslug);
              // Get home page if slug is empty
              if (empty($urlslug)) {
                $data = Page::where('is_default_home', true)->first();
            } else {
    
                // Get the page according to the slug value
                $data = Page::where('slug', $urlslug)->first();
    
                // If we can't retrieve anything, let's get the default 404 not found page
                if (!$data) {
                    $data = Page::where('is_default_not_found', true)->first();
                }
            }
   

            // Get the page according to the slug value
            // $data = Page::where('slug', $urlslug)->first();


        $this->title = $data->title;
        $this->content = $data->content;
    }
    
  /**
     * Gets all the sidebar links.
     *
     * @return void
     */
    // private function sideBarLinks()
    // {
    //     return DB::table('navigation_menus')
    //         ->where('type', '=', 'SidebarNav')
    //         ->orderBy('sequence', 'asc')
    //         ->orderBy('created_at', 'asc')
    //         ->get();
    // }

    /**
     * Get the top navigation links.
     *
     * @return void
     */
    // private function topNavLinks()
    // {
    //     return DB::table('navigation_menus')
    //         ->where('type', '=', 'TopNav')
    //         ->orderBy('sequence', 'asc')
    //         ->orderBy('created_at', 'asc')
    //         ->get();
    // }




public function rules(){



    return [
        'product_name' => 'required',
        'quantity' => 'required',
        'price' => 'required',
        
    
    ];
    
    
    }

public function storejsondatax(Request $request){
    // error_log(request('extraverpakking'));
// dd('aaap');
    // return redirect('/')->with('msg', 'thanks you');
    // return request('extraverpakking');
    // $bla = $request->input('extraverpakking');
    dd('wagwaaan');


}
public $savechange;
public function savechangesR( Request $request,$formData){
    // Request::has('saveChange');
    // dd($request->all());
   
   
    if($formData['savemethod'] == 'SaveChanges'){

        // dd($formData['savemethod']);
        $this->savechanges($formData);
    }elseif($formData['savemethod'] == 'SaveAsNew'){
        // 
        $this->testsumit($formData);

        return;

    }elseif($formData['savemethod'] == 'Locked'){

        dd('select save option');
    }

}

public function savechangesThree($formData){
    dd('wattagwaannnns');
    $decoda = json_encode(json_encode($formData));
    DB::table('Symbases')
    ->where('id', $formData['idid'])->update(['symsettings' =>  $decoda]);
    $symdesignchange =Symbases::find($formData['idid']);

    dd($symdesignchange);

}
public function savechangesFree($aap, $schaap){
    dd('wattagwaannnns');
   dd($aap, $schaap);
    $decoda = json_encode(json_encode($formData));
    DB::table('Symbases')
    ->where('id', $formData['idid'])->update(['symsettings' =>  $decoda]);
    $symdesignchange =Symbases::find($formData['idid']);

    dd($symdesignchange);

}

public function triggerCustomLiveSearch(Request $request){
    // dd('aaaaaap');
    $requestData = $request->all();
    $Rdata = json_decode($request['variable3'])->where;
    $search = json_decode($request['variable3'])->value;
    $resultsFiltered = [];

    if( $Rdata == 'liveSearch'){

        // $search = $this->search;

        if($search !== ''){

            // return
            // Clients::where('name','like', '%'.$this->search.'%' )->paginate(5);
            $results = newdbx::where("order_data_logs->nameAfz', '\"$search\"'")->get();
            $resultArray = $results->toArray();

$resultsRaw = newdbx::selectRaw('*, JSON_UNQUOTE(JSON_EXTRACT(order_data_logs, "nameAfz")) AS extracted_value')->get();
// ->whereRaw('JSON_UNQUOTE(JSON_EXTRACT(order_data_logs, "nameAfz")) LIKE ?', ["%$search%"])
// dd($resultsRaw, count($resultsRaw));
foreach ($resultsRaw as $result) {
   
    // $extractedValue = $result->extracted_value;
    // Check if the extracted value is like the search term
    $baka = $result['order_data_logs']['nameAfz'];
    // if (strpos($baka, 'Name Afzendera') !== false) {
    // if (str_contains($baka, $search)) {
        $searchTerm = trim($search);
        if (str_contains(strtolower($baka), strtolower($searchTerm))) {
            
            echo "Extracted Value: ";
        // If the extracted value is like the search term, add the result to the filtered results array
        // $resultsFiltered->push($result);
        $resultsFiltered[] = $result;
       
        // dd('testing Alike $search',$search,$result['order_data_logs']['nameAfz'],'$resultsFiltered',$resultsFiltered);
    }
    dd($resultsFiltered);
    // dd('testing Alike $search','$resultsFiltered',$resultsFiltered);


    // dd($result['order_data_logs']['nameAfz']);
    // Output or log the extracted value for each result
    // echo "Extracted Value: $extractedValue\n";
}

return $resultsFiltered;

// return view('livewire.savevector-dash', [
//     'sideBarLinks' => $this->sideBarLinks(),
//     'topNavLinks' => $this->topNavLinks(),
//     'data' => $this->read(),
//     'bdata' => $this->bread(),
//     'cdata' => $this->cread(),
//     'symdata' => $this->symread(),
//     'newdbxdata' => $this->readnewdb(),
// return view('livewire.savevector-dash', ['newdbxdata' => $resultsFiltered]);
dd('$resultsFiltered',$resultsFiltered);
// dd($resultsRaw);


            // $resultsRaw = newdbx::where(function ($query) use ($search) {
            //     // Use a subquery to decode the JSON column
            //     $query->whereJsonContains(newdbx::raw('JSON_EXTRACT(order_data_logs, "nameAfz")'), 'like', "%$search%");
            // })->get();



            // dd('aaaaapaaa $request  $resultsRaw', $resultsRaw,'$results',$resultArray[0]['order_data_logs']['nameAfz'],json_decode(json_encode($results))[0]);

            // $results = newdbx::whereRaw("JSON_CONTAINS(name->'$.key', '\"$keyword\"', '$.value')")->get();
        }else{
            return 
            // Clients::paginate(5);
            $this->search=$search;
        }
        
        dd('aaaaapaaa $request',  $Rdata, $request,'$requestData',$requestData);
    }
   
    // json_decode(json_decode($request['variable4']));
}

public function triggerCustomEvent(Request $request)
    {
       
        // Your logic here
// print_r('wagwaan');
        // Emit a custom event
        
       ///////////////////////////////////////////////////////
        if($request !== null){
            
            $Rdata = json_decode($request['variable3'])->where;
            
            $currentPage = json_decode($request['variable3'])->index;
            $resultsFiltered = [];

         


            if( $Rdata == 'liveSearch_xContainerx'){
                $search = json_decode($request['variable3'])->value;
                
                // $indexa = json_decode($request['variable3'])->index;

// $where = json_decode($request['variable3'])->where;
// dd('aaaaaaapxxx');
                // $search = $this->search;
                
                if($search !== ''){
                    $search = json_decode($request['variable3'])->value;
                    $whatFunction = json_decode($request['variable3'])->whatFunction;

                    // $results = containers::where("order_data_logs->lastNameAfz', '\"$search\"'")->get();
                    $results =  Container::where('container_naam','like', '%'.$search.'%' )->paginate($this->paginateValue_container);
                    $totalRecords = Container::where('container_naam','like', '%'.$search.'%' )->count();

                    $perPage = $this->paginateValue_container; // Number of items per page::::::::::::::: change also at containerRead
                    //realchange paginate() 
                        //    $currentPage = $indexa;
                        $page =1;
                        // Get the total count of records
                        // $totalRecords = Container::count();
                       
                        // Determine the number of records to skip
                        $recordsToSkip = ($page - 1) * $perPage;

                        
    // adjust the pagination limit accordingly
    $limit = $totalRecords - $recordsToSkip < $perPage ? $totalRecords - $recordsToSkip : $perPage;
    //  dd($limit);
    $testVarAll = Container::orderBy('created_at', 'desc')->get();
    $testVar = Container::where('container_naam','like', '%'.$search.'%' )->skip($recordsToSkip)->take($limit)->paginate($this->paginateValue_container, ['*'], 'page', $page);

    if($whatFunction === 'whileSearch'){
        $page =$currentPage ;
        $recordsToSkip = ($page - 1) * $perPage;

                        
        // adjust the pagination limit accordingly
        $limit = $totalRecords - $recordsToSkip < $perPage ? $totalRecords - $recordsToSkip : $perPage;
        $testVar = Container::where('container_naam','like', '%'.$search.'%' )->skip($recordsToSkip)->take($limit)->paginate($this->paginateValue_container, ['*'], 'page', $page);


        $currentPage = Paginator::resolveCurrentPage('page');

        $paginator = new Paginator($testVar, $perPage, $currentPage, [
            'path' => Paginator::resolveCurrentPath(),
            'pageName' => 'page',
            'onEachSide' => ceil($totalRecords / $perPage),
        ]);

        $jsonResponse = response()->json($testVar);
 
        $dataArray = json_decode($jsonResponse->getContent(), true);
    
        // dd('totalRecs /dataArray',$totalRecords,'$dataArray', $testVar);
    
    
         return $dataArray;
dd($currentPage);
    }
    
    

   
    //  $testVar = Container::where('container_naam','like', '%'.$search.'%' )->skip($recordsToSkip)->take($limit)->get();
    // if(json_decode($request['variable3'])->whatFunction == 'showAll' ){
    //     // dd('showAll');
    //     $testVar =  Container::orderBy('id', 'desc')->paginate($this->paginateValue_container);
    // }
     $currentPage = Paginator::resolveCurrentPage('page');

     $paginator = new Paginator($testVar, $perPage, $currentPage, [
         'path' => Paginator::resolveCurrentPath(),
         'pageName' => 'page',
         'onEachSide' => ceil($totalRecords / $perPage),
     ]);


     $slicedRecords = $testVar->slice($recordsToSkip, $perPage);
   
     $jsonResponse = response()->json($testVar);
 
     $dataArray = json_decode($jsonResponse->getContent(), true);

    //  dd('totalRecs /dataArray',$totalRecords,'$dataArray', $testVar);


      return $dataArray;
      dd('$Rdata',$Rdata,'$dataArray',$dataArray,'$search',$search,'$perPage',$perPage,'$recordsToSkip',$recordsToSkip,'$totalRecords',$totalRecords,'$testVar',$testVar,'$results',$results,'$paginator',$paginator,'$currentPage',$currentPage);

                    $resultArray = $results->toArray();
        
                }           
                //  dd('$Rdata',$Rdata,'$search',$search);
                if($search == ''){
                    $totalRecords = Container::orderBy('created_at', 'desc')->count();

                    $perPage = $this->paginateValue_container; // Number of items per page::::::::::::::: change also at containerRead
                    //realchange paginate() 
                        //    $currentPage = $indexa;
                        $page =1;
                        // Get the total count of records
                        // $totalRecords = Container::count();
                       
                        // Determine the number of records to skip
                        $recordsToSkip = ($page - 1) * $perPage;

                        
    // adjust the pagination limit accordingly
    $limit = $totalRecords - $recordsToSkip < $perPage ? $totalRecords - $recordsToSkip : $perPage;
    //  dd($limit);
    // $testVarAll = Container::orderBy('created_at', 'desc')->get();

    
    
    //  $testVar = Container::where('container_naam','like', '%'.$search.'%' )->skip($recordsToSkip)->take($limit)->get();
    // $testVar = Container::where('container_naam','like', '%'.$search.'%' )->skip($recordsToSkip)->take($limit)->paginate($this->paginateValue_container);
    $testVar = Container::orderBy('created_at', 'desc')->skip($recordsToSkip)->take($limit)->paginate($this->paginateValue_container);

    
    // if(json_decode($request['variable3'])->whatFunction == 'showAll' ){

    //     // dd('showAll');
    //     $testVar =  Container::orderBy('id', 'desc')->paginate($this->paginateValue_container);
    // }
     $currentPage = Paginator::resolveCurrentPage('page');

     $paginator = new Paginator($testVar, $perPage, $currentPage, [
         'path' => Paginator::resolveCurrentPath(),
         'pageName' => 'page',
         'onEachSide' => ceil($totalRecords / $perPage),
     ]);


     $slicedRecords = $testVar->slice($recordsToSkip, $perPage);
   
     $jsonResponse = response()->json($testVar);
 
     $dataArray = json_decode($jsonResponse->getContent(), true);

      return $dataArray;
                }

            }


            if( $Rdata == 'liveSearch'){
                $search = json_decode($request['variable3'])->value;
                $indexa = json_decode($request['variable3'])->index;

$where = json_decode($request['variable3'])->where;
// dd('aaaaaaapxxx');
                // $search = $this->search;
        
                if($search !== ''){
        
                    // return
                    // Clients::where('name','like', '%'.$this->search.'%' )->paginate(5);
                    $results = newdbx::where("order_data_logs->lastNameAfz', '\"$search\"'")->get();
                    $resultArray = $results->toArray();
        
        $resultsRaw = newdbx::selectRaw('*, JSON_UNQUOTE(JSON_EXTRACT(order_data_logs, "lastNameAfz")) AS extracted_value')->orderByRaw('JSON_UNQUOTE(JSON_EXTRACT(order_data_logs, "lastNameAfz")) ASC')->get();
        // ->whereRaw('JSON_UNQUOTE(JSON_EXTRACT(order_data_logs, "nameAfz")) LIKE ?', ["%$search%"])
        // dd($resultsRaw, count($resultsRaw));
        $resultsRawReversed = $resultsRaw->reverse();
        foreach ($resultsRawReversed as $result) {
           
            // $extractedValue = $result->extracted_value;
            // Check if the extracted value is like the search term
            $baka = $result['order_data_logs']['lastNameAfz'];
            // if (strpos($baka, 'Name Afzendera') !== false) {
            // if (str_contains($baka, $search)) {]
                $searchTerm = trim($search);
                if (str_contains(strtolower($baka), strtolower($searchTerm))) {
                    
                    // echo "Extracted Value: ";
                // If the extracted value is like the search term, add the result to the filtered results array
                // $resultsFiltered->push($result);
                $resultsFiltered[] = $result;
               
                // dd('testing Alike $search',$search,$result['order_data_logs']['nameAfz'],'$resultsFiltered',$resultsFiltered);
            }
        
        
        }
     // $page = json_decode($request['variable3'])->index;
     $page = $indexa;
     ////////////////////////////
     $perPage = 5; // Number of items per page
       $currentPage = $indexa;
   
    // Get the total count of records
    $totalRecords = newdbx::count();
   
    // Determine the number of records to skip
    $recordsToSkip = ($page - 1) * $perPage;
   
    // If there are fewer than four records left on the last page,
    // adjust the pagination limit accordingly
    $limit = $totalRecords - $recordsToSkip < $perPage ? $totalRecords - $recordsToSkip : $perPage;
   //  dd($limit);
   
    $testVar = newdbx::orderBy('created_at', 'desc')->skip($recordsToSkip)->take($limit)->get();
   // dd($testVar);
    $total = $testVar->count();
   
    $currentPage = Paginator::resolveCurrentPage('page');
 //    dd($currentPage);
       $slicedRecords = $testVar->slice($recordsToSkip, $perPage);
   
       $jsonResponse = response()->json($testVar);
   
       $dataArray = json_decode($jsonResponse->getContent(), true);
 
             // $currentPage = floor($recordsToSkip / $perPage) + 1;
            //  $resultsFiltered = collect($resultsFiltered);

// Reverse the order of the collection
$resultsFiltered = $resultsFiltered;
            //  $resultsFiltered = $resultsFiltered->reverse();
             $paginator = new LengthAwarePaginator(
                 Collection::make($resultsFiltered)->forPage($currentPage, 2),
                 $total,
                 2,
                 $currentPage,
                 ['path' => LengthAwarePaginator::resolveCurrentPath()]
             );
             // dd('testing Alike $search','$resultsFiltered',$resultsFiltered);
         // dd($paginator);
             // dd('aaap',$paginator,$request,$resultsFiltered);

     // Render the pagination links separately
     $paginationLinksHtml = $paginator->links('vendor.pagination.default')->toHtml();

// dd($paginationLinksHtml);

// dd($result['order_data_logs']['nameAfz']);
             // Output or log the extracted value for each result
             // echo "Extracted Value: $extractedValue\n";
        //  return [$paginator,$paginationLinksHtml];
        return [$paginator, $paginationLinksHtml];
          // You can pass multiple variables as an associative array
    // return view('your.blade.view', [
    //     'yourVariable' => $yourVariable,
    //     'anotherVariable' => $anotherVariable
    // ]);
        // Pass the paginator to the view
          // Call another function from within your function
         $this->render();
dd('schaaaap');
          // Alternatively, you can call a function from another class or service
         
  
// return view('livewire.savevector-dash', ['newdbxdata' => $paginator]);
        // return $paginator;
    }
            }
        }

        /////////////////////////////////////////////

      $aaaap=   $this->emit('customEvent', ['data' => 'some data']);
  
   

$order_Package_Index = json_decode($request['variable3'])->index;

$where = json_decode($request['variable3'])->where;


if($where == 'pagination'){
///////////////////////////////
$currentPage = $request->input('page', 1); // Get the current page from the request, default to 1
// dd($request);
// $perPage = 3; // Number of items per page

// // Calculate the offset for the next page
// $offset = ($currentPage - 1) * $perPage;

// // Retrieve the next set of results from the database
// $nextPageResults = newdbx::orderBy('created_at', 'desc')
//                             ->skip($offset)
//                             ->take($perPage)
//                             ->get();

// // Return the next set of results as JSON
// return response()->json($nextPageResults);

//////////////////// CALL AOTHER FUNCTION IN  THIS LARAVEL DOCUMENT

    ///////////////////////////////////////////

    
    // Get page number from the request
    $page = json_decode($request['variable3'])->index;
    $this->readnewdb($page);
    // dd('your in the triggerCustomEvent');

    // Query data from the database (adjust as needed)

    $data = newdbx::orderBy('created_at', 'desc')->paginate(4, ['*'], 'page', $page);
    // dd('your in the triggerCustomEvent', json_decode($request['variable3'])->index);

    // Return paginated data
    // return response()->$data;
    // dd(response()->json($data));
    return response()->json($data);
    dd('your in the triggerCustomEvent', json_decode($request['variable3']));

    // $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    // $packagesDec = json_decode(json_decode($request['variable1']))->packages;
    // $INHWADec = json_decode(json_decode($request['variable1']))->INHWAtestClassy;
    
    // $xjdata = newdbx::find( $order_ID_nr); 
    // $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;
/////////////////////////////////////////////
}

//  $type = json_decode($request['variable3'])->type;
// dd('yesss', json_decode($request['variable3'])->type);

// $type = json_decode($request['variable3'])->type;

// dd($order_ID_nr,'$xjdata',$xjdata,'$xjdataOD',$xjdataOD);
$todosLength = 0;
if($where == 'packages'){
    
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $packagesDec = json_decode(json_decode($request['variable1']))->packages;
    $INHWADec = json_decode(json_decode($request['variable1']))->INHWAtestClassy;
    
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    // $type = json_decode($request['variable3'])->type;
   
    $todosValuesArray = json_decode($request['variable3']);
        // dd('aaap',$todosValuesArray->inhwa);
    // $xjdata = newdbx::find($id); 
    $decodeNewTodos = $todosValuesArray->inhwa;

    $decodeNewTodosINHWAX = json_decode(json_encode($todosValuesArray->inhwax));
    
    // $decodeNewINHWAXX = json_decode($decodeNewTodosINHWAX);
    $decodeNewINHWA = json_decode(json_encode($INHWADec), true);
    // dd('$decodeNewTodosINHWAX',$decodeNewINHWA ,$todosValuesArray->inhwax, $decodeNewTodosINHWAX);
    // dd($todosValuesArray->inhwax, $decodeNewINHWA );
    // dd('$decodeNewTodosINHWAX','$decodeNewTodosINHWAX');
    // $decodeNewTodos = json_decode(json_encode($todosValuesArray->inhwa), true);
    $decodeNewPackages = json_decode(json_encode($packagesDec), true);
    
  
    // dd('aaap',$decodeNewINHWA,$decodeNewPackages,$decodeNewTodos,$packagesDec,$xjdataOD['INHWAtestClassy']);
    // $xjdataOD['INHWAtestClassy'] = $decodeNewINHWA;
    // $xjdataOD['INHWAtestClassy'] =$decodeNewINHWA;
    $xjdataOD['packages'] =  $decodeNewPackages;
    // dd($xjdataOD['INHWAtestClassy'],$xjdataOD['packages']);
    // $xjdata->order_data_logs = $xjdataOD;
    // $xjdata->order_data_logs['INHWAtestClassy'] = $xjdataOD['INHWAtestClassy'];

    // dd('$INHWADec',$INHWADec);
    // dd($xjdataOD['INHWAtestClassy']);
    // dd($xjdataOD['INHWAtestClassy']);

    // dd($decodeNewINHWA,'split',$xjdataOD['INHWAtestClassy']);
    $xjdata->order_data_logs = $xjdataOD;

    $xjdata->order_data_logs['packages'] = $xjdataOD['packages'];
    // $xjdata->order_data_logs['INHWAtestClassy'] = $INHWADec;
    $xjdata->order_data_logs['INHWAtestClassy']=  $xjdataOD['INHWAtestClassy'];
    $xjdata->order_data_logs['INHWAtestClassyzz'] =  $xjdataOD['INHWAtestClassy'];

   
  
    // $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'] = $decodeNewTodos['todos'];

    $xjdata->save();
    dd($xjdataOD['INHWAtestClassy']);
    dd('aaap',$INHWADec,$packagesDec,$xjdataOD['INHWAtestClassy']);
    dd('$order_ID_nr',$order_ID_nr,'$decodeNewTodos', $todosValuesArray,'',$xjdataOD);
    // dd('here is the saveIndividualValues $val', $where,'$value',$value, $xjdata->order_data_logs['packages']);

// dd('watsgood my friend!!!', '$value',$value);
   

   
    // $xjdata_encode = json_decode($value);
    // $xjdata->order_data_logs['packages'] = $xjdata_encode;
      $xjdata->order_data_logs['packages'] = $value;

    $xjdata->update();
    // dd('here is the saveIndividualValues $val', $where,'$value',$value,'xjdata_encode','$xjdata_encode');

     exit();
    // dd('here is the saveIndividualValues $val', $where,'$value',$value, $xjdata->order_data_logs['packages']);

    // $xjdata->order_data_logs[$where] = $value['district'];
    // $xjdata->order_data_logs['postcodeAreaOntv'] = $value['postcodeArea'];


          


}
 

if($where == 'ClassyTask'){
     
        $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
        $testClassy = json_decode(json_decode($request['variable1']))->testClassy;
        $xjdata = newdbx::find( $order_ID_nr); 
        $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

        // dd('hold on!!', $order_ID_nr,$testClassy);

        $todosValuesArray = json_decode(json_decode($request['variable4']));

        $decodeNewTodos = json_decode(json_encode($todosValuesArray));
      
        // $xjdataOD['testClassy'][$order_Package_Index] = $decodeNewTodos;
        $xjdataOD['testClassy'] = $todosValuesArray;
        $xjdata->order_data_logs = $xjdataOD;

        // dd('hold on!!',$xjdataOD['INHWAtestClassy'] [$order_Package_Index]['todos'],'$todosValuesArray', $todosValuesArray[$order_Package_Index],'decoded',$decodeNewTodos);
        // $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'] = $decodeNewTodos['todos'];
        $xjdata->save();
        dd($testClassy[0],$decodeNewTodos);
        dd('hold on!! INHWA', $order_ID_nr,'$order_Package_Index',$order_Package_Index,$xjdataOD['testClassy'],$testClassy[$order_Package_Index],$testClassy);
}



// dd( json_decode(json_decode($request['variable1']))->INHWAtestClassy);
if($where == 'INHWAtaskistaaz'){
//   dd('hold on!!');
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $INHWAtestClassy = json_decode(json_decode($request['variable1']))->INHWAtestClassy;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    // $type = json_decode($request['variable3'])->type;
   
    // $todosValuesArray[$order_Package_Index] = json_decode(json_decode($request['variable4']));
    $todosValuesArray = json_decode(json_decode($request['variable4']));
    // dd('INHWA INHWA INHWA', $todosValuesArray);
    // $count = count($array);
    // dd($todosValuesArray );
    


    // $xjdataOD['INHWAtestClassy'][$order_Package_Index] = json_decode(json_encode($todosValuesArray), true);
    
    // dd($todosValuesArray ,json_decode(json_encode($todosValuesArray)));
    $decodeNewTodos = json_decode(json_encode($todosValuesArray));
    // dd('hold on!!',$xjdataOD['INHWAtestClassy'],'$todosValuesArray', $todosValuesArray,'decoded',$decodeNewTodos);
    // $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos']

    // $xjdataOD['INHWAtestClassy'][$order_Package_Index] = $INHWAtestClassy[$order_Package_Index];
    $xjdataOD['INHWAtestClassy'][$order_Package_Index] = $INHWAtestClassy[$order_Package_Index];

    // $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'] = $decodeNewTodos[$order_Package_Index]['todos'];
    

dd(' $decodeNewTodos', $decodeNewTodos);
    $emptyArray = [];

    array_push($emptyArray, $todosValuesArray);
    $xjdataOD['INHWAtestClassy'] = $emptyArray;
    // $xjdata->save();
    // dd('$order_ID_nr',$order_ID_nr,'$decodeNewTodos', $todosValuesArray,'',$xjdataOD);
    // $xjdataOD['INHWAtestClassy'] = $decodeNewTodos;

    // $xjdataOD['INHWAtestClassy'] = $decodeNewTodos;

    // $xjdata->order_data_logs['INHWAtestClassy'] = $xjdataOD['INHWAtestClassy'];
    $xjdata->order_data_logs = $xjdataOD->order_data_logs;

        // dd('hold on!!','$INHWAtestClassy',$INHWAtestClassy,'todosvaluearray', $todosValuesArray,'decoded',$decodeNewTodos);

    // dd('hold on!!',$xjdataOD['INHWAtestClassy'] [$order_Package_Index]['todos'],'$todosValuesArray', $todosValuesArray[$order_Package_Index],'decoded',$decodeNewTodos);
    // $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'] = $decodeNewTodos['todos'];
    $xjdata->save();
    return $request;

    dd($xjdataOD['INHWAtestClassy'][$order_Package_Index],'$order_Package_Index',$order_Package_Index,$INHWAtestClassy[$order_Package_Index],$decodeNewTodos[0]);

    dd('$todosValuesArray' ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos']);

    dd('hold on!!',$xjdataOD['INHWAtestClassy'],'$todosValuesArray', $todosValuesArray,'decoded',$decodeNewTodos);

    dd('$order_ID_nr',$order_ID_nr,'$decodeNewTodos', $todosValuesArray,'',$xjdataOD);

    // dd($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'], 'aaap',    $decodeNewTodos['todos'] );
    // dd('INHWA INHWA INHWA', $todosValuesArray);

}

if($where == 'CreateNewOrder'){

    $decodeJdata = json_decode(json_decode($request['variable4']));


//     $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
// $xjdata = newdbx::find( $order_ID_nr); 
// $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

// $newRecord = newdbx::create([
//     'user_id' => 'column1',
//     'order_data_logs' => $request->input('column2'),
//     // Add other columns as needed
// ]);

// Get the ID of the newly created record
// $newRecordId = $newRecord->id;
$NewOrderDB =new newdbx;
// dd('here is the saveNewOrderDB $orderData 5', json_decode($orderData));
// dd('here is the saveNewOrderDB $orderData 5',$NewOrderDB,'O Data', $orderData);

// $NewOrderDB->order_data=json_encode($orderData);
$NewOrderDB->user_id="5";
// dd('here is the saveNewOrderDB $orderData 2', $orderData);
$NewOrderDB->client_id="6";
// dd('here is the saveNewOrderDB $orderData 3', $orderData);
$NewOrderDB->order_id="24";
// dd('here is the saveNewOrderDB $orderData 4', $orderData);
// $symsettingss =json_encode($symmsettings);
$lastRow = newdbx::latest()->first();

// Get the ID of the last row
$lastRowId = $lastRow->id;
$IdNewRow = $lastRowId +1;
$decodeJdata->orderID = $IdNewRow;
// dd($decodeJdata->orderID);
$NewOrderDB->order_data_logs=$decodeJdata;

 // Fetch the last row from the database


$NewOrderDB->order_data_logs->orderID=$IdNewRow;
// dd('here is the saveNewOrderDB $orderData 4', $orderData);
$NewOrderDB->save();
dd('$decodeJdata',$decodeJdata->parentIndex,$decodeJdata);

  dd('here is the saveNewOrderDB $orderData 5', $orderData, json_decode($orderData), json_encode($orderData));
dd('toppy INHWA');
// $todoIndex = json_decode($request['variable3'])->todoIndex;
// dd('it works INHWA',json_decode($request['variable3']),$xjdataOD['packages'][$order_Package_Index]['INHWAtestClassy'][$todoIndex]);
// $xjdataOD['INHWAtestClassy'][$todoIndex]['todos'][$todoIndex]['checked'] = $xtraPckg_state;
// $todosLength = count($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos']);
$todosValuesArray = json_decode(json_decode($request['variable4']));

// dd('json_decode($request[4])',json_decode(json_decode($request['variable4']))->INHWAtestClassy[$order_Package_Index]->todos);
// $array = [1, 2, 3, 4, 5];
// $count = count($array);
// dd($todosValuesArray );

// dd($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos']);

// $xjdataOD['INHWAtestClassy'] = $todosValuesArray;
$xjdataOD['INHWAtestClassy'][$order_Package_Index] = json_decode(json_encode($todosValuesArray), true);

// dd($todosValuesArray ,json_decode(json_encode($todosValuesArray)));

$xjdata->order_data_logs = $xjdataOD;
// dd($todosValuesArray ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]);
$xjdata->save();
return $request;
dd($todosValuesArray ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]);

// dd($todosValuesArray ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]);

// dd($todosValuesArraym ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]);
// if( $todosLength > 0){

//     if($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$todoIndex]['checked'] == true){
//         $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$todoIndex]['checked'] = false;
    
//     }else{
//         $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$todoIndex]['checked'] = true;
    
//     }
// }

// $xjdataOD['INHWAtestClassy'][$order_Package_Index] = $todosValuesArray;

// $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'] = [];

$xjdata->order_data_logs = json_decode(json_encode($xjdataOD));


// $xjdata->save();

// dd('$todosLength',$todosLength,'$todosValuesArray',$todosValuesArray);
return $request;
dd($todosValuesArray);
dd('it works INHWA',$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$todoIndex]['checked'],'aap',$xjdataOD);
dd('it works INHWA',$xjdataOD['INHWAtestClassy'][$todoIndex]['todos'][$todoIndex]['checked'], json_decode(json_decode($request['variable1']))->INHWAtestClassy, $xjdataOD['INHWAtestClassy'][$todoIndex]['todos'][$todoIndex]['checked']);




dd('it works INHWA',$xjdataOD['packages'][$order_Package_Index]['inhoudWaarde']);

}
if($where == 'extraPackaging'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $type = json_decode($request['variable3'])->type;
    // print_r('Extra PackaGGGGGIng',json_decode($request['variable3'])->type);
    //  $type = json_decode($request['variable3'])->type;
    //
    // if($type == 'pallet'){
// dd('yesss', json_decode($request['variable3'])->type);
$xtraPckg_state = json_decode($request['variable3'])->state;
// $xjdataOD['packages'][$order_Package_Index]['format']['length']['normal'] = $input_value_length;
// $xjdataOD['packages'][$order_Package_Index]['format']['width']['normal'] = $input_value_width;
$xjdataOD['packages'][$order_Package_Index]['XtraPackaging'][$type]['isChecked'] = $xtraPckg_state;



$xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

// $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);

$xjdata->save();

 return $request;
// print_r('palllettta');
    // }
    
    // $input_value_length = json_decode($request['variable3'])->length;
    // $input_value_width = json_decode($request['variable3'])->width;
    // $input_value_height = json_decode($request['variable3'])->height;
    // $xjdataOD['packages'][$order_Package_Index]['format']['length']['normal'] = $input_value_length;
    // $xjdataOD['packages'][$order_Package_Index]['format']['width']['normal'] = $input_value_width;
    // $xjdataOD['packages'][$order_Package_Index]['format']['height']['normal'] = $input_value_height;

    // $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    // $xjdata->save();
    return $request;
}




if($where == 'TLDeleteTodo'){



    
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;
    $itemIndex = json_decode($request['variable3'])->itemIndex;

    // dd('DeleteTodoZZ be4',$order_ID_nr, $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'], $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'],);

    $xjdataOD['testClassy'][$order_Package_Index]['todos'] = json_decode(json_decode($request['variable1']))->testClassy[0]->todos;

    $xjdata->order_data_logs = $xjdataOD;
   
    $xjdata->save();
    dd('DeleteTodoZZ after',$order_ID_nr, $xjdataOD['testClassy'][$order_Package_Index]['todos'], $xjdataOD['testClassy'][$order_Package_Index]['todos'],);

    // dd('DeleteTodoZZ',$order_ID_nr,'$itemIndewx',$itemIndex,json_decode(json_decode($request['variable1']))->INHWAtestClassy[0]->todos,$xjdataOD);
}

if($where == 'DeleteTodo'){



    
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;
    $itemIndex = json_decode($request['variable3'])->itemIndex;

    // dd('DeleteTodoZZ be4',$order_ID_nr, $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'], $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'],);

    $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'] = json_decode(json_decode($request['variable1']))->INHWAtestClassy[0]->todos;

    $xjdata->order_data_logs = $xjdataOD;
   
    $xjdata->save();
    dd('DeleteTodoZZ after',$order_ID_nr, $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'], $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'],);

    // dd('DeleteTodoZZ',$order_ID_nr,'$itemIndewx',$itemIndex,json_decode(json_decode($request['variable1']))->INHWAtestClassy[0]->todos,$xjdataOD);
}


if($where == 'TLCheckTodo'){
 
 
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $testClassy = json_decode(json_decode($request['variable1']))->testClassy;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $checkValue = json_decode($request['variable3'])->value;

    $checkValue2 = json_decode($request['variable4']);

    $itemIndex = json_decode($request['variable3'])->itemIndex;

    $order_Package_Index = json_decode($request['variable3'])->index;

    // dd($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'],$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex] ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]);
    // $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex] = $checkValue;
    // $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'] = $checkValue;
    if($checkValue == true){
                $xjdataOD['testClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'] = 'true';
                // dd('CheckTodo','$itemIndex', $itemIndex ,'$checkValue',$checkValue ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked']);
            // dd($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked']);
            }else{
                $xjdataOD['testClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'] = 'false';
                // dd('CheckTodo','$itemIndex', $itemIndex ,'$checkValue',$checkValue ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked']);

                // dd($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked']);
            }
        // }


    $xjdataOD['testClassy'][$order_Package_Index] = $testClassy[$order_Package_Index];
    $xjdata->order_data_logs = $xjdataOD;
    $xjdata->update();
    dd('TLCheckTodo','$itemIndex', $itemIndex ,'$checkValue',$checkValue,'$order_Package_Index',$order_Package_Index );


    // dd('CheckTodo',$itemIndex,$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'], '$checkValue2',$checkValue,$order_ID_nr );

    $xjdata->order_data_logs = $xjdataOD;
    // dd($todosValuesArray ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]);
    // $xjdata->save();
    $xjdata->save();
    dd('TLCheckTodo',$xjdataOD['testClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'], '$checkValue2',$checkValue,$order_ID_nr, $xjdataOD['testClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'] );

    // dd('INHWA INHWA INHWA', $todosValuesArray);
    // $jjdataz = json_decode($request['variable4']) ;

    dd('CheckTodo','$itemIndex',$itemIndex,'checkValue',$checkValue,'$order_ID_nr',$order_ID_nr,'checkValue xjdataOD',$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex],'aaa',$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'],$xjdataOD['INHWAtestClassy'][$order_Package_Index], $xjdataOD );
    return $request;

//     $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
// $xjdata = newdbx::find( $order_ID_nr); 
// $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

//     $input_value_length = json_decode($request['variable3'])->length;
//     $input_value_width = json_decode($request['variable3'])->width;
//     $input_value_height = json_decode($request['variable3'])->height;
//     $xjdataOD['packages'][$order_Package_Index]['format']['length']['normal'] = $input_value_length;
//     $xjdataOD['packages'][$order_Package_Index]['format']['width']['normal'] = $input_value_width;
//     $xjdataOD['packages'][$order_Package_Index]['format']['height']['normal'] = $input_value_height;

//     $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

//     // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
//     $xjdata->save();
//     return $request;
}

if($where == 'CheckTodo'){
 
 
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $INHWAtestClassy = json_decode(json_decode($request['variable1']))->INHWAtestClassy;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $checkValue = json_decode($request['variable3'])->value;

    $checkValue2 = json_decode($request['variable4']);

    $itemIndex = json_decode($request['variable3'])->itemIndex;

    $order_Package_Index = json_decode($request['variable3'])->index;

    // dd($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'],$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex] ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]);
    // $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex] = $checkValue;
    // $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'] = $checkValue;
    if($checkValue == true){
                $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'] = 'true';
                // dd('CheckTodo','$itemIndex', $itemIndex ,'$checkValue',$checkValue ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked']);
            // dd($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked']);
            }else{
                $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'] = 'false';
                // dd('CheckTodo','$itemIndex', $itemIndex ,'$checkValue',$checkValue ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked']);

                // dd($xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked']);
            }
        // }


    $xjdataOD['INHWAtestClassy'][$order_Package_Index] = $INHWAtestClassy[$order_Package_Index];
    $xjdata->order_data_logs = $xjdataOD;
    $xjdata->update();
    dd('CheckTodo','$itemIndex', $itemIndex ,'$checkValue',$checkValue,'$order_Package_Index',$order_Package_Index );


    // dd('CheckTodo',$itemIndex,$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'], '$checkValue2',$checkValue,$order_ID_nr );

    $xjdata->order_data_logs = $xjdataOD;
    // dd($todosValuesArray ,$xjdataOD['INHWAtestClassy'][$order_Package_Index]);
    // $xjdata->save();
    $xjdata->save();
    dd('CheckTodo',$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'], '$checkValue2',$checkValue,$order_ID_nr, $xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex]['checked'] );

    // dd('INHWA INHWA INHWA', $todosValuesArray);
    // $jjdataz = json_decode($request['variable4']) ;

    dd('CheckTodo','$itemIndex',$itemIndex,'checkValue',$checkValue,'$order_ID_nr',$order_ID_nr,'checkValue xjdataOD',$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'][$itemIndex],'aaa',$xjdataOD['INHWAtestClassy'][$order_Package_Index]['todos'],$xjdataOD['INHWAtestClassy'][$order_Package_Index], $xjdataOD );
    return $request;

//     $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
// $xjdata = newdbx::find( $order_ID_nr); 
// $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

//     $input_value_length = json_decode($request['variable3'])->length;
//     $input_value_width = json_decode($request['variable3'])->width;
//     $input_value_height = json_decode($request['variable3'])->height;
//     $xjdataOD['packages'][$order_Package_Index]['format']['length']['normal'] = $input_value_length;
//     $xjdataOD['packages'][$order_Package_Index]['format']['width']['normal'] = $input_value_width;
//     $xjdataOD['packages'][$order_Package_Index]['format']['height']['normal'] = $input_value_height;

//     $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

//     // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
//     $xjdata->save();
//     return $request;
}



if($where == 'formaat'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $input_value_length = json_decode($request['variable3'])->length;
    $input_value_width = json_decode($request['variable3'])->width;
    $input_value_height = json_decode($request['variable3'])->height;
    $xjdataOD['packages'][$order_Package_Index]['format']['length']['normal'] = $input_value_length;
    $xjdataOD['packages'][$order_Package_Index]['format']['width']['normal'] = $input_value_width;
    $xjdataOD['packages'][$order_Package_Index]['format']['height']['normal'] = $input_value_height;

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}
if($where == 'nameAfz'){

    // $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $input_value_nameAfz = json_decode($request['variable3'])->nameAfz;
    $input_value_lastNameAfz = json_decode($request['variable3'])->lastNameAfz;
    $xjdataOD['nameAfz'] = $input_value_nameAfz;
    $xjdataOD['lastNameAfz'] = $input_value_lastNameAfz;

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}

if($where == 'nameOntv'){
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $input_value_nameOntv = json_decode($request['variable3'])->nameOntv;
    $input_value_lastNameOntv = json_decode($request['variable3'])->lastNameOntv;
    $xjdataOD['nameOntv'] = $input_value_nameOntv;
    $xjdataOD['lastNameOntv'] = $input_value_lastNameOntv;

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}


if($where == 'phoneOntv'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $input_value_phoneOntv = json_decode($request['variable3'])->phoneOntv;

    $xjdataOD['phoneOntv'] = $input_value_phoneOntv;
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}
if($where == 'phoneAfz'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;
    $input_value_phoneAfz = json_decode($request['variable3'])->phoneAfz;

    $xjdataOD['phoneAfz'] = $input_value_phoneAfz;
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}

if($where == 'emailOntv'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;
    $input_value_emailOntv = json_decode($request['variable3'])->emailOntv;

    $xjdataOD['emailOntv'] = $input_value_emailOntv;
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}
if($where == 'emailAfz'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;
    $input_value_emailAfz = json_decode($request['variable3'])->emailAfz;

    $xjdataOD['emailAfz'] = $input_value_emailAfz;
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}
    

if($where == 'district'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;
    $input_value_district = json_decode($request['variable3'])->district;
    $input_value_postcodeAreaOntv = json_decode($request['variable3'])->postcodeAreaOntv;

    $xjdataOD['district'] = $input_value_district;
    $xjdataOD['postcodeAreaOntv'] = $input_value_postcodeAreaOntv;
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}

if($where == 'provincie'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;
    $input_value_provincie = json_decode($request['variable3'])->provincie;
    $input_value_postcodeAreaAfz = json_decode($request['variable3'])->postcodeAreaAfz;
    

    $xjdataOD['provincie'] = $input_value_provincie;
    $xjdataOD['postcodeAreaAfz'] = $input_value_postcodeAreaAfz;
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}
    
if($where == 'addressAfz'){
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $input_value_addressAfz = json_decode($request['variable3'])->address;
    $input_value_addressNrAfz = json_decode($request['variable3'])->number;

    // dd($input_value_addressNrAfz, $input_value_addressAfz);

    $xjdataOD['addressAfz'] = $input_value_addressAfz;
    $xjdataOD['addressNrAfz'] = $input_value_addressNrAfz;
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}
    
if($where == 'addressOntv'){
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $input_value_addressOntv = json_decode($request['variable3'])->address;
    $input_value_addressNrOntv = json_decode($request['variable3'])->number;

    $xjdataOD['addressOntv'] = $input_value_addressOntv;
    $xjdataOD['addressNrOntv'] = $input_value_addressNrOntv;
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}

if($where == 'countryOntv'){
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $input_value_countryOntv = json_decode($request['variable3'])->country;
    

    $xjdataOD['countryOntv'] = $input_value_countryOntv;
   
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}

if($where == 'countryAfz'){
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
    $xjdata = newdbx::find( $order_ID_nr); 
    $xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    $input_value_countryAfz = json_decode($request['variable3'])->country;
    

    $xjdataOD['countryAfz'] = $input_value_countryAfz;
   
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}

if($where == 'gewicht'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    // dd('asdasd',json_decode($request['variable3']));
    $input_value_gewicht = json_decode($request['variable3'])->gewicht;
   
    // $input_value_price = json_decode($request['variable3'])->price;
    $xjdataOD['packages'][$order_Package_Index]['weight']['normal']=  $input_value_gewicht;
    // $xjdataOD['gewicht'] = $input_value_gewicht;
   
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;

    dd( $xjdataOD['packages'][$order_Package_Index]['weight']['normal'], $input_value_gewicht);
}

if($where == 'price'){

    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;
    // dd('asdasd');
    // $input_value = json_decode($request['variable3'])->length;

    $input_value_price = json_decode($request['variable3'])->price;
    $xjdataOD['packages'][$order_Package_Index]['price']['normal']=  $input_value_price;

    // $xjdataOD['price'] = $input_value_price;
   
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}


if($where == 'extraPackaging'){
    $order_ID_nr = json_decode(json_decode($request['variable1']))->orderID;
$xjdata = newdbx::find( $order_ID_nr); 
$xjdataOD = newdbx::find($order_ID_nr)->order_data_logs;

    if($type == 'pallet'){
        dd('pallet');

    }
    // dd('asdasd');
    // $input_value = json_decode($request['variable3'])->length;

    $input_value_price = json_decode($request['variable3'])->price;
    $xjdataOD['packages'][$order_Package_Index]['price']['normal']=  $input_value_price;

    // $xjdataOD['price'] = $input_value_price;
   
    

    $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));

    // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
    
    $xjdata->save();
    return $request;
}

                //  dd('$order_ID_nr',$order_ID_nr,'$input_value',$input_value,'$order_Package_Index',$order_Package_Index,'aaaap',$aaaap,'$request',$request['variable1'] ,$request['variable2'],json_decode($request['variable3'])->index,$request,'$xjdata',json_decode(json_decode($request['variable1']))->orderID,  $xjdata);

        return $request;
         
    }
  
public function saveIndividualValues(Request $request,$where,$id,$value){

    // return 7;
    // $stringer = 'order_data';
    // // $NewOrderDB =new newdbx;\
    // $testaz = 
    // DB::table('newdbxes')
    // ->where('id', '21' );

    // DB::table('newdbxes')
    // ->where('id', '21' )->update(['order_data' =>  []]);


    // // $userx = newdbx::find(21); $userx->$stringer = ['Wion','lion'];

    // // $userx->save();
    // $xjdata = 0; 
    // 

    // $xjdata = newdbx::find(21); $xjdata->order_data_logs['parentIndex'] = 77;
    if($where == 'nameAfz'){
        $xjdata = newdbx::find($id); 
        $xjdata->order_data_logs[$where] = $value['nameAfz'];
        $xjdata->order_data_logs['lastNameAfz'] = $value['lastNameAfzender'];

        
                $xjdata->update();
                return;
                exit();
                                // dd('here is the saveIndividualValues $val', $where,'$NewOrderDB',$testaz,'$value',$value,'$xjdata->order_data_logs',$xjdata->order_data_logs,'$value["lastNameAfz"]',$value['lastNameAfzender'],'nameAfz',$value['nameAfz']);

        // $xjdata->order_data_logs['lastNameAfz'] = $value['lastNameAfzender'];
        // $xjdata = newdbx::find($id); $xjdata->order_data_logs[$where] = $value;

        // $user->update([
        //     'settings' => [
        //         'is_subscribed' => 0,
        //         'push_notifications' => [
        //             'follow' => false,
        //         ]
        //     ],
        // ]);

    }

     if($where == 'nameOntv'){
        $xjdata = newdbx::find($id); 
        $xjdata->order_data_logs[$where] = $value['nameOntv'];
        $xjdata->order_data_logs['lastNameOntv'] = $value['lastNameOntvanger'];

        
                $xjdata->update();
                exit();
                                dd('here is the saveIndividualValues $val', $where,'$NewOrderDB',$testaz,'$value',$value,'$xjdata->order_data_logs',$xjdata->order_data_logs,'$value["lastNameOntv"]',$value['lastNameOntvanger'],'nameAfz',$value['nameOntv']);

        // $xjdata->order_data_logs['lastNameAfz'] = $value['lastNameAfzender'];
        // $xjdata = newdbx::find($id); $xjdata->order_data_logs[$where] = $value;
        
        // $user->update([
        //     'settings' => [
        //         'is_subscribed' => 0,
        //         'push_notifications' => [
        //             'follow' => false,
        //         ]
        //     ],
        // ]);

    }

    if($where == 'addressAfz'){
        $xjdata = newdbx::find($id); 
        $xjdata->order_data_logs[$where] = $value['addressAfz'];
        $xjdata->order_data_logs['addressNrAfz'] = $value['addressNrAfz'];

       
                $xjdata->update();
                exit();
                                dd('here is the saveIndividualValues $val', $where,'$NewOrderDB',$testaz,'$value',$value,'$xjdata->order_data_logs',$xjdata->order_data_logs,'$value["lastNameOntv"]',$value['addressNrAfz'],'nameAfz',$value['addressAfz']);


    }

    if($where == 'addressOntv'){
        $xjdata = newdbx::find($id); 
        $xjdata->order_data_logs[$where] = $value['addressOntv'];
        $xjdata->order_data_logs['addressNrOntv'] = $value['addressNrOntv'];

        // exit();
                $xjdata->update();
                exit();
                                dd('here is the saveIndividualValues $val', $where,'$NewOrderDB',$testaz,'$value',$value,'$xjdata->order_data_logs',$xjdata->order_data_logs,'$value["lastNameOntv"]',$value['addressNrOntv'],'nameAfz',$value['addressOntv']);


    }

    if($where == 'provincie'){
        $xjdata = newdbx::find($id); 
        $xjdata->order_data_logs[$where] = $value['provincie'];
        $xjdata->order_data_logs['postcodeAreaAfz'] = $value['postcodeArea'];

        
                $xjdata->update();
                exit();
                                dd('here is the saveIndividualValues $val', $where,'$NewOrderDB',$testaz,'$value',$value,'$xjdata->order_data_logs',$xjdata->order_data_logs,'$value["provincie"]',$value['provincie'],'postCodeAreaAfz',$value['postcodeArea']);


    }

    if($where == 'district'){
        $xjdata = newdbx::find($id); 
        $xjdata->order_data_logs[$where] = $value['district'];
        $xjdata->order_data_logs['postcodeAreaOntv'] = $value['postcodeArea'];

        
                $xjdata->update();
                exit();
                                dd('here is the saveIndividualValues $val', $where,'$NewOrderDB',$testaz,'$value',$value,'$xjdata->order_data_logs',$xjdata->order_data_logs,'$value["district"]',$value['district'],'postCodeAreaOntv',$value['postcodeArea']);


    }

    
    if($where == 'gewicht'){
        
        $xjdata = newdbx::find($id); 

        $xjdata->order_data_logs['packages'][$value['index']]['weight']['normal'] = $value['value'];

        $xjdata->update();
        // return;
        // exit('stopper');
        dd('here is the saveIndividualValues $val', $where,'$value',$value, $xjdata->order_data_logs['packages'], $xjdata->order_data_logs['packages'][$value['index']]['weight']['normal']);

        // $xjdata->order_data_logs[$where] = $value['district'];
        // $xjdata->order_data_logs['postcodeAreaOntv'] = $value['postcodeArea'];

        
              


    }

  


    if($where == 'recovery'){
        
        $xjdata = newdbx::find($id);
        // dd('aaaap');

        // json_decode($orderData);
      //recovery Order Data Logs//////////////
        $xjdata->update(['order_data_logs' => json_decode($value)]);
        /////////////

        //////////recovery packages
        // $xjdata->update(['order_data_logs->packages' => json_decode($value)]);
        ///////////////////   
        /////////// uncomment  and comment to change
        dd('AIAIA',json_decode($value));

        // $this->wata = newdbx::where('send_order_id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
    //    dd('here  formaat is the saveIndividualValues $val', $where,'$value',$value,$value['length'], $xjdata->order_data_logs['packages'], $xjdata->order_data_logs['packages'][0]['format']); 
    // $testVarra = newdbx::find($id)->get('order_data_logs');
    // $orderDatadecoded = json_decode($testVarra[$value['parentIndex'][0]]);

        // dd('$value["length"]',$value['length']);

    }

    if($where == 'formaat'){
      
    // dd($value,$records, json_decode($records), json_decode(json_decode($xjdataOD))->packages[0]->format->length->normal,json_decode($xjdataOD));
        try {

            $xjdata = newdbx::find($id);
            $xjdataCC = newdbx::find($id)->order_data_logs;
            $xjdataOD = newdbx::find($id)->order_data_logs;
            $xjdataOD['packages'][$value['index']]['format']['length']['normal'] = $value['length'];
            $xjdata->order_data_logs = json_decode(json_encode($xjdataOD));
            // $xjdata->update(['order_data_logs' => json_decode(json_encode($xjdataOD))]);
            
            $xjdata->save();

            
            // dd('$value',$value,'index', $value['index'],'$id',$id);

            // return response()->json(['message' => 'Nested JSON value updated successfully']);
            // $xjdata->order_data_logs = json_decode($xjdataOD);
    // // exit();
    //         return 6;
    //         dd($xjdataOD['packages'],$xjdataOD['packages'][$value['index']]['format']['length']['normal'],json_decode(json_encode($xjdataOD)),$xjdata->order_data_logs);
    
    //         dd($xjdataCC['user_id']);

    //         $records = newdbx::where('order_data_logs->packages')->get();
    
           

           
    //         json_decode(json_decode($xjdataOD))->packages[0]->format->length->normal = '1111';
       
    //         $xjdataArray = $xjdata->toArray();
    
    //         // newdbx::find($id)->order_data_logs->update();
           
    
          
    //         $xjdataBB = newdbx::find($id)->order_data_logs->toArray();
    //         $xjdataArray['order_data_logs']['packages'][$value['index']]['format']['length']['normal'] = $value['length'];
    

            
    //         // $xjdata->update(['nameAfz' => '$xjdataArray']);
    //         $xjdata->update(json_decode($xjdataArray));
            // die();
            // return $xjdata->toArray();
            
           
            
            // $xjdata->update($xjdataArray);
            // return ;
            // exit();
            // $record->update(['order_data_logs' => json_encode($jsonData)]);
            // return response()->json([]);
//
// return 7;

            // Find the record you want to update
            // $record = YourModel::findOrFail($id);

            // // Get the existing JSON data from the column
            // $jsonData = json_decode($record->json_data, true);

            // // Update the deep nested value
            // $jsonData['deep']['nested']['key'] = $newNestedValue;

            // // Save the updated JSON data to the model
            // $record->update(['json_data' => json_encode($jsonData)]);

            // return response()->json(['message' => 'Deep nested data updated successfully']);
        } catch (\Exception $e) {

            // dd('yupppy');
            // return 5;
            // return response()->json(['error' => 'An unexpected error occurred: ' . $e->getMessage()], 500);
        }
    
       
        // dd($xjdataBB);
        // $xjdataBB['packages'][$value['index']]['format']['length']['normal'] = $value['length'];;  
        // $xjdataBB['packages'][$value['index']]['format']['width']['normal'] = $value['width'];;  

        try{

            // $xjdata->update($xjdataArray);
            // dd('awoawoawoawo ABB');
        
    } catch (ModelNotFoundException $e) {

        dd('awoawoawoawo AB');
        // Handle the case where the record is not found
        return response()->json(['error' => 'Record not found'], 404);
    } catch (QueryException $e) {
        dd('awoawoawoawo ABC');
        // Handle database-related errors
        return response()->json(['error' => 'Database error: ' . $e->getMessage()], 500);
    } catch (\Exception $e) {
        dd('awoawoawoawo ABCD', $e);
        // Handle other exceptions
        return $e;

        return response()->json(['error' => 'An unexpected error occurred: ' . $e->getMessage()], 500);
    }

    return NULL;

    // return response()->json(['message' => 'Deep nested value updated successfully']);

        
        // $xjdataBB->save();
        $xjdataCC['packages'][$value['index']]['format']['length']['normal'] = 'XXXX'; 
        // $xjdata->update( ['order_data_logs'=>'packages' => []);
// dd($xjdataBB['packages'][$value['index']], $xjdataCC['packages'][$value['index']],json_decode(json_encode($xjdataCC))->packages.$value['index']);

     

       
        $xjdatasArrays = newdbx::find($id)->get('order_data_logs');
        // dd(json_decode($xjdatasArrays[$value['index']]['order_data_logs']['packages'][$value['index']]));
        // $xjdata['user_id'] = '1000';
        $xjdataArray['order_data_logs']['packages'][$value['index']]['format']['length']['normal'] = $value['length'];
        // $xjdata->save($xjdataArray);

        $xjdataArray['order_data_logs']['packages'][$value['index']]['format']['width']['normal'] = $value['width'];
       
        // $xjdata->save($xjdataArray);
        $xjdataArray['order_data_logs']['packages'][$value['index']]['format']['height']['normal'] = $value['height'];

        // $request->validate([
        //     'nested_data' => 'required|json',
        //     // Add more validation rules if needed
        // ]);
        $jsonDataDecoded = $xjdata->order_data_logs;
        $jsonDataDecoded ['packages'][$value['index']]['format']['length']['normal'] = '777';
        // $updatedJsonData = json_encode($jsonDataDecoded);
        // dd(  $xjdataArray, $xjdatasArrays,$xjdata,$jsonDataDecoded);
        $jsonData = $xjdata->order_data_logs;
        $jsonData['packages'][$value['index']]['format']['length']['normal'] =  $value['length'];
        $jsonData['packages'][$value['index']]['format']['width']['normal'] =  $value['width'];
        $jsonData['packages'][$value['index']]['format']['height']['normal'] =  $value['height'];

        $xjdata->order_data_logs =$jsonData;
        // $xjdata->update(['order_data_logs->packages->' . $value['index'] . '->format->length->normal' => '88']);
        // newdbx::find($id)->update(['order_data_logs->packages->' . $value['index'] . '->format->length->normal' => '88']);
        return;
        dd('updated ?');
        // $testdecoj->packages[$value['index']]->format->length->normal = 'blabla';
        // $xjdata->update(['order_data_logs->packages->' . $value['index'] . '->format->length->normal' => 'watta']);
        // $xjdata->order_data_logs =json_decode(json_encode($jsonData));

        // $testdecoj = json_decode(json_encode($jsonData));
        // dd($testdecoj->packages[$value['index']]->format->length->normal);
    //    dd(json_decode(json_encode($jsonData)));
        // try {
        //     // Your code
    //    exit();
        // } catch (Exception $e) {
        //     Log::error('An error occurred: ' . $e->getMessage());
        //     // Handle or rethrow the exception
        // }
        // $xjdata->save( );
        // return $xjdata;
        $xjdata->update();
        return;
     
// 
  
    
    dd(json_decode(json_encode($jsonData)));

        // $xjdata->update($xjdataArray);// dd(  $xjdataArray, $xjdatasArrays,$xjdata,$jsonData['packages'][$value['index']]['format']['length']['normal'],'$xjdata->order_data_logs setback',$xjdata->order_data_logs);
        // $xjdata->update();
//         $jsonData['packages'];
// // Update the nested value
// $jsonData['nested']['key'] = 'new_value';

// Update the model with the modified JSON data
// $model->json_column = $jsonData;

// Save the model
// $xjdata->save();
        
        // $xjdata->save($xjdataArray);
        // $xjdata->update($xjdataArray);
        // $jsonData = $xjdataArray;
        
        // exit();
        // dd($request);
        // try {
        //     // Your code to update nested JSON data here
            // $xjdata->update($xjdataArray);
            // dd($xjdataArray, $xjdata);
                    // dd(  $xjdataArray, $xjdatasArrays,$xjdata,$jsonData['packages'][$value['index']]['format']['length']['normal'],'$xjdata->order_data_logs setback',$xjdata->order_data_logs);

           
            // return response()->json(['message' => 'Success']);

//             return $xjdata;
        //  } catch (\Exception $e) {
        //     // Log the error or handle it appropriately
        //     report($e);
        //     return response()->json(['error' => 'Failed to update.'], 500);
        //  }
        // Check for null values at each level
    //     if (isset($jsonData['order_data_logs']['packages'])) {
    //         $jsonData['order_data_logs']['packages'] = 'new_value';

    //         // $xjdataArray = $jsonData ; 
    //         $xjdata->update($xjdataArray);
    // dd('aap');
    //         // Update the model with the modified JSON data
    //         // $model->update(['json_column' => $jsonData]);
    //     }
    // }
        
        $testVarra = newdbx::find($id)->get('order_data_logs->packages')->toArray();

        
       

        exit();
        // dd('stopp',$xjdata, $xjdata, $testVarra,  $xjdataArray['order_data_logs']['packages'][$value['index']],'value',$value);
        // $this->wata = newdbx::where('send_order_id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
    //    dd('here  formaat is the saveIndividualValues $val', $where,'$value',$value,$value['length'], $xjdata->order_data_logs['packages'], $xjdata->order_data_logs['packages'][0]['format']); 
    // $testVarra = newdbx::find($id)->get('order_data_logs->packages')->toArray();
    dd(json_decode(json_encode($testVarra[$value['index'] ])),$testVarra[$value['index'] ],$testVarra[$value['index']]);
    $orderDatadecoded = json_decode($testVarra[$value['parentIndex'][0]]);
    $testVarra->update(['credentials->pass' => 'mypass']);
        // dd('$value["length"]',$value['length']);
// dd( $testVarra[$value['parentIndex']]->getAttributes(),'00',json_decode($testVarra[$value['parentIndex'][0]]),$value['parentIndex'], $xjdata ,'bvgf',$orderDatadecoded);
        // $xjdata->order_data_logs['packages'][$value['index']]['format']['length']['normal'] = $value['length'];
        // // $xjdata->update();
        // $xjdata->order_data_logs['packages'][$value['index']]['format']['width']['normal'] = $value['width'];
        // // $xjdata->update();
        // $xjdata->order_data_logs['packages'][$value['index']]['format']['height']['normal'] = $value['height'];
        // 


        // $xjdata->update([
        //     'order_data_logs' => ['packages' => [],]
        // ]);
// $testjdata = json_decode(json_encode($xjdata->order_data_logs->packages));

// $xxxjdata = $xjdata->order_data_logs;

// $SSjtest = json_decode(json_encode($testVarra));
// $SSjtest->update();
// 
// 
// $tata= $xjdata->order_data_logs->addressAfz;
        //  $xjdata->update(['order_data_logs->packages' => []]);
// order_data_logs->packages->format->length->normal
// $xjdata->update([ 'order_data_logs->packages[$value["parentIndex"][0]]->format->length->normal' => $value['length']]);
// $xjdata->update([ 'order_data_logs->addressAfz' => 'wattagwaaxax00s']);
$jdecoded = json_decode($xjdata);


$jdencoded = json_encode($xjdata);
$selectedPackage = $jdecoded->order_data_logs->packages[$value['index']];

// $selectedPackage->format->length->normal = "2000";
json_decode($xjdata)->order_data_logs->packages[$value['index']]->format->length->normal = "55000";
// $xjdata->update();
// json_decode($xjdata)->order_data_logs->packages[$value['index']]->format->length->normal;
$testerJdata =$xjdata->toArray()['order_data_logs']['packages'][$value['index']];
$testerJdatatojson =$xjdata->toJson();
$testerJdata['format']['length']['normal'] = '888';
$testerxJdata = $xjdata->toJson();

json_decode($xjdata->getAttributes()['order_data_logs'])->packages[$value['index']]->format->length->normal;
// $xjdata->getAttributes();
$xjdata->update();
        // $xjdata->update([ 'order_data_logs->addressAfz' => 'wattagwaaxax']);
        dd($value, $value['length'], json_decode($xjdata),$jdencoded, $jdecoded->order_data_logs->packages[$value['index']]->format->length,'$selectedPackage',$selectedPackage->format,$selectedPackage->format->length->normal,'decodas',json_decode($xjdata)->order_data_logs->packages[$value['index']]->format->length->normal,'$xjdata',$xjdata->toArray()['order_data_logs'],'$testerJdata',$testerJdata['format']['length']['normal'],$testerxJdata,'',$xjdata,'$testerJdatatojson',$testerJdatatojson,'$xjdata->getAttributes()',json_decode($xjdata->getAttributes()['order_data_logs'])->packages[$value['index']]->format->length->normal);

        // return $xjdata;
        //  exit();
        // dd($SSjtest[4],$testVarra,'$xjdata',$xjdata,'$xxxjdata',$xxxjdata);
        // $xjdata->order_data_logs['packages'][$value['index']]['format']['height']['normal'] = $value['height'];
        // $xjdata->order_data_logs['nameAfz'] = "oompa Loompa";

        // $xjdata->update();
// dd('AIAIA');
                // dd('here is the saveIndividualValues $val', $where,'$value',$value,$value['length'], $xjdata->order_data_logs['packages'], $xjdata->order_data_logs['packages'][0]['format']);

        // $user->update([
        //     'settings' => [
        //         'is_subscribed' => 0,
        //         'push_notifications' => [
        //             'follow' => false,
        //         ]
        //     ],
        // ]);
       
        // return 0;
        // dd('');

                // dd('here is the saveIndividualValues $val', $where,'$value',$value,$value['length'], $xjdata->order_data_logs['packages'], $xjdata->order_data_logs['packages'][0]['format']);

        exit();
// 

// $xjdata->break();
        //  $xjdata->save();

    

    }

    if($where == 'prijs'){

        $testVarra = newdbx::find($id)->get('order_data_logs->packages')->toArray();

            $xjdataa = newdbx::find($id);
            $xjdataArrayB = newdbx::find($id)->toArray();

            $xjdataArrayB['order_data_logs']['packages'][$value['index']]['price']['normal'] = $value['value'];
       
            $xjdataa->update($xjdataArrayB);
  
      exit();
      
        // $xjdata->order_data_logs['packages'][$value['index']]['price']['normal'] = $value['value'];

        // $xjdata->update();
        // // exit();
        // dd('here is the saveIndividualValues $val', $where,'$value',$value, $xjdata->order_data_logs['packages'], $xjdata->order_data_logs['packages'][$value['index']]['price']['normal']);


    }

    if($where == 'packages'){
        
        $xjdata = newdbx::find($id); 
        // dd('here is the saveIndividualValues $val', $where,'$value',$value, $xjdata->order_data_logs['packages']);

// dd('watsgood my friend!!!', '$value',$value);
       
// dd('stopppp');
       
        // $xjdata_encode = json_decode($value);
        // $xjdata->order_data_logs['packages'] = $xjdata_encode;
          $xjdata->order_data_logs['packages'] = $value;

        $xjdata->update();
        // dd('here is the saveIndividualValues $val', $where,'$value',$value,'xjdata_encode','$xjdata_encode');

         exit();
        // dd('here is the saveIndividualValues $val', $where,'$value',$value, $xjdata->order_data_logs['packages']);

        // $xjdata->order_data_logs[$where] = $value['district'];
        // $xjdata->order_data_logs['postcodeAreaOntv'] = $value['postcodeArea'];

    
              


    }

    if($where == 'removePackage'){
        
        $xjdata = newdbx::find($id); 

        // dd('here is the saveIndividualValues $val', $where,'$value',$value, $xjdata->order_data_logs['packages']);

     

       

       
        $xjdata_encode = json_decode($value);
        $xjdata->order_data_logs['packages'] = $xjdata_encode;
        dd('here is the saveIndividualValues $val', $where,'$value',$value, $xjdata->order_data_logs['packages'],$xjdata_encode);

        $xjdata->update();
        exit();
        // dd('here is the removePackage', $where,'$value',$value, $xjdata->order_data_logs['packages'],$xjdata_encode);
// 
        // $xjdata->order_data_logs[$where] = $value['district'];
        // $xjdata->order_data_logs['postcodeAreaOntv'] = $value['postcodeArea'];

        
              


    }


   
    //   dd('here is the saveIndividualValues $val', $where,'$NewOrderDB',$testaz,'$value',$value);

}

public function saveNewOrderDB($orderData){
    // dd('here is the saveNewOrderDB $orderData', $orderData);
    $NewOrderDB =new newdbx;
    // dd('here is the saveNewOrderDB $orderData 5', json_decode($orderData));
    // dd('here is the saveNewOrderDB $orderData 5',$NewOrderDB,'O Data', $orderData);

    $NewOrderDB->order_data=json_encode($orderData);
    $NewOrderDB->user_id="5";
    // dd('here is the saveNewOrderDB $orderData 2', $orderData);
    $NewOrderDB->client_id="6";
    // dd('here is the saveNewOrderDB $orderData 3', $orderData);
    $NewOrderDB->order_id="24";
    // dd('here is the saveNewOrderDB $orderData 4', $orderData);
    // $symsettingss =json_encode($symmsettings);
    $NewOrderDB->order_data_logs=json_decode($orderData);
    // dd('here is the saveNewOrderDB $orderData 4', $orderData);
    $NewOrderDB->save();
      dd('here is the saveNewOrderDB $orderData 5', $orderData, json_decode($orderData), json_encode($orderData));
}


public function saveAsNewThree( ){
    dd('wattagwaannnns');
    if (isset($_POST['submit'])) {
        // echo '<br />The ' . $_POST['submit'] . ' submit button was pressed<br />';
        dd('Save As New');
    }
   
   
}


    ///

// $threeArray
// function getPackages(){
//     $package= [];

//     $package->$aap = 'systema';

//     dd($package);

// }

// $("threechanger").submit(function (event) {
//     $(".form-group").removeClass("has-error");
//     $(".help-block").remove();

//     // ...
//   });



public function testsumitThree(Request $request, $formData, $SaveMeth){

    // if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // dd( $aap);
// dd( $formData);

//         if (isset($_POST['OverWright'])) {
//             dd('not yet');
//             // btnSubmit3 
//           } else if (isset($_POST['submittaow'])) {
//             // btnSubmit2 
//             dd('it works Submit New');
//           }
        // }
        // dd($SaveMeth);

     
    // switch ($request->input('action')) {
    //     case 'OverWright':
    //         // Save model
    //         dd('save');
    //         break;

    //     case 'SubmitNew':
    //         // Preview model
    //         dd('preview');
    //         break;

    //     case 'cave':
    //         dd('advanced');
    //         // Redirect to advanced edit
    //         break;
    // }
   $THREEID =$formData['ThreeID'];

    $symmsettings = json_encode($formData);
    $symsettingss =json_encode($symmsettings);


$aaap ='aaap';
// dd($formData['name']);
// if($formData == 'blank'){
// dd($formData);
// }else{
//     dd($formData);
// }
    // $ghg = json_decode($formData);
    // $formData['name'] ='Joeri';
    // dd($formData['name']);

    $nombre = $formData['name'];
$letters=  array("locale" => "en-US");
$Key = array($letters);

    
    $aap=  array( "name" => $Key);
    // $package= array( "build" => $aap,);
    // $package= array("schaap" => "tijger", "leeuw" => "dinsaur", "poes" => "puppy" );
    // $package->$aap = 'systema';


 
    $package= array("Name" =>$nombre, "ThreeID" =>$THREEID, "SaveMethod" =>$formData['SaveMethod']);
    // $packageBB= array("ThreeID" =>$formData['ThreeID'] );
    $Kia= array( $package);
    $arrayNames = array();
    $letterNames = array();
    $letterValues = array();
    $settingValues = array();
    $SymSettings = array(
        'PX' => '0',
         'PY' => '0',
         'PZ' => '0',
         'RX' => '0',
         'RY' => '0',
         'RZ' => '0',
         'SX' => '0',
         'SY' => '0',
         'SZ' => '0',
         'OL' => '0',
         'FontName' => '0',
         'FontIndex' => '0',
         'Color' => '0',
         'WireFrame' => '0',
         'Material' => '0',
         'Quad' => '0',
         'Scale' => '0',
         'Position' => '0',
         'Animation' =>'0',

    );

        $letterValues = array();
    
    // $nameCount = count_chars($nombre);
    $nameCount =strlen($nombre);

    for ($x = 0; $x <= $nameCount-1; $x++) {

        $stringName = "letter".$x;

        $$stringName =array();

        // array_push($package,  array("Key". $x =>array()  ,"Letter" => substr($nombre, $x ,1) )  );

    }


    for ($x = 0; $x <= $nameCount-1; $x++) {
        // array_push($arrayNames,   "Key".$x  , "Letter".$x  );
        array_push($arrayNames,  array(  "Letter".$x =>array() ));
        array_push($letterNames,  array(  "Key".$x =>array() ));
        array_push($settingValues,$SymSettings );
        array_push($letterValues, array( substr($nombre, $x ,1) => array('X','Y','Z','R')));
        

        echo "The number is: $x  count is: <br>";
        // array_push($package,   array($arrayNames[$x] =>array(array("A"=> array(substr($nombre, $x ,1)), "B"=>array()))  ) );
        // for ($xx = 0; $xx <= $nameCount-1; $xx++) {
        //    array_push($package,   array("Key". $x =>array()  ) );
        array_push($Kia,   array("Letter". $x =>array()  ,"Letter" => substr($nombre, $x ,1) ) );
        // array_push($package,  array( "name" => $nombre) );
        //    array_push($package,   array("Key". $xx =>array(array("A"=> array(substr($nombre, $xx ,1)), "B"=>array()))  ) );

        // }
        // $
        // array_push($package[$arrayNames[$x]],   array("A".$x => "B".$x ) );
        // array_push($package,  array('aap'.$x => $x) );
        // $package= array( "build" => $aap,);

        
        // $namast = $aaap += $x ;
//         $text = "Hello World";
// $dynamicText = $text;
// echo ".$dynamicText" ;
        // dd($formData['name'] = $formData['name'] + $x);
      } 
    

      for ($x = 0; $x <= $nameCount-1; $x++) {
        array_push($arrayNames,   array(  "Setter".$x =>array() ) , array(  "Key".$x =>array() ), array(  "Letter".$x =>array() ) );
        echo "The number is: $x  count is: <br>";
        // array_push($package,   array($arrayNames[$x] =>array(array("A"=> array(substr($nombre, $x ,1)), "B"=>array()))  ) );
        // for ($xx = 0; $xx <= $nameCount-1; $xx++) {
        //    array_push($package,   array("Key". $x =>array()  ) );
        // array_push($Kia[$x],   array("Setter". $x =>array()  ) );
        array_push($Kia[$x], array("Letter". $x =>array()  ,   "Setter". $x =>array(),   "Key". $x =>array(), "FLey". $x =>array() )  );
      }

      for ($x = 0; $x <= $nameCount-1; $x++) {
        // array_push( $Kia[0][0], array(array("Letter" => substr($nombre, $x ,1) )));
        // $Kia[0]['Key'.$x]['CharA']['letters'] = array(array('CharA' => array($letterValues)),array('CharB' => array($letterValues)));


        // $Kia[0]['Key'.$x]['CharA']['letters'] = array(array('CharA' => array($letterValues)),array('CharB' => array($letterValues)));
        // $Kia[0]['Key'.$x]['CharB']['letters'] = array(array('CharA' => array($letterValues)),array('CharB' => array($letterValues)));

              $Kia[0]['Key'.$x]['CharA']['Letter'] =  $letterValues;
        $Kia[0]['Key'.$x]['CharB']['Letter'] =  $letterValues;
    
        // for ($xx = 0; $xx <= $nameCount-1; $xx++) {
        //     // for ($x = 0; $x <= $nameCount-1; $x++) {
        //         $nom = $Kia[0]['Key'.$x][0]['CharA'];
        //         array_push($nom, "Letter"); 

        //     // }
        // }
      
        // $Kia[0]['Key0'] = array('aap' => 'schaap');
      }
      for ($xx = 0; $xx <= $nameCount-1; $xx++) {

        // $Kia[0]['Key'.$x]['CharA']['Letter']=  substr($nombre, $x ,1);

        $Kia[0]['Key'.$xx]['CharA']=  array('Letter' => $settingValues);
        $Kia[0]['Key'.$xx]['CharB']=  array('Letter' => $settingValues);
        
    //   }
      for ($x = 0; $x <= $nameCount-1; $x++) {

        for ($xsx = 0; $xsx <= $nameCount-1; $xsx++) {
        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['PX']=  $formData['PX'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['PX']=  $formData['PX'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['PY']=  $formData['PY'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['PY']=  $formData['PY'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['PZ']=  $formData['PZ'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['PZ']=  $formData['PZ'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['RX']=  $formData['RX'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['RX']=  $formData['RX'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['RY']=  $formData['RY'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['RY']=  $formData['RY'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['RZ']=  $formData['RZ'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['RZ']=  $formData['RZ'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['SX']=  $formData['SX'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['SX']=  $formData['SX'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['SY']=  $formData['SY'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['SY']=  $formData['SY'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['SZ']=  $formData['SZ'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['SZ']=  $formData['SZ'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['OL']=  $formData['OL'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['OL']=  $formData['OL'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Quad']=  $formData['Quad'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Quad']=  $formData['Quad'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['QuadB']=  $formData['QuadB'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['QuadB']=  $formData['QuadB'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Euler']=  $formData['Euler'.$xsx];


        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['EulerB']=  $formData['EulerB'.$xsx];


        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Scale']=  $formData['Scale'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Scale']=  $formData['Scale'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['ScaleB']=  $formData['ScaleB'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['ScaleB']=  $formData['ScaleB'.$xsx];
// dd($formData['Position'.$x]);
        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Position']=  $formData['Position'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Position']=  $formData['Position'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['PositionB']=  $formData['PositionB'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['PositionB']=  $formData['PositionB'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['FontName']=  $formData['Font'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['FontName']=  $formData['Font'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Material']=  $formData['Material'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Material']=  $formData['Material'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['WireFrame']=  $formData['Wireframe'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['WireFrame']=  $formData['Wireframe'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Color']=  $formData['fillColor'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Color']=  $formData['fillColor'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Color']=  $formData['fillColorB'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Color']=  $formData['fillColorB'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['SideColor']=  $formData['SideColor'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['SideColor']=  $formData['SideColor'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['FontIndex']=  $formData['GhostFontIndex'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['FontIndex']=  $formData['GhostFontIndex'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Animation']= $formData['GhostAnimation'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Animation']=  $formData['GhostAnimation'.$xsx];
      }


    }
    }

      function addd(){
        for ($x = 0; $x <= $nameCount-1; $x++) {

        }

      }
    //   for ($x = 0; $x <= $nameCount-1; $x++) {
        
    //     array_push($arrayNames,   array("Key". $x =>array()) );
    //     echo "yoyoy $x  count is: <br>";
    //     // $stringName = "letter".$x;

    //     // $$stringName =array();

    //     // array_push($package,  array("Key". $x =>array()  ,"Letter" => substr($nombre, $x ,1) )  );

    // }
//       foreach($package as $key => $name)
// { 
// ${strtolower($name)} = $package[$key]; 
// } 
// echo( $poes);
   

/////////////////
$names = array("Mistu","Bingo","Omango"); 
array_push($names,  "koala" ,$nameCount);

foreach($names as $key => $name)
{ 
${strtolower($name)} = $names[$key]; 
} 

// $Kia[0]['Name'] = "yomama";
// dd($formData);
// dd( $Kia[0]);
// dd( $Kia);
echo $mistu; 
echo $bingo; 
echo $omango; 

// dd( $arrayNames);
// dd( $package['poes']);

//////////////


$json = json_encode(array(
    "client" => array(
       "build" => "1.0",
       "name" => "xxxx",
       "version" => "1.0"
    ),
    "protocolVersion" => 4,
    "Key0" => array(
       "A" => array("letter0" => "xxxx"),
       "B" => "xxxx",
       "locale" => "en-US"
    ), "name" => 4
 ));
// $json = json_encode(array(
//     "client" => array(
//        "build" => "1.0",
//        "name" => "xxxx",
//        "version" => "1.0"
//     ),
//     "protocolVersion" => 4,
//     "data" => array(
//        "distributorId" => "xxxx",
//        "distributorPin" => "xxxx",
//        "locale" => "en-US"
//     )
//  ));
$THREEsign = json_encode( $Kia);
//  dd($json);
    ///
$stringTHREE = json_encode(json_encode($Kia));

// dd($stringTHREE);
     $testarr = [];

     if ($SaveMeth == "Overwriterex") {
        $symdesign =new Threesign;
      
        // $symdesign->name=$formData['nombre'];
        $symdesign->name= $nombre;
        $symdesign->threesign=$THREEsign;
    
        $symdesign->status='available';
        $symdesign->created_by='Jeedii';
    
        $symdesign->save();
        // // dd( $formData);
        dd("Overwriterex");
        dd('aaaap');

             }
   
     if ($SaveMeth == "saveAsNew") {
        // dd($SaveMeth);
        $symdesign =new Threesign;

        // $symdesign->name=$formData['nombre'];
        $symdesign->name= $nombre;
        $symdesign->threesign=$THREEsign;
    
        $symdesign->status='available';
        $symdesign->created_by='Jeedii';
   
        $symdesign->save();
        dd( $formData);
        dd('saveAsNew a new file has been saved');


        // btnSubmit3 
      } 
       if ($SaveMeth = "OverWright") {
        // btnSubmit2 
// dd($formData['ThreeID']);
        // $decoda = json_encode(json_encode($formData));
        // dd($formData);
       $vry = DB::table('threesigns')
        ->where('id',$THREEID)->update(['threesign' =>  $stringTHREE]);
        $symdesignchange =Threesign::find($THREEID);
        // $kwata = Symbases::where('id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
        // $kwata = Symbases::where('send_order_id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
       
       
        dd('overWright the file is overwritghted');
        dd($symdesignchange); 
      }
    
      
    // dd( $Kia[0]);
    // // dd($formData);
    // dd('saved');
 







}



public function overWritesumitThree( $formData){


    $symmsettings = json_encode($formData);
    $symsettingss =json_encode($symmsettings);
$aaap ='aaap';
    // $ghg = json_decode($formData);
    // $formData['name'] ='Joeri';
    // dd($formData['name']);

    $nombre = $formData['name'];
$letters=  array("locale" => "en-US");
$Key = array($letters);

    
    $aap=  array( "name" => $Key);
    // $package= array( "build" => $aap,);
    // $package= array("schaap" => "tijger", "leeuw" => "dinsaur", "poes" => "puppy" );
    // $package->$aap = 'systema';


 
    $package= array("Name" =>$nombre );
    $Kia= array( $package );
    $arrayNames = array();
    $letterNames = array();
    $letterValues = array();
    $settingValues = array();
    $SymSettings = array(
        'PX' => '0',
         'PY' => '0',
         'PZ' => '0',
         'RX' => '0',
         'RY' => '0',
         'RZ' => '0',
         'SX' => '0',
         'SY' => '0',
         'SZ' => '0',
         'FontName' => '0',
         'FontIndex' => '0',
         'Color' => '0',
         'WireFrame' => '0',
         'Material' => '0',
         'Quad' => '0',
         'Scale' => '0',
         'Position' => '0',
         'Animation' =>'0',

    );

        $letterValues = array();
    
    // $nameCount = count_chars($nombre);
    $nameCount =strlen($nombre);

    for ($x = 0; $x <= $nameCount-1; $x++) {

        $stringName = "letter".$x;

        $$stringName =array();

        // array_push($package,  array("Key". $x =>array()  ,"Letter" => substr($nombre, $x ,1) )  );

    }


    for ($x = 0; $x <= $nameCount-1; $x++) {
        // array_push($arrayNames,   "Key".$x  , "Letter".$x  );
        array_push($arrayNames,  array(  "Letter".$x =>array() ));
        array_push($letterNames,  array(  "Key".$x =>array() ));
        array_push($settingValues,$SymSettings );
        array_push($letterValues, array( substr($nombre, $x ,1) => array('X','Y','Z','R')));
        

        echo "The number is: $x  count is: <br>";
        // array_push($package,   array($arrayNames[$x] =>array(array("A"=> array(substr($nombre, $x ,1)), "B"=>array()))  ) );
        // for ($xx = 0; $xx <= $nameCount-1; $xx++) {
        //    array_push($package,   array("Key". $x =>array()  ) );
        array_push($Kia,   array("Letter". $x =>array()  ,"Letter" => substr($nombre, $x ,1) ) );
        // array_push($package,  array( "name" => $nombre) );
        //    array_push($package,   array("Key". $xx =>array(array("A"=> array(substr($nombre, $xx ,1)), "B"=>array()))  ) );

        // }
        // $
        // array_push($package[$arrayNames[$x]],   array("A".$x => "B".$x ) );
        // array_push($package,  array('aap'.$x => $x) );
        // $package= array( "build" => $aap,);

        
        // $namast = $aaap += $x ;
//         $text = "Hello World";
// $dynamicText = $text;
// echo ".$dynamicText" ;
        // dd($formData['name'] = $formData['name'] + $x);
      } 
    

      for ($x = 0; $x <= $nameCount-1; $x++) {
        array_push($arrayNames,   array(  "Setter".$x =>array() ) , array(  "Key".$x =>array() ), array(  "Letter".$x =>array() ) );
        echo "The number is: $x  count is: <br>";
        // array_push($package,   array($arrayNames[$x] =>array(array("A"=> array(substr($nombre, $x ,1)), "B"=>array()))  ) );
        // for ($xx = 0; $xx <= $nameCount-1; $xx++) {
        //    array_push($package,   array("Key". $x =>array()  ) );
        // array_push($Kia[$x],   array("Setter". $x =>array()  ) );
        array_push($Kia[$x], array("Letter". $x =>array()  ,   "Setter". $x =>array(),   "Key". $x =>array(), "FLey". $x =>array() )  );
      }

      for ($x = 0; $x <= $nameCount-1; $x++) {
        // array_push( $Kia[0][0], array(array("Letter" => substr($nombre, $x ,1) )));
        // $Kia[0]['Key'.$x]['CharA']['letters'] = array(array('CharA' => array($letterValues)),array('CharB' => array($letterValues)));


        // $Kia[0]['Key'.$x]['CharA']['letters'] = array(array('CharA' => array($letterValues)),array('CharB' => array($letterValues)));
        // $Kia[0]['Key'.$x]['CharB']['letters'] = array(array('CharA' => array($letterValues)),array('CharB' => array($letterValues)));

              $Kia[0]['Key'.$x]['CharA']['Letter'] =  $letterValues;
        $Kia[0]['Key'.$x]['CharB']['Letter'] =  $letterValues;
    
        // for ($xx = 0; $xx <= $nameCount-1; $xx++) {
        //     // for ($x = 0; $x <= $nameCount-1; $x++) {
        //         $nom = $Kia[0]['Key'.$x][0]['CharA'];
        //         array_push($nom, "Letter"); 

        //     // }
        // }
      
        // $Kia[0]['Key0'] = array('aap' => 'schaap');
      }
      for ($xx = 0; $xx <= $nameCount-1; $xx++) {

        // $Kia[0]['Key'.$x]['CharA']['Letter']=  substr($nombre, $x ,1);

        $Kia[0]['Key'.$xx]['CharA']=  array('Letter' => $settingValues);
        $Kia[0]['Key'.$xx]['CharB']=  array('Letter' => $settingValues);
        
    //   }
      for ($x = 0; $x <= $nameCount-1; $x++) {

        for ($xsx = 0; $xsx <= $nameCount-1; $xsx++) {
        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['PX']=  $formData['PX'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['PX']=  $formData['PX'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['PY']=  $formData['PY'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['PY']=  $formData['PY'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['PZ']=  $formData['PZ'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['PZ']=  $formData['PZ'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['RX']=  $formData['RX'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['RX']=  $formData['RX'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['RY']=  $formData['RY'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['RY']=  $formData['RY'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['RZ']=  $formData['RZ'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['RZ']=  $formData['RZ'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['SX']=  $formData['SX'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['SX']=  $formData['SX'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['SY']=  $formData['SY'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['SY']=  $formData['SY'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['SZ']=  $formData['SZ'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['SZ']=  $formData['SZ'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Quad']=  $formData['Quad'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Quad']=  $formData['Quad'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['QuadB']=  $formData['QuadB'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['QuadB']=  $formData['QuadB'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Euler']=  $formData['Euler'.$xsx];


        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['EulerB']=  $formData['EulerB'.$xsx];


        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Scale']=  $formData['Scale'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Scale']=  $formData['Scale'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['ScaleB']=  $formData['ScaleB'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['ScaleB']=  $formData['ScaleB'.$xsx];
// dd($formData['Position'.$x]);
        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Position']=  $formData['Position'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Position']=  $formData['Position'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['PositionB']=  $formData['PositionB'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['PositionB']=  $formData['PositionB'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['FontName']=  $formData['Font'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['FontName']=  $formData['Font'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Material']=  $formData['Material'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Material']=  $formData['Material'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['WireFrame']=  $formData['Wireframe'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['WireFrame']=  $formData['Wireframe'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Color']=  $formData['fillColor'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Color']=  $formData['fillColor'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Color']=  $formData['fillColorB'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Color']=  $formData['fillColorB'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['FontIndex']=  $formData['GhostFontIndex'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['FontIndex']=  $formData['GhostFontIndex'.$xsx];

        $Kia[0]['Key'.$xx]['CharA']['Letter'][$xsx]['Animation']= $formData['GhostAnimation'.$xsx];
        $Kia[0]['Key'.$xx]['CharB']['Letter'][$xsx]['Animation']=  $formData['GhostAnimation'.$xsx];
      }


    }
    }

      function addd(){
        for ($x = 0; $x <= $nameCount-1; $x++) {

        }

      }
    //   for ($x = 0; $x <= $nameCount-1; $x++) {
        
    //     array_push($arrayNames,   array("Key". $x =>array()) );
    //     echo "yoyoy $x  count is: <br>";
    //     // $stringName = "letter".$x;

    //     // $$stringName =array();

    //     // array_push($package,  array("Key". $x =>array()  ,"Letter" => substr($nombre, $x ,1) )  );

    // }
//       foreach($package as $key => $name)
// { 
// ${strtolower($name)} = $package[$key]; 
// } 
// echo( $poes);
   

/////////////////
$names = array("Mistu","Bingo","Omango"); 
array_push($names,  "koala" ,$nameCount);

foreach($names as $key => $name)
{ 
${strtolower($name)} = $names[$key]; 
} 

// $Kia[0]['Name'] = "yomama";
// dd($formData);
// dd( $Kia[0]);
// dd( $Kia);
echo $mistu; 
echo $bingo; 
echo $omango; 

// dd( $arrayNames);
// dd( $package['poes']);

//////////////


$json = json_encode(array(
    "client" => array(
       "build" => "1.0",
       "name" => "xxxx",
       "version" => "1.0"
    ),
    "protocolVersion" => 4,
    "Key0" => array(
       "A" => array("letter0" => "xxxx"),
       "B" => "xxxx",
       "locale" => "en-US"
    ), "name" => 4
 ));
// $json = json_encode(array(
//     "client" => array(
//        "build" => "1.0",
//        "name" => "xxxx",
//        "version" => "1.0"
//     ),
//     "protocolVersion" => 4,
//     "data" => array(
//        "distributorId" => "xxxx",
//        "distributorPin" => "xxxx",
//        "locale" => "en-US"
//     )
//  ));
$THREEsign = json_encode( $Kia);
//  dd($json);
    ///

     $testarr = [];
     if ($SaveMeth == "saveAsNew") {
        dd($SaveMeth);
        $symdesign =new Threesign;

        // $symdesign->name=$formData['nombre'];
        $symdesign->name= $nombre;
        $symdesign->threesign=$THREEsign;
    
        $symdesign->status='available';
        $symdesign->created_by='Jeedii';
    
        // $symdesign->save();
        dd('saveAsNew a new file has been saved');


        // btnSubmit3 
      } 
       if ($SaveMeth = "OverWright") {
        // btnSubmit2 
dd('aap');
        // $decoda = json_encode(json_encode($formData));
        // dd($formData);
        DB::table('Symbases')
        ->where('id', $formData['idid'])->update(['symsettings' =>  $decoda]);
        $symdesignchange =Symbases::find($formData['idid']);
        // $kwata = Symbases::where('id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
        // $kwata = Symbases::where('send_order_id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
       
        dd($symdesignchange); 
        dd('overWright the file is overwritghted');
      }


    // dd('aaaap');
    dd( $Kia[0]);
    // dd($formData);
    dd('saved');
 







}

public function savechanges($formData){
    // Request::has('saveChange');
    // dd($request->all());
   
    // if($formData['savemethod'] == 'SaveChanges'){

    //     dd($formData['savemethod']);
    // }elseif($formData['savemethod'] == 'SaveAsNew'){
    //     // 
    //     $this->testsumit($formData);

    //     return;

    // }elseif($formData['savemethod'] == 'Locked'){

    //     dd('select save option');
    // }
    $decoda = json_encode(json_encode($formData));
    dd($formData);
    DB::table('Symbases')
    ->where('id', $formData['idid'])->update(['symsettings' =>  $decoda]);
    $symdesignchange =Symbases::find($formData['idid']);
    // $kwata = Symbases::where('id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
    // $kwata = Symbases::where('send_order_id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
   
    dd($symdesignchange); 
// dd($formData['idid']);
}

public function saveAsNew( ){
    if (isset($_POST['submit'])) {
        // echo '<br />The ' . $_POST['submit'] . ' submit button was pressed<br />';
        dd('Save As Newyear');
    }
   
    // dd('Save As New', $inputa);

    // $decoda = json_encode(json_encode($formData));
    // DB::table('Symbases')
    // ->where('id', $formData['idid'])->update(['symsettings' =>  $decoda]);
    // $symdesignchange =Symbases::find($formData['idid']);
    // $kwata = Symbases::where('id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
    // $kwata = Symbases::where('send_order_id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
    // dd($symdesignchange);
// dd($formData['idid']);
}


public function savechangesumit(Request $request , $formData){
    // dd('sdasda');
  
    switch ($request->input('action')) {
        case 'wave':
            // Save model
            dd('save');
            break;

        case 'save':
            // Preview model
            dd('preview');
            break;

        case 'cave':
            dd('advanced');
            // Redirect to advanced edit
            break;
    }
    // dd('skaaap');
    // dd($formData);
}
// public function testsumit(Request $request, $formData){}
public function testsumit( $formData){

    // if (isset($_POST['action'])) {
    //     # Publish-button was clicked
    //     dd($request->input());
    // }
    // elseif (isset($_POST['save'])) {
    //     # Save-button was clicked
    //     dd($request->input());
    // }
    // dd(Request::get('save'));
// dd($request->wave);

    // switch ($request->input('action')) {
    //     case 'wave':
    //         // Save model
    //         dd('save');
    //         break;

    //     case 'save':
    //         // Preview model
    //         dd('preview');
    //         break;

    //     case 'cave':
    //         dd('advanced');
    //         // Redirect to advanced edit
    //         break;
    // }
     $testarr = [];
    // $request->serverMemo['data']['slidervalz'];
    // $bla = $request->input('slidervalz');
    // dd( $request->serverMemo['data']['slidervalz']);
    // error_log(request('extraverpakking'));
// dd('aaap');
    // return redirect('/')->with('msg', 'thanks you');
    // return request('extraverpakking');
    // $bla = $request->input('extraverpakking');
    // dd($request);
    // $symsettings = $formData->toJson();
    $symmsettings = json_encode($formData);
    $symsettingss =json_encode($symmsettings);

// dd($formData['nombre']);
   
    $symdesign =new Symbases;

    $symdesign->name=$formData['nombre'];
    $symdesign->symsettings=$symmsettings;
    // $sendorders->ordered_products='not delivered';
   
    // $symdesign->user_id= $user->id;

    

 
    $symdesign->save();
    dd($formData);
    dd('saved');
    // dd($symsettingss);







}

    public function loadModel(){
        $data = Order::find($this->modelId);
        $this->product_name = $data->product_name;
        $this->quantity = $data->quantity;
        $this->price = $data->price;
        $this->addressontv = $data->addressontv;
        // $this->jstats =json_decode($data->jstats);
        $this->signature = 'schaaap';

      
    
    // assign variables here
    }

    public function loadModelb($id){
        // $data = Order::->where('id', $user->id);

        // $data = Order::where('id','like', '2' )->get();
        // $data = Order::find($this->modelId)->first();
// dd($id);
        $data = Order::find($this->modelId)->first();
// 
    //    $data = Order::find($id[0])->where('product_id','like', $id[1] );
        $this->product_name = $id[2];
        $this->price = $data->price;
        // $this->product_name = $id[1];
        $this->quantity = $data->quantity;
        $this->postcodeAfz = $data->postcodeAfz;
        $this->phoneOntv = $data->phoneOntv;
        $this->phoneAfz = $data->phoneAfz;
        $this->addressAfz = $data->addressAfz;
        $this->addressOntv = $data->addressOntv;

        $this->district = $data->district;
        $this->provincie = $data->provincie;

        // $this->signature = $data->signature;

        $this->signatures = 'schaaap';

        $this->status_zending = $data->status_zending;

        $this->container_id = $data->container_id;
        $this->status_order = $data->status_order;

        $this->user_id =  $data->user_id;
        $this->created_at = $data->created_at;
        $this->updated_at = $data->updated_at;

        $this->emailAfz = $data->emailAfz;
        $this->emailOntv = $data->emailOntv;

        $this->nameAfz = $data->nameAfz;
        $this->nameOntv = $data->nameOntv;
        $this->formats = $data->formats;
        // $this->jstats =json_decode($data->jstats);
        // $this->jstats ='bladisadisa';

        // return $data;
      
    
     
     

        // return
        // Order::where('id','like', '%6%' )->paginate(5);

        // $this->reset();
    // assign variables here
    }

    public function modelData()
{
    return [
        'product_name' => $this->product_name,
        'quantity' => $this->quantity,
        'price' => $this->price,
        
       
        
    ];
}
public function getResponse($response){


  
    // return [
    //     'product_name' => $this->product_name,
    //     'quantity' => $this->quantity,
    //     'price' => $this->price,
        
       
        
    // ];


    // $response = $this->msg;
    $this->dispatchBrowserEvent(
      'response-received', ['response'=>$response, 'name'=>'JJEEDDII'] );
    //   dd('Responding!!...wattagwaannnns', $response, $this->msg);

}



public function create(){

    dd('wattagwaannnns');
    $Order =new Order ;
      
    // $symdesign->name=$formData['nombre'];
    $Order->nameAfz= $this->nameAfz;
    // $symdesign->threesign=$THREEsign;

    dd($Order->nameAfz);
    $this->validate();

    Order::create($this->modelData());
    $this->modalFormVisible = false;
    $this->reset();


    // $symdesign =new Symbases;

    // $symdesign->name=$formData['nombre'];
    // $symdesign->symsettings=$symmsettings;


 
    // $symdesign->save();
    // dd($formData);
   
}
 /**
 * read
 *
 * @return void
 */

public function createB(){


    // $symdesign =new Threesign;
      
    // $symdesign->name=$formData['nombre'];
    // $symdesign->name= $nombre;
    // $symdesign->threesign=$THREEsign;

    // dd($this->nameAfz);
    $this->validate();

    Order::create($this->modelData());
    $this->modalFormVisible = false;
    $this->reset();


    // $symdesign =new Symbases;

    // $symdesign->name=$formData['nombre'];
    // $symdesign->symsettings=$symmsettings;


 
    // $symdesign->save();
    // dd($formData);
   
}
 /**
 * read
 *
 * @return void
 */
public function symread(){
    // return Clients::paginate(5);

   
      
     
        return  Threesign::orderBy('id', 'desc')->paginate(5);
     
    
}
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
public function readAjax(){
    // return Clients::paginate(5);

   
      $testVar = newdbx::paginate(3);
      return $testVar;
}


   /**
 * read
 *
 * @return void
 */
public function readnewdb($request = null){
    // return Clients::paginate(5);

    $rrows = [];
    $page =1;
    $recordsToSkip=0;
    $limit = 5;
    $perPage = 1;
    $currentPage = 1;
    $testVar = newdbx::orderBy('created_at',  'desc')->paginate($limit);
    // $testVar = newdbx::orderBy('created_at',  'desc')->get();
    $total = $testVar->count();
    $paginator = new Paginator($testVar, $perPage, $currentPage, [
        'path' => Paginator::resolveCurrentPath(),
        'pageName' => 'page',
        'onEachSide' => ceil($total / $perPage),
    ]);
if($request !== null){
// dd('request');

    // $page = json_decode($request['variable3'])->index;
    $page = $request;
    // dd('$testVar','$perPage', $perPage, $currentPage,'$page',$page);

  ////////////////////////////
  $perPage = 1; // Number of items per page
    $currentPage = $page;

 // Get the total count of records
 $totalRecords = newdbx::count();

 // Determine the number of records to skip
 $recordsToSkip = ($page - 1) * $perPage;

 // If there are fewer than four records left on the last page,
 // adjust the pagination limit accordingly
 $limit = $totalRecords - $recordsToSkip < $perPage ? $totalRecords - $recordsToSkip : $perPage;
//  dd($limit);

 $testVar = newdbx::orderBy('created_at', 'desc')->skip($recordsToSkip)->take($limit)->get();
// dd($testVar);
 $total = $testVar->count();


    $slicedRecords = $testVar->slice($recordsToSkip, $perPage);

    $jsonResponse = response()->json($testVar);

    $dataArray = json_decode($jsonResponse->getContent(), true);

    
        // Create a Paginator instance manually
        // $paginator = new Paginator($slicedRecords, $perPage, $currentPage, [
        //     'path' => Paginator::resolveCurrentPath(),
        //     'pageName' => 'page',
        //     'onEachSide' => ceil($total / $perPage),
        // ]);
        $paginator = new Paginator($testVar, $perPage, $currentPage, [
            'path' => Paginator::resolveCurrentPath(),
            'pageName' => 'page',
            'onEachSide' => ceil($total / $perPage),
        ]);


        $totalPages = ceil($totalRecords / $perPage);
        $roundedNumber = (int)$totalPages;
// dd('$totalPages',$totalPages, '$roundedNumber', $roundedNumber,'clickedPage', $page,'$testVar->count()',$testVar->count());
        // dd($paginator);
        // dd( '$testvar',$paginator->lastPage(),'request',$request);
        if ($page == $roundedNumber && $testVar->count() < $perPage) {
            $slicedRecords = $testVar->slice($recordsToSkip, 2);
            // dd('$totalPages',$totalPages, '$roundedNumber', $roundedNumber,'clickedPage', $page,'$testVar->count()',$testVar->count());
            $offset = $totalRecords - $perPage;
            // dd('last_page');
            // $leftRecordstestVar = $testVar->take($testVar->count());
            // return $slicedRecords;
            $leftRecordstestVar = newdbx::orderBy('created_at', 'desc')->skip($recordsToSkip)->take($limit)->paginate(2);
            dd('aaapaaa');
return $leftRecordstestVar;
// dd('$leftRecordstestVar', $leftRecordstestVar);
            //  Create a Paginator instance manually
        $paginator = new Paginator($slicedRecords, $perPage, $currentPage, [
            'path' => Paginator::resolveCurrentPath(),
            'pageName' => 'page',
            'onEachSide' => ceil($total / $perPage),
        ]);
// return $leftRecordstestVar;
//    return $rrows;
// dd('aaapaaa');
return $paginator;
        $testVarra = newdbx::orderBy('id',  'desc')->paginate(2);
        dd($testVarra);
        return $testVarra;
            
            // dd($paginator);

            // Your data collection to paginate
// $data = Collection::make([...]);
        }
         $paginator = new Paginator($slicedRecords, $perPage, $currentPage, [
            'path' => Paginator::resolveCurrentPath(),
            'pageName' => 'page',
            'onEachSide' => ceil($total / $perPage),
        ]);
        
    // dd($dataArray);
    // dd('aaapaaa');
    return view('livewire.orderdata', ['paginator' => $paginator])
    ->layout('layouts.app',  ['paginator' => $paginator]);
    return $paginator;
  // If this is the last page and there are fewer than 4 rows left,
    // adjust the collection to return only the remaining rows

    //////
    // if ($page == $dataArray['last_page'] && $testVar->count() < 4) {
        
    //     $testVar = $testVar->take($testVar->count());
    //     dd($testVar);
    // }

 

//  dd('$totalRecords',$totalRecords,'$recordsToSkip', $recordsToSkip,'$limit',$limit,'$page',$page);

    ///////////////////////////////
    // dd($request);
}
   
    //   $testVar = newdbx::orderBy('id',  'desc')->paginate(4);
    // $testVar = newdbx::orderBy('created_at', 'desc')->skip($recordsToSkip)->take($limit)->paginate($limit, ['*'], 'page', $page);
    // $testVar = newdbx::orderBy('created_at', 'desc')->skip($recordsToSkip)->take($limit)->paginate(4, ['*'], 'page', $page);
    


 
    // if($request !== null){

    // dd($testVar->count());
    // }

  


    // Access the data array
        // dd($dataArray['data']);
      
    // dd(count($dataArray['data']));
    // dd(response()->json($testVar));
 $testVarrrax = newdbx::orderBy('id',  'desc')->get('order_data_logs');
    //   $testVarID = newdbx::orderBy('id',  'desc')->get('id');

      $testVarOBC = $testVarrrax ->toArray();
    //   $desiredDiv = $testVar->toHtml();
    //   dd($desiredDiv);
      $testVarID = newdbx::orderBy('id',  'desc')->get('id');

    //   $/testVarOBC = $testVar->toArray();
    //   $array = json_encode(json_decode($testVar, true));
      $testVarOCC = $testVarID->toArray();
      
           
    // $testRRR = json_decode($testVar[0]['order_data']);
    // dd(json_decode(json_encode($testVar[0]->getAttributes())));
    // dd($testVar[0]->getAttributes('nameAfz')->get('nameAfz'));
    // dd($testVarOCC );
    //   $array = json_encode(json_decode($testVar, true));
    //   $testVarOB = $testVar->toArray();
    // $testRRR = json_decode($testVar[0]['order_data']);
    // dd(json_decode(json_encode($testVar[0]->getAttributes())));
    // dd($testVar[0]->getAttributes('nameAfz')->get('nameAfz'));
    // dd($testVar);
    // dd($testRRR);
    // this().testEncode = 5 ;
    $this->testEncode = $testVarOBC;
   

    $this->testEncodeID = $testVarOCC;
    //   ->with('mydata', json_decode($mydata, true))
   
        // return  newdbx::orderBy('id', 'desc');
        // return  newdbx::orderBy('id', 'desc')->paginate(5);
        // return $testVar;
        // dd('readnewdbb');
        // return view('livewire.savevector-dash', ['paginator' => $paginator]);
        // return view('livewire.savevector-dash', ['paginator' => $paginator]);
        return $testVar;
         dd('$totalRecords',$totalRecords,'$recordsToSkip', $recordsToSkip,'$limit',$limit,'$page',$page);

        // dd('readnewdbb 2');
       
    
}

public function gotoPage($page)
{
    dd('your in the goto page', $page);
    $this->data = newdbx::paginate(3, ['*'], 'page', $page);
}

public function readnewdbZ(){
    // return Clients::paginate(5);

   
    //   $testVar = newdbx::orderBy('id',  'desc')->get('order_data_logs');

      $testVarID = newdbx::orderBy('id',  'desc')->get('id');

    //   $/testVarOBC = $testVar->toArray();
    //   $array = json_encode(json_decode($testVar, true));
      $testVarOB = $testVarID->toArray();
    // $testRRR = json_decode($testVar[0]['order_data']);
    // dd(json_decode(json_encode($testVar[0]->getAttributes())));
    // dd($testVar[0]->getAttributes('nameAfz')->get('nameAfz'));
    // dd($testVarOB );
    // dd($testRRR);
    // this().testEncode = 5;
    // $this->testEncode = $testVarOBC;
    //   ->with('mydata', json_decode($mydata, true))
     
        // return  newdbx::orderBy('id', 'desc');
        // return  newdbx::orderBy('id', 'desc')->paginate(5);
        // return $testVar;
        return $testVarID;
       
     
    
}


   /**
 * read
 *
 * @return void
 */
public function readnewdbjdata(){
    // return Clients::paginate(5);

    $testVarXXX = newdbx::orderBy('id',  'desc')->paginate(5);
    $testVarYYY = newdbx::orderBy('id',  'desc')->select('order_data_logs')->get();
    
    $testVarZ = newdbx::orderBy('id',  'desc')->get('order_data_logs');

    
    $testVarZAQ = newdbx::orderBy('id',  'desc')->get('id');
    // $testVarYYY = newdbx::orderBy('id',  'desc')->select('order_data_logs')->limit(2)->get();
    // dd($testVarXXX[2]->getOriginal());
   
      $testVar = newdbx::orderBy('id',  'desc');
    

     
 
    //   dd($testVarZ);
    //   $array = json_encode(json_decode($testVar, true));
      $testVarOB = $testVar->get()->toArray();
    // $testRRR = json_decode($testVar[0]['order_data']);

    $testVarF = $testVar->get('order_data_logs');
    
    $decodeJ =json_decode($testVarOB[0]['order_data']);
    // $decodeJ->nameAfz = 'leeuwenhok';
    // dd($testVarOB[0]['order_data_logs'],$decodeJ->nameAfz);
    //   $testRRR = $testVar[0]['order_data'];
    //   dd($testVar[0]['order_data']);
    $datax = newdbx::where('order_data_logs', true)->first();
    // dd(json_decode($testVarF[0]), $testVarZ[0]->getOriginal()["order_data_logs"],$testVarXXX[0]->getOriginal() );
    // dd($testVarZ);
    //   ->with('mydata', json_decode($mydata, true))
    $testVarQ = newdbx::orderBy('id',  'desc')->get('order_data_logs');
    // dd($testVarQ);
        // return  newdbx::orderBy('id', 'desc');
        // return  newdbx::orderBy('id', 'desc')->paginate(5);
        // return $decodeJ;
        // return $testVarOB;
        // return json_decode($testVarF[0]);
        // return $testVarZ[0]->paginate(5);
        // return json_decode($testVarZ[0], false);
        $multiplied = $testVarXXX->map(function () {
            // $testVarZ = newdbx::orderBy('id',  'desc')->get('order_data_logs')->all();
    
            // return $item * 2;
            // dd($testVarZ);
            // return $testVarZ;
        });
          return json_decode($testVarZ[0]);
        //   return json_decode($testVarZ[0]);
        //   return json_decode($testVarXXX[0]);
        
        // return $testVarXXX; 
     
    
}


   /**
 * read
 *
 * @return void
 */
public function convtertarray(){
// dd('testa');
    $testVar = newdbx::orderBy('id',  'desc')->get()->toArray();
    $testVarB = newdbx::orderBy('id',  'desc');
    $testVarCC = json_decode(newdbx::find(22));
    // $testVara = newdbx::orderBy('id',  'desc')->get();
    //   $array = json_encode(json_decode($testVar, true)) ;
    //   $testVarOB = $testVar->toArray();
    // $testRRR = json_encode($testVar[0]['order_data']);
    // $testVarCC->order_data_logs->nameAfz = "aapestreken";
    // dd($testVarCC->order_data_logs->nameAfz);
// 
// dd(json_encode(array($testVar[0]['order_data']),true));

 $jconvert =json_decode($testVar[0]['order_data']);
 $jconvertlogs =$testVar[0]['order_data_logs'];

 
 $results = [];
 $results['zone'] = 'aap';
 $results['tourism'] = 'schaap';
 $results['business'] ='luipaard';
 $results['culture'] = 'leeuw';

$this->order_data = $results;

$json_data = '{"a":1,"b":2,"c":3,"d":4,"e":5}'; 
// you can also get json data from an API url. 
$content_array = json_decode( $json_data, true ); 
// print_r( $content_array ); //

$laravelPosts = newdbx::whereJsonContains('order_id->nameAfz', 'Nessertonnesserax')->get();

$posts =  newdbx::all();

// $castered = $posts->get();
// $metadata = $testVarB['model'];
// dd($posts);
//  $view->with('sidebar', $results); 

//   dd( \Response::json( $results));
//    $data = Order::find($id[0])->where('product_id','like', $id[1] ) ;
    // $this->order_data =json_encode($testVar[0]['order_data'], true);
    // // $this->order_data_logs = json_decode($testVar[0]['order_data_logs']);
    // // $this->product_name = $id[1];
    // $this->order_id = $testVar[0]['order_id'];
    // $this->client_id = $testVar[0]['client_id'];
    // $this->user_id = $testVar[0]['user_id'];((
    // dd(json_decode($testVar[0]['order_data'], true)) ;

    // dd(json_encode($testVar[0]));
    // return $testVar;
    //  $tasta= \Response::json( $jconvert);
    // dd(json_decode($tasta),);
    // return \Response::json( $jconvert);
    // return  $jconvert;
    // dd($testVarB);
    return $testVarCC->order_data_logs;
    //  return [
    //     'order_data' => 'aapwel',
    //     'client_id' => $testVar[0]['client_id'],
    //     'user_id' => $testVar[0]['user_id'],
    //     'order_id' => $testVar[0]['order_id'],
        
    
    // ];

}



   /**
 * read
 *
 * @return void
 */
public function bread(){
    // return Clients::paginate(5);

   
      
     
        return  Order::orderBy('id', 'desc')->paginate(5);
     
    
}
    /**
 * read
 *
 * @return void
 */
public function read(){
    // return Clients::paginate(5);

    $search = $this->search;

    if(!$search == ''){
        return
        Order::where('nameAfz','like', '%'.$this->search.'%' )->orderBy('id', 'desc')->paginate(5);

    }else{
        $orda =   Order::orderBy('id', 'desc');
        return 
        Order::orderBy('id', 'desc')->paginate(8);
        $this->search=$search;
        $this->signature = 'schaap';
    }
}


/**
 * update
 *
 * @return void
 */
public function update(){

    $this->validate();
    Order::find($this->modelId)->update($this->modelData());
    $this->modalFormVisible = false;

}

/**
 * delete
 *
 * @return void
 */

 public function updateField($fieldValue,$jsonData){
    dd('aaapwel');
    $wata =  Order::where('id','like', '%'.$jsonData['id'].'%' )->get();

    $dataWata = $wata[0]->attributesToArray();

    // $this->product_name = $id[2];
    // $this->price = $wata->price;


    // $wata->nameAfz = 'deliveredas';
// $wata->update();

DB::table('orders')
->where('id', $jsonData['id'])->update([$jsonData['where'] =>  $fieldValue]);
dd('updateField()',$jsonData,$fieldValue,'$jsonData',$jsonData['id'],$wata,$dataWata,  $dataWata['nameAfz'], $jsonData['where'] );
// if($order->status_zending == 'not delivered'){
//     $order->status_zending = 'delivered';
//     $order->save();
//     }else{
//         $order->status_zending = 'not delivered';
//     $order->save();
//     }
    
    // return redirect()->back();

// $this->validate();
    // Order::find($this->modelId)->update($this->modelData());
    // $this->modalFormVisible = false;

}

/**
 * delete
 *
 * @return void
 */
public function delete(){

    Order::destroy($this->modelId);
    $this->modalConfirmDeleteVisible = false;
    $this->resetPage();
}

/**
 * createShowModal show the creatae model
 *
 * @return void
 */
public function createShowModal(){
    $this->resetValidation();
    $this->reset();
    $this->modalFormVisible = true;
    
}

/**
 * updateShowModal
 *
 * @param  mixed $id
 * @return void
 */
public function updateShowModal($id){
    $this->resetValidation();
    $this->reset();
    $this->modalFormVisible = true;
    $this->modelId = $id;
    $this->loadModel();

}

/**
 * updateShowModal
 *
 * @param  mixed $id
 * @return void
 */
public function supdateShowModal($id){
    // $this->resetValidation();
    // $this->reset();
    $this->modalFormVisibleb = true;
    $this->modelId = $id[0];
    $this->product_id = $id[1];
    // dd($id);
    $this->loadModelb($id);

}

/**
 * updateShowModal
 *
 * @param  mixed $id
 * @return void
 */
public function getorderproducts($id){

    // $this->modalFormVisibleb = true;
    // $this->modelId = $id[0];
    // $this->product_id = $id[1];
    // dd($id[2]);
    // $search = $this->search;

    // if(!$search == ''){
    //     return
       $wata =  Order::where('send_order_id','like', '%'.$id[2].'%' )->orderBy('id', 'desc')->first();

       $this->product_name = $id[2];
       $this->price = $wata->price;
       // $this->product_name = $id[1];
       $this->quantity = $wata->quantity;
       $this->gewicht = $wata->gewicht;
       $this->phoneOntv = $wata->phoneOntv;
       $this->phoneAfz = $wata->phoneAfz;
       $this->addressAfz = $wata->addressAfz;
       $this->addressOntv = $wata->addressOntv;

       $this->district = $wata->district;
       $this->provincie = $wata->provincie;

        // return $wata;
        // $testproducts =Order::where('send_order_id','like', '%'.$id[2].'%' )->orderBy('id', 'desc')->paginate(5);
        // dd($wata);
    // }else{
    //     $orda =   Order::orderBy('id', 'desc');
    //     return 
    //     Order::orderBy('id', 'desc')->paginate(5);
    //     $this->search=$search;
    //     $this->signature = 'schaap';
    // }
    // $this->loadModelb($id);

}



/**
 * deleteShowModal
 *
 * @return void
 */
public function deleteShowModal($id)
{

    $this->modelId = $id;
    $this->modalConfirmDeleteVisible = true;
}

public function updatestatus($id){

    $order=order::find($id);
    if($order->status_zending == 'not delivered'){
$order->status_zending = 'delivered';
$order->save();
}else{
    $order->status_zending = 'not delivered';
$order->save();
}

return redirect()->back();

}



public function loadsymdesign($id){
    // dd('awara');
// dd($id);

$symbase=symbases::find($id);

dd($symbase->name);
}

public function updatestatusvracht($id, $verpakker){

    $order=order::find($id);
    // $jstatsorder = json_decode( $order->jstats); 
    
    $jstatsorder = json_decode( $order->jstats);
  
$www = json_decode(json_encode($jstatsorder), true);


// $www[0]['locstat'] = 'blablabla';

    // $testcollection = new Collection ($www
    

    // );

   
/////////////

switch($verpakker) {
    case('locstat'):


     switch($www[0][$verpakker]){

        case('false'):
            $www[0][$verpakker] = 'true';

            break;

            case('true'):
                $www[0][$verpakker] = 'false';
    
                break;
     }
        // if($www[0][$verpakker] == 'false'){
        //     $www[0][$verpakker] = 'true';
            
            
        //     // $www[1]['verpakt'] = 'false';
        //     // $www[2]['labeled'] = 'false';
        //     // $www[3]['ready'] = 'false';
        //     }
            // dd($www[0],'locstat');
        // $posts = Post::Create([
        //     'name' => $request->name;
        //     'description' => $request->description;
        //     'status' => $request->status;
        // ]);

        // $msg = 'Post successfully saved.';

        break;

    case('verpakt'):

        switch($www[0][$verpakker]){

            case('false'):
                $www[0][$verpakker] = 'true';
    
                break;
    
                case('true'):
                    $www[0][$verpakker] = 'false';
        
                    break;
         }
         
        // dd($www[0],'verpakt');
        // $posts = Post::find($request->id)->first();

        // $post->name = $request->name;
        // $post->description = $request->description;
        // $post->status = $request->status;

        // $post->save();

        // $msg = 'Post successfully updated.';

        break;

        case('labeled'):
         
            switch($www[0][$verpakker]){

                case('false'):
                    $www[0][$verpakker] = 'true';
        
                    break;
        
                    case('true'):
                        $www[0][$verpakker] = 'false';
            
                        break;
             }
            // dd($www[0],'labeled');
            // $posts = Post::find($request->id)->first();
    
            // $post->name = $request->name;
            // $post->description = $request->description;
            // $post->status = $request->status;
    
            // $post->save();
    
            // $msg = 'Post successfully updated.';
    
            break;

            case('ready'):

                switch($www[0][$verpakker]){

                    case('false'):
                        $www[0][$verpakker] = 'true';
            
                        break;
            
                        case('true'):
                            $www[0][$verpakker] = 'false';
                
                            break;
                 }
        //  dd($www[0],'ready');
                // $posts = Post::find($request->id)->first();
        
                // $post->name = $request->name;
                // $post->description = $request->description;
                // $post->status = $request->status;
        
                // $post->save();
        
                // $msg = 'Post successfully updated.';
        
                break;

    default:
        $msg = 'Something went wrong.';
}

/////////////////
    // if($verpakker == $verpakker){
// $order->status_zending = 'delivered';
// $order->save();
// if($www[0][$verpakker] == 'false'){
// $www[0][$verpakker] = 'true';

// $www[1]['verpakt'] = 'false';
// $www[2]['labeled'] = 'false';
// $www[3]['ready'] = 'false';
// }
// else{

//     dd('yatta');
//     // $www[0][$verpakker] = 'false';  
// }


// }if($verpakker == 'verpakt'){
//     if($www[0]['verpakt'] == 'false'){
//         $www[0]['verpakt'] = 'true';
//         }else{
//             $www[0]['verpakt'] = 'false';  
//         }
        


// }if($verpakker == 'labeled'){
//     if($www[0]['labeled'] == 'false'){
//         $www[0]['labeled'] = 'true';
//         }else{
//             $www[0]['labeled'] = 'false';  
//         }
        


// }
// if($verpakker == 'ready'){
//     if($www[0]['ready'] == 'false'){
//         $www[0]['ready'] = 'true';
//         }else{
//             $www[0]['ready'] = 'false';  
//         }
        


// }



$wwwc = json_encode($www);
$wwwd =json_encode($wwwc);
// dd($www[0],$wwwd);
    // dd($www[0],$www[0]['locstat']);
    // order::find($id)->update([$order->jstats => $wwwc]);
    DB::table('orders')
        ->where('id', $id)->update(['jstats' =>  $wwwd]);


        dd($www[0],$www[0]['locstat'],  $verpakker, $wwwd);
// else{
//     $order->status_zending = 'not delivered';
// $order->save();
}

// return redirect()->back();  'jdatax'=> $this->convtertarray(),

// }
public function returnUsers()
{ 



// public function readnewdbZ(){
    // return Clients::paginate(5);

   
    //   $testVar = newdbx::orderBy('id',  'desc')->get('order_data_logs');

    //   $testVarID = newdbx::orderBy('id',  'desc')->get('id');

    $data = User::orderBy('id',  'desc')->get();

    return $data;
}
public function setPage()
{ 
    $perPage = 1; // Number of items per page
    $currentPage = 1;
    $data = User::orderBy('name')->get();
    // dd(' $data setpage ', $data);
    // $data = Clients::orderBy('created_at', 'desc')->paginate(4, ['*'], 'page', $page);
 // Get the total count of records
//  $totalRecords = newdbx::count();

 // Determine the number of records to skip
//  $recordsToSkip = ($page - 1) * $perPage;

 // If there are fewer than four records left on the last page,
 // adjust the pagination limit accordingly
//  $limit = $totalRecords - $recordsToSkip < $perPage ? $totalRecords - $recordsToSkip : $perPage;
//  dd($limit);

//  $testVar = newdbx::orderBy('created_at', 'desc')->skip($recordsToSkip)->take($limit)->get();
// dd($testVar);
$testVar =  $this->readnewdb();
 $total = $testVar->count();


    // $slicedRecords = $testVar->slice($recordsToSkip, $perPage);

    // $jsonResponse = response()->json($testVar);

    // $dataArray = json_decode($jsonResponse->getContent(), true);

    
        // Create a Paginator instance manually
        // $paginator = new Paginator($slicedRecords, $perPage, $currentPage, [
        //     'path' => Paginator::resolveCurrentPath(),
        //     'pageName' => 'page',
        //     'onEachSide' => ceil($total / $perPage),
        // ]);
        // dd('it works till here dd!!');

        $paginator = new Paginator($testVar, $perPage, $currentPage, [
            'path' => Paginator::resolveCurrentPath(),
            'pageName' => 'page',
            'onEachSide' => ceil($total / $perPage),
        ]);
        // dd('it works till here a!!');
    //    d//d///( $routeName = Route::currentRouteName());
    // return view('your-view', compact('routeName'));

    $view = view('layouts.app', [
        'data' => $this->read(),
        'bdata' => $this->bread(),
        'cdata' => $this->cread(),
        'symdata' => $this->symread(),
        'newdbxdata' => $this->readnewdb(),
        'newReadAjax' => $this->readAjax(),
        'dbxjdata' => $this->readnewdbjdata(),
        'dbz'=>$this->readnewdbZ(),
        'userz'=>$this->returnUsers(),
        'paginator' => $paginator,
        

        
     ])->render();
    dd('it works till here!!');
    return response()->json(['html' => $view]);

}

public function doSomething()
{
    // Your Livewire logic here
    // Check if this point is reached
    \Log::info('Emitting event jsUpdate');
    // Emit an event to signal JavaScript to update
    $this->emit('jsUpdate');
}

////////////////////////////////////  begin container
      /**
 * read
 *
 * @return void
 */
public function containerread(){
    // return Clients::paginate(5);

   
      
     //edit also with the other pagination container CustomEventContainer( 4000)
        return  Container::orderBy('id', 'desc')->paginate($this->paginateValue_container);
     
    
}


 
/////////////////////////////////////// end container
protected $listeners = ['eventTriggeredFromComponentA' => 'handleEvent'];

public function handleEvent()
{
    // This function will be triggered when Component A emits the event
    $this->someFunctionInComponentB();
}

public function someFunctionInComponentB()
{
    // Logic in component B

    dd('yayaya');
}

    public function render()
    {
        $perPage = 1; // Number of items per page
        $currentPage = 1;

        $perPage_container = 1; // Number of items per page
        $currentPage_container = 1;
$currentRouteName='';
        $this->currentRouteName = Route::currentRouteName(); // Get the current route name

$scriptsLoaded = false;


    $scriptsLoaded = true;
   
    $this->doSomething();
        // dd('it works till here!! $currentRoute¿Name ', $this->currentRouteName  );
     // Get the total count of records
    //  $totalRecords = newdbx::count();
    
     // Determine the number of records to skip
    //  $recordsToSkip = ($page - 1) * $perPage;
    
     // If there are fewer than four records left on the last page,
     // adjust the pagination limit accordingly
    //  $limit = $totalRecords - $recordsToSkip < $perPage ? $totalRecords - $recordsToSkip : $perPage;
    //  dd($limit);
    // dd('begiining',Route::currentRouteName());

    //  $testVar = newdbx::orderBy('created_at', 'desc')->skip($recordsToSkip)->take($limit)->get();
    // dd($testVar);
    $testVar =  $this->readnewdb();
    $testVar_container =  $this->containerread();
    $total_container = $testVar_container->count();
     $total = $testVar->count();
    
    
        // $slicedRecords = $testVar->slice($recordsToSkip, $perPage);
    
        // $jsonResponse = response()->json($testVar);
    
        // $dataArray = json_decode($jsonResponse->getContent(), true);
    
        
            // Create a Paginator instance manually
            // $paginator = new Paginator($slicedRecords, $perPage, $currentPage, [
            //     'path' => Paginator::resolveCurrentPath(),
            //     'pageName' => 'page',
            //     'onEachSide' => ceil($total / $perPage),
            // ]);
            $paginator = new Paginator($testVar, $perPage, $currentPage, [
                'path' => Paginator::resolveCurrentPath(),
                'pageName' => 'page',
                'onEachSide' => ceil($total / $perPage),
            ]);

            $paginator_container = new Paginator($testVar_container, $perPage_container, $currentPage_container, [
                'path' => Paginator::resolveCurrentPath(),
                'pageName' => 'page',
                'onEachSide' => ceil($total_container / $perPage_container),
            ]);
            // livewire.orderdata
        return view('livewire.orderdata', [
            'data' => $this->read(),
            'bdata' => $this->bread(),
            'cdata' => $this->cread(),
            'symdata' => $this->symread(),
            'newdbxdata' => $this->readnewdb(),
            'newReadAjax' => $this->readAjax(),
            'dbxjdata' => $this->readnewdbjdata(),
            'dbz'=>$this->readnewdbZ(),
            'userz'=>$this->returnUsers(),
            'paginator' => $paginator,
            'paginator_container' => $paginator_container,
            'currentRouteName' => $currentRouteName,
            'scriptsLoaded' => $scriptsLoaded,
            'userdb' => $this->getusers(),
            'containerdb' => $this->containerread(),
            

            
         ])->layout('layouts.app', [
                'data' => $this->read(),
                'bdata' => $this->bread(),
                'cdata' => $this->cread(),
                'symdata' => $this->symread(),
                'newdbxdata' => $this->readnewdb(),
                'newReadAjax' => $this->readAjax(),
                'dbxjdata' => $this->readnewdbjdata(),
                'dbz'=>$this->readnewdbZ(),
                'userz'=>$this->returnUsers(),
                'paginator' => $paginator,
                'currentRouteName' => $currentRouteName,
                  'scriptsLoaded' => $scriptsLoaded,
                  'userdb' => $this->getusers(),
                  'containerdb' => $this->containerread(),
                
    
                
             ])
    
             ;

     
    }

    
public function CustomEventContainer(Request $request)
{
    
    
       
        // Your logic here
// print_r('wagwaan');
        // Emit a custom event

       ////////////////////////////////////////////////////// /
        if($request !== null){
            
            $Rdata = json_decode($request['variable1']);


            $indexa = $Rdata->gotoPage;
     $page = $indexa;
     ////////////////////////////
     $perPage = $this->paginateValue_container; // Number of items per page::::::::::::::: change also at containerRead
//realchange paginate() 
       $currentPage = $indexa;
   
    // Get the total count of records
    $totalRecords = Container::count();
   
    // Determine the number of records to skip
    $recordsToSkip = ($page - 1) * $perPage;
   
    // If there are fewer than four records left on the last page,
    // adjust the pagination limit accordingly
    $limit = $totalRecords - $recordsToSkip < $perPage ? $totalRecords - $recordsToSkip : $perPage;
   //  dd($limit);
   $testVarAll = Container::orderBy('created_at', 'desc')->get();
    $testVar = Container::orderBy('created_at', 'desc')->skip($recordsToSkip)->take($limit)->get();
   // dd($testVar);
    $total = Container::count();
   
    $currentPage = Paginator::resolveCurrentPage('page');
 //    dd($currentPage);
       $slicedRecords = $testVar->slice($recordsToSkip, $perPage);
   
       $jsonResponse = response()->json($testVar);
   
       $dataArray = json_decode($jsonResponse->getContent(), true);
//  dd();
             // $currentPage = floor($recordsToSkip / $perPage) + 1;
            //  $resultsFiltered = collect($resultsFiltered);

// Reverse the order of the collection
// $resultsFiltered = $resultsFiltered;
            //  $resultsFiltered = $resultsFiltered->reverse();
            //  $paginator = new LengthAwarePaginator(
            //      Collection::make($resultsFiltered)->forPage($currentPage, 2),
            //      $total,
            //      2,
            //      $currentPage,
            //      ['path' => LengthAwarePaginator::resolveCurrentPath()]
            //  );


            $paginator = new Paginator($testVar, $perPage, $currentPage, [
                'path' => Paginator::resolveCurrentPath(),
                'pageName' => 'page',
                'onEachSide' => ceil($total / $perPage),
            ]);

            // dd('paginatordata', $paginator);
             // dd('testing Alike $search','$resultsFiltered',$resultsFiltered);
         // dd($paginator);
             // dd('aaap',$paginator,$request,$resultsFiltered);

     // Render the pagination links separately
    //  $paginationContent = $paginator->links('vendor.pagination.default')->toHtml();

// dd($paginationLinksHtml);

// dd($result['order_data_logs']['nameAfz']);
             // Output or log the extracted value for each result
             // echo "Extracted Value: $extractedValue\n";
        //  return [$paginator,$paginationLinksHtml];
        return $dataArray;
        dd('jjjjjjjjjjjjjjaaaaaaaaay $Rdata',$Rdata,' $dataArray',$dataArray,'$testVar',$testVar,'$currentPage',$currentPage);

        // return [$paginator, $paginationLinksHtml];
        }
    dd('jjjjjjjjjjjjjjaaaaaaaaay $Rdata',$Rdata,'$testVar',$testVar);

}
    
public function triggerCustomEventBB(Request $request)
{
   
//    $newdbxdata = $this->readnewdb() ;
//     return $newdbxdata;
    $perPage = 1; // Number of items per page
    $currentPage = 1;
$currentRouteName='';
    $this->currentRouteName = Route::currentRouteName(); // Get the current route name

// $scriptsLoaded = false;


// $scriptsLoaded = true;

$testVarrrax = newdbx::orderBy('id',  'desc')->get('order_data_logs');
//   $testVarID = newdbx::orderBy('id',  'desc')->get('id');

  $testVarOBC = $testVarrrax ->toArray();
//   $desiredDiv = $testVar->toHtml();
//   dd($desiredDiv);
  $testVarID = newdbx::orderBy('id',  'desc')->get('order_data_logs');


  $testVarOCC = $testVarID->toArray();
  
 
$this->testEncode = $testVarOBC;


$this->testEncodeID = $testVarOCC;

$testVar =  $this->readnewdb();
 $total = $testVar->count();

//  dd('okki',$testVarOCC);
    // $slicedRecords = $testVar->slice($recordsToSkip, $perPage);

    // $jsonResponse = response()->json($testVar);

    // $dataArray = json_decode($jsonResponse->getContent(), true);

    // $this->testEncode = $testVar;
        // Create a Paginator instance manually
        // $paginator = new Paginator($slicedRecords, $perPage, $currentPage, [
        //     'path' => Paginator::resolveCurrentPath(),
        //     'pageName' => 'page',
        //     'onEachSide' => ceil($total / $perPage),
        // ]);
        $paginator = new Paginator($testVar, $perPage, $currentPage, [
            'path' => Paginator::resolveCurrentPath(),
            'pageName' => 'page',
            'onEachSide' => ceil($total / $perPage),
        ]);
    
        // livewire.orderdata

// return 
 $html = view('livewire.orderdata', [
            'data' => $this->read(),
            'newdbxdata' => $this->readnewdb(),
            'newReadAjax' => $this->readAjax(),
            'dbxjdata' => $this->readnewdbjdata(),
            'dbz' => $this->readnewdbZ(),
            'userz' => $this->returnUsers(),
            'paginator' => $paginator,
            'currentRouteName' => $currentRouteName,
            'userdb' => $this->getusers(),

            
            
        ])
        // ->layout('layouts.app', [
        //     'data' => $this->read(),
        //     'bdata' => $this->bread(),
        //     'cdata' => $this->cread(),
        //     'symdata' => $this->symread(),
        //     'newdbxdata' => $this->readnewdb(),
        //     'newReadAjax' => $this->readAjax(),
        //     'dbxjdata' => $this->readnewdbjdata(),
        //     'dbz'=>$this->readnewdbZ(),
        //     'userz'=>$this->returnUsers(),
        //     // 'paginator' => $paginator,
        //     'currentRouteName' => $currentRouteName,
        //     //   'scriptsLoaded' => $scriptsLoaded,
            

            
        // ])
         ->render();
        //         dd('test this shizzle');
    
        return response()->json(['html' => $html]);
 
}

    public function updatedNewdbxdata()
    {
        $this->emit('paginationLinksUpdated', $this->newdbxdata->links('vendor.pagination.default')->toHtml());
    }

    // public function render()
    // {
    //     return view('livewire.orderdata');
    // }
}


//////////////////////////////////// BEGIN CODE EXTRA

//   class YourLivewireComponent extends LivewireComponent
//     {
//         public function yourMethod()
//         {
//             dd('testt');
//         }
//     }




/////////////////////////////////////  END CODE