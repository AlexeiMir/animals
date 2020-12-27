interface Image {
    height: number,
    id: string,
    url: string,
    width: number
}

export enum LoadingStatus {
    LOADED ='LOADED',
    LOADING ='LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    SUCCESS = 'SUCCESS'

}


export interface Cat {
    description: string,
    id: string,
    image: Image,
    name: string,
    temperament: string,
    dog_friendly: number,
    life_span?: string,
    alt_names?: string,
    wikipedia_url?: string,
    origin: string,
    weight_imperial?: string,
    experimental?: number,
    hairless?: number,
    natural?: number,
    rare?: number,
    rex?: number,
    suppress_tail?: number,
    short_legs?: number,
    hypoallergenic?: number,
    adaptability?: number,
    affection_level?: number,
    country_code?: string,
    child_friendly?: number,
    energy_level?: number,
    grooming?: number,
    health_issues?: number,
    intelligence?: number,
    shedding_level?: number,
    social_needs?: number,
    stranger_friendly?: number,
    vocalisation?: number
}

export interface CatsState {
    items: Cat[],
    LoadingStatus: LoadingStatus
}