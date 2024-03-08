// Function to calculate compatibility score between an applicant and a team member
function calculateCompatibility(applicant, teamMember) {
    // Sample calculation: Calculate compatibility based on attributes difference
    let attributeDifference = 0;
    for (let attribute in applicant.attributes) {
        attributeDifference += Math.abs(applicant.attributes[attribute] - teamMember.attributes[attribute]);
    }
    // Normalize attribute difference to fall within [0, 1] range
    return 1 - (attributeDifference / (Object.keys(applicant.attributes).length * 10));
}

// Function to generate compatibility scores for all applicants
function generateCompatibilityScores(applicants, team) {
    let compatibilityScores = [];
    for (let applicant of applicants) {
        let compatibilityScore = 0;
        for (let teamMember of team) {
            compatibilityScore += calculateCompatibility(applicant, teamMember);
        }
        compatibilityScore /= team.length; // Average compatibility score
        compatibilityScores.push({ name: applicant.name, compatibilityScore: compatibilityScore });
    }
    return compatibilityScores;
}

// Parse input JSON
let inputData = `{
    "team": [
        {
            "name": "Eddie",
            "attributes": {
                "intelligence": 1,
                "strength": 5,
                "endurance": 3,
                "spicyFoodTolerance": 1
            }
        },
        {
            "name": "Will",
            "attributes": {
                "intelligence": 9,
                "strength": 4,
                "endurance": 1,
                "spicyFoodTolerance": 6
            }
        },
        {
            "name": "Mike",
            "attributes": {
                "intelligence": 3,
                "strength": 2,
                "endurance": 9,
                "spicyFoodTolerance": 5
            }
        }
    ],
    "applicants": [
        {
            "name": "Mike",
            "attributes": {
                "intelligence": 4,
                "strength": 5,
                "endurance": 2,
                "spicyFoodTolerance": 1
            }
        },
        {
            "name": "Jane",
            "attributes": {
                "intelligence": 7,
                "strength": 4,
                "endurance": 3,
                "spicyFoodTolerance": 2
            }
        },
        {
            "name": "Joe",
            "attributes": {
                "intelligence": 1,
                "strength": 1,
                "endurance": 1,
                "spicyFoodTolerance": 10
            }
        }
    ]
}`;

let data = JSON.parse(inputData);
let team = data.team;
let applicants = data.applicants;

// Generate compatibility scores
let compatibilityScores = generateCompatibilityScores(applicants, team);

// Output the compatibility scores in JSON format
console.log(JSON.stringify(compatibilityScores.map(applicant => ({
    name: applicant.name,
    compatibilityScore: applicant.compatibilityScore.toFixed(2)}))));