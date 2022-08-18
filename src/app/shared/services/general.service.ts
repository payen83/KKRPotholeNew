import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public url: string;
  private _storage: any;
  private userData: any;
  constructor(private storage: Storage) { 
    this.url = 'http://10.9.206.136/mypotholes/index.php/api';
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async set(key: string, value: any) {
    this._storage?.set(key, value).then(()=>{
      console.log('data saved');
    });
  }

  async get(key: string) {
    let res: any = await this._storage?.get(key);
    console.log('data==>', res);
    if(key == 'USER'){
      this.setUserData(res);
    }
    return await res;
  }

  setUserData(user: any){
     this.userData = user;
  }

  getUserData(){
    return this.userData;
  }

  async clear(){
   return await this._storage?.clear();
  }

  getBaseUrl(){
    return this.url;
  }
}
