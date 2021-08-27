# https://www.codewars.com/kata/514b92a657cdc65150000006/train/ruby

def solution(number)
    sum = 0

    for num in (0..number - 1).to_a
        if num % 3 == 0 && num % 5 == 0
            sum += num
        elsif num % 5 == 0
            sum += num
        elsif num % 3 == 0
            sum += num
        end
    end

    return sum
end

p solution 20