import {useFonts} from './hooks/useFonts';
import Navigation from './navigation';

export default function App() {
  useFonts();
  return <Navigation />;
}
