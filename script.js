// const caffè = {
//     tipo: `borbone`,
//     colore : `nero`
// };

// const sale = {
//     tipo: `ingrediente`,
//     colore: `bianco`
// };

// const provoletta = {
//     tipo: `cibo`,
//     colore: `rosa`
// };

// const stitch = {
//     tipo: `alieno`,
//     colore: `azzurro/blu`
// };


const app = new Vue (
    {
        el: `#root`,
        data: {
            Elementi : [
                {
                    item: `caffè`,
                    tipo: `borbone`,
                    todo: true
                },

                {
                    item: `canguro`,
                    tipo: `animale`,
                    todo: false
                },

                {
                    item: `pizza`,
                    tipo: `Cibo`,
                    todo: true
                },

                {
                    item: `Stitch`,
                    tipo: `Alieno`,
                    todo: false
                },
            ]




        }       
    }
)    