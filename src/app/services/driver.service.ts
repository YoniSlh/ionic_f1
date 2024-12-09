import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private collectionName = 'drivers';

  constructor(private firestore: AngularFirestore) {}

  getDrivers(): Observable<any[]> {
    return this.firestore.collection('drivers').valueChanges();
  }

  getDriverById(id: string): Observable<any> {
    return this.firestore.collection('drivers').doc(id).valueChanges();
  }

  updateDriver(id: string, driver: any): Observable<void> {
    return new Observable((observer) => {
      this.firestore
        .collection('drivers')
        .doc(id)
        .update(driver)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  deleteDriver(id: string): Observable<void> {
    return new Observable((observer) => {
      this.firestore
        .collection('drivers')
        .doc(id)
        .delete()
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getLastDriverId(): Observable<number> {
    return new Observable((observer) => {
      this.firestore
        .collection('drivers', (ref) => ref.orderBy('id', 'desc').limit(1))
        .valueChanges()
        .subscribe({
          next: (data: any[]) => {
            const lastId = data.length > 0 ? data[0].id : 0;
            observer.next(lastId);
            observer.complete();
          },
          error: (error) => {
            observer.error(error);
          },
        });
    });
  }

  createDriver(driver: any): Observable<void> {
    return new Observable((observer) => {
      this.firestore
        .collection('drivers')
        .doc(driver.id.toString())
        .set(driver)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
