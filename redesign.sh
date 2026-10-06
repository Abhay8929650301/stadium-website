#!/usr/bin/env bash
# Runs Claude Code on the redesign brief in REDESIGN_PROMPT.md.
# Usage: ./redesign.sh            (interactive session, you can watch and steer)
#        ./redesign.sh --headless (non-interactive, prints a summary when done)
set -euo pipefail
cd "$(dirname "$0")"

if ! command -v claude >/dev/null 2>&1; then
  echo "Claude Code CLI not found. Install: npm install -g @anthropic-ai/claude-code" >&2
  exit 1
fi

git checkout -b redesign 2>/dev/null || git checkout redesign
[ -d node_modules ] || npm install

PROMPT="Follow the brief in REDESIGN_PROMPT.md exactly to redesign this website. Work through every section, then lint, build, and verify."

if [ "${1:-}" = "--headless" ]; then
  claude -p "$PROMPT" --permission-mode acceptEdits \
    --allowedTools "Read,Write,Edit,Bash(npm run *),Bash(npm install),Bash(git status),Bash(git diff *),Bash(rm src/assets/*)"
else
  claude "$PROMPT"
fi
