
export const menuItems = [
    {
        title: 'SKU Scan',
        routerLink: 'loading/skuscan',
    },
    {
        title: 'Loading View',
        routerLink: 'loading/loadingview',

    },
    {
        title: 'Logs',
        routerLink: 'logs',

        subMenu: [
            {
                title: 'Pallet or Box Log',
                routerLink: 'loading/palletorboxlog',
            },
            {
                title: 'Vision Log',
                routerLink: 'visionlog',
            },
            {
                title: 'Machine Log',
                routerLink: 'machinelog',
            },
        ]
    },
    {
        title: 'Big Screen',
        routerLink: 'vision/bigscreen',
    },
    {
        title: 'Palletizing View',
        routerLink: 'pallet/palletconfiramation',
    },
    // {
    //     title: 'PalletConfirmation',
    //     routerLink: 'pallet/palletconfirmation',
    // },


]