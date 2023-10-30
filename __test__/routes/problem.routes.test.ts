import request from "supertest";
// import { } from 'mongod'
import app from "../../src/server";
import supertest from "supertest";
import mongoose from "mongoose";
import { insertProblem } from "../../src/Controllers/problems";
import Problem from "../../src/DB/Models/ProblemModel";

describe("Problems", () => {
 
  describe("POST /api/problems", () => {
    it("should create a new problem and return 201", async () => {
      // Define the payload for the new problem
      const newProblem = {
        title: "New Problem",
        level: "Medium",
        companies: ["Company X", "Company Y"],
        topics: ["Topic X", "Topic Y"],
        statement: "This is a new problem statement",
        examples: [
          { input: "Sample input 1", output: "Sample output 1", explanation: "Explanation 1" },
        ],
        sampleTest: [
          { input: "Sample input 2", output: "Sample output 2" },
        ],
        testCases: [
          { input: "Sample input 3", output: "Sample output 3" },
        ],
        noOfHiddenTests: 5,
      };

      const response = await request(app)
        .post('/api/problems') // Adjust the endpoint as needed
        .send(newProblem);

      expect(response.status).toBe(201); // Assuming it's a successful creation status

      // You can add more assertions to check the response body, database, etc.
      // For example, you can check if the response contains the created problem's data.
      expect(response.body.title).toBe(newProblem.title);

      // Clean up: Delete the created problem from the database
      // You can use the problem's ID or other unique identifier to delete it.
      await Problem.deleteOne({ title: newProblem.title });
    });
  });

  describe("update problems", () => {
    describe("should update a problem by ID", () => {
      // const problem = await insertProblem(payload, res)
      it("Should return 200", async () => {
        const newProblem = new Problem({
          title: 'Example Problem',
          level: 'Easy',
          companies: ['Company A', 'Company B'],
          topics: ['Topic A', 'Topic B'],
          statement: 'This is a sample problem statement',
          examples: [
            { input: 'Sample input 1', output: 'Sample output 1', explanation: 'Explanation 1' },
            { input: 'Sample input 2', output: 'Sample output 2', explanation: 'Explanation 2' },
          ],
          sampleTest: [
            { input: 'Sample input 3', output: 'Sample output 3' },
            { input: 'Sample input 4', output: 'Sample output 4' },
          ],
          testCases: [
            { input: 'Sample input 5', output: 'Sample output 5' },
            { input: 'Sample input 6', output: 'Sample output 6' },
          ],
          noOfHiddenTests: 10,
        });
        await newProblem.save();
        const updatedProblem = {
          title: 'Updated Problem Title',
        };
        const response = await request(app)
          .put(`/api/problems/${newProblem.pid}`) // Adjust the endpoint as needed
          .send(updatedProblem);
        expect(response.status).toBe(200); // Assuming it's a successful update status

        const problemAfterUpdate = await Problem.findOne({ pid: newProblem.pid });
        expect(problemAfterUpdate?.title).toBe(updatedProblem.title);

        await Problem.findOneAndRemove({ pid: newProblem.pid });

      })
    })
  })

  describe("DELETE /api/problems/:id", () => {
    let createdProblemId: string;
  
    beforeAll(async () => {
      // Create a new problem to be deleted
      const response = await request(app)
        .post('/api/problems')
        .send({
          title: "Test Problem",
          level: "Easy",
          companies: ["Test Company"],
          topics: ["Test Topic"],
          statement: "This is a test problem.",
          examples: [
            {
              input: "Test input",
              output: "Test output",
              explanation: "Test explanation",
            },
          ],
          sampleTest: [
            {
              input: "Sample input",
              output: "Sample output",
            },
          ],
          testCases: [
            {
              input: "Case input",
              output: "Case output",
            },
          ],
          noOfHiddenTests: 5,
        });
  
      expect(response.status).toBe(201);
      createdProblemId = response.body.pid;
    });
  

    it("should delete the created problem and return 200", async () => {
      const response = await request(app)
        .delete(`/api/problems/${createdProblemId}`)
        .send();
    
      expect(response.status).toBe(200);
    
      // Add a setTimeout to wait before verifying deletion
      setTimeout(() => {
        request(app)
          .get(`/api/problems/${createdProblemId}`)
          .end((_, verifyDeleted) => {
            expect(verifyDeleted.status).toBe(404);
          });
      }, 1000); // Adjust the delay as needed
    });
    
    
    // Clean up: Optionally, you can add a step to recreate the deleted problem if needed.
  });
  
});