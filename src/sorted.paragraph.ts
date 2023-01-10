// const alphabet: string[] = "0.123456789abcdefghijklmnopqrstuvwxyz".split("");
const hebrew: string [] = "0123456789ABGDHVZJTYKLMNSIPXQRWUCEFO_".toLocaleLowerCase().split("")

const compare = (a: string, b: string, order: string[] = hebrew): number => {

    let index: number = 0
    let aLower: string = a.toLocaleLowerCase()
    let bLower: string = b.toLocaleLowerCase()
    while (aLower.slice(index, index + 1) || bLower.slice(index, index + 1)) {
        if (order.indexOf(aLower.slice(index, index + 1)) === order.indexOf(bLower.slice(index, index + 1))) {
            ++index
        } else {
            // > 0 => sort a after b
            // < 0 => sort a before b
            return order.indexOf(aLower.slice(index, index + 1)) - order.indexOf(bLower.slice(index, index + 1))
        }
    }
    return 0 //keep original order of a and b
}

export const sortedParagraph = (paragraph: string): string => {
    try {
        if (typeof paragraph === "string") {
            return paragraph.trim() //removes whitespace from both ends of a string
                //remove the punctuation from the input => replace any character that is not a word character or a space character with nothing.
                // word character is a character a-z, A-Z, 0-9, including _ (underscore)
                .replace(/[^\w\s]/g, "")
                .split(/\s+/)
                .sort((a, b) => compare(a, b))
                .join(" ")
        } else {
            return `Invalid paragraph ${paragraph}, paragraph type is: ${typeof paragraph}`
        }
    } catch (e) {
        return e.message
    }


}


// console.info(sortedParagraph('Lorem ipsum, dolor!!! sit amet, consectetur10!!?.. adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna gg aliqua'))


