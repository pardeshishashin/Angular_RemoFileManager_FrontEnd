import { TreeviewItem } from 'ngx-treeview';
import {Injectable } from '@angular/core';

export class DashboardService {
    constructor() {

    }
    getFile(): TreeviewItem[] {
         const files = new TreeviewItem({
                     text: 'Files', 
                     value: 1,
                     children: [
                         {
                             text:'State', 
                             value:3,
                             children: [
                                 {
                                     text:"MH",
                                 value:2,
                                 children: [
                                     {text: "Jalgaon", value:1,checked: false},
                                     {text: "Pune", value:1,checked: false}
                                 ]
                                },
                                 {
                                    text:"MP",
                                    value:2,
                                    children: [
                                        {text: "Bhopal", value:1,checked: false},
                                        {text: "Agra", value:1,checked: false}
                                    ]
                                },
                                 {
                                     text:"UP",
                                     value:2,
                                     children: [
                                        {text: "Kanpur", value:1,checked: false},
                                        {text: "kashi", value:1,checked: false}
                                    ]
                                    }
                             ]
                        }
                     ],
                     checked: false
             });
       
        return [files];
    }
    getList(): TreeviewItem[] {
        const files = new TreeviewItem({
            text:"para",
            value: 1,
            children:[]
        });
        return [files];
    }
//     getList(): TreeviewItem[] {
//         const files = new TreeviewItem(this.remoService.getData);
      
//        return [files];
//    }
}