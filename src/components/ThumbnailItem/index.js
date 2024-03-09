// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateGalleryImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const onChangeImage = () => {
    updateGalleryImage(id)
  }
  const isActiveTumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  return (
    <li className="card-container">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onChangeImage}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isActiveTumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
