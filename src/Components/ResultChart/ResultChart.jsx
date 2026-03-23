import React from 'react';
import { LineChart } from 'lucide-react';
const resultData=[
  { "id": 1, "student": "Student 1", "physics": 85, "chemistry": 78, "math": 90 },
  { "id": 2, "student": "Student 2", "physics": 72, "chemistry": 75, "math": 70 },
  { "id": 3, "student": "Student 3", "physics": 90, "chemistry": 88, "math": 95 },
  { "id": 4, "student": "Student 4", "physics": 66, "chemistry": 60, "math": 68 },
  { "id": 5, "student": "Student 5", "physics": 78, "chemistry": 80, "math": 76 },
  { "id": 6, "student": "Student 6", "physics": 88, "chemistry": 85, "math": 89 },
  { "id": 7, "student": "Student 7", "physics": 59, "chemistry": 62, "math": 55 },
  { "id": 8, "student": "Student 8", "physics": 93, "chemistry": 91, "math": 94 },
  { "id": 9, "student": "Student 9", "physics": 74, "chemistry": 70, "math": 72 },
  { "id": 10, "student": "Student 10", "physics": 81, "chemistry": 79, "math": 83 }
]
const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                
            </LineChart>
        </div>
    );
};

export default ResultChart;