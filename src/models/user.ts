import { timeStamp } from "console";
import mongoose, {Schema, Document} from "mongoose";

// Document: built in module in MDB
interface IUser extends Document {
    name: string,
    age: number,
    gender: string,
    subject: string,
    position: string
}
// Schema: built in module in MDB
const userSchema = new Schema<IUser>(
    {
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    subject: {type: String, required: true},
    position: {type: String, required: true},
    },
    {timestamps : true}
);
    
const User = mongoose.model<IUser>('User', userSchema);

export default User;