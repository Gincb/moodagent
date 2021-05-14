import './ImageThumbnails.scss';

function ImageThumbnails(props) {
  return (
    <article className={`image-thumbnail ${props.imageBG}`}>
      <img src={props.imageSrc} alt={props.imageAlt}/>
    </article>
  );
}

export default ImageThumbnails;
