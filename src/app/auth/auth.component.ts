import { Component } from '@angular/core';
import {
  faGoogle,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [``],
})
export class AuthComponent {
  faGoogle = faGoogle;
  faGithub = faGithub;
  faFacebook = faFacebook;
}
