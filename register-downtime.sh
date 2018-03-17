#!/bin/bash

# Exit on error.
set -e

# Make sure the code is up to date with the origin, preferring any local
# changes we have made. Rebase to preserve a simpler history.
git pull --rebase -s recursive -X ours origin master

node register-downtime.js

# Commit the change made.
git commit -am 'registered downtime'

# Push the changes to the origin.
git push -u origin master
