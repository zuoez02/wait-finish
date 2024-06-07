declare module 'wait-finish' {
    const exp: {
        wait:  (event: string, callback: (args: any) => any) => Promise<any>;
        finish: (event: string, result: any) => void;
    }
    export default exp;
}
