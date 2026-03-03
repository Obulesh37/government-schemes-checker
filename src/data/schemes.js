const schemes = [
  {
    name: "Pradhan Mantri Awas Yojana",
    minAge: 18,
    maxIncome: 600000,
    occupation: "",
    gender: "",
    category: "",
    description: "Affordable housing scheme for urban and rural poor.",
    benefits: "Subsidized home loans and housing support.",
    website: "https://pmaymis.gov.in/"
  },
  {
    name: "PM Kisan Samman Nidhi",
    minAge: 18,
    maxIncome: 1000000,
    occupation: "Farmer",
    gender: "",
    category: "",
    description: "Income support scheme for farmers.",
    benefits: "₹6000 per year financial assistance.",
    website: "https://pmkisan.gov.in/"
  },
  {
    name: "Ayushman Bharat",
    minAge: 0,
    maxIncome: 800000,
    occupation: "",
    gender: "",
    category: "",
    description: "Health insurance coverage for families.",
    benefits: "₹5 lakh health coverage per family.",
    website: "https://pmjay.gov.in/"
  },
  {
    name: "Beti Bachao Beti Padhao",
    minAge: 0,
    maxIncome: 500000,
    occupation: "",
    gender: "Female",
    category: "",
    description: "Scheme for girl child welfare and education.",
    benefits: "Financial and educational support.",
    website: "https://wcd.nic.in/"
  },
  {
    name: "Pradhan Mantri Mudra Yojana",
    minAge: 18,
    maxIncome: 2000000,
    occupation: "Business",
    gender: "",
    category: "",
    description: "Loan scheme for small businesses.",
    benefits: "Collateral-free loans up to ₹10 lakh.",
    website: "https://mudra.org.in/"
  },
  {
    name: "Sukanya Samriddhi Yojana",
    minAge: 0,
    maxIncome: 1000000,
    occupation: "",
    gender: "Female",
    category: "",
    description: "Savings scheme for girl child.",
    benefits: "High interest savings account.",
    website: "https://www.nsiindia.gov.in/"
  },
  {
    name: "Stand Up India Scheme",
    minAge: 18,
    maxIncome: 2000000,
    occupation: "Business",
    gender: "",
    category: "SC",
    description: "Entrepreneurship scheme for SC/ST/OBC.",
    benefits: "Loans from ₹10 lakh to ₹1 crore.",
    website: "https://www.standupmitra.in/"
  },
  {
    name: "National Scholarship Portal Scheme",
    minAge: 10,
    maxIncome: 800000,
    occupation: "Student",
    gender: "",
    category: "",
    description: "Scholarships for students.",
    benefits: "Financial support for education.",
    website: "https://scholarships.gov.in/"
  },
  {
    name: "Atal Pension Yojana",
    minAge: 18,
    maxIncome: 1500000,
    occupation: "",
    gender: "",
    category: "",
    description: "Pension scheme for unorganized sector workers.",
    benefits: "Guaranteed monthly pension after 60 years.",
    website: "https://www.npscra.nsdl.co.in/"
  },
  {
    name: "PM Ujjwala Yojana",
    minAge: 18,
    maxIncome: 500000,
    occupation: "",
    gender: "Female",
    category: "",
    description: "Free LPG connection for women.",
    benefits: "Free LPG connection and subsidy.",
    website: "https://www.pmuy.gov.in/"
  },
  {
    name: "Skill India Mission",
    minAge: 15,
    maxIncome: 2000000,
    occupation: "Unemployed",
    gender: "",
    category: "",
    description: "Skill development training program.",
    benefits: "Free skill training and certification.",
    website: "https://www.skillindia.gov.in/"
  },
  {
    name: "Digital India Programme",
    minAge: 0,
    maxIncome: 9999999,
    occupation: "",
    gender: "",
    category: "",
    description: "Digital empowerment initiative.",
    benefits: "Access to digital services.",
    website: "https://www.digitalindia.gov.in/"
  },
  {
    name: "Make in India",
    minAge: 18,
    maxIncome: 5000000,
    occupation: "Business",
    gender: "",
    category: "",
    description: "Encourages manufacturing in India.",
    benefits: "Business support and incentives.",
    website: "https://www.makeinindia.com/"
  },
  {
    name: "PM Jan Dhan Yojana",
    minAge: 10,
    maxIncome: 1000000,
    occupation: "",
    gender: "",
    category: "",
    description: "Financial inclusion scheme.",
    benefits: "Zero balance bank account.",
    website: "https://pmjdy.gov.in/"
  },
  {
    name: "National Rural Employment Guarantee Act (MGNREGA)",
    minAge: 18,
    maxIncome: 500000,
    occupation: "Unemployed",
    gender: "",
    category: "",
    description: "Employment guarantee scheme for rural households.",
    benefits: "100 days of wage employment.",
    website: "https://nrega.nic.in/"
  },
  {
  name: "AICTE Pragati Scholarship Scheme",
  minAge: 17,
  maxIncome: 800000,
  occupation: "Student",
  gender: "Female",
  category: "",
  description: "Scholarship scheme for girl students pursuing technical education.",
  benefits: "₹50,000 per year for tuition and other expenses.",
  website: "https://www.aicte-india.org/"
},{
  name: "AICTE Saksham Scholarship Scheme",
  minAge: 17,
  maxIncome: 800000,
  occupation: "Student",
  gender: "",
  category: "",
  description: "Scholarship for specially-abled students pursuing technical education.",
  benefits: "₹50,000 per year financial support.",
  website: "https://www.aicte-india.org/"
},{
  name: "PM Vidya Lakshmi Education Loan Scheme",
  minAge: 17,
  maxIncome: 2000000,
  occupation: "Student",
  gender: "",
  category: "",
  description: "Single-window platform for education loans.",
  benefits: "Easy access to education loans from banks.",
  website: "https://www.vidyalakshmi.co.in/"
},{
  name: "Startup India Scheme",
  minAge: 18,
  maxIncome: 5000000,
  occupation: "Unemployed",
  gender: "",
  category: "",
  description: "Encourages young entrepreneurs to start businesses.",
  benefits: "Tax benefits and funding support.",
  website: "https://www.startupindia.gov.in/"
}
];

export default schemes;