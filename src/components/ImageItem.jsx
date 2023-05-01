export default function ImageItem( { image }) {
    return (
        <div className="image">
        <a href="" className="image__link">
            <img className="image__style"
            src={image.image} 
            alt={image.name} />
        </a>
        <p className="image_title">
            {image.place}
        </p>
    </div>
    );
  }