import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export default class SessionStorageService {

    constructor(){}

    private setCookie(name: string, value:string, days: number) {
        var d = new Date();
        d.setTime(d.getTime() + 24*60*60*1000*days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toUTCString();
    }

    public save(key: string, value: object | string) {
        this.setCookie(key, JSON.stringify(value), 7)
    }

    public remove(key: string) {
        this.setCookie(key, '', -1);
    }
}