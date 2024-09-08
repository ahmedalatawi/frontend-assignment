import { Product } from "../types";
import GridItem from "./GridItem";

interface Props {
  products: Product[];
  onSelect: (product: Product) => void;
}

export default function Grid({ products, onSelect }: Props) {
  return (
    <div className="font-sans pt-7 pb-16 mx-auto lg:max-w-7xl max-w-lg md:max-w-full px-8">
      <h2 className="text-xl font-semibold text-white mb-5">All Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <GridItem
            key={product.id}
            product={product}
            onSelect={() => onSelect(product)}
          />
        ))}
      </div>
    </div>
  );
}
