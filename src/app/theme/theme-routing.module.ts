import { RouterModule, Routes } from "@angular/router";
import { CommentsComponent } from "./comments/comments.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemeComponent } from "./theme.component";


const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    data: {
      isLogged: true
    }
  },
  {
    path: 'new',
    component: NewThemeComponent,
    data: {
      isLogged: true
    }
  },
  {
    path: ':id',
    component: CommentsComponent,
    data: {
      isLogged: true
    }
  },
];

export const ThemeRoutingModule = RouterModule.forChild(routes);
