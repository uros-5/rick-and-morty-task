/** @see {isCharacterResponse} ts-auto-guard:type-guard */
export interface CharacterResponse {
  info?: Info;
  results: Character[];
}

export interface Info {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null
}

export interface Character {
  id: number;
  name: string;
  url: string;
  created: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface CharacterLocation {
  name: string;
  url: string;
}
