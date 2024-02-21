import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs";
import { PostService } from "../../post/postService/post.service";
import { ThemeService } from "../themeService/theme.service";
import { themeListLoadPostList, themeListLoadThemeList, themeListSetPostList, themeListSetThemeList, themeListThemeListLoadError } from "./actions";

@Injectable()
export class ThemeListEffects {
    constructor(
        private actions$: Actions,
        private themeService: ThemeService,
        private postService: PostService
    ) {}

    loadThemeList = createEffect(() => this.actions$.pipe(
        ofType(themeListLoadThemeList),
        switchMap(() => this.themeService.loadThemeList().pipe(
            catchError(error => [new Error(error)])
        )),
        map(result => result instanceof Error ? 
            themeListThemeListLoadError({ error: result.message }) : 
            themeListSetThemeList({ themeList: result }))
    ));

    loadPostList = createEffect(() => this.actions$.pipe(
        ofType(themeListLoadPostList),
        switchMap(() => this.postService.loadPosts()),
        map(postList => themeListSetPostList({ postList }))
    ));
}
