import Link from 'next/link';
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      <div className="container grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold">Artisan Leather & Co.</h4>
          <p className="mt-2 text-sm text-black/70">Khadim Ali Road, Sialkot</p>
          <p className="mt-2 text-sm"><a href="mailto:info@artisanco.com" className="footer-link">info@artisanco.com</a></p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Support</h4>
          <ul className="mt-2 space-y-2">
            <li><Link className="footer-link" href="/policy/shipping-returns">Shipping & Returns</Link></li>
            <li><Link className="footer-link" href="/faq">FAQ</Link></li>
            <li><Link className="footer-link" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Get in touch</h4>
          <p className="mt-2 text-sm text-black/70">Questions or a custom request?</p>
          <a href="https://wa.me/923324217162" className="mt-3 inline-block btn btn-outline">WhatsApp Us</a>
        </div>
      </div>
      <div className="border-t border-black/10 py-4 text-center text-xs text-black/60">© {new Date().getFullYear()} Artisan Leather & Co. All rights reserved.</div>
    </footer>
  );
}
