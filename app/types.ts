import { productProps } from "@/components/product";


export interface RootState {
    products: productProps[],
    wishList: productProps[],
}
