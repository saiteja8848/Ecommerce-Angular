import { Product } from './Product';
export class Subcategory {
  public subcategoryId: number;
  public subCategoryName: string;
  public products: Product[];

  public setSubCategoryId(subcategoryId: number) {
    this.subcategoryId = subcategoryId;
  }
  public setCategoryName(subCategoryName: string) {
    this.subCategoryName = subCategoryName;
  }
  public setSubCategorys(products: Product[]) {
    this.products = products;
  }
}
