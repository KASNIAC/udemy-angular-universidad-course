import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// Tenemos que especificarle a este módulo que vamos a hacer uso del módulo HttpClientModule, para eso lo importamos en el appConfig:
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(),
    ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));
