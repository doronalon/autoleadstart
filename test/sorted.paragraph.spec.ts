import {sortedParagraph} from "../src/sorted.paragraph";

describe('sortedParagraph group', () => {

    it('remove punctuation from the input and sorted by hebrew.', () => {
       let str: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
           'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        expect(sortedParagraph(str)).toEqual('adipiscing aliqua amet do dolor dolore tempor ' +
            'labore Lorem magna sit sed incididunt ipsum ut consectetur et elit eiusmod')
    })

    it('Sorting string with a numbers', () => {
        let str: string = 'Have 2 cats and 10 Dogs'
        expect(sortedParagraph(str)).toEqual('10 2 and Dogs Have cats')
    })

    it('empty string', () => {
        let str: string = ''
        expect(sortedParagraph(str)).toEqual('')
    })

    it('undefined', () => {
        let str: string = undefined
        expect(sortedParagraph(str)).toEqual('Invalid paragraph undefined, paragraph type is: undefined')
    })

})