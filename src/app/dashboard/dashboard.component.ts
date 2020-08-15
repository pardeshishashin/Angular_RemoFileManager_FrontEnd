import { Component, OnInit, TemplateRef } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { DashboardService } from './dashboard.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RemoService } from '../shared/remo.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    DashboardService
]
})
export class DashboardComponent implements OnInit {
  imagePreview: string;
  saveId: any;

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }

  dropdownEnabled = true;
  items: TreeviewItem[];
  list: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
      hasAllCheckBox: true,
      hasFilter: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
      maxHeight: 400
  });

  buttonClasses = [
      'btn-outline-primary',
      'btn-outline-secondary',
      'btn-outline-success',
      'btn-outline-danger',
      'btn-outline-warning',
      'btn-outline-info',
      'btn-outline-light',
      'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  modalRef: BsModalRef

  constructor(
      private service: DashboardService,
      private modalService: BsModalService,
      private remoService: RemoService
  ) { }
  form: FormGroup;
  itemData: any
  ngOnInit() { 
    this.form = new FormGroup({
        folder: new FormControl('', {
          validators: [Validators.required]
        }),
    });
      this.items = this.service.getFile();
      this.list = this.service.getList(); 
      this.remoService.getShowFolder();
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file
    });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    console.log(file);
    
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  openParent() {
    console.log("okay");
    console.log(this.saveId);
    
    
    this.remoService.getShowFolder();
  }
  onAddFolder() {
  
    this.remoService.addFolder(this.form.value, this.saveId);
    this.modalRef.hide()
    
  }
  openFolder(id) {
    this.saveId = id;
    this.remoService.subFolder(id);
  }
}
