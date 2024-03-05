const User = require("../../models/UserModel");

export async function getUser(email) {
  try {
    const dbUser = await User.findOne({ email: email });

    if (!dbUser) {
      throw new Error("No User with the specified email was found.");
    }

    return dbUser;
  } catch (error) {
    throw error;
  }
}
