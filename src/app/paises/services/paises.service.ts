import { Injectable } from '@angular/core';
import { Pais, SmallCountry, Region } from '../interface/pais.interfaces';
import { Observable, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl:string = 'https://restcountries.com/v3.1';

  private _regiones :Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania]

  constructor(
    private http : HttpClient,
  ){}

  get regiones():Region[]{
    return [ ...this._regiones ];
  }


  getPaisesPorRegion(region: Region):Observable<SmallCountry[]>{

    if(!region) return of([]);

    const url:string = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
    
    return this.http.get<Pais[]>(url)
      .pipe(
        map( countries => countries.map( country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        }))),
      )
  } 

  getPaisPorCodigo(codigoPais: string):Observable<SmallCountry>{

   const url:string = `${this.baseUrl}/alpha/${codigoPais}?fields=cca3,name,borders`;
    
    return this.http.get<Pais>(url)
      .pipe(
        map( pais => ({
          name: pais.name.common,
          cca3: pais.cca3,
          borders: pais.borders ?? []
        })),
      )
  } 
}
