// src/components/WhovaAgenda.js

import React, { useEffect } from 'react';

const WhovaAgenda = () => {
  const whovaScriptUrl = "https://whova.com/static/frontend/xems/js/embed/embedagenda.js?eid=IFdnyZrwLbH67w3FIfuAO-dVynWi058nPp86kVvXP9c%3D&host=https://whova.com";

  useEffect(() => {
    const script = document.createElement('script');
    
    // Set the source, type, and ID from the Whova snippet
    script.src = whovaScriptUrl;
    script.type = 'text/javascript';
    script.id = 'embeded-agenda-script';
    
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Find the script by its ID and remove it
      const existingScript = document.getElementById('embeded-agenda-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [whovaScriptUrl]); // The effect will re-run if the script URL changes

  return (
    <div>
      <div title="Whova event and conference app" id="whova-agendawidget">
        <p id="whova-loading">Loading...</p>
      </div>
    </div>
  );
};

export default WhovaAgenda;