import './ListMobile.scss';
import ListItem from '../ListItem/ListItem'
import Button from 'react-bootstrap/Button'

function ListMobile(props) {
  return (
    <article>
      <h2 className='subheading'>{props.subheadingText}</h2>
      <ol>
        <ListItem listItemContent='Download the Moodagent app here:'/>
        <Button className='install-button' variant="light">Install</Button>
        <ListItem listItemContent='Follow the on-screen instructions to create your account.'/>
        <ListItem listItemContent='Tells us what you like to listen to. You can choose from the suggested artists or search for anyone you want, as long as you pick at least three. You might want to pick even more - this will be the foudnation of your personalized experience on Moodagent'/>
        <ListItem listItemContent='Start listening. The more you listen, the more you ♥, the more moodagents you create, the better your personalized recommendation will become.'/>
      </ol>
    </article>
  );
}

export default ListMobile;
