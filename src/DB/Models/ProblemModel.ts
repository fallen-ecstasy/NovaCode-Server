import mongoose, { Schema, Document } from 'mongoose';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import autoIncrement from 'mongoose-auto-increment';
import {autoIncrement} from 'mongoose-plugin-autoinc';


interface IProblem extends Document{
  title: string;
  level: 'Easy'|'Medium'|'Hard';
  companies: string[];
  topics: string[];
  statement: string;
  examples: {
    input: string;
    output: string;
    explanation: string;
  }[];
  sampleTest:{
    input: string;
    output: string;
  }[];
  testCases:{
    input: string;
    output: string;
  }[];
  noOfHiddenTests: number;
};

const problemSchema = new Schema<IProblem>({
  title:{type: String, required: true},
  level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  companies: { type: [String], required: true },
  topics: { type: [String], required: true },
  statement: { type: String, required: true },
  examples: [{
      input: { type: String, required: true },
      output: { type: String, required: true },
      explanation: { type: String, required: true },
  }],
  sampleTest: [{
      input: { type: String, required: true },
      output: { type: String, required: true },
  }],
  testCases: [{
      input: { type: String, required: true },
      output: { type: String, required: true },
  }],
  noOfHiddenTests: { type: Number, required: true },
});

// creating auto-incrementing field for _id.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// problemSchema.plugin((schema: any)=> {
//   schema.add({ _id: Number });
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   schema.plugin(autoIncrement.plugin, { model: 'Problem', field: '_id', startAt: 1 });
// });

problemSchema.plugin(autoIncrement, {
  model: 'Problem',
  field: 'problemId', // Field to be auto-incremented
  start: 1, // Initial value
});
// Create and export the Problem model
const Problem = mongoose.model<IProblem>('Problem', problemSchema);
export default Problem;
