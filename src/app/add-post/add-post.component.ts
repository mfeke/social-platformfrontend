import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { PostService } from '../service/post.service';
import { FormControl, FormGroup } from '@angular/forms';


export interface Post{
  text: string
  image: any

}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})

export class AddPostComponent {
  selectedFile: File| null= null
  image="https://i.postimg.cc/bwKQ3znM/download01.jpg"
  imageUrl: any;
  location!:any;
  constructor(private commonService:CommonService , private postService: PostService){

  }
  postForm: FormGroup = new FormGroup({
    text: new FormControl(''),
    image: new FormControl(''),

  })
  ngOnInit(){
    this.commonService.getLocation().subscribe((response)=>{
      console.log(response);
      this.location = response;
    })

  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = event.target.files[0];
    this.uploadImage(file);
  }
  clear(){
    this.imageUrl = ""
  }
  uploadImage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
  addPost():void{

    const formData: FormData = new FormData();
    formData.append('text', this.postForm.value.text);
  
    // Check if selectedFile is not null before appending
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
  
    console.log('Text:', this.postForm.value.text); // Log text value
    console.log('Selected File:', this.selectedFile); // Log selected file
    console.log('FormData:', formData); // Log FormData object
  
    this.postService.addPost(formData).subscribe({
      next:data=>{
        console.log(data)
      }
    })

  }

  }


