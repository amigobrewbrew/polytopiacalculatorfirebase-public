*** Settings ***
Documentation       Tests for battle calculation functionality

Library             Browser


*** Variables ***
${SERVER}       localhost
${PORT}         3000
${BROWSER}      chromium
${VALID URL}    http://${SERVER}:${PORT}/
${TIMEOUT}      10s


*** Keywords ***
I open the main page
    New Browser    browser=${BROWSER}    headless=true
    New Context    viewport={'width': 1920, 'height': 1080}
    New Page    ${VALID URL}
    Wait For Elements State    body    visible    timeout=${TIMEOUT}

Open Browser To Main Page
    New Browser    browser=${BROWSER}    headless=true
    New Context    viewport={'width': 1920, 'height': 1080}
    New Page    ${VALID URL}
    Wait For Elements State    body    visible    timeout=${TIMEOUT}
