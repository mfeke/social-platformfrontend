import { Component, Input } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrl: './all-post.component.css'
})
export class AllPostComponent {

  @Input()
  public isNotReplay: boolean | false = false;
  showFullText = false;

   myData = [
    { id: 1, user: "Jane", tokens: 2, used: 1 },
    { id: 2, user: "Emma", tokens: 1, used: 1 },
    { id: 3, user: "Sally", tokens: 2, used: 3 },
  ];

  listPost: Object | undefined;

  constructor(private postService: PostService){}

  ngOnInit() {
    this.postService.getAllPost().subscribe({
     next:data=>{
       this.listPost = data
       console.log(data)
     }
    })
  }


  toggleFullText() {
    this.showFullText = !this.showFullText;
    console.log(this.showFullText)
  }
}
