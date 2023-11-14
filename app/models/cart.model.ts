export interface Cart{
  items:Array<CartItem>;
}


export interface LeaderCart{
  items:Array<LeaderCartItem>;
}

export interface CartItem{
  product:string;
  name:string;
  price:number;
  quantity:number;
  id:number;
}

export interface LeaderCartItem{
  product:string;
  name:string;
  price:number;
  quantity:number;
  id:number;
}