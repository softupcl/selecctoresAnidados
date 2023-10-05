import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Region, SmallCountry } from '../../interface/pais.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})

export class SelectorPageComponent implements OnInit, OnDestroy {

  public paisesPorregion : SmallCountry[] = [];
  public fronteras : string[] = [];

  public myForm : FormGroup = this.fb.group({

    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],

  });

  constructor(
    private fb : FormBuilder,
    private paisService : PaisesService
  ){}


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
    this.cambiarRegion();
    this.cambiarPais();
  }


  get regiones ():Region[]{
    return this.paisService.regiones;
  }

 
  cambiarRegion():void{
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('pais')?.setValue('')),
      switchMap( region => this.paisService.getPaisesPorRegion(region) )
    )
    .subscribe(paises =>{
      this.paisesPorregion = paises;
    });
  }  

  cambiarPais():void{
    this.myForm.get('pais')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('frontera')?.setValue('')),
      tap( () => this.fronteras = [] ),
      filter( (value:string) => value.length > 0 ),
      switchMap( codigoPais => this.paisService.getPaisPorCodigo(codigoPais)),
    )
    .subscribe(paises =>{
      this.fronteras = paises.borders;
    
    });
  }  

}
