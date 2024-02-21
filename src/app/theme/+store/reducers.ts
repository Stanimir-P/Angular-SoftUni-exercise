import { createReducer, on } from "@ngrx/store";
import { IPost, ITheme } from "../../shared/interfaces";
import { postListSetIsLoading, themeCommentsSetIsLoading, themeCommentsSetTheme, themeListClear, themeListLoadPostList, themeListLoadThemeList, themeListSetIsLoading, themeListSetPostList, themeListSetThemeList } from "./actions";

export interface IThemeCommentsState {
    theme: ITheme | null;
    isLoading: boolean;
}

export const initialCommentsState: IThemeCommentsState = {
    theme: null,
    isLoading: false
};

export const themeCommentsReducer = createReducer<IThemeCommentsState>(
    initialCommentsState,
    on(themeCommentsSetTheme, (state, action) => {
        return {
            ...state,
            theme: action.theme
        }
    }),
    on(themeCommentsSetIsLoading, (state, action) => {
        return {
            ...state,
            isLoading: action.isLoading
        }
    }),
    on(themeListClear, () => initialCommentsState)
);

export interface IThemeListState {
    themeList: ITheme[] | null;
    postList: IPost[] | null;
    isLoading: boolean;
}

export const initialThemeListState: IThemeListState = {
    themeList: null,
    postList: null,
    isLoading: false
};

export const themeListReducer = createReducer<IThemeListState>(
    initialThemeListState,
    on(themeListSetThemeList, (state, action) => {
        return {
            ...state,
            themeList: action.themeList,
            isLoading: false
        }
    }),
    on(themeListSetIsLoading, (state, action) => {
        return {
            ...state,
            isLoading: action.isLoading
        }
    }),
    on(themeListSetPostList, (state, action) => {
        return {
            ...state,
            postList: action.postList,
            isLoading: false
        }
    }),
    on(postListSetIsLoading, (state, action) => {
        return {
            ...state,
            isLoading: action.isLoading
        }
    }),
    on(themeListLoadThemeList, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(themeListLoadPostList, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(themeListClear, () => initialThemeListState)
);
