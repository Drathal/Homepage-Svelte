#!/bin/bash

# Directory to check
dir="../../.vercel"

# Command to check
cmd="egrep"

# Check if directory exists
if [ -d "$dir" ]; then
    # Check if egrep is available
    if command -v $cmd &> /dev/null; then
        find "$dir" -maxdepth 5 | egrep -v "project.json|README.txt" | xargs rm ; rm -fr "$dir/output/static/*"
        cp -a .vercel/* "$dir"
    else
        echo "$cmd could not be found"
        exit
    fi
else
    echo "$dir does not exist (not a vercel build?)"
    exit
fi
