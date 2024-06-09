#!/bin/bash

# .env 파일 로드
set -a
source .env
set +a

# CHROMATIC_TOKEN 확인
if [ -z "$CHROMATIC_TOKEN" ]; then
  echo "Error: CHROMATIC_TOKEN is not set in .env file"
  exit 1
fi

# Chromatic 명령 실행
npx chromatic --project-token=$CHROMATIC_TOKEN --exit-once-uploaded --allow-console-errors