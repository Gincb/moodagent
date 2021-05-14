import './GettingStarted.scss';
import ListMobile from '../ListMobile/ListMobile';
import ListDesktop from '../ListDesktop/ListDesktop';
import ImageThumbnails from './../ImageThumbnails/ImageThumbnails'
import imgMobile from '../../assets/Moodagent@2x.png';
import imgDesktop from '../../assets/Desktop-player.png'

function GettingStarted() {
  const mobileImg = imgMobile;
  const desktopImg = imgDesktop;

  return (
    <section className='getting_started-wrapper'>
      <h1 className='heading'>Getting started</h1>
      <article className='getting_started-flex'>
        <ListMobile subheadingText='Moodagent on mobile:'/>
        <ImageThumbnails imageSrc={mobileImg} imageAlt='Mobile app player' imageBG='mobile-bg'/>
        <ImageThumbnails imageSrc={desktopImg} imageAlt='Desktop app player' imageBG='desktop-bg'/>
        <ListDesktop subheadingText='Moodagent on desktop:'/>
      </article>
    </section>
  );
}

export default GettingStarted;
