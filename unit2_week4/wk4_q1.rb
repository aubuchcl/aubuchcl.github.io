# Pseudo
# def acc_group
# def local var to see if array size is divisible by 4
# shuffle the array with the shuffle method
# run a quick times loop to notify extra members of their need to join another group
# slice the array into chuncks of 4

# Pseudo Refined
# Define Array#acc_group that will take one arguement
# Name said arguement array
# set the value of array.length % 4 to a local variable(x)
# shuffle the array and set the value of the array to said shuffled version
# run a times loop x times and push a message to extra participants
# call the each_slice method on array 
# have each_slice split by 4's
# tell the block that it should print the groups

# Initial Solution
# def acc_group(array)
# 	x = array.length % 4
# 	array = array.shuffle
# 	x.times do 
# 		array.push("plz join another group")
# 	end
# 	array = array.each_slice(4) {|group| p group}
# end

# Refactored
def acc_group(array)
	x = array.length % 4
	x.times{array.push("Join another group")}
	array.shuffle.each_slice(4){|group| p group}
end


grewps = ["Adam Dziuk",
"Adam Ryssdal",
"Aki Suzuki",
"Allison Wong",
"Andra Lally",
"Andrew Mcdonald",
"Anup Pradhan",
"Christopher Aubuchon",
"Clark Hinchcliff",
"Devin A Johnson",
"Dominick Oddo",
"Dong Kevin Kang",
"Eiko Seino",
"Eric Wehrli",
"Hunter Chapman",
"Jacob Persing",
"Jon Pabico",
"Mary Huerster",
"Parjam Davoody", "Sebastian Belmar", "Shawn Seibert", "William Butler",
"Yuzu Saijo", 
"Christiane Kammerl"]
puts acc_group(grewps)