import { Subcategory } from './Subcategory';
export class Category {
    public categoryId: number;
    public categoryName: string;
    public subcategorys: Subcategory[];

    public setCategoryId(categoryId: number) {
        this.categoryId = categoryId;
    }

    public getCategoryId(): number {
        return this.categoryId;
    }

    public setCategoryName(categoryName: string) {
        this.categoryName = categoryName;
    }
    public setSubCategorys(subcategorys: Subcategory[]) {
        this.subcategorys = subcategorys;
    }
}