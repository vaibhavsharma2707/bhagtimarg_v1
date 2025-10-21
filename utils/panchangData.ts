// This utility provides procedurally generated, dynamic Panchang data.
// Festival dates are now based on a corrected list for accuracy.

export interface PanchangData {
  tithi: { en: string; hi: string };
  paksha: { en: string; hi: string };
  nakshatra: { en: string; hi: string };
  month: { en: string; hi: string };
  samvat: number;
  sunrise: { en: string; hi: string };
  sunset: { en: string; hi: string };
}

export interface Festival {
  name: { en: string; hi: string };
  date: Date;
  icon: string;
}

const tithis = [
  { en: "Pratipada", hi: "प्रतिपदा" }, { en: "Dwitiya", hi: "द्वितीया" }, { en: "Tritiya", hi: "तृतीया" },
  { en: "Chaturthi", hi: "चतुर्थी" }, { en: "Panchami", hi: "पंचमी" }, { en: "Shashthi", hi: "षष्ठी" },
  { en: "Saptami", hi: "सप्तमी" }, { en: "Ashtami", hi: "अष्टमी" }, { en: "Navami", hi: "नवमी" },
  { en: "Dashami", hi: "दशमी" }, { en: "Ekadashi", hi: "एकादशी" }, { en: "Dwadashi", hi: "द्वादशी" },
  { en: "Trayodashi", hi: "त्रयोदशी" }, { en: "Chaturdashi", hi: "चतुर्दशी" }, { en: "Purnima", hi: "पूर्णिमा" },
  { en: "Pratipada", hi: "प्रतिपदा" }, { en: "Dwitiya", hi: "द्वितीया" }, { en: "Tritiya", hi: "तृतीया" },
  { en: "Chaturthi", hi: "चतुर्थी" }, { en: "Panchami", hi: "पंचमी" }, { en: "Shashthi", hi: "षष्ठी" },
  { en: "Saptami", hi: "सप्तमी" }, { en: "Ashtami", hi: "अष्टमी" }, { en: "Navami", hi: "नवमी" },
  { en: "Dashami", hi: "दशमी" }, { en: "Ekadashi", hi: "एकादशी" }, { en: "Dwadashi", hi: "द्वादशी" },
  { en: "Trayodashi", hi: "त्रयोदशी" }, { en: "Chaturdashi", hi: "चतुर्दशी" }, { en: "Amavasya", hi: "अमावस्या" },
];

const nakshatras = [
  { en: "Ashwini", hi: "अश्विनी" }, { en: "Bharani", hi: "भरणी" }, { en: "Krittika", hi: "कृत्तिका" },
  { en: "Rohini", hi: "रोहिणी" }, { en: "Mrigashira", hi: "मृगशिरा" }, { en: "Ardra", hi: "आर्द्रा" },
  { en: "Punarvasu", hi: "पुनर्वसु" }, { en: "Pushya", hi: "पुष्य" }, { en: "Ashlesha", hi: "आश्लेषा" },
  { en: "Magha", hi: "मघा" }, { en: "Purva Phalguni", hi: "पूर्व फाल्गुनी" }, { en: "Uttara Phalguni", hi: "उत्तर फाल्गुनी" },
  { en: "Hasta", hi: "हस्त" }, { en: "Chitra", hi: "चित्रा" }, { en: "Swati", hi: "स्वाति" },
  { en: "Vishakha", hi: "विशाखा" }, { en: "Anuradha", hi: "अनुराधा" }, { en: "Jyeshtha", hi: "ज्येष्ठा" },
  { en: "Mula", hi: "मूल" }, { en: "Purva Ashadha", hi: "पूर्वाषाढ़ा" }, { en: "Uttara Ashadha", hi: "उत्तराषाढ़ा" },
  { en: "Shravana", hi: "श्रवण" }, { en: "Dhanishta", hi: "धनिष्ठा" }, { en: "Shatabhisha", hi: "शतभिषा" },
  { en: "Purva Bhadrapada", hi: "पूर्व भाद्रपद" }, { en: "Uttara Bhadrapada", hi: "उत्तर भाद्रपद" }, { en: "Revati", hi: "रेवती" }
];

const hinduMonths = [
    { en: "Chaitra", hi: "चैत्र" }, { en: "Vaisakha", hi: "वैशाख" }, { en: "Jyeshtha", hi: "ज्येष्ठ" },
    { en: "Ashadha", hi: "आषाढ़" }, { en: "Shravana", hi: "श्रावण" }, { en: "Bhadrapada", hi: "भाद्रपद" },
    { en: "Ashvina", hi: "आश्विन" }, { en: "Kartika", hi: "कार्तिक" }, { en: "Margashirsha", hi: "मार्गशीर्ष" },
    { en: "Pausha", hi: "पौष" }, { en: "Magha", hi: "माघ" }, { en: "Phalguna", hi: "फाल्गुन" }
];

const festivalsByYear: Record<number, Festival[]> = {
    2024: [
        { name: { en: "Maha Shivaratri", hi: "महा शिवरात्रि" }, date: new Date("2024-03-08T00:00:00Z"), icon: "🔱" },
        { name: { en: "Holi", hi: "होली" }, date: new Date("2024-03-25T00:00:00Z"), icon: "🎨" },
        { name: { en: "Rama Navami", hi: "राम नवमी" }, date: new Date("2024-04-17T00:00:00Z"), icon: "🏹" },
        { name: { en: "Raksha Bandhan", hi: "रक्षा बंधन" }, date: new Date("2024-08-19T00:00:00Z"), icon: "✨" }, // Corrected date
        { name: { en: "Janmashtami", hi: "जन्माष्टमी" }, date: new Date("2024-08-26T00:00:00Z"), icon: "👶" },
        { name: { en: "Ganesh Chaturthi", hi: "गणेश चतुर्थी" }, date: new Date("2024-09-07T00:00:00Z"), icon: "🐘" },
        { name: { en: "Navaratri Start", hi: "नवरात्रि प्रारंभ" }, date: new Date("2024-10-03T00:00:00Z"), icon: "💃" },
        { name: { en: "Dussehra", hi: "दशहरा" }, date: new Date("2024-10-12T00:00:00Z"), icon: "🏹" },
        { name: { en: "Diwali", hi: "दिवाली" }, date: new Date("2024-11-01T00:00:00Z"), icon: "🪔" },
    ],
     2025: [
    { name: { en: "Makar Sankranti / Pongal", hi: "मकर संक्रान्ति / पोंगल" }, date: new Date("2025-01-14T00:00:00Z"), icon: "🌞" },
    { name: { en: "Vasant Panchami", hi: "वसंत पंचमी" }, date: new Date("2025-02-02T00:00:00Z"), icon: "🌼" },
    { name: { en: "Maha Shivaratri", hi: "महा शिवरात्रि" }, date: new Date("2025-02-26T00:00:00Z"), icon: "🔱" },
    { name: { en: "Holika Dahan", hi: "होलीकादहन" }, date: new Date("2025-03-13T00:00:00Z"), icon: "🔥" },
    { name: { en: "Holi", hi: "होली" }, date: new Date("2025-03-14T00:00:00Z"), icon: "🎨" },
    { name: { en: "Rama Navami", hi: "राम नवमी" }, date: new Date("2025-04-06T00:00:00Z"), icon: "🏹" },
    { name: { en: "Akshaya Tritiya", hi: "अक्षय तृतीया" }, date: new Date("2025-04-30T00:00:00Z"), icon: "🪙" },
    { name: { en: "Buddha Purnima", hi: "बुद्ध पूर्णिमा" }, date: new Date("2025-05-12T00:00:00Z"), icon: "☸️" },
    { name: { en: "Guru Purnima", hi: "गुरु पूर्णिमा" }, date: new Date("2025-07-10T00:00:00Z"), icon: "🙏" },
    { name: { en: "Raksha Bandhan", hi: "रक्षा बंधन" }, date: new Date("2025-08-08T00:00:00Z"), icon: "🎗️" },
    { name: { en: "Janmashtami", hi: "जन्माष्टमी" }, date: new Date("2025-08-15T00:00:00Z"), icon: "👶" },
    { name: { en: "Ganesh Chaturthi", hi: "गणेश चतुर्थी" }, date: new Date("2025-09-27T00:00:00Z"), icon: "🐘" },
    { name: { en: "Navaratri (start)", hi: "नवरात्रि प्रारम्भ" }, date: new Date("2025-10-22T00:00:00Z"), icon: "💃" },
    { name: { en: "Dussehra / Vijayadashami", hi: "दशहरा / विजयादशमी" }, date: new Date("2025-10-31T00:00:00Z"), icon: "🏹" },
    { name: { en: "Dhanteras", hi: "धनतेरस" }, date: new Date("2025-10-18T00:00:00Z"), icon: "💰" },
    { name: { en: "Naraka Chaturdashi (Choti Diwali)", hi: "नरक चतुर्दशी" }, date: new Date("2025-10-20T00:00:00Z"), icon: "🪔" },
    { name: { en: "Diwali / Lakshmi Puja", hi: "दिवाली / लक्ष्मी पूजा" }, date: new Date("2025-10-20T00:00:00Z"), icon: "🪔" },
    { name: { en: "Govardhan Puja", hi: "गोवर्धन पूजा" }, date: new Date("2025-10-22T00:00:00Z"), icon: "⛰️" },
    { name: { en: "Bhai Duj", hi: "भाई दूज" }, date: new Date("2025-10-23T00:00:00Z"), icon: "🤝" },
    { name: { en: "Chhath Puja", hi: "छठ पूजा" }, date: new Date("2025-10-28T00:00:00Z"), icon: "🌅" },
    { name: { en: "Kartik Purnima", hi: "कार्तिक पूर्णिमा" }, date: new Date("2025-11-05T00:00:00Z"), icon: "🌕" },
    { name: { en: "Geeta Jayanti", hi: "गीता जयंती" }, date: new Date("2025-12-01T00:00:00Z"), icon: "📜" },
    { name: { en: "Dhanu Sankranti", hi: "धनु संक्रांति" }, date: new Date("2025-12-16T00:00:00Z"), icon: "♐" },
  ],

  2026: [
    { name: { en: "Makar Sankranti / Pongal", hi: "मकर संक्रान्ति / पोंगल" }, date: new Date("2026-01-15T00:00:00Z"), icon: "🌞" },
    { name: { en: "Vasant Panchami", hi: "वसंत पंचमी" }, date: new Date("2026-02-01T00:00:00Z"), icon: "🌼" },
    { name: { en: "Maha Shivaratri", hi: "महा शिवरात्रि" }, date: new Date("2026-02-15T00:00:00Z"), icon: "🔱" },
    { name: { en: "Holika Dahan", hi: "होलीकादहन" }, date: new Date("2026-03-03T00:00:00Z"), icon: "🔥" },
    { name: { en: "Holi", hi: "होली" }, date: new Date("2026-03-04T00:00:00Z"), icon: "🎨" },
    { name: { en: "Rama Navami", hi: "राम नवमी" }, date: new Date("2026-03-29T00:00:00Z"), icon: "🏹" },
    { name: { en: "Akshaya Tritiya", hi: "अक्षय तृतीया" }, date: new Date("2026-05-19T00:00:00Z"), icon: "🪙" },
    { name: { en: "Buddha Purnima", hi: "बुद्ध पूर्णिमा" }, date: new Date("2026-05-01T00:00:00Z"), icon: "☸️" },
    { name: { en: "Guru Purnima", hi: "गुरु पूर्णिमा" }, date: new Date("2026-07-01T00:00:00Z"), icon: "🙏" },
    { name: { en: "Raksha Bandhan", hi: "रक्षा बंधन" }, date: new Date("2026-08-26T00:00:00Z"), icon: "🎗️" },
    { name: { en: "Janmashtami", hi: "जन्माष्टमी" }, date: new Date("2026-09-04T00:00:00Z"), icon: "👶" },
    { name: { en: "Ganesh Chaturthi", hi: "गणेश चतुर्थी" }, date: new Date("2026-09-16T00:00:00Z"), icon: "🐘" },
    { name: { en: "Navaratri (start)", hi: "नवरात्रि प्रारम्भ" }, date: new Date("2026-10-11T00:00:00Z"), icon: "💃" },
    { name: { en: "Dussehra / Vijayadashami", hi: "दशहरा / विजयादशमी" }, date: new Date("2026-10-20T00:00:00Z"), icon: "🏹" },
    { name: { en: "Dhanteras", hi: "धनतेरस" }, date: new Date("2026-11-05T00:00:00Z"), icon: "💰" },
    { name: { en: "Naraka Chaturdashi (Choti Diwali)", hi: "नरक चतुर्दशी" }, date: new Date("2026-11-08T00:00:00Z"), icon: "🪔" },
    { name: { en: "Diwali / Lakshmi Puja", hi: "दिवाली / लक्ष्मी पूजा" }, date: new Date("2026-11-08T00:00:00Z"), icon: "🪔" },
    { name: { en: "Govardhan Puja", hi: "गोवर्धन पूजा" }, date: new Date("2026-11-09T00:00:00Z"), icon: "⛰️" },
    { name: { en: "Bhai Duj", hi: "भाई दूज" }, date: new Date("2026-11-11T00:00:00Z"), icon: "🤝" },
    { name: { en: "Chhath Puja", hi: "छठ पूजा" }, date: new Date("2026-11-15T00:00:00Z"), icon: "🌅" },
  ],

  2027: [
    { name: { en: "Makar Sankranti / Pongal", hi: "मकर संक्रान्ति / पोंगल" }, date: new Date("2027-01-15T00:00:00Z"), icon: "🌞" },
    { name: { en: "Vasant Panchami", hi: "वसंत पंचमी" }, date: new Date("2027-02-11T00:00:00Z"), icon: "🌼" },
    { name: { en: "Maha Shivaratri", hi: "महा शिवरात्रि" }, date: new Date("2027-03-06T00:00:00Z"), icon: "🔱" },
    { name: { en: "Holika Dahan", hi: "होलीकादहन" }, date: new Date("2027-03-21T00:00:00Z"), icon: "🔥" },
    { name: { en: "Holi", hi: "होली" }, date: new Date("2027-03-22T00:00:00Z"), icon: "🎨" },
    { name: { en: "Rama Navami / Ugadi / Gudi Padwa", hi: "राम नवमी / उगाडि / गुड़ी पडवा" }, date: new Date("2027-04-07T00:00:00Z"), icon: "🏹" },
    { name: { en: "Akshaya Tritiya", hi: "अक्षय तृतीया" }, date: new Date("2027-05-09T00:00:00Z"), icon: "🪙" },
    { name: { en: "Buddha Purnima", hi: "बुद्ध पूर्णिमा" }, date: new Date("2027-05-24T00:00:00Z"), icon: "☸️" },
    { name: { en: "Guru Purnima", hi: "गुरु पूर्णिमा" }, date: new Date("2027-07-13T00:00:00Z"), icon: "🙏" },
    { name: { en: "Raksha Bandhan", hi: "रक्षा बंधन" }, date: new Date("2027-08-17T00:00:00Z"), icon: "🎗️" },
    { name: { en: "Janmashtami", hi: "जन्माष्टमी" }, date: new Date("2027-08-25T00:00:00Z"), icon: "👶" },
    { name: { en: "Ganesh Chaturthi", hi: "गणेश चतुर्थी" }, date: new Date("2027-09-05T00:00:00Z"), icon: "🐘" },
    { name: { en: "Navaratri (start)", hi: "नवरात्रि प्रारम्भ" }, date: new Date("2027-10-16T00:00:00Z"), icon: "💃" },
    { name: { en: "Dussehra / Vijayadashami", hi: "दशहरा / विजयादशमी" }, date: new Date("2027-10-24T00:00:00Z"), icon: "🏹" },
    { name: { en: "Dhanteras", hi: "धनतेरस" }, date: new Date("2027-10-26T00:00:00Z"), icon: "💰" },
    { name: { en: "Naraka Chaturdashi (Choti Diwali)", hi: "नरक चतुर्दशी" }, date: new Date("2027-10-27T00:00:00Z"), icon: "🪔" },
    { name: { en: "Diwali / Lakshmi Puja", hi: "दिवाली / लक्ष्मी पूजा" }, date: new Date("2027-10-29T00:00:00Z"), icon: "🪔" },
    { name: { en: "Govardhan Puja", hi: "गोवर्धन पूजा" }, date: new Date("2027-10-30T00:00:00Z"), icon: "⛰️" },
    { name: { en: "Bhai Duj", hi: "भाई दूज" }, date: new Date("2027-10-31T00:00:00Z"), icon: "🤝" },
  ]
  
};

// A more accurate start date for Vikram Samvat 2081 for calculation reference
const VS_2081_START_DATE = new Date('2024-04-09T00:00:00Z');

function getPanchangData(): { panchang: PanchangData; festivals: Festival[] } {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const currentYear = today.getFullYear();
    
    // --- Daily Panchang Data Procedural Generation ---
    const oneDay = 1000 * 60 * 60 * 24;
    const daysSinceVSStart = Math.floor((today.getTime() - VS_2081_START_DATE.getTime()) / oneDay);
    
    // This provides a more consistent daily cycle for Tithi
    const tithiIndex = (daysSinceVSStart % 30 + 30) % 30; 
    const currentTithi = tithis[tithiIndex];
    const currentPaksha = tithiIndex < 15 ? { en: "Shukla Paksha", hi: "शुक्ल पक्ष" } : { en: "Krishna Paksha", hi: "कृष्ण पक्ष" };
    
    // A lunar month is approx 29.53 days, this calculation is more stable
    const monthIndex = (Math.floor(daysSinceVSStart / 29.53) % 12 + 12) % 12;
    const currentMonth = hinduMonths[monthIndex];
    
    // Day of the year for a simple cyclical Nakshatra
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / oneDay);
    const nakshatraIndex = dayOfYear % nakshatras.length;
    const currentNakshatra = nakshatras[nakshatraIndex];
    
    // --- Samvat Calculation ---
    let samvatYear = currentYear + 57;
    // Vikram Samvat new year is Chaitra Shukla Pratipada
    if (currentYear === 2024 && today < new Date("2024-04-09T00:00:00Z")) { 
        samvatYear = 2080;
    } else if (currentYear === 2025 && today < new Date("2025-03-30T00:00:00Z")) {
        samvatYear = 2081;
    }
    else if (currentYear === 2026 && today < new Date("2026-03-20T00:00:00Z")) {
        samvatYear = 2082;
    }
    else if (currentYear === 2027 && today < new Date("2027-04-07T00:00:00Z")) {
        samvatYear = 2083;
    }   

    // --- Sunrise/Sunset Simulation based on seasons ---
    // Simulates longer days in summer (around day 172 - June 21) and shorter in winter
    const baseSunrise = 5.5; // 5:30 AM as a base
    // A sine wave to simulate seasonal variation in daylight hours. Max variation of 1.25 hours (2.5 hours total day length change)
    const sunriseVariation = Math.sin((dayOfYear / 365.25) * Math.PI * 2 - Math.PI / 2) * 1.25;
    const sunriseTotalHours = baseSunrise + sunriseVariation;
    const sunriseHour = Math.floor(sunriseTotalHours);
    const sunriseMinute = Math.floor((sunriseTotalHours - sunriseHour) * 60);
    const sunsetHour = Math.floor(sunriseTotalHours + 13); // Approx 13 hours of daylight on average with variation
    const sunsetMinute = sunriseMinute;

    const panchang: PanchangData = {
        tithi: currentTithi,
        paksha: currentPaksha,
        nakshatra: currentNakshatra,
        month: currentMonth,
        samvat: samvatYear,
        sunrise: { en: `${sunriseHour.toString().padStart(2, '0')}:${sunriseMinute.toString().padStart(2, '0')} AM`, hi: `सुबह ${sunriseHour.toString().padStart(2, '0')}:${sunriseMinute.toString().padStart(2, '0')}` },
        sunset: { en: `${(sunsetHour - 12).toString().padStart(2, '0')}:${sunsetMinute.toString().padStart(2, '0')} PM`, hi: `शाम ${(sunsetHour - 12).toString().padStart(2, '0')}:${sunsetMinute.toString().padStart(2, '0')}` }
    };

    // --- Upcoming Festival Calculation ---
    const allFestivals = festivalsByYear[currentYear] ?? [];
    let upcoming = allFestivals.filter(f => f.date >= today).sort((a,b) => a.date.getTime() - b.date.getTime());
    
    // If we need more festivals, pull from the next year's list
    if (upcoming.length < 4) {
        const nextYearFestivals = festivalsByYear[currentYear + 1] ?? [];
        upcoming.push(...nextYearFestivals);
    }

    return { panchang, festivals: upcoming.slice(0, 4) };
}

export { getPanchangData };
