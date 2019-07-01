import store from "../../reduxModules/store";

export default class User {
    constructor (elem) {
      if (!elem) return
      this.elem = elem
    }

    render () {
        var result = '';
        store.getState().appEngine.users.forEach(element => {
            result += `<div class="record">
                <h5>${element.id}</h5>
                <p>${element.name}</p>
            </div>`
        });

        if (this.elem) this.elem.innerHTML = result;
    }
}