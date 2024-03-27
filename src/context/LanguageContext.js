// import { createContext, useContext, useState } from 'react';

// const LanguageContext = createContext();

// export const useLanguage = () => {
//     return useContext(LanguageContext);
// };

// export const LanguageProvider = ({ children }) => {
//     const [isEnglish, setIsEnglish] = useState(true);

//     const toggleLanguage = () => {
//         setIsEnglish(prevIsEnglish => !prevIsEnglish);
//     };

//     return (
//         <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
//             {children}
//         </LanguageContext.Provider>
//     );
// };
