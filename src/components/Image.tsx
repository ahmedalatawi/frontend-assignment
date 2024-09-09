import { lazy, Suspense } from "react";
import Spinner from "./Spinner";

type Props = {
  name: string;
  className: string;
};

export default function Image({ name, className }: Props) {
  const Svg = lazy(() => import(`../assets/products/${name}.svg?react`));

  return (
    <Suspense fallback={<Spinner />}>
      <Svg alt={name} className={className} />
    </Suspense>
  );
}
