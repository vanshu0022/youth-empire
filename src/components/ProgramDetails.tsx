
import React from 'react';
import { Award, Trophy, Calendar } from 'lucide-react';

type ProgramDetailsProps = {
  programType: 'juniors' | 'seniors';
};

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ programType }) => {
  const juniorDetails = {
    title: "KBC Juniors (School Level)",
    description: "An exciting quiz competition designed specifically for school students to test their knowledge, critical thinking, and quick response abilities. Participate and showcase your intellectual prowess!",
    rounds: [
      "Round 1: Online Preliminary Quiz",
      "Round 2: Regional Semi-Finals",
      "Round 3: National Finals (Live TV Show)"
    ],
    prizes: [
      "Winner: ₹100,000 cash prize + Scholarship",
      "Runner-up: ₹50,000 cash prize",
      "Semi-finalists: ₹10,000 cash prize each",
      "Certificate of participation for all contestants"
    ],
    dates: "Registration opens: June 1, 2025 | Closes: July 15, 2025",
    eligibility: "Open to all school students from Classes 6 to 12"
  };

  const seniorDetails = {
    title: "KBC Seniors (College/University Level)",
    description: "A prestigious quiz competition for college and university students that challenges your knowledge across various domains. Compete with the brightest minds from institutions across the country!",
    rounds: [
      "Round 1: Online Preliminary Quiz",
      "Round 2: Zonal Semi-Finals",
      "Round 3: National Finals (Live TV Show with Celebrity Host)"
    ],
    prizes: [
      "Winner: ₹300,000 cash prize + Internship opportunity",
      "Runner-up: ₹150,000 cash prize",
      "Semi-finalists: ₹30,000 cash prize each",
      "Certificate of excellence for all contestants"
    ],
    dates: "Registration opens: July 1, 2025 | Closes: August 15, 2025",
    eligibility: "Open to all undergraduate and postgraduate students"
  };

  const details = programType === 'juniors' ? juniorDetails : seniorDetails;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{details.title}</h2>
      <p className="text-gray-600 mb-6">{details.description}</p>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <Calendar className="mr-2 text-student-purple" size={20} />
          Competition Format
        </h3>
        <ul className="list-disc pl-10 space-y-2">
          {details.rounds.map((round, index) => (
            <li key={index} className="text-gray-700">{round}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <Award className="mr-2 text-student-purple" size={20} />
          Prizes & Benefits
        </h3>
        <ul className="list-disc pl-10 space-y-2">
          {details.prizes.map((prize, index) => (
            <li key={index} className="text-gray-700">{prize}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <Trophy className="mr-2 text-student-purple" size={20} />
          Winners Recognition
        </h3>
        <p className="text-gray-700 pl-10">
          All winners will be featured on our "Wall of Fame" on the Highlights page 
          and will receive special recognition during our annual awards ceremony. 
          Top performers will also get nationwide media coverage and featured interviews.
        </p>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p><strong>Important Dates:</strong> {details.dates}</p>
        <p><strong>Eligibility:</strong> {details.eligibility}</p>
      </div>
    </div>
  );
};

export default ProgramDetails;
