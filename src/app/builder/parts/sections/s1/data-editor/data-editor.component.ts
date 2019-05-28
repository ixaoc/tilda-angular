import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-s1-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.styl']
})
export class S1DataEditorComponent implements OnInit {
  
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
      this.data.background = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  deleteImage(){
    this.data.background = '';
  }
  
}
