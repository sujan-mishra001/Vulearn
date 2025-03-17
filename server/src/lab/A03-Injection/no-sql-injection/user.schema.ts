import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  flag?: string;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    flag: { type: String },
  },
  {
    timestamps: true, 
  }
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
