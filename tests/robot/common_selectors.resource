*** Variables ***
# Stable columns for attackers/defenders on the battleground
${attackers_battleground_selector}              xpath=(//div[contains(@class,'dnd-column')])[1]
${defenders_battleground_selector}              xpath=(//div[contains(@class,'dnd-column')])[2]

# Pagination/selectors area (kept as-is; adjust if UI changes)
${attackers_selection_go_next_selector}         div.containers > div > div.MuiBox-root.css-kx72jn > div:nth-child(1) > span > div.MuiBox-root.css-gg4vpm > button:nth-child(3)
${attackers_selection_go_previous_selector}     div.containers > div > div.MuiBox-root.css-kx72jn > div:nth-child(1) > span > div.MuiBox-root.css-gg4vpm > button:nth-child(1)
${attackers_selection_selector}                 div.containers > div > div.MuiBox-root.css-kx72jn > div:nth-child(1)
${defenders_selection_selector}                 div.containers > div > div.MuiBox-root.css-kx72jn > div:nth-child(2)

# Unit card shortcuts within attackers column
${first_attacker_card}                          xpath=(//div[contains(@class,'dnd-column')])[1]//div[contains(@class,'dnd-card')][1]
${second_attacker_card}                         xpath=(//div[contains(@class,'dnd-column')])[1]//div[contains(@class,'dnd-card')][2]

# Delete button for first attacker (legacy selector retained for passing test)
${remove_first_attacker_selector}               div.containers > div > div.MuiBox-root.css-top6dd > div:nth-child(1) > div:nth-child(1) > div > div > button

# Splash button within attackers column (first visible 'splsh' button)
${any_attacker_splsh_button}                    xpath=(//div[contains(@class,'dnd-column')])[1]//button[normalize-space()='splsh' or .//b[normalize-space()='splsh']][1]
${second_attacker_xpld_button}                  xpath=(//div[contains(@class,'dnd-column')])[1]//div[contains(@class,'dnd-card')][2]//button[normalize-space()='xpld' or .//b[normalize-space()='xpld']]
