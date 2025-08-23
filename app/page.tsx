import Link from 'next/link';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';


export default function HomePage() {
  const bestSellers = (products as any[]).slice(0, 4);
  return (
    <div className="space-y-16 pb-16">
      <section className="relative overflow-hidden rounded-3xl">
        <div className="relative grid gap-6 px-6 py-20 md:grid-cols-2 md:px-12">
          <div className="space-y-4">
            <h1 className="text-logo text-4xl font-bold md:text-5xl">Handcraft Leather Jackets & Accessories</h1>
            <p className="text-lg text-black/70">Premium, durable leather goods made in Sialkot.</p>
            <div className="flex gap-3 pt-2">
              <Link href="/catalog" className="btn btn-primary">Explore Collection</Link>
              <a href="https://wa.me/10000000000" className="btn btn-outline">WhatsApp Us</a>
            </div>
          </div>
          <div className="block bg-[#dddddd] p-4 rounded-xl">
            <img
              src="/images/products/jacket-1.avif"
              alt="Featured bag"
              className="block mx-auto w-80 h-auto"
            />
          </div>



        </div>
      </section>
      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Best Sellers</h2>
          <Link className="text-sm font-medium text-black/70 hover:text-black" href="/catalog">View all</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bestSellers.map((p: any) => (<ProductCard key={p.id} product={p} />))}
        </div>
      </section>
      <section className="grid gap-8 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="mt-2 text-sm text-black/70">Founded in Sialkot, Artisan Leather & Co. focuses on durable, timeless leather goods. Our pieces are handmade with attention to detail—built to last, and designed for everyday use.</p>
          <p className="mt-2 text-sm text-black/70">We use quality materials and classic techniques to deliver comfort, function, and style.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Have a question?</h3>
          <p className="mt-2 text-sm text-black/70">Need sizing help or a custom request? Message us anytime.</p>
          <a href="https://wa.me/10000000000" className="mt-4 inline-block btn btn-primary">WhatsApp Us</a>
        </div>
      </section>
    </div>
  );
}
