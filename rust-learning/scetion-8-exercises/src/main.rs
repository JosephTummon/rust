// Convert strings to pig latin. The first consonant of each word is moved to the end of the word and ay is added,
//  so first becomes irst-fay. Words that start with a vowel have hay added to the end instead (apple becomes apple-hay).
//  Keep in mind the details about UTF-8 encoding!

fn main() {
    let string = String::from("This will be the string I edit.");
    println!("{}", string);
    to_pig_latin(&string);
    println!("{}", string);
}

fn to_pig_latin(string: &String) -> &String {
    for word in string.chars() {
        println!("{word}");
    }
    &string
}