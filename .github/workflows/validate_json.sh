#!/bin/bash
cat js/user_sites.js | jq .
if [ $? -ne 0 ]; then
  echo "Invalid JSON format"
  exit 1
fi