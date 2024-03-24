function studentGrades(marks){
    //evaluates scores that have been input and assigns a grade 
    if (marks > 79){
        return "A"
    } else if (marks >= 60, marks <= 79){
        return "B"
    } else if (marks >= 49 , marks <= 59) {
        return "C"
    } else if (marks >= 40 , marks < 49) {
        return "D"
    } else if (marks < 40 ) {
        return "E"
    }
}
//input value and appropriate grade is assigned to the marks
console.log(studentGrades(45))
