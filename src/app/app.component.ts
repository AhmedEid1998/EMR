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