#!/bin/bash

mkdir -p cypress/reports/mochawesome

for spec in cypress/Integration/examples/*.js
do
  filename=$(basename "$spec" .js)
  echo "Running $filename..."
  npx cypress run --spec "$spec" \
    --reporter cypress-mochawesome-reporter \
    --reporter-options "reportDir=cypress/reports/mochawesome,reportFilename=${filename},overwrite=true,html=true,json=true"
done
