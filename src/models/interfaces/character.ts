export interface Character {
    race: string, 
    class: dndclass, 
    alignment: string,
    level: number,
    paragonPath: string,
    epicDestiny: string,
    patronDiety: string,
    actionPoints: number,
}

export interface dndclass {
    // Classes from https://www.dandwiki.com/wiki/4e_Classes
    // Also this is an interface and it is called a class...
    name: string,
    role: string,
    source: string,
    description: string,
}