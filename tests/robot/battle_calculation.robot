*** Settings ***
Documentation     Tests for battle calculation functionality
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
Should Calculate Damage Between Units
    Wait For Elements State    [data-testid="attacker-selection"]    visible    timeout=${TIMEOUT}
    Click    [data-testid="attacker-warrior"]
    Wait For Elements State    [data-testid="defender-selection"]    visible    timeout=${TIMEOUT}
    Click    [data-testid="defender-warrior"]
    # Wait For Elements State    [data-testid="calculate-button"]    visible    timeout=${TIMEOUT}
    # Click    [data-testid="calculate-button"]
    Wait For Elements State    [data-testid="damage-result"]    visible    timeout=${TIMEOUT}
    Get Element Count    [data-testid="damage-result"]    >=    1

*** Keywords ***
Open Browser To Main Page
    New Browser    browser=${BROWSER}    headless=true
    New Context    viewport={'width': 1920, 'height': 1080}
    New Page    ${VALID URL}
    Wait For Elements State    body    visible    timeout=${TIMEOUT}