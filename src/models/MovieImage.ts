export interface MovieImage {
    id: number;
    url: string;
    type: string; // e.g., 'thumbnail', 'banner', etc.
    movieId: number; // Foreign key to associate with Movie
}