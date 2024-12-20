import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  public photos: picture[] = [];
  constructor() { }

  ngOnInit() {
  }

  async addNewPhoto() {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: '',
      webviewPath: capture.webPath
    }); 
  }

  takePhoto(){
    this.addNewPhoto();
  }
}

export interface picture {
  filepath: string;
  webviewPath: string | undefined;
}
