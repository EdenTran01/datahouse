# Datahouse Compatibility Predictor

## Overview

The Compatibility Predictor is a tool that helps determine the compatibility between applicants and existing team members based on their attributes. This tool provides a compatibility score for each applicant, indicating how well they match with the team.

## Input
The input to the Compatibility Predictor is provided in JSON format and consists of two main sections: the team members and the applicants.

## Team Members
The team members section contains an array of objects, each representing a team member. <br>
Each team member object includes the following attributes:

name: The name of the team member. 
<br>
attributes: An object containing the attributes of the team member, such as intelligence, strength, endurance, and spicy food tolerance.

## Applicants
The applicants section contains an array of objects, each representing an applicant. <br> 
Each applicant object includes the following attributes:
name: The name of the applicant. <br>
attributes: An object containing the attributes of the applicant, similar to the attributes of team members.

## Output
The Compatibility Predictor generates an output in JSON format, providing compatibility scores for each applicant. <br> 
Each output object includes the following properties:
name: The name of the applicant. <br>
compatibilityScore: The compatibility score of the applicant, ranging from 0 to 1, indicating their compatibility with the existing team.

## Running Solution
To use the Compatibility Predictor:

1) Clone the repository to your local machine. <br>
2) Ensure you have Node.js installed. <br>
3) Provide input data in JSON format as described above. <br>
4) Run the JavaScript solution to generate compatibility scores. <br>
5) View the output in the console or save it to a file for further analysis.
