import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
  providers: [ ProductService ]
})
export class ProductDescriptionComponent implements OnInit {

  private albumInfo: Album;
  constructor( private _productService: ProductService) {

  }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response)
  }

}
