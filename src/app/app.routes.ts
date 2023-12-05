import { Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";

export const routes: Routes = [
    {path: "", component: HomePageComponent, title: "Home page"},
    {path: "movie-detail/:id", component: MovieDetailsComponent, title: "Movie details"},
    {path: "**", component: HomePageComponent, pathMatch: "full"},
];