import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#fff5f1]">
      <div className="container-page py-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4 md:max-w-sm">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/Nero-Arancio.png"
                alt="Nemo Web Agency"
                className="h-8 w-auto"
              />
            </Link>
            <p>
              Nemo Web Agency unisce design, sviluppo e strategia digitale in
              soluzioni web su misura, pensate per far crescere il tuo business
              online.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:flex-1 md:justify-end">
            <div>
              <h3 className="mb-3 font-semibold text-slate-900">Navigazione</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chi-siamo"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    Chi siamo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servizi"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    Servizi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contatti"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    Contatti
                  </Link>
                </li>
                <li>
                  <Link
                    to="/richiedi-preventivo"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    Richiedi preventivo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-slate-900">Link utili</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/termini-condizioni"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    Termini e condizioni
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookie-policy"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    className="transition-colors hover:text-[#ff7351]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-slate-900">Contatti</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <a
                    href="mailto:nemowebagency@gmail.com"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    nemowebagency@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <a
                    href="tel:+393465745184"
                    className="transition-colors hover:text-[#ff7351]"
                  >
                    +39 346 574 5184
                  </a>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.instagram.com/nemowebagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Nemo Web Agency"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:border-[#ff7351] hover:text-[#ff7351]"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61574662467359&locale=it_IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Nemo Web Agency"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:border-[#ff7351] hover:text-[#ff7351]"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/393465745184"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Nemo Web Agency"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:border-[#ff7351] hover:text-[#ff7351]"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-4 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>
              Copyright © {new Date().getFullYear()} Nemo Web Agency. Tutti i
              diritti riservati.
            </p>
          </div>

          <nav
            aria-label="Link legali e utili"
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
          >
            <Link
              to="/privacy"
              className="transition-colors hover:text-[#ff7351]"
            >
              Norme sulla privacy
            </Link>
            <Link
              to="/cookie-policy"
              className="transition-colors hover:text-[#ff7351]"
            >
              Utilizzo dei cookie
            </Link>
            <a
              href="/sitemap.xml"
              className="transition-colors hover:text-[#ff7351]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mappa del sito
            </a>
            <Link
              to="/termini-condizioni"
              className="transition-colors hover:text-[#ff7351]"
            >
              Termini e condizioni
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
