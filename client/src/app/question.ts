export interface questionSet {
    question: string,
    options: [{
        value: string,
        isAnswer: Boolean
    }],
    rightAnswer: string,
    userAnswer: string
}