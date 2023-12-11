import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{

  public name:string = "";
  public price:number = 0;
  public isFreeDelivery:boolean = false;
  public term:string="";

  public products:any = [
    {name:'pen',price:20,isFreeDelivery:false},
    {name:'shirt',price:1200,isFreeDelivery:true},
    {name:'mobile',price:20000,isFreeDelivery:false},
    {name:'laptop',price:55000,isFreeDelivery:true},
  ]

  sumbit(){
    this.products.push(
      {
        name: this.name,
        price: this.price,
        isFreeDelivery: this.isFreeDelivery
      }
    )
  }

  below500(){
    this.products = this.products.filter((product:any)=>product.price<=500);
  }

  addCharges(){
    this.products = this.products.map((product:any)=>{
      product.price = product.price+20;
      return product;
    })
  }

  priceHighToLow(){
    this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
  }

  totalPrice(){
    var total = this.products.reduce((sum:any,a:any)=>sum+a.price,0);
    alert("Total price is "+total);
  }

  delete(i:number){
    this.products.splice(i,1);
  }

  search(){
    this.products = this.products.filter((product:any)=>product.name.includes(this.term))
  }

}
