export interface resultadoPlaneta{
  results: atributosPlaneta[];
}
export interface atributosPlaneta{
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate:string;
  gravity:string;
  terrain:string;
  surface_water:number;
  population:number;
}
