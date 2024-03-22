import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedIconColor: string = ''; // Initial color

  // Function to handle icon color toggle
  toggleIconColor() {
    this.selectedIconColor = this.selectedIconColor === 'gray' ? 'red' : 'gray';
  }

onVideoSelected(event: any) {
  console.log(event.target.files[0]);
}


  onFileSelected(event: any) {
    // Do something with the selected file
    console.log(event.target.files[0]);
  }
  
}
