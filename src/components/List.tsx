import { Product } from "../types";
import ListItem from "./ListItem";

interface Props {
  products: Product[];
  onSelect: (product: Product) => void;
}

export default function List({ products, onSelect }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <ListItem key={product.id} product={product} onSelect={onSelect} />
      ))}
    </ul>
  );
}
