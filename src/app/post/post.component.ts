import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  selectedIconColor: string = 'gray'; // Initial color

  // Function to handle icon color toggle
  toggleIconColor() {
    this.selectedIconColor = this.selectedIconColor === 'gray' ? 'red' : 'gray';
  }

}
