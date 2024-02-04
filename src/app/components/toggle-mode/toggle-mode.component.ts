import { Component } from '@angular/core';
import { ModeService } from '../../services/mode.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@Component({
  selector: 'app-toggle-mode',
  standalone: true,
  imports: [FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './toggle-mode.component.html',
  styleUrl: './toggle-mode.component.css'
})
export class ToggleModeComponent {

  toggled: boolean = false;

  constructor(private darkModeService: ModeService) {};

  toggleDarkMode() {
    this.darkModeService.toggleMode();
    this.toggled = this.darkModeService.darkMode;
  };

};