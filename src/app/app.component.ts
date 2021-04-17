import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // name of the element
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Wayne. Welcome';

  users = [
    {
      name: 'Wayne',
      age: '10'
    },
    {
      name: 'Mike',
      age: '15'
    },
    {
      name: 'Jane',
      age: '12'
    }
  ];

  imgs = [
    {
      name: 'Bali, Indonesia',
      imgURL: 'https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
    },
    {
      name: 'Costa Rica',
      imgURL: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
  ];
}
