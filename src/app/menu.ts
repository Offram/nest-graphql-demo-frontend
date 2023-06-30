import { IMenu } from "./structures/interfaces/interfaces";

export const MAIN_MENU: IMenu[] = [
    {
        routerLink: '/welcome',
        name: 'Welcome',
    },
    {
        routerLink: '/welcome',
        name: 'User Types and RoleGuard',
        children: [
            {
                routerLink: '/welcome/welcome',
                name: 'User Type 1',
            },
            {
                routerLink: '/welcome/welcome',
                name: 'User Type 2',
            },
            {
                routerLink: '/welcome/welcome',
                name: 'User Type 3',
            }
        ]
    },
]
