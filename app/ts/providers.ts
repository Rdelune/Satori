import { OpaqueToken} from '@angular/core'

export const lookupListToken = new OpaqueToken('lookupListToken')

export const lookupLists = {
    timeOfDay: ['Morning', 'Afternoon', 'Night']
}
