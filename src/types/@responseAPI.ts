export type ResponseDataAPICharacters = {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string
    }
}

export type ResponseDataAPIHeroProfile = {
    id: number,
    name: string,
    description: string,
    thumbnail: {
      extension: string,
      path: string
    },
}
export type ResponseDataAPIComics = {
    id: number,
    title: string,
    description: string,
    pageCount: number,
    prices: [{ price: number }],
    dates: Array<{
        type: string,
        date: string,
    }>,
    thumbnail: {
      extension: string,
      path: string
    },
    available: number
}
