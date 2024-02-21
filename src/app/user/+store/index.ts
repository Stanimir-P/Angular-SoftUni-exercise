import { ActionReducerMap } from "@ngrx/store";
import { IRootState } from "../../+store";
import { ILoginState, IProfileState, IRegisterState, loginReducer, profileReducer, registerReducer } from "./reducers";

export interface IUserState {
    readonly login: ILoginState
    readonly register: IRegisterState
    readonly profile: IProfileState
}

export interface IUserModuleState extends IRootState {
    user: IUserState
}

export const reducers: ActionReducerMap<IUserState> = {
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer
}