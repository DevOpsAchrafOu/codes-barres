import { Component } from '@angular/core';
import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-bar-code',
  templateUrl: './bar-code.page.html',
  styleUrls: ['./bar-code.page.scss'],
})
export class BarCodePage {

  /*
  1_Installation (before import):
    npm install
  2_Installation (for capacitor): 
    npm install phonegap-plugin-barcodescanner
    npm install @ionic-native/barcode-scanner
  
  3_build by capacitor:
    ionic build
    ionic capacitor add  android
    ionic capacitor copy  android
    cd .\android\
    .\gradlew assembleDebug
  */
  options: BarcodeScannerOptions;
  data: any;
  constructor(private barcodeScanner: BarcodeScanner) {}

  scanBarCode() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      //this.isTypeBarCode = barcodeData.format === "CODE_128"? true : false;//pour formt
      this.data = barcodeData;//valuer
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
