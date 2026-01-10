import React, { useEffect, useState, useContext, memo } from 'react';
import { LanguageContext } from '../utills/LanguageContext';

/**
  * Component to display the current date and time with localization support, updating every second.
  * @returns {JSX.Element} displaying the formatted date and time.
*/

function DateTimeDisplay() {
  const { Language } = useContext(LanguageContext);
  const [date, setDate] = useState(new Date());

  // Update the date every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formating date according to current language
  const formattedDate = date.toLocaleString(
    Language === "en" ? "en-US" : "id-ID",
    {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'}
  );

  return (
    <div className="text-lg font-semibold">
      {formattedDate}
    </div>
  );
}

export default memo(DateTimeDisplay);