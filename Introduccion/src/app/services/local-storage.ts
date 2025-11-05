import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

    setNombre(nombre:string){
      localStorage.setItem("nombre", nombre);
    }
    getNombre(){
      return localStorage.getItem("nombre");
    }

    onHalloween(){
      localStorage.setItem("halloween","on");
    }
    offHalloween(){
      localStorage.setItem("halloween","off");
    }
    isHallowen(){
      if(localStorage.getItem("halloween")==="on"){
          return true;
      }else{
        return false;
      }
      
    }
  
    setItem(key:string, item:string){
      localStorage.setItem(key, item);
    }

    getItem(key:string){
      return localStorage.getItem(key);
    }

    removeItem(key:string){
      localStorage.removeItem(key);
    }

    clear(){
      localStorage.clear();
    }

}
