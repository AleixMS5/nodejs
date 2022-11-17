(() => {
    "use strict";
    (function (e = "amms@gmail.com") {
        let o = e;
        return {
            email: o, consoleme: function () {
                console.log("Usuari: " + o)
            }
        }
    })("pepe").consoleme()
})();