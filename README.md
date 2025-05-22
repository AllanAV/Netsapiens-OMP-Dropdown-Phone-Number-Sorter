# Netsapiens Office Manager's Portal Dropdown Phone Number Sorter


When applied this script will sort the phone numbers in ascending order on Ofice Manager's Portal dropdown boxes like: User - Caller ID, Emergency Caller ID, Call Queue - Phone Number, Conference Bridge - Direct Phone Number, Domain - DomainCallidNmbr


# Netsapiens Office Manager - Dropdown Phone Number Sorter

This JavaScript utility automatically sorts phone numbers in ascending order within various dropdown fields on the Netsapiens OMP. It ensures a more organized and user-friendly experience for administrators managing Caller IDs and phone number selections.

## Features

- Automatically sorts phone number dropdowns in ascendingorder, enhancing clarity and accessibility of phone number fields.
- Integrates with the Netsapiens Office Manager Portal via UI Config `PORTAL_EXTRA_JS`.

## Targeted Dropdown Fields

The script targets and sorts the following dropdown elements:

- **User - Caller ID** (`#UserCallidNmbr`)
- **User - Emergency Caller ID** (`#UserCallidEmgr`)
  ![Manager Portal - Users](https://github.com/user-attachments/assets/c059b904-163c-4dce-8ebd-b99664e15347)
- **Call Queue - Phone Number** (`#CallqueuePhonenumber`)
  ![Manager Portal - Call Queues](https://github.com/user-attachments/assets/4f01108d-6990-4443-94e1-ee1b95556a73)
- **Conference Bridge - Direct Phone Number** (`#ConferencePhonenumber`)
  ![Manager Portal - Conferences](https://github.com/user-attachments/assets/8de29273-369c-47c9-ba97-5116197897fc)
- **Domain - DomainCallidNmbr** (`#DomainCallidNmbr`)
  ![Manager Portal - Edit Domain](https://github.com/user-attachments/assets/7d151699-1fa3-4be4-9ebb-92620480ba86)



## Deployment Instructions

To enable this script across all servers hosting the **Office Manager Portal**:

1. **Host the Script**  
   Upload `ompSortNumbersDropdown.js` to a location accessible to the portal module.

2. **Edit `PORTAL_EXTRA_JS` in UI Config**  
   While logged in as a Super user, go to Platform Settings on your Office Manager Portal, search for `PORTAL_EXTRA_JS` UI Configuration, click Add Config button, leave the Targets fields, enter the **URL** where the script is hosted on the Value field, and enter a description on the Notes field.
   ![Manager Portal - Platform Settings Add Config](https://github.com/user-attachments/assets/ae218d07-41ad-4166-9cd9-c09f16370fe1)


   Example:
   ```javascript
   https://yourdomain.com/assets/js/ompSortNumbersDropdown.js
