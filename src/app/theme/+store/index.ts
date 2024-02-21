import { ActionReducerMap } from "@ngrx/store";
import { IRootState } from "../../+store";
import { IThemeCommentsState, IThemeListState, themeCommentsReducer, themeListReducer } from "./reducers";

export interface IThemeState {
    readonly list: IThemeListState;
    readonly comments: IThemeCommentsState;
}

export interface IThemeModuleState extends IRootState {
    theme: IThemeState;
}

export const reducers: ActionReducerMap<IThemeState> = {
    list: themeListReducer,
    comments: themeCommentsReducer
};