import { Schema, model } from "mongoose";

//create MongoDB document schema

const Userschema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: new Date().getTime(),
  },
});

//use schema to create model
export const User = model("User", Userschema);
