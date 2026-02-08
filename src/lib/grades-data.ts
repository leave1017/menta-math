/**
 * Grade-level mental math curriculum data
 * Aligned with US Common Core, UK National Curriculum, and India CBSE/ICSE standards
 */

export interface GradeData {
  grade: number;
  ageRange: string;
  ukYear: number;
  indiaClass: number;
  
  // SEO metadata
  title: string;
  description: string;
  
  // Page content
  intro: string;
  
  // Curriculum standards
  usStandards: string[];
  ukStandards: string[];
  
  // Skills to master
  skills: {
    title: string;
    description: string;
  }[];
  
  // Recommended practice
  practice: {
    op: 'add' | 'sub' | 'mul' | 'div';
    digits: number;
    count: number;
    label: string;
    description: string;
  }[];
  
  // Practice tips
  tips: string[];
  
  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const GRADES_DATA: GradeData[] = [
  {
    grade: 1,
    ageRange: "5-6",
    ukYear: 1,
    indiaClass: 1,
    
    title: "Grade 1 Mental Math | Year 1 Maths for 5-6 Year Olds",
    description: "Free Grade 1 mental math practice. Addition & subtraction within 20, number bonds to 10. Aligned with Common Core & UK Year 1.",
    
    intro: "First grade marks the beginning of formal mental math education. At this stage, children develop foundational number sense through addition and subtraction within 20. Students learn to recognize number patterns, understand the relationship between numbers, and build fluency with basic facts. Mental math for 5-6 year olds focuses on number bonds to 10 and 20, which form the building blocks for all future mathematical learning. Regular practice at this age helps children develop confidence and automaticity with single-digit calculations.",
    
    usStandards: [
      "Add and subtract within 20 using mental strategies",
      "Know from memory all sums of two one-digit numbers",
      "Count to 120, starting at any number less than 120",
      "Understand the meaning of the equal sign",
    ],
    ukStandards: [
      "Represent and use number bonds within 20",
      "Add and subtract one-digit and two-digit numbers to 20",
      "Solve one-step problems involving addition and subtraction",
      "Count to and across 100, forwards and backwards",
    ],
    
    skills: [
      { title: "Number Bonds to 10", description: "Know all pairs that make 10 (1+9, 2+8, 3+7, 4+6, 5+5)" },
      { title: "Number Bonds to 20", description: "Extend number bond knowledge to sums of 20" },
      { title: "Adding Within 10", description: "Quick recall of single-digit addition facts" },
      { title: "Subtracting Within 10", description: "Quick recall of single-digit subtraction facts" },
      { title: "Counting On", description: "Add by counting forward from the larger number" },
    ],
    
    practice: [
      { op: 'add', digits: 1, count: 10, label: "1-Digit Addition (10Q)", description: "Start here to build confidence with basic addition" },
      { op: 'sub', digits: 1, count: 10, label: "1-Digit Subtraction (10Q)", description: "Practice taking away single digits" },
      { op: 'add', digits: 1, count: 20, label: "1-Digit Addition (20Q)", description: "Build speed with more addition practice" },
      { op: 'sub', digits: 1, count: 20, label: "1-Digit Subtraction (20Q)", description: "Increase fluency with subtraction" },
    ],
    
    tips: [
      "Use fingers, counters, or number lines when first learning",
      "Practice number bonds daily for 5-10 minutes",
      "Make it fun with games and real-world counting",
      "Celebrate small wins to build confidence",
      "Focus on accuracy before speed",
    ],
    
    faqs: [
      {
        question: "What mental math should a 6 year old know?",
        answer: "By the end of Grade 1, most 6 year olds should fluently add and subtract within 10, know number bonds to 10, and be working toward fluency within 20. They should also be able to count to 100 and understand basic number patterns."
      },
      {
        question: "How can I help my child with Grade 1 mental maths?",
        answer: "Practice number bonds daily using flashcards or games. Use everyday situations like counting toys, sharing snacks equally, or playing shop. Keep sessions short (5-10 minutes) and positive. Our online practice tools make it easy to build skills gradually."
      },
      {
        question: "What are number bonds and why are they important?",
        answer: "Number bonds are pairs of numbers that add up to a given total. For example, 3 and 7 are number bonds to 10. Knowing these facts automatically helps children solve more complex problems quickly and builds the foundation for mental math throughout school."
      },
    ],
  },
  
  {
    grade: 2,
    ageRange: "6-7",
    ukYear: 2,
    indiaClass: 2,
    
    title: "Grade 2 Mental Math | Year 2 Maths for 7 Year Olds",
    description: "Free Grade 2 mental math practice. 2-digit addition, subtraction & 2,5,10 times tables. Aligned with UK Year 2 & Class 2 standards.",
    
    intro: "Second grade is when mental math skills really begin to accelerate. Students transition from single-digit to two-digit mental calculations and are introduced to multiplication through times tables. Mental maths for class 2 and Year 2 students focuses on fluent recall of addition and subtraction facts to 20, and extending these strategies to numbers up to 100. Children also begin learning the 2, 5, and 10 times tables, which provide the foundation for multiplication fluency. This is a critical year for building mental math confidence and speed.",
    
    usStandards: [
      "Fluently add and subtract within 20 using mental strategies",
      "Add and subtract within 100 using strategies based on place value",
      "Work with equal groups to gain foundations for multiplication",
      "Add up to four two-digit numbers using mental strategies",
    ],
    ukStandards: [
      "Recall and use addition and subtraction facts to 20 fluently",
      "Add and subtract numbers mentally, including two-digit numbers",
      "Recall and use multiplication facts for 2, 5, and 10 times tables",
      "Calculate mathematical statements for multiplication and division",
    ],
    
    skills: [
      { title: "Addition Facts to 20", description: "Instant recall of all addition facts within 20" },
      { title: "Subtraction Facts to 20", description: "Instant recall of all subtraction facts within 20" },
      { title: "2-Digit Mental Addition", description: "Add two-digit numbers without writing" },
      { title: "2, 5, 10 Times Tables", description: "Begin learning multiplication facts" },
      { title: "Mental Subtraction Strategies", description: "Counting back, using number bonds, bridging through 10" },
    ],
    
    practice: [
      { op: 'add', digits: 1, count: 20, label: "1-Digit Addition (20Q)", description: "Master single-digit addition for speed" },
      { op: 'sub', digits: 1, count: 20, label: "1-Digit Subtraction (20Q)", description: "Build subtraction fluency" },
      { op: 'add', digits: 2, count: 20, label: "2-Digit Addition (20Q)", description: "Challenge with two-digit sums" },
      { op: 'sub', digits: 2, count: 10, label: "2-Digit Subtraction (10Q)", description: "Start two-digit subtraction practice" },
      { op: 'mul', digits: 1, count: 10, label: "Times Tables (10Q)", description: "Practice 2, 5, 10 times tables" },
    ],
    
    tips: [
      "Ensure single-digit facts are automatic before moving to two digits",
      "Use the \"make ten\" strategy for addition (8+5 = 8+2+3 = 10+3 = 13)",
      "Practice times tables with songs, chants, and repetition",
      "Skip counting helps reinforce multiplication patterns",
      "Daily 10-minute practice sessions are more effective than longer weekly sessions",
    ],
    
    faqs: [
      {
        question: "What times tables should a Year 2 child know?",
        answer: "By the end of Year 2 (Grade 2), children should know their 2, 5, and 10 times tables fluently. This means being able to recall any fact from these tables within a few seconds without counting."
      },
      {
        question: "How can I improve my child&apos;s mental maths for class 2?",
        answer: "Focus on daily practice of addition and subtraction facts to 20 until they become automatic. Then introduce two-digit addition using place value strategies. For times tables, use songs, games, and our online practice tools to make learning engaging."
      },
      {
        question: "Why is my 7 year old struggling with mental math?",
        answer: "This is common and usually means foundational facts aren&apos;t yet automatic. Go back to single-digit addition and subtraction practice until these become instant. Use visual aids, manipulatives, and short daily practice sessions. Building confidence at this stage prevents math anxiety later."
      },
    ],
  },
  
  {
    grade: 3,
    ageRange: "7-8",
    ukYear: 3,
    indiaClass: 3,
    
    title: "Grade 3 Mental Math | Times Tables & 3-Digit Addition",
    description: "Free Grade 3 mental math practice. Master 3,4,8 times tables and 3-digit addition. Aligned with Common Core & UK Year 3.",
    
    intro: "Third grade is a pivotal year for mental math development. Students transition from basic addition and subtraction to mastering multiplication facts and working with larger numbers. Mental maths for class 3 focuses on learning the 3, 4, and 8 times tables while continuing to build fluency with the 2, 5, and 10 tables from Grade 2. Students also develop strategies for mentally adding and subtracting three-digit numbers. By the end of Grade 3, children should fluently recall multiplication and division facts within 100, setting the stage for more complex mathematical operations.",
    
    usStandards: [
      "Fluently multiply and divide within 100 using mental strategies",
      "Know from memory all products of two one-digit numbers",
      "Add and subtract within 1000 using strategies and algorithms",
      "Multiply one-digit whole numbers by multiples of 10",
    ],
    ukStandards: [
      "Recall and use multiplication and division facts for 3, 4, and 8 times tables",
      "Add and subtract numbers mentally, including three-digit numbers",
      "Write and calculate mathematical statements for multiplication and division",
      "Solve problems involving multiplication and division",
    ],
    
    skills: [
      { title: "3, 4, 8 Times Tables", description: "Master these multiplication facts for instant recall" },
      { title: "All Tables to 10×10", description: "Building toward complete multiplication fluency" },
      { title: "3-Digit Mental Addition", description: "Add three-digit numbers using place value strategies" },
      { title: "3-Digit Mental Subtraction", description: "Subtract three-digit numbers mentally" },
      { title: "Division Facts", description: "Understand division as the inverse of multiplication" },
    ],
    
    practice: [
      { op: 'mul', digits: 1, count: 20, label: "Times Tables (20Q)", description: "Practice all times tables up to 10×10" },
      { op: 'div', digits: 1, count: 10, label: "Division Facts (10Q)", description: "Practice division as inverse of multiplication" },
      { op: 'add', digits: 2, count: 20, label: "2-Digit Addition (20Q)", description: "Maintain addition fluency" },
      { op: 'sub', digits: 2, count: 20, label: "2-Digit Subtraction (20Q)", description: "Build subtraction speed" },
      { op: 'add', digits: 3, count: 10, label: "3-Digit Addition (10Q)", description: "Challenge with larger numbers" },
    ],
    
    tips: [
      "Learn times tables in order: first 2, 5, 10, then 3, 4, 8, then 6, 7, 9",
      "Use the commutative property: if you know 3×8, you know 8×3",
      "Practice division alongside multiplication to reinforce fact families",
      "Break 3-digit addition into hundreds, tens, and ones",
      "Aim for 3-second recall of any times table fact",
    ],
    
    faqs: [
      {
        question: "What times tables should a Grade 3 student know?",
        answer: "By the end of Grade 3, students should know their 2, 3, 4, 5, 8, and 10 times tables fluently. They should be working toward knowing all products of two one-digit numbers from memory, which is typically mastered by the end of Grade 3 or early Grade 4."
      },
      {
        question: "How do I teach mental maths for class 3 addition?",
        answer: "For 3-digit mental addition, teach place value strategies: add hundreds first (300+400=700), then tens (50+30=80), then ones (2+5=7), and combine (787). Also teach compensation strategies like adding 299 by adding 300 and subtracting 1."
      },
      {
        question: "My 8 year old is slow at times tables. What should I do?",
        answer: "Focus on one times table at a time until it&apos;s automatic. Use daily 5-minute practice sessions with our online trainer. Look for patterns (4× is double 2×, 8× is double 4×). Make it competitive with personal best times. Consistency is key—daily practice beats weekly cramming."
      },
    ],
  },
  
  {
    grade: 4,
    ageRange: "8-9",
    ukYear: 4,
    indiaClass: 4,
    
    title: "Grade 4 Mental Math | All Times Tables to 12×12",
    description: "Free Grade 4 mental math practice. Master all times tables to 12×12, multi-digit operations. UK Year 4 MTC preparation.",
    
    intro: "Fourth grade is the year of times table mastery. In the UK, Year 4 students take the statutory Multiplication Tables Check (MTC), demonstrating fluency with all times tables up to 12×12. Mental maths for class 4 emphasizes automatic recall of multiplication and division facts, along with efficient strategies for multi-digit mental calculations. Students also learn to multiply and divide larger numbers using place value knowledge and mental strategies. This year builds the computational fluency needed for fractions, decimals, and algebraic thinking in later grades.",
    
    usStandards: [
      "Fluently add and subtract multi-digit whole numbers",
      "Multiply a whole number of up to four digits by a one-digit number",
      "Find quotients and remainders with up to four-digit dividends",
      "Use place value understanding to multiply and divide mentally",
    ],
    ukStandards: [
      "Recall multiplication and division facts for all times tables up to 12×12",
      "Use place value and known facts to multiply and divide mentally",
      "Multiply two-digit and three-digit numbers by a one-digit number",
      "Add and subtract numbers with up to 4 digits using mental methods",
    ],
    
    skills: [
      { title: "All Times Tables to 12×12", description: "Complete mastery of multiplication facts" },
      { title: "Division Within 144", description: "Instant recall of all division facts to 144÷12" },
      { title: "Multi-Digit Mental Addition", description: "Add 3-4 digit numbers efficiently" },
      { title: "Multi-Digit Mental Subtraction", description: "Subtract 3-4 digit numbers mentally" },
      { title: "Multiply by 10, 100, 1000", description: "Understand place value in multiplication" },
    ],
    
    practice: [
      { op: 'mul', digits: 1, count: 50, label: "Times Tables Drill (50Q)", description: "Master all tables with intensive practice" },
      { op: 'div', digits: 1, count: 20, label: "Division Facts (20Q)", description: "Build division fluency" },
      { op: 'add', digits: 3, count: 20, label: "3-Digit Addition (20Q)", description: "Speed up large number addition" },
      { op: 'sub', digits: 3, count: 20, label: "3-Digit Subtraction (20Q)", description: "Master large number subtraction" },
      { op: 'mul', digits: 2, count: 10, label: "2-Digit Multiplication (10Q)", description: "Extend to larger multiplication" },
    ],
    
    tips: [
      "Practice all 144 times table facts until each takes less than 3 seconds",
      "Use the MTC format: 6 seconds per question to simulate test conditions",
      "Learn the \"hard\" facts specifically: 6×7, 6×8, 7×8, 8×9, 7×9",
      "Connect division to multiplication: 56÷8 = ? Think: 8×? = 56",
      "For multi-digit operations, estimate first, then calculate exactly",
    ],
    
    faqs: [
      {
        question: "What is the UK Multiplication Tables Check (MTC)?",
        answer: "The MTC is a statutory assessment for all Year 4 pupils in England. Students answer 25 multiplication questions with 6 seconds per question. It tests all times tables from 2×2 to 12×12, with a focus on the 6, 7, 8, 9, and 12 times tables. Our practice tools can help prepare with timed drills."
      },
      {
        question: "How can I help my child prepare for the MTC?",
        answer: "Practice daily with timed drills, focusing on the harder tables (6, 7, 8, 9, 12). Use our 50-question times table drill to build stamina. Ensure your child can answer within 6 seconds per question. Regular, short practice sessions are more effective than cramming."
      },
      {
        question: "What mental maths should a 9 year old know?",
        answer: "By age 9 (end of Grade 4), children should have instant recall of all times tables to 12×12 and corresponding division facts. They should mentally add and subtract 3-4 digit numbers, multiply and divide by 10/100/1000, and estimate calculations before solving them."
      },
    ],
  },
  
  {
    grade: 5,
    ageRange: "9-10",
    ukYear: 5,
    indiaClass: 5,
    
    title: "Grade 5 Mental Math | Decimals & Large Numbers",
    description: "Free Grade 5 mental math practice. Multi-digit multiplication, division & decimal operations. UK Year 5 aligned.",
    
    intro: "Fifth grade mental math extends computational fluency to larger numbers and introduces decimal operations. Students apply their times table knowledge to multiply multi-digit numbers and develop efficient mental strategies for division. Mental maths for class 5 includes working with decimals to hundredths, understanding place value in decimal numbers, and performing mental calculations with money and measurements. This year emphasizes flexibility in choosing mental strategies based on the numbers involved, preparing students for the mathematical demands of middle school.",
    
    usStandards: [
      "Fluently multiply multi-digit whole numbers using mental strategies",
      "Find quotients of whole numbers with up to four-digit dividends",
      "Add, subtract, multiply, and divide decimals to hundredths",
      "Use parentheses and evaluate expressions with these symbols",
    ],
    ukStandards: [
      "Multiply and divide numbers mentally using known facts",
      "Multiply and divide by 10, 100, and 1000 with decimal answers",
      "Add and subtract whole numbers with more than 4 digits mentally",
      "Solve problems involving multiplication and division with larger numbers",
    ],
    
    skills: [
      { title: "Multi-Digit Multiplication", description: "Multiply 2-digit by 2-digit numbers mentally" },
      { title: "Long Division Mentally", description: "Divide larger numbers using efficient strategies" },
      { title: "Decimal Addition/Subtraction", description: "Add and subtract decimals mentally" },
      { title: "Multiply/Divide by 10, 100, 1000", description: "Move decimal points accurately" },
      { title: "Estimation Skills", description: "Round and estimate before calculating" },
    ],
    
    practice: [
      { op: 'mul', digits: 2, count: 20, label: "2-Digit Multiplication (20Q)", description: "Build multi-digit multiplication speed" },
      { op: 'div', digits: 2, count: 20, label: "2-Digit Division (20Q)", description: "Practice division with larger numbers" },
      { op: 'add', digits: 3, count: 20, label: "3-Digit Addition (20Q)", description: "Maintain addition fluency" },
      { op: 'sub', digits: 3, count: 20, label: "3-Digit Subtraction (20Q)", description: "Keep subtraction skills sharp" },
      { op: 'mul', digits: 1, count: 50, label: "Times Tables Review (50Q)", description: "Maintain multiplication fact fluency" },
    ],
    
    tips: [
      "For 2-digit × 2-digit, use the distributive property: 23×14 = 23×10 + 23×4",
      "Estimate answers before calculating to catch errors",
      "Practice mental math with real money and measurement situations",
      "Use doubling and halving strategies: 25×16 = 50×8 = 100×4 = 400",
      "Review times tables regularly to maintain automaticity",
    ],
    
    faqs: [
      {
        question: "How do I teach mental math multiplication for large numbers?",
        answer: "Use the distributive property: break one number into parts. For 34×6, calculate 30×6=180 and 4×6=24, then add to get 204. Also teach doubling/halving: 25×12 = 50×6 = 300. Practice with our 2-digit multiplication drills."
      },
      {
        question: "What decimal mental math should a Year 5 student know?",
        answer: "Year 5 students should multiply and divide by 10, 100, and 1000 fluently (moving the decimal point). They should add and subtract decimals to hundredths (like money), and understand decimal place value. Mental calculation with money is a great real-world application."
      },
      {
        question: "My child knows times tables but struggles with division. Help?",
        answer: "Division is the inverse of multiplication. For 72÷8, think \"8 times what equals 72?\" Practice fact families together: 8×9=72, 9×8=72, 72÷8=9, 72÷9=8. Use our division practice to build fluency while reinforcing the multiplication connection."
      },
    ],
  },
  
  {
    grade: 6,
    ageRange: "10-11",
    ukYear: 6,
    indiaClass: 6,
    
    title: "Grade 6 Mental Math | Advanced Calculations",
    description: "Free Grade 6 mental math practice. Multi-digit operations, percentages & fractions. UK Year 6 SATs preparation.",
    
    intro: "Sixth grade represents the culmination of elementary mental math skills and prepares students for middle school mathematics. Mental maths for class 6 emphasizes fluent computation with all operations, including multi-digit division and working with fractions, decimals, and percentages interchangeably. Students develop sophisticated mental strategies for estimation, problem-solving, and checking answers. In the UK, Year 6 students prepare for SATs, which require strong mental calculation abilities. This year focuses on flexibility, efficiency, and mathematical reasoning in mental computation.",
    
    usStandards: [
      "Fluently divide multi-digit numbers using mental strategies",
      "Fluently add, subtract, multiply, and divide multi-digit decimals",
      "Find common factors and greatest common factor mentally",
      "Understand ratio concepts and use ratio reasoning to solve problems",
    ],
    ukStandards: [
      "Perform mental calculations with mixed operations and large numbers",
      "Use estimation to check answers to calculations",
      "Solve problems involving all four operations with increasingly large numbers",
      "Calculate percentage increases and decreases mentally",
    ],
    
    skills: [
      { title: "Multi-Digit Division", description: "Divide 4+ digit numbers using mental strategies" },
      { title: "Decimal Operations", description: "All four operations with decimals to thousandths" },
      { title: "Percentage Calculations", description: "Find percentages mentally (10%, 25%, 50%, etc.)" },
      { title: "Fraction-Decimal Conversion", description: "Convert between fractions and decimals mentally" },
      { title: "Order of Operations", description: "Apply PEMDAS/BODMAS in mental calculations" },
    ],
    
    practice: [
      { op: 'div', digits: 2, count: 20, label: "2-Digit Division (20Q)", description: "Build division fluency" },
      { op: 'mul', digits: 2, count: 20, label: "2-Digit Multiplication (20Q)", description: "Maintain multiplication speed" },
      { op: 'add', digits: 3, count: 50, label: "3-Digit Addition (50Q)", description: "Endurance practice for addition" },
      { op: 'sub', digits: 3, count: 50, label: "3-Digit Subtraction (50Q)", description: "Endurance practice for subtraction" },
      { op: 'div', digits: 2, count: 50, label: "Division Challenge (50Q)", description: "Extended division practice" },
    ],
    
    tips: [
      "For percentages: 10% = ÷10, 5% = half of 10%, 15% = 10% + 5%",
      "Convert fractions to decimals you know: 1/4=0.25, 1/5=0.2, 1/8=0.125",
      "Practice SATs-style mental math questions under timed conditions",
      "Develop a \"toolbox\" of strategies and choose the best one for each problem",
      "Always estimate first, calculate second, and check your answer makes sense",
    ],
    
    faqs: [
      {
        question: "How do I prepare for Year 6 SATs mental maths?",
        answer: "Practice a variety of question types including: multi-step problems, percentage calculations, time calculations, and problems with mixed units. Use timed practice to build speed. Focus on estimation to check answers quickly. Our practice tools help build the fluency and speed needed for SATs."
      },
      {
        question: "What mental math should an 11 year old know?",
        answer: "By age 11, students should: instantly recall all times tables, divide multi-digit numbers mentally, calculate common percentages (10%, 25%, 50%), convert between simple fractions and decimals, and estimate answers to check reasonableness. They should have a flexible toolkit of mental strategies."
      },
      {
        question: "How can Grade 6 students improve mental math speed?",
        answer: "At this level, speed comes from having multiple strategies and choosing the most efficient one. Practice with our timed drills, but also focus on understanding why strategies work. Review basic facts regularly—even one slow fact can bottleneck complex calculations. Set personal best goals."
      },
    ],
  },
];

export function getGradeData(grade: number): GradeData | undefined {
  return GRADES_DATA.find(g => g.grade === grade);
}

export function getAllGrades(): number[] {
  return GRADES_DATA.map(g => g.grade);
}
