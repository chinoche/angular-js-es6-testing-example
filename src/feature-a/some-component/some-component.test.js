import { assert } from 'chai';

import SomeComponent from './some-component';

let component;

describe('SomeComponent', function() {

    beforeEach(function() {
        component = new SomeComponent();
    });

    it('should start with default counter value = 0', function () {
        assert.equal(component.counter, 0);
    });

    it('should accept initial counter value as dependency', function () {
        component = new SomeComponent(100);
        assert.equal(component.counter, 100);
    });

    it('should increment counter value after increment is called', function () {
        assert.equal(component.counter, 0);
        component.increment();
        assert.equal(component.counter, 1);
    });

});
