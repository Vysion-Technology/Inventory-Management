// import {
//   UserIcon,
//   UserCircleIcon,
//   ShieldCheckIcon,
//   //cursorArrowRipple
  
// } from '@heroicons/react/outline';
import {MdViewInAr} from 'react-icons/md'

export const sideMenu = [
  
  
  {
    label: 'Inventory',
    Icon: MdViewInAr,
    to: '/',
    children: [
      {
        label: 'Conumable',
        // Icon: UserCircleIcon,
        to: 'Consumable',
      },
      {
        label: 'Non-Consumable',
        // Icon: ShieldCheckIcon,
        to: 'Nonconsumable',
      },
      {
        label: 'Services',
        // Icon: ShieldCheckIcon,
        to: 'Services',
      }
    ]   
    }
];
