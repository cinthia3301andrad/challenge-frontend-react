export type ICharacters = {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string
    }
}

export type IHeroProfile = {
    id: number,
    name: string,
    description: string,
    thumbnail: {
      extension: string,
      path: string
    },
}
export type IComics = {
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
