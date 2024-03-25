import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent   {
  selectedIconColor: string = ''; // Initial color
  listPost:any = []
  constructor( private authService: UserService , private postService: PostService){}
  toggleIconColor() {
    this.selectedIconColor = this.selectedIconColor === 'gray' ? 'red' : 'gray';
  }
  ngOnInit() {
   this.postService.getAllPost().subscribe({
    next:data=>{
      this.listPost = data
      console.log(data)
    }
   })
  }

onVideoSelected(event: any) {
  console.log(event.target.files[0]);
}


  onFileSelected(event: any) {
  // Do something with the selected file
  console.log(event.target.files[0]);
  }

  
}
