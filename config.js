var config = {
    style: 'mapbox://styles/paquism/cmd1m6urj008t01quhqx9babt',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicGFxdWlzbSIsImEiOiJjbWQxbGE0cmUweTkxMm5xd2g0Z3pkMmVzIn0.vguuS0dg7f-cDTJWlpVk2Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Infraestructuras de generación de energía en Tenerife',
    subtitle: 'Ubicación de plantas fotovoltaicas y parques eólicos gestionados por el Instituto Tecnológico y de Energías Renovables (ITER).',
    byline: 'By Paqui Sánchez',
    footer: 'Fuente: <a href="https://datos.gob.es/es/catalogo/la0012321-infraestructuras-de-generacion-de-energia-en-tenerife" target="_blank">datos.gob.es</a>  <br> Creado con <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Planta Solten I',
            image: 'https://iili.io/FWHooZb.png',
            description: 'La planta fotovoltaica SOLTEN I, ubicada en el Polígono Industrial de Granadilla en Tenerife, es una plataforma de 13 MW formada por 130 plantas de 100 kW cada una. Estas plantas fueron vendidas a pequeños inversores y el Instituto Tecnológico de Energías Renovables (ITER) actuó como promotor, instalador, gestor y mantenedor. SOLTEN I es parte de una iniciativa más amplia para fomentar la energía solar fotovoltaica y aumentar la producción renovable en Canarias. ',
            location: {
                center: [-16.52524, 28.06986],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Planta Solten II',
            image: 'https://iili.io/FWHoFF2.jpg',
            description: 'La planta fotovoltaica Solten II en Tenerife, gestionada por Solten II Granadilla S.A., es una iniciativa del Instituto Tecnológico de Energías Renovables (ITER) y el Cabildo Insular de Tenerife para promover y explotar plataformas solares fotovoltaicas. La sociedad Solten II Granadilla S.A. se encarga de la gestión, promoción y explotación de estas plantas. La planta fotovoltaica SOLTEN II, con una potencia de 11 MW, forma parte de este proyecto. ITER, además de ser accionista de Solten II Granadilla S.A., actúa como promotor, instalador, gestor y mantenedor de las instalaciones, según el ITER. El objetivo principal es la producción, transporte y distribución de energía eléctrica proveniente de plataformas solares fotovoltaicas. ',
            location: {
                center: [-16.513459, 28.072191],
                zoom: 18,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },     {
            id: 'seven-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque MADE',
            image: 'https://iili.io/FWHoJnf.md.jpg',
            description: 'El parque eólico MADE de Tenerife, también conocido como Parque Eólico Granadilla III, fue instalado en 1996 con 16 aerogeneradores MADE AE-30 de 300 kW cada uno. Posteriormente, en 1999, fue repotenciado con 8 aerogeneradores MADE AE-46 de 600 kW cada uno. Este parque, promovido por el ITER, forma parte de la apuesta de Tenerife por las energías renovables y ha producido desde su instalación un total de 165 GWh. El parque eólico MADE de Tenerife, actualmente, está operado por la Asociación de Interés Económico “EÓLICAS DE TENERIFE”. La iniciativa contó con subvenciones del MINER y la participación de ITER, MADE y UNELCO. En 2007, se solicitó la autorización para repotenciarlo, mediante la sustitución de los aerogeneradores existentes por 4 aerogeneradores ENERCON E-82. El parque eólico MADE, además de generar energía limpia, contribuye a la reducción de emisiones de CO2 y al cumplimiento de los objetivos de sostenibilidad energética de Canarias. ',
            location: {
                center: [-16.513429, 28.06909],
                zoom: 18,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },    {
            id: 'eleven-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Planta Piloto',
            image: 'https://iili.io/FWHnsGR.md.jpg',
            description: 'La Planta fotovoltaica piloto en Tenerife también llamada, proyecto Fotobat 5+5, desarrollado por el ITER (Instituto Tecnológico y de Energías Renovables). Este proyecto busca mejorar la integración de energías renovables en la red eléctrica a través de una instalación híbrida fotovoltaica con almacenamiento. La planta, ubicada en Arico, cuenta con 50 plantas de 100 kW cada una,  5 MW de potencia fotovoltaica y 5 MWh de almacenamiento en baterías, además de un sistema de control avanzado. ',
            location: {
                center: [-16.512063, 28.070243],
                zoom: 18,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },   {
            id: 'ten-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque Areté',
            image: 'https://iili.io/FWHn6ZJ.jpg',
            description: 'El Parque Eólico Areté es desarrollado por el ITER (Instituto Tecnológico y de Energías Renovables). Está formado por cinco aerogeneradores ENERCON modelo E-92 de 2.350 kW de potencia nominal y dos aerogeneradores ENERCON E82 E4 de 3.020 kW de potencia nominal, por lo que la potencia total del parque es de 17.790 kW.',
            location: {
                center: [-16.506128, 28.079662],
                zoom: 18,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },    {
            id: 'five-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque La Roca',
            image: 'https://iili.io/FWHo9ZG.jpg',
            description: 'El Parque Eólico La Roca, desarrollado por el ITER (Instituto Tecnológico y de Energías Renovables), está formado por tres aerogeneradores ENERCON modelo E-92 de 2.350 kW de potencia nominal y cuatro aerogeneradores ENERCON E82 E4 de 3.020 kW de potencia nominal, siendo la potencia total de este parque de 19.130 kW.',
            location: {
                center: [-16.511866, 28.081618],
                zoom: 18,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },     {
            id: 'nine-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque CAT',
            image: 'https://iili.io/FWHn4ja.jpg',
            description: 'El Parque Eólico del Complejo Ambiental de Tenerife, también conocido como Parque Eólico Arico, es una instalación que utiliza la energía eólica para generar electricidad en el complejo de tratamiento de residuos de Arico. Este parque, promovido por el Instituto Tecnológico y de Energías Renovables (ITER), cuenta con aerogeneradores que contribuyen a la producción de energía limpia y a la reducción de emisiones de CO2. ',
            location: {
                center: [-16.482718, 28.121992],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },       {
            id: 'twelve-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Planta Finca Verde',
            image: 'https://iili.io/FWHnbyX.md.jpg',
            description: 'La Planta Fotovoltaica Finca Verde Tenerife es un proyecto de energía renovable ubicado en Tenerife, España. Se trata de una planta solar fotovoltaica que forma parte de una iniciativa más amplia para promover la sostenibilidad y la transición ecológica en las Islas Canarias. La energía generada se utiliza para el autoconsumo de la base donde se ubica, con un sistema de almacenamiento que permite su uso incluso durante la noche.El proyecto busca, mediante placas solares, reducir la dependencia de combustibles fósiles y disminuir las emisiones de carbono.',
            location: {
                center: [-16.486771, 28.155972],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },    {
            id: 'eight-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Planta Finca Roja',
            image: 'https://iili.io/FWHniCv.jpg',
            description: 'Finca Roja, consistente en su primera fase en una planta fotovoltaica de 3.6 MW con conexión a la red eléctrica de media tensión. La planta completa contempla la instalación de dos fases de 5 MW cada una. La planta se encuentra ubicada en la Parcela 204 del Pol. 7 de Arico en el paraje conocido como “Las Esquinas”. Esta instalación es propiedad de un único titular, EVM 1, Energía Verde de la Macaronesia S.L., participada por el ITER. La instalación está compuesta por 36 plantas fotovoltaicas de 100 kW, orientadas a Sur, sobre una estructura de aluminio inclinada 10º. La tecnología utilizada es la misma que en la planta de Finca Verde.',
            location: {
                center: [-16.485455, 28.15565],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },   {
            id: 'six-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Planta Icor',
            image: 'https://iili.io/FWHnpun.md.jpg',
            description: 'Esta promovida por Disa Renovables, S.L.U.. Esta planta, con una capacidad de 8.02 MW, y un sistema de almacenamiento BESS Icor II de 9.585 MW y potencia de 2000 kW.',
            location: {
                center: [-16.442229, 28.194341],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },       
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Planta Metropolitano',
            image: 'https://iili.io/FWHnyjs.jpg',
            description: 'La planta fotovoltaica del Metropolitano de Tenerife, ubicada en las cocheras de El Cardonal, es una instalación de 880 kW de potencia, con una superficie de 4.660 metros cuadrados',
            location: {
                center: [-16.294896, 28.451211],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },     {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Planta Bodega Comarcal',
            image: 'https://iili.io/FWHnSv1.jpg',
            description: 'La Bodega Comarcal de Tenerife, ubicada en Arico, cuenta con una planta solar fotovoltaica de 52,94 kWp y 200 kW, instalada por SunTechnics. Esta instalación, inaugurada en 2008, fue una de las primeras en su tipo en la zona y demuestra el compromiso de la bodega con la energía renovable. ',
            location: {
                center: [-16.384763, 28.481951],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
