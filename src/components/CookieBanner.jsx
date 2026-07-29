import { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setConsent(savedConsent);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setConsent('accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setConsent('rejected');
    setShowBanner(false);
  };

  const handleOpenBanner = () => {
    setShowBanner(true);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  if (showBanner) {
    return (
      <div className="fixed bottom-0 left-0 z-50 w-full md:bottom-4 md:left-4 md:w-auto md:max-w-md">
        <div className="m-4 rounded-lg border border-gray-200 bg-white p-6 shadow-2xl md:m-0">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Cookie className="text-[#ff7351]" size={24} />
              <h3 className="text-lg font-bold text-gray-900">
                Gestione Cookie
              </h3>
            </div>
            <button
              type="button"
              onClick={handleCloseBanner}
              className="text-gray-400 transition-colors hover:text-gray-600"
              aria-label="Chiudi banner"
            >
              <X size={20} />
            </button>
          </div>

          <p className="mb-6 text-sm text-gray-700">
            Questo sito utilizza cookie tecnici necessari per il funzionamento.
            Non utilizziamo cookie di profilazione o marketing. Puoi gestire le
            tue preferenze in qualsiasi momento.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 rounded-xl bg-[#ff7351] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#e66341]"
            >
              Accetta
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="flex-1 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
            >
              Rifiuta
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/cookie-policy"
              className="text-xs text-gray-500 underline transition-colors hover:text-[#ff7351]"
            >
              Maggiori informazioni
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (consent) {
    return (
      <button
        type="button"
        onClick={handleOpenBanner}
        className="group fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-lg transition-all duration-300 hover:shadow-xl"
        aria-label="Gestisci preferenze cookie"
      >
        <Settings
          size={16}
          className="text-[#ff7351] transition-transform duration-300 group-hover:rotate-90"
        />
        <span className="text-xs text-gray-700">
          {consent === 'accepted' ? 'Cookie accettati' : 'Cookie rifiutati'}
        </span>
      </button>
    );
  }

  return null;
};

export default CookieBanner;
