import { UserSignUpRequest } from "../dtos/user.dto.js"; //인터페이스 가져오기 
import { 
    responseFromUser,
    bodyToUser 
  } from "../dtos/user.dto.js";
import bcrypt from "bcrypt";
import {
  addUser,
  getUser,
  getUserPreferencesByUserId,
  setPreference,
} from "../repositories/user.repository.js";
import { CustomError } from "../../../errors/custom.error.js";

export const userSignUp = async (
  data: UserSignUpRequest
) => {
  const converted = bodyToUser(data);

  const hashedPassword = await bcrypt.hash(
    converted.password, 
    10
  );

  const joinUserId = await addUser({
    email: converted.email,
    password: hashedPassword,
    name: converted.name,
    gender: converted.gender,
    birth: converted.birth,
    address: converted.address,
    detailAddress: converted.detail,
    phoneNumber: converted.phoneNumber,
  });

  if (joinUserId === null) {
    throw new CustomError(
      409,
      "이미 존재하는 이메일입니다."
    );
  }

  await Promise.all(
    data.preferences.map((pref) =>
      setPreference(joinUserId, pref)
    )
  );

  const user = await getUser(joinUserId);
  const preferences = await getUserPreferencesByUserId(joinUserId);

  return responseFromUser({ user, preferences });
};