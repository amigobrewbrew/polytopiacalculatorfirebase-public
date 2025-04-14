*** Settings ***
Documentation       Basic tests for Polytopia Calculator

Library             Browser
Resource            common_keywords.resource

Suite Setup         Open Browser To Main Page
Suite Teardown      Close Browser


*** Test Cases ***
Attacker Archer Selection Should Exist
    Wait For Elements State    [data-testid="attacker-archer"]    visible    timeout=${TIMEOUT}

Defender Rider Selection Should Exist
    Wait For Elements State    [data-testid="defender-rider"]    visible    timeout=${TIMEOUT}
