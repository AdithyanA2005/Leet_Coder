import { Schema, model, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  comparePassword(password: string): Promise<boolean>;
};

// Scheme for User collection
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
  },
  {
    timestamps: true, // To automatically add `createdAt` and `updatedAt` fields
    versionKey: false, // `__v` attribute in mongodb will not be added
  }
);

// Hash password before saving or updating to database
userSchema.pre<IUser>("save", async function (next) {
  // The current user record being updated
  const user = this;

  // Only hash password if it has been modified or is new
  if (!user.isModified("password")) return next();

  // Hash the password with the salt
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  // Execute the next in hierarchy
  next();
});

// To compare if the password is same as the hashed password in the db
userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

// Create the model
const User: Model<IUser> = model<IUser>("User", userSchema);
export default User;
