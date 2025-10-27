import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Gift, ExternalLink } from 'lucide-react';

const GiftFinderApp = () => {
  const AFFILIATE_TAG = 'jwdrph-20';
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [daysUntilChristmas, setDaysUntilChristmas] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const christmas = new Date('2025-12-25');
      const today = new Date();
      const diff = christmas - today;
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDaysUntilChristmas(days);
    };
    calculateDays();
  }, []);

  const ChristmasLights = () => (
    <div className="absolute top-0 left-0 right-0 h-8 flex justify-around items-start overflow-hidden pointer-events-none">
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((i) => (
        <div key={i} className="relative">
          <div className="w-0.5 h-4 bg-green-800" />
          <div 
            className={'w-3 h-4 rounded-full animate-pulse ' + (
              i % 4 === 0 ? 'bg-red-500' : 
              i % 4 === 1 ? 'bg-yellow-400' : 
              i % 4 === 2 ? 'bg-blue-500' : 'bg-green-500'
            )}
            style={{ animationDelay: (i * 0.2) + 's' }}
          />
        </div>
      ))}
    </div>
  );

  const Snowman = () => (
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-300 relative">
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rounded-full" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-1 bg-orange-500 rounded" />
      </div>
      <div className="w-10 h-10 bg-white rounded-full border-2 border-gray-300 relative -mt-2">
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full" />
        <div className="absolute top-4 left-2 w-1.5 h-1.5 bg-black rounded-full" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rounded-full" />
      </div>
      <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 -mt-2" />
    </div>
  );

  const Santa = () => (
    <div className="flex flex-col items-center">
      <div className="w-10 h-6 bg-red-600 rounded-t-full relative">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-white" />
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
      </div>
      <div className="w-8 h-8 bg-pink-200 rounded-full relative -mt-1">
        <div className="absolute top-2 left-1.5 w-1.5 h-1.5 bg-black rounded-full" />
        <div className="absolute top-2 right-1.5 w-1.5 h-1.5 bg-black rounded-full" />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-white rounded-full" />
      </div>
      <div className="w-10 h-8 bg-red-600 rounded relative -mt-1">
        <div className="absolute top-0 left-0 right-0 h-1 bg-black" />
      </div>
    </div>
  );

  const questions = [
    {
      id: 'priceRange',
      question: 'What is your budget?',
      options: [
        { value: 'under25', label: 'Under $25' },
        { value: '25to50', label: '$25 - $50' },
        { value: '50to100', label: '$50 - $100' },
        { value: '100to200', label: '$100 - $200' },
        { value: 'over200', label: 'Over $200' }
      ],
      multiSelect: false
    },
    {
      id: 'age',
      question: 'What is their age range?',
      options: [
        { value: 'smallchild', label: 'Small Child (0-3)' },
        { value: 'mediumchild', label: 'Medium Child (3-8)' },
        { value: 'liln', label: 'Lil N (8-14)' },
        { value: 'youngn', label: 'Young N (15-25)' },
        { value: 'bigbro', label: 'Big Bro (26-35)' },
        { value: 'unc', label: 'Unc (36-44)' },
        { value: 'og', label: 'OG (44+)' }
      ],
      multiSelect: false
    },
    {
      id: 'gender',
      question: 'What is their gender?',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'prefer-not', label: 'Prefer not to say' }
      ],
      multiSelect: false
    },
    {
      id: 'occupation',
      question: 'What best describes their occupation or lifestyle?',
      options: [
        { value: 'student', label: 'Student' },
        { value: 'professional', label: 'Office Professional' },
        { value: 'creative', label: 'Creative/Artist' },
        { value: 'healthcare', label: 'Healthcare Worker' },
        { value: 'teacher', label: 'Teacher/Educator' },
        { value: 'entrepreneur', label: 'Entrepreneur' },
        { value: 'retired', label: 'Retired' },
        { value: 'homemaker', label: 'Homemaker' }
      ],
      multiSelect: false
    },
    {
      id: 'hobbies',
      question: 'What are their hobbies? (Select all that apply)',
      options: [
        { value: 'reading', label: 'Reading' },
        { value: 'gaming', label: 'Gaming' },
        { value: 'cooking', label: 'Cooking/Baking' },
        { value: 'fitness', label: 'Fitness/Sports' },
        { value: 'gardening', label: 'Gardening' },
        { value: 'photography', label: 'Photography' },
        { value: 'music', label: 'Playing Music' },
        { value: 'art', label: 'Art & Crafts' },
        { value: 'diy', label: 'DIY/Woodworking' },
        { value: 'collecting', label: 'Collecting' }
      ],
      multiSelect: true
    },
    {
      id: 'musicGenre',
      question: 'What music genres do they enjoy? (Select all that apply)',
      options: [
        { value: 'rock', label: 'Rock' },
        { value: 'pop', label: 'Pop' },
        { value: 'hiphop', label: 'Hip Hop/Rap' },
        { value: 'country', label: 'Country' },
        { value: 'jazz', label: 'Jazz/Blues' },
        { value: 'classical', label: 'Classical' },
        { value: 'electronic', label: 'Electronic/EDM' },
        { value: 'indie', label: 'Indie/Alternative' }
      ],
      multiSelect: true
    },
    {
      id: 'bookGenre',
      question: 'What types of books do they enjoy? (Select all that apply)',
      options: [
        { value: 'fiction', label: 'Fiction/Novels' },
        { value: 'mystery', label: 'Mystery/Thriller' },
        { value: 'scifi', label: 'Sci-Fi/Fantasy' },
        { value: 'romance', label: 'Romance' },
        { value: 'biography', label: 'Biography/Memoir' },
        { value: 'selfhelp', label: 'Self-Help' },
        { value: 'history', label: 'History' },
        { value: 'cookbook', label: 'Cookbooks' }
      ],
      multiSelect: true
    },
    {
      id: 'interests',
      question: 'What are they interested in? (Select all that apply)',
      options: [
        { value: 'tech', label: 'Technology/Gadgets' },
        { value: 'fashion', label: 'Fashion/Style' },
        { value: 'home', label: 'Home Decor' },
        { value: 'travel', label: 'Travel/Adventure' },
        { value: 'wellness', label: 'Health & Wellness' },
        { value: 'pets', label: 'Pets/Animals' },
        { value: 'outdoors', label: 'Outdoors/Nature' },
        { value: 'food', label: 'Food & Drink' },
        { value: 'movies', label: 'Movies/TV' },
        { value: 'science', label: 'Science/Learning' }
      ],
      multiSelect: true
    },
    {
      id: 'recipient',
      question: 'What is your relationship to this person?',
      options: [
        { value: 'parent', label: 'Parent' },
        { value: 'partner', label: 'Partner/Spouse' },
        { value: 'friend', label: 'Friend' },
        { value: 'sibling', label: 'Sibling' },
        { value: 'coworker', label: 'Coworker' },
        { value: 'child', label: 'Child' },
        { value: 'grandparent', label: 'Grandparent' }
      ],
      multiSelect: false
    }
  ];

  const giftDatabase = {
    'reading-under25': [
      { name: 'LED Neck Reading Light', asin: 'B07L95BXMB', price: '$19.99' },
      { name: 'Book Stand Holder', asin: 'B01FYL0DRQ', price: '$22.99' },
      { name: 'Reading Light Clip', asin: 'B00VWUX83Q', price: '$14.99' }
    ],
    'reading-25to50': [
      { name: 'Decorative Bookends', asin: 'B07ZVQGFF5', price: '$29.99' },
      { name: 'Book Stand Adjustable', asin: 'B01FYL0DRQ', price: '$39.99' }
    ],
    'reading-50to100': [
      { name: 'Kindle Paperwhite', asin: 'B08KTZ8249', price: '$89.99' },
      { name: 'Bookends Set of 2', asin: 'B07ZVQGFF5', price: '$69.99' }
    ],
    'gaming-under25': [
      { name: 'Gaming Mouse Pad XXL', asin: 'B071P7TRVP', price: '$19.99' },
      { name: 'Controller Stand', asin: 'B07VB9JWFF', price: '$14.99' }
    ],
    'gaming-25to50': [
      { name: 'RGB Gaming Keyboard', asin: 'B07ZGDPT4M', price: '$39.99' },
      { name: 'Gaming Mouse', asin: 'B07FBTKV4T', price: '$44.99' }
    ],
    'gaming-50to100': [
      { name: 'HyperX Cloud II Headset', asin: 'B00SAYCXWG', price: '$79.99' },
      { name: 'Razer DeathAdder Mouse', asin: 'B07FBTKV4T', price: '$69.99' }
    ],
    'gaming-100to200': [
      { name: 'Logitech G PRO Wireless', asin: 'B07GCKQD77', price: '$129.99' },
      { name: 'SteelSeries Arctis 7', asin: 'B07FZVXF5L', price: '$149.99' }
    ],
    'cooking-under25': [
      { name: 'Silicone Baking Mat', asin: 'B01MRNEE6W', price: '$13.99' },
      { name: 'Kitchen Utensil Set', asin: 'B07TWWDHQ8', price: '$19.99' }
    ],
    'cooking-25to50': [
      { name: 'Mixing Bowls Set', asin: 'B00LGLHUA0', price: '$34.99' },
      { name: 'Digital Kitchen Scale', asin: 'B004164SRA', price: '$26.99' }
    ],
    'cooking-50to100': [
      { name: 'Lodge Cast Iron Skillet', asin: 'B00006JSUA', price: '$54.99' },
      { name: 'Instant Pot Duo 6 Qt', asin: 'B06Y1MP2PY', price: '$79.99' }
    ],
    'cooking-100to200': [
      { name: 'Ninja Foodi Air Fryer', asin: 'B07VM1FT8Y', price: '$129.99' },
      { name: 'Le Creuset Dutch Oven', asin: 'B00005QFOW', price: '$189.99' }
    ],
    'fitness-under25': [
      { name: 'Jump Rope Speed', asin: 'B075ZKDVDQ', price: '$12.99' },
      { name: 'Resistance Bands Set', asin: 'B07GDCJRYF', price: '$18.99' }
    ],
    'fitness-25to50': [
      { name: 'Foam Roller', asin: 'B00XM2MRGI', price: '$29.99' },
      { name: 'Yoga Block 2 Pack', asin: 'B00WQWKTD4', price: '$24.99' }
    ],
    'fitness-50to100': [
      { name: 'Resistance Bands Heavy', asin: 'B01AVDVHTI', price: '$54.99' },
      { name: 'Manduka PRO Yoga Mat', asin: 'B0039J8VRS', price: '$69.99' }
    ],
    'fitness-100to200': [
      { name: 'Bowflex SelectTech Dumbbells', asin: 'B001ARYU58', price: '$149.99' },
      { name: 'Fitbit Charge 6', asin: 'B0CC5XRCQL', price: '$159.99' }
    ],
    'tech-under25': [
      { name: 'Phone Stand Adjustable', asin: 'B07DLXV6PZ', price: '$12.99' },
      { name: 'USB C Cable 3 Pack', asin: 'B01GGKYKQM', price: '$9.99' }
    ],
    'tech-25to50': [
      { name: 'Anker Wireless Charger', asin: 'B07DBXZZN3', price: '$29.99' },
      { name: 'USB Hub 7 Port', asin: 'B07L32B9C2', price: '$34.99' }
    ],
    'tech-50to100': [
      { name: 'Tile Mate 4 Pack', asin: 'B09B2WLRWH', price: '$54.99' },
      { name: 'Logitech HD Webcam', asin: 'B006JH8T3S', price: '$69.99' }
    ],
    'tech-100to200': [
      { name: 'Apple AirPods 3rd Gen', asin: 'B0BDHB9Y8H', price: '$169.99' },
      { name: 'Anker PowerCore 26800', asin: 'B01JIWQPMW', price: '$119.99' }
    ],
    'fashion-under25': [
      { name: 'Cashmere Scarf', asin: 'B075FY2TQT', price: '$16.99' },
      { name: 'Carhartt Beanie', asin: 'B002G9UDYG', price: '$12.99' }
    ],
    'fashion-25to50': [
      { name: 'Fossil Leather Wallet', asin: 'B00JQXXL2A', price: '$39.99' },
      { name: 'Leather Belt Brown', asin: 'B00ZYIQVJC', price: '$29.99' }
    ],
    'home-under25': [
      { name: 'Picture Frame Set', asin: 'B07DL2TQNB', price: '$18.99' },
      { name: 'LED String Lights', asin: 'B01J84BS06', price: '$15.99' }
    ],
    'home-25to50': [
      { name: 'InnoGear Diffuser', asin: 'B01H1CB0KO', price: '$39.99' },
      { name: 'Throw Blanket Soft', asin: 'B07VFZM2JL', price: '$34.99' }
    ],
    'travel-under25': [
      { name: 'Luggage Tags 4 Pack', asin: 'B07JNTM9VC', price: '$11.99' },
      { name: 'Travel Neck Pillow', asin: 'B00F61ZCV8', price: '$18.99' }
    ],
    'travel-25to50': [
      { name: 'Toiletry Bag Hanging', asin: 'B01FJP6PTE', price: '$34.99' },
      { name: 'Packing Cubes 4 Set', asin: 'B014VBGUCA', price: '$29.99' }
    ],
    'music-under25': [
      { name: 'Guitar Picks 50 Pack', asin: 'B0002CZVMQ', price: '$9.99' },
      { name: 'Music Stand Folding', asin: 'B003VWYX2M', price: '$19.99' }
    ],
    'music-25to50': [
      { name: 'Headphone Stand', asin: 'B00E8D8WXW', price: '$29.99' },
      { name: 'Guitar Strap', asin: 'B0002CZVMQ', price: '$24.99' }
    ],
    'music-50to100': [
      { name: 'JBL Flip 6 Speaker', asin: 'B096XDKNDP', price: '$79.99' },
      { name: 'Audio-Technica Turntable', asin: 'B07N3X7KPX', price: '$89.99' }
    ],
    'art-under25': [
      { name: 'Sketch Pad 9x12', asin: 'B0027A7GCS', price: '$14.99' },
      { name: 'Colored Pencils 24', asin: 'B00PCST276', price: '$19.99' }
    ],
    'photography-under25': [
      { name: 'Camera Strap Neck', asin: 'B00KTYCFT2', price: '$16.99' },
      { name: 'SD Card 64GB', asin: 'B073JYC4XM', price: '$19.99' }
    ],
    'photography-50to100': [
      { name: 'Manfrotto Compact Tripod', asin: 'B00L6F16L0', price: '$79.99' },
      { name: 'Neewer Ring Light', asin: 'B07T8FBZC2', price: '$69.99' }
    ],
    'wellness-under25': [
      { name: 'Face Masks 20 Pack', asin: 'B08P3QL6DP', price: '$12.99' },
      { name: 'Bath Bombs Gift Set', asin: 'B01MFGN8S5', price: '$19.99' }
    ],
    'wellness-25to50': [
      { name: 'Essential Oils Set', asin: 'B01N2JBA9I', price: '$34.99' },
      { name: 'Jade Roller Face', asin: 'B07PGQKB7Z', price: '$29.99' }
    ],
    'pets-under25': [
      { name: 'KONG Classic Dog Toy', asin: 'B0002AR0II', price: '$14.99' },
      { name: 'Cat Toys Variety', asin: 'B078W7P71W', price: '$19.99' }
    ],
    'outdoors-under25': [
      { name: 'ENO Hammock', asin: 'B001DDPHFQ', price: '$19.99' },
      { name: 'Petzl Headlamp', asin: 'B086P1CHWT', price: '$16.99' }
    ],
    'outdoors-50to100': [
      { name: 'Hydro Flask 32 oz', asin: 'B084JXXJVZ', price: '$54.99' },
      { name: 'Osprey Daylite Plus', asin: 'B00E0EW1L8', price: '$79.99' }
    ],
    'food-under25': [
      { name: 'Starbucks Coffee Variety', asin: 'B078SJX37K', price: '$19.99' },
      { name: 'Hot Sauce Gift Set', asin: 'B078JTLNTN', price: '$16.99' }
    ],
    'gardening-under25': [
      { name: 'Gardening Tools Set', asin: 'B07R8PW8KZ', price: '$19.99' },
      { name: 'Garden Gloves 3 Pairs', asin: 'B01N21K3QZ', price: '$12.99' }
    ],
    'diy-under25': [
      { name: 'Screwdriver Set 6 Piece', asin: 'B00IRL3WP4', price: '$18.99' },
      { name: 'Stanley Tape Measure', asin: 'B00002X2GQ', price: '$14.99' }
    ],
    'diy-50to100': [
      { name: 'Leatherman Multi-Tool', asin: 'B0009JS6CU', price: '$79.99' }
    ],
    'collecting-under25': [
      { name: 'Display Case Acrylic', asin: 'B01LXY3IMH', price: '$19.99' }
    ],
    'movies-under25': [
      { name: 'Popcorn Maker Machine', asin: 'B01N0NKDU6', price: '$19.99' }
    ],
    'science-under25': [
      { name: 'Science Experiment Kit', asin: 'B001AZ51P4', price: '$19.99' }
    ],
    'default': [
      { name: 'Amazon Gift Card $25', asin: 'B0CQNWSC6J', price: '$25.00' },
      { name: 'Godiva Chocolate Box', asin: 'B00HUKT7ZG', price: '$29.99' },
      { name: 'Starbucks Gift Card', asin: 'B07RTN4C78', price: '$25.00' },
      { name: 'Sherpa Blanket Soft', asin: 'B07VFZM2JL', price: '$39.99' },
      { name: 'Coffee Mug Gift Set', asin: 'B08KRZMW99', price: '$34.99' },
      { name: 'Yankee Candle Set', asin: 'B000V9Z3XA', price: '$44.99' },
      { name: 'Bath Bombs Luxury', asin: 'B01MFGN8S5', price: '$24.99' },
      { name: 'Gourmet Snacks Box', asin: 'B00HUKT7ZG', price: '$39.99' }
    ]
  };

  const handleOptionToggle = (questionId, value) => {
    const question = questions[currentQuestion];
    
    if (question.multiSelect) {
      const current = answers[questionId] || [];
      const newValue = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      setAnswers({ ...answers, [questionId]: newValue });
    } else {
      setAnswers({ ...answers, [questionId]: value });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const getRecommendedGifts = () => {
    const priceRange = answers.priceRange;
    const hobbies = answers.hobbies || [];
    const interests = answers.interests || [];
    
    let recommendations = [];
    
    hobbies.forEach(hobby => {
      const key = hobby + '-' + priceRange;
      if (giftDatabase[key]) {
        recommendations.push(...giftDatabase[key]);
      }
    });
    
    interests.forEach(interest => {
      const key = interest + '-' + priceRange;
      if (giftDatabase[key]) {
        recommendations.push(...giftDatabase[key]);
      }
    });
    
    if (recommendations.length === 0) {
      recommendations = giftDatabase.default;
    }
    
    const uniqueRecommendations = recommendations.filter((item, index, self) =>
      index === self.findIndex((t) => t.asin === item.asin)
    );
    
    return uniqueRecommendations.slice(0, 10);
  };

  const ProductCarousel = ({ products }) => {
    const carouselRef = React.useRef(null);

    const scroll = (direction) => {
      const container = carouselRef.current;
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    return (
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-4">
              <div className="w-full h-48 bg-gradient-to-br from-amber-50 to-orange-100 rounded mb-3 flex items-center justify-center p-4">
                <Gift className="w-20 h-20 text-amber-600" />
              </div>
              <div className="mb-3">
                <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                <p className="text-green-600 font-bold text-lg">{product.price}</p>
              </div>
              <a
                href={`https://www.amazon.com/dp/${product.asin}?tag=${AFFILIATE_TAG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium w-full"
              >
                View on Amazon <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  };

  const currentQ = questions[currentQuestion];
  const currentAnswers = answers[currentQ?.id] || (currentQ?.multiSelect ? [] : '');
  const canProceed = currentQ?.multiSelect ? currentAnswers.length > 0 : currentAnswers !== '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-blue-50 p-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center relative overflow-hidden">
          <ChristmasLights />
          
          <div className="flex items-center justify-center gap-6 mb-2 mt-6">
            <Snowman />
            <div className="flex items-center gap-3">
              <Gift className="w-8 h-8 text-red-600" />
              <h1 className="text-3xl font-bold text-gray-800">Christmas Gift Finder</h1>
              <Gift className="w-8 h-8 text-green-600" />
            </div>
            <Santa />
          </div>
          <div className="text-4xl font-bold text-red-600">
            {daysUntilChristmas} days until Christmas!
          </div>
        </div>

        {!showResults ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: ((currentQuestion + 1) / questions.length) * 100 + '%' }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">{currentQ.question}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {currentQ.options.map((option) => {
                const isSelected = currentQ.multiSelect
                  ? currentAnswers.includes(option.value)
                  : currentAnswers === option.value;
                
                return (
                  <button
                    key={option.value}
                    onClick={() => handleOptionToggle(currentQ.id, option.value)}
                    className={'p-4 rounded-lg border-2 text-left transition-all ' + (
                      isSelected
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-400'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ' + (
                        isSelected ? 'bg-green-600 border-green-600' : 'border-gray-300'
                      )}>
                        {isSelected && <div className="text-white text-sm">✓</div>}
                      </div>
                      <span className="font-medium">{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between gap-4">
              <button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {currentQuestion === questions.length - 1 ? 'See Recommendations' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
              Perfect Gift Ideas! 🎁
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Based on your answers, here are some great gift recommendations:
            </p>
            
            <ProductCarousel products={getRecommendedGifts()} />
            
            <div className="mt-8 text-center">
              <button
                onClick={handleRestart}
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftFinderApp;