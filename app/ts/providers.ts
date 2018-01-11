
//tells angular you want to have a concrete type that can be passed around
//export keyword so we can import it to the module.ts file
//string literal will eventually be used as the underlying token varaible

import { OpaqueToken } from '@angular/core';

export const lookupListToken = new OpaqueToken('lookupListToken');

export const lookupLists = {
  mediums: ['Stressors', 'Sleep'],
  timeOfDay: ['Morning', 'Afternoon', 'Night']
};