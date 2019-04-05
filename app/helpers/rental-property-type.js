import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment',
];

// Helpers are the Ember equivelant to Jinja's template tags
export function rentalPropertyType([propertyType]) {
  // The [<arg1>, <arg2>] syntax is equivelant to python's *args. Each argn is an unpacked value in the array. It's called ES2015 destructuring.
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  } else {
    return 'Standalone';
  }
}

export default helper(rentalPropertyType);
