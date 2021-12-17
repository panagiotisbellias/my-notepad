export interface JokeValue{
    categories: string[],
    id: number,
    joke: string
}

export interface OpenApiResponse{
    type: string,
    value: JokeValue[]
}
