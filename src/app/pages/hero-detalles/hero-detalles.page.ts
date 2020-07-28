import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/hero.interface';
import { ActivatedRoute } from '@angular/router';
import { HerosServiceService } from '../../services/heros-service.service';
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { stringify } from 'querystring';
import { concat } from 'rxjs';


@Component({
  selector: 'app-hero-detalles',
  templateUrl: './hero-detalles.page.html',
  styleUrls: ['./hero-detalles.page.scss'],
})
export class HeroDetallesPage implements OnInit {

  heroe: Heroe={
    nombre: '',
    alterego: '',
    edad: 0,
    clase: '',
    vivomuerto: ''
  };

  heroeId: null;

  constructor(private route:ActivatedRoute, private heroeservicio: HerosServiceService, 
    private nav: NavController, private toastic: ToastController, private alertist: AlertController) { }

  ngOnInit() {
    this.heroeId= this.route.snapshot.params['id'];
    if(this.heroeId){
      this.loadhero();
    }
  }

  loadhero(){
    this.heroeservicio.getHero(this.heroeId).subscribe(res => {
      console.log(res);
      this.heroe = res;
    });
  }

  async guardarHeroe(){
    if(this.heroeId){
      const toast = await this.toastic.create({
        message: 'Archivo heroico modificado',
        position: 'bottom',
        duration: 1500
      });
      const alert = await this.alertist.create({
        header: '¿Desea modificar el archivo?',
        message: 'Presione cancelar si desea revisar nuevamente los datos',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secundary',
            handler:(blah)=>{
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Modificar',
            cssClass: 'warning',
            handler: ()=>{
              this.heroeservicio.updateHero(this.heroe,this.heroeId).then(()=>{
                toast.present();
                this.nav.navigateForward('/');
              });
            }
          }
        ]
      });
      await alert.present();
    }else{
      const toast = await this.toastic.create({
        message: 'Heroe archivado',
        position: 'bottom',
        duration: 1500
      });
      this.heroeservicio.addHero(this.heroe).then(()=>{
        toast.present();
        this.nav.navigateForward('/');
      });
    }
  }

  async remove(idHeroe:string){
    const toast = await this.toastic.create({
      message: 'Archivo heroico eliminado',
      position: 'bottom',
      duration: 1500
    });
    const alert = await this.alertist.create({
      header: '¿Está seguro de eliminar?',
      message: this.heroe.nombre,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secundary',
          handler:(blah)=>{
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          cssClass: 'danger',
          handler: ()=>{
            this.heroeservicio.deleteHero(this.heroeId);
            toast.present();
            this.nav.navigateForward('/');
          }
        }
      ]
    });
    await alert.present();
  }

}
