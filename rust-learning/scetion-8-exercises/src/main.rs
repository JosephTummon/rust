use std::collections::HashMap;

fn median_and_mode(nums: Vec<i32>) -> (f32, i32) {
    // Check if the list is empty
    if nums.is_empty() {
        panic!("The list of numbers is empty!");
    }

    // Median calculation
    let mut sorted_nums = nums.clone();
    sorted_nums.sort(); // Sort the numbers
    let len = sorted_nums.len();
    let median: f32 = if len % 2 == 0 {
        // If even, take the average of the two middle numbers
        (sorted_nums[len / 2 - 1] + sorted_nums[len / 2]) as f32 / 2.0
    } else {
        // If odd, take the middle number
        sorted_nums[len / 2] as f32
    };

    // Mode calculation
    let mut occurrences = HashMap::new();
    for &num in &nums {
        *occurrences.entry(num).or_insert(0) += 1;
    }

    let mode = occurrences
        .into_iter()
        .max_by_key(|&(_, count)| count)
        .map(|(num, _)| num)
        .expect("Cannot compute mode for an empty list");

    (median, mode)
}

fn main() {
    let numbers = vec![3, 1, 2, 3, 4, 5, 3];
    let (median, mode) = median_and_mode(numbers);
    println!("Median: {}", median);
    println!("Mode: {}", mode);
}
