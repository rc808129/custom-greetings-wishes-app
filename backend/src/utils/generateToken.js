import jwt from "jsonwebtoken";

const generateToken = (id) => {

  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};




const guestToken = ()=> {
  return jwt.sign({
    role: "guest"
  },
   process.env.JWT_SECRET,
   { expiresIn: "1h" }
)
}
export {generateToken, guestToken}