*** Settings ***
Documentation     Basic tests for Polytopia Calculator
Library           Browser
Suite Setup       Open Browser To Main Page
Suite Teardown    Close Browser

*** Variables ***
${SERVER}         localhost
${PORT}           3000
${BROWSER}        chromium
${VALID URL}      http://${SERVER}:${PORT}/
${TIMEOUT}        10s

*** Test Cases ***
Main Page Should Load
    Get Title    ==    Polytopia Damage Calculator
    Wait For Elements State    h1    visible    timeout=${TIMEOUT}
    Get Text    h1    ==    Polytopia Damage Calculator

Card Element Should Be Visible
    Wait For Elements State    .MuiCard-root    visible    timeout=${TIMEOUT}

Attacker Selection Should Exist
    Wait For Elements State    [data-testid="attacker-selection"]    visible    timeout=${TIMEOUT}

*** Keywords ***
Open Browser To Main Page
    New Browser    browser=${BROWSER}    headless=true
    New Context    viewport={'width': 1920, 'height': 1080}
    New Page    ${VALID URL}
    Wait For Elements State    body    visible    timeout=${TIMEOUT}