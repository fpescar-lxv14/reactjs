const pwaConfig = {
    includeAssets: [
        'favicon.ico', 
        'apple-touch-icon.png', 
        'mask-icon.svg'
    ],
    manifest: {
        name: 'Gestion de Empleados Fundacion y Asociados',
        short_name: 'GEFA',
        description: 'Aplicacion para seleccionar y cargar candidatos para las propuestas laborales',
        theme_color: '#333333',
        icons: [
            {
                src: 'gefa-32x32.png',
                sizes: '32x32',
                type: 'image/png'
            },
            {
                src: 'gefa-96x96.png',
                sizes: '96x96',
                type: 'image/png'
            },
            {
                src: 'gefa-256x256.png',
                sizes: '256x256',
                type: 'image/png'
            }
        ]
    }
}
export default pwaConfig;