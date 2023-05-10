declare module 'wait-for' {
    const wait: (event: string, callback: (args: any) => any) => Promise<any>;
    const finish: (event: string, result: any) => void;
    export default { wait, finish };
}
