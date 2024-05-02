import { useIsOnline } from 'react-use-is-online';

function Component() {
    
    // // useIsOnline();
    // const isOnline = useIsOnline();
    // if (isOnline) {
    //     return "You are online";
    // } else {
    //     return "offline";
    // }

    // without-hook

    if(window.navigator.onLine) {
        return "online";
    } else {
        return "offline";
    }
}

export default Component;