export interface questionSet {
    question: string,
    options: [{
        value: string
    }],
    rightAnswer: string,
    userAnswer: string
}

export interface aptitudeScore {
    userScore: number,
    totalScore: number,
    percentage: number
}