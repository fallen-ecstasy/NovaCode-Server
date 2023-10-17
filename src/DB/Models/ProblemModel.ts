import mongoose, { Schema, Document } from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

interface IProblem extends Document {
 pid: number;
 title: string;
 level: 'Easy' | 'Medium' | 'Hard';
 companies: string[];
 topics: string[];
 statement: string;
 examples: {
    input: string;
    output: string;
    explanation: string;
 }[];
 sampleTest: {
    input: string;
    output: string;
 }[];
 testCases: {
    input: string;
    output: string;
 }[];
 noOfHiddenTests: number;
};

const problemSchema = new Schema<IProblem>({
 pid: { type: Number, unique: true, index: true, required: true },
 title: { type: String, required: true },
 level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
 companies: { type: [String], required: true },
 topics: { type: [String], required: true },
 statement: { type: String, required: true },
 examples: [{
  _id: false,
    input: { type: String, required: true },
    output: { type: String, required: true },
    explanation: { type: String, required: true },
 }],
 sampleTest: [{
  _id: false,
    input: { type: String, required: true },
    output: { type: String, required: true },
 }],
 testCases: [{
  _id: false,
    input: { type: String, required: true },
    output: { type: String, required: true },
 }],
 noOfHiddenTests: { type: Number, required: true },
});

problemSchema.plugin(autoIncrement, {
 model: 'Problem',
 field: 'pid', // Field to be auto-incremented
 start: 1, // Initial value
});



// Create and export the Problem model
const Problem = mongoose.model<IProblem>('Problem', problemSchema);
export default Problem;