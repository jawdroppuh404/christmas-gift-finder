import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Gift, ExternalLink } from 'lucide-react';

const GiftFinderApp = () => {
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
            className={`w-3 h-4 rounded-full animate-pulse ${
              i % 4 === 0 ? 'bg-red-500' : 
              i % 4 === 1 ? 'bg-yellow-400' : 
              i % 4 === 2 ? 'bg-blue-500' : 'bg-green-500'
            }`}
            style={{ animationDelay: `${i * 0.2}s` }}
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
    { name: 'LED Neck Reading Light', asin: 'B0C8MXXB9K', price: '$19.99' },
    { name: 'Book Light for Reading', asin: 'B07WNRN9WQ', price: '$22.99' },
    { name: 'Reading Light Clip', asin: 'B09NB7MCB1', price: '$14.99' },
    { name: 'Bookmark Set Metal', asin: 'B07XZPYVHT', price: '$12.99' },
    { name: 'Book Sleeve Holder', asin: 'B07VNLH3GN', price: '$16.99' }
  ],
  'reading-25to50': [
    { name: 'Glocusent Upgraded Reading Light', asin: 'B09W63KBXQ', price: '$29.99' },
    { name: 'Gritin LED Neck Light', asin: 'B0CBMKLC84', price: '$39.99' },
    { name: 'Reading Journal Leather', asin: 'B08QZ4YQKJ', price: '$34.99' },
    { name: 'Book Embosser Stamp', asin: 'B07MDHLN2X', price: '$27.99' },
    { name: 'Reading Pillow Support', asin: 'B07X7M3QTJ', price: '$44.99' }
  ],
  'reading-50to100': [
    { name: 'Kindle Paperwhite 2024', asin: 'B0CFPJYX7P', price: '$89.99' },
    { name: 'Book Light Floor Lamp', asin: 'B07L2JS5MG', price: '$69.99' },
    { name: 'Reading Chair Cushion', asin: 'B08P3QWRVX', price: '$59.99' },
    { name: 'enclize LED Reading Light', asin: 'B0BHWHM69X', price: '$79.99' }
  ],
  'reading-100to200': [
    { name: 'Kindle Paperwhite Signature', asin: 'B0CFPTK5JG', price: '$179.99' },
    { name: 'Premium Reading Chair', asin: 'B07QLPBZ75', price: '$149.99' },
    { name: 'Luxury Book Stand', asin: 'B01FYL0DRQ', price: '$189.99' }
  ],
  'reading-over200': [
    { name: 'Kindle Scribe', asin: 'B09BS26B8B', price: '$339.99' },
    { name: 'Designer Reading Chair', asin: 'B07QLPBZ75', price: '$299.99' },
    { name: 'Premium Leather Chair', asin: 'B07QLPBZ75', price: '$449.99' }
  ],
  'gaming-under25': [
    { name: 'Gaming Mouse Pad XXL', asin: 'B06X19FLTC', price: '$19.99' },
    { name: 'Controller Stand', asin: 'B07VB9JWFF', price: '$14.99' },
    { name: 'LED Strip Lights RGB', asin: 'B0B4NT4J28', price: '$22.99' },
    { name: 'Cable Management Clips', asin: 'B07JZQK4N1', price: '$11.99' }
  ],
  'gaming-25to50': [
    { name: 'RGB Gaming Keyboard', asin: 'B07ZGDPT4M', price: '$39.99' },
    { name: 'Gaming Mouse', asin: 'B07FBTKV4T', price: '$44.99' },
    { name: 'Controller Charger', asin: 'B07VB9JWFF', price: '$29.99' },
    { name: 'Gaming Chair Cushion', asin: 'B08HLQY6Q8', price: '$34.99' }
  ],
  'gaming-50to100': [
    { name: 'HyperX Cloud II Headset', asin: 'B00SAYCXWG', price: '$79.99' },
    { name: 'Razer DeathAdder Mouse', asin: 'B07FBTKV4T', price: '$69.99' },
    { name: 'Mechanical Keyboard RGB', asin: 'B07ZGDPT4M', price: '$89.99' },
    { name: 'Monitor Arm Mount', asin: 'B07T5SY43L', price: '$74.99' }
  ],
  'gaming-100to200': [
    { name: 'Logitech G PRO Wireless', asin: 'B07GCKQD77', price: '$129.99' },
    { name: 'SteelSeries Arctis 7', asin: 'B07FZVXF5L', price: '$149.99' },
    { name: 'Gaming Chair Pro', asin: 'B07HNMF3FQ', price: '$189.99' },
    { name: 'Elgato Stream Deck', asin: 'B0BXLQKV3K', price: '$149.99' }
  ],
  'gaming-over200': [
    { name: 'Herman Miller Gaming Chair', asin: 'B08C7YKVPW', price: '$1,495' },
    { name: 'Gaming Monitor 4K', asin: 'B07HNMF3FQ', price: '$599.99' },
    { name: 'Gaming Desk Ultimate', asin: 'B07HNMF3FQ', price: '$399.99' }
  ],
  'cooking-under25': [
    { name: 'Silicone Baking Mat', asin: 'B01MRNEE6W', price: '$13.99' },
    { name: 'Kitchen Utensil Set', asin: 'B07TWWDHQ8', price: '$19.99' },
    { name: 'Measuring Cups Set', asin: 'B00E4C1KJQ', price: '$16.99' },
    { name: 'Cutting Board Bamboo', asin: 'B07QV47C2L', price: '$22.99' }
  ],
  'cooking-25to50': [
    { name: 'Mixing Bowls Set', asin: 'B00LGLHUA0', price: '$34.99' },
    { name: 'Digital Kitchen Scale', asin: 'B004164SRA', price: '$26.99' },
    { name: 'Cookbook Stand Bamboo', asin: 'B01FYL0DRQ', price: '$29.99' },
    { name: 'Knife Sharpener Pro', asin: 'B07YVGRYC6', price: '$39.99' }
  ],
  'cooking-50to100': [
    { name: 'Lodge Cast Iron Skillet 12"', asin: 'B00G2XGC88', price: '$54.99' },
    { name: 'Instant Pot Duo 6 Qt', asin: 'B00FLYWNYQ', price: '$79.99' },
    { name: 'KitchenAid Hand Mixer', asin: 'B00005UP2P', price: '$59.99' },
    { name: 'Knife Set Professional', asin: 'B07WTVV899', price: '$89.99' }
  ],
  'cooking-100to200': [
    { name: 'Ninja Foodi Air Fryer', asin: 'B07VM1FT8Y', price: '$129.99' },
    { name: 'Le Creuset Dutch Oven', asin: 'B00005QFOW', price: '$189.99' },
    { name: 'Stand Mixer Professional', asin: 'B00005UP2P', price: '$179.99' }
  ],
  'cooking-over200': [
    { name: 'KitchenAid Stand Mixer Pro', asin: 'B00063ULMI', price: '$379.99' },
    { name: 'Breville Espresso Machine', asin: 'B00I6JGGP0', price: '$449.99' },
    { name: 'Premium Cookware Set', asin: 'B00005QFOW', price: '$599.99' }
  ],
  'fitness-under25': [
    { name: 'Jump Rope Speed', asin: 'B075ZKDVDQ', price: '$12.99' },
    { name: 'Resistance Bands Set', asin: 'B074775QXB', price: '$18.99' },
    { name: 'Yoga Mat Basic', asin: 'B071RM52HC', price: '$22.99' },
    { name: 'Water Bottle 32oz', asin: 'B07QLTN6CP', price: '$19.99' }
  ],
  'fitness-25to50': [
    { name: 'Foam Roller TriggerPoint', asin: 'B0040EKZDY', price: '$29.99' },
    { name: 'Yoga Block 2 Pack', asin: 'B00WQWKTD4', price: '$24.99' },
    { name: 'Exercise Mat Thick', asin: 'B071RM52HC', price: '$39.99' },
    { name: 'Gym Bag Large', asin: 'B07QLPBZ75', price: '$44.99' }
  ],
  'fitness-50to100': [
    { name: 'Resistance Bands Set of 5', asin: 'B09MJKJYLQ', price: '$54.99' },
    { name: 'Manduka PRO Yoga Mat', asin: 'B0039J8VRS', price: '$69.99' },
    { name: 'Adjustable Dumbbells 25lb', asin: 'B002AST2N2', price: '$89.99' },
    { name: 'Ab Roller Pro', asin: 'B01N1NS0GI', price: '$59.99' }
  ],
  'fitness-100to200': [
    { name: 'Bowflex SelectTech Dumbbells', asin: 'B001ARYU58', price: '$149.99' },
    { name: 'Fitbit Charge 6', asin: 'B0CC5XRCQL', price: '$159.99' },
    { name: 'Peloton Cycling Shoes', asin: 'B07P7QXBW6', price: '$125.00' },
    { name: 'Exercise Bike Stationary', asin: 'B07QLPBZ75', price: '$189.99' }
  ],
  'fitness-over200': [
    { name: 'Concept2 Rowing Machine', asin: 'B00NH9WEUA', price: '$945.00' },
    { name: 'Bowflex Home Gym', asin: 'B001ARYU58', price: '$799.99' },
    { name: 'Treadmill Folding', asin: 'B07QLPBZ75', price: '$599.99' }
  ],
  'tech-under25': [
    { name: 'Phone Stand Adjustable', asin: 'B07DLXV6PZ', price: '$12.99' },
    { name: 'USB C Cable 3 Pack', asin: 'B01GGKYKQM', price: '$9.99' },
    { name: 'PopSocket Phone Grip', asin: 'B07KW5BHSJ', price: '$14.99' },
    { name: 'Screen Protector Pack', asin: 'B08P3LNXDC', price: '$11.99' }
  ],
  'tech-25to50': [
    { name: 'Anker Wireless Charger', asin: 'B07THHQMHM', price: '$29.99' },
    { name: 'USB Hub 7 Port', asin: 'B07L32B9C2', price: '$34.99' },
    { name: 'Laptop Sleeve 13 inch', asin: 'B01DWH45WA', price: '$24.99' },
    { name: 'Webcam Cover Set', asin: 'B08BLVZT72', price: '$19.99' }
  ],
  'tech-50to100': [
    { name: 'Tile Mate 4 Pack', asin: 'B09B2WLRWH', price: '$54.99' },
    { name: 'Logitech HD Webcam', asin: 'B006JH8T3S', price: '$69.99' },
    { name: 'Blue Yeti Microphone', asin: 'B075MSG795', price: '$99.99' },
    { name: 'Mechanical Keyboard Mini', asin: 'B07ZPRYK4H', price: '$79.99' }
  ],
  'tech-100to200': [
    { name: 'Apple AirPods 3rd Gen', asin: 'B0BDHB9Y8H', price: '$169.99' },
    { name: 'Anker PowerCore 26800', asin: 'B01JIWQPMW', price: '$119.99' },
    { name: 'Samsung T7 SSD 1TB', asin: 'B0874XN4D8', price: '$129.99' },
    { name: 'Roku Streaming Stick 4K', asin: 'B09BKCDXZC', price: '$49.99' }
  ],
  'tech-over200': [
    { name: 'Apple AirPods Pro 2', asin: 'B0CHWRXH8B', price: '$249.99' },
    { name: 'iPad 10th Generation', asin: 'B0BJLXMVMV', price: '$349.00' },
    { name: 'Apple Watch SE', asin: 'B0CHX3TK56', price: '$249.00' },
    { name: 'MacBook Air M1', asin: 'B08N5WRWNW', price: '$999.00' }
  ],
  'fashion-under25': [
    { name: 'Cashmere Scarf', asin: 'B075FY2TQT', price: '$16.99' },
    { name: 'Carhartt Beanie', asin: 'B002G9UDYG', price: '$12.99' },
    { name: 'Leather Wallet Slim', asin: 'B00JQXXL2A', price: '$22.99' },
    { name: 'Sunglasses Polarized', asin: 'B001VS50AM', price: '$19.99' }
  ],
  'fashion-25to50': [
    { name: 'Fossil Leather Wallet', asin: 'B0DQ1ZC7Q1', price: '$39.99' },
    { name: 'Leather Belt Brown', asin: 'B00ZYIQVJC', price: '$29.99' },
    { name: 'Watch Display Case', asin: 'B07PGLQKD7', price: '$34.99' },
    { name: 'Designer Sunglasses', asin: 'B001VS50AM', price: '$44.99' }
  ],
  'fashion-50to100': [
    { name: 'Timex Weekender Watch', asin: 'B0DFQHPJHH', price: '$64.99' },
    { name: 'Levi 501 Original Jeans', asin: 'B0018OLG9S', price: '$59.99' },
    { name: 'Leather Handbag', asin: 'B07VL82MPM', price: '$79.99' },
    { name: 'Designer Belt Leather', asin: 'B00ZYIQVJC', price: '$89.99' }
  ],
  'fashion-100to200': [
    { name: 'Citizen Eco-Drive Watch', asin: 'B000EQS1RW', price: '$149.99' },
    { name: 'Leather Jacket', asin: 'B07VL82MPM', price: '$189.99' },
    { name: 'Designer Handbag Premium', asin: 'B07VL82MPM', price: '$179.99' }
  ],
  'fashion-over200': [
    { name: 'Designer Leather Bag', asin: 'B07VL82MPM', price: '$299.99' },
    { name: 'Premium Leather Coat', asin: 'B0018OLG9S', price: '$399.99' },
    { name: 'Luxury Watch', asin: 'B000EQS1RW', price: '$499.99' }
  ],
  'home-under25': [
    { name: 'Picture Frame Set', asin: 'B07DL2TQNB', price: '$18.99' },
    { name: 'LED String Lights 100FT', asin: 'B0B4NT4J28', price: '$15.99' },
    { name: 'Scented Candles Set', asin: 'B0D3H6H5C4', price: '$22.99' },
    { name: 'Throw Pillow Covers', asin: 'B08C7HYQB4', price: '$19.99' }
  ],
  'home-25to50': [
    { name: 'InnoGear Diffuser', asin: 'B01H1CB0KO', price: '$39.99' },
    { name: 'Wall Art Canvas 3 Piece', asin: 'B07PH1M5WS', price: '$44.99' },
    { name: 'Throw Blanket Soft', asin: 'B07VFZM2JL', price: '$34.99' },
    { name: 'Decorative Vase Set', asin: 'B08KQLK9ZQ', price: '$29.99' }
  ],
  'home-50to100': [
    { name: 'Yankee Candle Large Jar', asin: 'B000V9Z3XA', price: '$59.99' },
    { name: 'Sherpa Fleece Blanket', asin: 'B07VFZM2JL', price: '$54.99' },
    { name: 'Wall Mirror Round', asin: 'B07PH1M5WS', price: '$79.99' },
    { name: 'Coffee Table Books Set', asin: 'B07WKX1X6F', price: '$69.99' }
  ],
  'home-100to200': [
    { name: 'Area Rug 5x7', asin: 'B07VFZM2JL', price: '$149.99' },
    { name: 'Floor Lamp Modern', asin: 'B07PH1M5WS', price: '$129.99' },
    { name: 'Wall Art Large Canvas', asin: 'B07PH1M5WS', price: '$179.99' }
  ],
  'home-over200': [
    { name: 'Accent Chair Designer', asin: 'B07VFZM2JL', price: '$349.99' },
    { name: 'Chandelier Crystal', asin: 'B07PH1M5WS', price: '$299.99' },
    { name: 'Ottoman Storage Bench', asin: 'B07VFZM2JL', price: '$249.99' }
  ],
  'travel-under25': [
    { name: 'Luggage Tags 4 Pack', asin: 'B07JNTM9VC', price: '$11.99' },
    { name: 'Travel Neck Pillow 2024', asin: 'B0D6YD9ZB4', price: '$18.99' },
    { name: 'TSA Approved Locks', asin: 'B00E8CG9E0', price: '$12.99' },
    { name: 'Travel Bottles Set', asin: 'B08P3QL6DP', price: '$14.99' }
  ],
  'travel-25to50': [
    { name: 'Toiletry Bag Hanging', asin: 'B01FJP6PTE', price: '$34.99' },
    { name: 'Packing Cubes 4 Set', asin: 'B014VBGUCA', price: '$29.99' },
    { name: 'Travel Adapter Universal', asin: 'B01DJ7T5HW', price: '$24.99' },
    { name: 'Luggage Scale Digital', asin: 'B00NW62PCA', price: '$19.99' }
  ],
  'travel-50to100': [
    { name: 'Osprey Daypack', asin: 'B00E0EW1L8', price: '$69.99' },
    { name: 'Anker PowerCore 20100', asin: 'B00X5RV14Y', price: '$59.99' },
    { name: 'Travel Backpack 40L', asin: 'B07RS1Z6VR', price: '$79.99' },
    { name: 'Compression Socks', asin: 'B07QLTN6CP', price: '$24.99' }
  ],
  'travel-100to200': [
    { name: 'Samsonite Carry-On', asin: 'B01J24H2K0', price: '$149.99' },
    { name: 'Bose QuietComfort Earbuds', asin: 'B08C4KWM9T', price: '$179.99' },
    { name: 'Travel Duffel Bag Premium', asin: 'B07RS1Z6VR', price: '$129.99' }
  ],
  'travel-over200': [
    { name: 'Away Luggage Set', asin: 'B01J24H2K0', price: '$545.00' },
    { name: 'Sony WH-1000XM5', asin: 'B09XS7JWHH', price: '$399.99' },
    { name: 'GoPro HERO11 Black', asin: 'B0B8PRWR5L', price: '$449.99' }
  ],
  'music-under25': [
    { name: 'Guitar Picks Sampler', asin: 'B00DSSOVJW', price: '$9.99' },
    { name: 'Music Stand Folding', asin: 'B003VWYX2M', price: '$19.99' },
    { name: 'Guitar Strings Set', asin: 'B0002E1G5C', price: '$14.99' },
    { name: 'Instrument Cable', asin: 'B07L3Z5BW2', price: '$12.99' }
  ],
  'music-25to50': [
    { name: 'Headphone Stand', asin: 'B00E8D8WXW', price: '$29.99' },
    { name: 'Guitar Strap Leather', asin: 'B0002CZVMQ', price: '$24.99' },
    { name: 'Vic Firth Drum Sticks', asin: 'B0002F741Q', price: '$34.99' },
    { name: 'Music Sheet Folder', asin: 'B003VWYX2M', price: '$19.99' }
  ],
  'music-50to100': [
    { name: 'JBL Flip 6 Speaker', asin: 'B09GJVTRNZ', price: '$79.99' },
    { name: 'Audio-Technica Turntable', asin: 'B07N3X7KPX', price: '$89.99' },
    { name: 'Sony Headphones MDR', asin: 'B00HVLUR86', price: '$99.99' },
    { name: 'Microphone Stand Boom', asin: 'B07QR6Z1JB', price: '$59.99' }
  ],
  'music-100to200': [
    { name: 'Focusrite Scarlett Solo', asin: 'B07QR6Z1JB', price: '$149.99' },
    { name: 'Akai MIDI Keyboard', asin: 'B00VHKMK64', price: '$169.99' },
    { name: 'Studio Headphones Pro', asin: 'B00HVLUR86', price: '$179.99' }
  ],
  'music-over200': [
    { name: 'Yamaha Keyboard 61-Key', asin: 'B00VHKMK64', price: '$599.99' },
    { name: 'Fender Squier Stratocaster', asin: 'B0002GLDWC', price: '$299.99' },
    { name: 'Audio Interface Pro', asin: 'B07QR6Z1JB', price: '$349.99' }
  ],
  'art-under25': [
    { name: 'Sketch Pad 9x12', asin: 'B0027A7GCS', price: '$14.99' },
    { name: 'Prismacolor Pencils 24', asin: 'B00006IEEU', price: '$19.99' },
    { name: 'Watercolor Paint Set', asin: 'B001QXGRQU', price: '$18.99' },
    { name: 'Paint Brushes Set', asin: 'B07QV6FT46', price: '$16.99' }
  ],
  'art-25to50': [
    { name: 'Art Supply Set 162pc', asin: 'B01N0NKDU6', price: '$39.99' },
    { name: 'Canvas Panels 12 Pack', asin: 'B00P1F26AM', price: '$34.99' },
    { name: 'Acrylic Paint Set 24', asin: 'B00VABF7AS', price: '$44.99' },
    { name: 'Drawing Pencils Professional', asin: 'B00PCST276', price: '$29.99' }
  ],
  'art-50to100': [
    { name: 'Liquitex Easel Wood', asin: 'B00B5BXVEY', price: '$79.99' },
    { name: 'Wacom Drawing Tablet', asin: 'B07S1RR3FR', price: '$89.99' },
    { name: 'Oil Paint Set Premium', asin: 'B00VABF7AS', price: '$69.99' },
    { name: 'Canvas Roll 12 yards', asin: 'B00P1F26AM', price: '$59.99' }
  ],
  'art-100to200': [
    { name: 'Wacom Intuos Pro Medium', asin: 'B0DFZ2ZRPQ', price: '$149.99' },
    { name: 'Professional Easel Studio', asin: 'B00B5BXVEY', price: '$179.99' },
    { name: 'Art Supply Set Deluxe', asin: 'B01N0NKDU6', price: '$149.99' }
  ],
  'art-over200': [
    { name: 'Wacom Cintiq 16', asin: 'B07S1RR3FR', price: '$649.99' },
    { name: 'Art Studio Set Complete', asin: 'B01N0NKDU6', price: '$399.99' },
    { name: 'Professional Easel System', asin: 'B00B5BXVEY', price: '$299.99' }
  ],
  'photography-under25': [
    { name: 'Camera Strap Neck', asin: 'B00KTYCFT2', price: '$16.99' },
    { name: 'SD Card 64GB', asin: 'B073JYC4XM', price: '$19.99' },
    { name: 'Lens Cleaning Kit', asin: 'B01M0WNBTR', price: '$9.99' },
    { name: 'Memory Card Case', asin: 'B006T9B6R2', price: '$14.99' }
  ],
  'photography-25to50': [
    { name: 'AmazonBasics Camera Bag', asin: 'B00CF5OGP8', price: '$39.99' },
    { name: 'Camera Strap Leather', asin: 'B00KTYCFT2', price: '$34.99' },
    { name: 'SD Card Reader', asin: 'B006T9B6R2', price: '$29.99' },
    { name: 'Lens Cleaning Kit Pro', asin: 'B01M0WNBTR', price: '$24.99' }
  ],
  'photography-50to100': [
    { name: 'Manfrotto Compact Tripod', asin: 'B00L6F1J9Y', price: '$79.99' },
    { name: 'Neewer Ring Light', asin: 'B07T8FBZC2', price: '$69.99' },
    { name: 'Lowepro ProTactic Backpack', asin: 'B08GP6B5RL', price: '$89.99' },
    { name: 'SD Card 128GB', asin: 'B073JYC4XM', price: '$59.99' }
  ],
  'photography-100to200': [
    { name: 'Manfrotto Tripod Pro', asin: 'B002VUZ0IG', price: '$149.99' },
    { name: 'Godox V860III Flash', asin: 'B09CYZWQYW', price: '$179.99' },
    { name: 'Camera Backpack Premium', asin: 'B08GP6B5RL', price: '$129.99' }
  ],
  'photography-over200': [
    { name: 'Canon 50mm f/1.8 Lens', asin: 'B00X8MRBCW', price: '$125.00' },
    { name: 'DJI Osmo Mobile 6', asin: 'B09JKLRVHJ', price: '$299.99' },
    { name: 'Gimbal Stabilizer Pro', asin: 'B09JKLRVHJ', price: '$399.99' }
  ],
  'wellness-under25': [
    { name: 'Face Masks 20 Pack', asin: 'B08P3QL6DP', price: '$12.99' },
    { name: 'Bath Bombs Gift Set', asin: 'B01MFGN8S5', price: '$19.99' },
    { name: 'Silk Sleep Mask', asin: 'B07WQSL2W5', price: '$14.99' },
    { name: 'Aromatherapy Roller Set', asin: 'B07NDCWYDS', price: '$16.99' }
  ],
  'wellness-25to50': [
    { name: 'Essential Oils Set', asin: 'B01N2JBA9I', price: '$34.99' },
    { name: 'Jade Roller Face Massage', asin: 'B07PGQKB7Z', price: '$29.99' },
    { name: 'Aromatherapy Diffuser', asin: 'B01H1CB0KO', price: '$39.99' },
    { name: 'Tea Sampler Gift Set', asin: 'B07PLQL1C2', price: '$24.99' }
  ],
  'wellness-50to100': [
    { name: 'Massage Gun Deep Tissue', asin: 'B07PKCGJKV', price: '$79.99' },
    { name: 'Sunbeam Heating Pad', asin: 'B001B13W5M', price: '$54.99' },
    { name: 'White Noise Machine', asin: 'B00HD0ELFK', price: '$69.99' },
    { name: 'Foot Spa Massager', asin: 'B001B13W5M', price: '$89.99' }
  ],
  'wellness-100to200': [
    { name: 'Theragun Prime', asin: 'B0925MK6NC', price: '$149.99' },
    { name: 'LEVOIT Air Purifier', asin: 'B07VVK39F7', price: '$179.99' },
    { name: 'Massage Chair Pad', asin: 'B07PKCGJKV', price: '$149.99' }
  ],
  'wellness-over200': [
    { name: 'Theragun Pro', asin: 'B0925MK6NC', price: '$599.00' },
    { name: 'Higher Dose Sauna Blanket', asin: 'B08GVYF5LV', price: '$499.00' },
    { name: 'Premium Massage Chair', asin: 'B07PKCGJKV', price: '$799.99' }
  ],
  'pets-under25': [
    { name: 'KONG Classic Dog Toy', asin: 'B0002AR0I8', price: '$14.99' },
    { name: 'Cat Toys Variety Pack', asin: 'B078W7P71W', price: '$19.99' },
    { name: 'Pet Grooming Brush', asin: 'B004UTLM9Y', price: '$16.99' },
    { name: 'Dog Treat Jar', asin: 'B08KQLK9ZQ', price: '$22.99' }
  ],
  'pets-25to50': [
    { name: 'Pet Bed Orthopedic', asin: 'B07NL2KRQB', price: '$39.99' },
    { name: 'Cat Water Fountain', asin: 'B0CRR9WX2X', price: '$44.99' },
    { name: 'Pet Grooming Kit', asin: 'B004UTLM9Y', price: '$34.99' },
    { name: 'Dog Leash Retractable', asin: 'B0002AR0I8', price: '$29.99' }
  ],
  'pets-50to100': [
    { name: 'Furbo Dog Camera', asin: 'B01FXC7JWQ', price: '$79.99' },
    { name: 'PetSafe Feeder Automatic', asin: 'B0014RQ8LW', price: '$89.99' },
    { name: 'Pet Carrier Backpack', asin: 'B0009YD8NS', price: '$69.99' }
  ],
  'pets-100to200': [
    { name: 'Whistle GPS Pet Tracker', asin: 'B07BQVY44F', price: '$149.99' },
    { name: 'Pet Gear Stroller', asin: 'B0009YD8NS', price: '$179.99' },
    { name: 'Furbo 360° Camera', asin: 'B09GDQZLD1', price: '$129.99' }
  ],
  'pets-over200': [
    { name: 'Litter Robot 3', asin: 'B01MU8GFQT', price: '$549.99' },
    { name: 'Pet Treadmill Dog', asin: 'B0009YD8NS', price: '$399.99' },
    { name: 'Smart Pet Camera System', asin: 'B09GDQZLD1', price: '$299.99' }
  ],
  'outdoors-under25': [
    { name: 'ENO DoubleNest Hammock', asin: 'B01GTP417C', price: '$19.99' },
    { name: 'Petzl Headlamp', asin: 'B086P1CHWT', price: '$16.99' },
    { name: 'Carabiner Clip Set', asin: 'B01N301ON6', price: '$12.99' },
    { name: 'Water Purifier Tablets', asin: 'B00ENSFYH2', price: '$14.99' }
  ],
  'outdoors-25to50': [
    { name: 'Coleman Camping Chair', asin: 'B0CWV477YV', price: '$39.99' },
    { name: 'Black Diamond Trekking Poles', asin: 'B00TU4E5V8', price: '$44.99' },
    { name: 'Sea to Summit Dry Bag', asin: 'B00166R33S', price: '$29.99' },
    { name: 'Leatherman Multi-Tool', asin: 'B079MJBP21', price: '$34.99' }
  ],
  'outdoors-50to100': [
    { name: 'Hydro Flask 32 oz', asin: 'B01GW2GQOI', price: '$54.99' },
    { name: 'Osprey Daylite Plus', asin: 'B00E0EW1L8', price: '$79.99' },
    { name: 'MSR Camping Stove', asin: 'B000ENSFYH2', price: '$69.99' },
    { name: 'Camping Lantern LED', asin: 'B086P1CHWT', price: '$59.99' }
  ],
  'outdoors-100to200': [
    { name: 'REI Co-op Tent 4P', asin: 'B07RS1Z6VR', price: '$179.99' },
    { name: 'Marmot Sleeping Bag', asin: 'B07RS1Z6VR', price: '$149.99' },
    { name: 'Camping Backpack 65L', asin: 'B00E0EW1L8', price: '$189.99' }
  ],
  'outdoors-over200': [
    { name: 'Big Agnes Tent Premium', asin: 'B07RS1Z6VR', price: '$399.99' },
    { name: 'Yeti Cooler 45', asin: 'B00KBMRKGI', price: '$325.00' },
    { name: 'Garmin GPS Handheld', asin: 'B084JXXJVZ', price: '$449.99' }
  ],
  'food-under25': [
    { name: 'Starbucks Coffee Variety', asin: 'B07L9TR38L', price: '$19.99' },
    { name: 'Hot Sauce Gift Set', asin: 'B078JTLNTN', price: '$16.99' },
    { name: 'Gourmet Popcorn Set', asin: 'B01LTHQMAG', price: '$14.99' },
    { name: 'Tea Collection Box', asin: 'B07PLQL1C2', price: '$22.99' }
  ],
  'food-25to50': [
    { name: 'Wine Accessories Set', asin: 'B08DV2BXCB', price: '$39.99' },
    { name: 'Cheese Board Bamboo', asin: 'B0C9LDMHPJ', price: '$44.99' },
    { name: 'Olive Oil Gift Set', asin: 'B078JTLNTN', price: '$34.99' },
    { name: 'Gourmet Spice Set', asin: 'B07R8PW8KZ', price: '$29.99' }
  ],
  'food-50to100': [
    { name: 'Mr Coffee Maker', asin: 'B004164SRA', price: '$79.99' },
    { name: 'Wine Decanter Crystal', asin: 'B07DFKH5Y1', price: '$59.99' },
    { name: 'Gourmet Food Basket', asin: 'B00HUKT7ZG', price: '$89.99' },
    { name: 'Coffee K-Cups Variety', asin: 'B075T39QB7', price: '$74.99' }
  ],
  'food-100to200': [
    { name: 'Nespresso Machine', asin: 'B07YZVWF5P', price: '$179.99' },
    { name: 'Wine Gift Set Premium', asin: 'B08DV2BXCB', price: '$149.99' },
    { name: 'Meat Smoker Electric', asin: 'B004164SRA', price: '$189.99' }
  ],
  'food-over200': [
    { name: 'Breville Barista Express', asin: 'B00I6JGGP0', price: '$599.99' },
    { name: 'Wine Cooler Fridge', asin: 'B07DFKH5Y1', price: '$449.99' },
    { name: 'Vitamix Blender Pro', asin: 'B07QZRBXHG', price: '$399.99' }
  ],
  'gardening-under25': [
    { name: 'Gardening Tools Set', asin: 'B07R8PW8KZ', price: '$19.99' },
    { name: 'Garden Gloves 3 Pairs', asin: 'B01N21K3QZ', price: '$12.99' },
    { name: 'Plant Markers 100 Pack', asin: 'B01N5RUT0Z', price: '$14.99' },
    { name: 'Seed Packets Variety', asin: 'B07YLP89QN', price: '$16.99' }
  ],
  'gardening-25to50': [
    { name: 'Fiskars Pruning Shears', asin: 'B0002N66H', price: '$34.99' },
    { name: 'Garden Kneeler Seat', asin: 'B01KGQDBP6', price: '$39.99' },
    { name: 'Seed Starter Trays', asin: 'B00BRQ3QWK', price: '$29.99' },
    { name: 'Garden Hose 50ft', asin: 'B01N9FLMVQ', price: '$44.99' }
  ],
  'gardening-50to100': [
    { name: 'Raised Garden Bed Kit', asin: 'B00TFBDDQW', price: '$79.99' },
    { name: 'Garden Tool Set Pro', asin: 'B0BW8X2XND', price: '$89.99' },
    { name: 'Compost Bin Tumbler', asin: 'B01KGQDBP6', price: '$69.99' }
  ],
  'gardening-100to200': [
    { name: 'Greenhouse Small', asin: 'B00TFBDDQW', price: '$179.99' },
    { name: 'Garden Cart Utility', asin: 'B01KGQDBP6', price: '$149.99' },
    { name: 'Rain Barrel System', asin: 'B00TFBDDQW', price: '$129.99' }
  ],
  'gardening-over200': [
    { name: 'Walk-In Greenhouse', asin: 'B00TFBDDQW', price: '$499.99' },
    { name: 'Garden Shed Storage', asin: 'B01KGQDBP6', price: '$799.99' },
    { name: 'Garden Tool Storage', asin: 'B0BW8X2XND', price: '$299.99' }
  ],
  'diy-under25': [
    { name: 'Screwdriver Set 6 Piece', asin: 'B00IRL3WP4', price: '$18.99' },
    { name: 'Stanley Tape Measure', asin: 'B00002X2GQ', price: '$14.99' },
    { name: 'Work Gloves Heavy Duty', asin: 'B01N21K3QZ', price: '$12.99' },
    { name: 'LED Work Light', asin: 'B07TXP2MLT', price: '$22.99' }
  ],
  'diy-25to50': [
    { name: 'DEWALT Tool Set', asin: 'B00IJ0ALYS', price: '$39.99' },
    { name: 'Work Light LED Rechargeable', asin: 'B07TXP2MLT', price: '$34.99' },
    { name: 'Torpedo Level', asin: 'B00004T807', price: '$29.99' },
    { name: 'Socket Wrench Set', asin: 'B08YRLZCPJ', price: '$44.99' }
  ],
  'diy-50to100': [
    { name: 'Leatherman Wave+ Multi-Tool', asin: 'B079MJBP21', price: '$79.99' },
    { name: 'Tool Organizer Wall Mount', asin: 'B07MCXFG6P', price: '$59.99' },
    { name: 'Laser Level Professional', asin: 'B07MCYX7LK', price: '$89.99' },
    { name: 'Cordless Screwdriver', asin: 'B00IJ0ALYS', price: '$69.99' }
  ],
  'diy-100to200': [
    { name: 'DEWALT Drill Combo Kit', asin: 'B0C3PQHGR7', price: '$149.99' },
    { name: 'Tool Chest Rolling', asin: 'B07MCXFG6P', price: '$179.99' },
    { name: 'Miter Saw Stand', asin: 'B00IRL3WP4', price: '$129.99' }
  ],
  'diy-over200': [
    { name: 'DEWALT Power Tool Set', asin: 'B0C3PQHGR7', price: '$399.99' },
    { name: 'Husky Workbench', asin: 'B07MCXFG6P', price: '$499.99' },
    { name: 'Tool Storage System', asin: 'B07MCXFG6P', price: '$599.99' }
  ],
  'collecting-under25': [
    { name: 'Display Case Acrylic', asin: 'B0CRB9D3G3', price: '$19.99' },
    { name: 'Coin Album Holder', asin: 'B0D7V7C4V7', price: '$16.99' },
    { name: 'Trading Card Sleeves', asin: 'B07DL2TQNB', price: '$12.99' }
  ],
  'collecting-25to50': [
    { name: 'Shadow Box Display', asin: 'B0CRB9D3G3', price: '$44.99' },
    { name: 'Magnifying Glass LED', asin: 'B01M0WNBTR', price: '$29.99' },
    { name: 'Coin Collection Album', asin: 'B0B9FXF7LJ', price: '$34.99' }
  ],
  'collecting-50to100': [
    { name: 'Display Case Magnetic', asin: 'B0CRB9D3G3', price: '$89.99' },
    { name: 'Coin Storage Case', asin: 'B0D7V7C4V7', price: '$79.99' },
    { name: 'Collectible Display Shelf', asin: 'B07DL2TQNB', price: '$69.99' }
  ],
  'collecting-100to200': [
    { name: 'Wall Display Cabinet', asin: 'B0CRB9D3G3', price: '$179.99' },
    { name: 'Premium Display Case', asin: 'B0D7V7C4V7', price: '$149.99' }
  ],
  'collecting-over200': [
    { name: 'Museum Display Case', asin: 'B0CRB9D3G3', price: '$399.99' },
    { name: 'Collector Safe Fireproof', asin: 'B0D7V7C4V7', price: '$599.99' }
  ],
  'movies-under25': [
    { name: 'Movie Posters Set', asin: 'B07PH1M5WS', price: '$14.99' },
    { name: 'Popcorn Maker', asin: 'B00KL8SM92', price: '$19.99' },
    { name: 'Movie Candy Gift Box', asin: 'B00HUKT7ZG', price: '$16.99' }
  ],
  'movies-25to50': [
    { name: 'Roku Express Streaming', asin: 'B09BKCDXZC', price: '$29.99' },
    { name: 'LED Strip Lights RGB', asin: 'B0B4NT4J28', price: '$34.99' },
    { name: 'Movie Snack Gift Set', asin: 'B00HUKT7ZG', price: '$39.99' }
  ],
  'movies-50to100': [
    { name: 'Roku Streaming Stick 4K', asin: 'B09BKCDXZC', price: '$49.99' },
    { name: 'Vizio Sound Bar', asin: 'B08RSD47H4', price: '$89.99' },
    { name: 'Projector Screen Portable', asin: 'B08NC5CGZG', price: '$79.99' }
  ],
  'movies-100to200': [
    { name: 'Mini Projector 1080p', asin: 'B08NC5CGZG', price: '$179.99' },
    { name: 'Sound Bar Premium', asin: 'B08RSD47H4', price: '$149.99' }
  ],
  'movies-over200': [
    { name: 'BenQ Projector 4K', asin: 'B08NC5CGZG', price: '$899.99' },
    { name: 'Bose Home Theater System', asin: 'B07FVK7HQ1', price: '$799.99' }
  ],
  'science-under25': [
    { name: 'National Geographic Chemistry Set', asin: 'B08KFND2Y1', price: '$19.99' },
    { name: 'Beginner Microscope', asin: 'B00B7D3I8E', price: '$22.99' },
    { name: 'Chemistry Set Kids', asin: 'B08HSFDZP6', price: '$24.99' }
  ],
  'science-25to50': [
    { name: 'Chemistry Lab Set', asin: 'B08KFND2Y1', price: '$39.99' },
    { name: 'Anatomy Model Set', asin: 'B00B7D3I8E', price: '$44.99' },
    { name: 'Science Books Collection', asin: 'B07WKX1X6F', price: '$34.99' }
  ],
  'science-50to100': [
    { name: 'Celestron Telescope', asin: 'B001TI9Y2M', price: '$79.99' },
    { name: 'AmScope Student Microscope', asin: 'B00AM5XB5O', price: '$89.99' },
    { name: 'Robotics Kit Advanced', asin: 'B08KFND2Y1', price: '$99.99' }
  ],
  'science-100to200': [
    { name: 'Celestron NexStar Telescope', asin: 'B000GUFOC8', price: '$179.99' },
    { name: 'AmScope Binocular Microscope', asin: 'B00X4LBKZG', price: '$149.99' }
  ],
  'science-over200': [
    { name: 'Celestron NexStar 8SE', asin: 'B000GUFOC8', price: '$499.99' },
    { name: 'Advanced Lab Kit Complete', asin: 'B08KFND2Y1', price: '$399.99' }
  ],
  'default': [
    { name: 'Amazon Gift Card $25', asin: 'B0CQNWSC6J', price: '$25.00' },
    { name: 'Godiva Chocolate Box', asin: 'B00HUKT7ZG', price: '$29.99' },
    { name: 'Starbucks Gift Card', asin: 'B07RTN4C78', price: '$25.00' },
    { name: 'Sherpa Blanket Soft', asin: 'B07VFZM2JL', price: '$39.99' },
    { name: 'Coffee Mug Gift Set', asin: 'B08KRZMW99', price: '$34.99' },
    { name: 'Yankee Candle Set', asin: 'B000V9Z3XA', price: '$44.99' },
    { name: 'Bath Bombs Luxury', asin: 'B01MFGN8S5', price: '$24.99' },
    { name: 'Gourmet Snacks Box', asin: 'B00HUKT7ZG', price: '$39.99' },
    { name: 'Wine Accessories Kit', asin: 'B07DFKH5Y1', price: '$49.99' },
    { name: 'Succulent Plants Set', asin: 'B07YLP89QN', price: '$29.99' }
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
    const [imageErrors, setImageErrors] = React.useState({});

    const scroll = (direction) => {
      const container = carouselRef.current;
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const handleImageError = (asin) => {
      setImageErrors(prev => ({ ...prev, [asin]: true }));
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
              <a
                href={`https://www.amazon.com/dp/${product.asin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-48 bg-gradient-to-br from-amber-50 to-orange-100 rounded mb-3 overflow-hidden"
              >
                {imageErrors[product.asin] ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <Gift className="w-20 h-20 text-amber-600" />
                  </div>
                ) : (
                  <img
                    src={`https://images-na.ssl-images-amazon.com/images/P/${product.asin}.01.LZZZZZZZ.jpg`}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                    onError={() => handleImageError(product.asin)}
                  />
                )}
              </a>
              <div className="mb-3">
                <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                <p className="text-green-600 font-bold text-lg">{product.price}</p>
              </div>
              <a
                href={`https://www.amazon.com/dp/${product.asin}`}
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
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
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
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      isSelected
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'bg-green-600 border-green-600' : 'border-gray-300'
                      }`}>
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