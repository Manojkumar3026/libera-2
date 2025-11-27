import { Heart, Battery, ShieldCheck, Bluetooth, Droplets, Zap } from 'lucide-react';
import { FAQItem, ComparisonPoint, Testimonial } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Why Libera', path: '/why-libera' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Support', path: '/support' },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is LIBERA?",
    answer: "LIBERA is your gentle, drug-free companion designed to bring you relief from those monthly cramps using soothing PEMF (Pulsed Electromagnetic Field) therapy. It’s made to fit your lifestyle and help you feel your best."
  },
  {
    question: "How does Libera help with menstrual pain?",
    answer: "Libera uses PEMF therapy. Think of PEMF therapy as a gentle nudge to your body—using pulsed electromagnetic waves to relax your muscles and ease pain naturally. It’s a smart way to feel more comfortable without any medicines."
  },
  {
    question: "Is LIBERA safe to use?",
    answer: "Absolutely! LIBERA is proudly registered and approved by CDSCO in India. Just follow the simple instructions, and you’ll be in good hands."
  },
  {
    question: "What's the difference between Classic and Smart models?",
    answer: "LIBERA Classic features simple on/off operation with a preset setting—perfect for straightforward, effective relief. LIBERA Smart adds Bluetooth connectivity, allowing you to customize your experience through our app with 3 intensity levels."
  },
  {
    question: "How do I charge LIBERA?",
    answer: "LIBERA is rechargeable to keep you going. Just follow the charging steps in the welcome guide."
  },
  {
    question: "How should I clean my LIBERA device?",
    answer: "Easy peasy! Just wipe your LIBERA gently with a dry cloth—please avoid damp or wet cloths to keep it safe and sound."
  },
  {
    question: "Is LIBERA waterproof?",
    answer: "LIBERA has a water-resistant design that protects it from light splashes and sweat, but it is not fully waterproof. Please do not submerge it in water or use it in the shower or bath. Clean your device with a dry cloth only."
  },
  {
    question: "Can I use LIBERA while sleeping?",
    answer: "It’s best to use LIBERA while you’re awake and relaxed. Check the user guide for tips on making the most of your sessions."
  },
  {
    question: "Are there any side effects I should know about?",
    answer: "LIBERA is gentle and safe. If you wear a pacemaker or any implanted medical device, please chat with your doctor before starting."
  },
  {
    question: "I have an IUD like Copper T—should I check with my doctor before using LIBERA?",
    answer: "That’s a great question! If you’re using an IUD like Copper T, we recommend checking in with your healthcare provider before starting LIBERA. They’ll make sure it’s the best fit for you and your health."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ananya R.",
    quote: "I used to cancel plans because of my cramps. LIBERA feels like a warm hug that lets me get back to my day. It's truly changed my month.",
    role: "Marketing Executive"
  },
  {
    name: "Dr. Sarah K.",
    quote: "As a professional, I appreciate the PEMF technology. As a woman, I appreciate the discreet design. It's the best of both worlds.",
    role: "Wellness Advocate"
  },
  {
    name: "Priya M.",
    quote: "The app control on the Smart version is amazing. I can adjust it exactly how I need it while I'm at my desk working.",
    role: "Software Engineer"
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    feature: "Drug-Free",
    libera: true,
    medication: false,
    heat: true
  },
  {
    feature: "No Side Effects",
    libera: true,
    medication: false,
    heat: "Risk of burns"
  },
  {
    feature: "Wireless & Portable",
    libera: true,
    medication: true,
    heat: "Limited"
  },
  {
    feature: "Discreet Under Clothing",
    libera: true,
    medication: true,
    heat: false
  },
  {
    feature: "Customizable Intensity",
    libera: true,
    medication: "Limited",
    heat: false
  },
  {
    feature: "Reusable",
    libera: true,
    medication: false,
    heat: true
  },
  {
    feature: "Safe for Long-Term Use",
    libera: true,
    medication: "Concerns",
    heat: true
  },
  {
    feature: "App Integration (Smart)",
    libera: true,
    medication: false,
    heat: false
  }
];

export const FEATURES = [
  {
    icon: ShieldCheck,
    title: "CDSCO Approved",
    description: "Registered and approved by India's regulatory authority for your safety."
  },
  {
    icon: Battery,
    title: "Rechargeable",
    description: "Long-lasting battery life to support you throughout your day."
  },
  {
    icon: Droplets,
    title: "Water Resistant",
    description: "Protected against sweat and light splashes."
  },
  {
    icon: Bluetooth,
    title: "Smart Control",
    description: "Connect via Bluetooth to customize intensity (Smart Model)."
  },
  {
    icon: Heart,
    title: "Drug-Free",
    description: "Natural relief using PEMF technology without chemicals."
  },
  {
    icon: Zap,
    title: "3 Intensity Levels",
    description: "Adjustable comfort settings on the Smart model."
  }
];