<?php

namespace App\Http\Livewire;
use Livewire\WithPagination;
use App\Models\Order;
use App\Models\Page;
use App\Models\UserPermission;
use App\Models\Container;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
// use Illuminate\Support\Collection;

use Illuminate\Database\Eloquent\Collection;

use Livewire\Component;


class Orders extends Component
{

    use WithPagination;
    public $urlslug;
    public $title;
    public $content;


    public $modalFormVisible;
    public $modalConfirmDeleteVisible;

    public $modalFormVisibleb;
    public $modalConfirmDeleteVisibleb;

    public $modelId;

  
    public $name;
    public $phone;
    public $address;

    
    public $search;
       
    public $product_name;
    public $product_id;


    public $nameAfz;
    public $nameOntv;
    public $addressAfz;
    
    public $emailAfz;
    public $emailOntv;
    

    

    
    public  $addressOntv;
       

    public $verpakt;
    public $price;
    public $quantity;


       
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

    public $user_id;
    public $created_at;
    public $updated_at;
 


  

       
    /**
     * mount
     *
     * @param  mixed $urlslug
     * @return void
     */
    public function mount($urlslug = null)
    {
//  $this->wata ='okiddom';
$this->wata = Order::where('send_order_id','like', '%'.'252'.'%' )->orderBy('id', 'desc')->first();
        // $this->urlslug = $urlslug;
        // $this->urlslug = $test;
        $this->retrieveContent($urlslug);
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
    private function sideBarLinks()
    {
        return DB::table('navigation_menus')
            ->where('type', '=', 'SidebarNav')
            ->orderBy('sequence', 'asc')
            ->orderBy('created_at', 'asc')
            ->get();
    }

    /**
     * Get the top navigation links.
     *
     * @return void
     */
    private function topNavLinks()
    {
        return DB::table('navigation_menus')
            ->where('type', '=', 'TopNav')
            ->orderBy('sequence', 'asc')
            ->orderBy('created_at', 'asc')
            ->get();
    }




public function rules(){



    return [
        'product_name' => 'required',
        'quantity' => 'required',
        'price' => 'required',
        
    
    ];
    
    
    }

public function storejsondata(Request $request){
    // error_log(request('extraverpakking'));
// dd('aaap');
    // return redirect('/')->with('msg', 'thanks you');
    // return request('extraverpakking');
    // $request->serverMemo['data']['extraverpakking'];
    $bla = $request->input('extraverpakking');
    dd($bla);


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

public function create(){
    $this->validate();

    Order::create($this->modelData());
    $this->modalFormVisible = false;
    $this->reset();
}

  /**
 * read
 *
 * @return void
 */
public function cread(){
    // return Clients::paginate(5);

   
      
     
        return  Container::orderBy('id', 'desc')->paginate(5);
     
    
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
        Order::orderBy('id', 'desc')->paginate(5);
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

// return redirect()->back();

// }




    public function render()
    {


        return view('livewire.orders', [
            'sideBarLinks' => $this->sideBarLinks(),
            'topNavLinks' => $this->topNavLinks(),
            'data' => $this->read(),
            'bdata' => $this->bread(),
            'cdata' => $this->cread(),
            
        ])->layout('layouts.orders');

      
    }

}
