import { Component, OnInit } from "@angular/core";
import { IProduct, Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number=50;
    imageMargin: number=2;
    showImage: boolean=false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        // if there isn't any filter, we show all the product
        this.filteredProducts = this.listFilter ? this.performFilter (this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] =[];

    constructor(private productService: ProductService){

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: '+ message;
    }

    // filter the search
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this.productService.getProducts().subscribe(
            products =>{
                this.products = products;
                this.filteredProducts = this.products;
            }, 
            
            // any is a casting operator
            error => this.errorMessage = <any>error
        );
        

    }

}