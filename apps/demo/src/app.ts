import { Application } from '@nativescript/core';

import { RevenueCat } from '@mleleux/nativescript-revenuecat';
Application.on(Application.launchEvent, () => {
  // RevenueCat.configure('appl_*'); // ios key
  // RevenueCat.configure('goog_*'); // android key
});

Application.run({ moduleName: 'app-root' });
