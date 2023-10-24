import { Schema, model, connect, ObjectId, Model } from 'mongoose';

// Interface representing a document in MongoDB.
interface User {
    _id: ObjectId,
    name: string,
    username: string,
    sessionCount: number,
    email: string,
    pass: {type: string, required: true},
    dob: Date,
    solved: [ObjectId],
    attempted: [ObjectId],
}

// Create a Schema corresponding to the document interface.
const userSchema = new Schema<User>({
    _id: {type: Object, required: true},
    name: {type: String, required: true},
    sessionCount: {type: Number},
    email: {type: String, required: true},
    pass: {type: String, required: true},
    dob: {type: Date, required: true},
    solved: {type: [Object]},
    attempted: {type: [Object]},
});

// Create a Model.
const User = model<User>('User', userSchema);

export default User;