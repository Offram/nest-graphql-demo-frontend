export const environment = {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    appName: require('../../package.json').name,
    toastError: {
        nzPlacement: 'bottomRight',
        nzDuration: 6000,
        nzPauseOnHover: true,
    },
    toastSuccess: {
        nzPlacement: 'bottomRight',
        nzDuration: 6000,
        nzPauseOnHover: true,
    },
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    version: require('../../package.json').version,
};
