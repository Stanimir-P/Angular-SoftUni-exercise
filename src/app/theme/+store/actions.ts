import { createAction, props } from "@ngrx/store"
import { IPost, ITheme } from "../../shared/interfaces"

const themeCommentsNamespace = '[THEME COMMENTS]'

export const themeCommentsSetTheme = createAction(`${themeCommentsNamespace} Set Theme`, props<{theme: ITheme}>())
export const themeCommentsSetIsLoading = createAction(`${themeCommentsNamespace} Set Loading`, props<{isLoading: boolean}>())
export const themeCommentsClear = createAction(`${themeCommentsNamespace} Clear`)

const themeListNamespace = '[THEME LIST]'

export const themeListLoadThemeList = createAction(`${themeListNamespace} Load Theme List`)
export const themeListThemeListLoadError = createAction(`${themeListNamespace} Load Theme List Error`, props<{error: string}>())

export const themeListSetThemeList = createAction(`${themeListNamespace} Set Theme List`, props<{themeList: ITheme[]}>())
export const themeListSetIsLoading = createAction(`${themeListNamespace} Set Loading`, props<{isLoading: boolean}>())

export const themeListSetPostList = createAction(`${themeListNamespace} Set Post List`, props<{postList: IPost[]}>())
export const postListSetIsLoading = createAction(`${themeListNamespace} Set Loading`, props<{isLoading: boolean}>())

export const themeListLoadPostList = createAction(`${themeListNamespace} Load Post List`)
export const themeListPostListLoadError = createAction(`${themeListNamespace} Load Post List Error`, props<{error: string}>())

export const themeListClear = createAction(`${themeListNamespace} Clear`)