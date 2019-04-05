import Component from '@ember/component';

// Components are sort of like Jinja's template tags with code behinds.
export default Component.extend({
    isWide: false,
    actions: {
        toggleImageSize() {
            this.toggleProperty('isWide');
        }
    }
});
