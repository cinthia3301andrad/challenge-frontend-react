import { ICharacters } from '../../types/@general'

export function handleAddHeroToTeam(hero: ICharacters) {
  const returnTeam = localStorage.getItem('@MarvelTeam:team') as string

  if (localStorage.getItem('@MarvelTeam:team') === null) {
    localStorage.setItem('@MarvelTeam:team', JSON.stringify([hero]))
  } else if (localStorage?.getItem('@MarvelTeam:team')) {
    if (
      !JSON.parse(returnTeam).find(
        (element: ICharacters) => element.id === hero.id
      )
    ) {
      localStorage.setItem(
        '@MarvelTeam:team',
        JSON.stringify([
          ...JSON.parse(returnTeam),
          hero
        ])
      )
    }
  }
}

export function handleRemoveHeroToTeam(id: string) {
  const returnTeam = localStorage.getItem('@MarvelTeam:team') as string
  const currentTeam = JSON.parse(returnTeam)

  const newTeam = currentTeam.filter((team: ICharacters) => team.id !== id)

  localStorage.setItem('@MarvelTeam:team', JSON.stringify(newTeam))

  return newTeam
}

export function chekingHeroInTeam(id: string) {
  const returnTeam = localStorage.getItem('@MarvelTeam:team') as string
  const heroes = JSON.parse(returnTeam)

  const isIncludeHero = heroes.some((el: ICharacters) => el.id === id)

  return isIncludeHero
}
