// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageItems, updateImages} = props

  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageItems

  const onChangeImages = () => {
    updateImages(imageUrl, imageAltText)
  }

  return (
    <li className="li">
      <button type="button" onClick={onChangeImages} className="btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
