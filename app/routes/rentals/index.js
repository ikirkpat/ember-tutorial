import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    // this.store is the equivelant to Django's objects. It's not attached to a single model but contains all models instead.
    // ember injects store into all routes.
    return this.store.findAll('rental');
  }
});
