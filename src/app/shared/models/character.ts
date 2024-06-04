import { Planet } from './planet';
import { Transformation } from './transformation';

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race:
    | 'Saiyan'
    | 'Human'
    | 'Namekian'
    | 'Frieza Race'
    | 'Android'
    | 'Majin'
    | 'God'
    | 'Angel'
    | 'Unknown'
    | 'Jiren Race'
    | 'Nucleico Benigno'
    | 'Nucleico';
  gender: 'Male' | 'Female';
  description: string;
  image: string;
  affiliation:
    | 'Z fighter'
    | 'Army of Frieza'
    | 'Freelancer'
    | 'Villain'
    | 'Other'
    | 'Assistant of Beerus'
    | 'Pride Troopers'
    | 'Assistant of Vermound';
  deletedAt: null | Date;
  originPlanet?: Planet;
  transformations?: Transformation[];
}
