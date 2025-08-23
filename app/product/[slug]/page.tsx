import { notFound } from 'next/navigation';
import products from '../../../data/products.json';

type Params={params:{slug:string}};
export async function generateStaticParams(){ return (products as any[]).map(p=>({slug:p.slug})); }
export default function ProductPage({params}:Params){
  const product=(products as any[]).find(p=>p.slug===params.slug);
  if(!product) return notFound();
  const firstImg=product.images[0];
  return (
    <div className="py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="card overflow-hidden"><img src={firstImg} alt={product.title} className="h-full w-full object-cover"/></div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-sm text-black/70">{product.shortDescription}</p>
          {typeof product.pricePKR==='number' && <p className="text-xl font-semibold">PKR {product.pricePKR.toLocaleString()}</p>}
          <div className="flex gap-3 pt-2">
            <a href="https://wa.me/10000000000" className="btn btn-primary">WhatsApp to Order</a>
            <a href="mailto:info@artisanco.com" className="btn btn-outline">Email Us</a>
          </div>
          <ul className="mt-6 list-disc pl-6 text-sm text-black/70">
            <li>Handmade • Premium leather</li>
            <li>Comfort lining, durable stitching</li>
            <li>Care: spot clean with leather balm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
