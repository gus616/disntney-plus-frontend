import type { MovieImage } from "./MovieImage";

export interface Movie {
    id: number;
    title: string;
    description: string;
    genre: string;
    releaseDate: string;
    images: MovieImage[];
}