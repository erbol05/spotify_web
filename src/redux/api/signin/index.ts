import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getSignin: build.query<SIGNIN.GetSigninRes, SIGNIN.GetSigninReg>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postSignin: build.mutation<SIGNIN.PostSigninRes, SIGNIN.PostSigninReq>({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetSigninQuery, usePostSigninMutation } = api;
