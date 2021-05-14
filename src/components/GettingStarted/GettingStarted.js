import './GettingStarted.scss';
import ListMobile from '../ListMobile/ListMobile';
import ListDesktop from '../ListDesktop/ListDesktop'

function GettingStarted() {

  return (
    <section className='getting_started-wrapper'>
      <h1 className='heading'>Getting started</h1>
      <ListMobile subheadingText='Moodagent on mobile:'/>
      <ListDesktop subheadingText='Moodagent on desktop:'/>
    </section>
  );
}

export default GettingStarted;
