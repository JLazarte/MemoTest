export default class StorageService {

    constructor(){}

    public save(key: string, value: object | string) {
        window?.localStorage.setItem(key, JSON.stringify(value))
    }


    public remove(key: string) {
        window?.localStorage.removeItem(key)
    }

    public get(key: string): object | string | null {
        if (typeof window == 'undefined') return null;

        const item = window?.localStorage?.getItem?.(key);

        if (item) {
            try {
                return JSON.parse(item);

            } catch {
                return null;
            }
        }

        return item;
    }
}