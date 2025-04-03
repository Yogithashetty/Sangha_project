import React from "react";

const KannadaTextGrid: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-xl font-bold mb-6">ಕನ್ನಡತೆ ದೃಷ್ಟಿ ವ್ಯಾಖ್ಯಾ</h1>
      <div className="grid grid-cols-3 gap-8 text-center text-lg">
        <div>ಬೆಂಗಳೂರು ಉತ್ತರ</div>
        <div>ಬೆಂಗಳೂರು ದಕ್ಷಿಣ</div>
        <div>ಮಂಗಳೂರು</div>
        <div>ಹಾಸನ</div>
        <div>ಮೈಸೂರು</div>
        <div>ಕೋಲಾರ</div>
      </div>
    </div>
  );
};

export default KannadaTextGrid;
