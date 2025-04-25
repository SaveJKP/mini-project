import { randomBytes } from "crypto";

 const generateSecretKey = () => randomBytes(64).toString("hex");

 console.log(generateSecretKey())