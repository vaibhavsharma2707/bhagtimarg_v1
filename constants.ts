

import { Deity, ZodiacSign } from './types';

export const DEITIES: Deity[] = [
  {
    id: 'ganesha',
    name: 'Lord Ganesha',
    name_hi: 'श्री गणेश',
    description: 'The elephant-headed god, remover of obstacles and patron of arts and sciences.',
    description_hi: 'हाथी के सिर वाले देवता, बाधाओं को दूर करने वाले और कला और विज्ञान के संरक्षक।',
    image: "/images/ganesh.jpg",
    content: {
      chalisaId: 'ganesha-chalisa',
      aartiId: 'ganesha-aarti',
      mantraIds: ['ganesha-mantra-obstacles'],
      storyIds: ['ganesha-story-tusk', 'ganesha-story-head'],
    },
    tags: ['Beginnings', 'Wisdom', 'Success']
  },
  {
    id: 'shiva',
    name: 'Lord Shiva',
    name_hi: 'भगवान शिव',
    description: 'One of the principal deities of Hinduism, the destroyer within the Trimurti.',
    description_hi: 'हिंदू धर्म के प्रमुख देवताओं में से एक, त्रिमूर्ति के भीतर के संहारक।',
    image: "/images/shiv.jpg",
    content: {
      chalisaId: 'shiva-chalisa',
      aartiId: 'shiva-aarti',
      mantraIds: ['shiva-mantra-mahamrityunjaya', 'shiva-mantra-om-namah-shivaya'],
      storyIds: ['shiva-story-ganga', 'shiva-story-parvati-penance', 'shiva-story-third-eye'],
    },
    tags: ['Meditation', 'Destruction', 'Creation']
  },
  {
    id: 'vishnu',
    name: 'Lord Vishnu',
    name_hi: 'भगवान विष्णु',
    description: 'The preserver god, one of the Trimurti, who protects the universe from being destroyed.',
    description_hi: 'संरक्षक देवता, त्रिमूर्ति में से एक, जो ब्रह्मांड को नष्ट होने से बचाते हैं।',
    image: "/images/vishnu.jpg",
    content: {
      chalisaId: 'vishnu-chalisa',
      aartiId: 'vishnu-aarti',
      mantraIds: ['vishnu-mantra-vasudevaya'],
      storyIds: ['vishnu-story-vamana'],
    },
    tags: ['Preservation', 'Dharma', 'Peace']
  },
  {
    id: 'rama',
    name: 'Lord Rama',
    name_hi: 'भगवान राम',
    description: 'The seventh avatar of Vishnu, the epitome of righteousness and dharma.',
    description_hi: 'विष्णु के सातवें अवतार, धार्मिकता और धर्म के प्रतीक।',
    image: "/images/ram.jpg",
    content: {
      chalisaId: 'rama-chalisa',
      aartiId: 'rama-aarti',
      mantraIds: ['rama-mantra-raksha'],
      storyIds: ['rama-story-sita-swayamvar', 'rama-story-golden-deer'],
    },
    tags: ['Dharma', 'Virtue', 'Kingship']
  },
  {
    id: 'krishna',
    name: 'Lord Krishna',
    name_hi: 'भगवान कृष्ण',
    description: 'A major deity in Hinduism, worshipped as the eighth avatar of Vishnu.',
    description_hi: 'हिंदू धर्म में एक प्रमुख देवता, विष्णु के आठवें अवतार के रूप में पूजे जाते हैं।',
    image: "/images/krishan.jpg",
    content: {
      chalisaId: 'krishna-chalisa',
      aartiId: 'krishna-aarti',
      mantraIds: ['krishna-mantra-hare', 'krishna-mantra-namah'],
      storyIds: ['krishna-story-govardhan', 'krishna-story-kaliya'],
    },
    tags: ['Love', 'Compassion', 'Wisdom']
  },
  {
    id: 'hanuman',
    name: 'Lord Hanuman',
    name_hi: 'श्री हनुमान',
    description: 'The mighty monkey god, a symbol of strength, devotion, and perseverance.',
    description_hi: 'शक्ति, भक्ति और दृढ़ता के प्रतीक, पवनपुत्र हनुमान।',
    image: "/images/hanuman.jpg",
    content: {
      chalisaId: 'hanuman-chalisa',
      aartiId: 'hanuman-aarti',
      mantraIds: ['hanuman-mantra-strength'],
      storyIds: ['hanuman-story-sanjeevani'],
    },
    tags: ['Strength', 'Devotion', 'Protection']
  },
  {
    id: 'durga',
    name: 'Maa Durga',
    name_hi: 'माँ दुर्गा',
    description: 'The warrior goddess, whose mythology centers around combating evils and demonic forces.',
    description_hi: 'योद्धा देवी, जिनकी पौराणिक कथाएं बुराइयों और राक्षसी ताकतों से निपटने पर केंद्रित हैं।',
    image: "/images/durga.jpg",
    content: {
      chalisaId: 'durga-chalisa',
      aartiId: 'durga-aarti',
      mantraIds: ['durga-mantra-shakti', 'durga-mantra-sarva-bhuteshu'],
      storyIds: ['durga-story-mahishasura'],
    },
    tags: ['Power', 'Protection', 'Motherhood']
  },
  {
    id: 'lakshmi',
    name: 'Maa Lakshmi',
    name_hi: 'माँ लक्ष्मी',
    description: 'The goddess of wealth, fortune, power, beauty and prosperity.',
    description_hi: 'धन, भाग्य, शक्ति, सौंदर्य और समृद्धि की देवी।',
    image: "/images/lakshmi.jpg",
    content: {
      chalisaId: 'lakshmi-chalisa',
      aartiId: 'lakshmi-aarti',
      mantraIds: ['lakshmi-mantra-prosperity'],
      storyIds: [],
    },
    tags: ['Wealth', 'Prosperity', 'Fortune']
  },
  {
    id: 'saraswati',
    name: 'Maa Saraswati',
    name_hi: 'माँ सरस्वती',
    description: 'The goddess of knowledge, music, art, speech, wisdom, and learning.',
    description_hi: 'ज्ञान, संगीत, कला, वाणी, बुद्धि और विद्या की देवी।',
    image: "/images/saraswati.jpg",
    content: {
      chalisaId: 'saraswati-chalisa',
      aartiId: 'saraswati-aarti',
      mantraIds: ['saraswati-mantra-knowledge'],
      storyIds: [],
    },
    tags: ['Knowledge', 'Music', 'Arts']
  },
  {
    id: 'kali',
    name: 'Maa Kali',
    name_hi: 'माँ काली',
    description: 'The fierce goddess of time, change, and destruction, a powerful form of Maa Durga.',
    description_hi: 'समय, परिवर्तन और विनाश की भयंकर देवी, माँ दुर्गा का एक शक्तिशाली रूप।',
    image: "/images/kaali.jpg",
    content: {
      chalisaId: 'kali-chalisa',
      aartiId: 'kali-aarti',
      mantraIds: ['kali-mantra-beej'],
      storyIds: [],
    },
    tags: ['Liberation', 'Time', 'Power']
  },
  {
    id: 'gayatri',
    name: 'Maa Gayatri',
    name_hi: 'माँ गायत्री',
    description: 'The personification of the sacred Gayatri Mantra, she is considered the Veda Mata, the mother of all Vedas.',
    description_hi: 'पवित्र गायत्री मंत्र का मानवीकरण, उन्हें वेद माता माना जाता है, सभी वेदों की माँ।',
    image: "/images/gayatri.jpg",
    content: {
      chalisaId: '',
      aartiId: '',
      mantraIds: ['gayatri-mantra'],
      storyIds: [],
    },
    tags: ['Vedas', 'Wisdom', 'Enlightenment']
  },
  {
    id: 'parvati',
    name: 'Maa Parvati',
    name_hi: 'माँ पार्वती',
    description: 'The gentle and nurturing aspect of the supreme Hindu goddess, wife of Lord Shiva.',
    description_hi: 'सर्वोच्च हिंदू देवी का कोमल और पोषण करने वाला पहलू, भगवान शिव की पत्नी।',
    image: "/images/parvati.jpg",
    content: {
      chalisaId: '',
      aartiId: 'parvati-aarti',
      mantraIds: [],
      storyIds: ['shiva-story-parvati-penance'],
    },
    tags: ['Marriage', 'Family', 'Devotion']
  },
  {
    id: 'surya',
    name: 'Surya Dev (Sun)',
    name_hi: 'सूर्य देव',
    description: 'The Sun God, source of light, energy, and life. One of the Navgraha.',
    description_hi: 'सूर्य देव, प्रकाश, ऊर्जा और जीवन के स्रोत। नवग्रहों में से एक।',
    image: "/images/soorya.jpg",
    content: {
      chalisaId: 'surya-chalisa',
      aartiId: 'surya-aarti',
      mantraIds: ['surya-mantra-aditya-hridaya'],
      storyIds: [],
    },
    tags: ['Energy', 'Health', 'Navgraha']
  },
  {
    id: 'chandra',
    name: 'Chandra Dev (Moon)',
    name_hi: 'चंद्र देव',
    description: 'The Moon God, associated with mind, emotions, and mother. One of the Navgraha.',
    description_hi: 'चंद्र देव, मन, भावनाओं और माता से जुड़े हुए। नवग्रहों में से एक।',
    image: "/images/chandra.jpg",
    content: {
      chalisaId: '',
      aartiId: 'chandra-aarti',
      mantraIds: ['chandra-mantra'],
      storyIds: [],
    },
    tags: ['Emotions', 'Mind', 'Navgraha']
  },
  {
    id: 'mangal',
    name: 'Mangal Dev (Mars)',
    name_hi: 'मंगल देव',
    description: 'The God of Mars, associated with courage, energy, and assertiveness. One of the Navgraha.',
    description_hi: 'मंगल ग्रह के देवता, साहस, ऊर्जा और मुखरता से जुड़े हुए। नवग्रहों में से एक।',
    image: "/images/Mars.jpg",
    content: {
      chalisaId: '',
      aartiId: '',
      mantraIds: ['mangal-mantra'],
      storyIds: [],
    },
    tags: ['Courage', 'Energy', 'Navgraha']
  },
  {
    id: 'budh',
    name: 'Budh Dev (Mercury)',
    name_hi: 'बुध देव',
    description: 'The God of Mercury, associated with intellect, communication, and commerce. One of the Navgraha.',
    description_hi: 'बुध ग्रह के देवता, बुद्धि, संचार और वाणिज्य से जुड़े हुए। नवग्रहों में से एक।',
    image: "/images/budh.jpg",
    content: {
      chalisaId: '',
      aartiId: '',
      mantraIds: ['budh-mantra'],
      storyIds: [],
    },
    tags: ['Intellect', 'Communication', 'Navgraha']
  },
  {
    id: 'guru',
    name: 'Guru Dev (Jupiter)',
    name_hi: 'गुरु देव (बृहस्पति)',
    description: 'The God of Jupiter, preceptor of the gods, associated with wisdom, knowledge, and expansion. One of the Navgraha.',
    description_hi: 'बृहस्पति ग्रह के देवता, देवों के गुरु, ज्ञान, बुद्धि और विस्तार से जुड़े हुए। नवग्रहों में से एक।',
   image: "/images/guru.jpg",
    content: {
      chalisaId: '',
      aartiId: '',
      mantraIds: ['guru-mantra'],
      storyIds: [],
    },
    tags: ['Wisdom', 'Knowledge', 'Navgraha']
  },
  {
    id: 'shukra',
    name: 'Shukra Dev (Venus)',
    name_hi: 'शुक्र देव',
    description: 'The God of Venus, preceptor of the demons, associated with love, beauty, and luxury. One of the Navgraha.',
    description_hi: 'शुक्र ग्रह के देवता, असुरों के गुरु, प्रेम, सौंदर्य और विलासिता से जुड़े हुए। नवग्रहों में से एक।',
    image: "/images/shukra.jpg",
    content: {
      chalisaId: '',
      aartiId: '',
      mantraIds: ['shukra-mantra'],
      storyIds: [],
    },
    tags: ['Love', 'Beauty', 'Navgraha']
  },
  {
    id: 'shani',
    name: 'Shani Dev (Saturn)',
    name_hi: 'शनि देव',
    description: 'The god of justice and karma, who delivers results based on deeds. One of the Navgraha.',
    description_hi: 'न्याय और कर्म के देवता, जो कर्मों के आधार पर परिणाम देते हैं। नवग्रहों में से एक।',
    image: "/images/shani.jpg",
    content: {
      chalisaId: 'shani-chalisa',
      aartiId: 'shani-aarti',
      mantraIds: ['shani-mantra-peace'],
      storyIds: [],
    },
    tags: ['Justice', 'Karma', 'Navgraha']
  },
  {
    id: 'rahu',
    name: 'Rahu',
    name_hi: 'राहु',
    description: 'The north lunar node, a shadow entity associated with obsession, materialism, and rebellion. One of the Navgraha.',
    description_hi: 'उत्तरी चंद्र आसंधि, एक छाया इकाई जो जुनून, भौतिकवाद और विद्रोह से जुड़ी है। नवग्रहों में से एक।',
    image: "/images/rahu.jpg",
    content: {
      chalisaId: 'rahu-chalisa',
      aartiId: '',
      mantraIds: ['rahu-mantra'],
      storyIds: [],
    },
    tags: ['Obsession', 'Materialism', 'Navgraha']
  },
  {
    id: 'ketu',
    name: 'Ketu',
    name_hi: 'केतु',
    description: 'The south lunar node, a shadow entity associated with spirituality, liberation, and intuition. One of the Navgraha.',
    description_hi: 'दक्षिणी चंद्र आसंधि, एक छाया इकाई जो आध्यात्मिकता, मुक्ति और अंतर्ज्ञान से जुड़ी है। नवग्रहों में से एक।',
    image: "/images/ketu.jpg",
    content: {
      chalisaId: '',
      aartiId: '',
      mantraIds: ['ketu-mantra'],
      storyIds: [],
    },
    tags: ['Spirituality', 'Liberation', 'Navgraha']
  },
  {
    id: 'sai-baba',
    name: 'Sai Baba',
    name_hi: 'साईं बाबा',
    description: 'A spiritual master who was and is regarded by his devotees as a saint, fakir, and satguru.',
    description_hi: 'एक आध्यात्मिक गुरु जो अपने भक्तों द्वारा एक संत, फकीर और सतगुरु के रूप में माने जाते थे और हैं।',
    image: "/images/sai.jpg",
    content: {
      chalisaId: 'sai-chalisa',
      aartiId: 'sai-aarti',
      mantraIds: ['sai-mantra-sabka-malik-ek'],
      storyIds: [],
    },
    tags: ['Faith', 'Patience', 'Miracles']
  },
  {
    id: 'dattatreya',
    name: 'Lord Dattatreya',
    name_hi: 'भगवान दत्तात्रेय',
    description: 'A paradigmatic monk and one of the lords of Yoga, venerated as a Hindu god and an avatar of the Trimurti.',
    description_hi: 'एक आदर्श துறவி और योग के प्रभुओं में से एक, जिन्हें हिंदू देवता और त्रिमूर्ति के अवतार के रूप में सम्मानित किया जाता है।',
    image: "/images/dattareya.jpg",
    content: {
      chalisaId: 'dattatreya-chalisa',
      aartiId: 'dattatreya-aarti',
      mantraIds: ['dattatreya-mantra-guru-dev'],
      storyIds: [],
    },
    tags: ['Guru', 'Yoga', 'Trimurti']
  },
  {
    id: 'bhairav',
    name: 'Kal Bhairav',
    name_hi: 'काल भैरव',
    description: 'A fierce manifestation of Lord Shiva associated with annihilation. He is the protector of Kashi.',
    description_hi: 'विनाश से जुड़े भगवान शिव का एक उग्र रूप। वह काशी के रक्षक हैं।',
    image: "/images/bhairav.jpg",
    content: {
      chalisaId: 'bhairav-chalisa',
      aartiId: 'bhairav-aarti',
      mantraIds: ['bhairav-mantra-namah'],
      storyIds: [],
    },
    tags: ['Protection', 'Time', 'Fearless']
  },
  {
    id: 'tulsi',
    name: 'Maa Tulsi',
    name_hi: 'माँ तुलसी',
    description: 'A sacred plant in Hindu tradition, regarded as an earthly manifestation of the goddess Tulsi.',
    description_hi: 'हिंदू परंपरा में एक पवित्र पौधा, जिसे देवी तुलसी का सांसारिक अवतार माना जाता है।',
    image: "/images/tulsi.jpg",
    content: {
      chalisaId: 'tulsi-chalisa',
      aartiId: 'tulsi-aarti',
      mantraIds: [],
      storyIds: [],
    },
    tags: ['Purity', 'Devotion', 'Health']
  },
  {
    id: 'sheetla',
    name: 'Maa Sheetla',
    name_hi: 'माँ शीतला',
    description: 'A folk deity, worshipped to ward off diseases like smallpox and to ensure good health.',
    description_hi: 'एक लोक देवी, जिनकी पूजा चेचक जैसी बीमारियों को दूर करने और अच्छे स्वास्थ्य को सुनिश्चित करने के लिए की जाती है।',
    image: "/images/sheetla.jpg",
    content: {
      chalisaId: 'sheetla-chalisa',
      aartiId: 'sheetla-aarti',
      mantraIds: [],
      storyIds: [],
    },
    tags: ['Health', 'Protection', 'Coolness']
  },
  {
    id: 'santoshi',
    name: 'Maa Santoshi',
    name_hi: 'माँ संतोषी',
    description: 'The goddess of satisfaction, worshipped by women for peace and prosperity in the family.',
    description_hi: 'संतुष्टि की देवी, जिनकी पूजा महिलाएं परिवार में शांति और समृद्धि के लिए करती हैं।',
    image: "/images/santoshi.jpg",
    content: {
      chalisaId: 'santoshi-chalisa',
      aartiId: 'santoshi-aarti',
      mantraIds: [],
      storyIds: [],
    },
    tags: ['Satisfaction', 'Peace', 'Family']
  },
  {
    id: 'kartikeya',
    name: 'Lord Kartikeya',
    name_hi: 'भगवान कार्तिकेय',
    description: 'The Hindu god of war and the commander-in-chief of the army of the devas (gods).',
    description_hi: 'हिंदू धर्म में युद्ध के देवता और देवों (देवताओं) की सेना के सेनापति।',
    image: "/images/kartikeya.jpg",
    content: {
      chalisaId: 'kartikeya-chalisa',
      aartiId: '',
      mantraIds: [],
      storyIds: [],
    },
    tags: ['War', 'Victory', 'Leadership']
  }
];

export const ZODIAC_SIGNS: ZodiacSign[] = [
    { id: "aries", name: { en: "Aries", hi: "मेष" }, dateRange: "Mar 21 - Apr 19", imageUrl: "/zodiac/aries.jpg" },
    { id: "taurus", name: { en: "Taurus", hi: "वृषभ" }, dateRange: "Apr 20 - May 20", imageUrl: "zodiac/tauras.jpg" },
    { id: "gemini", name: { en: "Gemini", hi: "मिथुन" }, dateRange: "May 21 - Jun 20", imageUrl: "zodiac/gemini.jpg" },
    { id: "cancer", name: { en: "Cancer", hi: "कर्क" }, dateRange: "Jun 21 - Jul 22", imageUrl: "zodiac/cancer.jpg" },
    { id: "leo", name: { en: "Leo", hi: "सिंह" }, dateRange: "Jul 23 - Aug 22", imageUrl: "zodiac/leo.jpg" },
    { id: "virgo", name: { en: "Virgo", hi: "कन्या" }, dateRange: "Aug 23 - Sep 22", imageUrl: "zodiac/virgo.jpg" },
    { id: "libra", name: { en: "Libra", hi: "तुला" }, dateRange: "Sep 23 - Oct 22", imageUrl: "zodiac/libra.jpg" },
    { id: "scorpio", name: { en: "Scorpio", hi: "वृश्चिक" }, dateRange: "Oct 23 - Nov 21", imageUrl: "zodiac/scorpio.jpg" },
    { id: "sagittarius", name: { en: "Sagittarius", hi: "धनु" }, dateRange: "Nov 22 - Dec 21", imageUrl: "zodiac/sagitarius.jpg" },
    { id: "capricorn", name: { en: "Capricorn", hi: "मकर" }, dateRange: "Dec 22 - Jan 19", imageUrl: "zodiac/capricorn.jpg" },
    { id: "aquarius", name: { en: "Aquarius", hi: "कुंभ" }, dateRange: "Jan 20 - Feb 18", imageUrl: "zodiac/aquarious.jpg" },
    { id: "pisces", name: { en: "Pisces", hi: "मीन" }, dateRange: "Feb 19 - Mar 20", imageUrl: "/zodiac/pieces.jpg" }
];