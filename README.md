# Unexpected Token Error in JSON Response from Express.js

This repository demonstrates a common error in Express.js applications where an unexpected token error occurs when sending a JSON response without properly setting the `Content-Type` header.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem
The issue arises when an Express.js route attempts to send JSON data to the client without explicitly setting the `Content-Type` header to `application/json`. This can lead to the client interpreting the JSON data as plain text, resulting in parsing errors and an "Unexpected token" error message.

## Solution
Setting the `Content-Type` header using `res.setHeader('Content-Type', 'application/json')` ensures that the client correctly interprets the response as JSON, resolving the error.