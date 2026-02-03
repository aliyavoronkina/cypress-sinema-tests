@echo off
cd /d "C:\Users\atleu\OneDrive\Desktop\cypress-sinema-tests"
npx cypress run --spec "cypress/e2e/test.cy.js" --browser electron --no-exit
pause
