import { useEffect } from 'react';

const GoogleAnalytics = () => {
    useEffect(() => {
        // Check if the script is already present to prevent duplicates
        if (document.querySelector('script[src="https://www.googletagmanager.com/gtag/js?id=G-EE9XJYSY1Q"]')) {
            return;
        }

        // Create the script for the source
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = "https://www.googletagmanager.com/gtag/js?id=G-EE9XJYSY1Q";
        document.head.appendChild(script1);

        // Create the inline script
        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-EE9XJYSY1Q');
    `;
        document.head.appendChild(script2);
    }, []);

    return null;
};

export default GoogleAnalytics;
