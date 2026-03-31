#!/bin/bash
cd "$(dirname "$0")"
zip -r ../all-certificates.zip ./*.pdf
