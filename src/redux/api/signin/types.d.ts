namespace SIGNIN {
  interface iForm {
    title: string;
    id: number;
  }
  type GetSigninRes = iForm[];
  type GetSigninReg = void;
  type PostSigninRes = iForm[];
  type PostSigninReq = iForm;
  type DeleteSigninRes = iForm;
  type DeleteSigninReq = number;
}
