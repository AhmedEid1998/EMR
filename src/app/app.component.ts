import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EMR';
}

// src/
// └── app/
//     ├── emr/
//     │   ├── emr.module.ts
//     │   ├── emr-routing.module.ts
//     │   ├── components/
//     │   │   ├── top-tabs/
//     │   │   │   ├── top-tabs.component.ts
//     │   │   │   ├── top-tabs.component.html
//     │   │   │   └── top-tabs.component.scss
//     │   │   ├── patients-panel/
//     │   │   │   ├── patients-panel.component.ts
//     │   │   │   └── patients-panel.component.html
//     │   │   └── patient-tab/
//     │   │       ├── patient-tab.component.ts
//     │   │       ├── patient-tab.component.html
//     │   │       └── patient-tab.component.scss
//     │   └── pages/
//     │       ├── dashboard/
//     │       │   └── dashboard.component.ts
//     │       └── patients/
//     │           └── patients.component.ts
//     └── shared/
//         ├── components/
//         │   ├── patient-profile/
//         │   └── timeline/
//         └── models/
//             └── patient.model.ts









// emr/
// ├── emr.module.ts
// ├── emr-routing.module.ts
// ├── layout/
// │   ├── top-tabs/
// │   │   └── top-tabs.component.ts / .html / .scss
// │   └── emr-layout.component.ts / .html / .scss
// ├── pages/
// │   ├── patient-list/
// │   │   └── patients.component.ts / .html / .scss
// │   └── patient-details/
// │       ├── patient-details.component.ts / .html / .scss
// │       ├── patient-profile/
// │       │   └── patient-profile.component.ts / .html / .scss
// │       └── patient-timeline/
// │           └── patient-timeline.component.ts / .html / .scss
// ├── models/
// │   └── patient.model.ts
// ├── services/
// │   └── tab.service.ts





// src/
// └── app/
//     ├── core/                       # Core services, guards, interceptors
//     │   ├── auth/
//     │   │   ├── auth.service.ts
//     │   │   ├── auth.guard.ts
//     │   │   ├── auth.routes.ts
//     │   ├── services/
//     │   │   ├── notification.service.ts
//     │   ├── interceptors/
//     │   │   ├── api.interceptor.ts
//     ├── features/                   # Feature-specific modules (e.g., product, cart)
//     │   ├── product/
//     │   │   ├── pages/           # Routed components
//     │   │   │   ├── product-list/
//     │   │   │   │   ├── product-list.component.ts
//     │   │   │   ├── product-detail/
//     │   │   ├── components/      # Feature-specific reusable components
//     │   │   │   ├── product-card.component.ts
//     │   │   ├── services/
//     │   │   │   ├── product.service.ts
//     │   │   ├── product.routes.ts
//     ├── shared/                     # Reusable "dumb" components, pipes, utilities
//     │   ├── components/
//     │   │   ├── notification.component.ts
//     │   ├── pipes/
//     │   │   ├── date.pipe.ts
//     │   ├── utils/
//     │   │   ├── array.utils.ts
//     ├── layout/                     # Layout components (e.g., header, footer)
//     │   ├── layout.component.ts
//     ├── app.component.ts            # Root component
//     ├── app.routes.ts              # Root routing configuration
//     ├── app.config.ts              # Application-wide providers