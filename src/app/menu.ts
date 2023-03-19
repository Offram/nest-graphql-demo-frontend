import { IMenu } from "./interfaces/interfaces";

export const MAIN_MENU: IMenu[] = [
    {
        routerLink: '/welcome',
        name: 'Welcome',
    },
    {
        routerLink: '/userTypes',
        name: 'User Types and RoleGuard',
        children: [
            {
                routerLink: '/userTypes/userType1',
                name: 'User Type 1',
            },
            {
                routerLink: '/userTypes/userType2',
                name: 'User Type 2',
            },
            {
                routerLink: '/userTypes/userType3',
                name: 'User Type 3',
            }
        ]
    },
    {
        routerLink: '/tree',
        name: 'Trees',
    },
    {
        routerLink: '/renderer2',
        name: 'Renderer2',
    },
    {
        routerLink: '/internet-disconnected',
        name: 'Internet Disconnected',
    },
    {
        routerLink: '/popups',
        name: 'Popups',
    },
    {
        routerLink: '/charts',
        name: 'Charts',
        children: [
            {
                routerLink: '/charts/plotlyjs',
                name: 'PlotlyJs',
            },
            {
                routerLink: '/charts/ng-apexcharts',
                name: 'ApexCharts',
            }
        ]
    },
    {
        routerLink: '/welcome',
        name: 'Data Tables',
    },
    {
        routerLink: '/welcome',
        name: 'Reactive Forms',
    },
    {
        routerLink: '/welcome',
        name: 'View Encapsulation',
    },
    {
        routerLink: '/welcome',
        name: 'PWA/Service Worker',
    }
]