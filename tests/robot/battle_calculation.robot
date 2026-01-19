*** Settings ***
Documentation       Tests for battle calculation functionality

Library             Browser
Resource            common_keywords.resource
Resource            common_selectors.resource

Suite Setup         Open Browser To Main Page
Suite Teardown      Close Browser
Test Teardown       Run Keyword If Test Failed    Take Screenshot


*** Variables ***
# Add any missing variables here if they're not in common_selectors.resource


*** Test Cases ***
Should Display Attackers Selection
    Given I open the main page
    When I add a "warrior" attacker
    Then The attackers selection should be visible

Should Display Defenders Selection
    Given I open the main page
    When I add a "warrior" defender
    Then The defenders selection should be visible

Should Calculate Damage Between Units
    Given I open the main page
    When I add a "warrior" attacker
    When I add a "warrior" defender
    Then The first defender health should be 5

Should Calculate Damage Between Multiple Units
    Given I open the main page
    When I add a "warrior" attacker
    When I add a "archer" attacker
    When I add a "warrior" defender
    Then The first defender health should be -1

Should Calculate Damage Between Multiple Units With Poison
    Given I open the main page
    When I go to the next attackers selection page
    When I go to the next attackers selection page
    When I go to the next attackers selection page
    When I add a "phychi" attacker
    When I add a "phychi" attacker
    When I go to the previous attackers selection page
    When I go to the previous attackers selection page
    When I go to the previous attackers selection page
    When I add a "warrior" attacker
    When I add a "giant" defender
    Then The first defender health should be 34

Should Calculate Damage Between Units With No Full Health
    Given I open the main page
    When I add a "warrior" attacker
    When I add a "warrior" defender
    When I change the health of the first attacker to 7
    When I change the health of the first defender to 6
    Then The first attacker health should be 3
    Then The first defender health should be 1

Should Calculate Damage Between Units When Changing Order
    Given I open the main page
    When I add a "warrior" attacker
    When I add a "catapult" attacker
    When I add a "giant" defender
    When I check the change order checkbox
    I change first two attackers position
    Then The first defender health should be 27

Should Calculate Damage Between Units When Removing Units
    Given I open the main page
    When I add a "warrior" attacker
    When I add a "swordsman" attacker
    When I add a "giant" defender
    When I remove the first attacker
    Then The first defender health should be 34

Should Calculate Damage With Splash To Halves
    Given I open the main page
    When I add a "defender" attacker
    When I go to the next attackers selection page
    When I add a "bomber" attacker
    When I add a "knight" defender
    When I toggle splsh second attacker
    Then The first defender health should be 2.5

Should Calculate Damage With Correct Rounding
    Given I open the main page
    When I add a "swordsman" defender
    When I toggle veteran bonus for first defender
    When I change the health of the first defender to 16
    When I go to the next attackers selection page
    When I go to the next attackers selection page
    When I go to the next attackers selection page
    When I add a "hexapod" attacker
    Then The first defender health should be 8

Should Calculate Damage With DEF And POIS In Version 115
    Given I open the main page
    When I set game version to "115"
    When I add a "warrior" attacker
    When I add a "warrior" defender
    When I toggle defence bonus for first defender
    Then The first defender health should be 6
    When I toggle poison for first defender
    Then The first defender health should be 5
    When I toggle defence bonus for first defender
    Then The first defender health should be 4

Should Calculate Damage With DEF And POIS In Version 108
    Given I open the main page
    When I set game version to "108"
    When I add a "warrior" attacker
    When I add a "warrior" defender
    When I toggle defence bonus for first defender
    Then The first defender health should be 6
    When I toggle poison for first defender
    Then The first defender health should be 5
    When I toggle defence bonus for first defender
    Then The first defender health should be 6

*** Keywords ***
I add a "${unit_type}" attacker
    Click    [data-testid="attacker-${unit_type}"]

The attackers selection should be visible
    Wait For Elements State    ${attackers_battleground_selector}    visible

I add a "${unit_type}" defender
    Click    [data-testid="defender-${unit_type}"]

The defenders selection should be visible
    Wait For Elements State    ${defenders_battleground_selector}    visible

The first defender health should be ${expected}
    ${actual_damage}=    Get Text    [data-testid="defenders-0-health-after"]
    Should Be Equal As Numbers    ${actual_damage}    ${expected}

The first attacker health should be ${expected}
    ${actual_damage}=    Get Text    [data-testid="attackers-0-health-after"]
    Should Be Equal As Numbers    ${actual_damage}    ${expected}

I go to the next attackers selection page
    Click    ${attackers_selection_go_next_selector}
    Wait For Elements State    ${attackers_selection_selector}    visible

I go to the previous attackers selection page
    Click    ${attackers_selection_go_previous_selector}
    Wait For Elements State    ${attackers_selection_selector}    visible

I change the health of the first attacker to ${health}
    Fill Text    [id="Attackers0HitpointField"]    ${health}
    Press Keys    [id="Attackers0HitpointField"]    Enter

I change the health of the first defender to ${health}
    Fill Text    [id="Defenders0HitpointField"]    ${health}
    Press Keys    [id="Defenders0HitpointField"]    Enter

I check the change order checkbox
    Click    ${change_order_checkbox_selector}
    Wait For Elements State    ${attackers_selection_selector}    visible

I change first two attackers position
    Click    ${first_attacker_health_or_move_down}
    Wait For Elements State    ${attackers_battleground_selector}    visible

I remove the first attacker
    Click    ${remove_first_attacker_selector}
    Wait For Elements State    ${attackers_battleground_selector}    visible

I toggle splsh second attacker
    Click    ${second_attacker_splsh}
    Wait For Elements State    ${attackers_battleground_selector}    visible

I set game version to "${version}"
    Click    [id="version-select"]
    Click    [data-value="${version}"]
    Wait For Elements State    ${defenders_selection_selector}    visible

I toggle defence bonus for first defender
    Click    ${first_defender_def_button}
    Wait For Elements State    ${defenders_battleground_selector}    visible

I toggle poison for first defender
    Click    ${first_defender_pois_button}
    Wait For Elements State    ${defenders_battleground_selector}    visible

I toggle veteran bonus for first defender
    Click    ${first_defender_vet_button}
    Wait For Elements State    ${defenders_battleground_selector}    visible