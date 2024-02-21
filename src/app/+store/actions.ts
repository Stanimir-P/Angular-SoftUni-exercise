import { createAction, props } from "@ngrx/store";
import { IUser } from "../shared/interfaces";

const authNamespace = '[AUTH]'

export const register = createAction(`${authNamespace} Register`, props<{ user: IUser}>());
export const login = createAction(`${authNamespace} Login`, props<{ user: IUser}>());
export const logout = createAction(`${authNamespace} Logout`);
export const updateUser = createAction(`${authNamespace} Update`, props<{ user: IUser}>());