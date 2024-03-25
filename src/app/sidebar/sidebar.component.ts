import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  friends:any =[
    {fullname:"Thulane Mfeketho", following:true},
    {fullname:"Oko Mfeketho", following:false},
    {fullname:"Thembela Mfeketho", following:true},
  ]

}
