import Link from 'next/link';
export type Product = { id: string; slug: string; title: string; category: string; shortDescription: string; pricePKR?: number; badges?: string[]; images: string[]; }
export default function ProductCard({ product }: { product: Product }) {
  const firstImg = product.images[0];
  return (
    <Link href={`/product/${product.slug}`} className="card overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={firstImg}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {product.badges?.map((b, i) => (
          <span key={i} className="badge">{b}</span>
        ))}
      </div>

      <div className="space-y-1 p-4">
        <h3 className="text-sm font-semibold">{product.title}</h3>
        <p className="text-xs text-black/60">{product.shortDescription}</p>
        {typeof product.pricePKR === 'number' && <p className="pt-1 text-sm font-semibold">PKR {product.pricePKR.toLocaleString()}</p>}
      </div>
    </Link>
  );
}
