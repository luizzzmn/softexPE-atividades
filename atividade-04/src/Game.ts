export interface Game {
    id: number;
    title: string;
    genre: string;
    platform: string;
    releaseYear: number;
    completed: boolean; // novo campo para marcar como jogado/concluído
}