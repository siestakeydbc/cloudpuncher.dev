#!/usr/bin/env bash
set -e
msg="${1:-chore: quick update}"
git add -A
git commit -m "$msg" || echo "Nothing to commit."
git push origin main
