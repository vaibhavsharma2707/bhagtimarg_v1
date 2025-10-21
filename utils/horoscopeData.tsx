export interface CategoryPrediction {
  en: string;
  hi: string;
}

export interface Horoscope {
  love: CategoryPrediction;
  career: CategoryPrediction;
  health: CategoryPrediction;
  finance: CategoryPrediction;
  spirituality: CategoryPrediction;
}

// Expanded phrases (15–20 each)
const phrases = {
  love: [
    { en: "Romance is in the air today.", hi: "आज रोमांस का माहौल है।" },
    { en: "A conversation could bring you closer.", hi: "एक बातचीत आपको करीब ला सकती है।" },
    { en: "Show appreciation to your loved ones.", hi: "अपने प्रियजनों की सराहना दिखाएँ।" },
    { en: "Unexpected attraction may happen.", hi: "अनपेक्षित आकर्षण हो सकता है।" },
    { en: "Trust your heart in decisions.", hi: "निर्णयों में अपने दिल पर भरोसा करें।" },
    { en: "New friendships spark excitement.", hi: "नई दोस्ती उत्साह पैदा कर सकती है।" },
    { en: "Romantic gestures bring joy.", hi: "रोमांटिक इशारे खुशी लाएंगे।" },
    { en: "Express your feelings openly.", hi: "अपने भावनाओं को खुले तौर पर व्यक्त करें।" },
    { en: "Love may need patience today.", hi: "आज प्यार में धैर्य की जरूरत हो सकती है।" },
    { en: "Heart-to-heart talk clears misunderstandings.", hi: "दिल से दिल की बात गलतफहमियों को दूर करती है।" },
    { en: "Cherish small moments together.", hi: "छोटे पल भी साथ में मनाएं।" },
    { en: "Be honest about your emotions.", hi: "अपने भावनाओं में ईमानदार रहें।" },
    { en: "A surprise message brings happiness.", hi: "एक अप्रत्याशित संदेश खुशी लाएगा।" },
    { en: "Show kindness to your partner.", hi: "अपने साथी के प्रति दयालुता दिखाएँ।" },
    { en: "Shared laughter strengthens bonds.", hi: "साझा हंसी रिश्तों को मजबूत करती है।" },
  ],
  career: [
    { en: "Opportunities for growth are coming.", hi: "विकास के अवसर आ रहे हैं।" },
    { en: "Stay focused on your tasks.", hi: "अपने कार्यों पर ध्यान दें।" },
    { en: "Networking could bring unexpected benefits.", hi: "नेटवर्किंग अप्रत्याशित लाभ ला सकती है।" },
    { en: "A new project requires your attention.", hi: "एक नया प्रोजेक्ट आपका ध्यान मांगता है।" },
    { en: "Your creativity will be noticed.", hi: "आपकी रचनात्मकता पर ध्यान जाएगा।" },
    { en: "Be cautious with deadlines.", hi: "समय सीमा के साथ सतर्क रहें।" },
    { en: "Collaboration leads to success.", hi: "सहयोग सफलता की कुंजी है।" },
    { en: "Take initiative today.", hi: "आज पहल करें।" },
    { en: "Learning new skills pays off.", hi: "नई कौशल सीखना लाभदायक होगा।" },
    { en: "Your ideas may inspire others.", hi: "आपके विचार दूसरों को प्रेरित कर सकते हैं।" },
    { en: "Avoid office gossip.", hi: "कार्यालय की अफवाहों से बचें।" },
    { en: "Hard work leads to recognition.", hi: "कड़ी मेहनत से पहचान मिलेगी।" },
    { en: "Stay calm in stressful situations.", hi: "तनावपूर्ण परिस्थितियों में शांत रहें।" },
    { en: "Your leadership will shine.", hi: "आपकी नेतृत्व क्षमता चमकेगी।" },
    { en: "Plan carefully before decisions.", hi: "निर्णयों से पहले सावधानीपूर्वक योजना बनाएं।" },
  ],
  health: [
    { en: "Take time to rest and rejuvenate.", hi: "आराम करने और ताजगी पाने के लिए समय निकालें।" },
    { en: "Hydration is key today.", hi: "आज पानी पीना महत्वपूर्ण है।" },
    { en: "A light workout can boost your energy.", hi: "हल्की कसरत आपकी ऊर्जा बढ़ा सकती है।" },
    { en: "Pay attention to your diet.", hi: "अपने आहार पर ध्यान दें।" },
    { en: "Mental peace is as important as physical health.", hi: "मानसिक शांति शारीरिक स्वास्थ्य जितनी महत्वपूर्ण है।" },
    { en: "Meditation brings clarity.", hi: "ध्यान स्पष्टता लाता है।" },
    { en: "Avoid overexertion.", hi: "अत्यधिक मेहनत से बचें।" },
    { en: "Get sufficient sleep.", hi: "पर्याप्त नींद लें।" },
    { en: "Small health routines make a difference.", hi: "छोटी स्वास्थ्य आदतें बड़ा फर्क डालती हैं।" },
    { en: "Stay mindful of posture.", hi: "अपनी मुद्रा का ध्यान रखें।" },
    { en: "Fresh air will refresh your mind.", hi: "ताजी हवा आपके मन को ताजगी देगी।" },
    { en: "Avoid excessive screen time.", hi: "अत्यधिक स्क्रीन समय से बचें।" },
    { en: "Nature walks are beneficial.", hi: "प्रकृति में टहलना लाभकारी है।" },
    { en: "Positive thinking aids well-being.", hi: "सकारात्मक सोच स्वास्थ्य में मदद करती है।" },
    { en: "Small meditation breaks help focus.", hi: "छोटे ध्यान के समय ध्यान केंद्रित करने में मदद करते हैं।" },
  ],
  finance: [
    { en: "Keep an eye on your expenses.", hi: "अपने खर्चों पर ध्यान रखें।" },
    { en: "A small saving today helps tomorrow.", hi: "आज थोड़ी बचत कल मदद करेगी।" },
    { en: "Avoid impulsive purchases.", hi: "आकस्मिक खरीदारी से बचें।" },
    { en: "Check for unexpected bills.", hi: "अनपेक्षित बिलों के लिए जाँच करें।" },
    { en: "Financial planning pays off.", hi: "वित्तीय योजना लाभदायक होती है।" },
    { en: "Seek advice before big investments.", hi: "बड़ी निवेश से पहले सलाह लें।" },
    { en: "Review your budget.", hi: "अपने बजट की समीक्षा करें।" },
    { en: "Opportunities for gains may appear.", hi: "लाभ के अवसर सामने आ सकते हैं।" },
    { en: "Avoid lending money today.", hi: "आज पैसे उधार देने से बचें।" },
    { en: "Track small expenditures.", hi: "छोटे खर्चों को ट्रैक करें।" },
    { en: "Invest in knowledge.", hi: "ज्ञान में निवेश करें।" },
    { en: "Caution is needed in transactions.", hi: "लेन-देन में सावधानी आवश्यक है।" },
    { en: "Unexpected income may occur.", hi: "अनपेक्षित आय हो सकती है।" },
    { en: "Charity brings positive returns.", hi: "दान से सकारात्मक परिणाम मिलते हैं।" },
    { en: "Financial patience pays off.", hi: "वित्तीय धैर्य लाभदायक होता है।" },
  ],
  spirituality: [
    { en: "Meditation can bring clarity.", hi: "ध्यान स्पष्टता ला सकता है।" },
    { en: "Reflect on your inner goals.", hi: "अपने आंतरिक लक्ष्यों पर विचार करें।" },
    { en: "Gratitude will attract positivity.", hi: "कृतज्ञता सकारात्मकता लाएगी।" },
    { en: "Seek moments of silence.", hi: "चुप्पी के क्षण खोजें।" },
    { en: "Read something inspiring today.", hi: "आज कुछ प्रेरणादायक पढ़ें।" },
    { en: "Connect with nature.", hi: "प्रकृति से जुड़ें।" },
    { en: "Help someone selflessly.", hi: "किसी की निस्वार्थ मदद करें।" },
    { en: "Practice mindfulness.", hi: "सजगता का अभ्यास करें।" },
    { en: "Positive affirmations guide your day.", hi: "सकारात्मक पुष्टि आपका दिन निर्देशित करेगी।" },
    { en: "Avoid negative influences.", hi: "नकारात्मक प्रभावों से बचें।" },
    { en: "Spiritual reading brings insight.", hi: "आध्यात्मिक पढ़ाई अंतर्दृष्टि लाती है।" },
    { en: "Silent reflection helps growth.", hi: "मौन चिंतन विकास में मदद करता है।" },
    { en: "Stay connected to your values.", hi: "अपने मूल्यों से जुड़े रहें।" },
    { en: "Daily rituals enhance balance.", hi: "दैनिक अनुष्ठान संतुलन बढ़ाते हैं।" },
    { en: "Listen to your intuition.", hi: "अपनी अंतर्ज्ञान की सुनें।" },
  ],
};

// Deterministic random based on day + sign index
function getIndex(seed: number, length: number): number {
  const x = Math.sin(seed) * 10000;
  return Math.floor((x - Math.floor(x)) * length);
}

export function getDailyHoroscope(signId: string): Horoscope {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );

  const signSeed = signId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);

  return {
    love: phrases.love[getIndex(dayOfYear + signSeed, phrases.love.length)],
    career: phrases.career[getIndex(dayOfYear + signSeed + 1, phrases.career.length)],
    health: phrases.health[getIndex(dayOfYear + signSeed + 2, phrases.health.length)],
    finance: phrases.finance[getIndex(dayOfYear + signSeed + 3, phrases.finance.length)],
    spirituality: phrases.spirituality[getIndex(dayOfYear + signSeed + 4, phrases.spirituality.length)],
  };
}
