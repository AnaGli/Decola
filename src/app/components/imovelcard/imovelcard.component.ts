import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovelcard',
  templateUrl: './imovelcard.component.html',
  styleUrls: ['./imovelcard.component.css']
})
export class ImovelcardComponent implements OnInit {
  imgUrl2: string = "../../assets/img1.png"
  imgUrl: string = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hurb.com%2Fbr%2Fhotels&psig=AOvVaw0cY9VCT1L5JIrLHr2Jk2LM&ust=1600292865780000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjM29aR7OsCFQAAAAAdAAAAABAD";
  adress: 'Cabo Frio - RJ'
  price = 5000000;
  owner = 'João garcia';
  type = 'Venda';

  constructor() { }

  ngOnInit(): void {
  }

}
