import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Heroe } from '../interfaces/hero.interface';


@Injectable({
  providedIn: 'root'
})
export class HerosServiceService {
  private heroesCollection: AngularFirestoreCollection<Heroe>;
  private heros: Observable<Heroe[]>;
  constructor(db: AngularFirestore) { 
    this.heroesCollection=db.collection<Heroe>('heros');
    this.heros =  this.heroesCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map (a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      }
    ));
  }

  getAllHeros(){
    return this.heros;
  }

  getHero(id:string){
    return this.heroesCollection.doc<Heroe>(id).valueChanges();
  }

  async deleteHero(id:string){
    return this.heroesCollection.doc(id).delete();
  }

  updateHero(heroe: Heroe, id:string){
    return this.heroesCollection.doc(id).update(heroe);
  }

  addHero(hero: Heroe){
    return this.heroesCollection.add(hero);
  }

}

