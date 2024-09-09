import { lazy, Suspense } from "react";

type Props = {
  name: string;
  className: string;
};

export default function Image({ name, className }: Props) {
  const Svg = lazy(() => import(`../assets/products/${name}.svg?react`));

  return (
    <Suspense fallback={<span className="text-white">Image loading...</span>}>
      <Svg alt={name} className={className} />
    </Suspense>
  );
}
