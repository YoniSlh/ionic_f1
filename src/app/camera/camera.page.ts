import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  public photos: picture[] = []; // tableau pour stocker les photos prises
  constructor() {}

  ngOnInit() {}

  async addNewPhoto() {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // format de l'image retournée
      source: CameraSource.Camera, // source de la photo (appareil photo)
      quality: 100, // qualité maximale de la photo
    });

    // ajoute la photo capturée au début du tableau
    this.photos.unshift({
      filepath: '',
      webviewPath: capture.webPath,
    });
  }

  takePhoto() {
    this.addNewPhoto();
  }
}

// interface pour définir la structure d'une photo
export interface picture {
  filepath: string;
  webviewPath: string | undefined;
}
