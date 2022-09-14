const caffè = {
    tipo: `borbone`,
    colore : `nero`
};

const sale = {
    tipo: `ingrediente`,
    colore: `bianco`
};

const provoletta = {
    tipo: `cibo`,
    colore: `rosa`
};

const stitch = {
    tipo: `alieno`,
    colore: `azzurro/blu`
};


const app = new Vue (
    {
        el: `#root`,
        data: {
            Elementi : [
                `caffe`,
                `sale`,
                `provoletta`,
                `stitch`
            ]
        }
    }
)