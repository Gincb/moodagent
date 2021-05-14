import './ListDesktop.scss';
import ListItem from '../ListItem/ListItem'
import Button from 'react-bootstrap/Button'

function ListDesktop(props) {
  return (
    <article className='list'>
      <h2 className='subheading'>{props.subheadingText}</h2>
      <ol>
        <ListItem listItemContent='If you already have a Moodagent account, continue to the next step. If not, follow the steps above to create your account using our mobile app.'/>
        <ListItem listItemContent='Download the Moodagent desktop app for Mac or Windows here:'/>
        <Button className='install-button' variant="light">macOS</Button>
        <Button className='install-button' variant="light">Windows</Button>
        <ListItem listItemContent='Install as directed on your device '/>
        <ListItem listItemContent='Launch the desktop app and lon in with your email and password. Hint: if you created an account using Apple or Facebook, you never had to choose a password. Just click `Forgot password?` to get a verification code and enter that along with your chosen password'/>
        <ListItem listItemContent='Start listening. Now that you`re reckoning the desktop app, you can explore and discover at the office , at home, or when your phone just needs a break.'/>
      </ol>
    </article>
  );
}

export default ListDesktop;
