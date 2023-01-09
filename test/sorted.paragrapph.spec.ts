import {sortedParagraph} from "../src/sorted.paragraph";

describe('sortedParagraph group', () => {

    it('remove punctuation from the input and sorted by hebrew.', () => {
       let str: string = 'Lorem ipsum, dolor!!! sit amet, consectetur10!!?.. adipiscing elit'
        expect(sortedParagraph(str)).toEqual('adipiscing amet dolor lorem sit ipsum consectetur10 elit')
    })


})