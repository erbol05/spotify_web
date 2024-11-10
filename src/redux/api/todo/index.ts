import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query<TODO.GetTodoRes, TODO.GetTodoReg>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodo: build.mutation<TODO.PostTodoRes, TODO.PostTodoReq>({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: build.mutation<TODO.DeleteTodoRes, TODO.DeleteTodoReq>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useDeleteTodoMutation, useGetTodoQuery, usePostTodoMutation } =
  api;
