import { createReducer, on } from "@ngrx/store";
import { IUser } from "../shared/interfaces";
import { login, logout, register, updateUser } from "./actions";

export interface IAuthState {
    currentUser: IUser | null | undefined
}

export const initialState: IAuthState = {
    currentUser: undefined
};

const setCurrentUser = (
    state: IAuthState, 
    action: ReturnType<typeof login> | 
        ReturnType<typeof register> | 
        ReturnType<typeof updateUser>
    ) => {
    return {
        ...state,
        currentUser: action.user
    };
}

export const authReducer = createReducer<IAuthState>(
    initialState,
    on(login, setCurrentUser),
    on(register, setCurrentUser),
    on(updateUser, setCurrentUser),
    on(logout, (state) => {
        return {
            ...state,
            currentUser: null
        }
    }),
);
