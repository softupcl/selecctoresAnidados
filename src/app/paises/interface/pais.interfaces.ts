export interface SmallCountry {
    name:         string;
    cca3:         string;
    borders :     string[];
}

export interface Pais {
    name:         Name;
    cca3:         string;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    Subregion;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string;
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Region {
    Asia = "Asia",
    Europe = "Europe",
    Americas = 'Americas',
    Oceania = 'Oceania',
    Africa = 'Africa'
}


export interface All {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    ron?: string;
    srp?: string;
    dan?: string;
    fra?: string;
    eng?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    ell?: string;
    tur?: string;
    cat?: string;
    deu?: string;
    rus?: string;
    swe?: string;
    nor?: string;
    lav?: string;
    nld?: string;
    de?:  string;
    mkd?: string;
    hrv?: string;
    sqi?: string;
    ita?: string;
    fin?: string;
    bos?: string;
    ltz?: string;
    ukr?: string;
    mlt?: string;
    nfr?: string;
    spa?: string;
    est?: string;
    slk?: string;
    gsw?: string;
    roh?: string;
    hun?: string;
    lat?: string;
    glv?: string;
    pol?: string;
    cnr?: string;
    fao?: string;
    nrf?: string;
    ces?: string;
    isl?: string;
    lit?: string;
    por?: string;
    bel?: string;
    slv?: string;
    bul?: string;
    gle?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
