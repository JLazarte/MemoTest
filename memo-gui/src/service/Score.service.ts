
export default class MemoGameService {

    constructor(){}

    

    public saveScore(score: number) {
        const savedJson = window?.localStorage?.getItem?.('MEMO_SCORE');
        const prevValue = savedJson ? JSON.parse(savedJson) : [];

        prevValue.push(score)

        window?.localStorage.setItem('MEMO_SCORE', JSON.stringify(prevValue.sort().slice(0,5)))
    }

    public getScores(): Array<number | string> {
        if (typeof window === 'undefined') return [];
    
        const savedJson = window?.localStorage?.getItem?.('MEMO_SCORE');
        const prevValue = savedJson ? JSON.parse(savedJson).map((val: any) => parseInt(val)) : ['None'];
        
        return prevValue;
    }
}