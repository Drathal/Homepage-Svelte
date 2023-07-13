#!/bin/bash


# Specify the names of the directories you would like to delete
declare -a dirnames=("node_modules" ".vercel" ".svelte-kit")

# Generate the find command
find_command="find . -type d \( "

for index in "${!dirnames[@]}"; do
    find_command+="-name "${dirnames[$index]}""
    if (( index < ${#dirnames[@]}-1 )); then
        find_command+=" -o "
    fi
done

find_command+=" \) -exec rm -rf {} + 2>/dev/null"  # stderr is redirected to /dev/null

# Convert array to string
dirnames_str=$(printf ", %s" "${dirnames[@]}")
dirnames_str=${dirnames_str:2}  # remove the leading ", "

# ANSI escape sequence for red
red='\033[0;31m'
# No color
NC='\033[0m'

# Print prompt and get user input
echo -e "Clean all directories named ${red}${dirnames_str}${NC}? (yes/no): "
read confirm
confirm=${confirm,,}  # tolower

if [[ "$confirm" =~ ^(yes|y)$ ]]; then
    echo "Starting deletion..."
    eval $find_command
    echo "Deletion process completed."
    echo "Running pnpm prune ..."
    pnpm prune

else
    echo "Operation cancelled."
fi
