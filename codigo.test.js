const { soma, dobro, dobroDaSoma } = require('./codigo')

describe('Funções matemáticas', () => {
    it('Soma de dois valores', () => {
        expect(soma(2, 5)).toBe(7)
        expect(soma(2, 4)).toBe(6)
        expect(soma(61, 4)).toBe(65)
    });

    it('Somar o dobro do valor', () => {
        expect(dobro(4)).toBe(8)
    });

    it('Somar o dobro do valor', () => {
        expect(dobroDaSoma(4, 2)).toBe(12)
    });
});