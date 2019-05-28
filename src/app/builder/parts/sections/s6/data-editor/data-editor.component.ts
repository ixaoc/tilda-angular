import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-s6-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.styl']
})
export class S6DataEditorComponent implements OnInit {
  
  @Input() data: any;

  constructor() { }

  ngOnInit() {
   
  }
  
  fileChanged(event) {
    
    let
      file = event.target.files[0],
      reader = new FileReader()
    ;
  
    reader.addEventListener("load", () => {
      this.data.image = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  deleteImage(){
    this.data.image = '';
  }
  
}
