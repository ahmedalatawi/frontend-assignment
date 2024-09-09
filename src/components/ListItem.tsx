import Image from "./Image";
import { Product } from "../types";

interface Props {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ListItem({ product, onSelect }: Props) {
  const { name, description, price, image, badges } = product;

  return (
    <li className="pt-4">
      <div className="flex items-center space-x-3 rtl:space-x-reverse rounded-xl border bg-dark border-borderColor p-3">
        <Image name={image} className="w-7 h-7 rounded-lg" />

        <p className="text-base font-medium text-white">{name}</p>

        <div className="flex-1 min-w-0">
          <div className="hidden sm:flex items-center justify-around gap-2 text-xs font-normal">
            <p className="truncate text-secondary">{description}</p>
            <div className="flex items-center gap-1">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="rounded-[360px] text-white border border-borderColorLight py-0.5 px-1.5"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-white">
          <span className="font-normal">${price}</span>
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="py-2 px-4 border border-white font-medium cursor-pointer rounded-lg hover:opacity-75"
          >
            View Details
          </button>
        </div>
      </div>
    </li>
  );
}
