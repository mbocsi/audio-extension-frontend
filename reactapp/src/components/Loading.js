import Pulsating from './pulsating';
import './styles.css';
function Loading() {
  return (
    <Pulsating visible={true} width={35} height = {20}>
        Loading...
    </Pulsating>
  );
}

export default Loading;
