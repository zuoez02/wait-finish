declare module 'wait-finish' {
    const exp: {
        wait:  (event: string, callback: (args: any) => any) => Promise<any>;
        finish: (event: string, result: any) => void;
    }
    export const finish: (event: string, result: any) => void;
    export const wait:  (event: string, callback: (args: any) => any) => Promise<any>;
    export default exp;
}
