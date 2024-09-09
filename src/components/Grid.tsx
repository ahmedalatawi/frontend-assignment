import { Product } from "../types";
import GridItem from "./GridItem";

interface Props {
  products: Product[];
  onSelect: (product: Product) => void;
}

export default function Grid({ products, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {products.map((product) => (
        <GridItem
          key={product.id}
          product={product}
          onSelect={() => onSelect(product)}
        />
      ))}
    </div>
  );
}
