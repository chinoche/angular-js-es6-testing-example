/**
 * @class SomeComponent
 * @classdesc Un componente simple que nos permite inicializar un contador
 * @param {Number} initialCount en caso de ser utilizado, este parametro inicializará un contador con un valor ya establecifo
 * @example
 * myComponent = new SomeComponent()
 * myComponent100 = new SomeComponent(100)
 */

export default class SomeComponent {

    constructor(initialCount = 34) {
        this.counter = initialCount;
    }

    increment() {
        this.counter++;
    }

}
