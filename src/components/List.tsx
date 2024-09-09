import { Product } from "../types";
import ListItem from "./ListItem";

interface Props {
  products: Product[];
  onSelect: (product: Product) => void;
}

export default function List({ products, onSelect }: Props) {
  return (
    <div className="font-sans pt-7 pb-16 mx-auto lg:max-w-7xl md:max-w-full px-8">
      <ul>
        {products.map((product) => (
          <ListItem key={product.id} product={product} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
}
