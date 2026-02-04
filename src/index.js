import './styles.css'
import { mainScreen } from './modules/mainScreen';

let tab = 'main';

if (tab === 'main') {
    mainScreen();
} else {
    subScreen();
}