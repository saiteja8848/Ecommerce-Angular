export class Product {
    public productId: number;
    public name: string;
    public price: number;
    public quantity: number;
    public imageUrl: string;
    public counter: number = 0;
    public clickStatus: boolean = false;

    public setProductId(productId: number) {
        this.productId = productId;
    }

    public setProductName(productName: string) {
        this.name = productName;
    }

    public setProductPrice(productPrice: number) {
        this.price = productPrice;
    }

    public setProductQuantity(productQuantity: number) {
        this.quantity = productQuantity;
    }

    public setProductImageUrl(productImageUrl: string) {
        this.imageUrl = productImageUrl;
    }

}