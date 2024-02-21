import { createReducer, on } from "@ngrx/store";
import { userLoginSetErrorMessage, userLoginSetLoading, userProfileSetEditMode, userProfileSetErrorMessage, userRegisterSetErrorMessage, userRegisterSetLoading } from "./actoins";

export interface ILoginState {
    errorMessage: string;
    isLoading: boolean;
}

export const initialLoginState: ILoginState = {
    errorMessage: undefined,
    isLoading: false
};

export const loginReducer = createReducer<ILoginState>(
    initialLoginState,
    on(userLoginSetErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.message
        }
    }),
    on(userLoginSetLoading, (state, action) => {
        return {
            ...state,
            isLoading: action.isLoading
        }
    })
);

export interface IRegisterState {
    errorMessage: string;
    isLoading: boolean;
}

export const initialRefisterState: IRegisterState = {
    errorMessage: undefined,
    isLoading: false
};

export const registerReducer = createReducer<IRegisterState>(
    initialRefisterState,
    on(userRegisterSetErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.message
        }
    }),
    on(userRegisterSetLoading, (state, action) => {
        return {
            ...state,
            isLoading: action.isLoading
        }
    })
);

export interface IProfileState {
    errorMessage: string;
    isEditMode: boolean;
}

export const initialProfileState: IProfileState = {
    errorMessage: undefined,
    isEditMode: false
};

export const profileReducer = createReducer<IProfileState>(
    initialProfileState,
    on(userProfileSetEditMode, (state, action) => {
        return {
            ...state,
            isEditMode: action.isEdit
        }
    }),
    on(userProfileSetErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.message
        }
    })
);