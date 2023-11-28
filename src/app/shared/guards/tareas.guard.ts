import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { isEmpty, map, Observable, tap } from 'rxjs';
import { TareaService } from 'src/app/tareas-module/services/tarea-service.service';

//acceder o descargar url o modulos, el paquete se descarga y habilita, pero si se accede directamente deja entrar
export const tareasGuardCanActivate: CanActivateFn = (
  route:ActivatedRouteSnapshot, 
  state:RouterStateSnapshot) => {
    console.log("Routesnao:",route);
    console.log("statesnap:",state);
  return checkTareasList();
};

//define si se accede  o no segun si ya esta descargado para evitar el error de acceso del primero
export const tareasGuardCanMatch:
CanMatchFn=(
  route:Route,
  segments:UrlSegment[]
  )=> {
    console.log("Routesnao:",route);
    console.log("statesnap:",segments);
    return checkTareasList();
  }

  //
  const checkTareasList=():boolean | Observable<boolean>=>{

    const tareasService:TareaService=inject(TareaService);
    const router:Router=inject(Router);
  //opcion con bool
   /* if(tareasService.isTareasEmpty())
      router.navigate(['tareas','nueva-tarea'])
    return tareasService.isTareasEmpty();*/

  //opcion con observable
  return tareasService.isTareasEmpty().pipe(
    //tap operaciones con la infor que trae el observable sin hacer modificaciones
    tap((isEmpty)=>{
      if(isEmpty)
      router.navigate(['tareas'])
    }),
    map((isEmpty)=>!isEmpty)
  );

  }