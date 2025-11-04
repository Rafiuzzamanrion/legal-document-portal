
const legalDocuments = [
  {
    id: 1,
    title: "Smith v. Johnson Construction LLC",
    type: "Contract Dispute",
    category: "civil",
    jurisdiction: "State Court",
    court: "Superior Court of California",
    date: "2023-08-15",
    caseNumber: "CV-2023-001234",
    parties: {
      plaintiff: "Sarah Smith",
      defendant: "Johnson Construction LLC"
    },
    content: `This case involves a breach of contract dispute between property owner Sarah Smith and Johnson Construction LLC. 
    The plaintiff alleges that the defendant failed to complete construction work within the agreed timeline and deviated 
    from the approved specifications. The contract, dated January 10, 2023, stipulated completion by June 30, 2023, 
    with penalties for delays. Evidence includes signed contracts, email correspondence, and photographic documentation 
    of incomplete work. The court found in favor of the plaintiff, awarding $45,000 in damages plus legal fees. 
    The defendant's counterclaim for additional compensation was dismissed. This case establishes precedent for 
    construction contract enforcement and the importance of adhering to specified timelines and quality standards.`,
    summary: "Breach of contract case where construction company failed to meet deadlines and specifications, resulting in $45,000 damages awarded to property owner.",
    outcome: "Plaintiff prevailed",
    damages: 45000,
    keywords: ["contract", "construction", "breach", "damages", "deadline", "specifications", "civil", "breach of contract"],
    tags: ["construction law", "contract law", "breach", "damages"],
    relatedCases: [],
  },
  {
    id: 2,
    title: "State v. Anderson - Criminal Appeal",
    type: "Criminal Law",
    category: "criminal",
    jurisdiction: "State Appellate Court",
    court: "Court of Appeals, Second District",
    date: "2024-01-22",
    caseNumber: "CA-2024-567",
    parties: {
      appellant: "Michael Anderson",
      respondent: "State of California"
    },
    content: `The defendant, Michael Anderson, appeals his conviction for second-degree assault. The case stems from an 
    altercation at a local establishment on March 3, 2023. The defendant argues that the trial court erred in admitting 
    certain evidence and that his counsel was ineffective. Key issues include the admissibility of witness testimony 
    and surveillance footage. The appellate court reviewed the trial record, including testimonies from five witnesses, 
    medical reports, and video evidence. The court upheld the conviction, finding no reversible error in the trial 
    proceedings and determining that the defendant received adequate legal representation. The court noted that the 
    evidence was overwhelming and properly admitted under state rules of evidence. The defendant's claims of 
    ineffective assistance of counsel were found to be without merit.`,
    summary: "Criminal appeal for second-degree assault conviction upheld after court found no errors in trial proceedings or legal representation.",
    outcome: "Conviction upheld",
    damages: null,
    keywords: ["criminal", "appeal", "assault", "evidence", "testimony", "conviction", "appellate", "second-degree assault"],
    tags: ["criminal law", "appeals", "assault", "evidence"],
    relatedCases: [],
  },
  {
    id: 3,
    title: "Martinez v. Global Tech Industries - Employment Discrimination",
    type: "Employment Law",
    category: "civil",
    jurisdiction: "Federal District Court",
    court: "U.S. District Court, Northern District",
    date: "2023-11-30",
    caseNumber: "FD-2023-8901",
    parties: {
      plaintiff: "Rosa Martinez",
      defendant: "Global Tech Industries"
    },
    content: `Rosa Martinez filed a complaint against Global Tech Industries alleging discrimination based on gender and age. 
    Ms. Martinez, a software engineer with 15 years of experience, claims she was passed over for promotion three times 
    in favor of less qualified male candidates, and ultimately terminated without cause at age 52. The complaint cites 
    violations of Title VII of the Civil Rights Act and the Age Discrimination in Employment Act. Evidence includes 
    performance reviews showing consistent excellence, comparative analysis of promoted employees' qualifications, 
    and internal emails suggesting discriminatory intent. Statistical analysis revealed a pattern of promoting younger 
    male employees over qualified female candidates. The case was settled out of court for an undisclosed amount, 
    with the company agreeing to implement new anti-discrimination training and review promotion procedures. 
    The settlement also included provisions for an independent audit of the company's hiring and promotion practices.`,
    summary: "Employment discrimination case involving gender and age bias settled out of court, with company agreeing to policy changes and compensation.",
    outcome: "Settled out of court",
    damages: null,
    keywords: ["employment", "discrimination", "gender", "age", "promotion", "settlement", "civil rights", "Title VII", "ADEA"],
    tags: ["employment law", "discrimination", "civil rights", "settlement"],
    relatedCases: [],
  }
];

const getAllDocuments = () => {
  return legalDocuments;
};

const getDocumentById = (id) => {
  return legalDocuments.find(doc => doc.id === parseInt(id));
};

const getDocumentsByCategory = (category) => {
  return legalDocuments.filter(doc => doc.category === category.toLowerCase());
};

const getDocumentStats = () => {
  return {
    total: legalDocuments.length,
    byCategory: {
      civil: legalDocuments.filter(d => d.category === 'civil').length,
      criminal: legalDocuments.filter(d => d.category === 'criminal').length,
    },
    byType: legalDocuments.reduce((acc, doc) => {
      acc[doc.type] = (acc[doc.type] || 0) + 1;
      return acc;
    }, {}),
  };
};

module.exports = {
  legalDocuments,
  getAllDocuments,
  getDocumentById,
  getDocumentsByCategory,
  getDocumentStats,
};