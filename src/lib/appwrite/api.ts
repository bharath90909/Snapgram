import type { NewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

export async function createUserAccount(user: NewUser) {
  try {
    //we should pass in the exact same order of user details
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAccount;
  } catch (error) {
    console.error("Error while creating user account", error);
    return error;
  }
}
