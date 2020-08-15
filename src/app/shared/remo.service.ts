import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class RemoService {
    getData: any;
    itemData: any;
    constructor(private http: HttpClient) {}

addFolder(data, id, parent) {
            const folder = {
                folder: data.folder,
                id,
                parent
            }
        
        console.log(folder);
        
      this.http.post('http://localhost:3000/createFolder', folder)
      .subscribe(data =>{
          console.log("Success...");
          
      })
}
getShowFolder() {
    this.http.get<any>('http://localhost:3000/showFolder')
    .subscribe(data =>{
        this.itemData = data;
        console.log(this.itemData);
        
    })
}
getShow(id) {
    this.http.get<any>('http://localhost:3000/show/' +id)
    .subscribe(data =>{
        this.itemData = data;
        console.log(this.itemData);
        
    });
}
subFolder(id) {
    console.log(id);
    
    this.http.get<any>('http://localhost:3000/subFolder/' +id)
    .subscribe(result =>{
        this.itemData = result;
        console.log(result);
        
    })
}
// getFolder(folder) {
//     const data = folder.folder;
//      this.http.get<any>('http://localhost:3000/show/' + data)
//      .subscribe(data => {
//          this.getData = {
//              text: data.folderName,
//              value: 1,
//              children: data.subFolder,
//              files: data.files
//          }
//         console.log( this.getData);

//      })

// }
}