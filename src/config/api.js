import axios from "axios";
import { API_Routes } from "./constants";

export async function UserSignin({ id, email_id, user_name, role }) {
  const data = await axios.post(API_Routes.userSignin, {
    id,
    email_id,
    user_name,
    role,
  });
  return [data, null];
}

export async function LoginUser({ user_id, email_id, role }) {
  const data = await axios.post(API_Routes.loginuser, {
    user_id,
    email_id,
    role,
  });
  return [data, null];
}
