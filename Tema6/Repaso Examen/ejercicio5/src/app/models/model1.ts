export interface results1 {
  results: episodio[];
}

export interface episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
