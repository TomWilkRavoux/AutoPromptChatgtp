import React, { useState } from 'react';

const Toogle = () => {
    // const options = ["Natif","" ,"Framework"];
    const [enabled, setEnabled] = useState(0);

    return (
            <div className="relative inline-block">
                <button
                    onClick={() => setEnabled(!enabled)}
                    className={`relative w-12 h-6 flex items-center rounded-full border-2 transition-colors duration-300 ${
                        enabled ? "border-blue-600 bg-blue-600" : "border-gray-400 bg-white"
                    }`}
                    title={enabled ? "Framework" : "Natif"}                 // Tooltip natif
                >
                    
                    <div
                        className={`absolute left-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
                        enabled ? "translate-x-6" : "translate-x-0"
                        }`}
                    />
                </button>
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md px-2 py-1 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {enabled ? "Désactiver" : "Activer"}
                </span>
            </div>

    //     <button
    //         onClick={() => setEnabled(!enabled)}
    //         className={`relative w-12 h-6 flex items-center rounded-full border-2 transition-colors duration-300 ${
    //             enabled ? "border-blue-600 bg-blue-600" : "border-gray-400 bg-white"
    //         }`}
    //         >
    //         {/* Rond du switch */}
    //         <div
    //             className={`absolute left-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
    //             enabled ? "translate-x-6" : "translate-x-0"
    //             }`}
    //         />
    //     </button>
    );
};

export default Toogle;