namespace TODO {
  interface iForm {
    title: string;
    id: number;
  }
  type GetTodoRes = iForm[];
  type GetTodoReg = void;
  type PostTodoRes = iForm[];
  type PostTodoReq = iForm;
  type DeleteTodoRes = iForm;
  type DeleteTodoReq = number;
}
