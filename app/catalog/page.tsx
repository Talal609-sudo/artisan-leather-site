'use client';
import { useMemo, useState } from 'react';
import ProductCard, { type Product } from '../../components/ProductCard';
import products from '../../data/products.json';


const categories = ['all', 'jacket', 'hoodie', 'wallet', 'bag'];

export default function CatalogPage() {
  const [filter, setFilter] = useState('all');
  const filtered = useMemo(() => filter === 'all' ? (products as Product[]) : (products as Product[]).filter(p => p.category === filter), [filter]);
  return (
    <div className="py-8">
      <h1 className="text-3xl font-semibold">Catalog</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map(c => (
          <button key={c} className={`btn ${filter === c ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter(c)}>
            {c[0].toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">

        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
