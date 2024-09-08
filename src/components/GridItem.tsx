import { Product } from "../types";

interface Props {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function GridItem({ product, onSelect }: Props) {
  const { name, description, price, image, badges } = product;

  return (
    <div className="bg-dark h-[412px] lg:h-[432px] md:h-full sm:h-full xxs:h-full flex flex-col justify-between rounded-xl border border-borderColor hover:scale-[1.05] transition-all relative overflow-hidden">
      <div>
        <div>{image}</div>
        <div className="flex flex-col gap-3 p-4">
          <h4 className="text-base text-white font-normal">${price}</h4>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-medium text-white">{name}</h2>
            <p className="text-secondary text-xs font-normal">{description}</p>
          </div>
          <div className="flex text-xs text-white font-normal gap-1">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="rounded-[360px] border border-borderColorLight py-0.5 px-1.5"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <button
          type="button"
          onClick={() => onSelect(product)}
          className="w-full flex items-center justify-center py-3 border border-white text-base text-white font-medium cursor-pointer rounded-lg hover:opacity-75"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
